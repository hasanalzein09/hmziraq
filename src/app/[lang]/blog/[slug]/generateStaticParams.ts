import { BLOG_POSTS } from '@/content/blogPosts';
import { SUPPORTED_LANGUAGES } from '@/content/languages';

export function generateStaticParams() {
  // توليد أول 5 مقالات فقط في البناء الأولي - الباقي يتم توليده عند الطلب
  return SUPPORTED_LANGUAGES.flatMap((lang) =>
    BLOG_POSTS.slice(0, 5).map((post) => ({ lang, slug: post.slug }))
  );
}
