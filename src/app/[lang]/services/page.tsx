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

  // Group services by category
  const servicesByCategory = SERVICES.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  const categoryNames: Record<string, { ar: string; en: string; icon: string; gradient: string }> = {
    automation: { ar: 'الأتمتة والبوتات', en: 'Automation & Bots', icon: '🤖', gradient: 'from-blue-500 to-cyan-500' },
    ai: { ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence', icon: '🧠', gradient: 'from-purple-500 to-pink-500' },
    ecommerce: { ar: 'التجارة الإلكترونية', en: 'E-Commerce', icon: '🛒', gradient: 'from-green-500 to-emerald-500' },
    mobile: { ar: 'تطبيقات الموبايل', en: 'Mobile Apps', icon: '📱', gradient: 'from-indigo-500 to-blue-500' },
    marketing: { ar: 'التسويق الرقمي', en: 'Digital Marketing', icon: '📈', gradient: 'from-orange-500 to-red-500' },
    security: { ar: 'الأمن السيبراني', en: 'Security', icon: '🔒', gradient: 'from-red-500 to-pink-500' },
    web: { ar: 'تطوير المواقع', en: 'Web Development', icon: '💻', gradient: 'from-teal-500 to-green-500' },
    solutions: { ar: 'حلول متكاملة', en: 'Complete Solutions', icon: '⚡', gradient: 'from-yellow-500 to-orange-500' },
    'business-systems': { ar: 'أنظمة الأعمال', en: 'Business Systems', icon: '💼', gradient: 'from-blue-600 to-indigo-600' },
    advanced: { ar: 'خدمات متقدمة', en: 'Advanced Services', icon: '🚀', gradient: 'from-purple-600 to-indigo-600' },
    cloud: { ar: 'الخدمات السحابية', en: 'Cloud Services', icon: '☁️', gradient: 'from-sky-500 to-blue-500' }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Dramatic Gradient */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            {lang === 'ar' ? '🚀 جميع خدماتنا الرقمية' : '🚀 All Our Digital Services'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium drop-shadow-lg">
            {lang === 'ar' 
              ? '85+ خدمة رقمية متخصصة لتحويل عملك في العراق إلى النجاح الرقمي'
              : '85+ specialized digital services to transform your business in Iraq to digital success'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold">
              ✨ {lang === 'ar' ? '85+ خدمة' : '85+ Services'}
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold">
              🎯 {lang === 'ar' ? '11 فئة' : '11 Categories'}
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold">
              🏆 {lang === 'ar' ? '500+ مشروع ناجح' : '500+ Successful Projects'}
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          {Object.entries(servicesByCategory).map(([category, services], categoryIndex) => {
            const categoryInfo = categoryNames[category] || { 
              ar: category, 
              en: category, 
              icon: '⚡', 
              gradient: 'from-gray-500 to-gray-600' 
            };

            return (
              <div key={category} className="mb-20 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`text-5xl bg-gradient-to-br ${categoryInfo.gradient} p-4 rounded-2xl shadow-xl`}>
                    {categoryInfo.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                      {categoryInfo[lang]}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {services.length} {lang === 'ar' ? 'خدمة متاحة' : 'services available'}
                    </p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {services.map((service, index) => {
                    const gradients = [
                      'from-blue-500 to-purple-500',
                      'from-green-500 to-teal-500',
                      'from-orange-500 to-red-500',
                      'from-purple-500 to-pink-500',
                      'from-cyan-500 to-blue-500',
                      'from-yellow-500 to-orange-500',
                      'from-pink-500 to-rose-500',
                      'from-indigo-500 to-purple-500',
                    ];
                    const gradient = gradients[index % gradients.length];

                    return (
                      <a
                        key={service.key}
                        href={`/${lang}/services#${service.key}`}
                        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                        
                        {/* Glass Effect */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                        
                        {/* Content */}
                        <div className="relative p-6 h-full flex flex-col z-10">
                          {/* Service Icon */}
                          <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                            {service.key.includes('whatsapp') ? '💬' :
                             service.key.includes('instagram') ? '📸' :
                             service.key.includes('facebook') ? '📘' :
                             service.key.includes('ai') && service.key.includes('chatbot') ? '🤖' :
                             service.key.includes('ai') && service.key.includes('content') ? '✍️' :
                             service.key.includes('ai') && service.key.includes('image') ? '🎨' :
                             service.key.includes('web') ? '💻' :
                             service.key.includes('mobile') ? '📱' :
                             service.key.includes('ecommerce') ? '🛒' :
                             service.key.includes('seo') ? '🔍' :
                             service.key.includes('marketing') ? '📈' :
                             service.key.includes('security') ? '🔒' : '⚡'}
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-xl font-black text-white mb-3 drop-shadow-lg leading-tight">
                            {service.name[lang]}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-white/90 text-sm line-clamp-3 mb-4 drop-shadow">
                            {service.description[lang]}
                          </p>
                          
                          {/* CTA */}
                          <div className="mt-auto flex items-center gap-2 text-white font-bold">
                            <span className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-lg text-sm">
                              {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                            </span>
                            <span className="group-hover:translate-x-1 transition-transform">
                              {lang === 'ar' ? '←' : '→'}
                            </span>
                          </div>
                        </div>

                        {/* Hover Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 scale-150`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {lang === 'ar' ? '🎯 جاهز لبدء مشروعك؟' : '🎯 Ready to Start Your Project?'}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك'
              : 'Get a free consultation and discover how we can help you'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`/${lang}/contact`}
              className="px-10 py-4 bg-white text-purple-600 rounded-xl font-black text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            >
              {lang === 'ar' ? '📞 تواصل معنا' : '📞 Contact Us'}
            </a>
            <a
              href={`/${lang}/book-appointment`}
              className="px-10 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-xl font-black text-lg shadow-2xl hover:bg-white/30 transform hover:scale-105 transition-all"
            >
              {lang === 'ar' ? '📅 احجز موعد' : '📅 Book Appointment'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
