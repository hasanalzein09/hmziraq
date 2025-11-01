// Tech Stack للخدمات التقنية
// التقنيات المستخدمة في كل خدمة

export type TechStackItem = {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai' | 'tools' | 'mobile';
  icon?: string; // اسم الأيقونة من مكتبة icons
  description: { ar: string; en: string };
};

export type ServiceTechStack = {
  [serviceKey: string]: {
    frontend?: TechStackItem[];
    backend?: TechStackItem[];
    database?: TechStackItem[];
    cloud?: TechStackItem[];
    ai?: TechStackItem[];
    tools?: TechStackItem[];
    mobile?: TechStackItem[];
  };
};

// Tech Stack لكل خدمة
export const TECH_STACK: ServiceTechStack = {
  // 1. WhatsApp Bot
  'whatsapp-bot': {
    backend: [
      { name: 'Node.js', category: 'backend', description: { ar: 'بيئة تشغيل JavaScript للخادم', en: 'JavaScript runtime for server' } },
      { name: 'TypeScript', category: 'backend', description: { ar: 'لغة برمجة مطورة من JavaScript', en: 'Superset of JavaScript' } },
      { name: 'WhatsApp Business API', category: 'backend', description: { ar: 'واجهة برمجة واتساب الرسمية', en: 'Official WhatsApp API' } },
      { name: 'Express.js', category: 'backend', description: { ar: 'إطار عمل لبناء APIs', en: 'Web framework for APIs' } },
    ],
    database: [
      { name: 'MongoDB', category: 'database', description: { ar: 'قاعدة بيانات NoSQL مرنة', en: 'Flexible NoSQL database' } },
      { name: 'Redis', category: 'database', description: { ar: 'قاعدة بيانات للتخزين المؤقت', en: 'In-memory caching database' } },
    ],
    cloud: [
      { name: 'AWS Lambda', category: 'cloud', description: { ar: 'حوسبة بدون خادم', en: 'Serverless computing' } },
      { name: 'Vercel', category: 'cloud', description: { ar: 'استضافة سحابية سريعة', en: 'Fast cloud hosting' } },
    ],
    ai: [
      { name: 'OpenAI GPT', category: 'ai', description: { ar: 'ذكاء اصطناعي للردود الذكية', en: 'AI for smart responses' } },
      { name: 'Natural Language Processing', category: 'ai', description: { ar: 'معالجة اللغة الطبيعية', en: 'NLP for understanding' } },
    ],
  },

  // 2. Instagram Bot
  'instagram-bot': {
    backend: [
      { name: 'Python', category: 'backend', description: { ar: 'لغة برمجة قوية للأتمتة', en: 'Powerful automation language' } },
      { name: 'Instagram Graph API', category: 'backend', description: { ar: 'واجهة برمجة انستقرام', en: 'Instagram API' } },
      { name: 'FastAPI', category: 'backend', description: { ar: 'إطار عمل Python سريع', en: 'Fast Python framework' } },
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم JavaScript بديل', en: 'Alternative JavaScript server' } },
    ],
    database: [
      { name: 'PostgreSQL', category: 'database', description: { ar: 'قاعدة بيانات علائقية قوية', en: 'Powerful relational database' } },
      { name: 'Redis', category: 'database', description: { ar: 'تخزين مؤقت للبيانات', en: 'Data caching' } },
    ],
    cloud: [
      { name: 'Digital Ocean', category: 'cloud', description: { ar: 'خوادم سحابية موثوقة', en: 'Reliable cloud servers' } },
      { name: 'AWS', category: 'cloud', description: { ar: 'خدمات أمازون السحابية', en: 'Amazon cloud services' } },
    ],
    ai: [
      { name: 'Computer Vision', category: 'ai', description: { ar: 'رؤية حاسوبية لتحليل الصور', en: 'Image analysis' } },
      { name: 'OpenAI', category: 'ai', description: { ar: 'ذكاء اصطناعي للتعليقات', en: 'AI for comments' } },
    ],
  },

  // 3. Facebook Page Bot
  'facebook-page-bot': {
    backend: [
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم JavaScript', en: 'JavaScript server' } },
      { name: 'Facebook Graph API', category: 'backend', description: { ar: 'واجهة برمجة فيسبوك', en: 'Facebook API' } },
      { name: 'Messenger Platform', category: 'backend', description: { ar: 'منصة ماسنجر', en: 'Messenger platform' } },
      { name: 'Express.js', category: 'backend', description: { ar: 'إطار عمل ويب', en: 'Web framework' } },
    ],
    database: [
      { name: 'MongoDB', category: 'database', description: { ar: 'قاعدة بيانات مرنة', en: 'Flexible database' } },
      { name: 'Redis', category: 'database', description: { ar: 'تخزين مؤقت', en: 'Caching' } },
    ],
    cloud: [
      { name: 'Vercel', category: 'cloud', description: { ar: 'استضافة سريعة', en: 'Fast hosting' } },
      { name: 'AWS Lambda', category: 'cloud', description: { ar: 'وظائف بدون خادم', en: 'Serverless functions' } },
    ],
    ai: [
      { name: 'OpenAI GPT', category: 'ai', description: { ar: 'ذكاء اصطناعي محادثة', en: 'Conversational AI' } },
      { name: 'NLP', category: 'ai', description: { ar: 'معالجة لغة طبيعية', en: 'Natural language processing' } },
    ],
  },

  // 4. Next.js Solutions
  'nextjs-solutions': {
    frontend: [
      { name: 'Next.js 15', category: 'frontend', description: { ar: 'إطار React متقدم', en: 'Advanced React framework' } },
      { name: 'React 19', category: 'frontend', description: { ar: 'مكتبة JavaScript للواجهات', en: 'UI JavaScript library' } },
      { name: 'TypeScript', category: 'frontend', description: { ar: 'JavaScript مع أنواع ثابتة', en: 'Typed JavaScript' } },
      { name: 'Tailwind CSS', category: 'frontend', description: { ar: 'إطار CSS حديث', en: 'Modern CSS framework' } },
    ],
    backend: [
      { name: 'Next.js API Routes', category: 'backend', description: { ar: 'APIs مدمجة في Next.js', en: 'Built-in APIs' } },
      { name: 'Node.js', category: 'backend', description: { ar: 'بيئة تشغيل JavaScript', en: 'JavaScript runtime' } },
    ],
    database: [
      { name: 'PostgreSQL', category: 'database', description: { ar: 'قاعدة بيانات SQL قوية', en: 'Robust SQL database' } },
      { name: 'Prisma ORM', category: 'database', description: { ar: 'أداة للتعامل مع قواعد البيانات', en: 'Database toolkit' } },
      { name: 'MongoDB', category: 'database', description: { ar: 'قاعدة بيانات NoSQL', en: 'NoSQL database' } },
    ],
    cloud: [
      { name: 'Vercel', category: 'cloud', description: { ar: 'استضافة Next.js المثلى', en: 'Optimal Next.js hosting' } },
      { name: 'AWS S3', category: 'cloud', description: { ar: 'تخزين ملفات سحابي', en: 'Cloud file storage' } },
    ],
  },

  // 5. WordPress Solutions
  'wordpress-solutions': {
    backend: [
      { name: 'PHP', category: 'backend', description: { ar: 'لغة برمجة ووردبريس', en: 'WordPress language' } },
      { name: 'WordPress Core', category: 'backend', description: { ar: 'نواة ووردبريس', en: 'WordPress core' } },
      { name: 'Custom Plugins', category: 'backend', description: { ar: 'إضافات مخصصة', en: 'Custom plugins' } },
    ],
    database: [
      { name: 'MySQL', category: 'database', description: { ar: 'قاعدة بيانات ووردبريس', en: 'WordPress database' } },
    ],
    cloud: [
      { name: 'cPanel Hosting', category: 'cloud', description: { ar: 'استضافة تقليدية', en: 'Traditional hosting' } },
      { name: 'Cloudflare CDN', category: 'cloud', description: { ar: 'شبكة توزيع محتوى', en: 'Content delivery network' } },
    ],
    tools: [
      { name: 'Elementor', category: 'tools', description: { ar: 'أداة بناء صفحات', en: 'Page builder' } },
      { name: 'Yoast SEO', category: 'tools', description: { ar: 'تحسين محركات البحث', en: 'SEO optimization' } },
    ],
  },

  // 6. WooCommerce Solutions
  'woocommerce-solutions': {
    backend: [
      { name: 'PHP', category: 'backend', description: { ar: 'لغة ووردبريس', en: 'WordPress language' } },
      { name: 'WooCommerce', category: 'backend', description: { ar: 'منصة تجارة إلكترونية', en: 'E-commerce platform' } },
      { name: 'WordPress', category: 'backend', description: { ar: 'نظام إدارة محتوى', en: 'CMS' } },
    ],
    database: [
      { name: 'MySQL', category: 'database', description: { ar: 'قاعدة بيانات المتجر', en: 'Store database' } },
    ],
    cloud: [
      { name: 'WooCommerce Hosting', category: 'cloud', description: { ar: 'استضافة متخصصة', en: 'Specialized hosting' } },
      { name: 'Cloudflare', category: 'cloud', description: { ar: 'أمان وسرعة', en: 'Security and speed' } },
    ],
    tools: [
      { name: 'Zain Cash Gateway', category: 'tools', description: { ar: 'بوابة دفع عراقية', en: 'Iraqi payment gateway' } },
      { name: 'Stripe', category: 'tools', description: { ar: 'بوابة دفع عالمية', en: 'Global payment' } },
      { name: 'SMS Gateway', category: 'tools', description: { ar: 'إرسال رسائل نصية', en: 'SMS notifications' } },
    ],
  },

  // 7. SEO Services
  'seo-services': {
    tools: [
      { name: 'Google Search Console', category: 'tools', description: { ar: 'أدوات Google للبحث', en: 'Google search tools' } },
      { name: 'SEMrush', category: 'tools', description: { ar: 'تحليل SEO شامل', en: 'Comprehensive SEO analysis' } },
      { name: 'Ahrefs', category: 'tools', description: { ar: 'تحليل روابط خلفية', en: 'Backlink analysis' } },
      { name: 'Google Analytics', category: 'tools', description: { ar: 'تحليلات الموقع', en: 'Website analytics' } },
      { name: 'Screaming Frog', category: 'tools', description: { ar: 'تدقيق تقني', en: 'Technical audit' } },
      { name: 'Moz Pro', category: 'tools', description: { ar: 'أدوات SEO متقدمة', en: 'Advanced SEO tools' } },
    ],
    backend: [
      { name: 'Python Scripts', category: 'backend', description: { ar: 'أتمتة SEO', en: 'SEO automation' } },
    ],
  },

  // 8. AI Automation Solutions
  'ai-automation-solutions': {
    ai: [
      { name: 'OpenAI GPT-4', category: 'ai', description: { ar: 'نموذج لغوي متقدم', en: 'Advanced language model' } },
      { name: 'LangChain', category: 'ai', description: { ar: 'إطار عمل AI', en: 'AI framework' } },
      { name: 'TensorFlow', category: 'ai', description: { ar: 'تعلم آلي', en: 'Machine learning' } },
      { name: 'Anthropic Claude', category: 'ai', description: { ar: 'ذكاء اصطناعي بديل', en: 'Alternative AI' } },
    ],
    backend: [
      { name: 'Python', category: 'backend', description: { ar: 'لغة AI المفضلة', en: 'Preferred AI language' } },
      { name: 'FastAPI', category: 'backend', description: { ar: 'API سريع', en: 'Fast API' } },
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم JavaScript', en: 'JavaScript server' } },
    ],
    database: [
      { name: 'Vector Database', category: 'database', description: { ar: 'قاعدة بيانات ذكية', en: 'Smart database' } },
      { name: 'PostgreSQL', category: 'database', description: { ar: 'قاعدة بيانات علائقية', en: 'Relational database' } },
    ],
    cloud: [
      { name: 'OpenAI API', category: 'cloud', description: { ar: 'خدمة OpenAI السحابية', en: 'OpenAI cloud service' } },
      { name: 'AWS', category: 'cloud', description: { ar: 'خدمات أمازون السحابية', en: 'Amazon cloud services' } },
    ],
  },

  // 9. ERP System
  'erp-system': {
    frontend: [
      { name: 'React', category: 'frontend', description: { ar: 'واجهة مستخدم تفاعلية', en: 'Interactive UI' } },
      { name: 'Next.js', category: 'frontend', description: { ar: 'إطار عمل React متقدم', en: 'Advanced React framework' } },
      { name: 'TypeScript', category: 'frontend', description: { ar: 'JavaScript مع أنواع', en: 'Typed JavaScript' } },
      { name: 'Tailwind CSS', category: 'frontend', description: { ar: 'CSS حديث', en: 'Modern CSS' } },
    ],
    backend: [
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم قوي', en: 'Powerful server' } },
      { name: 'Python', category: 'backend', description: { ar: 'للمعالجات المعقدة', en: 'For complex processing' } },
      { name: 'REST API', category: 'backend', description: { ar: 'واجهة برمجية', en: 'API interface' } },
      { name: 'GraphQL', category: 'backend', description: { ar: 'استعلامات مرنة', en: 'Flexible queries' } },
    ],
    database: [
      { name: 'PostgreSQL', category: 'database', description: { ar: 'قاعدة بيانات قوية', en: 'Robust database' } },
      { name: 'MongoDB', category: 'database', description: { ar: 'بيانات مرنة', en: 'Flexible data' } },
      { name: 'Redis', category: 'database', description: { ar: 'تخزين مؤقت', en: 'Caching' } },
    ],
    cloud: [
      { name: 'AWS', category: 'cloud', description: { ar: 'خدمات سحابية شاملة', en: 'Comprehensive cloud services' } },
      { name: 'Docker', category: 'cloud', description: { ar: 'حاويات للنشر', en: 'Containers for deployment' } },
      { name: 'Kubernetes', category: 'cloud', description: { ar: 'إدارة الحاويات', en: 'Container orchestration' } },
    ],
    tools: [
      { name: 'GitHub', category: 'tools', description: { ar: 'إدارة الكود', en: 'Code management' } },
      { name: 'CI/CD Pipeline', category: 'tools', description: { ar: 'نشر آلي', en: 'Automated deployment' } },
    ],
  },

  // 10. CRM System
  'crm-system': {
    frontend: [
      { name: 'React', category: 'frontend', description: { ar: 'واجهة حديثة', en: 'Modern UI' } },
      { name: 'Vue.js', category: 'frontend', description: { ar: 'إطار خفيف', en: 'Lightweight framework' } },
      { name: 'TypeScript', category: 'frontend', description: { ar: 'JavaScript آمن', en: 'Type-safe JavaScript' } },
    ],
    backend: [
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم سريع', en: 'Fast server' } },
      { name: 'Express.js', category: 'backend', description: { ar: 'إطار ويب', en: 'Web framework' } },
      { name: 'Nest.js', category: 'backend', description: { ar: 'إطار قوي', en: 'Robust framework' } },
    ],
    database: [
      { name: 'MySQL', category: 'database', description: { ar: 'قاعدة علائقية', en: 'Relational database' } },
      { name: 'MongoDB', category: 'database', description: { ar: 'قاعدة مرنة', en: 'Flexible database' } },
      { name: 'Redis', category: 'database', description: { ar: 'كاش سريع', en: 'Fast cache' } },
    ],
    cloud: [
      { name: 'AWS', category: 'cloud', description: { ar: 'استضافة موثوقة', en: 'Reliable hosting' } },
      { name: 'Vercel', category: 'cloud', description: { ar: 'نشر سريع', en: 'Fast deployment' } },
    ],
    tools: [
      { name: 'Twilio', category: 'tools', description: { ar: 'رسائل SMS', en: 'SMS messaging' } },
      { name: 'SendGrid', category: 'tools', description: { ar: 'إرسال بريد', en: 'Email sending' } },
      { name: 'Zapier', category: 'tools', description: { ar: 'تكامل آلي', en: 'Auto integration' } },
    ],
  },

  // 11. Invoicing System
  'invoicing-system': {
    frontend: [
      { name: 'React', category: 'frontend', description: { ar: 'واجهة بسيطة', en: 'Simple UI' } },
      { name: 'Next.js', category: 'frontend', description: { ar: 'إطار سريع', en: 'Fast framework' } },
      { name: 'Tailwind CSS', category: 'frontend', description: { ar: 'تصميم سريع', en: 'Rapid design' } },
    ],
    backend: [
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم خفيف', en: 'Lightweight server' } },
      { name: 'Express.js', category: 'backend', description: { ar: 'API بسيط', en: 'Simple API' } },
      { name: 'PDF Generation', category: 'backend', description: { ar: 'توليد PDF', en: 'PDF generation' } },
    ],
    database: [
      { name: 'PostgreSQL', category: 'database', description: { ar: 'قاعدة موثوقة', en: 'Reliable database' } },
      { name: 'SQLite', category: 'database', description: { ar: 'قاعدة خفيفة', en: 'Lightweight database' } },
    ],
    cloud: [
      { name: 'Vercel', category: 'cloud', description: { ar: 'استضافة سريعة', en: 'Fast hosting' } },
      { name: 'AWS S3', category: 'cloud', description: { ar: 'تخزين ملفات', en: 'File storage' } },
    ],
    tools: [
      { name: 'Stripe', category: 'tools', description: { ar: 'بوابة دفع', en: 'Payment gateway' } },
      { name: 'Zain Cash', category: 'tools', description: { ar: 'دفع محلي', en: 'Local payment' } },
      { name: 'PDFKit', category: 'tools', description: { ar: 'إنشاء PDF', en: 'PDF creation' } },
    ],
  },

  // 12. POS System
  'pos-system': {
    frontend: [
      { name: 'React', category: 'frontend', description: { ar: 'واجهة تفاعلية', en: 'Interactive UI' } },
      { name: 'Electron', category: 'frontend', description: { ar: 'تطبيق سطح مكتب', en: 'Desktop app' } },
      { name: 'TypeScript', category: 'frontend', description: { ar: 'كود آمن', en: 'Safe code' } },
    ],
    backend: [
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم محلي', en: 'Local server' } },
      { name: 'Express.js', category: 'backend', description: { ar: 'API محلي', en: 'Local API' } },
      { name: 'Socket.io', category: 'backend', description: { ar: 'اتصال فوري', en: 'Real-time connection' } },
    ],
    database: [
      { name: 'SQLite', category: 'database', description: { ar: 'قاعدة محلية', en: 'Local database' } },
      { name: 'PostgreSQL', category: 'database', description: { ar: 'قاعدة مركزية', en: 'Central database' } },
      { name: 'Redis', category: 'database', description: { ar: 'كاش سريع', en: 'Fast cache' } },
    ],
    cloud: [
      { name: 'AWS', category: 'cloud', description: { ar: 'مزامنة سحابية', en: 'Cloud sync' } },
      { name: 'Firebase', category: 'cloud', description: { ar: 'قاعدة فورية', en: 'Real-time database' } },
    ],
    tools: [
      { name: 'Thermal Printer API', category: 'tools', description: { ar: 'طابعة حرارية', en: 'Thermal printer' } },
      { name: 'Barcode Scanner', category: 'tools', description: { ar: 'قارئ باركود', en: 'Barcode scanner' } },
      { name: 'Cash Drawer', category: 'tools', description: { ar: 'درج نقود', en: 'Cash drawer' } },
    ],
  },

  // Tech Stack افتراضي للخدمات التي لم يتم تحديدها بعد
  'default': {
    frontend: [
      { name: 'React', category: 'frontend', description: { ar: 'مكتبة واجهات حديثة', en: 'Modern UI library' } },
      { name: 'TypeScript', category: 'frontend', description: { ar: 'JavaScript آمن', en: 'Type-safe JavaScript' } },
    ],
    backend: [
      { name: 'Node.js', category: 'backend', description: { ar: 'خادم JavaScript', en: 'JavaScript server' } },
      { name: 'Express', category: 'backend', description: { ar: 'إطار عمل ويب', en: 'Web framework' } },
    ],
    database: [
      { name: 'PostgreSQL', category: 'database', description: { ar: 'قاعدة بيانات موثوقة', en: 'Reliable database' } },
    ],
    cloud: [
      { name: 'AWS / Vercel', category: 'cloud', description: { ar: 'استضافة سحابية', en: 'Cloud hosting' } },
    ],
  },
};

// دالة للحصول على Tech Stack لخدمة معينة
export function getTechStack(serviceKey: string) {
  return TECH_STACK[serviceKey] || TECH_STACK['default'];
}

// دالة للحصول على جميع التقنيات كقائمة مسطحة
export function getAllTechnologies(serviceKey: string): TechStackItem[] {
  const stack = getTechStack(serviceKey);
  const allTech: TechStackItem[] = [];
  
  Object.values(stack).forEach(category => {
    if (Array.isArray(category)) {
      allTech.push(...category);
    }
  });
  
  return allTech;
}

// قائمة بجميع التقنيات المتاحة (للبحث والفلترة)
export const ALL_TECHNOLOGIES = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
  'Swift', 'Kotlin', 'Flutter', 'React Native', 'Dart',
  'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase',
  'AWS', 'Vercel', 'Azure', 'Google Cloud', 'Digital Ocean',
  'OpenAI', 'GPT-4', 'TensorFlow', 'PyTorch', 'LangChain',
  'Express', 'FastAPI', 'GraphQL', 'REST API',
  'Tailwind CSS', 'Material UI', 'Bootstrap',
  'Docker', 'Kubernetes', 'CI/CD', 'Git',
];
