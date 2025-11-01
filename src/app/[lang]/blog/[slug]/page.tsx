import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/content/blogPosts';
import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: Language; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      url: `https://www.hmziraq.services/${lang}/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://www.hmziraq.services/${lang}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: Language; slug: string }> }) {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">{post.summary}</div>
      <div className="prose prose-blue max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="text-xs text-gray-400">{post.keywords.join(', ')}</div>
    </main>
  );
}
