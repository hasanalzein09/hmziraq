import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PremiumHero from '@/components/PremiumHero';
import PremiumServices from '@/components/PremiumServices';
import PremiumBusinessTypes from '@/components/PremiumBusinessTypes';

export async function generateMetadata({ params }: { params: Promise<{ lang: Language }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return {};
  return {
    title: lang === 'ar' ? 'همز العراق - 85+ خدمة رقمية لـ 198+ نوع عمل' : 'HMZ Iraq - 85+ Digital Services for 198+ Business Types',
    description:
      lang === 'ar'
        ? 'منصة عراقية رائدة: 85 خدمة رقمية متقدمة تغطي 198 نوع عمل في 26 مدينة. بوتات ذكاء اصطناعي، تجارة إلكترونية، تطبيقات، تسويق، وأمن سيبراني.'
        : 'Leading Iraqi platform: 85 advanced digital services covering 198 business types in 26 cities. AI bots, e-commerce, apps, marketing, and cybersecurity.',
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  
  return (
    <main className="min-h-screen">
      {/* Hero with Smart Filter */}
      <PremiumHero lang={lang} />

      {/* Services Showcase */}
      <PremiumServices lang={lang} />

      {/* Success Stories / Projects */}
      <PremiumBusinessTypes lang={lang} />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {lang === 'ar' ? '🚀 جاهز للبدء؟' : '🚀 Ready to Start?'}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'احصل على استشارة مجانية وعرض سعر خلال 24 ساعة'
              : 'Get a free consultation and quote within 24 hours'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`/${lang}/contact`}
              className="px-12 py-5 bg-white text-purple-600 rounded-2xl font-black text-lg shadow-2xl hover:shadow-white/50 transition-all hover:scale-105"
            >
              {lang === 'ar' ? '📞 تواصل معنا الآن' : '📞 Contact Us Now'}
            </a>
            <a 
              href="https://wa.me/96470106083"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-green-500 text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105"
            >
              {lang === 'ar' ? '💬 واتساب فوري' : '💬 WhatsApp Now'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
