import { BLOG_POSTS } from '@/content/blogPosts';
import { SUPPORTED_LANGUAGES } from '@/content/languages';

export async function GET() {
  const baseUrl = 'https://www.hmziraq.services';
  
  const urls = SUPPORTED_LANGUAGES.flatMap(lang => 
    BLOG_POSTS.map(post => ({
      loc: `${baseUrl}/${lang}/blog/${post.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.6'
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
