import { Metadata } from 'next';
import { SERVICES } from '@/content/services';

type Props = {
  params: Promise<{ lang: 'ar' | 'en' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: lang === 'ar' ? 'احجز موعد | HMZ Iraq' : 'Book Appointment | HMZ Iraq',
    description:
      lang === 'ar'
        ? 'احجز استشارة مجانية مع فريقنا - نساعدك في تطوير بوتات واتساب، مواقع ويب، متاجر إلكترونية، SEO وحلول الذكاء الاصطناعي'
        : 'Book a free consultation with our team - We help you develop WhatsApp bots, websites, eCommerce stores, SEO and AI automation solutions',
    keywords: [
      lang === 'ar' ? 'احجز موعد' : 'book appointment',
      lang === 'ar' ? 'استشارة مجانية' : 'free consultation',
      lang === 'ar' ? 'تواصل معنا' : 'contact us',
      'HMZ Iraq',
      'Baghdad',
    ],
    openGraph: {
      title: lang === 'ar' ? 'احجز موعد | HMZ Iraq' : 'Book Appointment | HMZ Iraq',
      description:
        lang === 'ar'
          ? 'احجز استشارة مجانية مع فريقنا'
          : 'Book a free consultation with our team',
      type: 'website',
      locale: lang === 'ar' ? 'ar_IQ' : 'en_US',
    },
  };
}

export default async function BookAppointmentPage({ params }: Props) {
  const { lang } = await params;
  const isRTL = lang === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {lang === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {lang === 'ar'
                ? 'استشارة مجانية لمناقشة مشروعك وتحويل أفكارك إلى واقع'
                : 'Free consultation to discuss your project and turn your ideas into reality'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{lang === 'ar' ? 'رد سريع خلال 24 ساعة' : 'Quick Reply Within 24h'}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{lang === 'ar' ? 'معلوماتك آمنة' : 'Your Info is Safe'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form action="/api/contact" method="POST" className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={lang === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={lang === 'ar' ? 'example@email.com' : 'example@email.com'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder={lang === 'ar' ? '+964 XXX XXX XXXX' : '+964 XXX XXX XXXX'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ar' ? 'نوع الخدمة' : 'Service Type'}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">
                      {lang === 'ar' ? 'اختر نوع الخدمة' : 'Select service type'}
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service.key} value={service.key}>
                        {service.name[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date and Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === 'ar' ? 'التاريخ المفضل' : 'Preferred Date'}
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === 'ar' ? 'الوقت المفضل' : 'Preferred Time'}
                    </label>
                    <select
                      id="time"
                      name="time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">{lang === 'ar' ? 'اختر الوقت' : 'Select time'}</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ar' ? 'تفاصيل إضافية' : 'Additional Details'}
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder={
                      lang === 'ar'
                        ? 'أخبرنا المزيد عن مشروعك ومتطلباتك...'
                        : 'Tell us more about your project and requirements...'
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {/* Hidden field for language */}
                <input type="hidden" name="lang" value={lang} />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {lang === 'ar' ? 'إرسال الطلب' : 'Submit Request'}
                  <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* Privacy Notice */}
                <p className="text-sm text-gray-600 text-center">
                  {lang === 'ar'
                    ? 'معلوماتك آمنة معنا. نحترم خصوصيتك ولن نشارك بياناتك مع أي طرف ثالث.'
                    : 'Your information is safe with us. We respect your privacy and will never share your data with third parties.'}
                </p>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* WhatsApp */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
                </h3>
                <a href="https://wa.me/9647XXXXXXXXX" className="text-blue-600 hover:text-blue-700 font-medium">
                  +964 7XX XXX XXXX
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </h3>
                <a href="mailto:info@hmziraq.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  info@hmziraq.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {lang === 'ar' ? 'الهاتف' : 'Phone'}
                </h3>
                <a href="tel:+9647XXXXXXXXX" className="text-blue-600 hover:text-blue-700 font-medium">
                  +964 7XX XXX XXXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{lang === 'ar' ? 'كم تستغرق الاستشارة؟' : 'How long is the consultation?'}</span>
                  <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  {lang === 'ar'
                    ? 'عادة تستغرق الاستشارة من 30 إلى 60 دقيقة، حسب حجم وتعقيد مشروعك.'
                    : 'Typically, the consultation takes 30 to 60 minutes, depending on the size and complexity of your project.'}
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{lang === 'ar' ? 'هل الاستشارة فعلاً مجانية؟' : 'Is the consultation really free?'}</span>
                  <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  {lang === 'ar'
                    ? 'نعم، الاستشارة الأولى مجانية تماماً. نريد فهم احتياجاتك وتقديم أفضل الحلول لك.'
                    : 'Yes, the initial consultation is completely free. We want to understand your needs and provide the best solutions.'}
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{lang === 'ar' ? 'متى سأحصل على رد؟' : 'When will I get a response?'}</span>
                  <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  {lang === 'ar'
                    ? 'نعمل على الرد خلال 24 ساعة من أيام العمل. في حالات الطوارئ، نحاول الرد بأسرع وقت ممكن.'
                    : 'We aim to respond within 24 business hours. In urgent cases, we try to respond as quickly as possible.'}
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
