'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/content/services';

export default function PremiumServices({ lang }: { lang: 'ar' | 'en' }) {
  const featuredServices = SERVICES.slice(0, 12);

  return (
    <section className="py-24 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
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
            {lang === 'ar' ? '🚀 خدماتنا الأكثر طلباً' : '🚀 Most Requested Services'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? 'خدمات متخصصة لكل نوع عمل - من الذكاء الاصطناعي إلى التجارة الإلكترونية'
              : 'Specialized services for every business - from AI to E-Commerce'}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredServices.map((service, i) => (
            <motion.a 
              key={service.key}
              href={`/${lang}/services#${service.key}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">
                {service.key.includes('ai') ? '🤖' :
                 service.key.includes('web') ? '💻' :
                 service.key.includes('mobile') || service.key.includes('app') ? '📱' :
                 service.key.includes('ecommerce') || service.key.includes('store') ? '🛒' :
                 service.key.includes('seo') || service.key.includes('marketing') ? '📈' :
                 service.key.includes('social') ? '📣' :
                 service.key.includes('design') ? '🎨' :
                 service.key.includes('security') ? '🔒' : '⚡'}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {service.name[lang]}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                {service.description[lang]}
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-bold text-sm">
                {lang === 'ar' ? 'اطلب الآن ←' : 'Request Now →'}
              </div>
            </motion.a>
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
            href={`/${lang}/services`}
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {lang === 'ar' ? '� عرض كل الخدمات (85+)' : '� View All Services (85+)'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
