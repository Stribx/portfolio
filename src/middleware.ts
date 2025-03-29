import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { basePath } from './utils/paths';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next|trpc|_vercel|.*\\..*).*)',
    '/containers/guillaumechambat-portfolio/(fr|en)/:path*'
  ]
};
