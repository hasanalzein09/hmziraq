import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import { SERVICES } from '@/content/services';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: Language }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return {};
  return {
    title: lang === 'ar' ? 'الخدمات - همز العراق' : 'Services - HMZ Iraq',
    description:
      lang === 'ar'
        ? 'جميع خدمات بوتات واتساب، إنستغرام، فيسبوك، تطوير مواقع Next.js، ووردبريس، متاجر WooCommerce، تحسين SEO، وأتمتة الذكاء الاصطناعي في العراق.'
        : 'All WhatsApp, Instagram, Facebook bots, Next.js development, WordPress, WooCommerce, SEO, and AI automation services in Iraq.',
    keywords:
      lang === 'ar'
        ? [
            'خدمات رقمية العراق',
            'بوت واتساب العراق',
            'تطوير مواقع العراق',
            'SEO العراق',
            'أتمتة الذكاء الاصطناعي العراق'
          ]
        : [
            'Digital services Iraq',
            'WhatsApp bot Iraq',
            'Web development Iraq',
            'SEO Iraq',
            'AI automation Iraq'
          ]
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">
        {lang === 'ar' ? 'الخدمات' : 'Services'}
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service) => (
          <li key={service.key} className="border rounded-lg p-4 hover:shadow-lg transition">
            <a href={`/${lang}/projects?service=${service.key}`} className="text-xl font-semibold">
              {service.name[lang]}
            </a>
            <p className="text-gray-600 mt-2 text-sm">{service.description[lang]}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
