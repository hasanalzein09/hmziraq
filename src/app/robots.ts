import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://www.hmziraq.tech/sitemap.xml',
      'https://www.hmziraq.tech/sitemap-programmatic.xml',
      'https://www.hmziraq.tech/sitemap-projects.xml',
      'https://www.hmziraq.tech/sitemap-services.xml',
      'https://www.hmziraq.tech/sitemap-blog.xml',
    ],
    host: 'https://www.hmziraq.tech',
  };
}
