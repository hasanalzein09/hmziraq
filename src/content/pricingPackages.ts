/**
 * Pricing Packages for 8 Core Services
 * Three-tier pricing: Starter, Professional, Enterprise
 */

export type PricingFeature = {
  ar: string;
  en: string;
  included: boolean;
};

export type PricingTier = {
  name: { ar: string; en: string };
  price: {
    amount: number; // in Iraqi Dinar
    currency: 'IQD';
    period: { ar: string; en: string };
  };
  description: { ar: string; en: string };
  features: PricingFeature[];
  recommended?: boolean;
  ctaText: { ar: string; en: string };
};

export type ServicePricing = {
  [serviceKey: string]: {
    starter: PricingTier;
    professional: PricingTier;
    enterprise: PricingTier;
  };
};

export const pricingPackages: ServicePricing = {
  // 1. WhatsApp Bot
  'whatsapp-bot': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 1500000, currency: 'IQD', period: { ar: 'مرة واحدة + 200 ألف/شهر', en: 'One-time + 200K/mo' } },
      description: { ar: 'بوت واتساب أساسي', en: 'Basic WhatsApp bot' },
      features: [
        { ar: '20 رد آلي', en: '20 auto-replies', included: true },
        { ar: '500 محادثة/شهر', en: '500 chats/month', included: true },
        { ar: 'قائمة تفاعلية', en: 'Interactive menu', included: true },
        { ar: 'لوحة تحكم بسيطة', en: 'Basic dashboard', included: true },
        { ar: 'ذكاء اصطناعي', en: 'AI integration', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 3500000, currency: 'IQD', period: { ar: 'مرة واحدة + 500 ألف/شهر', en: 'One-time + 500K/mo' } },
      description: { ar: 'بوت ذكي بالAI', en: 'Smart AI bot' },
      features: [
        { ar: 'ردود غير محدودة', en: 'Unlimited replies', included: true },
        { ar: '5000 محادثة/شهر', en: '5000 chats/month', included: true },
        { ar: 'ChatGPT متكامل', en: 'ChatGPT integrated', included: true },
        { ar: 'تحليلات متقدمة', en: 'Advanced analytics', included: true },
        { ar: '5 مستخدمين', en: '5 users', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 7000000, currency: 'IQD', period: { ar: 'مرة واحدة + 1 مليون/شهر', en: 'One-time + 1M/mo' } },
      description: { ar: 'حل مؤسساتي كامل', en: 'Complete enterprise' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'محادثات غير محدودة', en: 'Unlimited chats', included: true },
        { ar: 'مستخدمين غير محدودين', en: 'Unlimited users', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 support', included: true },
        { ar: 'تدريب فريقك', en: 'Team training', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 2. Instagram Bot
  'instagram-bot': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 1200000, currency: 'IQD', period: { ar: 'مرة واحدة + 150 ألف/شهر', en: 'One-time + 150K/mo' } },
      description: { ar: 'أتمتة إنستغرام أساسية', en: 'Basic Instagram automation' },
      features: [
        { ar: 'رد آلي على DMs', en: 'Auto-reply DMs', included: true },
        { ar: 'رد على التعليقات', en: 'Reply to comments', included: true },
        { ar: '300 تفاعل/يوم', en: '300 interactions/day', included: true },
        { ar: 'إحصائيات بسيطة', en: 'Basic stats', included: true },
        { ar: 'إدارة مسابقات', en: 'Contest management', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 2500000, currency: 'IQD', period: { ar: 'مرة واحدة + 350 ألف/شهر', en: 'One-time + 350K/mo' } },
      description: { ar: 'أتمتة ذكية شاملة', en: 'Smart full automation' },
      features: [
        { ar: 'كل مميزات البداية', en: 'All Starter features', included: true },
        { ar: '1000 تفاعل/يوم', en: '1000 interactions/day', included: true },
        { ar: 'إدارة مسابقات', en: 'Contest management', included: true },
        { ar: 'جدولة منشورات', en: 'Post scheduling', included: true },
        { ar: 'تحليلات متقدمة', en: 'Advanced analytics', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 5000000, currency: 'IQD', period: { ar: 'مرة واحدة + 700 ألف/شهر', en: 'One-time + 700K/mo' } },
      description: { ar: 'إدارة كاملة لعدة حسابات', en: 'Full multi-account management' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'تفاعلات غير محدودة', en: 'Unlimited interactions', included: true },
        { ar: 'إدارة 5 حسابات', en: 'Manage 5 accounts', included: true },
        { ar: 'AI لإنشاء المحتوى', en: 'AI content creation', included: true },
        { ar: 'فريق إدارة مخصص', en: 'Dedicated management team', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 3. Facebook Page Bot
  'facebook-page-bot': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 1300000, currency: 'IQD', period: { ar: 'مرة واحدة + 180 ألف/شهر', en: 'One-time + 180K/mo' } },
      description: { ar: 'بوت ماسنجر أساسي', en: 'Basic Messenger bot' },
      features: [
        { ar: 'ردود آلية على 15 سؤال', en: '15 auto-replies', included: true },
        { ar: '400 محادثة/شهر', en: '400 chats/month', included: true },
        { ar: 'قائمة تفاعلية', en: 'Interactive menu', included: true },
        { ar: 'جمع بيانات العملاء', en: 'Lead collection', included: true },
        { ar: 'تكامل AI', en: 'AI integration', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 2800000, currency: 'IQD', period: { ar: 'مرة واحدة + 400 ألف/شهر', en: 'One-time + 400K/mo' } },
      description: { ar: 'بوت ذكي متطور', en: 'Advanced smart bot' },
      features: [
        { ar: 'ردود غير محدودة', en: 'Unlimited replies', included: true },
        { ar: '3000 محادثة/شهر', en: '3000 chats/month', included: true },
        { ar: 'ChatGPT متكامل', en: 'ChatGPT integrated', included: true },
        { ar: 'تحليلات شاملة', en: 'Full analytics', included: true },
        { ar: 'إدارة التعليقات', en: 'Comment management', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 6000000, currency: 'IQD', period: { ar: 'مرة واحدة + 850 ألف/شهر', en: 'One-time + 850K/mo' } },
      description: { ar: 'حل متكامل لصفحات متعددة', en: 'Multi-page solution' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'محادثات غير محدودة', en: 'Unlimited chats', included: true },
        { ar: 'إدارة 3 صفحات', en: 'Manage 3 pages', included: true },
        { ar: 'نظام CRM متكامل', en: 'Integrated CRM', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 4. Next.js Solutions
  'nextjs-solutions': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 2000000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'موقع بسيط بـNext.js', en: 'Simple Next.js website' },
      features: [
        { ar: '5 صفحات', en: '5 pages', included: true },
        { ar: 'تصميم متجاوب', en: 'Responsive design', included: true },
        { ar: 'تحسين SEO أساسي', en: 'Basic SEO', included: true },
        { ar: 'استضافة سنة مجاناً', en: '1 year free hosting', included: true },
        { ar: 'لوحة تحكم', en: 'Admin panel', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 4500000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'تطبيق ويب متقدم', en: 'Advanced web app' },
      features: [
        { ar: 'صفحات غير محدودة', en: 'Unlimited pages', included: true },
        { ar: 'تصميم احترافي مخصص', en: 'Custom pro design', included: true },
        { ar: 'SEO متقدم', en: 'Advanced SEO', included: true },
        { ar: 'لوحة تحكم كاملة', en: 'Full admin panel', included: true },
        { ar: 'تكامل API', en: 'API integration', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 10000000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'حل مؤسساتي متكامل', en: 'Complete enterprise solution' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'معمارية معقدة', en: 'Complex architecture', included: true },
        { ar: 'تطبيق موبايل PWA', en: 'PWA mobile app', included: true },
        { ar: 'أمان متقدم', en: 'Advanced security', included: true },
        { ar: 'دعم فني سنة', en: '1 year support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 5. WordPress Solutions
  'wordpress-solutions': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 800000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'موقع ووردبريس بسيط', en: 'Simple WordPress site' },
      features: [
        { ar: '5 صفحات', en: '5 pages', included: true },
        { ar: 'قالب جاهز', en: 'Ready theme', included: true },
        { ar: 'SEO أساسي', en: 'Basic SEO', included: true },
        { ar: 'استضافة سنة', en: '1 year hosting', included: true },
        { ar: 'تصميم مخصص', en: 'Custom design', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 2000000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'موقع مخصص بالكامل', en: 'Fully custom website' },
      features: [
        { ar: 'صفحات غير محدودة', en: 'Unlimited pages', included: true },
        { ar: 'تصميم مخصص', en: 'Custom design', included: true },
        { ar: 'SEO متقدم', en: 'Advanced SEO', included: true },
        { ar: 'مدونة متكاملة', en: 'Full blog', included: true },
        { ar: 'تدريب على الإدارة', en: 'Management training', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 5000000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'بوابة إلكترونية متكاملة', en: 'Complete web portal' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'نظام عضويات', en: 'Membership system', included: true },
        { ar: 'منتدى نقاش', en: 'Discussion forum', included: true },
        { ar: 'تطبيق موبايل', en: 'Mobile app', included: true },
        { ar: 'دعم فني سنة', en: '1 year support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 6. WooCommerce Solutions
  'woocommerce-solutions': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 1500000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'متجر صغير', en: 'Small store' },
      features: [
        { ar: 'حتى 50 منتج', en: 'Up to 50 products', included: true },
        { ar: 'بوابة دفع واحدة', en: '1 payment gateway', included: true },
        { ar: 'تصميم جاهز', en: 'Ready theme', included: true },
        { ar: 'SEO أساسي', en: 'Basic SEO', included: true },
        { ar: 'نظام شحن متقدم', en: 'Advanced shipping', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 3500000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'متجر احترافي', en: 'Professional store' },
      features: [
        { ar: 'منتجات غير محدودة', en: 'Unlimited products', included: true },
        { ar: '3 بوابات دفع', en: '3 payment gateways', included: true },
        { ar: 'تصميم مخصص', en: 'Custom design', included: true },
        { ar: 'نظام شحن ذكي', en: 'Smart shipping', included: true },
        { ar: 'تكامل زين كاش', en: 'Zain Cash integration', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 8000000, currency: 'IQD', period: { ar: 'مرة واحدة', en: 'One-time' } },
      description: { ar: 'سوق إلكتروني متعدد البائعين', en: 'Multi-vendor marketplace' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'بائعين متعددين', en: 'Multi-vendor', included: true },
        { ar: 'تطبيق موبايل', en: 'Mobile app', included: true },
        { ar: 'لوحة تحليلات', en: 'Analytics dashboard', included: true },
        { ar: 'دعم فني سنة', en: '1 year support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 7. SEO Services
  'seo-services': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 500000, currency: 'IQD', period: { ar: 'شهرياً', en: 'Monthly' } },
      description: { ar: 'SEO أساسي', en: 'Basic SEO' },
      features: [
        { ar: 'تدقيق SEO', en: 'SEO audit', included: true },
        { ar: 'بحث كلمات مفتاحية', en: 'Keyword research', included: true },
        { ar: 'تحسين 10 صفحات', en: 'Optimize 10 pages', included: true },
        { ar: 'تقرير شهري', en: 'Monthly report', included: true },
        { ar: 'بناء روابط', en: 'Link building', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 1200000, currency: 'IQD', period: { ar: 'شهرياً', en: 'Monthly' } },
      description: { ar: 'SEO شامل', en: 'Full SEO' },
      features: [
        { ar: 'كل مميزات البداية', en: 'All Starter features', included: true },
        { ar: 'تحسين غير محدود', en: 'Unlimited optimization', included: true },
        { ar: 'بناء 20 رابط/شهر', en: '20 links/month', included: true },
        { ar: 'إنشاء محتوى SEO', en: 'SEO content creation', included: true },
        { ar: 'تحليلات متقدمة', en: 'Advanced analytics', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 3000000, currency: 'IQD', period: { ar: 'شهرياً', en: 'Monthly' } },
      description: { ar: 'استراتيجية SEO كاملة', en: 'Complete SEO strategy' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'استشاري SEO مخصص', en: 'Dedicated SEO consultant', included: true },
        { ar: 'بناء 50 رابط/شهر', en: '50 links/month', included: true },
        { ar: 'محتوى 10 مقالات', en: '10 articles content', included: true },
        { ar: 'اجتماعات أسبوعية', en: 'Weekly meetings', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 8. AI Automation Solutions
  'ai-automation-solutions': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 2500000, currency: 'IQD', period: { ar: 'مرة واحدة + 300 ألف/شهر', en: 'One-time + 300K/mo' } },
      description: { ar: 'أتمتة بسيطة بالAI', en: 'Simple AI automation' },
      features: [
        { ar: 'أتمتة عملية واحدة', en: 'Automate 1 process', included: true },
        { ar: 'تكامل ChatGPT', en: 'ChatGPT integration', included: true },
        { ar: 'لوحة تحكم', en: 'Dashboard', included: true },
        { ar: 'تدريب أساسي', en: 'Basic training', included: true },
        { ar: 'تحليلات متقدمة', en: 'Advanced analytics', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 5000000, currency: 'IQD', period: { ar: 'مرة واحدة + 600 ألف/شهر', en: 'One-time + 600K/mo' } },
      description: { ar: 'أتمتة شاملة', en: 'Full automation' },
      features: [
        { ar: 'أتمتة 3 عمليات', en: 'Automate 3 processes', included: true },
        { ar: 'AI متقدم (GPT-4)', en: 'Advanced AI (GPT-4)', included: true },
        { ar: 'معالجة مستندات', en: 'Document processing', included: true },
        { ar: 'تحليلات وتقارير', en: 'Analytics & reports', included: true },
        { ar: 'تدريب متقدم', en: 'Advanced training', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 12000000, currency: 'IQD', period: { ar: 'مرة واحدة + 1.5 مليون/شهر', en: 'One-time + 1.5M/mo' } },
      description: { ar: 'تحول رقمي بالAI', en: 'AI digital transformation' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'أتمتة غير محدودة', en: 'Unlimited automation', included: true },
        { ar: 'AI مخصص لشركتك', en: 'Custom AI model', included: true },
        { ar: 'تكامل كامل', en: 'Full integration', included: true },
        { ar: 'فريق دعم مخصص', en: 'Dedicated support team', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 9. ERP System
  'erp-system': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 5000000, currency: 'IQD', period: { ar: 'مرة واحدة + 800 ألف/شهر', en: 'One-time + 800K/mo' } },
      description: { ar: 'نظام ERP أساسي', en: 'Basic ERP system' },
      features: [
        { ar: 'إدارة المخزون', en: 'Inventory management', included: true },
        { ar: 'محاسبة بسيطة', en: 'Basic accounting', included: true },
        { ar: '5 مستخدمين', en: '5 users', included: true },
        { ar: 'تقارير أساسية', en: 'Basic reports', included: true },
        { ar: 'إدارة الموارد البشرية', en: 'HR management', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 12000000, currency: 'IQD', period: { ar: 'مرة واحدة + 1.5 مليون/شهر', en: 'One-time + 1.5M/mo' } },
      description: { ar: 'نظام ERP متكامل', en: 'Complete ERP system' },
      features: [
        { ar: 'كل مميزات البداية', en: 'All Starter features', included: true },
        { ar: 'إدارة الموارد البشرية', en: 'HR management', included: true },
        { ar: 'إدارة المشاريع', en: 'Project management', included: true },
        { ar: '20 مستخدم', en: '20 users', included: true },
        { ar: 'تقارير متقدمة', en: 'Advanced reports', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 25000000, currency: 'IQD', period: { ar: 'مرة واحدة + 3 مليون/شهر', en: 'One-time + 3M/mo' } },
      description: { ar: 'حل ERP مؤسساتي', en: 'Enterprise ERP solution' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'مستخدمين غير محدودين', en: 'Unlimited users', included: true },
        { ar: 'تكامل مع أنظمة خارجية', en: 'External systems integration', included: true },
        { ar: 'ذكاء اصطناعي وتحليلات', en: 'AI and analytics', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 10. CRM System
  'crm-system': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 2500000, currency: 'IQD', period: { ar: 'مرة واحدة + 400 ألف/شهر', en: 'One-time + 400K/mo' } },
      description: { ar: 'نظام CRM أساسي', en: 'Basic CRM system' },
      features: [
        { ar: 'إدارة 500 عميل', en: 'Manage 500 customers', included: true },
        { ar: 'تتبع المبيعات', en: 'Sales tracking', included: true },
        { ar: '3 مستخدمين', en: '3 users', included: true },
        { ar: 'تقارير بسيطة', en: 'Simple reports', included: true },
        { ar: 'أتمتة التسويق', en: 'Marketing automation', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 5000000, currency: 'IQD', period: { ar: 'مرة واحدة + 800 ألف/شهر', en: 'One-time + 800K/mo' } },
      description: { ar: 'نظام CRM متقدم', en: 'Advanced CRM system' },
      features: [
        { ar: 'عملاء غير محدودين', en: 'Unlimited customers', included: true },
        { ar: 'أتمتة التسويق', en: 'Marketing automation', included: true },
        { ar: 'قمع مبيعات متقدم', en: 'Advanced sales funnel', included: true },
        { ar: '10 مستخدمين', en: '10 users', included: true },
        { ar: 'تكامل مع WhatsApp/Email', en: 'WhatsApp/Email integration', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 10000000, currency: 'IQD', period: { ar: 'مرة واحدة + 1.5 مليون/شهر', en: 'One-time + 1.5M/mo' } },
      description: { ar: 'حل CRM مؤسساتي', en: 'Enterprise CRM solution' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'مستخدمين غير محدودين', en: 'Unlimited users', included: true },
        { ar: 'AI لتوقع المبيعات', en: 'AI sales predictions', included: true },
        { ar: 'تكامل كامل مع ERP', en: 'Full ERP integration', included: true },
        { ar: 'دعم فني مخصص', en: 'Dedicated support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 11. Invoicing System
  'invoicing-system': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 800000, currency: 'IQD', period: { ar: 'مرة واحدة + 100 ألف/شهر', en: 'One-time + 100K/mo' } },
      description: { ar: 'نظام فوترة بسيط', en: 'Simple invoicing system' },
      features: [
        { ar: 'حتى 100 فاتورة/شهر', en: 'Up to 100 invoices/month', included: true },
        { ar: 'قوالب فواتير جاهزة', en: 'Ready invoice templates', included: true },
        { ar: 'مستخدم واحد', en: '1 user', included: true },
        { ar: 'تقارير أساسية', en: 'Basic reports', included: true },
        { ar: 'تذكير دفعات آلي', en: 'Auto payment reminders', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 1800000, currency: 'IQD', period: { ar: 'مرة واحدة + 250 ألف/شهر', en: 'One-time + 250K/mo' } },
      description: { ar: 'نظام فوترة متقدم', en: 'Advanced invoicing system' },
      features: [
        { ar: 'فواتير غير محدودة', en: 'Unlimited invoices', included: true },
        { ar: 'تذكير دفعات آلي', en: 'Auto payment reminders', included: true },
        { ar: 'فواتير متعددة العملات', en: 'Multi-currency invoices', included: true },
        { ar: '5 مستخدمين', en: '5 users', included: true },
        { ar: 'تكامل مع المحاسبة', en: 'Accounting integration', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 4000000, currency: 'IQD', period: { ar: 'مرة واحدة + 500 ألف/شهر', en: 'One-time + 500K/mo' } },
      description: { ar: 'حل فوترة مؤسساتي', en: 'Enterprise invoicing solution' },
      features: [
        { ar: 'كل مميزات الاحترافي', en: 'All Professional features', included: true },
        { ar: 'مستخدمين غير محدودين', en: 'Unlimited users', included: true },
        { ar: 'بوابات دفع متعددة', en: 'Multiple payment gateways', included: true },
        { ar: 'تكامل مع ERP/CRM', en: 'ERP/CRM integration', included: true },
        { ar: 'API للتكامل الخارجي', en: 'API for external integration', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // 12. POS System
  'pos-system': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter' },
      price: { amount: 2000000, currency: 'IQD', period: { ar: 'مرة واحدة + 250 ألف/شهر', en: 'One-time + 250K/mo' } },
      description: { ar: 'نظام POS بسيط', en: 'Simple POS system' },
      features: [
        { ar: 'نقطة بيع واحدة', en: '1 POS terminal', included: true },
        { ar: 'إدارة مخزون أساسية', en: 'Basic inventory management', included: true },
        { ar: 'طباعة فواتير', en: 'Invoice printing', included: true },
        { ar: 'تقارير يومية', en: 'Daily reports', included: true },
        { ar: 'إدارة موظفين', en: 'Staff management', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'احترافي', en: 'Professional' },
      price: { amount: 4500000, currency: 'IQD', period: { ar: 'مرة واحدة + 500 ألف/شهر', en: 'One-time + 500K/mo' } },
      description: { ar: 'نظام POS متعدد الفروع', en: 'Multi-branch POS system' },
      features: [
        { ar: 'حتى 5 نقاط بيع', en: 'Up to 5 POS terminals', included: true },
        { ar: 'إدارة موظفين', en: 'Staff management', included: true },
        { ar: 'برنامج ولاء عملاء', en: 'Customer loyalty program', included: true },
        { ar: 'تقارير متقدمة', en: 'Advanced reports', included: true },
        { ar: 'تكامل مع محاسبة', en: 'Accounting integration', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر طلباً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'مؤسسات', en: 'Enterprise' },
      price: { amount: 10000000, currency: 'IQD', period: { ar: 'مرة واحدة + 1 مليون/شهر', en: 'One-time + 1M/mo' } },
      description: { ar: 'حل POS مؤسساتي', en: 'Enterprise POS solution' },
      features: [
        { ar: 'نقاط بيع غير محدودة', en: 'Unlimited POS terminals', included: true },
        { ar: 'تكامل كامل مع ERP', en: 'Full ERP integration', included: true },
        { ar: 'تطبيق موبايل', en: 'Mobile app', included: true },
        { ar: 'تحليلات AI', en: 'AI analytics', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },
};

// Helper function to get pricing for a specific service
export function getPricing(serviceKey: string) {
  return pricingPackages[serviceKey] || pricingPackages['default'];
}

// Helper function to format price in Iraqi Dinar
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IQ', {
    style: 'currency',
    currency: 'IQD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
