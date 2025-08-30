'use client';
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LandingPage } from '@/components/landing';
import { Dashboard } from '@/components/dashboard';
import { LoadingSpinner, ErrorMessage } from '@/components/common';

const Main = () => {
  const { isAuthenticated, isLoading, error } = useAuth();

  // 초기 로딩 상태
  if (isLoading) {
    return <LoadingSpinner message="시스템 초기화 중..." size="md" />;
  }

  // 오류 상태  
  if (error) {
    return (
      <ErrorMessage 
        title="연결 오류"
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  // 인증 상태에 따른 컴포넌트 렌더링
  // 로그인 전: 랜딩 페이지 (메인 컨텐츠 + 로그인 폼)
  // 로그인 후: 대시보드
  return isAuthenticated ? <Dashboard /> : <LandingPage />;
};

export default Main;