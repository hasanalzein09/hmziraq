import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import { SERVICES } from '@/content/services';
import { BUSINESS_TYPES } from '@/content/businessTypes';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: Language }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return {};
  return {
    title: lang === 'ar' ? 'همز العراق - حلول رقمية متقدمة لجميع المصالح والمؤسسات' : 'HMZ Iraq - Advanced Digital Solutions for All Businesses',
    description:
      lang === 'ar'
        ? 'منصة عراقية رائدة تقدم حلول بوتات واتساب، إنستغرام، فيسبوك، تطوير مواقع Next.js، ووردبريس، متاجر WooCommerce، تحسين SEO، وأتمتة الذكاء الاصطناعي لجميع المصالح والمؤسسات في العراق: مطاعم، عيادات، مدارس، متاجر، وأكثر.'
        : 'Leading Iraqi platform offering WhatsApp, Instagram, Facebook bots, Next.js development, WordPress, WooCommerce stores, SEO, and AI automation solutions for all businesses in Iraq: restaurants, clinics, schools, stores, and more.',
    keywords:
      lang === 'ar'
        ? [
            'بوت واتساب العراق',
            'بوت إنستغرام العراق',
            'تطوير مواقع العراق',
            'خدمات SEO العراق',
            'حلول ذكاء اصطناعي العراق',
            'متاجر إلكترونية العراق',
            'خدمات رقمية بغداد',
            'برمجة العراق',
            'تسويق إلكتروني العراق',
            'مطاعم العراق',
            'عيادات العراق',
            'مدارس العراق',
            'صالونات تجميل العراق'
          ]
        : [
            'WhatsApp bot Iraq',
            'Instagram bot Iraq',
            'Next.js development Iraq',
            'SEO services Iraq',
            'AI automation Iraq',
            'WooCommerce Iraq',
            'Digital services Baghdad',
            'Web development Iraq',
            'E-commerce Iraq',
            'Iraq restaurants',
            'Iraq clinics',
            'Iraq schools'
          ]
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            {lang === 'ar' 
              ? 'حلول رقمية متقدمة لجميع المصالح في العراق' 
              : 'Advanced Digital Solutions for All Iraqi Businesses'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'نقدم خدمات بوتات، مواقع، تطبيقات، وحلول ذكاء اصطناعي لمطاعم، عيادات، مدارس، متاجر، وجميع أنواع المؤسسات في العراق'
              : 'We provide bots, websites, apps, and AI solutions for restaurants, clinics, schools, stores, and all types of businesses in Iraq'}
          </p>
          
          {/* Contact Info in Hero */}
          <div className="mb-8">
            <ContactInfo lang={lang} variant="header" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`/${lang}/contact`} 
              className="btn-primary text-lg px-10 py-4 shadow-2xl"
            >
              {lang === 'ar' ? 'اطلب عرض سعر مجاني' : 'Request Free Quote'}
            </a>
            <a 
              href={`/${lang}/services`} 
              className="btn-secondary bg-white/20 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-10 py-4"
            >
              {lang === 'ar' ? 'تصفح خدماتنا' : 'Browse Our Services'}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {lang === 'ar' ? 'خدماتنا الرقمية' : 'Our Digital Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lang === 'ar' 
                ? 'حلول متكاملة ومبتكرة لنمو أعمالك الرقمية'
                : 'Complete and innovative solutions for your digital business growth'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 12).map((service, index) => (
              <a 
                key={service.key}
                href={`/${lang}/services`}
                className="group relative bg-white rounded-2xl p-8 card-hover border-2 border-gray-100 hover:border-purple-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 gradient-primary rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors relative z-10">
                  {service.name[lang]}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {service.description[lang]}
                </p>
                <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm">
                  {lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href={`/${lang}/services`}
              className="btn-primary text-lg"
            >
              {lang === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            </a>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {lang === 'ar' ? 'نخدم جميع أنواع المصالح والمؤسسات' : 'We Serve All Types of Businesses'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar'
                ? 'حلول مخصصة ومصممة خصيصاً لكل قطاع ونوع مصلحة في العراق'
                : 'Customized solutions designed specifically for every sector and business type in Iraq'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BUSINESS_TYPES.slice(0, 20).map((business, index) => (
              <div 
                key={business.key}
                className="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 gradient-secondary rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                  {business.name[lang].charAt(0)}
                </div>
                <p className="font-bold text-gray-800 text-lg">
                  {business.name[lang]}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href={`/${lang}/services`}
              className="btn-primary text-lg"
            >
              {lang === 'ar' ? 'عرض جميع القطاعات' : 'View All Sectors'}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                {lang === 'ar' ? 'جاهز لتطوير عملك؟' : 'Ready to Grow Your Business?'}
              </h2>
              <p className="text-xl text-gray-600">
                {lang === 'ar'
                  ? 'املأ النموذج وسنتواصل معك خلال 24 ساعة'
                  : 'Fill out the form and we\'ll contact you within 24 hours'}
              </p>
            </div>
            
            <ContactForm lang={lang} />

            {/* Additional Contact Info */}
            <div className="mt-12">
              <ContactInfo lang={lang} variant="inline" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="gradient-dark text-white py-20 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-5xl font-bold text-gradient-gold mb-2">198+</div>
              <p className="text-xl text-gray-300">{lang === 'ar' ? 'نوع مصلحة' : 'Business Types'}</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-gradient-gold mb-2">88+</div>
              <p className="text-xl text-gray-300">{lang === 'ar' ? 'خدمة رقمية' : 'Digital Services'}</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-gradient-gold mb-2">500+</div>
              <p className="text-xl text-gray-300">{lang === 'ar' ? 'مدينة ومنطقة' : 'Cities & Districts'}</p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold text-gradient-gold mb-2">24/7</div>
              <p className="text-xl text-gray-300">{lang === 'ar' ? 'دعم فني' : 'Technical Support'}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
