'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 및 브랜드 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TradingView
              </h1>
            </div>
            
            {/* 네비게이션 메뉴 - TradingView 스타일 */}
            <nav className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <a
                  href="#products"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  프로덕트
                </a>
                <a
                  href="#community"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  커뮤니티
                </a>
                <a
                  href="#markets"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  마켓
                </a>
                <a
                  href="#news"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  뉴스
                </a>
                <a
                  href="#brokers"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  브로커
                </a>
                <a
                  href="#more"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  더보기
                </a>
              </div>
            </nav>
          </div>

          {/* 오른쪽 메뉴 */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                {/* 검색 아이콘 */}
                <button className="text-white/90 hover:text-white p-2 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                  </svg>
                </button>

                {/* 알림 아이콘 */}
                <button className="text-white/90 hover:text-white p-2 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>

                {/* 언어 선택 */}
                <div className="flex items-center text-sm text-white/90">
                  🇰🇷 KO
                </div>

                {/* 사용자 정보 */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* 로그아웃 버튼 */}
                <button
                  onClick={handleLogout}
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                {/* 검색 */}
                <button className="hidden md:flex items-center space-x-2 px-3 py-1.5 text-sm text-white/70 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span>찾기 (Ctrl+K)</span>
                </button>
                
                {/* 언어 선택 */}
                <div className="flex items-center text-sm text-white/90">
                  🇰🇷 KO
                </div>

                {/* 지금 시작 버튼 */}
                <button 
                  onClick={() => {
                    window.location.href = '/login';
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  지금 시작
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;