import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/content/blogPosts';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; page: string }> }): Promise<Metadata> {
  const { lang, page } = await params;
  const pageNum = parseInt(page, 10);
  if (!SUPPORTED_LANGUAGES.includes(lang) || isNaN(pageNum) || pageNum < 1) return {};
  const totalPages = Math.ceil(BLOG_POSTS.length / 5);
  return {
    title: (lang === 'ar' ? 'مدونة' : 'Blog') + ` - صفحة ${pageNum} من ${totalPages}`,
    description:
      lang === 'ar'
        ? `صفحة ${pageNum} من مقالات المدونة حول الخدمات الرقمية، البوتات، تطوير المواقع، وSEO في العراق.`
        : `Page ${pageNum} of blog articles about digital services, bots, web development, and SEO in Iraq.`,
    keywords:
      lang === 'ar'
        ? ['مدونة', 'مقالات', 'همز العراق', 'خدمات رقمية العراق']
        : ['Blog', 'Articles', 'hmziraq.tech', 'Digital services Iraq'],
    alternates: {
      canonical: `https://www.hmziraq.tech/${lang}/blog/page/${pageNum}`,
    },
  };
}

export default async function BlogPagePaginated({ params }: { params: Promise<{ lang: Language; page: string }> }) {
  const { lang, page: pageStr } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  const POSTS_PER_PAGE = 5;
  const pageNum = parseInt(pageStr, 10);
  if (isNaN(pageNum) || pageNum < 1) return notFound();
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  if (pageNum > totalPages) return notFound();
  const start = (pageNum - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const posts = BLOG_POSTS.slice(start, end);

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{lang === 'ar' ? 'مدونة' : 'Blog'}</h1>
      <p className="mb-4">
        {lang === 'ar'
          ? 'تابع آخر المقالات والأخبار حول الخدمات الرقمية، البوتات، تطوير المواقع، وSEO في العراق.'
          : 'Read the latest articles and news about digital services, bots, web development, and SEO in Iraq.'}
      </p>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <Link href={`/${lang}/blog/${post.slug}`} className="text-xl font-bold text-blue-700 hover:underline">
              {post.title}
            </Link>
            <div className="text-gray-600 mt-1 mb-2">{post.summary}</div>
            <div className="text-xs text-gray-400">{post.keywords.join(', ')}</div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <div>
          {pageNum > 1 && (
            <Link href={`/${lang}/blog/page/${pageNum - 1}`} className="text-blue-600 hover:underline">
              {lang === 'ar' ? 'السابق' : 'Previous'}
            </Link>
          )}
        </div>
        <div className="text-sm text-gray-500">
          {lang === 'ar' ? `صفحة ${pageNum} من ${totalPages}` : `Page ${pageNum} of ${totalPages}`}
        </div>
        <div>
          {pageNum < totalPages && (
            <Link href={`/${lang}/blog/page/${pageNum + 1}`} className="text-blue-600 hover:underline">
              {lang === 'ar' ? 'التالي' : 'Next'}
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
