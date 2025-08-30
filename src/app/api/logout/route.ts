'use server';

import { NextRequest, NextResponse } from 'next/server';

const LOGOUT_URL = `${process.env.DEV_SERVER}/api/v1/token/blacklist/`;

export async function POST(req: NextRequest) {
  // 환경변수 체크
  if (!process.env.DEV_SERVER) {
    console.error('DEV_SERVER 환경변수가 설정되지 않았습니다.');
    return NextResponse.json({ message: '서버 설정 오류' }, { status: 500 });
  }

  // refresh_token 쿠키에서 가져오기
  const refreshToken = req.cookies.get('refresh_token')?.value;

  const res = NextResponse.json({ message: '로그아웃 완료' });

  // 쿠키 삭제
  res.cookies.delete('refresh_token');

  // refresh token이 있다면 백엔드에서 blacklist 처리
  if (refreshToken) {
    try {
      await fetch(LOGOUT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }),
      });
    } catch (error) {
      console.error('토큰 blacklist 처리 실패:', error);
      // 실패해도 클라이언트 쿠키는 삭제했으므로 성공으로 처리
    }
  }

  return res;
}