import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const { pathname } = req.nextUrl;

  if(pathname.startsWith('/_next') || pathname.startsWith('/api')){
    return NextResponse.next();
  }

  const acceptLanguage = req.headers.get('accept-language') || '';
  const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];

  if(!pathname.startsWith(`/${preferredLocale}`)) {
    url.pathname = `/${preferredLocale}${pathname}`
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
