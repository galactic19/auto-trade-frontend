import {NextRequest, NextResponse} from "next/server";

interface LoginRequestBody {
  username: unknown;
  password: unknown;
}

interface TokenResponse {
  access: string;
  refresh: string;
}

const DEV_SERVER = process.env.DEV_SERVER;

// ... existing code ...
export async function GET(req: NextRequest) {
  // 환경변수 체크
  if (!DEV_SERVER) {
    console.error('DEV_SERVER 환경변수가 설정되지 않았습니다.');
    return NextResponse.json({message: '서버 설정 오류'}, {status: 500});
  }
  const ACCOUNT_URL = `${DEV_SERVER.replace(/\/+$/, '')}/api/v1/accounts/account/`;

  // 인증 토큰 추출 (쿠키 우선, 없으면 Authorization 헤더)
  const cookieAccess = req.cookies.get('x-access-token')?.value ?? null;
  const headerAuth = req.headers.get('authorization');
  const headerToken = headerAuth ? headerAuth.replace(/^Bearer\s+/i, '') : null;
  const accessToken = cookieAccess || headerToken;

  if (!accessToken) {
    return NextResponse.json({message: '인증이 필요합니다.'}, {status: 401});
  }

  try {
    const response = await fetch(ACCOUNT_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const status = response.status;
      const message =
        status === 401 || status === 403
          ? '인증이 만료되었거나 유효하지 않습니다.'
          : '계좌 정보를 가져올 수 없습니다.';
      return NextResponse.json({message}, {status});
    }

    const accountData = await response.json();
    return NextResponse.json(accountData);
  } catch (error) {
    console.error('계좌 정보 조회 중 오류:', error);
    return NextResponse.json({message: '계좌 정보 조회 중 오류가 발생했습니다.'}, {status: 500});
  }
}
