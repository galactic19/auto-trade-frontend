'use client';
import React from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { DemoSection } from './DemoSection';
import { TradingViewChart } from './TradingViewChart';

export const LandingPage: React.FC = () => {
  return (
    <main className="flex-1 bg-black">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <div className="bg-gradient-to-b from-slate-800 to-black">
        <FeaturesSection />
      </div>
      
      {/* Demo Section */}
      <div className="bg-gradient-to-b from-black to-slate-900">
        <DemoSection />
      </div>
      
      {/* TradingView Chart Section */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-4">
              실시간 주식 시세
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              시장 동향을 한눈에
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI 기반 자동매매 시스템으로 실시간 주식 시세를 모니터링하고<br />
              데이터 기반의 투자 결정을 내려보세요.
            </p>
          </div>
          
          <TradingViewChart />
          
          {/* Additional Features */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>실시간 업데이트</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>AI 시세 분석</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>자동 거래 알림</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};