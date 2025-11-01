'use client';

import { useState } from 'react';

interface ContactFormProps {
  lang: 'ar' | 'en';
  serviceContext?: string;
  businessContext?: string;
  cityContext?: string;
}

export default function ContactForm({ lang, serviceContext, businessContext, cityContext }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: serviceContext || '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const content = {
    ar: {
      title: 'احجز استشارة مجانية',
      subtitle: 'تواصل معنا الآن وسنرد خلال 24 ساعة',
      namePlaceholder: 'الاسم الكامل',
      emailPlaceholder: 'البريد الإلكتروني',
      phonePlaceholder: 'رقم الهاتف',
      serviceInterestPlaceholder: 'الخدمة المطلوبة',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      submitButton: 'أرسل الطلب',
      sending: 'جاري الإرسال...',
      successMessage: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً',
      errorMessage: 'حدث خطأ. يرجى المحاولة مرة أخرى',
      requiredFields: 'الرجاء ملء جميع الحقول المطلوبة',
    },
    en: {
      title: 'Book a Free Consultation',
      subtitle: 'Contact us now and we\'ll respond within 24 hours',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email Address',
      phonePlaceholder: 'Phone Number',
      serviceInterestPlaceholder: 'Service of Interest',
      messagePlaceholder: 'Write your message here...',
      submitButton: 'Submit Request',
      sending: 'Sending...',
      successMessage: 'Your request has been sent successfully! We will contact you soon',
      errorMessage: 'An error occurred. Please try again',
      requiredFields: 'Please fill in all required fields',
    },
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error');
      setErrorMessage(t.requiredFields);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          businessContext,
          cityContext,
          lang,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceInterest: serviceContext || '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setErrorMessage(t.errorMessage);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 card-hover" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-3">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder={t.namePlaceholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-modern"
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-modern"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder={t.phonePlaceholder}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input-modern"
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder={t.serviceInterestPlaceholder}
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="input-modern"
          />
        </div>

        <div>
          <textarea
            placeholder={t.messagePlaceholder}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="input-modern min-h-[120px] resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full text-lg py-4"
        >
          {status === 'loading' ? t.sending : t.submitButton}
        </button>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
            {t.successMessage}
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
