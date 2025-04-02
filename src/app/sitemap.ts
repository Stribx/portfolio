import type { MetadataRoute } from 'next'
import { basePath } from '@/utils/paths'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://codefirst.iut.uca.fr/${basePath}`

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/images/sitemap-images.xml`,
      lastModified: new Date(),
    }
  ]
}
