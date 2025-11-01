import { NextResponse } from 'next/server';
import { SERVICES } from '@/content/services';
import { BUSINESS_TYPES } from '@/content/businessTypes';
import { IRAQ_CITIES } from '@/content/iraqCities';

export async function GET() {
  const baseUrl = 'https://www.hmziraq.services';

  // Generate URLs for top programmatic combinations
  const coreServices = [
    'whatsapp-bot',
    'instagram-bot',
    'erp-system',
    'crm-system',
    'nextjs-website',
    'wordpress-site',
    'seo-optimization',
    'ai-automation-solutions'
  ];

  const topBusinessKeys = [
    'restaurants', 'cafes', 'fast-food', 'hospitals', 'clinics',
    'dental-clinics', 'pharmacies', 'schools', 'universities', 'training-centers',
    'clothing-stores', 'electronics-stores', 'mobile-stores', 'supermarkets',
    'beauty-salons', 'barber-shops', 'hotels', 'real-estate', 'gyms',
    'law-firms', 'accounting-firms', 'marketing-agencies', 'construction-companies',
    'car-dealerships', 'car-repair-shops', 'software-companies', 'consulting-firms',
    'wedding-planners', 'event-photographers', 'printing-presses'
  ];

  const topCities = ['baghdad', 'basra', 'mosul', 'erbil', 'najaf', 'karbala', 'sulaymaniyah', 'kirkuk'];
  const languages = ['ar', 'en'];

  const urls: string[] = [];

  for (const lang of languages) {
    for (const service of coreServices) {
      for (const business of topBusinessKeys) {
        for (const city of topCities) {
          urls.push(`${baseUrl}/${lang}/services/${service}/for/${business}/in/${city}`);
        }
      }
    }
  }

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
