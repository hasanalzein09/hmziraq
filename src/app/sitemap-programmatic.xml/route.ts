import { NextResponse } from 'next/server';
import { SERVICES } from '@/content/services';
import { BUSINESS_TYPES } from '@/content/businessTypes';
import { IRAQ_CITIES } from '@/content/iraqCities';

export async function GET() {
  const baseUrl = 'https://www.hmziraq.services';

  // ============================================================================
  // 🚀 MEGA SITEMAP: ALL 85 SERVICES × 198 BUSINESSES × 26 CITIES
  // ============================================================================
  // Strategy: Include ALL services (not just core 8) for maximum SEO coverage
  // Google will crawl all URLs and trigger ISR generation on-demand
  
  // ALL 85 services (including new mega services)
  const allServiceKeys = SERVICES.map(s => s.key);

  // Top 50 highest-potential business types for sitemap
  // (All 198 types are still accessible via ISR, but sitemap prioritizes top 50)
  const topBusinessKeys = BUSINESS_TYPES.slice(0, 50).map(b => b.key);

  // ALL 26 Iraqi cities
  const allCityKeys = IRAQ_CITIES.map(c => c.key);
  
  const languages = ['ar', 'en'];

  const urls: string[] = [];

  // Generate ALL combinations for sitemap
  // 85 services × 50 businesses × 26 cities × 2 languages = 221,000 URLs
  for (const lang of languages) {
    for (const service of allServiceKeys) {
      for (const business of topBusinessKeys) {
        for (const city of allCityKeys) {
          urls.push(`${baseUrl}/${lang}/services/${service}/for/${business}/in/${city}`);
        }
      }
    }
  }
  
  console.log(`✅ Sitemap generated: ${urls.length.toLocaleString()} URLs for Google to crawl!`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
