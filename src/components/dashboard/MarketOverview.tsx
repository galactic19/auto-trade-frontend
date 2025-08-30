'use client';
import React, { useState, useEffect } from 'react';

interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changeRate: number;
}

export const MarketOverview: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketIndex[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 임시 더미 데이터
    const dummyData: MarketIndex[] = [
      { name: 'KOSPI', value: 2501.23, change: 15.67, changeRate: 0.63 },
      { name: 'KOSDAQ', value: 875.42, change: -5.23, changeRate: -0.59 },
      { name: 'KOSPI200', value: 335.12, change: 2.15, changeRate: 0.65 },
    ];

    setTimeout(() => {
      setMarketData(dummyData);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">시장 현황</h2>
      
      <div className="space-y-3">
        {marketData.map((index) => (
          <div key={index.name} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">{index.name}</span>
              <div className="text-right">
                <p className="font-bold text-lg">{index.value.toFixed(2)}</p>
                <p className={`text-sm ${
                  index.change >= 0 ? 'text-red-600' : 'text-blue-600'
                }`}>
                  {index.change >= 0 ? '▲' : '▼'} {Math.abs(index.change).toFixed(2)} 
                  ({index.changeRate >= 0 ? '+' : ''}{index.changeRate.toFixed(2)}%)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          마지막 업데이트: {new Date().toLocaleTimeString('ko-KR')}
        </p>
      </div>
    </div>
  );
};