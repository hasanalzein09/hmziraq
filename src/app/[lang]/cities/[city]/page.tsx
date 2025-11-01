import { Metadata } from 'next';
import { IRAQ_CITIES, getCityByKey } from '@/content/iraqCities';
import { SERVICES } from '@/content/services';
import { portfolioProjects } from '@/content/portfolioProjects';
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

interface CityPageProps {
  params: Promise<{
    lang: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  // 🎯 Pre-generate ONLY top 4 cities (not all 16 high-potential!)
  // Rest accessible via ISR on-demand
  const topCities = ['baghdad', 'basra', 'erbil', 'mosul'];
  
  return ['ar', 'en'].flatMap(lang =>
    topCities.map(cityKey => ({
      lang,
      city: cityKey
    }))
  );
  // Generates: 4 cities × 2 languages = 8 pages only
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { lang, city: cityKey } = await params;
  const city = getCityByKey(cityKey);
  
  if (!city) {
    return {
      title: 'المدينة غير موجودة',
    };
  }

  const title = lang === 'ar'
    ? `خدمات تطوير المواقع والتطبيقات في ${city.ar} | HMZ Iraq`
    : `Web & App Development Services in ${city.en} | HMZ Iraq`;
    
  const description = lang === 'ar'
    ? `أفضل شركة تطوير مواقع وتطبيقات في ${city.ar}، العراق. نقدم خدمات واتساب بوت، متاجر إلكترونية، تطبيقات جوال، وحلول رقمية متكاملة.`
    : `Best web and app development company in ${city.en}, Iraq. We offer WhatsApp bots, e-commerce, mobile apps, and complete digital solutions.`;

  return {
    title,
    description,
    keywords: [
      ...city.keywords,
      lang === 'ar' ? 'تطوير مواقع' : 'web development',
      lang === 'ar' ? 'تطبيقات جوال' : 'mobile apps',
      lang === 'ar' ? 'متجر إلكتروني' : 'e-commerce',
    ],
    alternates: {
      canonical: `https://www.hmziraq.services/${lang}/cities/${cityKey}`,
      languages: {
        ar: `https://www.hmziraq.services/ar/cities/${cityKey}`,
        en: `https://www.hmziraq.services/en/cities/${cityKey}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.hmziraq.services/${lang}/cities/${cityKey}`,
      locale: lang === 'ar' ? 'ar_IQ' : 'en_US',
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { lang, city: cityKey } = await params;
  const city = getCityByKey(cityKey);
  
  if (!city) {
    return <div>المدينة غير موجودة</div>;
  }

  // الحصول على المشاريع المرتبطة بهذه المدينة
  const cityProjects = portfolioProjects.filter(project => 
    project.description[lang === 'ar' ? 'ar' : 'en'].includes(city.ar) ||
    project.description[lang === 'ar' ? 'ar' : 'en'].includes(city.en)
  ).slice(0, 6);

  const breadcrumbItems = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', url: `https://www.hmziraq.services/${lang}` },
    { name: lang === 'ar' ? 'المدن' : 'Cities', url: `https://www.hmziraq.services/${lang}/cities` },
    { name: city[lang === 'ar' ? 'ar' : 'en'], url: `https://www.hmziraq.services/${lang}/cities/${cityKey}` },
  ];

  return (
    <>
      <OrganizationSchema lang={lang} />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {lang === 'ar' 
                ? `خدمات تطوير المواقع والتطبيقات في ${city.ar}`
                : `Web & App Development Services in ${city.en}`
              }
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {lang === 'ar'
                ? `نقدم أفضل الحلول الرقمية في ${city.ar} مع فريق محترف وخبرة واسعة في السوق العراقي`
                : `We provide the best digital solutions in ${city.en} with a professional team and extensive experience in the Iraqi market`
              }
            </p>
            
            {/* City Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">
                  {city.population.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {lang === 'ar' ? 'نسمة' : 'Population'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-green-600">
                  {SERVICES.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {lang === 'ar' ? 'خدمة متاحة' : 'Services'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-purple-600">
                  {cityProjects.length}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {lang === 'ar' ? 'مشروع منجز' : 'Projects'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-orange-600">
                  4.9 ⭐
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {lang === 'ar' ? 'تقييم العملاء' : 'Rating'}
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {lang === 'ar' ? `خدماتنا في ${city.ar}` : `Our Services in ${city.en}`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(service => (
                <a
                  key={service.key}
                  href={`/${lang}/services/${service.key}`}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.name[lang === 'ar' ? 'ar' : 'en']}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description[lang === 'ar' ? 'ar' : 'en']}
                  </p>
                  <div className="text-blue-600 font-semibold">
                    {lang === 'ar' ? 'اعرف المزيد ←' : 'Learn More →'}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Projects Showcase */}
          {cityProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {lang === 'ar' ? `مشاريعنا في ${city.ar}` : `Our Projects in ${city.en}`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityProjects.map(project => (
                  <a
                    key={project.id}
                    href={`/${lang}/projects/${project.slug}`}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-sm text-blue-600 mb-2">
                      {project.category[lang === 'ar' ? 'ar' : 'en']}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.title[lang === 'ar' ? 'ar' : 'en']}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description[lang === 'ar' ? 'ar' : 'en']}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {lang === 'ar' 
                ? `جاهز لبدء مشروعك في ${city.ar}؟`
                : `Ready to start your project in ${city.en}?`
              }
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {lang === 'ar'
                ? 'احجز استشارة مجانية مع فريقنا اليوم'
                : 'Book a free consultation with our team today'
              }
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </a>
          </div>

          {/* Districts (if available) */}
          {city.districts && city.districts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {lang === 'ar' ? `نخدم جميع مناطق ${city.ar}` : `We serve all areas of ${city.en}`}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {city.districts.map(district => (
                  <div
                    key={district}
                    className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm"
                  >
                    {district}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// تفعيل ISR - الصفحة ستُعاد توليدها كل 24 ساعة
export const revalidate = 86400;
