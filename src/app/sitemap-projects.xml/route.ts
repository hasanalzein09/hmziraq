import { portfolioProjects } from '@/content/portfolioProjects';
import { SUPPORTED_LANGUAGES } from '@/content/languages';
import type { PortfolioProject } from '@/content/portfolioProjects';

// خذ أول 200 مشروع فقط لتجنب مشكلة حجم sitemap
// باقي المشاريع ستُفهرس عبر internal linking و on-demand generation
export async function GET() {
  const baseUrl = 'https://www.hmziraq.tech';
  const firstProjects = portfolioProjects.slice(0, 200); // أول 200 مشروع
  
  const urls = SUPPORTED_LANGUAGES.flatMap(lang => 
    firstProjects.map((project: PortfolioProject) => ({
      loc: `${baseUrl}/${lang}/projects/${project.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7'
    }))
  );

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
