'use client';

import React, {useRef, useState} from 'react';
import {useRouter} from 'next/navigation';
import {useAuth} from '@/contexts/AuthContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { toast } from 'sonner';

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginFormErrors {
  username?: string;
  password?: string;
  general?: string;
}

const LoginForm = () => {
  const router = useRouter();
  const {login, isLoading} = useAuth();

  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const focusAndSelect = (el?: HTMLInputElement | null) => {
    if (!el) return;
    el.focus();
    const len = el.value.length;
    requestAnimationFrame(() => {
      try {
        el.setSelectionRange(0, len);
      } catch {
        // 환경에 따라 setSelectionRange 미지원일 수 있음
      }
    });
  };

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = '사용자명을 입력해주세요.';
    } else if (formData.username.length < 2) {
      newErrors.username = '사용자명은 최소 2자 이상이어야 합니다.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 1) {
      newErrors.password = '비밀번호는 최소 1자 이상이어야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // 입력 중 해당 필드 에러 제거
    if (errors[name as keyof LoginFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      toast.error('아이디 및 비번을 확인하세요.');
      // 어떤 필드가 비었는지 기준으로 포커스 이동
      if (!formData.username.trim()) {
        focusAndSelect(usernameRef.current);
      } else if (!formData.password) {
        focusAndSelect(passwordRef.current);
      } else {
        focusAndSelect(usernameRef.current);
      }
      return;
    }

    setErrors({});

    try {
      await login(formData.username.trim(), formData.password);
      // 로그인 성공시에만 메인 페이지로 리다이렉트
      router.replace('/'); // push 대신 replace 사용
    } catch (error) {
      console.error('로그인 실패:', error);
      const errorMessage = error instanceof Error ? error.message : '로그인에 실패했습니다. 사용자명과 비밀번호를 확인해주세요.';
      setErrors({
        general: errorMessage,
      });
      // shadcn(sonner) 토스트 및 포커스 이동
      toast.error('아이디 및 비번을 확인하세요.');
      focusAndSelect(usernameRef.current);
    }
  };

  const handleDemoLogin = async () => {
    setFormData({
      username: 'admin',
      password: '1',
    });
    setErrors({});

    try {
      await login('admin', '1');
      router.replace('/'); // push 대신 replace 사용
    } catch (error) {
      console.error('데모 로그인 실패:', error);
      const errorMessage = error instanceof Error ? error.message : '데모 로그인에 실패했습니다. 잠시 후 다시 시도해주세요.';
      setErrors({
        general: errorMessage,
      });
      toast.error('아이디 및 비번을 확인하세요.');
      focusAndSelect(usernameRef.current);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 일반 에러 메시지 */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
              <p className="text-sm text-red-700">{errors.general}</p>
            </div>
          </div>
        )}

        {/* 사용자명 입력 */}
        <Input
          ref={usernameRef}
          label="사용자명"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          placeholder="사용자명을 입력하세요"
          leftIcon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          }
          disabled={isLoading}
          autoComplete="username"
          required
        />

        {/* 비밀번호 입력 */}
        <Input
          ref={passwordRef}
          label="비밀번호"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="비밀번호를 입력하세요"
          leftIcon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          }
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L12 12m-3.528-3.528l1.414-1.414M12 12l2.122 2.122m0 0l1.414 1.414M12 12L9.878 9.878"/>
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              )}
            </button>
          }
          disabled={isLoading}
          autoComplete="current-password"
          required
        />

        {/* 로그인 버튼 */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isLoading}
          disabled={isLoading}
        >
          로그인
        </Button>

        {/* 구분선 */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"/>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">또는</span>
          </div>
        </div>

        {/* 데모 로그인 버튼 */}
        <Button
          type="button"
          variant="outline"
          size="lg"
          fullWidth
          onClick={handleDemoLogin}
          disabled={isLoading}
        >
          데모 계정으로 로그인
        </Button>
      </form>

      {/* 도움말 */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          데모 계정: <span className="font-medium">admin</span> / <span className="font-medium">1</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;