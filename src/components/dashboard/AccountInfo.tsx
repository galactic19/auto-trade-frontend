'use client';
import React, { useState, useEffect } from 'react';

interface AccountData {
  balance: number;
  totalAssets: number;
  profitLoss: number;
  profitRate: number;
  positions: number;
}

export const AccountInfo: React.FC = () => {
  const [account, setAccount] = useState<AccountData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // 실시간 계좌 정보 조회 (5초마다)
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await fetch('/api/account', {
          credentials: 'include',
        });
        
        if (response.ok) {
          const data = await response.json();
          setAccount(data);
          setLastUpdate(new Date());
        }
      } catch (error) {
        console.error('Failed to fetch account data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // 초기 로드
    fetchAccountData();

    // 5초마다 업데이트
    const interval = setInterval(fetchAccountData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  // 임시 더미 데이터 (API 구현 전)
  const dummyAccount: AccountData = account || {
    balance: 10000000,
    totalAssets: 12500000,
    profitLoss: 2500000,
    profitRate: 25.0,
    positions: 5,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">계좌 정보</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-500">
            실시간 업데이트: {lastUpdate.toLocaleTimeString('ko-KR')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">예수금</p>
          <p className="text-lg font-semibold text-gray-900">
            {dummyAccount.balance.toLocaleString('ko-KR')}원
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">총 평가금액</p>
          <p className="text-lg font-semibold text-gray-900">
            {dummyAccount.totalAssets.toLocaleString('ko-KR')}원
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">평가손익</p>
          <p className={`text-lg font-semibold ${
            dummyAccount.profitLoss >= 0 ? 'text-red-600' : 'text-blue-600'
          }`}>
            {dummyAccount.profitLoss >= 0 ? '+' : ''}{dummyAccount.profitLoss.toLocaleString('ko-KR')}원
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">수익률</p>
          <p className={`text-lg font-semibold ${
            dummyAccount.profitRate >= 0 ? 'text-red-600' : 'text-blue-600'
          }`}>
            {dummyAccount.profitRate >= 0 ? '+' : ''}{dummyAccount.profitRate.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          보유 종목: <span className="font-semibold text-gray-900">{dummyAccount.positions}개</span>
        </p>
      </div>
    </div>
  );
};