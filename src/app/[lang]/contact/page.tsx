import { SUPPORTED_LANGUAGES, Language } from '@/content/languages';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: Language }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return {};
  return {
    title: lang === 'ar' ? 'تواصل معنا - hmziraq.tech' : 'Contact - hmziraq.tech',
    description:
      lang === 'ar'
        ? 'تواصل مع فريق همز العراق لأي استفسار أو طلب خدمة رقمية متقدمة.'
        : 'Contact the HMZ Iraq team for any inquiry or advanced digital service request.',
    keywords:
      lang === 'ar'
        ? ['تواصل معنا', 'همز العراق', 'خدمات رقمية العراق', 'دعم العملاء']
        : ['Contact', 'HMZ Iraq', 'Digital services Iraq', 'Customer support']
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  if (!SUPPORTED_LANGUAGES.includes(lang)) return notFound();
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h1>
      <p className="mb-4">
        {lang === 'ar'
          ? 'لأي استفسار أو طلب خدمة، يرجى تعبئة النموذج أو التواصل معنا عبر البريد الإلكتروني.'
          : 'For any inquiry or service request, please fill out the form or contact us via email.'}
      </p>
      {/* Placeholder for contact form */}
      <form className="space-y-4">
        <input type="text" placeholder={lang === 'ar' ? 'الاسم' : 'Name'} className="w-full border p-2 rounded" />
        <input type="email" placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} className="w-full border p-2 rounded" />
        <textarea placeholder={lang === 'ar' ? 'رسالتك' : 'Your message'} className="w-full border p-2 rounded" rows={4} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {lang === 'ar' ? 'إرسال' : 'Send'}
        </button>
      </form>
    </main>
  );
}
