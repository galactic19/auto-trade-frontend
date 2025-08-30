'use client';
import React from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { DemoSection } from './DemoSection';
import { LoginForm } from '@/components/auth';

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
      
      {/* Login Section */}
      <div id="login-section" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase mb-4">
              시작하기
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              지금 바로 시작하세요
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              간단한 로그인으로 AI 자동매매 시스템을 경험해보세요.<br />
              최고의 트레이딩을 위한 첫 걸음을 내딛어 보세요.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <LoginForm />
          </div>
          
          {/* Additional CTA Elements */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>실시간 데이터</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>AI 기반 분석</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>24/7 자동거래</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};