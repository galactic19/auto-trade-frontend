'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 푸터 콘텐츠 */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TradingView</h3>
              </div>
              <p className="text-gray-400 mb-4">
                AI 기반 자동매매 시스템으로 스마트하고 안전한 투자를 제공합니다.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* 서비스 */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">서비스</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    자동매매 전략
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    포트폴리오 관리
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    리스크 분석
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    백테스팅
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    API 연동
                  </a>
                </li>
              </ul>
            </div>

            {/* 지원 */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">지원</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    도움말 센터
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    API 문서
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    커뮤니티
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    연락처
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    상태 페이지
                  </a>
                </li>
              </ul>
            </div>

            {/* 회사 정보 */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">회사</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    투자 정보
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    채용 정보
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    보도자료
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    파트너십
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-white/10"></div>

        {/* 하단 정보 */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <p>&copy; 2024 AutoTrade Pro. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  이용약관
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  개인정보처리방침
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  쿠키 정책
                </a>
              </div>
            </div>

            {/* 위험 고지 */}
            <div className="mt-4 md:mt-0">
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <p className="text-xs text-gray-400">
                  <span className="text-yellow-400 font-semibold">⚠️ 투자 위험 고지:</span>
                  모든 투자에는 원금 손실 위험이 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 라이선스 및 규제 정보 */}
        <div className="border-t border-white/10 py-4">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              금융투자업 신고번호: 제2024-001호 | 대표자: AutoTrade | 
              사업자등록번호: 123-45-67890 | 
              <span className="text-blue-400">고객지원: 1588-0000</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;