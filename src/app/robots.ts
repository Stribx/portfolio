import type { MetadataRoute } from 'next'
import { basePath } from '@/utils/paths'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://codefirst.iut.uca.fr/${basePath}`

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/'
        ],
        disallow: [
          '/_next/',
          '/api/',
          '/admin/',
          '/drafts/',
          '/test/',
          '/tmp/',
          '/.git/',
          '/.env',
          '/node_modules/',
          '/*.js.map',
          '/private/',
          '/preview/',
          '/404',
          '/500'
        ],
        crawlDelay: 10
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [`${baseUrl}/images/portfolio/`],
        disallow: '/'
      }
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-images.xml`
    ],
    host: 'codefirst.iut.uca.fr'
  }
}
