'use client';
import React, { useState } from 'react';

export const TradingControl: React.FC = () => {
  const [isAutoTrading, setIsAutoTrading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleAutoTrading = async () => {
    setIsLoading(true);
    try {
      // API 호출 예정
      await new Promise(resolve => setTimeout(resolve, 1000)); // 임시 딜레이
      setIsAutoTrading(!isAutoTrading);
    } catch (error) {
      console.error('Failed to toggle auto trading:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">거래 제어</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-700">자동매매</h3>
            <p className="text-sm text-gray-500 mt-1">
              {isAutoTrading ? '자동매매가 실행 중입니다' : '자동매매가 중지되어 있습니다'}
            </p>
          </div>
          <button
            onClick={handleToggleAutoTrading}
            disabled={isLoading}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAutoTrading ? 'bg-emerald-600' : 'bg-gray-300'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAutoTrading ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            포트폴리오 조회
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            거래 내역
          </button>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
            설정
          </button>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};