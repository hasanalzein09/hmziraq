import { SERVICES } from '@/content/services';
import { SUPPORTED_LANGUAGES } from '@/content/languages';
import { MAIN_CITIES } from '@/content/iraqCities';

export async function GET() {
  const baseUrl = 'https://www.hmziraq.tech';
  
  const urls = SUPPORTED_LANGUAGES.flatMap(lang => [
    // صفحات الخدمات الرئيسية
    ...SERVICES.map(service => ({
      loc: `${baseUrl}/${lang}/services/${service.key}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8'
    })),
    
    // صفحات الخدمات في المدن (المدن الرئيسية فقط)
    ...SERVICES.flatMap(service =>
      MAIN_CITIES.map(city => ({
        loc: `${baseUrl}/${lang}/services/${service.key}/in/${city}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: '0.6'
      }))
    )
  ]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate'
    }
  });
}
