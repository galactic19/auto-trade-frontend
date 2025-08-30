'use server';

import { NextResponse } from 'next/server';

interface LoginRequestBody {
  username: unknown;
  password: unknown;
}

interface TokenResponse {
  access: string;
  refresh: string;
}

const LOGIN_URL = `${process.env.DEV_SERVER}/api/v1/token/`;

export async function POST(req: Request) {
  // 환경변수 체크
  if (!process.env.DEV_SERVER) {
    console.error('DEV_SERVER 환경변수가 설정되지 않았습니다.');
    return NextResponse.json({ message: '서버 설정 오류' }, { status: 500 });
  }

  // 요청 바디 파싱 + 최소한의 타입 가드
  const { username, password } = (await req.json()) as LoginRequestBody;
  const body = {
    username: String(username ?? ''),
    password: String(password ?? ''),
  };

  if (!body.username || !body.password) {
    return NextResponse.json({ message: '아이디/비밀번호가 필요합니다.' }, { status: 400 });
  }

  // 인증 서버 호출
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return NextResponse.json({ message: '로그인 실패' }, { status: 401 });
  }

  const { access: accessToken, refresh: refreshToken } = (await response.json()) as TokenResponse;

  if (!refreshToken || !accessToken) {
    console.error('토큰 응답 형식이 올바르지 않습니다.');
    return NextResponse.json({ message: '인증 응답 오류' }, { status: 502 });
  }

  // 응답 생성
  const res = NextResponse.json({ ok: true }, { status: 200 });

  // refreshToken을 HttpOnly 쿠키로 저장
  res.cookies.set('refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax', // CSRF 표면 감소
    path: '/',
    maxAge: 60 * 60 * 24 * 14, // 14일
  });

  // Access token을 쿠키로도 저장 (서버사이드 API 호출용)
  res.cookies.set('x-access-token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 15, // 15분 (access token은 짧게)
  });

  // Access token을 응답 헤더로도 전달 (클라이언트에서 메모리에 저장용)
  res.headers.set('x-access-token', accessToken);

  return res;
}