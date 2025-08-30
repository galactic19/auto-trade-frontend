'use client';
import React from 'react';
import { StatsDisplay } from './StatsDisplay';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">AI 기반</span>
                <span className="block text-blue-600">자동매매 시스템</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                전문적인 알고리즘과 머신러닝 기술로 스마트하고 안전한 투자를 시작하세요. 
                24시간 시장을 모니터링하여 최적의 투자 기회를 놓치지 않습니다.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a 
                    href="#features" 
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    서비스 알아보기
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button 
                    onClick={() => {
                      const loginForm = document.getElementById('login-section');
                      loginForm?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    로그인하고 시작하기
                  </button>
                </div>
              </div>

              {/* Stats */}
              <StatsDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};