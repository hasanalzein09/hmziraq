import { SUPPORTED_LANGUAGES } from '@/content/languages';
import { BLOG_POSTS } from '@/content/blogPosts';

const POSTS_PER_PAGE = 5;

export function generateStaticParams() {
  // توليد صفحتين فقط من التصفح في البناء الأولي - الباقي يتم توليده عند الطلب
  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    Array.from({ length: 2 }, (_, i) => ({ lang, page: (i + 1).toString() }))
  );
}
