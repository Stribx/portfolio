export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/containers/guillaumechambat-portfolio';

export function withBasePath(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
