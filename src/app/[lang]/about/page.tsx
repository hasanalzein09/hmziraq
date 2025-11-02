import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: Language }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return {};
  return {
    title: lang === 'ar' ? 'من نحن - hmziraq.tech' : 'About - hmziraq.tech',
    description:
      lang === 'ar'
        ? 'تعرف على فريق همز العراق ورؤيتنا في تقديم حلول رقمية متقدمة للسوق العراقي.'
        : 'Learn about the hmziraq.tech team and our vision for delivering advanced digital solutions in Iraq.',
    keywords:
      lang === 'ar'
        ? ['من نحن', 'همز العراق', 'فريق العمل', 'خدمات رقمية العراق']
        : ['About', 'hmziraq.tech', 'Team', 'Digital services Iraq']
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{lang === 'ar' ? 'من نحن' : 'About Us'}</h1>
      <p className="mb-4">
        {lang === 'ar'
          ? 'نحن فريق عراقي متخصص في تقديم حلول رقمية متقدمة تشمل بوتات واتساب، إنستغرام، فيسبوك، تطوير مواقع Next.js، ووردبريس، متاجر WooCommerce، تحسين SEO، وأتمتة الذكاء الاصطناعي. هدفنا دعم التحول الرقمي في العراق.'
          : 'We are an Iraqi team specializing in advanced digital solutions including WhatsApp, Instagram, Facebook bots, Next.js development, WordPress, WooCommerce, SEO, and AI automation. Our goal is to support digital transformation in Iraq.'}
      </p>
    </main>
  );
}
