import Link from 'next/link';
import { SERVICES } from '@/content/services';
import { portfolioProjects } from '@/content/portfolioProjects';

export const metadata = {
  title: 'الصفحة غير موجودة - 404 | HMZ Iraq',
  description: 'الصفحة التي تبحث عنها غير موجودة. تصفح خدماتنا ومشاريعنا أو تواصل معنا.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  // أشهر 6 خدمات
  const topServices = SERVICES.slice(0, 6);
  
  // أحدث 4 مشاريع
  const recentProjects = portfolioProjects.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="container mx-auto px-4 py-16">
        {/* 404 Hero */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="text-9xl font-bold text-blue-600 opacity-20">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر.
          </p>
          
          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-8">
            <form className="flex gap-2">
              <input
                type="search"
                placeholder="ابحث عن خدمة أو مشروع..."
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                dir="rtl"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                بحث
              </button>
            </form>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              العودة للرئيسية
            </Link>
            <Link
              href="/ar/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              تواصل معنا
            </Link>
          </div>
        </div>

        {/* Popular Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            خدماتنا الأكثر طلباً
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map(service => (
              <Link
                key={service.key}
                href={`/ar/services/${service.key}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.name.ar}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description.ar}
                </p>
                <div className="text-blue-600 font-semibold flex items-center gap-2">
                  اعرف المزيد
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Projects */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            أحدث مشاريعنا
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProjects.map(project => (
              <Link
                key={project.id}
                href={`/ar/projects/${project.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {project.category.ar}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {project.title.ar}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description.ar}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            هل تحتاج مساعدة؟
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            فريقنا جاهز لمساعدتك في إيجاد ما تبحث عنه أو الإجابة على أي استفسارات لديك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/services"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              تصفح جميع الخدمات
            </Link>
            <Link
              href="/ar/projects"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              شاهد المشاريع
            </Link>
            <Link
              href="/ar/blog"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              اقرأ المدونة
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
