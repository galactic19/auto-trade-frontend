'use server';

import { NextRequest, NextResponse } from 'next/server';

const REFRESH_URL = `${process.env.DEV_SERVER}/api/v1/token/refresh/`;

export async function POST(req: NextRequest) {
  // 환경변수 체크
  if (!process.env.DEV_SERVER) {
    console.error('DEV_SERVER 환경변수가 설정되지 않았습니다.');
    return NextResponse.json({ message: '서버 설정 오류' }, { status: 500 });
  }

  // refresh_token 쿠키에서 가져오기
  const refreshToken = req.cookies.get('refresh_token')?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: '인증이 필요합니다.' }, { status: 401 });
  }

  try {
    // Django 백엔드로 refresh token 전송
    const response = await fetch(REFRESH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      console.log('토큰 갱신 실패');
      
      // refresh token이 만료된 경우 쿠키 삭제
      const res = NextResponse.json({ message: '토큰 갱신 실패' }, { status: 401 });
      res.cookies.delete('refresh_token');
      return res;
    }

    const data = await response.json();
    
    if (!data.access) {
      console.error('액세스 토큰을 받지 못했습니다.');
      return NextResponse.json({ message: '토큰 갱신 오류' }, { status: 502 });
    }

    // 새로운 access token 반환
    return NextResponse.json({ 
      access: data.access,
      message: '토큰 갱신 성공' 
    });

  } catch (error) {
    console.error('토큰 갱신 중 오류:', error);
    return NextResponse.json({ message: '토큰 갱신 중 오류가 발생했습니다.' }, { status: 500 });
  }
}