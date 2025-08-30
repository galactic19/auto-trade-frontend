'use client';
import React from 'react';
import { AccountInfo } from './AccountInfo';
import { TradingControl } from './TradingControl';
import { MarketOverview } from './MarketOverview';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Stock Trading Dashboard</h1>
          <p className="text-gray-600 mt-2">실시간 자동매매 시스템</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 계좌 정보 - 전체 너비 */}
          <div className="lg:col-span-3">
            <AccountInfo />
          </div>

          {/* 거래 제어 */}
          <div className="lg:col-span-2">
            <TradingControl />
          </div>

          {/* 시장 현황 */}
          <div className="lg:col-span-1">
            <MarketOverview />
          </div>
        </div>
      </div>
    </div>
  );
};