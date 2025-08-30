'use client';
import React from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { DemoSection } from './DemoSection';
import { LoginForm } from '@/components/auth';

export const LandingPage: React.FC = () => {
  return (
    <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Demo Section */}
      <DemoSection />
      
      {/* Login Section */}
      <div id="login-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              시작하기
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              지금 바로 시작하세요
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              간단한 로그인으로 AI 자동매매 시스템을 경험해보세요
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};