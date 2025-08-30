'use client';

import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { AuthState, AuthContextType, User } from '@/types/auth';

// Auth state reducer
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_ERROR' };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true, // 초기 로딩 상태
  error: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

// Context 생성
const AuthContext = createContext<AuthContextType | null>(null);

// Token 관리 클래스
class TokenManager {
  private accessToken: string | null = null;

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  clearTokens() {
    this.accessToken = null;
  }
}

const tokenManager = new TokenManager();

// Provider 컴포넌트
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 토큰 갱신 함수
  const refreshAuth = useCallback(async () => {
    try {
      const response = await fetch('/api/refresh', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        tokenManager.setAccessToken(data.access);
        
        // 사용자 정보 조회
        const userResponse = await fetch('/api/me', {
          headers: {
            'Authorization': `Bearer ${data.access}`,
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
          return;
        }
      }

      // 토큰 갱신 실패시
      tokenManager.clearTokens();
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      tokenManager.clearTokens();
      dispatch({ type: 'LOGOUT' });
    }
  }, []);

  // 로그인 함수
  const login = useCallback(async (username: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Access token은 응답 헤더에서 가져오거나 응답 body에서 가져올 수 있음
        const accessToken = response.headers.get('x-access-token') || data.access;
        
        if (accessToken) {
          tokenManager.setAccessToken(accessToken);
          
          // 사용자 정보 조회
          const userResponse = await fetch('/api/me', {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          if (userResponse.ok) {
            const userData = await userResponse.json();
            dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
            return; // 성공시 정상 종료
          }
        }

        // Access token을 받지 못했지만 로그인이 성공한 경우
        // refresh token으로 새 access token을 요청
        await refreshAuth();
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || '로그인 실패';
        dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
        throw new Error(errorMessage); // 로그인 실패시 에러 발생
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '네트워크 오류가 발생했습니다.';
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
      throw new Error(errorMessage); // 에러를 다시 던져서 호출자가 처리할 수 있게 함
    }
  }, [refreshAuth]);

  // 로그아웃 함수
  const logout = useCallback(async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('로그아웃 요청 실패:', error);
    } finally {
      tokenManager.clearTokens();
      dispatch({ type: 'LOGOUT' });
    }
  }, []);

  // 초기 인증 상태 확인
  useEffect(() => {
    refreshAuth().finally(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    });
  }, [refreshAuth]);

  // 토큰 자동 갱신 (10분마다)
  useEffect(() => {
    if (!state.isAuthenticated) return;

    const interval = setInterval(() => {
      refreshAuth();
    }, 10 * 60 * 1000); // 10분

    return () => clearInterval(interval);
  }, [state.isAuthenticated, refreshAuth]);

  const contextValue: AuthContextType = {
    ...state,
    login,
    logout,
    refreshAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook for consuming auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Export token manager for API calls
export { tokenManager };