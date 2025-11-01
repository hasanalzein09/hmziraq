'use client';

import { motion } from 'framer-motion';

export default function PremiumBusinessTypes({ lang }: { lang: 'ar' | 'en' }) {
  const projects = [
    {
      title: { ar: 'نظام حجوزات فندقية', en: 'Hotel Booking System' },
      client: { ar: 'فندق الربيع - بغداد', en: 'Al-Rabee Hotel - Baghdad' },
      image: '🏨',
      results: { ar: '+350% حجوزات أونلاين', en: '+350% Online Bookings' },
      tech: { ar: 'ويب + موبايل + AI', en: 'Web + Mobile + AI' },
    },
    {
      title: { ar: 'منصة توصيل طعام', en: 'Food Delivery Platform' },
      client: { ar: 'مطاعم الموصل', en: 'Mosul Restaurants' },
      image: '🍕',
      results: { ar: '+200 مطعم شريك', en: '+200 Partner Restaurants' },
      tech: { ar: 'تطبيق موبايل', en: 'Mobile App' },
    },
    {
      title: { ar: 'بوت خدمة عملاء AI', en: 'AI Customer Service Bot' },
      client: { ar: 'عيادة الأمل - البصرة', en: 'Al-Amal Clinic - Basra' },
      image: '🤖',
      results: { ar: '-70% وقت الانتظار', en: '-70% Wait Time' },
      tech: { ar: 'ذكاء اصطناعي', en: 'Artificial Intelligence' },
    },
    {
      title: { ar: 'متجر إلكتروني متكامل', en: 'Complete E-Commerce Store' },
      client: { ar: 'أزياء العراق', en: 'Iraq Fashion' },
      image: '🛍️',
      results: { ar: '+500 طلب/شهر', en: '+500 Orders/Month' },
      tech: { ar: 'متجر + دفع + شحن', en: 'Store + Payment + Shipping' },
    },
    {
      title: { ar: 'نظام إدارة مدرسة', en: 'School Management System' },
      client: { ar: 'مدارس النور - أربيل', en: 'Al-Noor Schools - Erbil' },
      image: '🎓',
      results: { ar: '+1200 طالب', en: '+1200 Students' },
      tech: { ar: 'ويب + موبايل', en: 'Web + Mobile' },
    },
    {
      title: { ar: 'تطبيق حجز مواعيد', en: 'Appointment Booking App' },
      client: { ar: 'صالونات النجف', en: 'Najaf Salons' },
      image: '💇',
      results: { ar: '+400% كفاءة', en: '+400% Efficiency' },
      tech: { ar: 'موبايل أب', en: 'Mobile App' },
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            {lang === 'ar' ? '💼 مشاريعنا الناجحة' : '💼 Our Success Stories'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'شاهد كيف ساعدنا الشركات العراقية على النمو والنجاح'
              : 'See how we helped Iraqi businesses grow and succeed'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-6xl mb-6">{project.image}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title[lang]}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4 text-sm">
                {project.client[lang]}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-700 dark:text-gray-300 font-bold">
                    {project.results[lang]}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.tech[lang]}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-purple-600 dark:text-purple-400 font-bold text-sm group-hover:translate-x-2 transition-transform" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                  {lang === 'ar' ? 'اقرأ دراسة الحالة ←' : 'Read Case Study →'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a 
            href={`/${lang}/projects`}
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {lang === 'ar' ? '📂 شوف كل المشاريع' : '📂 View All Projects'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
