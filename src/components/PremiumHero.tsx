'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PremiumHero({ lang }: { lang: 'ar' | 'en' }) {
  const [selectedService, setSelectedService] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const services = [
    { key: 'web-development', ar: 'تطوير مواقع', en: 'Web Development' },
    { key: 'mobile-apps', ar: 'تطبيقات موبايل', en: 'Mobile Apps' },
    { key: 'ai-chatbot', ar: 'بوت ذكاء اصطناعي', en: 'AI Chatbot' },
    { key: 'e-commerce', ar: 'متجر إلكتروني', en: 'E-Commerce' },
    { key: 'seo', ar: 'تحسين محركات البحث', en: 'SEO' },
    { key: 'social-media', ar: 'إدارة سوشيال ميديا', en: 'Social Media' },
  ];

  const businesses = [
    { key: 'restaurant', ar: 'مطعم', en: 'Restaurant' },
    { key: 'clinic', ar: 'عيادة', en: 'Clinic' },
    { key: 'store', ar: 'متجر', en: 'Store' },
    { key: 'hotel', ar: 'فندق', en: 'Hotel' },
    { key: 'school', ar: 'مدرسة', en: 'School' },
    { key: 'gym', ar: 'نادي رياضي', en: 'Gym' },
  ];

  const cities = [
    { key: 'baghdad', ar: 'بغداد', en: 'Baghdad' },
    { key: 'basra', ar: 'البصرة', en: 'Basra' },
    { key: 'erbil', ar: 'أربيل', en: 'Erbil' },
    { key: 'mosul', ar: 'الموصل', en: 'Mosul' },
    { key: 'najaf', ar: 'النجف', en: 'Najaf' },
    { key: 'karbala', ar: 'كربلاء', en: 'Karbala' },
  ];

  const handleSearch = () => {
    if (selectedService && selectedBusiness && selectedCity) {
      window.location.href = `/${lang}/services/${selectedService}/for/${selectedBusiness}/in/${selectedCity}`;
    } else {
      window.location.href = `/${lang}/services`;
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {lang === 'ar' ? 'اختر خدمتك. فوراً.' : 'Choose Your Service. Instantly.'}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-12 text-white/90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {lang === 'ar' 
              ? 'حلول رقمية متخصصة لكل نوع عمل في كل مدينة عراقية' 
              : 'Specialized digital solutions for every business in every Iraqi city'}
          </motion.p>

          {/* Smart Filter Card */}
          <motion.div 
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              {lang === 'ar' ? '🎯 فلتر ذكي - جاوب 3 أسئلة:' : '🎯 Smart Filter - Answer 3 Questions:'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Service Selector */}
              <div className="text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <label className="block text-white font-bold mb-3 text-lg">
                  {lang === 'ar' ? '1️⃣ شو الخدمة؟' : '1️⃣ What Service?'}
                </label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white font-bold text-lg focus:outline-none focus:border-white/60 transition-all hover:bg-white/30 cursor-pointer"
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                  <option value="" className="bg-gray-800">{lang === 'ar' ? 'اختر خدمة...' : 'Choose service...'}</option>
                  {services.map(s => (
                    <option key={s.key} value={s.key} className="bg-gray-800">
                      {lang === 'ar' ? s.ar : s.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Business Selector */}
              <div className="text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <label className="block text-white font-bold mb-3 text-lg">
                  {lang === 'ar' ? '2️⃣ لشو عملك؟' : '2️⃣ Your Business?'}
                </label>
                <select 
                  value={selectedBusiness}
                  onChange={(e) => setSelectedBusiness(e.target.value)}
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white font-bold text-lg focus:outline-none focus:border-white/60 transition-all hover:bg-white/30 cursor-pointer"
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                  <option value="" className="bg-gray-800">{lang === 'ar' ? 'اختر نوع عملك...' : 'Choose business...'}</option>
                  {businesses.map(b => (
                    <option key={b.key} value={b.key} className="bg-gray-800">
                      {lang === 'ar' ? b.ar : b.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Selector */}
              <div className="text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <label className="block text-white font-bold mb-3 text-lg">
                  {lang === 'ar' ? '3️⃣ وين موجود؟' : '3️⃣ Your Location?'}
                </label>
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white font-bold text-lg focus:outline-none focus:border-white/60 transition-all hover:bg-white/30 cursor-pointer"
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                  <option value="" className="bg-gray-800">{lang === 'ar' ? 'اختر مدينة...' : 'Choose city...'}</option>
                  {cities.map(c => (
                    <option key={c.key} value={c.key} className="bg-gray-800">
                      {lang === 'ar' ? c.ar : c.en}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <motion.button
              onClick={handleSearch}
              className="w-full md:w-auto px-16 py-5 bg-white text-purple-600 rounded-2xl font-black text-xl shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {lang === 'ar' ? '🚀 شوف حلول مخصصة' : '🚀 See Custom Solutions'}
            </motion.button>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a 
                href={`/${lang}/services`}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white text-sm font-semibold transition-all"
              >
                {lang === 'ar' ? '📋 كل الخدمات' : '📋 All Services'}
              </a>
              <a 
                href={`/${lang}/projects`}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white text-sm font-semibold transition-all"
              >
                {lang === 'ar' ? '� مشاريعنا' : '� Our Projects'}
              </a>
              <a 
                href={`/${lang}/contact`}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white text-sm font-semibold transition-all"
              >
                {lang === 'ar' ? '� تواصل معنا' : '� Contact Us'}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
