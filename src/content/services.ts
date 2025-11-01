// 8 Core Services - Focused on Chatbots and Digital Solutions

export type Service = {
  key: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  keywords: string[];
  category: 'automation' | 'solutions' | 'ecommerce' | 'ai' | 'marketing' | 'business-systems';
};

export const SERVICES: Service[] = [
  {
    key: 'whatsapp-bot',
    name: { 
      en: 'WhatsApp Business Bot', 
      ar: 'بوت واتساب للأعمال' 
    },
    description: { 
      en: 'Automated WhatsApp bot for customer service, appointments, orders, and business automation in Iraq', 
      ar: 'بوت واتساب احترافي للرد الآلي وخدمة العملاء وحجز المواعيد وإدارة الطلبات للشركات في العراق' 
    },
    keywords: [
      'بوت واتساب',
      'واتساب للأعمال العراق',
      'WhatsApp bot Iraq',
      'بوت واتساب بغداد',
      'WhatsApp business bot Baghdad',
      'أتمتة واتساب',
      'chatbot واتساب'
    ],
    category: 'automation',
  },
  {
    key: 'instagram-bot',
    name: { 
      en: 'Instagram Automation Bot', 
      ar: 'بوت إنستغرام للتفاعل والأتمتة' 
    },
    description: { 
      en: 'Instagram automation bot for DMs, comments, contests, and engagement for Iraqi businesses', 
      ar: 'بوت إنستغرام للرد على الرسائل والتعليقات وإدارة المسابقات وزيادة التفاعل للأعمال في العراق' 
    },
    keywords: [
      'بوت إنستغرام',
      'Instagram bot Iraq',
      'أتمتة إنستغرام',
      'إنستغرام للأعمال العراق',
      'Instagram automation Baghdad',
      'بوت انستقرام بغداد'
    ],
    category: 'automation',
  },
  {
    key: 'facebook-page-bot',
    name: { 
      en: 'Facebook Page Bot', 
      ar: 'بوت صفحات فيسبوك' 
    },
    description: { 
      en: 'Facebook Messenger bot for automated responses, customer service, and lead generation in Iraq', 
      ar: 'بوت ماسنجر فيسبوك للرد الآلي وخدمة العملاء وجمع بيانات العملاء المحتملين في العراق' 
    },
    keywords: [
      'بوت فيسبوك',
      'Facebook bot Iraq',
      'بوت ماسنجر',
      'Messenger bot Baghdad',
      'أتمتة فيسبوك العراق',
      'chatbot فيسبوك'
    ],
    category: 'automation',
  },
  {
    key: 'nextjs-solutions',
    name: { 
      en: 'Next.js Solutions', 
      ar: 'حلول Next.js' 
    },
    description: { 
      en: 'Modern web applications and websites built with Next.js for Iraqi businesses - fast, SEO-optimized, scalable', 
      ar: 'تطوير تطبيقات ومواقع ويب حديثة باستخدام Next.js للشركات العراقية - سريعة ومحسّنة لمحركات البحث' 
    },
    keywords: [
      'Next.js العراق',
      'Next.js Iraq',
      'تطوير مواقع Next.js بغداد',
      'React development Iraq',
      'تطوير تطبيقات ويب',
      'موقع سريع SEO'
    ],
    category: 'solutions',
  },
  {
    key: 'wordpress-solutions',
    name: { 
      en: 'WordPress Solutions', 
      ar: 'حلول ووردبريس' 
    },
    description: { 
      en: 'Professional WordPress websites, blogs, and portals for Iraqi businesses and organizations', 
      ar: 'مواقع ووردبريس احترافية ومدونات وبوابات للشركات والمؤسسات في العراق' 
    },
    keywords: [
      'ووردبريس العراق',
      'WordPress Iraq',
      'تصميم موقع ووردبريس بغداد',
      'مدونة ووردبريس',
      'WordPress development Iraq',
      'موقع شركة ووردبريس'
    ],
    category: 'solutions',
  },
  {
    key: 'woocommerce-solutions',
    name: { 
      en: 'WooCommerce Solutions', 
      ar: 'حلول متاجر WooCommerce' 
    },
    description: { 
      en: 'Complete eCommerce stores with WooCommerce for selling products online in Iraq with payment integration', 
      ar: 'متاجر إلكترونية متكاملة باستخدام WooCommerce لبيع المنتجات أونلاين في العراق مع تكامل الدفع' 
    },
    keywords: [
      'متجر إلكتروني العراق',
      'WooCommerce Iraq',
      'تجارة إلكترونية بغداد',
      'eCommerce store Iraq',
      'متجر أونلاين',
      'WooCommerce development'
    ],
    category: 'ecommerce',
  },
  {
    key: 'seo-services',
    name: { 
      en: 'SEO Services', 
      ar: 'خدمات تحسين محركات البحث' 
    },
    description: { 
      en: 'Professional SEO services to rank higher on Google for Iraqi businesses - keyword research, content, links', 
      ar: 'خدمات تحسين محركات البحث الاحترافية للظهور في نتائج جوجل الأولى للشركات العراقية' 
    },
    keywords: [
      'SEO العراق',
      'تحسين محركات البحث',
      'SEO services Iraq',
      'تصدر نتائج جوجل',
      'SEO Baghdad',
      'خدمات SEO بغداد'
    ],
    category: 'marketing',
  },
  {
    key: 'ai-automation-solutions',
    name: { 
      en: 'AI Automation Solutions', 
      ar: 'حلول الأتمتة بالذكاء الاصطناعي' 
    },
    description: { 
      en: 'AI-powered automation solutions for Iraqi businesses - chatbots, document processing, predictions, analysis', 
      ar: 'حلول أتمتة ذكية باستخدام الذكاء الاصطناعي للشركات العراقية - بوتات، معالجة وثائق، تحليل بيانات' 
    },
    keywords: [
      'الذكاء الاصطناعي العراق',
      'AI automation Iraq',
      'أتمتة ذكية',
      'AI solutions Baghdad',
      'ذكاء اصطناعي بغداد',
      'ChatGPT integration'
    ],
    category: 'ai',
  },
  {
    key: 'erp-system',
    name: { 
      en: 'ERP System', 
      ar: 'نظام تخطيط موارد المؤسسات' 
    },
    description: { 
      en: 'Complete ERP system for Iraqi businesses - inventory, accounting, HR, sales, purchasing, and reporting', 
      ar: 'نظام ERP متكامل للشركات العراقية - إدارة المخزون، المحاسبة، الموارد البشرية، المبيعات، المشتريات' 
    },
    keywords: [
      'نظام ERP العراق',
      'ERP system Iraq',
      'تخطيط موارد المؤسسات',
      'ERP Baghdad',
      'نظام إدارة الشركات',
      'ERP software Iraq'
    ],
    category: 'business-systems',
  },
  {
    key: 'crm-system',
    name: { 
      en: 'CRM System', 
      ar: 'نظام إدارة علاقات العملاء' 
    },
    description: { 
      en: 'Customer Relationship Management system for Iraqi businesses - track leads, manage customers, sales pipeline', 
      ar: 'نظام إدارة علاقات العملاء للشركات العراقية - متابعة العملاء المحتملين، إدارة المبيعات، التقارير' 
    },
    keywords: [
      'نظام CRM العراق',
      'CRM system Iraq',
      'إدارة علاقات العملاء',
      'CRM Baghdad',
      'نظام إدارة المبيعات',
      'customer management Iraq'
    ],
    category: 'business-systems',
  },
  {
    key: 'invoicing-system',
    name: { 
      en: 'Invoicing System', 
      ar: 'نظام الفواتير الإلكترونية' 
    },
    description: { 
      en: 'Professional invoicing and billing system for Iraqi businesses - create invoices, track payments, reports', 
      ar: 'نظام فواتير احترافي للشركات العراقية - إنشاء فواتير، متابعة المدفوعات، تقارير مالية' 
    },
    keywords: [
      'نظام فواتير العراق',
      'invoicing system Iraq',
      'فواتير إلكترونية',
      'billing system Baghdad',
      'نظام الفوترة',
      'invoice software Iraq'
    ],
    category: 'business-systems',
  },
  {
    key: 'pos-system',
    name: { 
      en: 'POS System', 
      ar: 'نظام نقاط البيع' 
    },
    description: { 
      en: 'Point of Sale system for Iraqi restaurants, shops, and retail - sales, inventory, receipts, reports', 
      ar: 'نظام نقاط البيع للمطاعم والمحلات التجارية في العراق - مبيعات، مخزون، فواتير، تقارير' 
    },
    keywords: [
      'نظام POS العراق',
      'POS system Iraq',
      'نقاط البيع',
      'كاشير إلكتروني',
      'POS Baghdad',
      'restaurant POS Iraq'
    ],
    category: 'business-systems',
  },
];
