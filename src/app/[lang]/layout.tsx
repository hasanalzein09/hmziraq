import { Tajawal } from 'next/font/google';
import ContactInfo from '@/components/ContactInfo';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-tajawal',
});

export default async function Layout({ 
  children, 
  params 
}: { 
  children: React.ReactNode; 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${tajawal.variable} font-sans min-h-screen flex flex-col`}>
        <header className="gradient-primary text-white shadow-2xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <a href={`/${lang}`} className="text-3xl font-bold hover:scale-105 transition-transform">
                hmziraq.tech
              </a>
              <nav className="flex flex-wrap gap-6 text-lg">
                <a href={`/${lang}/services`} className="hover:text-yellow-300 transition-colors font-semibold">
                  {lang === 'ar' ? 'الخدمات' : 'Services'}
                </a>
                <a href={`/${lang}/about`} className="hover:text-yellow-300 transition-colors font-semibold">
                  {lang === 'ar' ? 'من نحن' : 'About'}
                </a>
                <a href={`/${lang}/contact`} className="hover:text-yellow-300 transition-colors font-semibold">
                  {lang === 'ar' ? 'تواصل معنا' : 'Contact'}
                </a>
                <a href={`/${lang}/blog`} className="hover:text-yellow-300 transition-colors font-semibold">
                  {lang === 'ar' ? 'مدونة' : 'Blog'}
                </a>
              </nav>
              <div>
                <a href={lang === 'ar' ? '/en' : '/ar'} className="px-6 py-2 bg-white text-purple-600 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
                  {lang === 'ar' ? 'English' : 'العربية'}
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="gradient-dark text-white mt-auto">
          <div className="container mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
                  hmziraq.tech
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {lang === 'ar' 
                    ? 'منصة عراقية رائدة في تقديم الحلول الرقمية المتقدمة لجميع أنواع المصالح والمؤسسات'
                    : 'Leading Iraqi platform for advanced digital solutions for all types of businesses and institutions'}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">
                  {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li><a href={`/${lang}/services`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
                  <li><a href={`/${lang}/about`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'من نحن' : 'About'}</a></li>
                  <li><a href={`/${lang}/contact`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'تواصل معنا' : 'Contact'}</a></li>
                  <li><a href={`/${lang}/blog`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'المدونة' : 'Blog'}</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  {lang === 'ar' ? 'المدن الرئيسية' : 'Main Cities'}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li><a href={`/${lang}/services/whatsapp-bot/restaurant/baghdad`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'بغداد' : 'Baghdad'}</a></li>
                  <li><a href={`/${lang}/services/whatsapp-bot/restaurant/basra`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'البصرة' : 'Basra'}</a></li>
                  <li><a href={`/${lang}/services/whatsapp-bot/restaurant/najaf`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'النجف' : 'Najaf'}</a></li>
                  <li><a href={`/${lang}/services/whatsapp-bot/restaurant/karbala`} className="hover:text-white hover:translate-x-1 inline-block transition-all">{lang === 'ar' ? 'كربلاء' : 'Karbala'}</a></li>
                </ul>
              </div>
              
              <div>
                <ContactInfo lang={lang as 'ar' | 'en'} variant="footer" />
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 text-lg">
                © 2025 hmziraq.tech. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
