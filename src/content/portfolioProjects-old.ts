/**
 * Portfolio Projects - Fake but realistic project examples for credibility
 * Each service has 3-5 example projects with statistics and results
 */

export type PortfolioProject = {
  id: string;
  serviceKey: string;
  title: { ar: string; en: string };
  client: { ar: string; en: string };
  industry: { ar: string; en: string };
  city: string;
  description: { ar: string; en: string };
  challenge: { ar: string; en: string };
  solution: { ar: string; en: string };
  results: {
    metric: { ar: string; en: string };
    value: string;
    icon?: string;
  }[];
  technologies: string[];
  duration: { ar: string; en: string };
  year: number;
  image?: string;
  testimonial?: {
    text: { ar: string; en: string };
    author: { ar: string; en: string };
    position: { ar: string; en: string };
  };
};

export const portfolioProjects: PortfolioProject[] = [
  // WhatsApp Business Bot Projects
  {
    id: 'whatsapp-bot-restaurant-baghdad',
    serviceKey: 'whatsapp-business-bot',
    title: {
      ar: 'بوت واتساب ذكي لمطعم الزعفران',
      en: 'Smart WhatsApp Bot for Al-Zaafaran Restaurant',
    },
    client: { ar: 'مطعم الزعفران', en: 'Al-Zaafaran Restaurant' },
    industry: { ar: 'المطاعم', en: 'Restaurants' },
    city: 'Baghdad',
    description: {
      ar: 'بوت واتساب ذكي يستقبل الطلبات ويجيب على الأسئلة الشائعة ويعرض المنيو ويرسل إشعارات للطلبات',
      en: 'Smart WhatsApp bot that receives orders, answers FAQs, displays menu, and sends order notifications',
    },
    challenge: {
      ar: 'كان المطعم يستقبل أكثر من 200 رسالة يومياً على الواتساب ويضطر الموظفون للرد على نفس الأسئلة المتكررة، مما أدى إلى فقدان العديد من الطلبات',
      en: 'The restaurant received over 200 WhatsApp messages daily, and staff had to answer repetitive questions, resulting in many lost orders',
    },
    solution: {
      ar: 'طورنا بوت واتساب بالذكاء الاصطناعي GPT-4 يرد تلقائياً على الأسئلة، يعرض المنيو التفاعلي، يستقبل الطلبات، ويرسل إشعارات فورية للمطبخ',
      en: 'We developed an AI-powered WhatsApp bot with GPT-4 that automatically answers questions, displays interactive menu, receives orders, and sends instant notifications to the kitchen',
    },
    results: [
      {
        metric: { ar: 'زيادة الطلبات', en: 'Orders Increase' },
        value: '320%',
        icon: '📈',
      },
      {
        metric: { ar: 'توفير وقت الموظفين', en: 'Staff Time Saved' },
        value: '15 ساعة/يومياً',
        icon: '⏱️',
      },
      {
        metric: { ar: 'رضا العملاء', en: 'Customer Satisfaction' },
        value: '95%',
        icon: '⭐',
      },
      {
        metric: { ar: 'متوسط وقت الرد', en: 'Avg Response Time' },
        value: '< 3 ثواني',
        icon: '⚡',
      },
    ],
    technologies: ['Node.js', 'TypeScript', 'WhatsApp Business API', 'OpenAI GPT-4', 'MongoDB', 'Redis'],
    duration: { ar: '6 أسابيع', en: '6 weeks' },
    year: 2024,
    testimonial: {
      text: {
        ar: 'البوت غيّر طريقة عمل مطعمنا بالكامل! الآن نستقبل طلبات أكثر بـ3 أضعاف ونوفر وقت فريق العمل للتركيز على جودة الطعام',
        en: 'The bot completely transformed how our restaurant operates! Now we receive 3x more orders and save staff time to focus on food quality',
      },
      author: { ar: 'أحمد العزاوي', en: 'Ahmed Al-Azzawi' },
      position: { ar: 'مدير مطعم الزعفران', en: 'Manager of Al-Zaafaran Restaurant' },
    },
  },
  {
    id: 'whatsapp-bot-clinic-basra',
    serviceKey: 'whatsapp-business-bot',
    title: {
      ar: 'بوت واتساب لعيادة النور الطبية',
      en: 'WhatsApp Bot for Al-Noor Medical Clinic',
    },
    client: { ar: 'عيادة النور الطبية', en: 'Al-Noor Medical Clinic' },
    industry: { ar: 'العيادات الطبية', en: 'Medical Clinics' },
    city: 'Basra',
    description: {
      ar: 'نظام حجز مواعيد تلقائي عبر الواتساب مع تذكير بالمواعيد وإرسال النتائج الطبية',
      en: 'Automated appointment booking system via WhatsApp with reminders and medical results delivery',
    },
    challenge: {
      ar: 'كانت العيادة تواجه فوضى في إدارة المواعيد وكثرة الاتصالات الهاتفية مما أثر على جودة الخدمة',
      en: 'The clinic faced chaos in appointment management and excessive phone calls, affecting service quality',
    },
    solution: {
      ar: 'طورنا بوت واتساب متكامل مع نظام إدارة العيادة يسمح للمرضى بحجز المواعيد، استلام تذكيرات، والحصول على نتائجهم الطبية بشكل آمن',
      en: 'We developed a WhatsApp bot integrated with clinic management system allowing patients to book appointments, receive reminders, and get medical results securely',
    },
    results: [
      {
        metric: { ar: 'تقليل الاتصالات الهاتفية', en: 'Reduced Phone Calls' },
        value: '85%',
        icon: '📞',
      },
      {
        metric: { ar: 'دقة المواعيد', en: 'Appointment Accuracy' },
        value: '98%',
        icon: '✅',
      },
      {
        metric: { ar: 'رضا المرضى', en: 'Patient Satisfaction' },
        value: '92%',
        icon: '😊',
      },
      {
        metric: { ar: 'حجوزات يومية', en: 'Daily Bookings' },
        value: '+250%',
        icon: '📅',
      },
    ],
    technologies: ['Node.js', 'WhatsApp API', 'PostgreSQL', 'Redis', 'JWT Auth', 'SMS Gateway'],
    duration: { ar: '8 أسابيع', en: '8 weeks' },
    year: 2024,
  },
  {
    id: 'whatsapp-bot-shop-najaf',
    serviceKey: 'whatsapp-business-bot',
    title: {
      ar: 'بوت واتساب لمتجر الأناقة للملابس',
      en: 'WhatsApp Bot for Elegance Clothing Store',
    },
    client: { ar: 'متجر الأناقة للملابس', en: 'Elegance Clothing Store' },
    industry: { ar: 'متاجر الملابس', en: 'Clothing Stores' },
    city: 'Najaf',
    description: {
      ar: 'بوت تسويقي ذكي يرسل العروض الجديدة ويستقبل الطلبات ويتتبع الشحنات',
      en: 'Smart marketing bot that sends new offers, receives orders, and tracks shipments',
    },
    challenge: {
      ar: 'صعوبة التواصل مع العملاء وإعلامهم بالعروض الجديدة وتتبع الطلبات بشكل فعال',
      en: 'Difficulty communicating with customers, notifying them of new offers, and tracking orders effectively',
    },
    solution: {
      ar: 'بوت واتساب ذكي مع كتالوج تفاعلي للمنتجات، نظام إرسال العروض التلقائي، وتتبع الشحنات لحظياً',
      en: 'Smart WhatsApp bot with interactive product catalog, automated offer delivery, and real-time shipment tracking',
    },
    results: [
      {
        metric: { ar: 'زيادة المبيعات', en: 'Sales Increase' },
        value: '280%',
        icon: '💰',
      },
      {
        metric: { ar: 'معدل فتح الرسائل', en: 'Message Open Rate' },
        value: '89%',
        icon: '📨',
      },
      {
        metric: { ar: 'عملاء جدد', en: 'New Customers' },
        value: '+450',
        icon: '👥',
      },
      {
        metric: { ar: 'تقليل الاستفسارات', en: 'Reduced Inquiries' },
        value: '70%',
        icon: '📊',
      },
    ],
    technologies: ['Node.js', 'WhatsApp Business API', 'MongoDB', 'AWS S3', 'Stripe'],
    duration: { ar: '5 أسابيع', en: '5 weeks' },
    year: 2024,
  },

  // Instagram Automation Bot Projects
  {
    id: 'instagram-bot-beauty-baghdad',
    serviceKey: 'instagram-automation-bot',
    title: {
      ar: 'بوت Instagram لصالون ملكة الجمال',
      en: 'Instagram Bot for Queen Beauty Salon',
    },
    client: { ar: 'صالون ملكة الجمال', en: 'Queen Beauty Salon' },
    industry: { ar: 'صالونات التجميل', en: 'Beauty Salons' },
    city: 'Baghdad',
    description: {
      ar: 'أتمتة كاملة لحساب Instagram مع ردود تلقائية وجدولة منشورات ومتابعة ذكية',
      en: 'Complete Instagram automation with auto-replies, post scheduling, and smart following',
    },
    challenge: {
      ar: 'كان الصالون يحتاج إلى 3 ساعات يومياً لإدارة حساب Instagram والرد على الرسائل ونشر المحتوى',
      en: 'The salon needed 3 hours daily to manage Instagram account, reply to messages, and post content',
    },
    solution: {
      ar: 'طورنا بوت أتمتة متكامل يرد على الرسائل تلقائياً، يجدول المنشورات، يتابع الحسابات المستهدفة، ويحلل الأداء',
      en: 'We developed a complete automation bot that auto-replies to messages, schedules posts, follows targeted accounts, and analyzes performance',
    },
    results: [
      {
        metric: { ar: 'نمو المتابعين', en: 'Follower Growth' },
        value: '+12,500',
        icon: '👥',
      },
      {
        metric: { ar: 'زيادة التفاعل', en: 'Engagement Increase' },
        value: '450%',
        icon: '❤️',
      },
      {
        metric: { ar: 'حجوزات عبر Instagram', en: 'Bookings via Instagram' },
        value: '+380%',
        icon: '📅',
      },
      {
        metric: { ar: 'توفير الوقت', en: 'Time Saved' },
        value: '20 ساعة/أسبوع',
        icon: '⏰',
      },
    ],
    technologies: ['Python', 'Instagram Graph API', 'FastAPI', 'PostgreSQL', 'Redis', 'OpenAI GPT'],
    duration: { ar: '4 أسابيع', en: '4 weeks' },
    year: 2024,
  },
  {
    id: 'instagram-bot-gym-erbil',
    serviceKey: 'instagram-automation-bot',
    title: {
      ar: 'بوت Instagram لنادي الأبطال الرياضي',
      en: 'Instagram Bot for Champions Gym',
    },
    client: { ar: 'نادي الأبطال الرياضي', en: 'Champions Gym' },
    industry: { ar: 'النوادي الرياضية', en: 'Gyms' },
    city: 'Erbil',
    description: {
      ar: 'بوت أتمتة للنادي الرياضي يجذب أعضاء جدد ويرد على الاستفسارات ويعرض العروض',
      en: 'Gym automation bot that attracts new members, answers inquiries, and displays offers',
    },
    challenge: {
      ar: 'صعوبة جذب أعضاء جدد والتواصل معهم بشكل فعال عبر Instagram',
      en: 'Difficulty attracting new members and communicating with them effectively via Instagram',
    },
    solution: {
      ar: 'بوت Instagram ذكي يتفاعل مع المهتمين بالرياضة، يرد على الأسئلة، يرسل العروض، ويحلل المنافسين',
      en: 'Smart Instagram bot that engages fitness enthusiasts, answers questions, sends offers, and analyzes competitors',
    },
    results: [
      {
        metric: { ar: 'أعضاء جدد', en: 'New Members' },
        value: '+850',
        icon: '🏋️',
      },
      {
        metric: { ar: 'نمو المتابعين', en: 'Follower Growth' },
        value: '+18,000',
        icon: '📈',
      },
      {
        metric: { ar: 'معدل التحويل', en: 'Conversion Rate' },
        value: '12.5%',
        icon: '✅',
      },
      {
        metric: { ar: 'عائد الاستثمار', en: 'ROI' },
        value: '680%',
        icon: '💰',
      },
    ],
    technologies: ['Python', 'Instagram API', 'Computer Vision', 'MongoDB', 'FastAPI'],
    duration: { ar: '6 أسابيع', en: '6 weeks' },
    year: 2024,
  },

  // Next.js Solutions Projects
  {
    id: 'nextjs-software-company-baghdad',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'موقع Next.js لشركة التقنيات المتقدمة',
      en: 'Next.js Website for Advanced Technologies Company',
    },
    client: { ar: 'شركة التقنيات المتقدمة', en: 'Advanced Technologies Company' },
    industry: { ar: 'شركات البرمجيات', en: 'Software Companies' },
    city: 'Baghdad',
    description: {
      ar: 'موقع مؤسساتي احترافي بـNext.js 15 مع لوحة تحكم إدارية ونظام إدارة محتوى',
      en: 'Professional corporate website with Next.js 15, admin dashboard, and content management system',
    },
    challenge: {
      ar: 'كان موقعهم القديم بطيئاً ولا يظهر في نتائج البحث وصعب التحديث',
      en: 'Their old website was slow, invisible in search results, and difficult to update',
    },
    solution: {
      ar: 'طورنا موقع Next.js 15 سريع مع Technical SEO متقدم، لوحة تحكم CMS، وتحسين Core Web Vitals',
      en: 'We developed a fast Next.js 15 website with advanced Technical SEO, CMS dashboard, and Core Web Vitals optimization',
    },
    results: [
      {
        metric: { ar: 'سرعة التحميل', en: 'Load Speed' },
        value: '0.8 ثانية',
        icon: '⚡',
      },
      {
        metric: { ar: 'زيارات من Google', en: 'Google Traffic' },
        value: '+520%',
        icon: '🔍',
      },
      {
        metric: { ar: 'معدل التحويل', en: 'Conversion Rate' },
        value: '18%',
        icon: '📊',
      },
      {
        metric: { ar: 'Core Web Vitals', en: 'Core Web Vitals' },
        value: '98/100',
        icon: '✅',
      },
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Vercel', 'Tailwind CSS'],
    duration: { ar: '10 أسابيع', en: '10 weeks' },
    year: 2024,
    testimonial: {
      text: {
        ar: 'موقعنا الجديد سريع جداً ويظهر في الصفحة الأولى بـGoogle! استفساراتنا زادت بشكل كبير',
        en: 'Our new website is extremely fast and appears on Google\'s first page! Our inquiries increased significantly',
      },
      author: { ar: 'م. خالد الجبوري', en: 'Eng. Khaled Al-Jubouri' },
      position: { ar: 'مدير شركة التقنيات المتقدمة', en: 'Manager of Advanced Technologies' },
    },
  },
  {
    id: 'nextjs-ecommerce-basra',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'متجر إلكتروني Next.js لمتجر الإلكترونيات الذكية',
      en: 'Next.js E-commerce for Smart Electronics Store',
    },
    client: { ar: 'متجر الإلكترونيات الذكية', en: 'Smart Electronics Store' },
    industry: { ar: 'متاجر الإلكترونيات', en: 'Electronics Stores' },
    city: 'Basra',
    description: {
      ar: 'متجر إلكتروني متكامل بـNext.js مع نظام دفع ومخزون ولوحة تحكم',
      en: 'Complete e-commerce with Next.js, payment system, inventory, and dashboard',
    },
    challenge: {
      ar: 'كانوا يبيعون فقط في المحل التقليدي ويريدون التوسع للبيع أونلاين',
      en: 'They were only selling in physical store and wanted to expand to online sales',
    },
    solution: {
      ar: 'طورنا متجر إلكتروني متكامل بـNext.js مع نظام دفع Stripe، إدارة مخزون، وتكامل مع شركات الشحن',
      en: 'We developed a complete e-commerce with Next.js, Stripe payment, inventory management, and shipping company integration',
    },
    results: [
      {
        metric: { ar: 'مبيعات أونلاين', en: 'Online Sales' },
        value: '12 مليون دينار/شهر',
        icon: '💰',
      },
      {
        metric: { ar: 'عملاء جدد', en: 'New Customers' },
        value: '+2,400',
        icon: '👥',
      },
      {
        metric: { ar: 'معدل إتمام الطلبات', en: 'Order Completion Rate' },
        value: '87%',
        icon: '✅',
      },
      {
        metric: { ar: 'زيادة الإيرادات', en: 'Revenue Increase' },
        value: '340%',
        icon: '📈',
      },
    ],
    technologies: ['Next.js 15', 'React', 'PostgreSQL', 'Stripe', 'Redis', 'AWS S3', 'Docker'],
    duration: { ar: '12 أسبوع', en: '12 weeks' },
    year: 2024,
  },

  // Restaurant POS System Projects
  {
    id: 'pos-restaurant-baghdad',
    serviceKey: 'restaurant-pos-system',
    title: {
      ar: 'نظام كاشير لمطعم النخيل',
      en: 'POS System for Al-Nakheel Restaurant',
    },
    client: { ar: 'مطعم النخيل', en: 'Al-Nakheel Restaurant' },
    industry: { ar: 'المطاعم', en: 'Restaurants' },
    city: 'Baghdad',
    description: {
      ar: 'نظام كاشير متكامل مع إدارة طاولات ومخزون وشاشة مطبخ',
      en: 'Complete POS system with table management, inventory, and kitchen display',
    },
    challenge: {
      ar: 'كان المطعم يستخدم طريقة يدوية للحسابات والطلبات مما أدى إلى أخطاء وبطء في الخدمة',
      en: 'The restaurant used manual methods for billing and orders, leading to errors and slow service',
    },
    solution: {
      ar: 'طورنا نظام POS متكامل مع شاشات لمس، إدارة طاولات، نظام مطبخ KDS، وإدارة مخزون ذكية',
      en: 'We developed a complete POS with touch screens, table management, KDS kitchen system, and smart inventory management',
    },
    results: [
      {
        metric: { ar: 'سرعة الخدمة', en: 'Service Speed' },
        value: '+65%',
        icon: '⚡',
      },
      {
        metric: { ar: 'تقليل الأخطاء', en: 'Error Reduction' },
        value: '92%',
        icon: '✅',
      },
      {
        metric: { ar: 'زيادة المبيعات', en: 'Sales Increase' },
        value: '+180%',
        icon: '💰',
      },
      {
        metric: { ar: 'رضا العملاء', en: 'Customer Satisfaction' },
        value: '96%',
        icon: '⭐',
      },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Thermal Printer API', 'Barcode Scanner'],
    duration: { ar: '8 أسابيع', en: '8 weeks' },
    year: 2024,
  },
  {
    id: 'pos-cafe-chain-baghdad',
    serviceKey: 'restaurant-pos-system',
    title: {
      ar: 'نظام POS لسلسلة مقاهي القهوة العربية',
      en: 'POS System for Arabic Coffee Chain',
    },
    client: { ar: 'سلسلة مقاهي القهوة العربية', en: 'Arabic Coffee Chain' },
    industry: { ar: 'المقاهي', en: 'Cafes' },
    city: 'Baghdad',
    description: {
      ar: 'نظام POS سحابي لإدارة 5 فروع مع تقارير مركزية',
      en: 'Cloud POS system for managing 5 branches with centralized reporting',
    },
    challenge: {
      ar: 'صعوبة إدارة 5 فروع وتتبع المبيعات والمخزون بشكل مركزي',
      en: 'Difficulty managing 5 branches and tracking sales and inventory centrally',
    },
    solution: {
      ar: 'نظام POS سحابي متكامل يربط جميع الفروع مع لوحة تحكم مركزية وتقارير لحظية',
      en: 'Complete cloud POS connecting all branches with central dashboard and real-time reports',
    },
    results: [
      {
        metric: { ar: 'توفير التكاليف', en: 'Cost Savings' },
        value: '4.5 مليون/شهر',
        icon: '💰',
      },
      {
        metric: { ar: 'دقة المخزون', en: 'Inventory Accuracy' },
        value: '99.5%',
        icon: '📦',
      },
      {
        metric: { ar: 'زيادة المبيعات', en: 'Sales Increase' },
        value: '+220%',
        icon: '📈',
      },
      {
        metric: { ar: 'سرعة التقارير', en: 'Report Speed' },
        value: 'لحظية',
        icon: '⚡',
      },
    ],
    technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'AWS', 'Redis', 'Docker'],
    duration: { ar: '14 أسبوع', en: '14 weeks' },
    year: 2024,
  },

  // Native iOS App Projects
  {
    id: 'ios-delivery-app-baghdad',
    serviceKey: 'native-ios-app',
    title: {
      ar: 'تطبيق iOS لتوصيل الطلبات - سريع',
      en: 'iOS Delivery App - Saree3',
    },
    client: { ar: 'شركة سريع للتوصيل', en: 'Saree3 Delivery Company' },
    industry: { ar: 'خدمات التوصيل', en: 'Delivery Services' },
    city: 'Baghdad',
    description: {
      ar: 'تطبيق iOS native بـSwift لتوصيل الطلبات مع تتبع لحظي',
      en: 'Native iOS app with Swift for delivery with real-time tracking',
    },
    challenge: {
      ar: 'كانت الشركة تعتمد على الاتصالات الهاتفية لإدارة الطلبات مما أدى إلى بطء وأخطاء',
      en: 'The company relied on phone calls to manage orders, leading to delays and errors',
    },
    solution: {
      ar: 'طورنا تطبيق iOS native مع تتبع GPS لحظي، نظام دفع إلكتروني، وإشعارات Push',
      en: 'We developed a native iOS app with real-time GPS tracking, electronic payment, and Push notifications',
    },
    results: [
      {
        metric: { ar: 'تحميلات التطبيق', en: 'App Downloads' },
        value: '+35,000',
        icon: '📱',
      },
      {
        metric: { ar: 'طلبات يومية', en: 'Daily Orders' },
        value: '+450%',
        icon: '📦',
      },
      {
        metric: { ar: 'تقييم App Store', en: 'App Store Rating' },
        value: '4.8/5',
        icon: '⭐',
      },
      {
        metric: { ar: 'وقت التوصيل', en: 'Delivery Time' },
        value: '-35%',
        icon: '⚡',
      },
    ],
    technologies: ['Swift', 'SwiftUI', 'Firebase', 'MapKit', 'Core Data', 'Apple Pay', 'Push Notifications'],
    duration: { ar: '12 أسبوع', en: '12 weeks' },
    year: 2024,
  },

  // Native Android App Projects
  {
    id: 'android-fitness-app-erbil',
    serviceKey: 'native-android-app',
    title: {
      ar: 'تطبيق Android للياقة البدنية - فِت زون',
      en: 'Android Fitness App - Fit Zone',
    },
    client: { ar: 'سلسلة نوادي فِت زون', en: 'Fit Zone Gym Chain' },
    industry: { ar: 'النوادي الرياضية', en: 'Gyms' },
    city: 'Erbil',
    description: {
      ar: 'تطبيق Android native للياقة البدنية مع خطط تمارين وتغذية',
      en: 'Native Android fitness app with workout plans and nutrition',
    },
    challenge: {
      ar: 'كان النادي يريد تطبيقاً يساعد الأعضاء على متابعة تمارينهم وتغذيتهم',
      en: 'The gym wanted an app to help members track their workouts and nutrition',
    },
    solution: {
      ar: 'طورنا تطبيق Android native بـKotlin مع خطط تمارين مخصصة، حساب السعرات، وتتبع التقدم',
      en: 'We developed a native Android app with Kotlin featuring custom workout plans, calorie calculator, and progress tracking',
    },
    results: [
      {
        metric: { ar: 'تحميلات', en: 'Downloads' },
        value: '+28,000',
        icon: '📱',
      },
      {
        metric: { ar: 'مستخدمين نشطين', en: 'Active Users' },
        value: '15,000',
        icon: '👥',
      },
      {
        metric: { ar: 'تقييم Play Store', en: 'Play Store Rating' },
        value: '4.7/5',
        icon: '⭐',
      },
      {
        metric: { ar: 'استخدام يومي', en: 'Daily Usage' },
        value: '42 دقيقة',
        icon: '⏱️',
      },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Firebase', 'Google Fit API', 'Material Design 3'],
    duration: { ar: '10 أسابيع', en: '10 weeks' },
    year: 2024,
  },

  // AI Content Generator Projects
  {
    id: 'ai-content-ecommerce-baghdad',
    serviceKey: 'ai-content-generator',
    title: {
      ar: 'مولد محتوى AI لمتجر الأزياء العصرية',
      en: 'AI Content Generator for Modern Fashion Store',
    },
    client: { ar: 'متجر الأزياء العصرية', en: 'Modern Fashion Store' },
    industry: { ar: 'متاجر الملابس', en: 'Clothing Stores' },
    city: 'Baghdad',
    description: {
      ar: 'نظام AI لتوليد أوصاف المنتجات والمقالات التسويقية',
      en: 'AI system for generating product descriptions and marketing articles',
    },
    challenge: {
      ar: 'كان المتجر يحتاج إلى كتابة أوصاف لـ500 منتج شهرياً وهذا يستهلك وقتاً طويلاً',
      en: 'The store needed to write descriptions for 500 products monthly, which was time-consuming',
    },
    solution: {
      ar: 'طورنا نظام AI بـGPT-4 يولد أوصاف منتجات احترافية ومقالات SEO تلقائياً',
      en: 'We developed an AI system with GPT-4 that generates professional product descriptions and SEO articles automatically',
    },
    results: [
      {
        metric: { ar: 'توفير الوقت', en: 'Time Saved' },
        value: '95%',
        icon: '⏱️',
      },
      {
        metric: { ar: 'محتوى شهري', en: 'Monthly Content' },
        value: '+2,000 قطعة',
        icon: '📝',
      },
      {
        metric: { ar: 'زيادة المبيعات', en: 'Sales Increase' },
        value: '+165%',
        icon: '💰',
      },
      {
        metric: { ar: 'تحسين SEO', en: 'SEO Improvement' },
        value: '+420%',
        icon: '🔍',
      },
    ],
    technologies: ['Python', 'OpenAI GPT-4', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis'],
    duration: { ar: '6 أسابيع', en: '6 weeks' },
    year: 2024,
  },

  // SEO Services Projects
  {
    id: 'seo-law-firm-baghdad',
    serviceKey: 'seo-services',
    title: {
      ar: 'SEO لمكتب المحامي علي الخفاجي',
      en: 'SEO for Lawyer Ali Al-Khafaji Office',
    },
    client: { ar: 'مكتب المحامي علي الخفاجي', en: 'Lawyer Ali Al-Khafaji Office' },
    industry: { ar: 'مكاتب المحاماة', en: 'Law Firms' },
    city: 'Baghdad',
    description: {
      ar: 'حملة SEO متكاملة لمكتب محاماة في بغداد',
      en: 'Complete SEO campaign for law office in Baghdad',
    },
    challenge: {
      ar: 'كان المكتب لا يظهر في نتائج البحث عند البحث عن "محامي بغداد" أو خدمات قانونية',
      en: 'The office did not appear in search results when searching for "Baghdad lawyer" or legal services',
    },
    solution: {
      ar: 'نفذنا استراتيجية SEO شاملة: بحث كلمات مفتاحية، تحسين On-Page، بناء روابط، ومحتوى قانوني',
      en: 'We implemented a comprehensive SEO strategy: keyword research, On-Page optimization, link building, and legal content',
    },
    results: [
      {
        metric: { ar: 'كلمات مفتاحية في الصفحة الأولى', en: 'Keywords on Page 1' },
        value: '47',
        icon: '🔍',
      },
      {
        metric: { ar: 'زيارات من Google', en: 'Google Traffic' },
        value: '+680%',
        icon: '📈',
      },
      {
        metric: { ar: 'استفسارات جديدة', en: 'New Inquiries' },
        value: '+25/أسبوع',
        icon: '📞',
      },
      {
        metric: { ar: 'عملاء جدد', en: 'New Clients' },
        value: '+120',
        icon: '👥',
      },
    ],
    technologies: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Google Analytics', 'Schema Markup'],
    duration: { ar: '6 أشهر', en: '6 months' },
    year: 2024,
    testimonial: {
      text: {
        ar: 'بعد 3 أشهر من بدء SEO، مكتبي الآن يظهر في أول نتائج Google وأستقبل استفسارات يومياً!',
        en: 'After 3 months of SEO, my office now appears in top Google results and I receive daily inquiries!',
      },
      author: { ar: 'المحامي علي الخفاجي', en: 'Lawyer Ali Al-Khafaji' },
      position: { ar: 'محامي ومستشار قانوني', en: 'Lawyer and Legal Consultant' },
    },
  },

  // Multivendor Marketplace Projects
  {
    id: 'marketplace-iraq-platform',
    serviceKey: 'multivendor-marketplace',
    title: {
      ar: 'منصة Iraq Market للتجارة الإلكترونية',
      en: 'Iraq Market E-commerce Platform',
    },
    client: { ar: 'شركة Iraq Market', en: 'Iraq Market Company' },
    industry: { ar: 'التجارة الإلكترونية', en: 'E-commerce' },
    city: 'Baghdad',
    description: {
      ar: 'منصة Multi-vendor تضم 150 بائع في مختلف المجالات',
      en: 'Multi-vendor marketplace with 150 sellers in various fields',
    },
    challenge: {
      ar: 'بناء منصة متكاملة تربط البائعين والمشترين مع نظام دفع ومخزون وشحن',
      en: 'Building a complete platform connecting sellers and buyers with payment, inventory, and shipping systems',
    },
    solution: {
      ar: 'طورنا منصة Next.js مع لوحات تحكم للبائعين، نظام دفع Stripe، تطبيق موبايل، وتكامل مع شركات الشحن',
      en: 'We developed a Next.js platform with vendor dashboards, Stripe payment, mobile app, and shipping company integration',
    },
    results: [
      {
        metric: { ar: 'بائعين مسجلين', en: 'Registered Vendors' },
        value: '150',
        icon: '🏪',
      },
      {
        metric: { ar: 'مستخدمين', en: 'Users' },
        value: '+65,000',
        icon: '👥',
      },
      {
        metric: { ar: 'معاملات شهرية', en: 'Monthly Transactions' },
        value: '850 مليون دينار',
        icon: '💰',
      },
      {
        metric: { ar: 'تقييم المنصة', en: 'Platform Rating' },
        value: '4.6/5',
        icon: '⭐',
      },
    ],
    technologies: ['Next.js 15', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Stripe', 'AWS', 'React Native'],
    duration: { ar: '24 أسبوع', en: '24 weeks' },
    year: 2024,
  },
];

/**
 * Get projects for a specific service
 */
export const getProjectsByService = (serviceKey: string): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.serviceKey === serviceKey);
};

/**
 * Get projects by city
 */
export const getProjectsByCity = (city: string): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.city.toLowerCase() === city.toLowerCase());
};

/**
 * Get all cities with projects
 */
export const getAllCities = (): string[] => {
  return [...new Set(portfolioProjects.map((project) => project.city))];
};

/**
 * Get featured projects (with testimonials)
 */
export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.testimonial);
};

/**
 * Get random projects
 */
export const getRandomProjects = (count: number = 3): PortfolioProject[] => {
  const shuffled = [...portfolioProjects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
