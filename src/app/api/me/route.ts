'use server';

import { NextRequest, NextResponse } from 'next/server';

const USER_INFO_URL = `${process.env.DEV_SERVER}/api/v1/accounts/me/`;

export async function GET(req: NextRequest) {
  // 환경변수 체크
  if (!process.env.DEV_SERVER) {
    console.error('DEV_SERVER 환경변수가 설정되지 않았습니다.');
    return NextResponse.json({ message: '서버 설정 오류' }, { status: 500 });
  }

  // Authorization 헤더에서 토큰 추출
  const authorization = req.headers.get('authorization');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return NextResponse.json({ message: '인증 토큰이 필요합니다.' }, { status: 401 });
  }

  const accessToken = authorization.substring(7); // "Bearer " 제거

  try {
    // Django 백엔드로 사용자 정보 요청
    const response = await fetch(USER_INFO_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json({ message: '사용자 정보를 가져올 수 없습니다.' }, { status: response.status });
    }

    const userData = await response.json();
    
    // 사용자 정보 반환
    return NextResponse.json({
      id: userData.id || userData.user_id,
      username: userData.username,
    });

  } catch (error) {
    console.error('사용자 정보 조회 중 오류:', error);
    return NextResponse.json({ message: '사용자 정보 조회 중 오류가 발생했습니다.' }, { status: 500 });
  }
}