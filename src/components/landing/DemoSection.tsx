'use client';
import React from 'react';

export const DemoSection: React.FC = () => {
  return (
    <div id="demo" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
            미리보기
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            실제 대시보드 화면
          </p>
        </div>
        
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Browser mockup header */}
            <div className="bg-slate-800 px-6 py-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-sm text-white">Stock Trading Dashboard</div>
            </div>
            
            {/* Dashboard preview */}
            <div className="p-8 bg-gray-100 min-h-96">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Sample stat cards */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">총 자산</p>
                  <p className="text-2xl font-bold text-gray-900">₩12,500,000</p>
                  <p className="text-sm text-green-600">+2.34%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">일일 손익</p>
                  <p className="text-2xl font-bold text-gray-900">₩+234,567</p>
                  <p className="text-sm text-green-600">+5.67%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">승률</p>
                  <p className="text-2xl font-bold text-gray-900">73.2%</p>
                  <p className="text-sm text-green-600">+1.2%</p>
                </div>
              </div>
              
              {/* Chart placeholder */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">실시간 포트폴리오</h3>
                <div className="h-48 bg-gradient-to-r from-emerald-100 to-blue-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-gray-500">실시간 차트 영역</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Login prompt */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              더 많은 기능을 이용하시려면 로그인해주세요
            </p>
            <button 
              onClick={() => {
                const loginSection = document.getElementById('login-section');
                loginSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              지금 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};