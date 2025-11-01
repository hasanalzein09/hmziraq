import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { portfolioProjects } from '@/content/portfolioProjects';
import { SERVICES } from '@/content/services';
import Link from 'next/link';

type Props = {
  params: Promise<{ lang: 'ar' | 'en'; slug: string }>;
};

// Generate first 100 projects for static generation (rest will be on-demand)
export async function generateStaticParams() {
  const languages = ['ar', 'en'];
  const projects = portfolioProjects.slice(0, 100); // Generate first 100 projects
  
  return projects.flatMap(project => 
    languages.map(lang => ({
      lang,
      slug: project.slug
    }))
  );
}

// SEO metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const service = SERVICES.find((s) => s.key === project.serviceKey);
  const title = project.title[lang];
  const description = project.description[lang];
  const serviceName = service?.name[lang] || '';

  return {
    title: `${title} | ${serviceName} | HMZ Iraq`,
    description: description,
    keywords: [
      title,
      serviceName,
      project.category[lang],
      'العراق',
      'Iraq',
      'بغداد',
      'Baghdad',
      ...(service?.keywords || []),
    ],
    openGraph: {
      title: `${title} - ${serviceName}`,
      description: description,
      type: 'article',
      locale: lang === 'ar' ? 'ar_IQ' : 'en_US',
    },
    alternates: {
      canonical: `/${lang}/projects/${slug}`,
      languages: {
        'ar': `/ar/projects/${slug}`,
        'en': `/en/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const service = SERVICES.find((s) => s.key === project.serviceKey);
  const isRTL = lang === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `https://www.hmziraq.services/${lang}/projects/${slug}#webpage`,
            url: `https://www.hmziraq.services/${lang}/projects/${slug}`,
            name: project.title[lang],
            description: project.description[lang],
            inLanguage: lang === 'ar' ? 'ar-IQ' : 'en-US',
            isPartOf: {
              '@id': 'https://www.hmziraq.services/#website'
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: lang === 'ar' ? 'الرئيسية' : 'Home',
                  item: `https://www.hmziraq.services/${lang}`
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: lang === 'ar' ? 'المشاريع' : 'Projects',
                  item: `https://www.hmziraq.services/${lang}/projects`
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: project.title[lang],
                  item: `https://www.hmziraq.services/${lang}/projects/${slug}`
                }
              ]
            },
            mainEntity: {
              '@type': 'CreativeWork',
              '@id': `https://www.hmziraq.services/${lang}/projects/${slug}#project`,
              name: project.title[lang],
              description: project.description[lang],
              creator: {
                '@type': 'Organization',
                '@id': 'https://www.hmziraq.services/#organization',
                name: 'HMZ Iraq',
                url: 'https://www.hmziraq.services',
              },
              about: {
                '@type': 'Service',
                name: service?.name[lang],
                description: service?.description[lang],
                provider: {
                  '@id': 'https://www.hmziraq.services/#organization'
                }
              },
              keywords: service?.keywords.join(', '),
              inLanguage: lang === 'ar' ? 'ar-IQ' : 'en-US'
            }
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${lang}`} className="hover:text-blue-600">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/projects`} className="hover:text-blue-600">
              {lang === 'ar' ? 'المشاريع' : 'Projects'}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{project.title[lang]}</span>
          </nav>
        </div>
      </div>

      {/* Project Header */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Service Badge */}
            <Link
              href={`/${lang}/services`}
              className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
            >
              {service?.name[lang]}
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title[lang]}
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {project.description[lang]}
            </p>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="font-medium">{project.category[lang]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {lang === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-8">
                  {project.description[lang]}
                </p>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                  <div className="p-6 bg-blue-50 rounded-xl">
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      {lang === 'ar' ? 'نوع الخدمة' : 'Service Type'}
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {service?.name[lang]}
                    </div>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-xl">
                    <div className="text-sm font-semibold text-purple-600 mb-2">
                      {lang === 'ar' ? 'القطاع' : 'Category'}
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {project.category[lang]}
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <h3 className="text-2xl font-bold mb-6 mt-12">
                  {lang === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {lang === 'ar' 
                        ? 'تصميم احترافي متجاوب مع جميع الأجهزة'
                        : 'Professional responsive design for all devices'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {lang === 'ar' 
                        ? 'تحسين محركات البحث (SEO) كامل'
                        : 'Complete SEO optimization'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {lang === 'ar' 
                        ? 'سرعة تحميل فائقة وأداء ممتاز'
                        : 'Fast loading speed and excellent performance'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>
                      {lang === 'ar' 
                        ? 'تكامل مع أنظمة الدفع الإلكتروني'
                        : 'Integration with payment systems'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                {lang === 'ar' 
                  ? 'هل تريد مشروع مشابه؟'
                  : 'Want a Similar Project?'}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {lang === 'ar'
                  ? 'احجز استشارة مجانية الآن وابدأ مشروعك معنا'
                  : 'Book a free consultation now and start your project with us'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${lang}/book-appointment`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors"
                >
                  {lang === 'ar' ? 'احجز موعد' : 'Book Appointment'}
                  <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={`/${lang}/services`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold hover:bg-white/30 transition-colors"
                >
                  {lang === 'ar' ? 'تصفح الخدمات' : 'Browse Services'}
                </Link>
              </div>
            </div>

            {/* Related Projects */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                {lang === 'ar' ? 'مشاريع ذات صلة' : 'Related Projects'}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {portfolioProjects
                  .filter((p) => p.serviceKey === project.serviceKey && p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      href={`/${lang}/projects/${relatedProject.slug}`}
                      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedProject.title[lang]}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {relatedProject.description[lang]}
                        </p>
                        <div className="flex items-center text-sm text-blue-600 font-semibold">
                          {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                          <svg className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'} group-hover:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
