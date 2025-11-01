import { SUPPORTED_LANGUAGES } from '@/content/languages';
import { BLOG_POSTS } from '@/content/blogPosts';

const POSTS_PER_PAGE = 5;

export function generateStaticParams() {
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    Array.from({ length: totalPages }, (_, i) => ({ lang, page: (i + 1).toString() }))
  );
}