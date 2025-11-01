import { portfolioProjects } from '@/content/portfolioProjects';
import { BLOG_POSTS } from '@/content/blogPosts';

export async function GET() {
  const baseUrl = 'https://www.hmziraq.services';
  const currentDate = new Date().toISOString();

  // RSS Feed for blog posts and projects
  const items = [
    // Blog posts
    ...BLOG_POSTS.map(post => ({
      title: post.title,
      link: `${baseUrl}/ar/blog/${post.slug}`,
      description: post.summary,
      pubDate: currentDate,
      category: 'Blog'
    })),
    
    // Recent 20 projects
    ...portfolioProjects.slice(0, 20).map(project => ({
      title: project.title.ar,
      link: `${baseUrl}/ar/projects/${project.slug}`,
      description: project.description.ar,
      pubDate: currentDate,
      category: project.category.ar
    }))
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>HMZ Iraq - أحدث المشاريع والمقالات</title>
    <link>${baseUrl}</link>
    <description>آخر المشاريع والمقالات من HMZ Iraq - تطوير المواقع والتطبيقات في العراق</description>
    <language>ar</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>HMZ Iraq</title>
      <link>${baseUrl}</link>
    </image>
${items.map(item => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <category>${item.category}</category>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  });
}
