/**
 * Pricing Packages for Technical Solutions
 * Three-tier pricing structure: Starter, Professional, Enterprise
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
  // WhatsApp Business Bot
  'whatsapp-business-bot': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 1500000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 200,000 دينار/شهر صيانة', en: 'One-time + 200,000 IQD/month maintenance' },
      },
      description: {
        ar: 'بوت واتساب أساسي للأعمال الصغيرة',
        en: 'Basic WhatsApp bot for small businesses',
      },
      features: [
        { ar: 'ردود آلية على 20 سؤال شائع', en: 'Auto-replies for 20 FAQs', included: true },
        { ar: 'رسائل ترحيبية مخصصة', en: 'Custom welcome messages', included: true },
        { ar: 'قائمة تفاعلية (Menu)', en: 'Interactive menu', included: true },
        { ar: 'إرسال صور ووسائط', en: 'Send images and media', included: true },
        { ar: 'لوحة تحكم بسيطة', en: 'Basic dashboard', included: true },
        { ar: 'دعم 500 محادثة/شهر', en: 'Support 500 conversations/month', included: true },
        { ar: 'تكامل مع Google Sheets', en: 'Google Sheets integration', included: true },
        { ar: 'تكامل مع الذكاء الاصطناعي', en: 'AI integration', included: false },
        { ar: 'تحليلات متقدمة', en: 'Advanced analytics', included: false },
        { ar: 'دعم متعدد المستخدمين', en: 'Multi-user support', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 3500000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 500,000 دينار/شهر صيانة', en: 'One-time + 500,000 IQD/month maintenance' },
      },
      description: {
        ar: 'بوت ذكي متكامل مع AI وتحليلات',
        en: 'Smart bot with AI and analytics',
      },
      features: [
        { ar: 'ردود آلية غير محدودة', en: 'Unlimited auto-replies', included: true },
        { ar: 'رسائل ترحيبية مخصصة', en: 'Custom welcome messages', included: true },
        { ar: 'قائمة تفاعلية متقدمة', en: 'Advanced interactive menu', included: true },
        { ar: 'إرسال صور ووسائط', en: 'Send images and media', included: true },
        { ar: 'لوحة تحكم احترافية', en: 'Professional dashboard', included: true },
        { ar: 'دعم 5000 محادثة/شهر', en: 'Support 5,000 conversations/month', included: true },
        { ar: 'تكامل مع Google Sheets/Excel', en: 'Google Sheets/Excel integration', included: true },
        { ar: 'تكامل مع OpenAI GPT-4', en: 'OpenAI GPT-4 integration', included: true },
        { ar: 'تحليلات متقدمة ورسوم بيانية', en: 'Advanced analytics & charts', included: true },
        { ar: 'دعم 5 مستخدمين', en: 'Support 5 users', included: true },
        { ar: 'نظام تذاكر الدعم', en: 'Ticketing system', included: true },
        { ar: 'إشعارات فورية', en: 'Real-time notifications', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 7000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,000,000 دينار/شهر صيانة', en: 'One-time + 1,000,000 IQD/month maintenance' },
      },
      description: {
        ar: 'حل مؤسساتي متكامل مع كافة المميزات',
        en: 'Complete enterprise solution with all features',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'محادثات غير محدودة', en: 'Unlimited conversations', included: true },
        { ar: 'تكامل مع CRM/ERP', en: 'CRM/ERP integration', included: true },
        { ar: 'تكامل مع أنظمة الدفع', en: 'Payment systems integration', included: true },
        { ar: 'تخصيص كامل للواجهة', en: 'Full UI customization', included: true },
        { ar: 'دعم متعدد اللغات', en: 'Multi-language support', included: true },
        { ar: 'دعم مستخدمين غير محدود', en: 'Unlimited users', included: true },
        { ar: 'API مخصصة', en: 'Custom API', included: true },
        { ar: 'نسخ احتياطي يومي', en: 'Daily backups', included: true },
        { ar: 'أمان SSL متقدم', en: 'Advanced SSL security', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 technical support', included: true },
        { ar: 'تدريب فريق العمل', en: 'Team training', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // Instagram Automation Bot
  'instagram-automation-bot': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 2000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 300,000 دينار/شهر', en: 'One-time + 300,000 IQD/month' },
      },
      description: {
        ar: 'أتمتة أساسية لحساب Instagram',
        en: 'Basic Instagram automation',
      },
      features: [
        { ar: 'ردود آلية على الرسائل', en: 'Auto-reply to DMs', included: true },
        { ar: 'جدولة 30 منشور/شهر', en: 'Schedule 30 posts/month', included: true },
        { ar: 'متابعة تلقائية (200 حساب/يوم)', en: 'Auto-follow (200 accounts/day)', included: true },
        { ar: 'إلغاء متابعة تلقائي', en: 'Auto-unfollow', included: true },
        { ar: 'تحليلات بسيطة', en: 'Basic analytics', included: true },
        { ar: 'جمع بيانات المتابعين', en: 'Follower data collection', included: false },
        { ar: 'تحليل المنافسين', en: 'Competitor analysis', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 4000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 600,000 دينار/شهر', en: 'One-time + 600,000 IQD/month' },
      },
      description: {
        ar: 'أتمتة ذكية مع AI لتنمية الحساب',
        en: 'Smart automation with AI for growth',
      },
      features: [
        { ar: 'ردود آلية ذكية بالـAI', en: 'AI-powered auto-replies', included: true },
        { ar: 'جدولة غير محدودة للمنشورات', en: 'Unlimited post scheduling', included: true },
        { ar: 'متابعة ذكية (500 حساب/يوم)', en: 'Smart follow (500 accounts/day)', included: true },
        { ar: 'إلغاء متابعة تلقائي', en: 'Auto-unfollow', included: true },
        { ar: 'تحليلات متقدمة', en: 'Advanced analytics', included: true },
        { ar: 'جمع بيانات المتابعين والتفاعل', en: 'Follower & engagement data', included: true },
        { ar: 'تحليل 10 منافسين', en: 'Analyze 10 competitors', included: true },
        { ar: 'اقتراحات محتوى بالـAI', en: 'AI content suggestions', included: true },
        { ar: 'هاشتاقات ذكية', en: 'Smart hashtags', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 8000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,200,000 دينار/شهر', en: 'One-time + 1,200,000 IQD/month' },
      },
      description: {
        ar: 'حل مؤسساتي لإدارة حسابات متعددة',
        en: 'Enterprise solution for multiple accounts',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'إدارة 10 حسابات Instagram', en: 'Manage 10 Instagram accounts', included: true },
        { ar: 'متابعة غير محدودة', en: 'Unlimited following', included: true },
        { ar: 'تحليل منافسين غير محدود', en: 'Unlimited competitor analysis', included: true },
        { ar: 'Computer Vision للتحليل البصري', en: 'Computer Vision for visual analysis', included: true },
        { ar: 'تقارير أسبوعية مفصلة', en: 'Detailed weekly reports', included: true },
        { ar: 'دعم فني مخصص 24/7', en: 'Dedicated 24/7 support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // Next.js Solutions
  'nextjs-solutions': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 2500000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 300,000 دينار/شهر استضافة', en: 'One-time + 300,000 IQD/month hosting' },
      },
      description: {
        ar: 'موقع Next.js احترافي للشركات الصغيرة',
        en: 'Professional Next.js website for small businesses',
      },
      features: [
        { ar: '5 صفحات (Home, About, Services, Contact, Blog)', en: '5 pages (Home, About, Services, Contact, Blog)', included: true },
        { ar: 'تصميم responsive لجميع الأجهزة', en: 'Responsive design for all devices', included: true },
        { ar: 'Next.js 15 + React 19', en: 'Next.js 15 + React 19', included: true },
        { ar: 'TypeScript', en: 'TypeScript', included: true },
        { ar: 'Tailwind CSS', en: 'Tailwind CSS', included: true },
        { ar: 'SEO أساسي', en: 'Basic SEO', included: true },
        { ar: 'استضافة على Vercel', en: 'Vercel hosting', included: true },
        { ar: 'نموذج تواصل', en: 'Contact form', included: true },
        { ar: 'Google Analytics', en: 'Google Analytics', included: false },
        { ar: 'تعدد اللغات', en: 'Multi-language', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 5000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 500,000 دينار/شهر', en: 'One-time + 500,000 IQD/month' },
      },
      description: {
        ar: 'تطبيق ويب متكامل مع Backend',
        en: 'Full web app with backend',
      },
      features: [
        { ar: 'عدد صفحات غير محدود', en: 'Unlimited pages', included: true },
        { ar: 'تصميم مخصص بالكامل', en: 'Fully custom design', included: true },
        { ar: 'Next.js 15 + React 19 + TypeScript', en: 'Next.js 15 + React 19 + TypeScript', included: true },
        { ar: 'API Routes مخصصة', en: 'Custom API Routes', included: true },
        { ar: 'قاعدة بيانات PostgreSQL', en: 'PostgreSQL database', included: true },
        { ar: 'Prisma ORM', en: 'Prisma ORM', included: true },
        { ar: 'لوحة تحكم إدارية', en: 'Admin dashboard', included: true },
        { ar: 'نظام تسجيل دخول', en: 'Authentication system', included: true },
        { ar: 'Technical SEO متقدم', en: 'Advanced Technical SEO', included: true },
        { ar: 'Google Analytics + Search Console', en: 'Google Analytics + Search Console', included: true },
        { ar: 'تعدد اللغات (عربي + إنجليزي)', en: 'Multi-language (Arabic + English)', included: true },
        { ar: 'تحسين الأداء (Core Web Vitals)', en: 'Performance optimization (Core Web Vitals)', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 12000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,500,000 دينار/شهر', en: 'One-time + 1,500,000 IQD/month' },
      },
      description: {
        ar: 'منصة مؤسساتية متكاملة',
        en: 'Complete enterprise platform',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'معمارية Microservices', en: 'Microservices architecture', included: true },
        { ar: 'GraphQL API', en: 'GraphQL API', included: true },
        { ar: 'Redis للـCaching', en: 'Redis for caching', included: true },
        { ar: 'Elasticsearch للبحث', en: 'Elasticsearch for search', included: true },
        { ar: 'Docker + Kubernetes', en: 'Docker + Kubernetes', included: true },
        { ar: 'CI/CD Pipeline', en: 'CI/CD Pipeline', included: true },
        { ar: 'AWS Cloud Infrastructure', en: 'AWS Cloud Infrastructure', included: true },
        { ar: 'استضافة عالية الأداء', en: 'High-performance hosting', included: true },
        { ar: 'SSL + CDN', en: 'SSL + CDN', included: true },
        { ar: 'نسخ احتياطي تلقائي', en: 'Automated backups', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 technical support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // Restaurant POS System
  'restaurant-pos-system': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 3000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 400,000 دينار/شهر', en: 'One-time + 400,000 IQD/month' },
      },
      description: {
        ar: 'نظام كاشير أساسي للمطاعم الصغيرة',
        en: 'Basic POS for small restaurants',
      },
      features: [
        { ar: 'واجهة بيع سريعة', en: 'Fast checkout interface', included: true },
        { ar: 'طباعة فواتير', en: 'Receipt printing', included: true },
        { ar: 'إدارة منيو المطعم', en: 'Menu management', included: true },
        { ar: 'حساب الضرائب', en: 'Tax calculation', included: true },
        { ar: 'تقارير مبيعات يومية', en: 'Daily sales reports', included: true },
        { ar: 'دعم شاشة لمس', en: 'Touch screen support', included: true },
        { ar: 'إدارة مخزون', en: 'Inventory management', included: false },
        { ar: 'إدارة موظفين', en: 'Employee management', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 6000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 700,000 دينار/شهر', en: 'One-time + 700,000 IQD/month' },
      },
      description: {
        ar: 'نظام متكامل مع إدارة مخزون وموظفين',
        en: 'Complete system with inventory & staff management',
      },
      features: [
        { ar: 'كل مميزات باقة البداية', en: 'All Starter features', included: true },
        { ar: 'إدارة مخزون متقدمة', en: 'Advanced inventory management', included: true },
        { ar: 'إدارة موظفين ومناوبات', en: 'Employee & shift management', included: true },
        { ar: 'تقارير مفصلة (يومية/شهرية/سنوية)', en: 'Detailed reports (daily/monthly/yearly)', included: true },
        { ar: 'دعم طاولات المطعم', en: 'Table management', included: true },
        { ar: 'نظام طلبات المطبخ (KDS)', en: 'Kitchen Display System (KDS)', included: true },
        { ar: 'تكامل مع شاشة العملاء', en: 'Customer display integration', included: true },
        { ar: 'دعم طابعات حرارية متعددة', en: 'Multiple thermal printer support', included: true },
        { ar: 'باركود للمنتجات', en: 'Product barcodes', included: true },
        { ar: 'تطبيق موبايل للموظفين', en: 'Mobile app for staff', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 12000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,500,000 دينار/شهر', en: 'One-time + 1,500,000 IQD/month' },
      },
      description: {
        ar: 'حل مؤسساتي لسلاسل المطاعم',
        en: 'Enterprise solution for restaurant chains',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'دعم فروع متعددة', en: 'Multi-branch support', included: true },
        { ar: 'إدارة مركزية من Cloud', en: 'Centralized cloud management', included: true },
        { ar: 'تكامل مع أنظمة الدفع الإلكتروني', en: 'Payment gateway integration', included: true },
        { ar: 'برنامج ولاء العملاء', en: 'Customer loyalty program', included: true },
        { ar: 'تطبيق طلبات أونلاين', en: 'Online ordering app', included: true },
        { ar: 'تكامل مع منصات التوصيل', en: 'Delivery platform integration', included: true },
        { ar: 'API مفتوحة للتطوير', en: 'Open API for development', included: true },
        { ar: 'نسخ احتياطي تلقائي', en: 'Automated backups', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 technical support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // Native iOS App
  'native-ios-app': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 4000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 500,000 دينار/شهر', en: 'One-time + 500,000 IQD/month' },
      },
      description: {
        ar: 'تطبيق iOS أساسي بـSwift',
        en: 'Basic iOS app with Swift',
      },
      features: [
        { ar: '5 شاشات رئيسية', en: '5 main screens', included: true },
        { ar: 'تصميم SwiftUI', en: 'SwiftUI design', included: true },
        { ar: 'تسجيل دخول بسيط', en: 'Simple login', included: true },
        { ar: 'استهلاك REST API', en: 'REST API consumption', included: true },
        { ar: 'دعم iOS 15+', en: 'iOS 15+ support', included: true },
        { ar: 'نشر على App Store', en: 'App Store deployment', included: true },
        { ar: 'إشعارات Push', en: 'Push notifications', included: false },
        { ar: 'قاعدة بيانات محلية', en: 'Local database', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 8000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 800,000 دينار/شهر', en: 'One-time + 800,000 IQD/month' },
      },
      description: {
        ar: 'تطبيق iOS متكامل مع Backend',
        en: 'Full iOS app with backend',
      },
      features: [
        { ar: 'عدد شاشات غير محدود', en: 'Unlimited screens', included: true },
        { ar: 'تصميم SwiftUI احترافي', en: 'Professional SwiftUI design', included: true },
        { ar: 'نظام تسجيل دخول كامل', en: 'Full authentication system', included: true },
        { ar: 'Firebase Integration', en: 'Firebase Integration', included: true },
        { ar: 'Core Data للبيانات المحلية', en: 'Core Data for local storage', included: true },
        { ar: 'Push Notifications', en: 'Push Notifications', included: true },
        { ar: 'دعم الدفع داخل التطبيق', en: 'In-app purchase support', included: true },
        { ar: 'تكامل مع Apple Pay', en: 'Apple Pay integration', included: true },
        { ar: 'تحليلات Firebase', en: 'Firebase Analytics', included: true },
        { ar: 'دعم Dark Mode', en: 'Dark Mode support', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 15000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,500,000 دينار/شهر', en: 'One-time + 1,500,000 IQD/month' },
      },
      description: {
        ar: 'تطبيق iOS مؤسساتي متقدم',
        en: 'Advanced enterprise iOS app',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'معمارية MVVM متقدمة', en: 'Advanced MVVM architecture', included: true },
        { ar: 'Combine Framework', en: 'Combine Framework', included: true },
        { ar: 'Unit Testing + UI Testing', en: 'Unit Testing + UI Testing', included: true },
        { ar: 'CI/CD Pipeline (Fastlane)', en: 'CI/CD Pipeline (Fastlane)', included: true },
        { ar: 'تعدد اللغات', en: 'Multi-language support', included: true },
        { ar: 'Accessibility دعم', en: 'Accessibility support', included: true },
        { ar: 'تكامل مع watchOS', en: 'watchOS integration', included: true },
        { ar: 'Widget Extension', en: 'Widget Extension', included: true },
        { ar: 'دعم فني مخصص', en: 'Dedicated technical support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // Native Android App
  'native-android-app': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 3500000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 400,000 دينار/شهر', en: 'One-time + 400,000 IQD/month' },
      },
      description: {
        ar: 'تطبيق Android أساسي بـKotlin',
        en: 'Basic Android app with Kotlin',
      },
      features: [
        { ar: '5 شاشات رئيسية', en: '5 main screens', included: true },
        { ar: 'Jetpack Compose UI', en: 'Jetpack Compose UI', included: true },
        { ar: 'تسجيل دخول بسيط', en: 'Simple login', included: true },
        { ar: 'استهلاك REST API', en: 'REST API consumption', included: true },
        { ar: 'دعم Android 8+', en: 'Android 8+ support', included: true },
        { ar: 'نشر على Google Play', en: 'Google Play deployment', included: true },
        { ar: 'إشعارات Push', en: 'Push notifications', included: false },
        { ar: 'قاعدة بيانات محلية', en: 'Local database', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 7000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 700,000 دينار/شهر', en: 'One-time + 700,000 IQD/month' },
      },
      description: {
        ar: 'تطبيق Android متكامل مع Backend',
        en: 'Full Android app with backend',
      },
      features: [
        { ar: 'عدد شاشات غير محدود', en: 'Unlimited screens', included: true },
        { ar: 'Jetpack Compose احترافي', en: 'Professional Jetpack Compose', included: true },
        { ar: 'نظام تسجيل دخول كامل', en: 'Full authentication system', included: true },
        { ar: 'Firebase Integration', en: 'Firebase Integration', included: true },
        { ar: 'Room Database', en: 'Room Database', included: true },
        { ar: 'Firebase Cloud Messaging', en: 'Firebase Cloud Messaging', included: true },
        { ar: 'دعم الدفع داخل التطبيق', en: 'In-app billing support', included: true },
        { ar: 'تحليلات Firebase', en: 'Firebase Analytics', included: true },
        { ar: 'Material Design 3', en: 'Material Design 3', included: true },
        { ar: 'دعم Dark Mode', en: 'Dark Mode support', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 14000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,400,000 دينار/شهر', en: 'One-time + 1,400,000 IQD/month' },
      },
      description: {
        ar: 'تطبيق Android مؤسساتي متقدم',
        en: 'Advanced enterprise Android app',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'معمارية MVVM متقدمة', en: 'Advanced MVVM architecture', included: true },
        { ar: 'Coroutines + Flow', en: 'Coroutines + Flow', included: true },
        { ar: 'Unit Testing + UI Testing', en: 'Unit Testing + UI Testing', included: true },
        { ar: 'CI/CD Pipeline', en: 'CI/CD Pipeline', included: true },
        { ar: 'تعدد اللغات', en: 'Multi-language support', included: true },
        { ar: 'دعم الأجهزة اللوحية', en: 'Tablet support', included: true },
        { ar: 'Wear OS دعم', en: 'Wear OS support', included: true },
        { ar: 'App Widget', en: 'App Widget', included: true },
        { ar: 'دعم فني مخصص', en: 'Dedicated technical support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // AI Content Generator
  'ai-content-generator': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 2000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 300,000 دينار/شهر + 50,000 دينار API', en: 'One-time + 300,000 IQD/month + 50,000 IQD API' },
      },
      description: {
        ar: 'مولد محتوى AI بسيط',
        en: 'Simple AI content generator',
      },
      features: [
        { ar: 'توليد مقالات (500 كلمة)', en: 'Generate articles (500 words)', included: true },
        { ar: 'توليد 100 محتوى/شهر', en: 'Generate 100 content/month', included: true },
        { ar: 'GPT-3.5 Turbo', en: 'GPT-3.5 Turbo', included: true },
        { ar: 'قوالب جاهزة (10 قوالب)', en: 'Ready templates (10 templates)', included: true },
        { ar: 'تحسين SEO تلقائي', en: 'Auto SEO optimization', included: true },
        { ar: 'GPT-4', en: 'GPT-4', included: false },
        { ar: 'تحليل ذكي للمحتوى', en: 'Smart content analysis', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 4000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 600,000 دينار/شهر + 150,000 دينار API', en: 'One-time + 600,000 IQD/month + 150,000 IQD API' },
      },
      description: {
        ar: 'مولد محتوى ذكي مع GPT-4',
        en: 'Smart content generator with GPT-4',
      },
      features: [
        { ar: 'توليد مقالات (2000 كلمة)', en: 'Generate articles (2000 words)', included: true },
        { ar: 'توليد 500 محتوى/شهر', en: 'Generate 500 content/month', included: true },
        { ar: 'GPT-4 Turbo', en: 'GPT-4 Turbo', included: true },
        { ar: 'قوالب جاهزة (50 قالب)', en: 'Ready templates (50 templates)', included: true },
        { ar: 'تحسين SEO متقدم', en: 'Advanced SEO optimization', included: true },
        { ar: 'تحليل ذكي للمحتوى', en: 'Smart content analysis', included: true },
        { ar: 'توليد صور بالـAI', en: 'AI image generation', included: true },
        { ar: 'LangChain للسياقات المعقدة', en: 'LangChain for complex context', included: true },
        { ar: 'تكامل مع WordPress', en: 'WordPress integration', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 8000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,200,000 دينار/شهر + API غير محدود', en: 'One-time + 1,200,000 IQD/month + Unlimited API' },
      },
      description: {
        ar: 'حل AI مؤسساتي متقدم',
        en: 'Advanced enterprise AI solution',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'محتوى غير محدود', en: 'Unlimited content', included: true },
        { ar: 'GPT-4 + Claude + Gemini', en: 'GPT-4 + Claude + Gemini', included: true },
        { ar: 'قوالب مخصصة غير محدودة', en: 'Unlimited custom templates', included: true },
        { ar: 'Fine-tuning للـAI', en: 'AI Fine-tuning', included: true },
        { ar: 'Vector Database للسياق', en: 'Vector Database for context', included: true },
        { ar: 'تكامل مع CMS متعددة', en: 'Multiple CMS integration', included: true },
        { ar: 'API مخصصة', en: 'Custom API', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 technical support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // SEO Services
  'seo-services': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 1500000,
        currency: 'IQD',
        period: { ar: '3 أشهر', en: '3 months' },
      },
      description: {
        ar: 'SEO أساسي للشركات الصغيرة',
        en: 'Basic SEO for small businesses',
      },
      features: [
        { ar: 'تدقيق SEO شامل', en: 'Comprehensive SEO audit', included: true },
        { ar: 'بحث عن 20 كلمة مفتاحية', en: 'Research 20 keywords', included: true },
        { ar: 'تحسين On-Page SEO (5 صفحات)', en: 'On-Page SEO optimization (5 pages)', included: true },
        { ar: 'إعداد Google Search Console', en: 'Google Search Console setup', included: true },
        { ar: 'إعداد Google Analytics', en: 'Google Analytics setup', included: true },
        { ar: 'تقرير شهري', en: 'Monthly report', included: true },
        { ar: 'بناء روابط خلفية', en: 'Backlink building', included: false },
        { ar: 'تحسين Technical SEO', en: 'Technical SEO optimization', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 3500000,
        currency: 'IQD',
        period: { ar: '6 أشهر', en: '6 months' },
      },
      description: {
        ar: 'SEO متقدم مع بناء روابط',
        en: 'Advanced SEO with link building',
      },
      features: [
        { ar: 'كل مميزات باقة البداية', en: 'All Starter features', included: true },
        { ar: 'بحث عن 50 كلمة مفتاحية', en: 'Research 50 keywords', included: true },
        { ar: 'تحسين On-Page SEO (صفحات غير محدودة)', en: 'On-Page SEO (unlimited pages)', included: true },
        { ar: 'تحسين Technical SEO', en: 'Technical SEO optimization', included: true },
        { ar: 'Schema Markup', en: 'Schema Markup', included: true },
        { ar: 'بناء 20 رابط خلفي شهرياً', en: 'Build 20 backlinks/month', included: true },
        { ar: 'تحسين Core Web Vitals', en: 'Core Web Vitals optimization', included: true },
        { ar: 'تقارير نصف شهرية', en: 'Bi-weekly reports', included: true },
        { ar: 'تحليل منافسين (5 منافسين)', en: 'Competitor analysis (5 competitors)', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 7000000,
        currency: 'IQD',
        period: { ar: '12 شهر', en: '12 months' },
      },
      description: {
        ar: 'SEO مؤسساتي شامل',
        en: 'Comprehensive enterprise SEO',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'بحث كلمات مفتاحية غير محدود', en: 'Unlimited keyword research', included: true },
        { ar: 'بناء 50 رابط خلفي شهرياً', en: 'Build 50 backlinks/month', included: true },
        { ar: 'Local SEO متقدم', en: 'Advanced Local SEO', included: true },
        { ar: 'تحليل منافسين غير محدود', en: 'Unlimited competitor analysis', included: true },
        { ar: 'استراتيجية محتوى', en: 'Content strategy', included: true },
        { ar: 'كتابة 8 مقالات SEO شهرياً', en: 'Write 8 SEO articles/month', included: true },
        { ar: 'تقارير أسبوعية', en: 'Weekly reports', included: true },
        { ar: 'استشارات SEO مخصصة', en: 'Dedicated SEO consultations', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 technical support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },

  // Multivendor Marketplace
  'multivendor-marketplace': {
    starter: {
      name: { ar: 'باقة البداية', en: 'Starter Package' },
      price: {
        amount: 8000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 1,000,000 دينار/شهر', en: 'One-time + 1,000,000 IQD/month' },
      },
      description: {
        ar: 'منصة Multi-vendor بسيطة',
        en: 'Simple multi-vendor platform',
      },
      features: [
        { ar: 'دعم 20 بائع', en: 'Support 20 vendors', included: true },
        { ar: 'لوحة تحكم للبائعين', en: 'Vendor dashboard', included: true },
        { ar: 'إدارة منتجات', en: 'Product management', included: true },
        { ar: 'نظام طلبات', en: 'Order management', included: true },
        { ar: 'دفع أونلاين (Stripe)', en: 'Online payment (Stripe)', included: true },
        { ar: 'عمولة إدارية', en: 'Admin commission', included: true },
        { ar: 'تقارير مبيعات', en: 'Sales reports', included: true },
        { ar: 'بحث متقدم', en: 'Advanced search', included: false },
        { ar: 'تطبيق موبايل', en: 'Mobile app', included: false },
      ],
      ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
    },
    professional: {
      name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
      price: {
        amount: 15000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 2,000,000 دينار/شهر', en: 'One-time + 2,000,000 IQD/month' },
      },
      description: {
        ar: 'منصة احترافية مع تطبيق موبايل',
        en: 'Professional platform with mobile app',
      },
      features: [
        { ar: 'دعم 100 بائع', en: 'Support 100 vendors', included: true },
        { ar: 'لوحات تحكم متقدمة', en: 'Advanced dashboards', included: true },
        { ar: 'Elasticsearch للبحث', en: 'Elasticsearch for search', included: true },
        { ar: 'نظام تقييمات ومراجعات', en: 'Rating & review system', included: true },
        { ar: 'تطبيق موبايل (iOS + Android)', en: 'Mobile app (iOS + Android)', included: true },
        { ar: 'تكامل مع شركات الشحن', en: 'Shipping company integration', included: true },
        { ar: 'نظام كوبونات', en: 'Coupon system', included: true },
        { ar: 'تقارير تحليلية متقدمة', en: 'Advanced analytics', included: true },
        { ar: 'دعم متعدد اللغات', en: 'Multi-language support', included: true },
      ],
      recommended: true,
      ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
    },
    enterprise: {
      name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
      price: {
        amount: 30000000,
        currency: 'IQD',
        period: { ar: 'لمرة واحدة + 4,000,000 دينار/شهر', en: 'One-time + 4,000,000 IQD/month' },
      },
      description: {
        ar: 'منصة مؤسساتية متكاملة',
        en: 'Complete enterprise marketplace',
      },
      features: [
        { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
        { ar: 'بائعين غير محدودين', en: 'Unlimited vendors', included: true },
        { ar: 'معمارية Microservices', en: 'Microservices architecture', included: true },
        { ar: 'CDN عالمي', en: 'Global CDN', included: true },
        { ar: 'تكامل مع ERP', en: 'ERP integration', included: true },
        { ar: 'نظام ولاء العملاء', en: 'Customer loyalty system', included: true },
        { ar: 'API مفتوحة للبائعين', en: 'Open API for vendors', included: true },
        { ar: 'تطبيق للبائعين', en: 'Vendor mobile app', included: true },
        { ar: 'AI للتوصيات', en: 'AI recommendations', included: true },
        { ar: 'دعم فني 24/7', en: '24/7 technical support', included: true },
      ],
      ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
    },
  },
};

// Default pricing for services not explicitly defined
export const defaultPricing: {
  starter: PricingTier;
  professional: PricingTier;
  enterprise: PricingTier;
} = {
  starter: {
    name: { ar: 'باقة البداية', en: 'Starter Package' },
    price: {
      amount: 2000000,
      currency: 'IQD',
      period: { ar: 'لمرة واحدة + صيانة شهرية', en: 'One-time + monthly maintenance' },
    },
    description: {
      ar: 'حل تقني بسيط للبدء',
      en: 'Simple technical solution to start',
    },
    features: [
      { ar: 'مميزات أساسية', en: 'Basic features', included: true },
      { ar: 'دعم فني 8/5', en: '8/5 technical support', included: true },
      { ar: 'تحديثات أساسية', en: 'Basic updates', included: true },
      { ar: 'مميزات متقدمة', en: 'Advanced features', included: false },
    ],
    ctaText: { ar: 'ابدأ الآن', en: 'Start Now' },
  },
  professional: {
    name: { ar: 'باقة الاحترافية', en: 'Professional Package' },
    price: {
      amount: 4500000,
      currency: 'IQD',
      period: { ar: 'لمرة واحدة + صيانة شهرية', en: 'One-time + monthly maintenance' },
    },
    description: {
      ar: 'حل احترافي متكامل',
      en: 'Complete professional solution',
    },
    features: [
      { ar: 'كل المميزات الأساسية', en: 'All basic features', included: true },
      { ar: 'مميزات متقدمة', en: 'Advanced features', included: true },
      { ar: 'دعم فني 24/5', en: '24/5 technical support', included: true },
      { ar: 'تحديثات منتظمة', en: 'Regular updates', included: true },
      { ar: 'تكامل مع أنظمة خارجية', en: 'External system integration', included: true },
    ],
    recommended: true,
    ctaText: { ar: 'الأكثر شيوعاً', en: 'Most Popular' },
  },
  enterprise: {
    name: { ar: 'باقة المؤسسات', en: 'Enterprise Package' },
    price: {
      amount: 10000000,
      currency: 'IQD',
      period: { ar: 'لمرة واحدة + صيانة شهرية', en: 'One-time + monthly maintenance' },
    },
    description: {
      ar: 'حل مؤسساتي شامل',
      en: 'Comprehensive enterprise solution',
    },
    features: [
      { ar: 'كل مميزات الباقة الاحترافية', en: 'All Professional features', included: true },
      { ar: 'تخصيص كامل', en: 'Full customization', included: true },
      { ar: 'دعم فني 24/7', en: '24/7 technical support', included: true },
      { ar: 'SLA مضمون', en: 'Guaranteed SLA', included: true },
      { ar: 'مدير حساب مخصص', en: 'Dedicated account manager', included: true },
      { ar: 'تدريب فريق العمل', en: 'Team training', included: true },
    ],
    ctaText: { ar: 'تواصل معنا', en: 'Contact Us' },
  },
};

/**
 * Get pricing for a specific service
 */
export const getPricing = (
  serviceKey: string
): { starter: PricingTier; professional: PricingTier; enterprise: PricingTier } => {
  return pricingPackages[serviceKey] || defaultPricing;
};

/**
 * Format price in Iraqi Dinar
 */
export const formatPrice = (amount: number, lang: 'ar' | 'en'): string => {
  const formatted = amount.toLocaleString('en-US');
  return lang === 'ar' ? `${formatted} دينار عراقي` : `${formatted} IQD`;
};
