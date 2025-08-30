'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { StatsDisplay } from './StatsDisplay';

export const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/login');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Look first</span>
              <span className="block text-white/90">/ Then leap.</span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              최고의 트레이딩을 위해서는 연구와 노력이 필요합니다.
            </p>
            
            {/* CTA Button */}
            <div className="mt-12">
              <button 
                onClick={handleStartClick}
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                지금 시작하기
              </button>
            </div>

            {/* Additional text */}
            <p className="mt-6 text-white/60 text-sm">
              영원히 30, 신용카드 필요 없음
            </p>

            {/* Stats Display */}
            <div className="mt-16">
              <StatsDisplay />
            </div>
          </div>

          {/* Right Content - Figure */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main figure representation */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Circular platform */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-12 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-gradient-to-r from-purple-400/40 to-blue-400/40 rounded-full blur-lg" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-purple-300/50 to-blue-300/50 rounded-full" />
                
                {/* Figure silhouette */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-40 bg-gradient-to-b from-white/20 to-white/10 rounded-t-full backdrop-blur-sm animate-float" />
                
                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
                <div className="absolute top-20 right-16 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
                <div className="absolute top-32 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
                <div className="absolute top-16 right-8 w-5 h-5 bg-pink-400/40 rounded-full animate-bounce" style={{animationDelay: '2s'}} />
                
                {/* Chart-like elements */}
                <div className="absolute top-24 right-20 w-16 h-1 bg-gradient-to-r from-green-400/60 to-transparent rounded-full" />
                <div className="absolute top-28 right-18 w-20 h-1 bg-gradient-to-r from-blue-400/60 to-transparent rounded-full" />
                <div className="absolute top-32 right-16 w-12 h-1 bg-gradient-to-r from-purple-400/60 to-transparent rounded-full" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right corner element */}
      <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">킹</span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">스콧 &ldquo;킹드&rdquo; 포티트</div>
          <div className="text-white/60 text-xs">예상 박살 우주비행사</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};