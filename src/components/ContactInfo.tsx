interface ContactInfoProps {
  lang: 'ar' | 'en';
  variant?: 'header' | 'footer' | 'inline';
}

export default function ContactInfo({ lang, variant = 'inline' }: ContactInfoProps) {
  const content = {
    ar: {
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      callUs: 'اتصل بنا',
      emailUs: 'راسلنا',
    },
    en: {
      email: 'Email',
      phone: 'Phone',
      callUs: 'Call Us',
      emailUs: 'Email Us',
    },
  };

  const t = content[lang];

  if (variant === 'header') {
    return (
      <div className="flex items-center gap-6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <a 
          href="tel:+96170106083" 
          className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-semibold">+964 70 106 0083</span>
        </a>
        <a 
          href="mailto:sales@hmziraq.services" 
          className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-semibold">sales@hmziraq.services</span>
        </a>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h3 className="text-xl font-bold text-white mb-4">{t.callUs}</h3>
        <div className="space-y-3">
          <a 
            href="tel:+96170106083" 
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
          >
            <div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-500 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">{t.phone}</p>
              <p className="font-semibold">+964 70 106 0083</p>
            </div>
          </a>
          
          <a 
            href="mailto:sales@hmziraq.services" 
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
          >
            <div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-500 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">{t.email}</p>
              <p className="font-semibold">sales@hmziraq.services</p>
            </div>
          </a>
        </div>
      </div>
    );
  }

  // inline variant
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center bg-gradient-primary text-white p-6 rounded-xl shadow-lg" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <a 
        href="tel:+96170106083" 
        className="flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="font-bold text-lg">+964 70 106 0083</span>
      </a>
      
      <div className="hidden sm:block w-px h-8 bg-white/30"></div>
      
      <a 
        href="mailto:sales@hmziraq.services" 
        className="flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="font-bold text-lg">sales@hmziraq.services</span>
      </a>
    </div>
  );
}
