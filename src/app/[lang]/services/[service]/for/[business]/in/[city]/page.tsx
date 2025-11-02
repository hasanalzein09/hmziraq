import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/content/services';
import { BUSINESS_TYPES } from '@/content/businessTypes';
import { getCityByKey } from '@/content/iraqCities';
import { pricingPackages } from '@/content/pricingPackages';
import { getCityInsights } from '@/content/cityInsights';
import { getServiceDeepContent } from '@/content/serviceDeepContent';
import ContactForm from '@/components/ContactForm';
import { getServiceFAQs } from '@/content/serviceFAQs';

// Types
type Props = {
  params: Promise<{
    lang: 'ar' | 'en';
    service: string;
    business: string;
    city: string;
  }>;
};

// ============================================================================
// 🎯 ULTRA-LIGHTWEIGHT PRE-GENERATION STRATEGY
// ============================================================================
// Strategy: Pre-generate ONLY 32 highest-value pages (not 320!)
// All 875,160 pages are still accessible via ISR - just generated on-demand
// This keeps Vercel functions under 100 (way below limits)
export async function generateStaticParams() {
  // Only TOP 2 services for initial build (most searched)
  const topServices = [
    'whatsapp-bot',      // #1 most popular
    'instagram-bot'      // #2 most popular
  ];

  // Only TOP 4 business types (highest traffic)
  const topBusinesses = [
    'restaurants',       // #1 highest demand
    'cafes',            // #2 highest demand
    'hospitals',        // #3 highest demand
    'clinics'           // #4 highest demand
  ];

  // Only TOP 2 cities (90% of traffic)
  const topCities = [
    'baghdad',          // 60% of traffic
    'basra'             // 30% of traffic
  ];

  const languages: ('ar' | 'en')[] = ['ar', 'en'];

  const params = [];
  
  for (const lang of languages) {
    for (const service of topServices) {
      for (const business of topBusinesses) {
        for (const city of topCities) {
          params.push({
            lang,
            service,
            business,
            city
          });
        }
      }
    }
  }

  // This generates: 2 services × 4 businesses × 2 cities × 2 languages = 32 pages ONLY!
  // Rest (875,128 pages) generated on-demand via ISR
  console.log(`🚀 Pre-generating ${params.length} highest-value pages. Remaining 875,128 pages via ISR on-demand.`);
  return params;
}

// Enable ISR - generate other pages on-demand and cache for 1 hour
export const revalidate = 3600; // 1 hour
export const dynamicParams = true; // Allow generation of pages not in generateStaticParams

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, service: serviceKey, business: businessKey, city: cityKey } = await params;
  
  const service = SERVICES.find(s => s.key === serviceKey);
  const business = BUSINESS_TYPES.find(b => b.key === businessKey);
  const city = getCityByKey(cityKey);

  if (!service || !business || !city) {
    return {
      title: 'Not Found',
    };
  }

  const serviceName = service.name[lang];
  const businessName = business.name[lang];
  const cityName = city[lang];

  const title = lang === 'ar' 
    ? `${serviceName} ${businessName} في ${cityName} | حمزي العراق`
    : `${serviceName} for ${businessName} in ${cityName} | Hmzi Iraq`;

  const description = lang === 'ar'
    ? `حلول ${serviceName} متخصصة لـ${businessName} في ${cityName}, العراق. خدمات احترافية، أسعار منافسة، دعم محلي. احصل على عرض سعر مجاني اليوم!`
    : `Specialized ${serviceName} solutions for ${businessName} in ${cityName}, Iraq. Professional services, competitive pricing, local support. Get a free quote today!`;

  const keywords = [
    serviceName,
    businessName,
    cityName,
    ...service.keywords,
    ...business.keywords.slice(0, 10),
    ...city.keywords
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `/${lang}/services/${serviceKey}/for/${businessKey}/in/${cityKey}`,
      languages: {
        'ar': `/ar/services/${serviceKey}/for/${businessKey}/in/${cityKey}`,
        'en': `/en/services/${serviceKey}/for/${businessKey}/in/${cityKey}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/services/${serviceKey}/for/${businessKey}/in/${cityKey}`,
      type: 'website',
      locale: lang === 'ar' ? 'ar_IQ' : 'en_US',
      siteName: 'Hmzi Iraq',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// Main page component
export default async function ProgrammaticServicePage({ params }: Props) {
  const { lang, service: serviceKey, business: businessKey, city: cityKey } = await params;
  
  const service = SERVICES.find(s => s.key === serviceKey);
  const business = BUSINESS_TYPES.find(b => b.key === businessKey);
  const city = getCityByKey(cityKey);

  if (!service || !business || !city) {
    notFound();
  }

  const serviceName = service.name[lang];
  const businessName = business.name[lang];
  const cityName = city[lang];
  const pricing = pricingPackages[serviceKey];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `${serviceName} ${businessName} ${cityName}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: cityName,
              addressCountry: 'IQ',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: city.coordinates.lat,
              longitude: city.coordinates.lng,
            },
            description: `${serviceName} for ${businessName} in ${cityName}`,
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {lang === 'ar' ? (
                  <>
                    {serviceName} <span className="text-blue-600">لـ{businessName}</span> في {cityName}
                  </>
                ) : (
                  <>
                    {serviceName} <span className="text-blue-600">for {businessName}</span> in {cityName}
                  </>
                )}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                {lang === 'ar'
                  ? `حلول رقمية احترافية ومتخصصة لقطاع ${businessName} في ${cityName}، العراق`
                  : `Professional digital solutions specialized for ${businessName} sector in ${cityName}, Iraq`}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href={`/${lang}/book-appointment`}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
                >
                  {lang === 'ar' ? '📞 احجز استشارة مجانية' : '📞 Book Free Consultation'}
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg text-lg font-semibold"
                >
                  {lang === 'ar' ? '💬 تواصل معنا' : '💬 Contact Us'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* City Market Insights Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              {lang === 'ar' ? `📊 سوق ${cityName} الرقمي` : `📊 ${cityName} Digital Market`}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              {lang === 'ar' 
                ? `فرص نمو استثنائية لقطاع ${businessName} في ${cityName}` 
                : `Exceptional growth opportunities for ${businessName} sector in ${cityName}`}
            </p>
            
            {(() => {
              const insights = getCityInsights(cityKey, lang);
              if (!insights) return null;
              
              return (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {/* Market Size */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                    <div className="text-3xl mb-3">💼</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {lang === 'ar' ? 'حجم السوق' : 'Market Size'}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">{insights.marketSize}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {lang === 'ar' ? 'فرصة نمو كبيرة' : 'Major growth opportunity'}
                    </p>
                  </div>

                  {/* Business Opportunity */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {lang === 'ar' ? 'فرصة الأعمال' : 'Business Opportunity'}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {insights.businessOpportunity}
                    </p>
                  </div>

                  {/* Competition Level */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                    <div className="text-3xl mb-3">📈</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {lang === 'ar' ? 'مستوى المنافسة' : 'Competition Level'}
                    </h3>
                    <p className="text-2xl font-bold text-yellow-600 mb-2">{insights.competitionLevel}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {lang === 'ar' ? 'وقت مثالي للدخول' : 'Perfect time to enter'}
                    </p>
                  </div>

                  {/* Average ROI */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                    <div className="text-3xl mb-3">💰</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {lang === 'ar' ? 'متوسط العائد' : 'Average ROI'}
                    </h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">{insights.averageROI}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {lang === 'ar' ? 'خلال 6 أشهر' : 'Within 6 months'}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Local Trends */}
            {(() => {
              const insights = getCityInsights(cityKey, lang);
              if (!insights) return null;
              
              return (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <span>🔥</span>
                    {lang === 'ar' ? 'الاتجاهات المحلية' : 'Local Trends'}
                  </h3>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {insights.localTrends}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              {lang === 'ar' 
                ? `لماذا تختار خدمة ${serviceName} من حمزي العراق؟` 
                : `Why Choose Our ${serviceName} Service?`}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'متخصصون في قطاع' : 'Specialized in'} {businessName}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {lang === 'ar'
                    ? `نفهم احتياجات ${businessName} في ${cityName} بعمق ونقدم حلولاً مخصصة تلبي متطلباتك الفريدة`
                    : `We deeply understand ${businessName} needs in ${cityName} and provide customized solutions for your unique requirements`}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'خدمة محلية في' : 'Local Service in'} {cityName}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {lang === 'ar'
                    ? `فريقنا متواجد في ${cityName} لتقديم الدعم الفني السريع والصيانة المستمرة`
                    : `Our team is based in ${cityName} to provide fast technical support and ongoing maintenance`}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'أسعار تنافسية' : 'Competitive Pricing'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {lang === 'ar'
                    ? 'باقات مرنة تناسب جميع الميزانيات مع ضمان أعلى جودة'
                    : 'Flexible packages for all budgets with guaranteed highest quality'}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'تنفيذ سريع' : 'Fast Implementation'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {lang === 'ar'
                    ? 'نبدأ العمل فوراً ونسلم مشروعك في أقصر وقت ممكن'
                    : 'We start immediately and deliver your project in the shortest time possible'}
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'دعم فني 24/7' : '24/7 Technical Support'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {lang === 'ar'
                    ? 'فريق الدعم جاهز لمساعدتك في أي وقت عبر الهاتف والواتساب'
                    : 'Support team ready to help you anytime via phone and WhatsApp'}
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {lang === 'ar' ? 'خبرة مثبتة' : 'Proven Experience'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {lang === 'ar'
                    ? `سجل حافل بالمشاريع الناجحة لـ${businessName} في ${cityName} والعراق`
                    : `Track record of successful projects for ${businessName} in ${cityName} and Iraq`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              {lang === 'ar' 
                ? `كيف نساعد ${businessName} في ${cityName}؟`
                : `How We Help ${businessName} in ${cityName}?`}
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Challenge */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
                  {lang === 'ar' ? '🎯 التحدي' : '🎯 The Challenge'}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? `يواجه ${businessName} في ${cityName} تحديات كبيرة في العصر الرقمي: من صعوبة التواصل مع العملاء، إلى إدارة الطلبات يدوياً، وعدم القدرة على المنافسة مع الشركات التي تستخدم التكنولوجيا الحديثة. كثير من الأعمال تخسر فرصاً ثمينة بسبب غياب الحلول الرقمية المناسبة.`
                    : `${businessName} in ${cityName} face major challenges in the digital age: difficulty communicating with customers, manual order management, and inability to compete with companies using modern technology. Many businesses lose valuable opportunities due to lack of suitable digital solutions.`}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {lang === 'ar' ? '💡 الحل' : '💡 The Solution'}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {lang === 'ar'
                    ? `نقدم ${serviceName} متطوراً ومصمماً خصيصاً لـ${businessName} في ${cityName}. حلولنا تشمل:`
                    : `We provide advanced ${serviceName} designed specifically for ${businessName} in ${cityName}. Our solutions include:`}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-lg">
                      {lang === 'ar'
                        ? `أتمتة كاملة للعمليات اليومية وتوفير الوقت والجهد`
                        : `Complete automation of daily operations saving time and effort`}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-lg">
                      {lang === 'ar'
                        ? `تحسين تجربة العملاء من خلال ردود فورية وخدمة متاحة 24/7`
                        : `Improved customer experience through instant responses and 24/7 service`}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-lg">
                      {lang === 'ar'
                        ? `زيادة المبيعات عبر تسهيل عملية الطلب والدفع`
                        : `Increased sales by facilitating order and payment process`}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-lg">
                      {lang === 'ar'
                        ? `تقارير وإحصائيات دقيقة لاتخاذ قرارات ذكية`
                        : `Accurate reports and statistics for smart decision making`}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-lg">
                      {lang === 'ar'
                        ? `تكامل سلس مع أنظمتك الحالية دون تعقيدات`
                        : `Seamless integration with your existing systems without complications`}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Results */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
                  {lang === 'ar' ? '📈 النتائج المتوقعة' : '📈 Expected Results'}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl">📊</div>
                    <div>
                      <div className="font-bold text-2xl text-green-600">+85%</div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {lang === 'ar' ? 'زيادة في الكفاءة' : 'Efficiency Increase'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl">💰</div>
                    <div>
                      <div className="font-bold text-2xl text-blue-600">+60%</div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {lang === 'ar' ? 'زيادة في المبيعات' : 'Sales Increase'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl">⏱️</div>
                    <div>
                      <div className="font-bold text-2xl text-purple-600">-70%</div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {lang === 'ar' ? 'توفير في الوقت' : 'Time Savings'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-3xl">😊</div>
                    <div>
                      <div className="font-bold text-2xl text-yellow-600">95%</div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {lang === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Benefits Section */}
        {(() => {
          const deepContent = getServiceDeepContent(serviceKey, lang);
          if (!deepContent || !deepContent.benefits) return null;
          
          return (
            <section className="py-16 bg-white dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  {lang === 'ar' ? `✨ فوائد ${serviceName} لـ${businessName}` : `✨ ${serviceName} Benefits for ${businessName}`}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                  {lang === 'ar' 
                    ? `كيف يمكن لهذه الخدمة أن تحول عملك في ${cityName}` 
                    : `How this service can transform your business in ${cityName}`}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {deepContent.benefits.slice(0, 8).map((benefit: any, idx: number) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Service Features Section */}
        {(() => {
          const deepContent = getServiceDeepContent(serviceKey, lang);
          if (!deepContent || !deepContent.features) return null;
          
          return (
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  {lang === 'ar' ? `🚀 مميزات ${serviceName}` : `🚀 ${serviceName} Features`}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                  {lang === 'ar' 
                    ? `تقنيات متقدمة مصممة خصيصاً لاحتياجات ${businessName}` 
                    : `Advanced technologies designed specifically for ${businessName} needs`}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {deepContent.features.slice(0, 8).map((feature: any, idx: number) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Use Cases Section */}
        {(() => {
          const deepContent = getServiceDeepContent(serviceKey, lang);
          if (!deepContent || !deepContent.useCases) return null;
          
          return (
            <section className="py-16 bg-white dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  {lang === 'ar' ? `💡 سيناريوهات الاستخدام` : `💡 Use Cases`}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                  {lang === 'ar' 
                    ? `كيف يستخدم ${businessName} في ${cityName} هذه الخدمة` 
                    : `How ${businessName} in ${cityName} use this service`}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {deepContent.useCases.slice(0, 8).map((useCase: any, idx: number) => (
                    <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg">
                      <div className="text-4xl mb-4">{useCase.icon}</div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* ROI Metrics Section */}
        {(() => {
          const deepContent = getServiceDeepContent(serviceKey, lang);
          if (!deepContent || !deepContent.roi) return null;
          
          const roiData = deepContent.roi as any;
          const roiMetrics = [
            { key: 'timeSaved', icon: '⏱️', label: lang === 'ar' ? 'توفير الوقت' : 'Time Saved', color: 'blue' },
            { key: 'costReduction', icon: '💰', label: lang === 'ar' ? 'تقليل التكاليف' : 'Cost Reduction', color: 'green' },
            { key: 'salesIncrease', icon: '📈', label: lang === 'ar' ? 'زيادة المبيعات' : 'Sales Increase', color: 'purple' },
            { key: 'visibilityIncrease', icon: '👁️', label: lang === 'ar' ? 'زيادة الظهور' : 'Visibility', color: 'indigo' },
            { key: 'leadGeneration', icon: '🎯', label: lang === 'ar' ? 'جذب العملاء' : 'Lead Generation', color: 'pink' },
            { key: 'credibilityBoost', icon: '⭐', label: lang === 'ar' ? 'المصداقية' : 'Credibility', color: 'yellow' },
            { key: 'customerSatisfaction', icon: '😊', label: lang === 'ar' ? 'رضا العملاء' : 'Satisfaction', color: 'orange' },
            { key: 'competitiveAdvantage', icon: '🏆', label: lang === 'ar' ? 'الميزة التنافسية' : 'Advantage', color: 'teal' },
            { key: 'userEngagement', icon: '📱', label: lang === 'ar' ? 'التفاعل' : 'Engagement', color: 'cyan' },
            { key: 'retentionRate', icon: '🔄', label: lang === 'ar' ? 'الاحتفاظ' : 'Retention', color: 'lime' },
            { key: 'breakEvenTime', icon: '⚡', label: lang === 'ar' ? 'استرداد التكلفة' : 'Break Even', color: 'red' },
          ];
          
          const availableMetrics = roiMetrics.filter(metric => roiData[metric.key]);
          if (availableMetrics.length === 0) return null;
          
          return (
            <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  {lang === 'ar' ? `📊 عائد الاستثمار المتوقع` : `📊 Expected ROI`}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                  {lang === 'ar' 
                    ? `نتائج حقيقية وقابلة للقياس لـ${businessName} في ${cityName}` 
                    : `Real and measurable results for ${businessName} in ${cityName}`}
                </p>
                
                <div className={`grid md:grid-cols-${Math.min(availableMetrics.length, 5)} gap-6 max-w-6xl mx-auto`}>
                  {availableMetrics.map((metric, idx) => (
                    <div key={idx} className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center border-t-4 border-${metric.color}-500`}>
                      <div className="text-5xl mb-4">{metric.icon}</div>
                      <div className={`text-4xl font-bold text-${metric.color}-600 mb-2`}>{roiData[metric.key]}</div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                        {metric.label}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Success Stories from City */}
        {(() => {
          const insights = getCityInsights(cityKey, lang);
          if (!insights || !insights.successStories) return null;
          
          return (
            <section className="py-16 bg-white dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  {lang === 'ar' ? `🏆 قصص نجاح من ${cityName}` : `🏆 Success Stories from ${cityName}`}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                  {lang === 'ar' 
                    ? `شركات محلية حققت نتائج استثنائية معنا` 
                    : `Local businesses that achieved exceptional results with us`}
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {insights.successStories.map((story: string, idx: number) => (
                    <div key={idx} className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg">
                      <div className="text-5xl mb-4">✨</div>
                      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                        {story}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* FAQs Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              {lang === 'ar' ? `❓ أسئلة شائعة حول ${serviceName}` : `❓ FAQs about ${serviceName}`}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              {lang === 'ar' 
                ? `إجابات على أكثر الأسئلة شيوعاً من عملائنا في ${cityName}` 
                : `Answers to most common questions from our clients in ${cityName}`}
            </p>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {getServiceFAQs(serviceKey, lang).map((faq: any, idx: number) => (
                <details 
                  key={idx} 
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg group"
                >
                  <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">💡</span>
                      {faq.question}
                    </span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed pl-11">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* Schema Markup for FAQs */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: getServiceFAQs(serviceKey, lang).map((faq: any) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer
                    }
                  }))
                })
              }}
            />
          </div>
        </section>

        {/* Pricing Section */}
        {pricing && (
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                {lang === 'ar' ? 'باقات الأسعار' : 'Pricing Packages'}
              </h2>
              <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
                {lang === 'ar' 
                  ? `اختر الباقة المناسبة لـ${businessName} في ${cityName}`
                  : `Choose the right package for your ${businessName} in ${cityName}`}
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[pricing.starter, pricing.professional, pricing.enterprise].map((tier) => (
                  <div
                    key={tier.name.en}
                    className={`bg-gradient-to-br ${
                      tier.recommended
                        ? 'from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 border-4 border-blue-500 shadow-2xl scale-105'
                        : 'from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-2 border-gray-300'
                    } p-8 rounded-2xl relative`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                          {lang === 'ar' ? '⭐ الأكثر شعبية' : '⭐ Most Popular'}
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {tier.name[lang]}
                    </h3>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-blue-600">
                        {tier.price.amount.toLocaleString()}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 mt-2">
                        {tier.price.period[lang]}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.filter(f => f.included).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-green-600 text-xl">✓</span>
                          <span>{feature[lang]}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/${lang}/book-appointment`}
                      className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${
                        tier.recommended
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500'
                      }`}
                    >
                      {tier.ctaText[lang]}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {/* FAQ 1 */}
              <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group">
                <summary className="cursor-pointer font-bold text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                  <span>
                    {lang === 'ar' 
                      ? `كم يستغرق تنفيذ ${serviceName} لـ${businessName}؟`
                      : `How long does it take to implement ${serviceName} for ${businessName}?`}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? `عادةً يستغرق المشروع من 5 إلى 15 يوم عمل حسب حجم ${businessName} ومتطلباتك. نبدأ فوراً بعد الاتفاق ونسلم المشروع جاهزاً للعمل مع تدريب كامل لفريقك.`
                    : `Typically, the project takes 5 to 15 business days depending on the size of your ${businessName} and requirements. We start immediately after agreement and deliver the project ready to operate with full training for your team.`}
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group">
                <summary className="cursor-pointer font-bold text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                  <span>
                    {lang === 'ar' 
                      ? `هل يتطلب الأمر خبرة تقنية لاستخدام النظام؟`
                      : `Does using the system require technical expertise?`}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'إطلاقاً! صممنا النظام ليكون سهل الاستخدام للجميع. نقدم تدريباً شاملاً لك ولفريقك، بالإضافة إلى دعم فني مستمر عبر الهاتف والواتساب.'
                    : 'Not at all! We designed the system to be easy to use for everyone. We provide comprehensive training for you and your team, plus continuous technical support via phone and WhatsApp.'}
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group">
                <summary className="cursor-pointer font-bold text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                  <span>
                    {lang === 'ar' 
                      ? `هل يمكن تخصيص النظام ليناسب احتياجاتي الخاصة؟`
                      : `Can the system be customized to suit my specific needs?`}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? `نعم بالتأكيد! كل مشروع نصممه حسب احتياجاتك الفريدة. نجلس معك لفهم طبيعة عملك ونبني الحل المثالي لـ${businessName} في ${cityName}.`
                    : `Yes absolutely! Every project we design according to your unique needs. We sit with you to understand your business nature and build the perfect solution for ${businessName} in ${cityName}.`}
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group">
                <summary className="cursor-pointer font-bold text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                  <span>
                    {lang === 'ar' 
                      ? 'ماذا يشمل الدعم الفني؟'
                      : 'What does technical support include?'}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'دعمنا الفني يشمل: المساعدة الفورية عبر الهاتف والواتساب، إصلاح أي مشاكل تقنية، تحديثات مجانية، تدريب إضافي عند الحاجة، واستشارات مجانية لتطوير النظام.'
                    : 'Our technical support includes: instant help via phone and WhatsApp, fixing any technical issues, free updates, additional training when needed, and free consultations for system development.'}
                </p>
              </details>

              {/* FAQ 5 */}
              <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group">
                <summary className="cursor-pointer font-bold text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                  <span>
                    {lang === 'ar' 
                      ? `هل النظام آمن لبيانات ${businessName}؟`
                      : `Is the system secure for ${businessName} data?`}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'نعم، الأمان أولويتنا القصوى. نستخدم أحدث تقنيات التشفير والحماية، نحفظ نسخ احتياطية يومية، ونضمن خصوصية بياناتك بالكامل. جميع معلوماتك محمية بأعلى معايير الأمان العالمية.'
                    : 'Yes, security is our top priority. We use the latest encryption and protection technologies, keep daily backups, and guarantee complete privacy of your data. All your information is protected with the highest international security standards.'}
                </p>
              </details>

              {/* FAQ 6 */}
              <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group">
                <summary className="cursor-pointer font-bold text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                  <span>
                    {lang === 'ar' 
                      ? 'ما هي طرق الدفع المتاحة؟'
                      : 'What payment methods are available?'}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'نقبل جميع طرق الدفع: نقداً في مكتبنا، تحويل بنكي، بطاقات الائتمان، وزين كاش. يمكنك أيضاً الدفع بالتقسيط حسب الاتفاق.'
                    : 'We accept all payment methods: cash at our office, bank transfer, credit cards, and Zain Cash. You can also pay in installments by agreement.'}
                </p>
              </details>

              {/* FAQ 7 */}
              <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group">
                <summary className="cursor-pointer font-bold text-lg text-gray-900 dark:text-white list-none flex items-center justify-between">
                  <span>
                    {lang === 'ar' 
                      ? 'هل تقدمون تجربة مجانية قبل الشراء؟'
                      : 'Do you offer a free trial before purchase?'}
                  </span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'نعم! نقدم استشارة مجانية وعرض توضيحي كامل للنظام. يمكنك رؤية كيف سيعمل النظام مع عملك قبل اتخاذ القرار.'
                    : 'Yes! We offer a free consultation and complete system demonstration. You can see how the system will work with your business before making a decision.'}
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {lang === 'ar' 
                ? `جاهز لتطوير ${businessName} في ${cityName}؟`
                : `Ready to Grow Your ${businessName} in ${cityName}?`}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {lang === 'ar'
                ? 'احجز استشارة مجانية الآن واحصل على عرض سعر خاص مع خصم حصري!'
                : 'Book a free consultation now and get a special quote with exclusive discount!'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={`/${lang}/book-appointment`}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
              >
                {lang === 'ar' ? '📞 احجز الآن مجاناً' : '📞 Book Now Free'}
              </Link>
              <a
                href="https://wa.me/9647835551122"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
              >
                {lang === 'ar' ? '💬 واتساب: 07835551122' : '💬 WhatsApp: 07835551122'}
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                {lang === 'ar' ? 'أو راسلنا الآن' : 'Or Message Us Now'}
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                {lang === 'ar' 
                  ? 'املأ النموذج وسنتواصل معك خلال 24 ساعة'
                  : 'Fill the form and we\'ll contact you within 24 hours'}
              </p>
              <ContactForm lang={lang} />
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              {lang === 'ar' ? 'خدمات أخرى قد تهمك' : 'Other Services You May Need'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {SERVICES.filter(s => s.key !== serviceKey)
                .slice(0, 6)
                .map((relatedService) => (
                  <Link
                    key={relatedService.key}
                    href={`/${lang}/services/${relatedService.key}/for/${businessKey}/in/${cityKey}`}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <div className="text-4xl mb-4">🔧</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {relatedService.name[lang]}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {relatedService.description[lang].slice(0, 100)}...
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
