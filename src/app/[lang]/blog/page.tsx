import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/content/blogPosts';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: Language }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return {};
  return {
    title: lang === 'ar' ? 'مدونة - همز العراق' : 'Blog - HMZ Iraq',
    description:
      lang === 'ar'
        ? 'تابع آخر المقالات والأخبار حول الخدمات الرقمية، البوتات، تطوير المواقع، وSEO في العراق.'
        : 'Read the latest articles and news about digital services, bots, web development, and SEO in Iraq.',
    keywords:
      lang === 'ar'
        ? ['مدونة', 'مقالات', 'همز العراق', 'خدمات رقمية العراق']
        : ['Blog', 'Articles', 'HMZ Iraq', 'Digital services Iraq']
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  const POSTS_PER_PAGE = 5;
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const posts = BLOG_POSTS.slice(0, POSTS_PER_PAGE);

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
        <div></div>
        <div className="text-sm text-gray-500">
          {lang === 'ar' ? `صفحة 1 من ${totalPages}` : `Page 1 of ${totalPages}`}
        </div>
        <div>
          {totalPages > 1 && (
            <Link href={`/${lang}/blog/page/2`} className="text-blue-600 hover:underline">
              {lang === 'ar' ? 'التالي' : 'Next'}
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
