// This file will hold the structure for 50 projects per service for SEO and routing
// Example structure: { [serviceKey]: Project[] }
export type Project = {
  slug: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  keywords: string[];
  metaTitle: { en: string; ar: string };
  metaDescription: { en: string; ar: string };
};

export const PROJECTS: Record<string, Project[]> = {
  // Example for whatsapp-bot (fill with 50 real projects later)
  'whatsapp-bot': [
    {
      slug: 'restaurant-orders-bot',
      name: { en: 'Restaurant Orders Bot', ar: 'بوت طلبات المطاعم' },
      description: {
        en: 'Automate restaurant orders via WhatsApp for fast, efficient service.',
        ar: 'أتمتة طلبات المطاعم عبر واتساب لخدمة سريعة وفعالة.'
      },
      keywords: ['whatsapp bot', 'restaurant orders', 'Iraq', 'بوت واتساب', 'مطاعم العراق'],
      metaTitle: {
        en: 'WhatsApp Restaurant Orders Bot Iraq',
        ar: 'بوت واتساب لطلبات المطاعم في العراق'
      },
      metaDescription: {
        en: 'Boost your restaurant business in Iraq with a WhatsApp bot for automated orders and customer engagement.',
        ar: 'عزز عمل مطعمك في العراق مع بوت واتساب لأتمتة الطلبات والتواصل مع العملاء.'
      }
    },
    // ... add 49 more
  ],
  // ... repeat for other services
};
