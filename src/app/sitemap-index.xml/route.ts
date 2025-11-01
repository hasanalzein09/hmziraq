// Sitemap Index - master sitemap that links to all other sitemaps
export async function GET() {
  const baseUrl = 'https://www.hmziraq.services';

  const sitemaps = [
    {
      loc: `${baseUrl}/sitemap.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: `${baseUrl}/sitemap-programmatic.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: `${baseUrl}/sitemap-projects.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: `${baseUrl}/sitemap-services.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: `${baseUrl}/sitemap-blog.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate'
    }
  });
}
