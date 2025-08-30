'use client';
import React from 'react';

interface Stat {
  value: string;
  label: string;
}

export const StatsDisplay: React.FC = () => {
  const stats: Stat[] = [
    { value: '99.9%', label: '시스템 가동률' },
    { value: '24/7', label: '무중단 모니터링' },
    { value: '15.2%', label: '평균 수익률' },
  ];

  return (
    <div className="mt-12 grid grid-cols-3 gap-8 lg:mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-extrabold text-blue-600">
            {stat.value}
          </div>
          <div className="text-sm font-medium text-gray-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};