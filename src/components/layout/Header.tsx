'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoginButton } from '@/components/ui/Card';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 및 브랜드 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-emerald-400">
                AutoTrade Pro
              </h1>
            </div>
            
            {/* 네비게이션 메뉴 */}
            {isAuthenticated && (
              <nav className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <a
                    href="#dashboard"
                    className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    대시보드
                  </a>
                  <a
                    href="#trading"
                    className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    자동매매
                  </a>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    포트폴리오
                  </a>
                  <a
                    href="#history"
                    className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    거래내역
                  </a>
                  <a
                    href="#settings"
                    className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    설정
                  </a>
                </div>
              </nav>
            )}
          </div>

          {/* 사용자 메뉴 */}
          <div className="flex items-center">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                {/* 알림 아이콘 */}
                <button className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-slate-700 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>

                {/* 사용자 정보 */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-white">{user.username}</div>
                    <div className="text-xs text-gray-400">투자자</div>
                  </div>
                </div>

                {/* 로그아웃 버튼 */}
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="hidden md:block text-sm text-gray-400">
                  AI 기반 자동매매 시스템
                </div>
                <LoginButton variant="outline" size="sm" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      {isAuthenticated && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <a
              href="#dashboard"
              className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              대시보드
            </a>
            <a
              href="#trading"
              className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              자동매매
            </a>
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              포트폴리오
            </a>
            <a
              href="#history"
              className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              거래내역
            </a>
            <a
              href="#settings"
              className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              설정
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;