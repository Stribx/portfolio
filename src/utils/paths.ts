export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio';

export function withBasePath(path?: string): string {
  return path ? `${basePath}${path.startsWith('/') ? path : `/${path}`}` : '';
}
