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

        {/* Services Grid - DRAMATIC REDESIGN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredServices.map((service, i) => {
            // Dynamic gradient colors based on service category
            const gradients = [
              'from-blue-500 via-purple-500 to-pink-500',
              'from-green-500 via-teal-500 to-cyan-500',
              'from-orange-500 via-red-500 to-pink-500',
              'from-purple-500 via-indigo-500 to-blue-500',
              'from-yellow-500 via-orange-500 to-red-500',
              'from-pink-500 via-purple-500 to-indigo-500',
              'from-teal-500 via-green-500 to-emerald-500',
              'from-red-500 via-pink-500 to-rose-500',
              'from-indigo-500 via-purple-500 to-pink-500',
              'from-cyan-500 via-blue-500 to-indigo-500',
              'from-lime-500 via-green-500 to-emerald-500',
              'from-fuchsia-500 via-purple-500 to-pink-500'
            ];
            const gradient = gradients[i % gradients.length];

            return (
              <motion.a 
                key={service.key}
                href={`/${lang}/services#${service.key}`}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                {/* Gradient Background with Animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150`} />
                
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between z-10">
                  {/* Icon with 3D Effect */}
                  <motion.div 
                    className="text-6xl mb-4 drop-shadow-2xl"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.key.includes('whatsapp') ? '💬' :
                     service.key.includes('instagram') ? '📸' :
                     service.key.includes('facebook') ? '📘' :
                     service.key.includes('ai') && service.key.includes('chatbot') ? '🤖' :
                     service.key.includes('ai') && service.key.includes('content') ? '✍️' :
                     service.key.includes('ai') && service.key.includes('voice') ? '🎙️' :
                     service.key.includes('web') || service.key.includes('nextjs') || service.key.includes('wordpress') ? '💻' :
                     service.key.includes('mobile') || service.key.includes('app') ? '📱' :
                     service.key.includes('ecommerce') || service.key.includes('store') ? '🛒' :
                     service.key.includes('seo') ? '🔍' :
                     service.key.includes('marketing') ? '📈' :
                     service.key.includes('social') ? '📣' :
                     service.key.includes('design') ? '🎨' :
                     service.key.includes('security') ? '🔒' :
                     service.key.includes('restaurant') || service.key.includes('pos') ? '🍽️' :
                     service.key.includes('booking') || service.key.includes('appointment') ? '📅' :
                     service.key.includes('erp') || service.key.includes('crm') ? '💼' : '⚡'}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-black mb-3 text-white drop-shadow-lg leading-tight">
                    {service.name[lang]}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm line-clamp-2 mb-4 font-medium drop-shadow">
                    {service.description[lang]}
                  </p>
                  
                  {/* CTA with Arrow Animation */}
                  <motion.div 
                    className="flex items-center gap-2 text-white font-bold text-lg mt-auto"
                    whileHover={{ x: lang === 'ar' ? -10 : 10 }}
                  >
                    <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">
                      {lang === 'ar' ? 'اطلب الآن' : 'Request Now'}
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      {lang === 'ar' ? '←' : '→'}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Sparkle Effects on Hover */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                />
              </motion.a>
            );
          })}
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
