'use client';
import React from 'react';

interface StockData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  logoColor: string;
}

const mockStockData: StockData[] = [
  // 상승 주식
  { symbol: '073790', name: '동원탭앤탭', price: '1,554', change: '+29.93%', changePercent: '+29.93%', isPositive: true, logoColor: 'bg-blue-500' },
  { symbol: '054540', name: '신영엠텍', price: '8,640', change: '+29.92%', changePercent: '+29.92%', isPositive: true, logoColor: 'bg-red-500' },
  { symbol: '049470', name: '에스지에이', price: '3,415', change: '+29.85%', changePercent: '+29.85%', isPositive: true, logoColor: 'bg-green-500' },
  { symbol: '362320', name: '청담글로벌', price: '9,200', change: '+23.66%', changePercent: '+23.66%', isPositive: true, logoColor: 'bg-gray-600' },
  { symbol: '250060', name: '모바스', price: '2,890', change: '+20.17%', changePercent: '+20.17%', isPositive: true, logoColor: 'bg-purple-500' },
  { symbol: '462310', name: '뉴키온즈', price: '7,740', change: '+19.63%', changePercent: '+19.63%', isPositive: true, logoColor: 'bg-gray-500' },

  // 하락 주식
  { symbol: '200230', name: '텔콘알에프제이', price: '2,290', change: '-29.97%', changePercent: '-29.97%', isPositive: false, logoColor: 'bg-red-500' },
  { symbol: '031860', name: '디아이시에스컴퍼니', price: '685', change: '-19.98%', changePercent: '-19.98%', isPositive: false, logoColor: 'bg-blue-500' },
  { symbol: '040350', name: '크레온에스지', price: '281', change: '-17.35%', changePercent: '-17.35%', isPositive: false, logoColor: 'bg-orange-500' },
  { symbol: '900100', name: '에비컨리크프레이어스', price: '804', change: '-17.11%', changePercent: '-17.11%', isPositive: false, logoColor: 'bg-pink-500' },
  { symbol: '178600', name: '대동고려삼 주식회사', price: '2,120', change: '-14.86%', changePercent: '-14.86%', isPositive: false, logoColor: 'bg-gray-600' },
  { symbol: '060570', name: '드림어스컴퍼니', price: '1,755', change: '-13.50%', changePercent: '-13.50%', isPositive: false, logoColor: 'bg-black' },
];

export const StockDashboard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 상승 주식 */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            상승 주식
            <span className="text-sm text-gray-500">›</span>
          </h3>
          <div className="space-y-4">
            {mockStockData.filter(stock => stock.isPositive).map((stock, index) => (
              <div key={index} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${stock.logoColor} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">
                      {stock.name.substring(0, 1)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{stock.name}</div>
                    <div className="text-xs text-gray-500">{stock.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">
                    {stock.price}<span className="text-xs text-gray-500 ml-1">KRW</span>
                  </div>
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                    {stock.changePercent}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="text-blue-500 text-sm font-medium hover:underline">
              일일 상승률이 가장 큰 모든 종목 보기 ›
            </button>
          </div>
        </div>

        {/* 하락 주식 */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            하락 주식
            <span className="text-sm text-gray-500">›</span>
          </h3>
          <div className="space-y-4">
            {mockStockData.filter(stock => !stock.isPositive).map((stock, index) => (
              <div key={index} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${stock.logoColor} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">
                      {stock.name.substring(0, 1)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{stock.name}</div>
                    <div className="text-xs text-gray-500">{stock.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">
                    {stock.price}<span className="text-xs text-gray-500 ml-1">KRW</span>
                  </div>
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                    {stock.changePercent}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="text-blue-500 text-sm font-medium hover:underline">
              일일 하락률이 가장 큰 모든 종목 보기 ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};