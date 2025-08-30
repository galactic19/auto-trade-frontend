# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Stock trading frontend application built with Next.js 15.5 and TypeScript, designed to interface with a Django backend API for automated trading functionality.

## Development Commands

```bash
# Start development server with Turbopack (port 3000, fallback to 3001 if occupied)
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run ESLint for code quality checks
npm run lint

# TypeScript type checking (no dedicated script, use directly)
npx tsc --noEmit
```

## Architecture & Key Components

### Authentication Flow
The application implements JWT-based authentication with the Django backend:

1. **Login Endpoint**: `/api/login` (Next.js API route at `src/app/api/login/route.ts`)
   - Accepts `username` and `password`
   - Forwards credentials to Django backend at `${DEV_SERVER}/api/v1/token/`
   - Django returns tokens with keys: `access` and `refresh` (not `accessToken`/`refreshToken`)
   - Stores `refresh` token as HttpOnly cookie (`refresh_token`)
   - Returns success response to client

2. **Frontend Login Component**: `src/app/page.tsx`
   - Hardcoded credentials for development: `username: 'admin', password: '1'`
   - Handles loading states and error messages in Korean
   - Three states: idle ("로그인 하세요"), loading ("로그인 중..."), success ("로그인 성공")

### Environment Configuration
Create a `.env` file in the project root:
```
DEV_SERVER=http://127.0.0.1:8000
```

This variable is required for the backend API connection. The login route will return a 500 error if not set.

### Token Response Format
The Django backend returns JWT tokens with specific field names that differ from typical conventions:
- Backend response: `{ "access": "...", "refresh": "..." }`
- The API route destructures with aliases: `const { access: accessToken, refresh: refreshToken }`

### Project Structure
```
src/
├── app/
│   ├── api/
│   │   └── login/
│   │       └── route.ts    # Next.js API route for authentication
│   ├── layout.tsx          # Root layout with Korean language support
│   ├── page.tsx            # Main login page component
│   └── globals.css         # Global styles with Tailwind
└── modules/
    └── login/
        └── ui/             # Login-related UI components (to be developed)
```

### Technical Stack
- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono (Google Fonts)
- **Build Tool**: Turbopack (enabled by default)
- **Language Support**: Korean (`lang="ko"` in HTML)

### Important Implementation Details

1. **Cookie Configuration**: 
   - Refresh tokens stored as HttpOnly cookies
   - 14-day expiration
   - SameSite=lax for CSRF protection
   - Secure flag enabled in production

2. **Error Handling**:
   - 401: Authentication failure
   - 502: Token response format mismatch
   - 500: Missing environment variables

3. **Path Aliases**:
   - `@/*` maps to `./src/*` directory

4. **TypeScript Configuration**:
   - Target: ES2017
   - Strict mode enabled
   - Module resolution: bundler
   - JSX: preserve