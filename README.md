# Auto Trade Frontend

React/Next.js 기반의 자동매매 시스템 프론트엔드 애플리케이션

## 🚀 기술 스택

- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: JWT-based with Django backend
- **Build Tool**: Turbopack

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (포트 3000, 사용 중이면 3001)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 코드 품질 검사
npm run lint
```

## 🌍 환경 설정

프로젝트 루트에 `.env` 파일을 생성하세요:

```env
DEV_SERVER=http://127.0.0.1:8000
```

## 🏗️ 주요 기능

- **랜딩 페이지**: TradingView 스타일의 현대적인 디자인
- **사용자 인증**: JWT 토큰 기반 로그인/로그아웃
- **주식 대시보드**: 실시간 주식 데이터 시각화
- **반응형 디자인**: 모바일 친화적 UI/UX
- **다크 테마**: 트레이딩에 최적화된 다크 모드

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── api/
│   │   └── login/          # 로그인 API 라우트
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
└── components/
    ├── auth/              # 인증 관련 컴포넌트
    ├── landing/           # 랜딩 페이지 컴포넌트
    └── layout/            # 레이아웃 컴포넌트
```

## 🔧 개발 가이드

### 인증 플로우

1. 사용자가 로그인 폼에 credentials 입력
2. Next.js API 라우트(`/api/login`)로 전송
3. Django backend로 인증 요청 전달
4. JWT 토큰 수신 및 HttpOnly 쿠키 저장
5. 성공 시 메인 대시보드로 이동

### 컴포넌트 개발

- TypeScript strict mode 사용
- Tailwind CSS 유틸리티 클래스 활용
- 컴포넌트별 명확한 책임 분리
- Props interface 정의 필수

## 🔗 관련 저장소

- **Backend**: [auto-trade-backend](https://github.com/galactic19/auto-trade-backend)

## 📝 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.
