import { Metadata } from 'next';
import Link from 'next/link';
import { portfolioProjects } from '@/content/portfolioProjects';
import { SERVICES } from '@/content/services';
import ProjectFilters from '@/components/ProjectFilters';

type Props = {
  params: Promise<{ lang: 'ar' | 'en' }>;
  searchParams: Promise<{ service?: string; category?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: lang === 'ar' ? 'جميع المشاريع | hmziraq.tech' : 'All Projects | hmziraq.tech',
    description:
      lang === 'ar'
        ? '400 مشروع ناجح في العراق - شاهد أعمالنا في تطوير بوتات واتساب، مواقع ويب، متاجر إلكترونية، SEO، وحلول الذكاء الاصطناعي'
        : '400 successful projects in Iraq - View our work in WhatsApp bots, websites, eCommerce stores, SEO, and AI automation solutions',
    keywords: [
      lang === 'ar' ? 'مشاريع العراق' : 'Iraq projects',
      lang === 'ar' ? 'أعمالنا' : 'Our work',
      lang === 'ar' ? 'معرض أعمال' : 'Portfolio',
      ...SERVICES.flatMap((s) => s.keywords).slice(0, 10),
    ],
    openGraph: {
      title: lang === 'ar' ? 'جميع المشاريع | hmziraq.tech' : 'All Projects | hmziraq.tech',
      description:
        lang === 'ar'
          ? '400 مشروع ناجح في العراق'
          : '400 successful projects in Iraq',
      type: 'website',
      locale: lang === 'ar' ? 'ar_IQ' : 'en_US',
    },
  };
}

export default async function ProjectsPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const { service: serviceFilter, category: categoryFilter } = await searchParams;
  const isRTL = lang === 'ar';

  // Filter projects
  let filteredProjects = [...portfolioProjects];

  if (serviceFilter) {
    filteredProjects = filteredProjects.filter((p) => p.serviceKey === serviceFilter);
  }

  if (categoryFilter) {
    filteredProjects = filteredProjects.filter((p) => 
      p.category[lang].toLowerCase().includes(categoryFilter.toLowerCase())
    );
  }

  // Get unique categories for filter
  const uniqueCategories = Array.from(
    new Set(portfolioProjects.map((p) => p.category[lang]))
  ).sort();

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {lang === 'ar' ? 'معرض أعمالنا' : 'Our Portfolio'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {lang === 'ar'
                ? '400 مشروع ناجح في العراق - تطوير حلول رقمية مبتكرة للشركات العراقية'
                : '400 successful projects in Iraq - Developing innovative digital solutions for Iraqi businesses'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{lang === 'ar' ? '400+ مشروع' : '400+ Projects'}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{lang === 'ar' ? '8 خدمات' : '8 Services'}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{lang === 'ar' ? 'في جميع أنحاء العراق' : 'All Over Iraq'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <ProjectFilters
            lang={lang}
            serviceFilter={serviceFilter}
            categoryFilter={categoryFilter}
            services={SERVICES}
            categories={uniqueCategories}
          />

          {/* Reset Filters */}
          {(serviceFilter || categoryFilter) && (
            <div className="mt-4">
              <Link
                href={`/${lang}/projects`}
                className="inline-block px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                {lang === 'ar' ? 'إعادة تعيين' : 'Reset Filters'}
              </Link>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {lang === 'ar' 
              ? `عرض ${filteredProjects.length} من ${portfolioProjects.length} مشروع`
              : `Showing ${filteredProjects.length} of ${portfolioProjects.length} projects`}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const service = SERVICES.find((s) => s.key === project.serviceKey);
              
              return (
                <Link
                  key={project.id}
                  href={`/${lang}/projects/${project.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Service Badge */}
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {service?.name[lang]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                      {project.title[lang]}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description[lang]}
                    </p>

                    {/* Category */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span>{project.category[lang]}</span>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                      {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                      <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                {lang === 'ar' ? 'لا توجد مشاريع' : 'No Projects Found'}
              </h3>
              <p className="text-gray-600 mb-6">
                {lang === 'ar' 
                  ? 'جرب تغيير خيارات التصفية'
                  : 'Try changing the filter options'}
              </p>
              <Link
                href={`/${lang}/projects`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {lang === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {lang === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'دعنا نساعدك في تحويل فكرتك إلى واقع. احجز استشارة مجانية اليوم'
              : 'Let us help you turn your idea into reality. Book a free consultation today'}
          </p>
          <Link
            href={`/${lang}/book-appointment`}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
          >
            {lang === 'ar' ? 'احجز موعد مجاني' : 'Book Free Consultation'}
            <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
