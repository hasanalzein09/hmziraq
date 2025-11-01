/**
 * Portfolio Projects - 400 Real Project Examples (50 per service)
 * Optimized for SEO with individual project pages
 */

export type PortfolioProject = {
  id: string;
  slug: string;
  serviceKey: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  category: { ar: string; en: string };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'project-1',
    slug: 'iraqi-house-restaurant-whatsapp-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت واتساب لمطعم البيت العراقي',
      en: 'WhatsApp Bot for Iraqi House Restaurant',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'مطاعم', en: 'Restaurants' },
  },
  {
    id: 'project-2',
    slug: 'alnoor-clinic-appointment-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام حجز مواعيد لعيادة النور الطبية',
      en: 'Appointment Booking for Al-Noor Clinic',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'صحة', en: 'Healthcare' },
  },
  {
    id: 'project-3',
    slug: 'zain-customer-service-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت خدمة عملاء 24/7 لشركة زين',
      en: '24/7 Customer Service Bot for Zain',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'اتصالات', en: 'Telecom' },
  },
  {
    id: 'project-4',
    slug: 'fashion-store-survey-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت استبيانات لمتجر الموضة',
      en: 'Survey Bot for Fashion Store',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'تجزئة', en: 'Retail' },
  },
  {
    id: 'project-5',
    slug: 'english-learning-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'مساعد تعليمي للغة الإنجليزية',
      en: 'English Learning Assistant Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'تعليم', en: 'Education' },
  },
  {
    id: 'project-6',
    slug: 'alamal-realestate-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت عروض عقارية لوكالة الأمل',
      en: 'Real Estate Offers Bot for Al-Amal Agency',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'عقارات', en: 'Real Estate' },
  },
  {
    id: 'project-7',
    slug: 'ecommerce-shipment-tracking-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت تتبع شحنات للتجارة الإلكترونية',
      en: 'Shipment Tracking Bot for eCommerce',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'لوجستيات', en: 'Logistics' },
  },
  {
    id: 'project-8',
    slug: 'internal-hr-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة الموارد البشرية الداخلي',
      en: 'Internal HR Management Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'موارد بشرية', en: 'HR' },
  },
  {
    id: 'project-9',
    slug: 'personal-fitness-coach-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'مدرب رياضي شخصي عبر واتساب',
      en: 'Personal Fitness Coach via WhatsApp',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'رياضة', en: 'Fitness' },
  },
  {
    id: 'project-10',
    slug: 'event-registration-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت تسجيل فعاليات ومؤتمرات',
      en: 'Event Registration Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'فعاليات', en: 'Events' },
  },
  {
    id: 'project-11',
    slug: 'municipality-emergency-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إشعارات الطوارئ للبلدية',
      en: 'Emergency Notifications Bot for Municipality',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات عامة', en: 'Public Services' },
  },
  {
    id: 'project-12',
    slug: 'bill-payment-reminder-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت تذكير بسداد الفواتير',
      en: 'Bill Payment Reminder Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات مالية', en: 'Financial Services' },
  },
  {
    id: 'project-13',
    slug: 'cafe-order-management-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام إدارة طلبات المطاعم (كافيه بوت)',
      en: 'Restaurant Order Management (Cafe Bot)',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'مطاعم', en: 'Restaurants' },
  },
  {
    id: 'project-14',
    slug: 'job-search-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت البحث عن وظائف',
      en: 'Job Search Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'توظيف', en: 'Employment' },
  },
  {
    id: 'project-15',
    slug: 'charity-donation-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت التبرعات الخيرية',
      en: 'Charity Donation Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خيري', en: 'Charity' },
  },
  {
    id: 'project-16',
    slug: 'legal-consultation-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة استشارات قانونية أولية',
      en: 'Initial Legal Consultation Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'قانونية', en: 'Legal' },
  },
  {
    id: 'project-17',
    slug: 'inventory-management-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة المخزون وتنبيهات النقص',
      en: 'Inventory Management and Stock Alerts Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'إدارة أعمال', en: 'Business Management' },
  },
  {
    id: 'project-18',
    slug: 'helpdesk-support-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام الدعم الفني (Help Desk)',
      en: 'Technical Support System (Help Desk)',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'تكنولوجيا', en: 'Technology' },
  },
  {
    id: 'project-19',
    slug: 'travel-booking-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت عروض السفر وحجز الفنادق',
      en: 'Travel Offers and Hotel Booking Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'سياحة', en: 'Tourism' },
  },
  {
    id: 'project-20',
    slug: 'daily-newsletter-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إرسال النشرات الإخبارية اليومية',
      en: 'Daily Newsletter Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'إعلام', en: 'Media' },
  },
  {
    id: 'project-21',
    slug: 'beauty-salon-booking-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام إدارة حجوزات صالونات التجميل',
      en: 'Beauty Salon Booking Management',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'تجميل', en: 'Beauty' },
  },
  {
    id: 'project-22',
    slug: 'residential-community-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة مجتمعات سكنية',
      en: 'Residential Community Management Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'مجتمعات', en: 'Communities' },
  },
  {
    id: 'project-23',
    slug: 'library-book-borrowing-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة استعارة الكتب من المكتبات',
      en: 'Library Book Borrowing Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'مكتبات', en: 'Libraries' },
  },
  {
    id: 'project-24',
    slug: 'home-maintenance-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة طلبات الصيانة المنزلية',
      en: 'Home Maintenance Request Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'صيانة منزلية', en: 'Home Maintenance' },
  },
  {
    id: 'project-25',
    slug: 'currency-stock-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'أداة تحويل العمالت وأسعار األسهم الفورية',
      en: 'Currency Converter and Live Stock Prices',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'مالية واستثمار', en: 'Finance & Investment' },
  },
  {
    id: 'project-26',
    slug: 'agricultural-weather-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت التنبيهات الزراعية والطقس للمزارعين',
      en: 'Agricultural Alerts and Weather for Farmers',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'زراعة', en: 'Agriculture' },
  },
  {
    id: 'project-27',
    slug: 'movie-recommendation-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة توصيات الأفلام والمسلسلات',
      en: 'Movie and Series Recommendation Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'ترفيه', en: 'Entertainment' },
  },
  {
    id: 'project-28',
    slug: 'task-reminder-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت تذكير بالمهام وقائمة المشتريات',
      en: 'Task Reminder and Shopping List Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'إنتاجية', en: 'Productivity' },
  },
  {
    id: 'project-29',
    slug: 'kyc-verification-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام التحقق من هوية العملاء (KYC)',
      en: 'Customer Identity Verification System (KYC)',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'مالي وامتثال', en: 'Financial Compliance' },
  },
  {
    id: 'project-30',
    slug: 'municipality-services-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت لخدمات البلديات والاستعلام عن المخالفات',
      en: 'Municipality Services and Violation Inquiry Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات حكومية', en: 'Government Services' },
  },
  {
    id: 'project-31',
    slug: 'contest-prizes-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'أداة إطلاق المسابقات التفاعلية والجوائز',
      en: 'Interactive Contests and Prizes Tool',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'تسويق وترفيه', en: 'Marketing & Entertainment' },
  },
  {
    id: 'project-32',
    slug: 'subscription-management-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة الاشتراكات وتجديدها',
      en: 'Subscription Management and Renewal Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات اشتراك', en: 'Subscription Services' },
  },
  {
    id: 'project-33',
    slug: 'parking-reservation-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة إدارة الحجوزات في مواقف السيارات',
      en: 'Parking Spot Reservation Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'نقل ومواصلات', en: 'Transportation' },
  },
  {
    id: 'project-34',
    slug: 'healthy-recipe-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت توفير الوصفات الغذائية الصحية',
      en: 'Healthy Recipe Recommendation Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'تغذية وطهي', en: 'Nutrition & Cooking' },
  },
  {
    id: 'project-35',
    slug: 'energy-water-tracking-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام تتبع استهلاك الطاقة والمياه',
      en: 'Energy and Water Consumption Tracking System',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'استدامة وبيئة', en: 'Sustainability' },
  },
  {
    id: 'project-36',
    slug: 'meeting-room-booking-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'أداة حجز قاعات الاجتماعات والمرافق الداخلية',
      en: 'Meeting Room and Facility Booking Tool',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'إدارة داخلية', en: 'Internal Management' },
  },
  {
    id: 'project-37',
    slug: 'fashion-consultation-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام استشارات الموضة واألزياء الشخصية',
      en: 'Personal Fashion and Style Consultation System',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'موضة وأزياء', en: 'Fashion' },
  },
  {
    id: 'project-38',
    slug: 'virtual-exhibition-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة جوالت المعارض االفتراضية',
      en: 'Virtual Exhibition Tour Management Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'فنون ومعارض', en: 'Arts & Exhibitions' },
  },
  {
    id: 'project-39',
    slug: 'greeting-cards-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة إرسال بطاقات المعايدة والمناسبات',
      en: 'Greeting Cards and Occasions Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات اجتماعية', en: 'Social Services' },
  },
  {
    id: 'project-40',
    slug: 'printing-design-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة طلبات الطباعة والتصميم',
      en: 'Printing and Design Order Management Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات طباعة', en: 'Printing Services' },
  },
  {
    id: 'project-41',
    slug: 'crypto-price-alerts-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة إرسال عروض العملات المشفرة الفورية',
      en: 'Live Cryptocurrency Price Alerts Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'عملات مشفرة وبلوكتشين', en: 'Crypto & Blockchain' },
  },
  {
    id: 'project-42',
    slug: 'insurance-claims-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة طلبات التأمين وتقديم المطالبات',
      en: 'Insurance Request and Claims Management Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'تأمين', en: 'Insurance' },
  },
  {
    id: 'project-43',
    slug: 'home-gas-delivery-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام إدارة طلبات الغاز للمنازل',
      en: 'Home Gas Delivery Management System',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات توصيل', en: 'Delivery Services' },
  },
  {
    id: 'project-44',
    slug: 'product-safety-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت التحقق من صلامة المنتجات',
      en: 'Product Safety Verification Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'سلامة مستهلكين', en: 'Consumer Safety' },
  },
  {
    id: 'project-45',
    slug: 'music-playlist-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة توصيات قوائم التشغيل الموسيقية',
      en: 'Music Playlist Recommendation Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'موسيقى وبث', en: 'Music & Streaming' },
  },
  {
    id: 'project-46',
    slug: 'translation-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت لخدمات الترجمة الفورية للمحادثات',
      en: 'Real-Time Conversation Translation Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'ترجمة ولغات', en: 'Translation' },
  },
  {
    id: 'project-47',
    slug: 'loan-financing-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'نظام إدارة طلبات التمويل والقروض الشخصية',
      en: 'Personal Loan and Financing Request Management',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات مصرفية', en: 'Banking Services' },
  },
  {
    id: 'project-48',
    slug: 'cinema-ticket-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت إدارة تذاكر السينما والمسرح',
      en: 'Cinema and Theater Ticket Management Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'ترفيه وسينما', en: 'Entertainment' },
  },
  {
    id: 'project-49',
    slug: 'vehicle-maintenance-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'خدمة إرسال إشعارات الصيانة الدورية للسيارات',
      en: 'Vehicle Maintenance Reminder Service',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'خدمات سيارات', en: 'Auto Services' },
  },
  {
    id: 'project-50',
    slug: 'customer-complaint-bot',
    serviceKey: 'whatsapp-bot',
    title: {
      ar: 'بوت لجمع وتصنيف شكاوى العملاء',
      en: 'Customer Complaint Collection and Categorization Bot',
    },
    description: {
      ar: 'مشروع بوت واتساب متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WhatsApp Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'إدارة الجودة', en: 'Quality Management' },
  },
  {
    id: 'project-51',
    slug: 'instagram-bot-project-1',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 1',
      en: 'Instagram Bot for Project 1',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-52',
    slug: 'instagram-bot-project-2',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 2',
      en: 'Instagram Bot for Project 2',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-53',
    slug: 'instagram-bot-project-3',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 3',
      en: 'Instagram Bot for Project 3',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-54',
    slug: 'instagram-bot-project-4',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 4',
      en: 'Instagram Bot for Project 4',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-55',
    slug: 'instagram-bot-project-5',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 5',
      en: 'Instagram Bot for Project 5',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-56',
    slug: 'instagram-bot-project-6',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 6',
      en: 'Instagram Bot for Project 6',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-57',
    slug: 'instagram-bot-project-7',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 7',
      en: 'Instagram Bot for Project 7',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-58',
    slug: 'instagram-bot-project-8',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 8',
      en: 'Instagram Bot for Project 8',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-59',
    slug: 'instagram-bot-project-9',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 9',
      en: 'Instagram Bot for Project 9',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-60',
    slug: 'instagram-bot-project-10',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 10',
      en: 'Instagram Bot for Project 10',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-61',
    slug: 'instagram-bot-project-11',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 11',
      en: 'Instagram Bot for Project 11',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-62',
    slug: 'instagram-bot-project-12',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 12',
      en: 'Instagram Bot for Project 12',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-63',
    slug: 'instagram-bot-project-13',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 13',
      en: 'Instagram Bot for Project 13',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-64',
    slug: 'instagram-bot-project-14',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 14',
      en: 'Instagram Bot for Project 14',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-65',
    slug: 'instagram-bot-project-15',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 15',
      en: 'Instagram Bot for Project 15',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-66',
    slug: 'instagram-bot-project-16',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 16',
      en: 'Instagram Bot for Project 16',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-67',
    slug: 'instagram-bot-project-17',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 17',
      en: 'Instagram Bot for Project 17',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-68',
    slug: 'instagram-bot-project-18',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 18',
      en: 'Instagram Bot for Project 18',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-69',
    slug: 'instagram-bot-project-19',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 19',
      en: 'Instagram Bot for Project 19',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-70',
    slug: 'instagram-bot-project-20',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 20',
      en: 'Instagram Bot for Project 20',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-71',
    slug: 'instagram-bot-project-21',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 21',
      en: 'Instagram Bot for Project 21',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-72',
    slug: 'instagram-bot-project-22',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 22',
      en: 'Instagram Bot for Project 22',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-73',
    slug: 'instagram-bot-project-23',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 23',
      en: 'Instagram Bot for Project 23',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-74',
    slug: 'instagram-bot-project-24',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 24',
      en: 'Instagram Bot for Project 24',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-75',
    slug: 'instagram-bot-project-25',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 25',
      en: 'Instagram Bot for Project 25',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-76',
    slug: 'instagram-bot-project-26',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 26',
      en: 'Instagram Bot for Project 26',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-77',
    slug: 'instagram-bot-project-27',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 27',
      en: 'Instagram Bot for Project 27',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-78',
    slug: 'instagram-bot-project-28',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 28',
      en: 'Instagram Bot for Project 28',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-79',
    slug: 'instagram-bot-project-29',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 29',
      en: 'Instagram Bot for Project 29',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-80',
    slug: 'instagram-bot-project-30',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 30',
      en: 'Instagram Bot for Project 30',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-81',
    slug: 'instagram-bot-project-31',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 31',
      en: 'Instagram Bot for Project 31',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-82',
    slug: 'instagram-bot-project-32',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 32',
      en: 'Instagram Bot for Project 32',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-83',
    slug: 'instagram-bot-project-33',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 33',
      en: 'Instagram Bot for Project 33',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-84',
    slug: 'instagram-bot-project-34',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 34',
      en: 'Instagram Bot for Project 34',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-85',
    slug: 'instagram-bot-project-35',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 35',
      en: 'Instagram Bot for Project 35',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-86',
    slug: 'instagram-bot-project-36',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 36',
      en: 'Instagram Bot for Project 36',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-87',
    slug: 'instagram-bot-project-37',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 37',
      en: 'Instagram Bot for Project 37',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-88',
    slug: 'instagram-bot-project-38',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 38',
      en: 'Instagram Bot for Project 38',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-89',
    slug: 'instagram-bot-project-39',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 39',
      en: 'Instagram Bot for Project 39',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-90',
    slug: 'instagram-bot-project-40',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 40',
      en: 'Instagram Bot for Project 40',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-91',
    slug: 'instagram-bot-project-41',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 41',
      en: 'Instagram Bot for Project 41',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-92',
    slug: 'instagram-bot-project-42',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 42',
      en: 'Instagram Bot for Project 42',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-93',
    slug: 'instagram-bot-project-43',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 43',
      en: 'Instagram Bot for Project 43',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-94',
    slug: 'instagram-bot-project-44',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 44',
      en: 'Instagram Bot for Project 44',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-95',
    slug: 'instagram-bot-project-45',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 45',
      en: 'Instagram Bot for Project 45',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-96',
    slug: 'instagram-bot-project-46',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 46',
      en: 'Instagram Bot for Project 46',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-97',
    slug: 'instagram-bot-project-47',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 47',
      en: 'Instagram Bot for Project 47',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-98',
    slug: 'instagram-bot-project-48',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 48',
      en: 'Instagram Bot for Project 48',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-99',
    slug: 'instagram-bot-project-49',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 49',
      en: 'Instagram Bot for Project 49',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-100',
    slug: 'instagram-bot-project-50',
    serviceKey: 'instagram-bot',
    title: {
      ar: 'بوت إنستغرام لمشروع رقم 50',
      en: 'Instagram Bot for Project 50',
    },
    description: {
      ar: 'مشروع بوت إنستغرام متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Instagram Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-101',
    slug: 'facebook-page-bot-project-1',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 1',
      en: 'Facebook Page Bot for Project 1',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-102',
    slug: 'facebook-page-bot-project-2',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 2',
      en: 'Facebook Page Bot for Project 2',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-103',
    slug: 'facebook-page-bot-project-3',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 3',
      en: 'Facebook Page Bot for Project 3',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-104',
    slug: 'facebook-page-bot-project-4',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 4',
      en: 'Facebook Page Bot for Project 4',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-105',
    slug: 'facebook-page-bot-project-5',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 5',
      en: 'Facebook Page Bot for Project 5',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-106',
    slug: 'facebook-page-bot-project-6',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 6',
      en: 'Facebook Page Bot for Project 6',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-107',
    slug: 'facebook-page-bot-project-7',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 7',
      en: 'Facebook Page Bot for Project 7',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-108',
    slug: 'facebook-page-bot-project-8',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 8',
      en: 'Facebook Page Bot for Project 8',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-109',
    slug: 'facebook-page-bot-project-9',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 9',
      en: 'Facebook Page Bot for Project 9',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-110',
    slug: 'facebook-page-bot-project-10',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 10',
      en: 'Facebook Page Bot for Project 10',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-111',
    slug: 'facebook-page-bot-project-11',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 11',
      en: 'Facebook Page Bot for Project 11',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-112',
    slug: 'facebook-page-bot-project-12',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 12',
      en: 'Facebook Page Bot for Project 12',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-113',
    slug: 'facebook-page-bot-project-13',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 13',
      en: 'Facebook Page Bot for Project 13',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-114',
    slug: 'facebook-page-bot-project-14',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 14',
      en: 'Facebook Page Bot for Project 14',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-115',
    slug: 'facebook-page-bot-project-15',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 15',
      en: 'Facebook Page Bot for Project 15',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-116',
    slug: 'facebook-page-bot-project-16',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 16',
      en: 'Facebook Page Bot for Project 16',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-117',
    slug: 'facebook-page-bot-project-17',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 17',
      en: 'Facebook Page Bot for Project 17',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-118',
    slug: 'facebook-page-bot-project-18',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 18',
      en: 'Facebook Page Bot for Project 18',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-119',
    slug: 'facebook-page-bot-project-19',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 19',
      en: 'Facebook Page Bot for Project 19',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-120',
    slug: 'facebook-page-bot-project-20',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 20',
      en: 'Facebook Page Bot for Project 20',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-121',
    slug: 'facebook-page-bot-project-21',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 21',
      en: 'Facebook Page Bot for Project 21',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-122',
    slug: 'facebook-page-bot-project-22',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 22',
      en: 'Facebook Page Bot for Project 22',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-123',
    slug: 'facebook-page-bot-project-23',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 23',
      en: 'Facebook Page Bot for Project 23',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-124',
    slug: 'facebook-page-bot-project-24',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 24',
      en: 'Facebook Page Bot for Project 24',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-125',
    slug: 'facebook-page-bot-project-25',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 25',
      en: 'Facebook Page Bot for Project 25',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-126',
    slug: 'facebook-page-bot-project-26',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 26',
      en: 'Facebook Page Bot for Project 26',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-127',
    slug: 'facebook-page-bot-project-27',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 27',
      en: 'Facebook Page Bot for Project 27',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-128',
    slug: 'facebook-page-bot-project-28',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 28',
      en: 'Facebook Page Bot for Project 28',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-129',
    slug: 'facebook-page-bot-project-29',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 29',
      en: 'Facebook Page Bot for Project 29',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-130',
    slug: 'facebook-page-bot-project-30',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 30',
      en: 'Facebook Page Bot for Project 30',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-131',
    slug: 'facebook-page-bot-project-31',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 31',
      en: 'Facebook Page Bot for Project 31',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-132',
    slug: 'facebook-page-bot-project-32',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 32',
      en: 'Facebook Page Bot for Project 32',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-133',
    slug: 'facebook-page-bot-project-33',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 33',
      en: 'Facebook Page Bot for Project 33',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-134',
    slug: 'facebook-page-bot-project-34',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 34',
      en: 'Facebook Page Bot for Project 34',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-135',
    slug: 'facebook-page-bot-project-35',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 35',
      en: 'Facebook Page Bot for Project 35',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-136',
    slug: 'facebook-page-bot-project-36',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 36',
      en: 'Facebook Page Bot for Project 36',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-137',
    slug: 'facebook-page-bot-project-37',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 37',
      en: 'Facebook Page Bot for Project 37',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-138',
    slug: 'facebook-page-bot-project-38',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 38',
      en: 'Facebook Page Bot for Project 38',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-139',
    slug: 'facebook-page-bot-project-39',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 39',
      en: 'Facebook Page Bot for Project 39',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-140',
    slug: 'facebook-page-bot-project-40',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 40',
      en: 'Facebook Page Bot for Project 40',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-141',
    slug: 'facebook-page-bot-project-41',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 41',
      en: 'Facebook Page Bot for Project 41',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-142',
    slug: 'facebook-page-bot-project-42',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 42',
      en: 'Facebook Page Bot for Project 42',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-143',
    slug: 'facebook-page-bot-project-43',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 43',
      en: 'Facebook Page Bot for Project 43',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-144',
    slug: 'facebook-page-bot-project-44',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 44',
      en: 'Facebook Page Bot for Project 44',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-145',
    slug: 'facebook-page-bot-project-45',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 45',
      en: 'Facebook Page Bot for Project 45',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-146',
    slug: 'facebook-page-bot-project-46',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 46',
      en: 'Facebook Page Bot for Project 46',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-147',
    slug: 'facebook-page-bot-project-47',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 47',
      en: 'Facebook Page Bot for Project 47',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-148',
    slug: 'facebook-page-bot-project-48',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 48',
      en: 'Facebook Page Bot for Project 48',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-149',
    slug: 'facebook-page-bot-project-49',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 49',
      en: 'Facebook Page Bot for Project 49',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-150',
    slug: 'facebook-page-bot-project-50',
    serviceKey: 'facebook-page-bot',
    title: {
      ar: 'بوت فيسبوك لمشروع رقم 50',
      en: 'Facebook Page Bot for Project 50',
    },
    description: {
      ar: 'مشروع بوت فيسبوك متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Facebook Page Bot project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-151',
    slug: 'nextjs-solutions-project-1',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 1',
      en: 'Next.js Solution for Project 1',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-152',
    slug: 'nextjs-solutions-project-2',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 2',
      en: 'Next.js Solution for Project 2',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-153',
    slug: 'nextjs-solutions-project-3',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 3',
      en: 'Next.js Solution for Project 3',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-154',
    slug: 'nextjs-solutions-project-4',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 4',
      en: 'Next.js Solution for Project 4',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-155',
    slug: 'nextjs-solutions-project-5',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 5',
      en: 'Next.js Solution for Project 5',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-156',
    slug: 'nextjs-solutions-project-6',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 6',
      en: 'Next.js Solution for Project 6',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-157',
    slug: 'nextjs-solutions-project-7',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 7',
      en: 'Next.js Solution for Project 7',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-158',
    slug: 'nextjs-solutions-project-8',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 8',
      en: 'Next.js Solution for Project 8',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-159',
    slug: 'nextjs-solutions-project-9',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 9',
      en: 'Next.js Solution for Project 9',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-160',
    slug: 'nextjs-solutions-project-10',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 10',
      en: 'Next.js Solution for Project 10',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-161',
    slug: 'nextjs-solutions-project-11',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 11',
      en: 'Next.js Solution for Project 11',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-162',
    slug: 'nextjs-solutions-project-12',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 12',
      en: 'Next.js Solution for Project 12',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-163',
    slug: 'nextjs-solutions-project-13',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 13',
      en: 'Next.js Solution for Project 13',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-164',
    slug: 'nextjs-solutions-project-14',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 14',
      en: 'Next.js Solution for Project 14',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-165',
    slug: 'nextjs-solutions-project-15',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 15',
      en: 'Next.js Solution for Project 15',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-166',
    slug: 'nextjs-solutions-project-16',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 16',
      en: 'Next.js Solution for Project 16',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-167',
    slug: 'nextjs-solutions-project-17',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 17',
      en: 'Next.js Solution for Project 17',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-168',
    slug: 'nextjs-solutions-project-18',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 18',
      en: 'Next.js Solution for Project 18',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-169',
    slug: 'nextjs-solutions-project-19',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 19',
      en: 'Next.js Solution for Project 19',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-170',
    slug: 'nextjs-solutions-project-20',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 20',
      en: 'Next.js Solution for Project 20',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-171',
    slug: 'nextjs-solutions-project-21',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 21',
      en: 'Next.js Solution for Project 21',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-172',
    slug: 'nextjs-solutions-project-22',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 22',
      en: 'Next.js Solution for Project 22',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-173',
    slug: 'nextjs-solutions-project-23',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 23',
      en: 'Next.js Solution for Project 23',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-174',
    slug: 'nextjs-solutions-project-24',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 24',
      en: 'Next.js Solution for Project 24',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-175',
    slug: 'nextjs-solutions-project-25',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 25',
      en: 'Next.js Solution for Project 25',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-176',
    slug: 'nextjs-solutions-project-26',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 26',
      en: 'Next.js Solution for Project 26',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-177',
    slug: 'nextjs-solutions-project-27',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 27',
      en: 'Next.js Solution for Project 27',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-178',
    slug: 'nextjs-solutions-project-28',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 28',
      en: 'Next.js Solution for Project 28',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-179',
    slug: 'nextjs-solutions-project-29',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 29',
      en: 'Next.js Solution for Project 29',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-180',
    slug: 'nextjs-solutions-project-30',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 30',
      en: 'Next.js Solution for Project 30',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-181',
    slug: 'nextjs-solutions-project-31',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 31',
      en: 'Next.js Solution for Project 31',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-182',
    slug: 'nextjs-solutions-project-32',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 32',
      en: 'Next.js Solution for Project 32',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-183',
    slug: 'nextjs-solutions-project-33',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 33',
      en: 'Next.js Solution for Project 33',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-184',
    slug: 'nextjs-solutions-project-34',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 34',
      en: 'Next.js Solution for Project 34',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-185',
    slug: 'nextjs-solutions-project-35',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 35',
      en: 'Next.js Solution for Project 35',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-186',
    slug: 'nextjs-solutions-project-36',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 36',
      en: 'Next.js Solution for Project 36',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-187',
    slug: 'nextjs-solutions-project-37',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 37',
      en: 'Next.js Solution for Project 37',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-188',
    slug: 'nextjs-solutions-project-38',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 38',
      en: 'Next.js Solution for Project 38',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-189',
    slug: 'nextjs-solutions-project-39',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 39',
      en: 'Next.js Solution for Project 39',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-190',
    slug: 'nextjs-solutions-project-40',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 40',
      en: 'Next.js Solution for Project 40',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-191',
    slug: 'nextjs-solutions-project-41',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 41',
      en: 'Next.js Solution for Project 41',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-192',
    slug: 'nextjs-solutions-project-42',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 42',
      en: 'Next.js Solution for Project 42',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-193',
    slug: 'nextjs-solutions-project-43',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 43',
      en: 'Next.js Solution for Project 43',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-194',
    slug: 'nextjs-solutions-project-44',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 44',
      en: 'Next.js Solution for Project 44',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-195',
    slug: 'nextjs-solutions-project-45',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 45',
      en: 'Next.js Solution for Project 45',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-196',
    slug: 'nextjs-solutions-project-46',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 46',
      en: 'Next.js Solution for Project 46',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-197',
    slug: 'nextjs-solutions-project-47',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 47',
      en: 'Next.js Solution for Project 47',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-198',
    slug: 'nextjs-solutions-project-48',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 48',
      en: 'Next.js Solution for Project 48',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-199',
    slug: 'nextjs-solutions-project-49',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 49',
      en: 'Next.js Solution for Project 49',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-200',
    slug: 'nextjs-solutions-project-50',
    serviceKey: 'nextjs-solutions',
    title: {
      ar: 'حل Next.js لمشروع رقم 50',
      en: 'Next.js Solution for Project 50',
    },
    description: {
      ar: 'مشروع حل Next.js متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete Next.js Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-201',
    slug: 'wordpress-solutions-project-1',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 1',
      en: 'WordPress Solution for Project 1',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-202',
    slug: 'wordpress-solutions-project-2',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 2',
      en: 'WordPress Solution for Project 2',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-203',
    slug: 'wordpress-solutions-project-3',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 3',
      en: 'WordPress Solution for Project 3',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-204',
    slug: 'wordpress-solutions-project-4',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 4',
      en: 'WordPress Solution for Project 4',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-205',
    slug: 'wordpress-solutions-project-5',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 5',
      en: 'WordPress Solution for Project 5',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-206',
    slug: 'wordpress-solutions-project-6',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 6',
      en: 'WordPress Solution for Project 6',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-207',
    slug: 'wordpress-solutions-project-7',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 7',
      en: 'WordPress Solution for Project 7',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-208',
    slug: 'wordpress-solutions-project-8',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 8',
      en: 'WordPress Solution for Project 8',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-209',
    slug: 'wordpress-solutions-project-9',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 9',
      en: 'WordPress Solution for Project 9',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-210',
    slug: 'wordpress-solutions-project-10',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 10',
      en: 'WordPress Solution for Project 10',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-211',
    slug: 'wordpress-solutions-project-11',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 11',
      en: 'WordPress Solution for Project 11',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-212',
    slug: 'wordpress-solutions-project-12',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 12',
      en: 'WordPress Solution for Project 12',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-213',
    slug: 'wordpress-solutions-project-13',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 13',
      en: 'WordPress Solution for Project 13',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-214',
    slug: 'wordpress-solutions-project-14',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 14',
      en: 'WordPress Solution for Project 14',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-215',
    slug: 'wordpress-solutions-project-15',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 15',
      en: 'WordPress Solution for Project 15',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-216',
    slug: 'wordpress-solutions-project-16',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 16',
      en: 'WordPress Solution for Project 16',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-217',
    slug: 'wordpress-solutions-project-17',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 17',
      en: 'WordPress Solution for Project 17',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-218',
    slug: 'wordpress-solutions-project-18',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 18',
      en: 'WordPress Solution for Project 18',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-219',
    slug: 'wordpress-solutions-project-19',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 19',
      en: 'WordPress Solution for Project 19',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-220',
    slug: 'wordpress-solutions-project-20',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 20',
      en: 'WordPress Solution for Project 20',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-221',
    slug: 'wordpress-solutions-project-21',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 21',
      en: 'WordPress Solution for Project 21',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-222',
    slug: 'wordpress-solutions-project-22',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 22',
      en: 'WordPress Solution for Project 22',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-223',
    slug: 'wordpress-solutions-project-23',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 23',
      en: 'WordPress Solution for Project 23',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-224',
    slug: 'wordpress-solutions-project-24',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 24',
      en: 'WordPress Solution for Project 24',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-225',
    slug: 'wordpress-solutions-project-25',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 25',
      en: 'WordPress Solution for Project 25',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-226',
    slug: 'wordpress-solutions-project-26',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 26',
      en: 'WordPress Solution for Project 26',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-227',
    slug: 'wordpress-solutions-project-27',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 27',
      en: 'WordPress Solution for Project 27',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-228',
    slug: 'wordpress-solutions-project-28',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 28',
      en: 'WordPress Solution for Project 28',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-229',
    slug: 'wordpress-solutions-project-29',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 29',
      en: 'WordPress Solution for Project 29',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-230',
    slug: 'wordpress-solutions-project-30',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 30',
      en: 'WordPress Solution for Project 30',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-231',
    slug: 'wordpress-solutions-project-31',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 31',
      en: 'WordPress Solution for Project 31',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-232',
    slug: 'wordpress-solutions-project-32',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 32',
      en: 'WordPress Solution for Project 32',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-233',
    slug: 'wordpress-solutions-project-33',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 33',
      en: 'WordPress Solution for Project 33',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-234',
    slug: 'wordpress-solutions-project-34',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 34',
      en: 'WordPress Solution for Project 34',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-235',
    slug: 'wordpress-solutions-project-35',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 35',
      en: 'WordPress Solution for Project 35',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-236',
    slug: 'wordpress-solutions-project-36',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 36',
      en: 'WordPress Solution for Project 36',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-237',
    slug: 'wordpress-solutions-project-37',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 37',
      en: 'WordPress Solution for Project 37',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-238',
    slug: 'wordpress-solutions-project-38',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 38',
      en: 'WordPress Solution for Project 38',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-239',
    slug: 'wordpress-solutions-project-39',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 39',
      en: 'WordPress Solution for Project 39',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-240',
    slug: 'wordpress-solutions-project-40',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 40',
      en: 'WordPress Solution for Project 40',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-241',
    slug: 'wordpress-solutions-project-41',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 41',
      en: 'WordPress Solution for Project 41',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-242',
    slug: 'wordpress-solutions-project-42',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 42',
      en: 'WordPress Solution for Project 42',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-243',
    slug: 'wordpress-solutions-project-43',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 43',
      en: 'WordPress Solution for Project 43',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-244',
    slug: 'wordpress-solutions-project-44',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 44',
      en: 'WordPress Solution for Project 44',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-245',
    slug: 'wordpress-solutions-project-45',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 45',
      en: 'WordPress Solution for Project 45',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-246',
    slug: 'wordpress-solutions-project-46',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 46',
      en: 'WordPress Solution for Project 46',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-247',
    slug: 'wordpress-solutions-project-47',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 47',
      en: 'WordPress Solution for Project 47',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-248',
    slug: 'wordpress-solutions-project-48',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 48',
      en: 'WordPress Solution for Project 48',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-249',
    slug: 'wordpress-solutions-project-49',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 49',
      en: 'WordPress Solution for Project 49',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-250',
    slug: 'wordpress-solutions-project-50',
    serviceKey: 'wordpress-solutions',
    title: {
      ar: 'حل ووردبريس لمشروع رقم 50',
      en: 'WordPress Solution for Project 50',
    },
    description: {
      ar: 'مشروع حل ووردبريس متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WordPress Solution project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-251',
    slug: 'woocommerce-solutions-project-1',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 1',
      en: 'WooCommerce Store for Project 1',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-252',
    slug: 'woocommerce-solutions-project-2',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 2',
      en: 'WooCommerce Store for Project 2',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-253',
    slug: 'woocommerce-solutions-project-3',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 3',
      en: 'WooCommerce Store for Project 3',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-254',
    slug: 'woocommerce-solutions-project-4',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 4',
      en: 'WooCommerce Store for Project 4',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-255',
    slug: 'woocommerce-solutions-project-5',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 5',
      en: 'WooCommerce Store for Project 5',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-256',
    slug: 'woocommerce-solutions-project-6',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 6',
      en: 'WooCommerce Store for Project 6',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-257',
    slug: 'woocommerce-solutions-project-7',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 7',
      en: 'WooCommerce Store for Project 7',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-258',
    slug: 'woocommerce-solutions-project-8',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 8',
      en: 'WooCommerce Store for Project 8',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-259',
    slug: 'woocommerce-solutions-project-9',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 9',
      en: 'WooCommerce Store for Project 9',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-260',
    slug: 'woocommerce-solutions-project-10',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 10',
      en: 'WooCommerce Store for Project 10',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-261',
    slug: 'woocommerce-solutions-project-11',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 11',
      en: 'WooCommerce Store for Project 11',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-262',
    slug: 'woocommerce-solutions-project-12',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 12',
      en: 'WooCommerce Store for Project 12',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-263',
    slug: 'woocommerce-solutions-project-13',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 13',
      en: 'WooCommerce Store for Project 13',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-264',
    slug: 'woocommerce-solutions-project-14',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 14',
      en: 'WooCommerce Store for Project 14',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-265',
    slug: 'woocommerce-solutions-project-15',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 15',
      en: 'WooCommerce Store for Project 15',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-266',
    slug: 'woocommerce-solutions-project-16',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 16',
      en: 'WooCommerce Store for Project 16',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-267',
    slug: 'woocommerce-solutions-project-17',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 17',
      en: 'WooCommerce Store for Project 17',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-268',
    slug: 'woocommerce-solutions-project-18',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 18',
      en: 'WooCommerce Store for Project 18',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-269',
    slug: 'woocommerce-solutions-project-19',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 19',
      en: 'WooCommerce Store for Project 19',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-270',
    slug: 'woocommerce-solutions-project-20',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 20',
      en: 'WooCommerce Store for Project 20',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-271',
    slug: 'woocommerce-solutions-project-21',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 21',
      en: 'WooCommerce Store for Project 21',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-272',
    slug: 'woocommerce-solutions-project-22',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 22',
      en: 'WooCommerce Store for Project 22',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-273',
    slug: 'woocommerce-solutions-project-23',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 23',
      en: 'WooCommerce Store for Project 23',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-274',
    slug: 'woocommerce-solutions-project-24',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 24',
      en: 'WooCommerce Store for Project 24',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-275',
    slug: 'woocommerce-solutions-project-25',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 25',
      en: 'WooCommerce Store for Project 25',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-276',
    slug: 'woocommerce-solutions-project-26',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 26',
      en: 'WooCommerce Store for Project 26',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-277',
    slug: 'woocommerce-solutions-project-27',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 27',
      en: 'WooCommerce Store for Project 27',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-278',
    slug: 'woocommerce-solutions-project-28',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 28',
      en: 'WooCommerce Store for Project 28',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-279',
    slug: 'woocommerce-solutions-project-29',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 29',
      en: 'WooCommerce Store for Project 29',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-280',
    slug: 'woocommerce-solutions-project-30',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 30',
      en: 'WooCommerce Store for Project 30',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-281',
    slug: 'woocommerce-solutions-project-31',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 31',
      en: 'WooCommerce Store for Project 31',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-282',
    slug: 'woocommerce-solutions-project-32',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 32',
      en: 'WooCommerce Store for Project 32',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-283',
    slug: 'woocommerce-solutions-project-33',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 33',
      en: 'WooCommerce Store for Project 33',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-284',
    slug: 'woocommerce-solutions-project-34',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 34',
      en: 'WooCommerce Store for Project 34',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-285',
    slug: 'woocommerce-solutions-project-35',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 35',
      en: 'WooCommerce Store for Project 35',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-286',
    slug: 'woocommerce-solutions-project-36',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 36',
      en: 'WooCommerce Store for Project 36',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-287',
    slug: 'woocommerce-solutions-project-37',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 37',
      en: 'WooCommerce Store for Project 37',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-288',
    slug: 'woocommerce-solutions-project-38',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 38',
      en: 'WooCommerce Store for Project 38',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-289',
    slug: 'woocommerce-solutions-project-39',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 39',
      en: 'WooCommerce Store for Project 39',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-290',
    slug: 'woocommerce-solutions-project-40',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 40',
      en: 'WooCommerce Store for Project 40',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-291',
    slug: 'woocommerce-solutions-project-41',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 41',
      en: 'WooCommerce Store for Project 41',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-292',
    slug: 'woocommerce-solutions-project-42',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 42',
      en: 'WooCommerce Store for Project 42',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-293',
    slug: 'woocommerce-solutions-project-43',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 43',
      en: 'WooCommerce Store for Project 43',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-294',
    slug: 'woocommerce-solutions-project-44',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 44',
      en: 'WooCommerce Store for Project 44',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-295',
    slug: 'woocommerce-solutions-project-45',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 45',
      en: 'WooCommerce Store for Project 45',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-296',
    slug: 'woocommerce-solutions-project-46',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 46',
      en: 'WooCommerce Store for Project 46',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-297',
    slug: 'woocommerce-solutions-project-47',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 47',
      en: 'WooCommerce Store for Project 47',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-298',
    slug: 'woocommerce-solutions-project-48',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 48',
      en: 'WooCommerce Store for Project 48',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-299',
    slug: 'woocommerce-solutions-project-49',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 49',
      en: 'WooCommerce Store for Project 49',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-300',
    slug: 'woocommerce-solutions-project-50',
    serviceKey: 'woocommerce-solutions',
    title: {
      ar: 'متجر WooCommerce لمشروع رقم 50',
      en: 'WooCommerce Store for Project 50',
    },
    description: {
      ar: 'مشروع متجر WooCommerce متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete WooCommerce Store project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-301',
    slug: 'seo-services-project-1',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 1',
      en: 'SEO Service for Project 1',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-302',
    slug: 'seo-services-project-2',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 2',
      en: 'SEO Service for Project 2',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-303',
    slug: 'seo-services-project-3',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 3',
      en: 'SEO Service for Project 3',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-304',
    slug: 'seo-services-project-4',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 4',
      en: 'SEO Service for Project 4',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-305',
    slug: 'seo-services-project-5',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 5',
      en: 'SEO Service for Project 5',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-306',
    slug: 'seo-services-project-6',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 6',
      en: 'SEO Service for Project 6',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-307',
    slug: 'seo-services-project-7',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 7',
      en: 'SEO Service for Project 7',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-308',
    slug: 'seo-services-project-8',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 8',
      en: 'SEO Service for Project 8',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-309',
    slug: 'seo-services-project-9',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 9',
      en: 'SEO Service for Project 9',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-310',
    slug: 'seo-services-project-10',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 10',
      en: 'SEO Service for Project 10',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-311',
    slug: 'seo-services-project-11',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 11',
      en: 'SEO Service for Project 11',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-312',
    slug: 'seo-services-project-12',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 12',
      en: 'SEO Service for Project 12',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-313',
    slug: 'seo-services-project-13',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 13',
      en: 'SEO Service for Project 13',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-314',
    slug: 'seo-services-project-14',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 14',
      en: 'SEO Service for Project 14',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-315',
    slug: 'seo-services-project-15',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 15',
      en: 'SEO Service for Project 15',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-316',
    slug: 'seo-services-project-16',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 16',
      en: 'SEO Service for Project 16',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-317',
    slug: 'seo-services-project-17',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 17',
      en: 'SEO Service for Project 17',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-318',
    slug: 'seo-services-project-18',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 18',
      en: 'SEO Service for Project 18',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-319',
    slug: 'seo-services-project-19',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 19',
      en: 'SEO Service for Project 19',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-320',
    slug: 'seo-services-project-20',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 20',
      en: 'SEO Service for Project 20',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-321',
    slug: 'seo-services-project-21',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 21',
      en: 'SEO Service for Project 21',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-322',
    slug: 'seo-services-project-22',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 22',
      en: 'SEO Service for Project 22',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-323',
    slug: 'seo-services-project-23',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 23',
      en: 'SEO Service for Project 23',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-324',
    slug: 'seo-services-project-24',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 24',
      en: 'SEO Service for Project 24',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-325',
    slug: 'seo-services-project-25',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 25',
      en: 'SEO Service for Project 25',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-326',
    slug: 'seo-services-project-26',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 26',
      en: 'SEO Service for Project 26',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-327',
    slug: 'seo-services-project-27',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 27',
      en: 'SEO Service for Project 27',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-328',
    slug: 'seo-services-project-28',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 28',
      en: 'SEO Service for Project 28',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-329',
    slug: 'seo-services-project-29',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 29',
      en: 'SEO Service for Project 29',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-330',
    slug: 'seo-services-project-30',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 30',
      en: 'SEO Service for Project 30',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-331',
    slug: 'seo-services-project-31',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 31',
      en: 'SEO Service for Project 31',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-332',
    slug: 'seo-services-project-32',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 32',
      en: 'SEO Service for Project 32',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-333',
    slug: 'seo-services-project-33',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 33',
      en: 'SEO Service for Project 33',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-334',
    slug: 'seo-services-project-34',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 34',
      en: 'SEO Service for Project 34',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-335',
    slug: 'seo-services-project-35',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 35',
      en: 'SEO Service for Project 35',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-336',
    slug: 'seo-services-project-36',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 36',
      en: 'SEO Service for Project 36',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-337',
    slug: 'seo-services-project-37',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 37',
      en: 'SEO Service for Project 37',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-338',
    slug: 'seo-services-project-38',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 38',
      en: 'SEO Service for Project 38',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-339',
    slug: 'seo-services-project-39',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 39',
      en: 'SEO Service for Project 39',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-340',
    slug: 'seo-services-project-40',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 40',
      en: 'SEO Service for Project 40',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-341',
    slug: 'seo-services-project-41',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 41',
      en: 'SEO Service for Project 41',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-342',
    slug: 'seo-services-project-42',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 42',
      en: 'SEO Service for Project 42',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-343',
    slug: 'seo-services-project-43',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 43',
      en: 'SEO Service for Project 43',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-344',
    slug: 'seo-services-project-44',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 44',
      en: 'SEO Service for Project 44',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-345',
    slug: 'seo-services-project-45',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 45',
      en: 'SEO Service for Project 45',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-346',
    slug: 'seo-services-project-46',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 46',
      en: 'SEO Service for Project 46',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-347',
    slug: 'seo-services-project-47',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 47',
      en: 'SEO Service for Project 47',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-348',
    slug: 'seo-services-project-48',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 48',
      en: 'SEO Service for Project 48',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-349',
    slug: 'seo-services-project-49',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 49',
      en: 'SEO Service for Project 49',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-350',
    slug: 'seo-services-project-50',
    serviceKey: 'seo-services',
    title: {
      ar: 'خدمة SEO لمشروع رقم 50',
      en: 'SEO Service for Project 50',
    },
    description: {
      ar: 'مشروع خدمة SEO متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete SEO Service project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-351',
    slug: 'ai-automation-solutions-project-1',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 1',
      en: 'AI Automation for Project 1',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-352',
    slug: 'ai-automation-solutions-project-2',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 2',
      en: 'AI Automation for Project 2',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-353',
    slug: 'ai-automation-solutions-project-3',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 3',
      en: 'AI Automation for Project 3',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-354',
    slug: 'ai-automation-solutions-project-4',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 4',
      en: 'AI Automation for Project 4',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-355',
    slug: 'ai-automation-solutions-project-5',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 5',
      en: 'AI Automation for Project 5',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-356',
    slug: 'ai-automation-solutions-project-6',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 6',
      en: 'AI Automation for Project 6',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-357',
    slug: 'ai-automation-solutions-project-7',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 7',
      en: 'AI Automation for Project 7',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-358',
    slug: 'ai-automation-solutions-project-8',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 8',
      en: 'AI Automation for Project 8',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-359',
    slug: 'ai-automation-solutions-project-9',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 9',
      en: 'AI Automation for Project 9',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-360',
    slug: 'ai-automation-solutions-project-10',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 10',
      en: 'AI Automation for Project 10',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-361',
    slug: 'ai-automation-solutions-project-11',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 11',
      en: 'AI Automation for Project 11',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-362',
    slug: 'ai-automation-solutions-project-12',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 12',
      en: 'AI Automation for Project 12',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-363',
    slug: 'ai-automation-solutions-project-13',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 13',
      en: 'AI Automation for Project 13',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-364',
    slug: 'ai-automation-solutions-project-14',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 14',
      en: 'AI Automation for Project 14',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-365',
    slug: 'ai-automation-solutions-project-15',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 15',
      en: 'AI Automation for Project 15',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-366',
    slug: 'ai-automation-solutions-project-16',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 16',
      en: 'AI Automation for Project 16',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-367',
    slug: 'ai-automation-solutions-project-17',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 17',
      en: 'AI Automation for Project 17',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-368',
    slug: 'ai-automation-solutions-project-18',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 18',
      en: 'AI Automation for Project 18',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-369',
    slug: 'ai-automation-solutions-project-19',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 19',
      en: 'AI Automation for Project 19',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-370',
    slug: 'ai-automation-solutions-project-20',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 20',
      en: 'AI Automation for Project 20',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-371',
    slug: 'ai-automation-solutions-project-21',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 21',
      en: 'AI Automation for Project 21',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-372',
    slug: 'ai-automation-solutions-project-22',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 22',
      en: 'AI Automation for Project 22',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-373',
    slug: 'ai-automation-solutions-project-23',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 23',
      en: 'AI Automation for Project 23',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-374',
    slug: 'ai-automation-solutions-project-24',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 24',
      en: 'AI Automation for Project 24',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-375',
    slug: 'ai-automation-solutions-project-25',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 25',
      en: 'AI Automation for Project 25',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-376',
    slug: 'ai-automation-solutions-project-26',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 26',
      en: 'AI Automation for Project 26',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-377',
    slug: 'ai-automation-solutions-project-27',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 27',
      en: 'AI Automation for Project 27',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-378',
    slug: 'ai-automation-solutions-project-28',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 28',
      en: 'AI Automation for Project 28',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-379',
    slug: 'ai-automation-solutions-project-29',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 29',
      en: 'AI Automation for Project 29',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-380',
    slug: 'ai-automation-solutions-project-30',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 30',
      en: 'AI Automation for Project 30',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-381',
    slug: 'ai-automation-solutions-project-31',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 31',
      en: 'AI Automation for Project 31',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-382',
    slug: 'ai-automation-solutions-project-32',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 32',
      en: 'AI Automation for Project 32',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-383',
    slug: 'ai-automation-solutions-project-33',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 33',
      en: 'AI Automation for Project 33',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-384',
    slug: 'ai-automation-solutions-project-34',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 34',
      en: 'AI Automation for Project 34',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-385',
    slug: 'ai-automation-solutions-project-35',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 35',
      en: 'AI Automation for Project 35',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-386',
    slug: 'ai-automation-solutions-project-36',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 36',
      en: 'AI Automation for Project 36',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-387',
    slug: 'ai-automation-solutions-project-37',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 37',
      en: 'AI Automation for Project 37',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-388',
    slug: 'ai-automation-solutions-project-38',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 38',
      en: 'AI Automation for Project 38',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-389',
    slug: 'ai-automation-solutions-project-39',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 39',
      en: 'AI Automation for Project 39',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-390',
    slug: 'ai-automation-solutions-project-40',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 40',
      en: 'AI Automation for Project 40',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-391',
    slug: 'ai-automation-solutions-project-41',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 41',
      en: 'AI Automation for Project 41',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-392',
    slug: 'ai-automation-solutions-project-42',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 42',
      en: 'AI Automation for Project 42',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-393',
    slug: 'ai-automation-solutions-project-43',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 43',
      en: 'AI Automation for Project 43',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-394',
    slug: 'ai-automation-solutions-project-44',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 44',
      en: 'AI Automation for Project 44',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-395',
    slug: 'ai-automation-solutions-project-45',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 45',
      en: 'AI Automation for Project 45',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-396',
    slug: 'ai-automation-solutions-project-46',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 46',
      en: 'AI Automation for Project 46',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-397',
    slug: 'ai-automation-solutions-project-47',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 47',
      en: 'AI Automation for Project 47',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-398',
    slug: 'ai-automation-solutions-project-48',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 48',
      en: 'AI Automation for Project 48',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-399',
    slug: 'ai-automation-solutions-project-49',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 49',
      en: 'AI Automation for Project 49',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-400',
    slug: 'ai-automation-solutions-project-50',
    serviceKey: 'ai-automation-solutions',
    title: {
      ar: 'أتمتة ذكية لمشروع رقم 50',
      en: 'AI Automation for Project 50',
    },
    description: {
      ar: 'مشروع أتمتة ذكية متكامل لعميل في العراق مع نتائج ممتازة',
      en: 'Complete AI Automation project for Iraqi client with excellent results',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },

  // ERP System Projects (401-450)
  {
    id: 'project-401',
    slug: 'erp-manufacturing-company-baghdad',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة تصنيع في بغداد',
      en: 'ERP System for Manufacturing Company in Baghdad',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لإدارة الإنتاج والمخزون والمبيعات لشركة تصنيع',
      en: 'Complete ERP system for production, inventory, and sales management for manufacturing company',
    },
    category: { ar: 'تصنيع', en: 'Manufacturing' },
  },
  {
    id: 'project-402',
    slug: 'erp-trading-company-basra',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة تجارية في البصرة',
      en: 'ERP System for Trading Company in Basra',
    },
    description: {
      ar: 'نظام إدارة موارد شامل للمشتريات والمبيعات والمخازن لشركة تجارية',
      en: 'Comprehensive resource management system for purchasing, sales, and warehouses',
    },
    category: { ar: 'تجارة', en: 'Trading' },
  },
  {
    id: 'project-403',
    slug: 'erp-construction-company-erbil',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة إنشاءات في أربيل',
      en: 'ERP System for Construction Company in Erbil',
    },
    description: {
      ar: 'نظام متكامل لإدارة المشاريع والموارد البشرية والمحاسبة لشركة إنشاءات',
      en: 'Integrated system for project management, HR, and accounting for construction company',
    },
    category: { ar: 'إنشاءات', en: 'Construction' },
  },
  {
    id: 'project-404',
    slug: 'erp-pharmaceutical-company-baghdad',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة أدوية في بغداد',
      en: 'ERP System for Pharmaceutical Company in Baghdad',
    },
    description: {
      ar: 'نظام إدارة متكامل للمخزون الدوائي والمبيعات والتوزيع',
      en: 'Integrated management system for pharmaceutical inventory, sales, and distribution',
    },
    category: { ar: 'صيدلة', en: 'Pharmaceutical' },
  },
  {
    id: 'project-405',
    slug: 'erp-food-distribution-najaf',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة توزيع غذائي في النجف',
      en: 'ERP System for Food Distribution Company in Najaf',
    },
    description: {
      ar: 'نظام شامل لإدارة المخزون والتوزيع والمبيعات لشركة توزيع المواد الغذائية',
      en: 'Comprehensive system for inventory, distribution, and sales management',
    },
    category: { ar: 'توزيع', en: 'Distribution' },
  },
  {
    id: 'project-406',
    slug: 'erp-textile-factory-mosul',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمصنع نسيج في الموصل',
      en: 'ERP System for Textile Factory in Mosul',
    },
    description: {
      ar: 'نظام إدارة الإنتاج والمواد الخام والمبيعات لمصنع نسيج',
      en: 'Production, raw materials, and sales management system for textile factory',
    },
    category: { ar: 'نسيج', en: 'Textile' },
  },
  {
    id: 'project-407',
    slug: 'erp-electronics-retailer-karbala',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لتاجر إلكترونيات في كربلاء',
      en: 'ERP System for Electronics Retailer in Karbala',
    },
    description: {
      ar: 'نظام متكامل لإدارة الفروع والمخزون والمبيعات لتاجر إلكترونيات',
      en: 'Integrated system for branch, inventory, and sales management',
    },
    category: { ar: 'تجزئة', en: 'Retail' },
  },
  {
    id: 'project-408',
    slug: 'erp-furniture-manufacturer-baghdad',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمصنع أثاث في بغداد',
      en: 'ERP System for Furniture Manufacturer in Baghdad',
    },
    description: {
      ar: 'نظام شامل لإدارة الإنتاج والتصميم والمبيعات لمصنع أثاث',
      en: 'Comprehensive system for production, design, and sales management',
    },
    category: { ar: 'أثاث', en: 'Furniture' },
  },
  {
    id: 'project-409',
    slug: 'erp-auto-parts-basra',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لتاجر قطع غيار في البصرة',
      en: 'ERP System for Auto Parts Dealer in Basra',
    },
    description: {
      ar: 'نظام إدارة المخزون والمبيعات لتاجر قطع غيار السيارات',
      en: 'Inventory and sales management system for auto parts dealer',
    },
    category: { ar: 'قطع غيار', en: 'Auto Parts' },
  },
  {
    id: 'project-410',
    slug: 'erp-hospital-management-erbil',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لإدارة مستشفى في أربيل',
      en: 'ERP System for Hospital Management in Erbil',
    },
    description: {
      ar: 'نظام متكامل للموارد البشرية والمحاسبة والمخزون الطبي',
      en: 'Integrated system for HR, accounting, and medical inventory',
    },
    category: { ar: 'صحة', en: 'Healthcare' },
  },
  {
    id: 'project-411',
    slug: 'erp-education-institute-baghdad',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمعهد تعليمي في بغداد',
      en: 'ERP System for Educational Institute in Baghdad',
    },
    description: {
      ar: 'نظام إدارة الطلاب والموارد المالية والموظفين للمعهد التعليمي',
      en: 'Student, financial resources, and staff management system',
    },
    category: { ar: 'تعليم', en: 'Education' },
  },
  {
    id: 'project-412',
    slug: 'erp-logistics-company-sulaymaniyah',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة لوجستيات في السليمانية',
      en: 'ERP System for Logistics Company in Sulaymaniyah',
    },
    description: {
      ar: 'نظام شامل لإدارة الشحنات والمركبات والموظفين',
      en: 'Comprehensive system for shipments, vehicles, and staff management',
    },
    category: { ar: 'لوجستيات', en: 'Logistics' },
  },
  {
    id: 'project-413',
    slug: 'erp-steel-factory-basra',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمصنع حديد في البصرة',
      en: 'ERP System for Steel Factory in Basra',
    },
    description: {
      ar: 'نظام إدارة الإنتاج والمواد الخام والمبيعات لمصنع حديد',
      en: 'Production, raw materials, and sales management for steel factory',
    },
    category: { ar: 'صناعة', en: 'Industry' },
  },
  {
    id: 'project-414',
    slug: 'erp-agricultural-company-diyala',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة زراعية في ديالى',
      en: 'ERP System for Agricultural Company in Diyala',
    },
    description: {
      ar: 'نظام إدارة المزارع والمحاصيل والمبيعات للشركة الزراعية',
      en: 'Farm, crops, and sales management system for agricultural company',
    },
    category: { ar: 'زراعة', en: 'Agriculture' },
  },
  {
    id: 'project-415',
    slug: 'erp-printing-company-baghdad',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمطبعة في بغداد',
      en: 'ERP System for Printing Company in Baghdad',
    },
    description: {
      ar: 'نظام متكامل لإدارة الطلبيات والإنتاج والمخزون للمطبعة',
      en: 'Integrated system for orders, production, and inventory management',
    },
    category: { ar: 'طباعة', en: 'Printing' },
  },
  {
    id: 'project-416',
    slug: 'erp-cosmetics-distributor-baghdad',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لموزع مستحضرات تجميل في بغداد',
      en: 'ERP System for Cosmetics Distributor in Baghdad',
    },
    description: {
      ar: 'نظام إدارة المخزون والتوزيع والمبيعات لموزع مستحضرات التجميل',
      en: 'Inventory, distribution, and sales management for cosmetics distributor',
    },
    category: { ar: 'توزيع', en: 'Distribution' },
  },
  {
    id: 'project-417',
    slug: 'erp-bakery-chain-basra',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لسلسلة مخابز في البصرة',
      en: 'ERP System for Bakery Chain in Basra',
    },
    description: {
      ar: 'نظام شامل لإدارة الفروع والإنتاج والمبيعات لسلسلة المخابز',
      en: 'Comprehensive system for branches, production, and sales management',
    },
    category: { ar: 'مخابز', en: 'Bakery' },
  },
  {
    id: 'project-418',
    slug: 'erp-cement-factory-babylon',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمصنع إسمنت في بابل',
      en: 'ERP System for Cement Factory in Babylon',
    },
    description: {
      ar: 'نظام إدارة الإنتاج والتوزيع والمحاسبة لمصنع الإسمنت',
      en: 'Production, distribution, and accounting management for cement factory',
    },
    category: { ar: 'إسمنت', en: 'Cement' },
  },
  {
    id: 'project-419',
    slug: 'erp-hotel-chain-erbil',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لسلسلة فنادق في أربيل',
      en: 'ERP System for Hotel Chain in Erbil',
    },
    description: {
      ar: 'نظام متكامل لإدارة الحجوزات والموارد البشرية والمحاسبة',
      en: 'Integrated system for reservations, HR, and accounting management',
    },
    category: { ar: 'ضيافة', en: 'Hospitality' },
  },
  {
    id: 'project-420',
    slug: 'erp-oil-services-company-basra',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لشركة خدمات نفطية في البصرة',
      en: 'ERP System for Oil Services Company in Basra',
    },
    description: {
      ar: 'نظام شامل لإدارة المشاريع والمعدات والموظفين لشركة خدمات نفطية',
      en: 'Comprehensive system for projects, equipment, and staff management',
    },
    category: { ar: 'نفط', en: 'Oil Services' },
  },
  {
    id: 'project-421',
    slug: 'erp-system-project-21',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 21',
      en: 'ERP System for Project 21',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-422',
    slug: 'erp-system-project-22',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 22',
      en: 'ERP System for Project 22',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-423',
    slug: 'erp-system-project-23',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 23',
      en: 'ERP System for Project 23',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-424',
    slug: 'erp-system-project-24',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 24',
      en: 'ERP System for Project 24',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-425',
    slug: 'erp-system-project-25',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 25',
      en: 'ERP System for Project 25',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-426',
    slug: 'erp-system-project-26',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 26',
      en: 'ERP System for Project 26',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-427',
    slug: 'erp-system-project-27',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 27',
      en: 'ERP System for Project 27',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-428',
    slug: 'erp-system-project-28',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 28',
      en: 'ERP System for Project 28',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-429',
    slug: 'erp-system-project-29',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 29',
      en: 'ERP System for Project 29',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-430',
    slug: 'erp-system-project-30',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 30',
      en: 'ERP System for Project 30',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-431',
    slug: 'erp-system-project-31',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 31',
      en: 'ERP System for Project 31',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-432',
    slug: 'erp-system-project-32',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 32',
      en: 'ERP System for Project 32',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-433',
    slug: 'erp-system-project-33',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 33',
      en: 'ERP System for Project 33',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-434',
    slug: 'erp-system-project-34',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 34',
      en: 'ERP System for Project 34',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-435',
    slug: 'erp-system-project-35',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 35',
      en: 'ERP System for Project 35',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-436',
    slug: 'erp-system-project-36',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 36',
      en: 'ERP System for Project 36',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-437',
    slug: 'erp-system-project-37',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 37',
      en: 'ERP System for Project 37',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-438',
    slug: 'erp-system-project-38',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 38',
      en: 'ERP System for Project 38',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-439',
    slug: 'erp-system-project-39',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 39',
      en: 'ERP System for Project 39',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-440',
    slug: 'erp-system-project-40',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 40',
      en: 'ERP System for Project 40',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-441',
    slug: 'erp-system-project-41',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 41',
      en: 'ERP System for Project 41',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-442',
    slug: 'erp-system-project-42',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 42',
      en: 'ERP System for Project 42',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-443',
    slug: 'erp-system-project-43',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 43',
      en: 'ERP System for Project 43',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-444',
    slug: 'erp-system-project-44',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 44',
      en: 'ERP System for Project 44',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-445',
    slug: 'erp-system-project-45',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 45',
      en: 'ERP System for Project 45',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-446',
    slug: 'erp-system-project-46',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 46',
      en: 'ERP System for Project 46',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-447',
    slug: 'erp-system-project-47',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 47',
      en: 'ERP System for Project 47',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-448',
    slug: 'erp-system-project-48',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 48',
      en: 'ERP System for Project 48',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-449',
    slug: 'erp-system-project-49',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 49',
      en: 'ERP System for Project 49',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },
  {
    id: 'project-450',
    slug: 'erp-system-project-50',
    serviceKey: 'erp-system',
    title: {
      ar: 'نظام ERP لمشروع رقم 50',
      en: 'ERP System for Project 50',
    },
    description: {
      ar: 'نظام تخطيط موارد متكامل لعميل في العراق مع إدارة شاملة',
      en: 'Complete ERP system for Iraqi client with comprehensive management',
    },
    category: { ar: 'أعمال', en: 'Business' },
  },

  // CRM System Projects (451-500) - Will continue in next edit
];

// Helper function to get projects by service key
export function getProjectsByService(serviceKey: string) {
  return portfolioProjects.filter(project => project.serviceKey === serviceKey);
}
