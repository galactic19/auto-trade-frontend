'use client';
import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  bgGradient: string;
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: '실시간 시장 분석',
      description: '전 세계 금융 시장 데이터를 실시간으로 수집하고 분석하여 최적의 매매 시점을 포착합니다. 고성능 알고리즘이 밀리초 단위로 시장 변화를 감지합니다.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      colorClass: 'bg-blue-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      title: '자동 매매 실행',
      description: '미리 설정된 전략과 리스크 매개변수에 따라 자동으로 매매를 실행합니다. 감정에 흔들리지 않는 일관된 투자로 안정적인 수익을 추구합니다.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      colorClass: 'bg-blue-500',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      title: '스마트 리스크 관리',
      description: '다차원 리스크 분석을 통해 포트폴리오를 보호합니다. 손실 제한, 분산 투자, 변동성 관리 등 체계적인 리스크 관리를 제공합니다.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      colorClass: 'bg-red-600',
      bgGradient: 'from-red-50 to-red-100'
    }
  ];

  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            주요 기능
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            더 스마트한 투자를 위한 솔루션
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            최신 AI 기술과 빅데이터 분석을 통해 시장의 패턴을 파악하고 수익성 높은 투자 전략을 제공합니다.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`relative bg-gradient-to-br ${feature.bgGradient} p-8 rounded-xl`}
              >
                <div className="absolute top-6 left-6">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-md ${feature.colorClass} text-white`}>
                    {feature.icon}
                  </div>
                </div>
                <div className="mt-16">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};