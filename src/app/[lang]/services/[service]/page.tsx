import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/content/services';
import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

type Props = {
  params: Promise<{ lang: Language; service: string }>;
};

export async function generateStaticParams() {
  const languages = ['ar', 'en'] as const;
  return SERVICES.flatMap(service => 
    languages.map(lang => ({
      lang,
      service: service.key
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, service: serviceKey } = await params;
  const service = SERVICES.find(s => s.key === serviceKey);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name[lang]} | hmziraq.tech`,
    description: service.description[lang],
    keywords: service.keywords,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { lang, service: serviceKey } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  const service = SERVICES.find(s => s.key === serviceKey);
  if (!service) return notFound();

  const isRTL = lang === 'ar';

  return (
    <main className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl relative z-10 text-center text-white">
          <div className="text-8xl mb-6">💬</div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 drop-shadow-2xl">
            {service.name[lang]}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {service.description[lang]}
          </p>
          <a 
            href="#contact-form"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
          >
            {lang === 'ar' ? '📞 احصل على عرض سعر' : '📞 Get a Quote'}
          </a>
        </div>
      </section>

      <section id="contact-form" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {lang === 'ar' ? '📬 ابدأ مشروعك الآن' : '📬 Start Your Project Now'}
            </h2>
          </div>
          <ContactForm lang={lang} servicePreselect={service.name[lang]} />
        </div>
      </section>
    </main>
  );
}
