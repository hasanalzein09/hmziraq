// 🚀 MEGA SERVICES - 50+ خدمات رقمية شاملة للسوق العراقي
// هذا الملف يوسع services.ts بـ 50 خدمة جديدة لتغطية كل القطاعات

export type Service = {
  key: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  keywords: string[];
  category: 'automation' | 'ai' | 'web' | 'ecommerce' | 'mobile' | 'marketing' | 'security' | 'cloud' | 'advanced';
};

export const MEGA_SERVICES: Service[] = [
  // === قسم الذكاء الاصطناعي (AI Services) - 10 خدمات ===
  {
    key: 'ai-chatbot',
    name: { ar: 'شات بوت ذكاء اصطناعي', en: 'AI-Powered Chatbot' },
    description: {
      ar: 'شات بوت ذكي بتقنية GPT يفهم اللهجة العراقية ويرد على العملاء تلقائياً 24/7، يدعم العربية والإنجليزية',
      en: 'Smart GPT chatbot that understands Iraqi dialect and automatically responds to customers 24/7, supports Arabic and English'
    },
    keywords: [
      'chatbot عراق', 'شات بوت ذكاء اصطناعي', 'AI chatbot Iraq', 'روبوت محادثة',
      'بوت خدمة عملاء', 'ذكاء اصطناعي عراق', 'GPT عربي', 'رد تلقائي عملاء'
    ],
    category: 'ai'
  },
  {
    key: 'ai-content-generator',
    name: { ar: 'مولد محتوى بالذكاء الاصطناعي', en: 'AI Content Generator' },
    description: {
      ar: 'إنشاء محتوى تسويقي احترافي بالعربية والإنجليزية: منشورات، مقالات، إعلانات، أوصاف منتجات باستخدام AI',
      en: 'Create professional marketing content in Arabic and English: posts, articles, ads, product descriptions using AI'
    },
    keywords: [
      'كتابة محتوى AI', 'مولد محتوى عربي', 'AI content Iraq', 'كتابة تلقائية',
      'محتوى تسويقي AI', 'مقالات ذكاء اصطناعي', 'GPT كتابة عربي'
    ],
    category: 'ai'
  },
  {
    key: 'ai-image-generator',
    name: { ar: 'مولد صور بالذكاء الاصطناعي', en: 'AI Image Generator' },
    description: {
      ar: 'إنشاء صور احترافية وتصاميم فريدة باستخدام AI (Midjourney, DALL-E, Stable Diffusion) للإعلانات والمنشورات',
      en: 'Create professional images and unique designs using AI (Midjourney, DALL-E, Stable Diffusion) for ads and posts'
    },
    keywords: [
      'توليد صور AI', 'مولد صور ذكاء اصطناعي', 'AI image Iraq', 'تصاميم AI',
      'Midjourney عراق', 'DALL-E عربي', 'صور تلقائية'
    ],
    category: 'ai'
  },
  {
    key: 'ai-voice-assistant',
    name: { ar: 'مساعد صوتي ذكي', en: 'AI Voice Assistant' },
    description: {
      ar: 'مساعد صوتي ذكي يفهم اللهجة العراقية ويرد بالصوت، مثالي للمطاعم والفنادق والمحلات',
      en: 'Smart voice assistant that understands Iraqi dialect and responds with voice, ideal for restaurants, hotels and shops'
    },
    keywords: [
      'مساعد صوتي عراق', 'AI voice Iraq', 'تعرف صوتي عربي',
      'Alexa عربي', 'مساعد ذكي صوت', 'رد صوتي تلقائي'
    ],
    category: 'ai'
  },
  {
    key: 'ai-data-analysis',
    name: { ar: 'تحليل بيانات بالذكاء الاصطناعي', en: 'AI Data Analysis' },
    description: {
      ar: 'تحليل ذكي لبيانات مبيعاتك وعملائك باستخدام AI، تقارير تلقائية، توقعات مستقبلية، نصائح لزيادة الأرباح',
      en: 'Smart analysis of your sales and customer data using AI, automatic reports, future predictions, tips to increase profits'
    },
    keywords: [
      'تحليل بيانات AI', 'AI analytics Iraq', 'ذكاء أعمال',
      'تقارير تلقائية', 'توقعات مبيعات AI', 'Business intelligence'
    ],
    category: 'ai'
  },
  {
    key: 'ai-customer-prediction',
    name: { ar: 'توقع سلوك العملاء بالذكاء الاصطناعي', en: 'AI Customer Behavior Prediction' },
    description: {
      ar: 'تقنية AI تتوقع ماذا سيطلب العميل القادم، متى سيشتري، وكيف تزيد مبيعاتك معه',
      en: 'AI technology predicts what next customer will order, when they will buy, and how to increase your sales with them'
    },
    keywords: [
      'توقع عملاء AI', 'customer prediction Iraq', 'تحليل سلوك عملاء',
      'AI توقعات مبيعات', 'ذكاء اصطناعي تسويق'
    ],
    category: 'ai'
  },
  {
    key: 'ai-fraud-detection',
    name: { ar: 'كشف الاحتيال بالذكاء الاصطناعي', en: 'AI Fraud Detection' },
    description: {
      ar: 'نظام AI يكتشف المعاملات المشبوهة والاحتيال تلقائياً، يحمي أموالك وعملائك',
      en: 'AI system detects suspicious transactions and fraud automatically, protects your money and customers'
    },
    keywords: [
      'كشف احتيال AI', 'fraud detection Iraq', 'أمان معاملات',
      'AI أمان مالي', 'حماية من الاحتيال'
    ],
    category: 'ai'
  },
  {
    key: 'ai-recommendation-engine',
    name: { ar: 'محرك توصيات ذكي', en: 'AI Recommendation Engine' },
    description: {
      ar: 'يقترح المنتجات المناسبة لكل عميل تلقائياً مثل Amazon، يزيد مبيعاتك 40% على الأقل',
      en: 'Automatically suggests suitable products for each customer like Amazon, increases your sales by at least 40%'
    },
    keywords: [
      'محرك توصيات AI', 'recommendation engine Iraq', 'اقتراحات منتجات',
      'AI تسويق ذكي', 'زيادة مبيعات AI'
    ],
    category: 'ai'
  },
  {
    key: 'ai-sentiment-analysis',
    name: { ar: 'تحليل مشاعر العملاء بالذكاء الاصطناعي', en: 'AI Sentiment Analysis' },
    description: {
      ar: 'تحليل تلقائي لتعليقات العملاء ومشاعرهم (إيجابية/سلبية/محايدة) على سوشال ميديا ومراجعات المنتجات',
      en: 'Automatic analysis of customer comments and feelings (positive/negative/neutral) on social media and product reviews'
    },
    keywords: [
      'تحليل مشاعر AI', 'sentiment analysis Iraq', 'تحليل تعليقات',
      'AI رضا عملاء', 'مراقبة سمعة تجارية'
    ],
    category: 'ai'
  },
  {
    key: 'ai-translation',
    name: { ar: 'ترجمة احترافية بالذكاء الاصطناعي', en: 'AI Professional Translation' },
    description: {
      ar: 'ترجمة فورية احترافية (عربي/إنجليزي/كردي) باستخدام AI، مثالية للمواقع والمتاجر والمستندات',
      en: 'Instant professional translation (Arabic/English/Kurdish) using AI, ideal for websites, stores and documents'
    },
    keywords: [
      'ترجمة AI عراق', 'AI translation Iraq', 'ترجمة تلقائية',
      'ترجمة عربي انجليزي AI', 'ترجمة كردي عربي'
    ],
    category: 'ai'
  },

  // === قسم التجارة الإلكترونية (E-Commerce) - 15 خدمة ===
  {
    key: 'shopify-store',
    name: { ar: 'متجر شوبيفاي احترافي', en: 'Professional Shopify Store' },
    description: {
      ar: 'متجر إلكتروني على Shopify بتصميم عراقي، دعم زين كاش وبطاقات العراق، توصيل محلي، لوحة تحكم عربية',
      en: 'E-commerce store on Shopify with Iraqi design, Zain Cash and Iraq card support, local delivery, Arabic dashboard'
    },
    keywords: [
      'متجر شوبيفاي عراق', 'Shopify Iraq', 'متجر الكتروني شوبيفاي',
      'تجارة الكترونية عراق', 'بيع اون لاين العراق'
    ],
    category: 'ecommerce'
  },
  {
    key: 'woocommerce-advanced',
    name: { ar: 'متجر ووكومرس متقدم', en: 'Advanced WooCommerce Store' },
    description: {
      ar: 'متجر WooCommerce متقدم مع إدارة مخزون، ربط شركات شحن، تقارير مبيعات، وكوبونات خصم',
      en: 'Advanced WooCommerce store with inventory management, shipping integration, sales reports, and discount coupons'
    },
    keywords: [
      'متجر ووكومرس عراق', 'WooCommerce Iraq', 'متجر وردبريس',
      'تجارة الكترونية ووردبريس', 'WooCommerce عربي'
    ],
    category: 'ecommerce'
  },
  {
    key: 'multi-vendor-marketplace',
    name: { ar: 'سوق إلكتروني متعدد البائعين', en: 'Multi-Vendor Marketplace' },
    description: {
      ar: 'منصة تجارية مثل سوق.كوم أو أمازون، يبيع فيها عدة بائعين منتجاتهم، مع لوحات تحكم منفصلة وعمولات',
      en: 'Commercial platform like Souq.com or Amazon, where multiple vendors sell their products, with separate dashboards and commissions'
    },
    keywords: [
      'سوق الكتروني عراق', 'multi-vendor Iraq', 'منصة بائعين متعددة',
      'marketplace عراق', 'سوق اون لاين العراق'
    ],
    category: 'ecommerce'
  },
  {
    key: 'dropshipping-store',
    name: { ar: 'متجر دروبشيبينغ', en: 'Dropshipping Store' },
    description: {
      ar: 'متجر دروبشيبينغ كامل مع ربط AliExpress/CJDropshipping، استيراد منتجات تلقائي، أسعار تلقائية بالدينار',
      en: 'Complete dropshipping store with AliExpress/CJDropshipping integration, automatic product import, automatic prices in dinar'
    },
    keywords: [
      'دروبشيبينغ عراق', 'dropshipping Iraq', 'بيع بدون مخزون',
      'متجر دروب شيبينغ', 'تجارة بلا مخزون'
    ],
    category: 'ecommerce'
  },
  {
    key: 'b2b-ecommerce',
    name: { ar: 'منصة تجارة B2B للجملة', en: 'B2B Wholesale E-commerce Platform' },
    description: {
      ar: 'منصة تجارة إلكترونية للجملة B2B بأسعار تدريجية، حدود ائتمان، طلبات كبيرة، فواتير متقدمة',
      en: 'B2B wholesale e-commerce platform with tiered pricing, credit limits, bulk orders, advanced invoicing'
    },
    keywords: [
      'B2B عراق', 'تجارة جملة الكترونية', 'منصة B2B Iraq',
      'بيع جملة اون لاين', 'تجار جملة الكتروني'
    ],
    category: 'ecommerce'
  },
  {
    key: 'auction-platform',
    name: { ar: 'منصة مزادات إلكترونية', en: 'Online Auction Platform' },
    description: {
      ar: 'موقع مزادات مباشرة أونلاين مع مزايدة حية، عد تنازلي، دفع آمن، إدارة مزايدين',
      en: 'Live online auction site with real-time bidding, countdown timer, secure payment, bidder management'
    },
    keywords: [
      'مزادات الكترونية عراق', 'auction Iraq', 'مزايدة اون لاين',
      'موقع مزادات', 'بيع بالمزاد اون لاين'
    ],
    category: 'ecommerce'
  },
  {
    key: 'rental-marketplace',
    name: { ar: 'منصة تأجير وإيجار', en: 'Rental Marketplace' },
    description: {
      ar: 'منصة لتأجير المنتجات (سيارات، معدات، عقارات، ملابس) مع تقويم حجوزات وإدارة مخزون',
      en: 'Platform for renting products (cars, equipment, real estate, clothes) with booking calendar and inventory management'
    },
    keywords: [
      'منصة تأجير عراق', 'rental marketplace Iraq', 'ايجار اون لاين',
      'تأجير سيارات اون لاين', 'حجز ايجارات'
    ],
    category: 'ecommerce'
  },
  {
    key: 'digital-products-store',
    name: { ar: 'متجر منتجات رقمية', en: 'Digital Products Store' },
    description: {
      ar: 'متجر لبيع المنتجات الرقمية (كتب، كورسات، قوالب، تطبيقات) مع تحميل فوري وحماية ضد القرصنة',
      en: 'Store for selling digital products (books, courses, templates, apps) with instant download and anti-piracy protection'
    },
    keywords: [
      'متجر منتجات رقمية عراق', 'digital products Iraq', 'بيع كورسات اون لاين',
      'بيع كتب الكترونية', 'متجر تطبيقات رقمية'
    ],
    category: 'ecommerce'
  },
  {
    key: 'grocery-delivery-app',
    name: { ar: 'تطبيق توصيل بقالة', en: 'Grocery Delivery App' },
    description: {
      ar: 'تطبيق توصيل مواد غذائية وبقالة مع تتبع طلبات، خرائط، دفع أونلاين، إدارة سائقين',
      en: 'Grocery delivery app with order tracking, maps, online payment, driver management'
    },
    keywords: [
      'تطبيق توصيل بقالة عراق', 'grocery delivery Iraq', 'توصيل مواد غذائية',
      'تطبيق بقالة اون لاين', 'طلب بقالة اون لاين'
    ],
    category: 'mobile'
  },
  {
    key: 'subscription-box',
    name: { ar: 'متجر اشتراكات شهرية', en: 'Subscription Box Store' },
    description: {
      ar: 'متجر لبيع صناديق اشتراكات شهرية (طعام، مكياج، ملابس) مع إدارة اشتراكات ودفع متكرر',
      en: 'Store for selling monthly subscription boxes (food, makeup, clothes) with subscription management and recurring payment'
    },
    keywords: [
      'اشتراكات شهرية عراق', 'subscription box Iraq', 'صندوق اشتراك',
      'متجر اشتراكات', 'دفع متكرر'
    ],
    category: 'ecommerce'
  },
  {
    key: 'print-on-demand',
    name: { ar: 'متجر طباعة حسب الطلب', en: 'Print-on-Demand Store' },
    description: {
      ar: 'متجر لبيع منتجات مخصصة (تيشيرتات، أكواب، جوالات) مع طباعة حسب الطلب، بدون مخزون',
      en: 'Store for selling custom products (t-shirts, mugs, phone cases) with print-on-demand, no inventory'
    },
    keywords: [
      'طباعة حسب الطلب عراق', 'print on demand Iraq', 'تيشيرتات مخصصة',
      'متجر طباعة', 'منتجات مخصصة'
    ],
    category: 'ecommerce'
  },
  {
    key: 'flash-sales-platform',
    name: { ar: 'منصة تخفيضات سريعة', en: 'Flash Sales Platform' },
    description: {
      ar: 'منصة عروض وتخفيضات محدودة المدة مع عد تنازلي، إشعارات فورية، مخزون محدود',
      en: 'Limited-time deals and flash sales platform with countdown timer, instant notifications, limited stock'
    },
    keywords: [
      'عروض سريعة عراق', 'flash sales Iraq', 'تخفيضات محدودة',
      'عروض محدودة الوقت', 'منصة تخفيضات'
    ],
    category: 'ecommerce'
  },
  {
    key: 'loyalty-rewards-system',
    name: { ar: 'نظام نقاط ومكافآت الولاء', en: 'Loyalty Points & Rewards System' },
    description: {
      ar: 'نظام نقاط ولاء متقدم، كوبونات، برنامج إحالة، مكافآت عملاء، تطبيق محفظة رقمية',
      en: 'Advanced loyalty points system, coupons, referral program, customer rewards, digital wallet app'
    },
    keywords: [
      'نظام نقاط عراق', 'loyalty program Iraq', 'مكافآت عملاء',
      'برنامج ولاء', 'نقاط ولاء الكتروني'
    ],
    category: 'ecommerce'
  },
  {
    key: 'invoice-pos-system',
    name: { ar: 'نظام فواتير ونقاط بيع', en: 'Invoicing & POS System' },
    description: {
      ar: 'نظام كاشير ونقاط بيع POS متكامل، طابعة فواتير، إدارة مخزون، تقارير يومية، دعم أوفلاين',
      en: 'Complete POS and cashier system, invoice printer, inventory management, daily reports, offline support'
    },
    keywords: [
      'نظام كاشير عراق', 'POS system Iraq', 'نقاط بيع',
      'نظام فواتير', 'كاشير الكتروني'
    ],
    category: 'ecommerce'
  },
  {
    key: 'affiliate-marketplace',
    name: { ar: 'منصة تسويق بالعمولة', en: 'Affiliate Marketplace' },
    description: {
      ar: 'منصة تسويق بالعمولة كاملة، تتبع مبيعات، روابط إحالة، عمولات تلقائية، لوحة مسوقين',
      en: 'Complete affiliate marketing platform, sales tracking, referral links, automatic commissions, marketer dashboard'
    },
    keywords: [
      'تسويق بالعمولة عراق', 'affiliate marketing Iraq', 'منصة عمولة',
      'روابط احالة', 'تتبع عمولات'
    ],
    category: 'ecommerce'
  },

  // === قسم الأتمتة (Automation) - 8 خدمات ===
  {
    key: 'workflow-automation',
    name: { ar: 'أتمتة سير العمل', en: 'Workflow Automation' },
    description: {
      ar: 'أتمتة كاملة لسير عمل شركتك: ربط التطبيقات، مهام تلقائية، موافقات إلكترونية، تنبيهات ذكية',
      en: 'Complete automation of your business workflow: app integration, automatic tasks, electronic approvals, smart alerts'
    },
    keywords: [
      'أتمتة سير عمل عراق', 'workflow automation Iraq', 'أتمتة عمليات',
      'ربط تطبيقات', 'موافقات الكترونية'
    ],
    category: 'automation'
  },
  {
    key: 'email-automation',
    name: { ar: 'أتمتة البريد الإلكتروني', en: 'Email Automation' },
    description: {
      ar: 'حملات بريد إلكتروني تلقائية، ترحيب عملاء جدد، متابعة، إعادة استهداف، تقارير معدلات فتح',
      en: 'Automatic email campaigns, welcome new customers, follow-up, retargeting, open rate reports'
    },
    keywords: [
      'ايميل ماركتنج عراق', 'email automation Iraq', 'حملات بريد الكتروني',
      'ايميل تلقائي', 'email marketing automation'
    ],
    category: 'automation'
  },
  {
    key: 'social-media-automation',
    name: { ar: 'أتمتة السوشال ميديا', en: 'Social Media Automation' },
    description: {
      ar: 'جدولة منشورات تلقائية، نشر متزامن على كل المنصات، ردود تلقائية، تحليل أداء منشورات',
      en: 'Automatic post scheduling, simultaneous posting on all platforms, automatic replies, post performance analysis'
    },
    keywords: [
      'جدولة منشورات عراق', 'social media automation Iraq', 'نشر تلقائي',
      'أتمتة انستغرام', 'ادارة سوشال ميديا'
    ],
    category: 'automation'
  },
  {
    key: 'zapier-integration',
    name: { ar: 'ربط زابير وأتمتة', en: 'Zapier Integration & Automation' },
    description: {
      ar: 'ربط أكثر من 5000 تطبيق مع Zapier: Google Sheets, WhatsApp, Gmail, Slack, وأكثر',
      en: 'Connect over 5000 apps with Zapier: Google Sheets, WhatsApp, Gmail, Slack, and more'
    },
    keywords: [
      'زابير عراق', 'Zapier Iraq', 'ربط تطبيقات',
      'Zapier integration', 'أتمتة تطبيقات'
    ],
    category: 'automation'
  },
  {
    key: 'make-n8n-automation',
    name: { ar: 'أتمتة Make وN8N', en: 'Make & N8N Automation' },
    description: {
      ar: 'أتمتة متقدمة باستخدام Make.com و N8N: workflows معقدة، API integrations، سيناريوهات مخصصة',
      en: 'Advanced automation using Make.com and N8N: complex workflows, API integrations, custom scenarios'
    },
    keywords: [
      'Make عراق', 'N8N Iraq', 'Integromat', 'أتمتة متقدمة',
      'workflow automation advanced'
    ],
    category: 'automation'
  },
  {
    key: 'crm-automation',
    name: { ar: 'أتمتة نظام CRM', en: 'CRM Automation' },
    description: {
      ar: 'نظام CRM ذكي مع أتمتة كاملة: تتبع عملاء، متابعة تلقائية، تذكيرات، خط مبيعات',
      en: 'Smart CRM system with complete automation: customer tracking, automatic follow-up, reminders, sales pipeline'
    },
    keywords: [
      'CRM عراق', 'CRM automation Iraq', 'نظام عملاء',
      'أتمتة CRM', 'ادارة علاقات عملاء'
    ],
    category: 'automation'
  },
  {
    key: 'inventory-automation',
    name: { ar: 'أتمتة إدارة المخزون', en: 'Inventory Management Automation' },
    description: {
      ar: 'إدارة مخزون ذكية: تنبيهات نفاذ كميات، طلبات تلقائية من موردين، تتبع RFID/Barcode',
      en: 'Smart inventory management: low stock alerts, automatic orders from suppliers, RFID/Barcode tracking'
    },
    keywords: [
      'ادارة مخزون عراق', 'inventory automation Iraq', 'نظام مخزون',
      'تتبع مخزون', 'باركود'
    ],
    category: 'automation'
  },
  {
    key: 'hr-automation',
    name: { ar: 'أتمتة الموارد البشرية', en: 'HR Automation' },
    description: {
      ar: 'نظام موارد بشرية متكامل: رواتب تلقائية، حضور وانصراف، إجازات، تقييم موظفين',
      en: 'Complete HR system: automatic payroll, attendance, leave management, employee evaluation'
    },
    keywords: [
      'نظام موارد بشرية عراق', 'HR automation Iraq', 'رواتب تلقائية',
      'حضور وانصراف', 'ادارة موظفين'
    ],
    category: 'automation'
  },

  // === قسم التطبيقات (Mobile Apps) - 10 خدمات ===
  {
    key: 'flutter-app',
    name: { ar: 'تطبيق فلاتر احترافي', en: 'Professional Flutter App' },
    description: {
      ar: 'تطبيق موبايل بتقنية Flutter لأندرويد و iOS معاً، سريع، أداء عالي، تصميم عصري',
      en: 'Mobile app with Flutter technology for Android and iOS together, fast, high performance, modern design'
    },
    keywords: [
      'تطبيق فلاتر عراق', 'Flutter app Iraq', 'تطبيق موبايل',
      'Flutter development', 'تطوير تطبيقات فلاتر'
    ],
    category: 'mobile'
  },
  {
    key: 'react-native-app',
    name: { ar: 'تطبيق رياكت نيتيف', en: 'React Native App' },
    description: {
      ar: 'تطبيق React Native لأندرويد و iOS، واجهات سلسة، أداء سريع، كود واحد للمنصتين',
      en: 'React Native app for Android and iOS, smooth interfaces, fast performance, single codebase for both platforms'
    },
    keywords: [
      'React Native عراق', 'تطبيق رياكت نيتيف', 'React Native Iraq',
      'تطوير تطبيقات موبايل', 'تطبيق اندرويد iOS'
    ],
    category: 'mobile'
  },
  {
    key: 'food-delivery-app',
    name: { ar: 'تطبيق توصيل طعام', en: 'Food Delivery App' },
    description: {
      ar: 'تطبيق توصيل طعام متكامل (مثل طلبات): عملاء، مطاعم، سائقين، تتبع مباشر، دفع أونلاين',
      en: 'Complete food delivery app (like Talabat): customers, restaurants, drivers, live tracking, online payment'
    },
    keywords: [
      'تطبيق توصيل طعام عراق', 'food delivery app Iraq', 'تطبيق طلبات',
      'توصيل مطاعم', 'تطبيق ديليفري'
    ],
    category: 'mobile'
  },
  {
    key: 'taxi-booking-app',
    name: { ar: 'تطبيق حجز تاكسي', en: 'Taxi Booking App' },
    description: {
      ar: 'تطبيق حجز تاكسي (مثل أوبر/كريم): سائقين، ركاب، تتبع GPS، تسعير ديناميكي، تقييمات',
      en: 'Taxi booking app (like Uber/Careem): drivers, passengers, GPS tracking, dynamic pricing, ratings'
    },
    keywords: [
      'تطبيق تاكسي عراق', 'taxi app Iraq', 'أوبر العراق',
      'كريم عراق', 'حجز تاكسي اون لاين'
    ],
    category: 'mobile'
  },
  {
    key: 'doctor-appointment-app',
    name: { ar: 'تطبيق حجز مواعيد أطباء', en: 'Doctor Appointment Booking App' },
    description: {
      ar: 'تطبيق حجز مواعيد طبية: دكاترة، مرضى، عيادات، مواعيد، تذكيرات، سجلات طبية',
      en: 'Medical appointment booking app: doctors, patients, clinics, appointments, reminders, medical records'
    },
    keywords: [
      'تطبيق حجز مواعيد طبية عراق', 'doctor appointment Iraq', 'تطبيق عيادات',
      'حجز دكتور اون لاين', 'تطبيق صحي'
    ],
    category: 'mobile'
  },
  {
    key: 'fitness-workout-app',
    name: { ar: 'تطبيق رياضة ولياقة', en: 'Fitness & Workout App' },
    description: {
      ar: 'تطبيق لياقة بدنية: خطط تمارين، فيديوهات، تتبع سعرات، برامج تغذية، تحديات',
      en: 'Fitness app: workout plans, videos, calorie tracking, nutrition programs, challenges'
    },
    keywords: [
      'تطبيق رياضة عراق', 'fitness app Iraq', 'تطبيق لياقة',
      'workout app', 'تمارين منزلية'
    ],
    category: 'mobile'
  },
  {
    key: 'real-estate-app',
    name: { ar: 'تطبيق عقارات', en: 'Real Estate App' },
    description: {
      ar: 'تطبيق عقارات: بيع، شراء، إيجار، خرائط، بحث متقدم، جولات افتراضية، وكلاء',
      en: 'Real estate app: buy, sell, rent, maps, advanced search, virtual tours, agents'
    },
    keywords: [
      'تطبيق عقارات عراق', 'real estate app Iraq', 'عقارات اون لاين',
      'بيع عقارات', 'ايجار شقق'
    ],
    category: 'mobile'
  },
  {
    key: 'job-portal-app',
    name: { ar: 'تطبيق وظائف', en: 'Job Portal App' },
    description: {
      ar: 'تطبيق بحث عن وظائف: إعلانات وظائف، سير ذاتية، تقديم طلبات، تنبيهات فرص',
      en: 'Job search app: job postings, CVs, applications, opportunity alerts'
    },
    keywords: [
      'تطبيق وظائف عراق', 'job app Iraq', 'بحث عن عمل',
      'فرص عمل', 'وظائف العراق'
    ],
    category: 'mobile'
  },
  {
    key: 'elearning-app',
    name: { ar: 'تطبيق تعليم إلكتروني', en: 'E-Learning App' },
    description: {
      ar: 'منصة تعليم إلكتروني: كورسات، فيديوهات، اختبارات، شهادات، بث مباشر، واجبات',
      en: 'E-learning platform: courses, videos, quizzes, certificates, live streaming, assignments'
    },
    keywords: [
      'تطبيق تعليم الكتروني عراق', 'elearning app Iraq', 'كورسات اون لاين',
      'منصة تعليمية', 'دورات الكترونية'
    ],
    category: 'mobile'
  },
  {
    key: 'event-booking-app',
    name: { ar: 'تطبيق حجز فعاليات', en: 'Event Booking App' },
    description: {
      ar: 'تطبيق حجز تذاكر فعاليات: حفلات، مؤتمرات، ورش عمل، مهرجانات، QR code، دفع آمن',
      en: 'Event ticket booking app: concerts, conferences, workshops, festivals, QR code, secure payment'
    },
    keywords: [
      'تطبيق حجز فعاليات عراق', 'event booking Iraq', 'حجز تذاكر',
      'فعاليات عراق', 'حفلات اون لاين'
    ],
    category: 'mobile'
  },

  // === قسم التسويق الرقمي (Digital Marketing) - 12 خدمة ===
  {
    key: 'google-ads-management',
    name: { ar: 'إدارة إعلانات جوجل', en: 'Google Ads Management' },
    description: {
      ar: 'إدارة احترافية لحملات Google Ads: بحث، شبكة العرض، يوتيوب، Shopping، تحسين ROI',
      en: 'Professional Google Ads campaign management: Search, Display, YouTube, Shopping, ROI optimization'
    },
    keywords: [
      'اعلانات جوجل عراق', 'Google Ads Iraq', 'ادارة اعلانات جوجل',
      'Google Adwords', 'اعلانات بحث جوجل'
    ],
    category: 'marketing'
  },
  {
    key: 'facebook-ads-management',
    name: { ar: 'إدارة إعلانات فيسبوك', en: 'Facebook Ads Management' },
    description: {
      ar: 'حملات فيسبوك وإنستغرام إعلانية احترافية: استهداف دقيق، تصاميم جذابة، تحليلات متقدمة',
      en: 'Professional Facebook and Instagram ad campaigns: precise targeting, attractive designs, advanced analytics'
    },
    keywords: [
      'اعلانات فيسبوك عراق', 'Facebook Ads Iraq', 'اعلانات انستغرام',
      'ممول فيسبوك', 'Facebook marketing'
    ],
    category: 'marketing'
  },
  {
    key: 'instagram-marketing',
    name: { ar: 'تسويق انستغرام متقدم', en: 'Advanced Instagram Marketing' },
    description: {
      ar: 'تسويق شامل على انستغرام: محتوى، ستوري، ريلز، إعلانات، زيادة متابعين حقيقيين',
      en: 'Comprehensive Instagram marketing: content, stories, reels, ads, real follower growth'
    },
    keywords: [
      'تسويق انستغرام عراق', 'Instagram marketing Iraq', 'زيادة متابعين',
      'انستغرام بزنس', 'Instagram growth'
    ],
    category: 'marketing'
  },
  {
    key: 'tiktok-marketing',
    name: { ar: 'تسويق تيك توك', en: 'TikTok Marketing' },
    description: {
      ar: 'تسويق عبر تيك توك: إنشاء محتوى ڤيرال، إعلانات، تعاون مع مؤثرين، ترندات',
      en: 'TikTok marketing: create viral content, ads, influencer collaborations, trends'
    },
    keywords: [
      'تسويق تيك توك عراق', 'TikTok marketing Iraq', 'تيك توك بزنس',
      'اعلانات تيك توك', 'TikTok ads'
    ],
    category: 'marketing'
  },
  {
    key: 'youtube-marketing',
    name: { ar: 'تسويق يوتيوب', en: 'YouTube Marketing' },
    description: {
      ar: 'تسويق عبر يوتيوب: تحسين قناة، فيديوهات SEO، إعلانات يوتيوب، زيادة مشاهدات ومشتركين',
      en: 'YouTube marketing: channel optimization, video SEO, YouTube ads, increase views and subscribers'
    },
    keywords: [
      'تسويق يوتيوب عراق', 'YouTube marketing Iraq', 'اعلانات يوتيوب',
      'تحسين قناة يوتيوب', 'YouTube SEO'
    ],
    category: 'marketing'
  },
  {
    key: 'influencer-marketing',
    name: { ar: 'تسويق بالمؤثرين', en: 'Influencer Marketing' },
    description: {
      ar: 'حملات تسويق مع مؤثرين عراقيين: اختيار مؤثر مناسب، تفاوض، إدارة حملة، تقارير نتائج',
      en: 'Marketing campaigns with Iraqi influencers: select suitable influencer, negotiation, campaign management, results reports'
    },
    keywords: [
      'تسويق بالمؤثرين عراق', 'influencer marketing Iraq', 'مؤثرين عراقيين',
      'تعاون مع مشاهير', 'influencer campaigns'
    ],
    category: 'marketing'
  },
  {
    key: 'email-marketing-campaigns',
    name: { ar: 'حملات تسويق بالبريد الإلكتروني', en: 'Email Marketing Campaigns' },
    description: {
      ar: 'حملات ايميل ماركتنج احترافية: تصاميم جذابة، قوائم بريدية، A/B testing، تحليل أداء',
      en: 'Professional email marketing campaigns: attractive designs, email lists, A/B testing, performance analysis'
    },
    keywords: [
      'ايميل ماركتنج عراق', 'email marketing Iraq', 'حملات بريد الكتروني',
      'قوائم بريدية', 'newsletter marketing'
    ],
    category: 'marketing'
  },
  {
    key: 'content-marketing',
    name: { ar: 'تسويق بالمحتوى', en: 'Content Marketing' },
    description: {
      ar: 'استراتيجية محتوى متكاملة: مدونات، مقالات، إنفوجرافيك، فيديوهات، كتب إلكترونية',
      en: 'Complete content strategy: blogs, articles, infographics, videos, ebooks'
    },
    keywords: [
      'تسويق بالمحتوى عراق', 'content marketing Iraq', 'كتابة محتوى تسويقي',
      'استراتيجية محتوى', 'content strategy'
    ],
    category: 'marketing'
  },
  {
    key: 'affiliate-marketing-setup',
    name: { ar: 'إعداد برنامج تسويق بالعمولة', en: 'Affiliate Marketing Program Setup' },
    description: {
      ar: 'إطلاق برنامج تسويق بالعمولة كامل: تجنيد مسوقين، تتبع، عمولات، أدوات ترويجية',
      en: 'Launch complete affiliate marketing program: recruit marketers, tracking, commissions, promotional tools'
    },
    keywords: [
      'برنامج عمولة عراق', 'affiliate program Iraq', 'تسويق بالعمولة',
      'مسوقين بالعمولة', 'affiliate network'
    ],
    category: 'marketing'
  },
  {
    key: 'whatsapp-marketing',
    name: { ar: 'تسويق واتساب احترافي', en: 'Professional WhatsApp Marketing' },
    description: {
      ar: 'تسويق عبر واتساب: قوائم بث، رسائل جماعية، WhatsApp Business API، أتمتة رسائل',
      en: 'WhatsApp marketing: broadcast lists, bulk messages, WhatsApp Business API, message automation'
    },
    keywords: [
      'تسويق واتساب عراق', 'WhatsApp marketing Iraq', 'رسائل جماعية واتساب',
      'WhatsApp Business', 'واتساب بزنس'
    ],
    category: 'marketing'
  },
  {
    key: 'sms-marketing',
    name: { ar: 'تسويق برسائل SMS', en: 'SMS Marketing' },
    description: {
      ar: 'حملات تسويق عبر الرسائل النصية: رسائل جماعية، تنبيهات، عروض، كوبونات خصم',
      en: 'SMS marketing campaigns: bulk messages, alerts, offers, discount coupons'
    },
    keywords: [
      'تسويق SMS عراق', 'SMS marketing Iraq', 'رسائل جماعية',
      'رسائل نصية تسويقية', 'bulk SMS'
    ],
    category: 'marketing'
  },
  {
    key: 'reputation-management',
    name: { ar: 'إدارة السمعة الإلكترونية', en: 'Online Reputation Management' },
    description: {
      ar: 'إدارة سمعتك أونلاين: مراقبة تعليقات، رد على مراجعات، تحسين تقييمات جوجل وفيسبوك',
      en: 'Manage your online reputation: monitor comments, respond to reviews, improve Google and Facebook ratings'
    },
    keywords: [
      'ادارة سمعة عراق', 'reputation management Iraq', 'مراقبة تقييمات',
      'تحسين تقييمات جوجل', 'online reputation'
    ],
    category: 'marketing'
  },

  // === قسم الأمن السيبراني (Cybersecurity) - 10 خدمات ===
  {
    key: 'security-audit',
    name: { ar: 'تدقيق أمني شامل', en: 'Comprehensive Security Audit' },
    description: {
      ar: 'فحص أمني كامل لموقعك/تطبيقك: كشف ثغرات، اختبار اختراق، تقرير مفصل، توصيات',
      en: 'Complete security audit for your website/app: vulnerability detection, penetration testing, detailed report, recommendations'
    },
    keywords: [
      'تدقيق امني عراق', 'security audit Iraq', 'فحص امني موقع',
      'كشف ثغرات', 'penetration testing'
    ],
    category: 'security'
  },
  {
    key: 'penetration-testing',
    name: { ar: 'اختبار اختراق احترافي', en: 'Professional Penetration Testing' },
    description: {
      ar: 'محاكاة هجوم هاكر لاكتشاف نقاط الضعف قبل المخترقين الحقيقيين، تقرير شامل بالثغرات',
      en: 'Simulate hacker attack to discover weaknesses before real hackers, comprehensive vulnerability report'
    },
    keywords: [
      'اختبار اختراق عراق', 'penetration testing Iraq', 'ethical hacking',
      'كشف ثغرات امنية', 'security testing'
    ],
    category: 'security'
  },
  {
    key: 'ssl-certificate',
    name: { ar: 'شهادة SSL وتأمين الموقع', en: 'SSL Certificate & Website Security' },
    description: {
      ar: 'تركيب شهادة SSL، تشفير HTTPS، تأمين اتصال موقعك، ثقة عملاء، تحسين SEO',
      en: 'Install SSL certificate, HTTPS encryption, secure your website connection, customer trust, improve SEO'
    },
    keywords: [
      'شهادة SSL عراق', 'SSL certificate Iraq', 'HTTPS',
      'تأمين موقع', 'website security'
    ],
    category: 'security'
  },
  {
    key: 'firewall-setup',
    name: { ar: 'إعداد جدار حماية', en: 'Firewall Setup' },
    description: {
      ar: 'جدار حماية متقدم WAF لحماية موقعك من هجمات DDoS، SQL Injection، XSS، Bots',
      en: 'Advanced WAF firewall to protect your site from DDoS attacks, SQL Injection, XSS, Bots'
    },
    keywords: [
      'جدار حماية عراق', 'firewall Iraq', 'WAF', 'حماية من DDoS',
      'Web Application Firewall'
    ],
    category: 'security'
  },
  {
    key: 'ddos-protection',
    name: { ar: 'حماية من هجمات DDoS', en: 'DDoS Protection' },
    description: {
      ar: 'حماية متقدمة ضد هجمات DDoS، Cloudflare، CDN، تصفية حركة المرور الضارة',
      en: 'Advanced protection against DDoS attacks, Cloudflare, CDN, malicious traffic filtering'
    },
    keywords: [
      'حماية DDoS عراق', 'DDoS protection Iraq', 'Cloudflare',
      'حماية من هجمات', 'DDoS mitigation'
    ],
    category: 'security'
  },
  {
    key: 'malware-removal',
    name: { ar: 'إزالة برمجيات خبيثة', en: 'Malware Removal' },
    description: {
      ar: 'تنظيف موقعك من الفيروسات والبرمجيات الخبيثة، استعادة موقع مخترق، حماية مستقبلية',
      en: 'Clean your site from viruses and malware, recover hacked site, future protection'
    },
    keywords: [
      'ازالة فيروسات عراق', 'malware removal Iraq', 'تنظيف موقع مخترق',
      'استعادة موقع', 'virus cleaning'
    ],
    category: 'security'
  },
  {
    key: 'data-encryption',
    name: { ar: 'تشفير البيانات', en: 'Data Encryption' },
    description: {
      ar: 'تشفير قواعد بيانات، تشفير ملفات، تشفير اتصالات، حماية معلومات حساسة',
      en: 'Database encryption, file encryption, connection encryption, protect sensitive information'
    },
    keywords: [
      'تشفير بيانات عراق', 'data encryption Iraq', 'تشفير قاعدة بيانات',
      'حماية بيانات', 'encryption services'
    ],
    category: 'security'
  },
  {
    key: 'backup-recovery',
    name: { ar: 'نسخ احتياطي واستعادة', en: 'Backup & Recovery' },
    description: {
      ar: 'نسخ احتياطي تلقائي يومي، تخزين سحابي آمن، استعادة سريعة، disaster recovery',
      en: 'Automatic daily backup, secure cloud storage, fast recovery, disaster recovery'
    },
    keywords: [
      'نسخ احتياطي عراق', 'backup Iraq', 'استعادة بيانات',
      'cloud backup', 'disaster recovery'
    ],
    category: 'security'
  },
  {
    key: 'two-factor-authentication',
    name: { ar: 'مصادقة ثنائية 2FA', en: 'Two-Factor Authentication 2FA' },
    description: {
      ar: 'إضافة طبقة أمان إضافية بمصادقة ثنائية: SMS، Google Authenticator، بريد إلكتروني',
      en: 'Add extra security layer with two-factor authentication: SMS, Google Authenticator, email'
    },
    keywords: [
      'مصادقة ثنائية عراق', '2FA Iraq', 'Two-Factor Authentication',
      'Google Authenticator', 'امان اضافي'
    ],
    category: 'security'
  },
  {
    key: 'gdpr-compliance',
    name: { ar: 'توافق مع GDPR وخصوصية البيانات', en: 'GDPR Compliance & Data Privacy' },
    description: {
      ar: 'جعل موقعك متوافق مع قوانين GDPR، سياسة خصوصية، cookie consent، حماية بيانات مستخدمين',
      en: 'Make your site GDPR compliant, privacy policy, cookie consent, user data protection'
    },
    keywords: [
      'GDPR عراق', 'data privacy Iraq', 'خصوصية بيانات',
      'سياسة خصوصية', 'cookie consent'
    ],
    category: 'security'
  },

  // === قسم التقنيات المتقدمة (Advanced Tech) - 8 خدمات ===
  {
    key: 'blockchain-development',
    name: { ar: 'تطوير بلوكتشين', en: 'Blockchain Development' },
    description: {
      ar: 'تطوير تطبيقات blockchain: عقود ذكية، DApps، نظام مدفوعات عملات رقمية، NFT',
      en: 'Develop blockchain applications: smart contracts, DApps, cryptocurrency payment system, NFT'
    },
    keywords: [
      'بلوكتشين عراق', 'blockchain Iraq', 'عقود ذكية',
      'عملات رقمية', 'DApps'
    ],
    category: 'advanced'
  },
  {
    key: 'smart-contracts',
    name: { ar: 'عقود ذكية Smart Contracts', en: 'Smart Contracts Development' },
    description: {
      ar: 'تطوير عقود ذكية على Ethereum, BSC, Polygon: أتمتة عقود، معاملات آمنة، DeFi',
      en: 'Develop smart contracts on Ethereum, BSC, Polygon: automate contracts, secure transactions, DeFi'
    },
    keywords: [
      'عقود ذكية عراق', 'smart contracts Iraq', 'Ethereum',
      'Solidity', 'DeFi'
    ],
    category: 'advanced'
  },
  {
    key: 'nft-marketplace',
    name: { ar: 'منصة NFT', en: 'NFT Marketplace' },
    description: {
      ar: 'بناء منصة NFT: سك NFTs، بيع وشراء، محفظة رقمية، رسوم عمولة، OpenSea integration',
      en: 'Build NFT platform: mint NFTs, buy and sell, digital wallet, commission fees, OpenSea integration'
    },
    keywords: [
      'منصة NFT عراق', 'NFT marketplace Iraq', 'سك NFT',
      'فن رقمي', 'NFT trading'
    ],
    category: 'advanced'
  },
  {
    key: 'defi-platform',
    name: { ar: 'منصة DeFi تمويل لامركزي', en: 'DeFi Platform' },
    description: {
      ar: 'منصة تمويل لامركزي DeFi: staking, yield farming, liquidity pools, DEX',
      en: 'Decentralized Finance DeFi platform: staking, yield farming, liquidity pools, DEX'
    },
    keywords: [
      'DeFi عراق', 'تمويل لامركزي Iraq', 'staking',
      'yield farming', 'DEX'
    ],
    category: 'advanced'
  },
  {
    key: 'metaverse-development',
    name: { ar: 'تطوير ميتافيرس', en: 'Metaverse Development' },
    description: {
      ar: 'بناء عوالم افتراضية وميتافيرس: VR، AR، 3D worlds، avatars، virtual events',
      en: 'Build virtual worlds and metaverse: VR, AR, 3D worlds, avatars, virtual events'
    },
    keywords: [
      'ميتافيرس عراق', 'metaverse Iraq', 'VR', 'AR',
      'عوالم افتراضية'
    ],
    category: 'advanced'
  },
  {
    key: 'ar-vr-apps',
    name: { ar: 'تطبيقات الواقع المعزز والافتراضي', en: 'AR/VR Applications' },
    description: {
      ar: 'تطوير تطبيقات AR و VR: تجارب تفاعلية، واقع معزز للمنتجات، جولات افتراضية',
      en: 'Develop AR and VR apps: interactive experiences, product augmented reality, virtual tours'
    },
    keywords: [
      'واقع معزز عراق', 'AR VR Iraq', 'Augmented Reality',
      'Virtual Reality', 'تطبيقات AR'
    ],
    category: 'advanced'
  },
  {
    key: 'iot-solutions',
    name: { ar: 'حلول إنترنت الأشياء IoT', en: 'IoT Solutions' },
    description: {
      ar: 'أنظمة إنترنت الأشياء: أجهزة ذكية، مراقبة عن بعد، تحكم تلقائي، استشعار بيانات',
      en: 'Internet of Things systems: smart devices, remote monitoring, automatic control, data sensing'
    },
    keywords: [
      'IoT عراق', 'انترنت الأشياء Iraq', 'أجهزة ذكية',
      'مراقبة عن بعد', 'smart devices'
    ],
    category: 'advanced'
  },
  {
    key: 'cloud-migration',
    name: { ar: 'نقل إلى السحابة Cloud', en: 'Cloud Migration' },
    description: {
      ar: 'نقل بنيتك التحتية إلى السحابة: AWS، Google Cloud، Azure، تحسين أداء، توفير تكاليف',
      en: 'Migrate your infrastructure to cloud: AWS, Google Cloud, Azure, improve performance, cost savings'
    },
    keywords: [
      'نقل سحابة عراق', 'cloud migration Iraq', 'AWS',
      'Google Cloud', 'Azure'
    ],
    category: 'cloud'
  }
];
