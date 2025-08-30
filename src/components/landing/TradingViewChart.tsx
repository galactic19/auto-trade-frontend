'use client';
import React, { useState } from 'react';

interface MarketData {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  currency: string;
  isPositive: boolean;
  logo: string;
  country?: string;
}

const mockMarketData: MarketData[] = [
  {
    id: 'kosdaq',
    name: '코스닥',
    symbol: 'KOSDAQ',
    price: '796.91',
    change: '-0.19%',
    changePercent: '-0.19%',
    currency: 'KRW',
    isPositive: false,
    logo: '코',
    country: 'KR'
  },
  {
    id: 'nasdaq100',
    name: '나스닥 100',
    symbol: 'NDX',
    price: '23,415.42',
    change: '-1.22%',
    changePercent: '-1.22%',
    currency: 'USD',
    isPositive: false,
    logo: '100',
    country: 'US'
  },
  {
    id: 'nikkei225',
    name: '일본 225',
    symbol: 'NI225',
    price: '42,718.42',
    change: '-0.26%',
    changePercent: '-0.26%',
    currency: 'JPY',
    isPositive: false,
    logo: '225',
    country: 'JP'
  },
  {
    id: 'sse',
    name: 'SSE 컴포지트',
    symbol: '000001',
    price: '3,857.9274',
    change: '+0.37%',
    changePercent: '+0.37%',
    currency: 'CNY',
    isPositive: true,
    logo: 'S',
    country: 'CN'
  },
  {
    id: 'ftse100',
    name: 'FTSE 100',
    symbol: 'UKX',
    price: '9,187.34',
    change: '-0.32%',
    changePercent: '-0.32%',
    currency: 'GBP',
    isPositive: false,
    logo: '🇬🇧',
    country: 'GB'
  }
];

const generateChartPath = () => {
  const points: string[] = [];
  let currentY = 150; // 중간 시작점
  
  for (let i = 0; i <= 50; i++) {
    const x = (i / 50) * 400;
    // 하락하는 추세 생성
    currentY += (Math.random() - 0.3) * 8;
    currentY = Math.max(50, Math.min(200, currentY));
    points.push(`${x},${currentY}`);
  }
  
  return `M ${points.join(' L ')}`;
};

export const TradingViewChart: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const chartPath = generateChartPath();

  const mainStock = {
    name: '코스피',
    symbol: 'KOSPI',
    price: '3,186.01',
    change: '-0.32%',
    isPositive: false
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-7xl mx-auto">
      <div className="p-4 bg-gray-50 border-b">
        <h2 className="text-lg font-semibold text-gray-800">시장 요약</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* 메인 차트 영역 */}
        <div className="flex-1 p-6">
          {/* 메인 주식 정보 */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">코</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600">{mainStock.symbol}</span>
                <span className="text-gray-400">—</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">{mainStock.price}</span>
                <span className="text-sm text-gray-500">KRW</span>
                <span className={`text-sm font-medium ${mainStock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {mainStock.change}
                </span>
              </div>
            </div>
          </div>

          {/* 차트 영역 */}
          <div className="relative bg-gray-50 rounded-lg p-4 h-64">
            <svg className="w-full h-full" viewBox="0 0 400 250">
              {/* 격자 */}
              <defs>
                <pattern id="grid" width="40" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 25" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* 차트 라인 */}
              <path
                d={chartPath}
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                className="drop-shadow-sm"
              />
              
              {/* 영역 채우기 */}
              <path
                d={`${chartPath} L 400,250 L 0,250 Z`}
                fill="url(#gradient)"
                opacity="0.1"
              />
              
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            
            {/* 시간 라벨 */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
              <span>09:00</span>
              <span>09:30</span>
              <span>10:00</span>
              <span>10:30</span>
              <span>11:00</span>
              <span>11:30</span>
              <span>12:00</span>
              <span>12:30</span>
              <span>13:00</span>
              <span>13:30</span>
              <span>14:00</span>
              <span>14:30</span>
              <span>15:00</span>
            </div>
          </div>

          {/* 차트 하단 정보 */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>이전 종가: 3,196.32</span>
            <span className="text-red-600">3,186.01</span>
          </div>
        </div>

        {/* 우측 시장 정보 */}
        <div className="w-full lg:w-80 bg-gray-50 p-6">
          {/* 검색바 */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="슈퍼차트에서 보기"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* 시장 지수 목록 */}
          <div className="space-y-3">
            {mockMarketData.map((market) => (
              <div key={market.id} className="flex items-center justify-between py-2 px-3 hover:bg-white rounded-lg cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {market.logo}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 text-sm">{market.name}</div>
                    <div className="text-xs text-gray-500">{market.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-800 text-sm">
                    {market.price}
                    <span className="text-xs text-gray-500 ml-1 uppercase">{market.currency}</span>
                  </div>
                  <div className={`text-xs font-medium ${market.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {market.changePercent}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 추가 정보 */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 space-y-1">
              <p>• 실시간 데이터는 15분 지연됩니다</p>
              <p>• 모든 가격은 해당 통화로 표시됩니다</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};