import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/content/services';
import { BUSINESS_TYPES } from '@/content/businessTypes';
import { IRAQ_CITIES } from '@/content/iraqCities';
import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

type Props = {
  params: Promise<{
    lang: Language;
    service: string;
    business: string;
    city: string;
  }>;
};

// Pre-generate only 32 strategic pages (top services × top cities)
export async function generateStaticParams() {
  const topServices = ['whatsapp-bot', 'instagram-bot', 'web-development', 'seo'];
  const topBusinesses = ['restaurants', 'cafes'];
  const topCities = ['baghdad', 'basra', 'erbil', 'najaf'];
  const languages = ['ar', 'en'] as const;

  return topServices.flatMap(service =>
    topBusinesses.flatMap(business =>
      topCities.flatMap(city =>
        languages.map(lang => ({
          lang,
          service,
          business,
          city
        }))
      )
    )
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, service: serviceKey, business: businessKey, city: cityKey } = await params;
  
  const service = SERVICES.find(s => s.key === serviceKey);
  const business = BUSINESS_TYPES.find(b => b.key === businessKey);
  const city = IRAQ_CITIES.find(c => c.key === cityKey);

  if (!service || !business || !city) {
    return { title: 'Page Not Found' };
  }

  const title = lang === 'ar'
    ? `${service.name.ar} لـ ${business.name.ar} في ${city.ar} | hmziraq.tech`
    : `${service.name.en} for ${business.name.en} in ${city.en} | hmziraq.tech`;

  const description = lang === 'ar'
    ? `احصل على ${service.name.ar} احترافية مصممة خصيصاً لـ ${business.name.ar} في ${city.ar}، العراق. حلول رقمية متطورة لزيادة مبيعاتك وتحسين تجربة عملائك.`
    : `Get professional ${service.name.en} designed specifically for ${business.name.en} in ${city.en}, Iraq. Advanced digital solutions to increase sales and improve customer experience.`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      business.name.ar,
      business.name.en,
      city.ar,
      city.en,
      'Iraq',
      'العراق'
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: lang === 'ar' ? 'ar_IQ' : 'en_US',
    },
  };
}

export default async function ProgrammaticServicePage({ params }: Props) {
  const { lang, service: serviceKey, business: businessKey, city: cityKey } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();

  const service = SERVICES.find(s => s.key === serviceKey);
  const business = BUSINESS_TYPES.find(b => b.key === businessKey);
  const city = IRAQ_CITIES.find(c => c.key === cityKey);

  if (!service || !business || !city) return notFound();

  const isRTL = lang === 'ar';

  const benefits = lang === 'ar' ? [
    `🎯 حل مخصص لـ ${business.name.ar}`,
    `📍 خدمة محلية في ${city.ar}`,
    `⚡ تنفيذ سريع وفعال`,
    `💰 أسعار تنافسية`,
    `🔒 أمان وخصوصية عالية`,
    `📱 دعم فني مستمر`,
    `✅ ضمان الجودة`,
    `📊 تقارير أداء دورية`
  ] : [
    `🎯 Custom solution for ${business.name.en}`,
    `📍 Local service in ${city.en}`,
    `⚡ Fast and efficient execution`,
    `💰 Competitive pricing`,
    `🔒 High security and privacy`,
    `📱 Continuous technical support`,
    `✅ Quality guarantee`,
    `📊 Regular performance reports`
  ];

  const whyLocal = lang === 'ar' ? {
    title: `لماذا ${service.name.ar} مهمة لـ ${business.name.ar} في ${city.ar}؟`,
    reasons: [
      `زيادة الوصول للعملاء في ${city.ar} والمناطق المجاورة`,
      `تحسين تجربة العملاء وزيادة الولاء للعلامة التجارية`,
      `أتمتة العمليات وتوفير الوقت والجهد`,
      `تحليل بيانات العملاء واتخاذ قرارات أفضل`,
      `التميز عن المنافسين في ${city.ar}`
    ]
  } : {
    title: `Why ${service.name.en} is important for ${business.name.en} in ${city.en}?`,
    reasons: [
      `Increase customer reach in ${city.en} and nearby areas`,
      `Improve customer experience and brand loyalty`,
      `Automate operations and save time and effort`,
      `Analyze customer data and make better decisions`,
      `Stand out from competitors in ${city.en}`
    ]
  };

  return (
    <main className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 text-white/80 text-sm">
            <Link href={`/${lang}`} className="hover:text-white">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            {' / '}
            <Link href={`/${lang}/services`} className="hover:text-white">
              {lang === 'ar' ? 'الخدمات' : 'Services'}
            </Link>
            {' / '}
            <Link href={`/${lang}/services/${serviceKey}`} className="hover:text-white">
              {service.name[lang]}
            </Link>
            {' / '}
            <span className="text-white font-semibold">
              {business.name[lang]} - {city[lang]}
            </span>
          </nav>

          <div className="text-center text-white">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <span className="text-2xl">📍</span>
              <span className="font-bold text-lg">{city[lang]}, {lang === 'ar' ? 'العراق' : 'Iraq'}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl leading-tight">
              {lang === 'ar' 
                ? `${service.name.ar} لـ ${business.name.ar}`
                : `${service.name.en} for ${business.name.en}`}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {lang === 'ar'
                ? `حلول ${service.name.ar} متطورة ومصممة خصيصاً لتلبية احتياجات ${business.name.ar} في ${city.ar}`
                : `Advanced ${service.name.en} solutions designed specifically to meet ${business.name.en} needs in ${city.en}`}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#contact-form"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-black text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
              >
                {lang === 'ar' ? '📞 احصل على عرض سعر مجاني' : '📞 Get Free Quote'}
              </a>
              <Link
                href={`/${lang}/services/${serviceKey}`}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-xl font-black text-lg shadow-2xl hover:bg-white/30 transform hover:scale-105 transition-all"
              >
                {lang === 'ar' ? 'ℹ️ تفاصيل الخدمة' : 'ℹ️ Service Details'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
            {lang === 'ar' ? '✨ مميزات خدمتنا' : '✨ Our Service Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-purple-500"
              >
                <p className="text-lg font-semibold text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
            {whyLocal.title}
          </h2>
          <div className="space-y-4">
            {whyLocal.reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg">
                  {index + 1}
                </div>
                <p className="text-xl text-gray-800 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-gray-300">{lang === 'ar' ? 'مشروع ناجح' : 'Successful Projects'}</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">98%</div>
              <div className="text-gray-300">{lang === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">24/7</div>
              <div className="text-gray-300">{lang === 'ar' ? 'دعم فني' : 'Technical Support'}</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">6+</div>
              <div className="text-gray-300">{lang === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {lang === 'ar' ? '📬 ابدأ مشروعك الآن' : '📬 Start Your Project Now'}
            </h2>
            <p className="text-xl text-gray-600">
              {lang === 'ar' 
                ? `تواصل معنا للحصول على ${service.name.ar} مخصصة لـ ${business.name.ar} في ${city.ar}`
                : `Contact us to get ${service.name.en} customized for ${business.name.en} in ${city.en}`}
            </p>
          </div>
          
          <ContactForm 
            lang={lang} 
            serviceContext={service.name[lang]}
            businessContext={business.name[lang]}
            cityContext={city[lang]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {lang === 'ar' ? '�� جاهز للبدء؟' : '🚀 Ready to Start?'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {lang === 'ar'
              ? `انضم إلى مئات العملاء الراضين في ${city.ar}`
              : `Join hundreds of satisfied clients in ${city.en}`}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/96170106083?text=${encodeURIComponent(
                lang === 'ar' 
                  ? `مرحباً، أريد الاستفسار عن ${service.name.ar} لـ ${business.name.ar} في ${city.ar}`
                  : `Hello, I want to inquire about ${service.name.en} for ${business.name.en} in ${city.en}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-purple-600 rounded-xl font-black text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            >
              💬 {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
            <a
              href="tel:+96170106083"
              className="px-10 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-xl font-black text-lg shadow-2xl hover:bg-white/30 transform hover:scale-105 transition-all"
            >
              📞 {lang === 'ar' ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
