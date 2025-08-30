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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
            {stat.value}
          </div>
          <div className="text-sm font-medium text-white/60 mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};