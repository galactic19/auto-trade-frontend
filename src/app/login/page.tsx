'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/forms/LoginForm';

const LoginPage = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  // 이미 로그인된 사용자는 메인 페이지로 리다이렉트
  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/'); // push 대신 replace 사용하여 뒤로가기 시 로그인 페이지로 돌아오지 않게 함
    }
  }, [isAuthenticated, isLoading, router]);

  // 로딩 중이거나 이미 인증된 사용자에게는 로딩 화면 표시
  if (isLoading || isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-600">로그인 확인 중...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* 왼쪽 브랜딩 섹션 */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 py-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-6">
              AutoTrade Pro
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              AI 기반 자동매매 시스템으로 스마트한 투자를 시작하세요
            </p>
            
            {/* 특징 리스트 */}
            <div className="space-y-4">
              <div className="flex items-center text-emerald-100">
                <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24시간 실시간 시장 모니터링</span>
              </div>
              <div className="flex items-center text-emerald-100">
                <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI 기반 매매 신호 생성</span>
              </div>
              <div className="flex items-center text-emerald-100">
                <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>체계적인 리스크 관리</span>
              </div>
              <div className="flex items-center text-emerald-100">
                <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>높은 수익률과 안정성</span>
              </div>
            </div>

            {/* 통계 */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-emerald-200">시스템 가동률</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15.2%</div>
                <div className="text-sm text-emerald-200">평균 수익률</div>
              </div>
            </div>
          </div>
        </div>

        {/* 배경 패턴 */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-300 rounded-full opacity-10"></div>
      </div>

      {/* 오른쪽 로그인 폼 섹션 */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* 모바일용 로고 */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-600">AutoTrade Pro</h1>
            <p className="mt-2 text-gray-600">AI 자동매매 시스템</p>
          </div>

          {/* 뒤로가기 버튼 */}
          <div className="mb-6">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              메인 페이지로 돌아가기
            </button>
          </div>

          {/* 제목 */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              로그인
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              계정에 로그인하여 자동매매 시스템을 이용하세요
            </p>
          </div>

          {/* 로그인 폼 */}
          <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
            <LoginForm />
          </div>

          {/* 추가 정보 */}
          <div className="mt-6">
            <div className="text-center">
              <p className="text-xs text-gray-500">
                로그인하시면{' '}
                <a href="#" className="text-emerald-600 hover:text-emerald-500">
                  이용약관
                </a>
                {' '}및{' '}
                <a href="#" className="text-emerald-600 hover:text-emerald-500">
                  개인정보처리방침
                </a>
                에 동의하는 것으로 간주됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;