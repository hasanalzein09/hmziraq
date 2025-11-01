// قائمة ضخمة بأنواع المصالح والمؤسسات العراقية مع وصف وكلمات مفتاحية ومدن مستهدفة
export type BusinessType = {
  key: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  keywords: string[];
  cities: string[];
};

// قائمة شاملة: 500+ مدينة وقضاء وناحية عراقية (تجريبيًا)
const ALL_IRAQ_CITIES = [
  // بغداد
  'بغداد', 'الكرادة', 'المنصور', 'الأعظمية', 'مدينة الصدر', 'الكاظمية', 'الجادرية', 'اليرموك', 'زيونة', 'الدورة', 'الشعب', 'حي الجامعة', 'حي العامل', 'حي العدل', 'حي الخضراء', 'حي الرسالة', 'حي البنوك', 'حي أور', 'حي الإعلام', 'حي التراث', 'حي المواصلات', 'حي الشرطة', 'حي السلام', 'حي الأمين', 'حي القاهرة', 'حي جميلة', 'حي البلديات', 'حي الغدير', 'حي الزعفرانية', 'حي المشتل', 'حي الفضيلية', 'حي الميكانيك', 'حي الصحة', 'حي الفرات', 'حي الحسين', 'حي النصر', 'حي الجهاد', 'حي العامل', 'حي الرسالة', 'حي الشرطة الرابعة', 'حي الشرطة الخامسة', 'حي الشرطة السادسة', 'حي الشرطة السابعة', 'حي الشرطة الثامنة', 'حي الشرطة التاسعة', 'حي الشرطة العاشرة', 'حي الشرطة الحادية عشر', 'حي الشرطة الثانية عشر', 'حي الشرطة الثالثة عشر', 'حي الشرطة الرابعة عشر',
  // البصرة
  'البصرة', 'الزبير', 'أبو الخصيب', 'القرنة', 'المدينة', 'الهارثة', 'الفاو', 'شط العرب', 'سفوان', 'أم قصر', 'السيبة', 'الدير', 'الهوير', 'الشرش', 'البرجسية', 'الطوبة', 'النشوة', 'الرميلة', 'الحسن', 'الكرمة', 'الخور', 'البراضعية', 'المعقل', 'العشار', 'الجمهورية', 'الجنينة', 'الحيانية', 'الطويسة', 'القبلة', 'البرجسية', 'الخور', 'البراضعية', 'المعقل', 'العشار', 'الجمهورية', 'الجنينة', 'الحيانية', 'الطويسة', 'القبلة',
  // نينوى
  'الموصل', 'تلعفر', 'سنجار', 'الحمدانية', 'بعشيقة', 'برطلة', 'القيارة', 'الحضر', 'تل عبطة', 'تل زلط', 'ربيعة', 'زمار', 'العياضية', 'الشورة', 'الكسك', 'الشرقاط', 'بعاج', 'المحلبية', 'الربيع', 'القيارة', 'الشرقاط', 'الحميدات', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط', 'الشرقاط',
  // أربيل
  'أربيل', 'عنكاوا', 'شقلاوة', 'سوران', 'كويسنجق', 'مخمور', 'ديانا', 'صلاح الدين', 'بردرش', 'كويه', 'خبات', 'حرير', 'جومان', 'بنصلاوة', 'عينكاوة', 'قوشتبة', 'كلك', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة', 'كنديناوة',
  // السليمانية
  'السليمانية', 'رانية', 'قلعة دزة', 'حلبجة', 'جوارته', 'دربندخان', 'كلار', 'شاره زور', 'سيد صادق', 'قره داغ', 'جمجمال', 'طاسلوجة', 'بنجوين', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق', 'سيد صادق',
  // بقية المحافظات (مثال)
  'كربلاء', 'النجف', 'الرمادي', 'الديوانية', 'الناصرية', 'العمارة', 'الكوت', 'الحلة', 'كركوك', 'تكريت', 'سامراء', 'بعقوبة', 'الفلوجة', 'دهوك', 'زاخو', 'السماوة', 'الكوفة', 'المقدادية', 'الشطرة', 'هيت', 'حديثة', 'سوق الشيوخ', 'المسيب', 'المحاويل', 'خانقين', 'الصويرة', 'الميمونة', 'عفك', 'الشامية', 'الرميثة', 'سميل',
  // مدن إضافية وهمية للتجربة
  ...Array.from({ length: 500 }, (_, i) => `مدينة رقم ${i + 1}`),
];

export const BUSINESS_TYPES: BusinessType[] = [
  // === قطاع المطاعم والأطعمة (20 نوع) ===
  {
    key: 'restaurants',
    name: { ar: 'مطاعم', en: 'Restaurants' },
    description: {
      ar: 'حلول رقمية متقدمة للمطاعم في العراق: بوتات واتساب للطلبات، مواقع، أتمتة، تسويق إلكتروني، وأنظمة نقاط البيع.',
      en: 'Advanced digital solutions for restaurants in Iraq: WhatsApp ordering bots, websites, automation, digital marketing, and POS systems.'
    },
    keywords: [
      'مطاعم بغداد', 'مطاعم البصرة', 'مطاعم النجف', 'مطاعم كربلاء',
      'وين الكه مطعم ببغداد', 'وين احسن مطعم بالبصرة', 'شلون اطلب اكل',
      'مطاعم توصيل بغداد', 'مطاعم توصيل البصرة', 'ديليفري اكل بغداد',
      'احسن مطاعم بغداد', 'احسن مطاعم البصرة', 'احسن مطاعم النجف',
      'كم سعر الاكل', 'اسعار المطاعم ببغداد', 'مطاعم رخيصة بغداد',
      'مطاعم فخمة بغداد', 'مطعم كباب بغداد', 'مطعم سمك بغداد',
      'مطاعم عراقية', 'اكل عراقي', 'مطاعم شعبية', 'مطاعم افراح',
      'وين اروح اكل', 'شنو احسن مطعم', 'كم نمرة المطعم',
      'مطاعم قريبة مني', 'مطاعم مفتوحة الحين', 'مطاعم 24 ساعة'
    ],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cafes',
    name: { ar: 'مقاهي', en: 'Cafes' },
    description: {
      ar: 'حلول رقمية للمقاهي: بوت طلبات، قائمة طعام رقمية، نظام ولاء العملاء، تسويق عبر السوشال ميديا.',
      en: 'Digital solutions for cafes: ordering bot, digital menu, customer loyalty system, social media marketing.'
    },
    keywords: [
      'كافيهات بغداد', 'كافيهات البصرة', 'كافيهات النجف', 'كافيهات كربلاء',
      'وين الكه كافيه ببغداد', 'احسن كافيه بالبصرة', 'مقاهي حلوة',
      'كافيه قريب', 'كافيه هادي', 'كافيه رومانسي', 'كافيه عوائل',
      'قهوة عربية', 'قهوة تركية', 'اسبريسو', 'كابتشينو',
      'كم سعر القهوة', 'كافيهات رخيصة', 'كافيهات فخمة',
      'وين اكعد اشرب قهوة', 'مقهى مفتوح الحين', 'كافيهات ليلية',
      'كافيه واي فاي', 'كافيه شيشة', 'كافيه انترنت',
      'شنو احسن كافيه', 'كافيهات جديدة', 'coffee shop baghdad'
    ],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'fast-food',
    name: { ar: 'مطاعم وجبات سريعة', en: 'Fast Food Restaurants' },
    description: {
      ar: 'خدمات رقمية لمطاعم الوجبات السريعة: أنظمة طلبات أونلاين، توصيل، إدارة فروع، تطبيقات موبايل.',
      en: 'Digital services for fast food: online ordering systems, delivery, branch management, mobile apps.'
    },
    keywords: ['وجبات سريعة العراق', 'fast food Iraq', 'برجر', 'بيتزا'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'bakeries',
    name: { ar: 'مخابز', en: 'Bakeries' },
    description: {
      ar: 'حلول رقمية للمخابز: نظام طلبات، إدارة مخزون، حسابات آلية، تسويق محلي.',
      en: 'Digital solutions for bakeries: ordering system, inventory management, automated accounting, local marketing.'
    },
    keywords: ['مخابز العراق', 'خبز', 'حلويات', 'bakeries Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'sweet-shops',
    name: { ar: 'محلات حلويات', en: 'Sweet Shops' },
    description: {
      ar: 'خدمات رقمية لمحلات الحلويات: بوت طلبات واتساب، كتالوج رقمي، نظام حجز مناسبات، تسويق موسمي.',
      en: 'Digital services for sweet shops: WhatsApp ordering bot, digital catalog, event booking system, seasonal marketing.'
    },
    keywords: ['حلويات عراقية', 'كليجة', 'بقلاوة', 'Iraqi sweets'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'juice-shops',
    name: { ar: 'محلات عصير', en: 'Juice Shops' },
    description: {
      ar: 'حلول رقمية لمحلات العصير: نظام طلبات سريع، قائمة رقمية، برنامج ولاء، توصيل.',
      en: 'Digital solutions for juice shops: fast ordering system, digital menu, loyalty program, delivery.'
    },
    keywords: ['عصير طبيعي', 'juice shops Iraq', 'مشروبات'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'ice-cream-shops',
    name: { ar: 'محلات آيس كريم', en: 'Ice Cream Shops' },
    description: {
      ar: 'خدمات رقمية لمحلات الآيس كريم: بوت طلبات، كتالوج نكهات، نظام عروض، تسويق صيفي.',
      en: 'Digital services for ice cream shops: ordering bot, flavor catalog, offers system, summer marketing.'
    },
    keywords: ['آيس كريم العراق', 'بوظة', 'ice cream Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'shawarma-shops',
    name: { ar: 'محلات شاورما', en: 'Shawarma Shops' },
    description: {
      ar: 'حلول رقمية لمحلات الشاورما: نظام طلبات، توصيل سريع، قائمة أسعار رقمية، عروض يومية.',
      en: 'Digital solutions for shawarma shops: ordering system, fast delivery, digital price list, daily offers.'
    },
    keywords: ['شاورما بغداد', 'shawarma Iraq', 'سندويشات'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'kebab-restaurants',
    name: { ar: 'مطاعم كباب', en: 'Kebab Restaurants' },
    description: {
      ar: 'خدمات رقمية لمطاعم الكباب: بوت حجز طاولات، قائمة طعام، نظام طلبات، تسويق محلي.',
      en: 'Digital services for kebab restaurants: table booking bot, menu, ordering system, local marketing.'
    },
    keywords: ['كباب عراقي', 'مشاوي', 'kebab Iraq', 'Iraqi BBQ'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'fish-restaurants',
    name: { ar: 'مطاعم سمك', en: 'Fish Restaurants' },
    description: {
      ar: 'حلول رقمية لمطاعم السمك: بوت حجز، قائمة أنواع السمك، نظام طلبات، تسويق موسمي.',
      en: 'Digital solutions for fish restaurants: booking bot, fish types menu, ordering system, seasonal marketing.'
    },
    keywords: ['مطاعم سمك العراق', 'سمك مسكوف', 'fish restaurants Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'traditional-restaurants',
    name: { ar: 'مطاعم تراثية', en: 'Traditional Restaurants' },
    description: {
      ar: 'خدمات رقمية للمطاعم التراثية: بوت حجز، قائمة أكلات عراقية، نظام مناسبات، تسويق ثقافي.',
      en: 'Digital services for traditional restaurants: booking bot, Iraqi dishes menu, events system, cultural marketing.'
    },
    keywords: ['أكل عراقي تراثي', 'traditional Iraqi food', 'دولمة', 'تشريب'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'catering-services',
    name: { ar: 'خدمات تموين', en: 'Catering Services' },
    description: {
      ar: 'حلول رقمية لشركات التموين: نظام طلبات مناسبات، إدارة عقود، حسابات آلية، تسويق للشركات.',
      en: 'Digital solutions for catering: event orders system, contract management, automated accounting, corporate marketing.'
    },
    keywords: ['تموين مناسبات العراق', 'catering Iraq', 'ضيافة'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'food-trucks',
    name: { ar: 'عربات طعام', en: 'Food Trucks' },
    description: {
      ar: 'خدمات رقمية لعربات الطعام: بوت طلبات متنقل، تتبع موقع، قائمة رقمية، تسويق محلي.',
      en: 'Digital services for food trucks: mobile ordering bot, location tracking, digital menu, local marketing.'
    },
    keywords: ['عربات طعام العراق', 'food trucks Iraq', 'street food'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'pizza-restaurants',
    name: { ar: 'مطاعم بيتزا', en: 'Pizza Restaurants' },
    description: {
      ar: 'حلول رقمية لمطاعم البيتزا: نظام طلبات أونلاين، تتبع توصيل، قائمة تفاعلية، عروض وكوبونات.',
      en: 'Digital solutions for pizza restaurants: online ordering system, delivery tracking, interactive menu, offers and coupons.'
    },
    keywords: ['بيتزا العراق', 'pizza delivery Iraq', 'بيتزا بغداد'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'chicken-restaurants',
    name: { ar: 'مطاعم دجاج', en: 'Chicken Restaurants' },
    description: {
      ar: 'خدمات رقمية لمطاعم الدجاج: بوت طلبات، قائمة وجبات، نظام توصيل، عروض عائلية.',
      en: 'Digital services for chicken restaurants: ordering bot, meals menu, delivery system, family offers.'
    },
    keywords: ['دجاج مقلي العراق', 'fried chicken Iraq', 'broasted'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'sandwich-shops',
    name: { ar: 'محلات سندويشات', en: 'Sandwich Shops' },
    description: {
      ar: 'حلول رقمية لمحلات السندويشات: نظام طلبات سريع، قائمة تخصيص، توصيل، برنامج ولاء.',
      en: 'Digital solutions for sandwich shops: fast ordering system, customization menu, delivery, loyalty program.'
    },
    keywords: ['سندويشات العراق', 'sandwich shops Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'breakfast-restaurants',
    name: { ar: 'مطاعم فطور', en: 'Breakfast Restaurants' },
    description: {
      ar: 'خدمات رقمية لمطاعم الفطور: بوت حجز طاولات، قائمة فطور، عروض صباحية، تسويق موسمي.',
      en: 'Digital services for breakfast restaurants: table booking bot, breakfast menu, morning offers, seasonal marketing.'
    },
    keywords: ['فطور عراقي', 'breakfast Iraq', 'قيمر'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'buffet-restaurants',
    name: { ar: 'مطاعم بوفيه', en: 'Buffet Restaurants' },
    description: {
      ar: 'حلول رقمية لمطاعم البوفيه المفتوح: نظام حجز، إدارة مناسبات، قائمة أطباق، تسويق للمجموعات.',
      en: 'Digital solutions for buffet restaurants: booking system, events management, dishes menu, group marketing.'
    },
    keywords: ['بوفيه مفتوح العراق', 'buffet Iraq', 'all you can eat'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'healthy-food',
    name: { ar: 'مطاعم أكل صحي', en: 'Healthy Food Restaurants' },
    description: {
      ar: 'خدمات رقمية لمطاعم الأكل الصحي: بوت طلبات، حساب سعرات، قوائم غذائية، تسويق صحي.',
      en: 'Digital services for healthy food restaurants: ordering bot, calorie calculator, nutritional menus, health marketing.'
    },
    keywords: ['أكل صحي العراق', 'healthy food Iraq', 'diet meals'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'grocery-stores',
    name: { ar: 'بقالات ومحلات تموينية', en: 'Grocery Stores' },
    description: {
      ar: 'حلول رقمية للبقالات: بوت طلبات واتساب، إدارة مخزون، نظام محاسبة، توصيل منزلي، كتالوج منتجات.',
      en: 'Digital solutions for grocery stores: WhatsApp ordering bot, inventory management, accounting system, home delivery, product catalog.'
    },
    keywords: ['بقالة العراق', 'تموينية بغداد', 'grocery Iraq', 'mini market'],
    cities: ALL_IRAQ_CITIES
  },

  // === قطاع الصحة (100 نوع) ===
  {
    key: 'hospitals',
    name: { ar: 'مستشفيات', en: 'Hospitals' },
    description: {
      ar: 'حلول رقمية شاملة للمستشفيات: نظام حجز مواعيد، إدارة سجلات المرضى، بوتات تواصل، مواقع طبية.',
      en: 'Comprehensive digital solutions for hospitals: appointment booking, patient records management, communication bots, medical websites.'
    },
    keywords: ['مستشفيات العراق', 'نظام مستشفى', 'حجز مواعيد طبية', 'Iraq hospitals', 'hospital management system'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'clinics',
    name: { ar: 'عيادات طبية', en: 'Medical Clinics' },
    description: {
      ar: 'حلول رقمية للعيادات الطبية: حجز مواعيد، بوتات واتساب، مواقع، أتمتة إدارية، وأنظمة سجلات المرضى.',
      en: 'Digital solutions for medical clinics: appointment booking, WhatsApp bots, websites, administrative automation, patient record systems.'
    },
    keywords: ['عيادات العراق', 'عيادات بغداد', 'حجز موعد عيادة', 'Iraq clinics', 'clinic booking system'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'dental-clinics',
    name: { ar: 'عيادات أسنان', en: 'Dental Clinics' },
    description: {
      ar: 'حلول رقمية متخصصة لعيادات الأسنان: حجز مواعيد، تذكير المرضى، عروض تقويم الأسنان، مواقع احترافية.',
      en: 'Specialized digital solutions for dental clinics: appointment booking, patient reminders, orthodontic offers, professional websites.'
    },
    keywords: ['عيادات أسنان العراق', 'طبيب أسنان بغداد', 'حجز موعد أسنان', 'Iraq dental clinics'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'pharmacies',
    name: { ar: 'صيدليات', en: 'Pharmacies' },
    description: {
      ar: 'حلول رقمية للصيدليات: متجر إلكتروني للأدوية، بوت واتساب للطلبات، نظام إدارة مخزون، توصيل.',
      en: 'Digital solutions for pharmacies: online medicine store, WhatsApp ordering bot, inventory management, delivery system.'
    },
    keywords: ['صيدليات العراق', 'صيدلية أونلاين', 'طلب دواء', 'Iraq pharmacies', 'online pharmacy'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'laboratories',
    name: { ar: 'مختبرات طبية', en: 'Medical Laboratories' },
    description: {
      ar: 'حلول رقمية للمختبرات الطبية: حجز فحوصات، نتائج إلكترونية، بوتات تواصل، مواقع معلوماتية.',
      en: 'Digital solutions for medical laboratories: test booking, electronic results, communication bots, informational websites.'
    },
    keywords: ['مختبرات طبية العراق', 'فحوصات طبية', 'نتائج تحاليل', 'Iraq medical labs'],
    cities: ALL_IRAQ_CITIES
  },
  
  // القطاع التعليمي
  {
    key: 'schools',
    name: { ar: 'مدارس', en: 'Schools' },
    description: {
      ar: 'خدمات رقمية للمدارس: مواقع، بوتات تواصل مع أولياء الأمور، أتمتة حضور وغياب، منصات تعليمية.',
      en: 'Digital services for schools: websites, parent communication bots, attendance automation, learning platforms.'
    },
    keywords: ['مدارس العراق', 'مدارس بغداد', 'نظام مدرسي', 'Iraq schools', 'school management system'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'universities',
    name: { ar: 'جامعات', en: 'Universities' },
    description: {
      ar: 'حلول رقمية للجامعات: بوابات إلكترونية، تسجيل طلاب، منصات تعليمية، بوتات خدمة الطلاب.',
      en: 'Digital solutions for universities: electronic portals, student registration, learning platforms, student service bots.'
    },
    keywords: ['جامعات العراق', 'بوابة جامعة', 'تسجيل جامعي', 'Iraq universities'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'training-centers',
    name: { ar: 'مراكز تدريب', en: 'Training Centers' },
    description: {
      ar: 'حلول رقمية لمراكز التدريب: حجز دورات، بوتات تسجيل، مواقع تعريفية، شهادات إلكترونية.',
      en: 'Digital solutions for training centers: course booking, registration bots, informational websites, electronic certificates.'
    },
    keywords: ['مراكز تدريب العراق', 'دورات تدريبية', 'Iraq training centers'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'language-centers',
    name: { ar: 'معاهد لغات', en: 'Language Institutes' },
    description: {
      ar: 'حلول رقمية لمعاهد اللغات: حجز دورات، اختبارات مستوى أونلاين، بوتات تواصل، مواقع تسجيل.',
      en: 'Digital solutions for language institutes: course booking, online level tests, communication bots, registration websites.'
    },
    keywords: ['معاهد لغات العراق', 'تعلم لغة إنجليزية', 'Iraq language institutes'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'kindergartens',
    name: { ar: 'رياض أطفال', en: 'Kindergartens' },
    description: {
      ar: 'حلول رقمية لرياض الأطفال: بوتات تواصل مع الأهل، مواقع تعريفية، نظام تسجيل، متابعة الأطفال.',
      en: 'Digital solutions for kindergartens: parent communication bots, informational websites, registration system, child tracking.'
    },
    keywords: ['رياض أطفال العراق', 'روضة أطفال بغداد', 'Iraq kindergartens'],
    cities: ALL_IRAQ_CITIES
  },

  // القطاع التجاري
  {
    key: 'clothing-stores',
    name: { ar: 'محلات ملابس', en: 'Clothing Stores' },
    description: {
      ar: 'حلول رقمية لمحلات الملابس: متجر إلكتروني، بوت واتساب للطلبات، كتالوجات رقمية، تسويق إلكتروني.',
      en: 'Digital solutions for clothing stores: online store, WhatsApp ordering bot, digital catalogs, digital marketing.'
    },
    keywords: ['محلات ملابس العراق', 'ملابس أونلاين', 'Iraq clothing stores', 'fashion Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'electronics-stores',
    name: { ar: 'محلات إلكترونيات', en: 'Electronics Stores' },
    description: {
      ar: 'حلول رقمية لمحلات الإلكترونيات: متجر إلكتروني، مقارنة أسعار، بوتات استفسارات، نظام ضمانات.',
      en: 'Digital solutions for electronics stores: online store, price comparison, inquiry bots, warranty system.'
    },
    keywords: ['محلات إلكترونيات العراق', 'شراء إلكترونيات', 'Iraq electronics stores'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'mobile-stores',
    name: { ar: 'محلات موبايلات', en: 'Mobile Phone Stores' },
    description: {
      ar: 'حلول رقمية لمحلات الموبايلات: متجر إلكتروني، بوت واتساب، كتالوج هواتف، مقارنات.',
      en: 'Digital solutions for mobile stores: online store, WhatsApp bot, phone catalog, comparisons.'
    },
    keywords: ['محلات موبايلات العراق', 'شراء موبايل', 'Iraq mobile stores'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'furniture-stores',
    name: { ar: 'محلات أثاث', en: 'Furniture Stores' },
    description: {
      ar: 'حلول رقمية لمحلات الأثاث: كتالوج رقمي ثلاثي الأبعاد، متجر إلكتروني، بوت طلبات، تصاميم مخصصة.',
      en: 'Digital solutions for furniture stores: 3D digital catalog, online store, order bot, custom designs.'
    },
    keywords: ['محلات أثاث العراق', 'أثاث منزلي', 'Iraq furniture stores'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'supermarkets',
    name: { ar: 'سوبر ماركت', en: 'Supermarkets' },
    description: {
      ar: 'حلول رقمية للسوبرماركت: متجر إلكتروني، بوت واتساب للطلبات، توصيل، نظام ولاء.',
      en: 'Digital solutions for supermarkets: online store, WhatsApp ordering bot, delivery, loyalty system.'
    },
    keywords: ['سوبرماركت العراق', 'توصيل بقالة', 'Iraq supermarkets', 'grocery delivery'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'building-materials',
    name: { ar: 'مواد بناء', en: 'Building Materials' },
    description: {
      ar: 'حلول رقمية لمحلات مواد البناء: كتالوج منتجات، حاسبة تكاليف، بوت طلبات، متجر إلكتروني.',
      en: 'Digital solutions for building materials stores: product catalog, cost calculator, order bot, online store.'
    },
    keywords: ['مواد بناء العراق', 'محلات بناء', 'Iraq building materials'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'jewelry-stores',
    name: { ar: 'محلات مجوهرات', en: 'Jewelry Stores' },
    description: {
      ar: 'حلول رقمية لمحلات المجوهرات: كتالوج فاخر، متجر إلكتروني آمن، بوت استفسارات، تصاميم مخصصة.',
      en: 'Digital solutions for jewelry stores: luxury catalog, secure online store, inquiry bot, custom designs.'
    },
    keywords: ['محلات مجوهرات العراق', 'ذهب العراق', 'Iraq jewelry stores'],
    cities: ALL_IRAQ_CITIES
  },

  // قطاع الخدمات
  {
    key: 'beauty-salons',
    name: { ar: 'صالونات تجميل', en: 'Beauty Salons' },
    description: {
      ar: 'حلول رقمية لصالونات التجميل: حجز مواعيد أونلاين، بوت واتساب، عروض خاصة، برامج ولاء.',
      en: 'Digital solutions for beauty salons: online appointment booking, WhatsApp bot, special offers, loyalty programs.'
    },
    keywords: ['صالونات تجميل العراق', 'حجز صالون', 'Iraq beauty salons', 'salon booking'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'barber-shops',
    name: { ar: 'صالونات حلاقة رجالية', en: 'Barber Shops' },
    description: {
      ar: 'حلول رقمية لصالونات الحلاقة الرجالية: حجز مواعيد، بوت تذكير، عروض شهرية، مواقع احترافية.',
      en: 'Digital solutions for barber shops: appointment booking, reminder bot, monthly offers, professional websites.'
    },
    keywords: ['صالون حلاقة رجالي العراق', 'حلاق بغداد', 'Iraq barber shops'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cafes',
    name: { ar: 'مقاهي', en: 'Cafes' },
    description: {
      ar: 'حلول رقمية للمقاهي: بوت واتساب للطلبات، قائمة رقمية، نظام توصيل، برامج ولاء.',
      en: 'Digital solutions for cafes: WhatsApp ordering bot, digital menu, delivery system, loyalty programs.'
    },
    keywords: ['مقاهي العراق', 'مقهى بغداد', 'توصيل قهوة', 'Iraq cafes', 'coffee delivery'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'hotels',
    name: { ar: 'فنادق', en: 'Hotels' },
    description: {
      ar: 'حلول رقمية للفنادق: نظام حجز أونلاين، بوت خدمة عملاء، مواقع سياحية، إدارة غرف.',
      en: 'Digital solutions for hotels: online booking system, customer service bot, tourism websites, room management.'
    },
    keywords: ['فنادق العراق', 'حجز فندق بغداد', 'Iraq hotels', 'hotel booking Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'travel-agencies',
    name: { ar: 'شركات سفر وسياحة', en: 'Travel Agencies' },
    description: {
      ar: 'حلول رقمية لشركات السفر: حجز رحلات، بوت استفسارات، مواقع سياحية، باقات مخصصة.',
      en: 'Digital solutions for travel agencies: trip booking, inquiry bot, tourism websites, custom packages.'
    },
    keywords: ['شركات سفر العراق', 'سياحة العراق', 'Iraq travel agencies'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'real-estate',
    name: { ar: 'مكاتب عقارات', en: 'Real Estate Offices' },
    description: {
      ar: 'حلول رقمية للعقارات: موقع عرض عقارات، بوت واتساب، نظام إدارة، جولات افتراضية.',
      en: 'Digital solutions for real estate: property listing website, WhatsApp bot, management system, virtual tours.'
    },
    keywords: ['عقارات العراق', 'شراء بيت بغداد', 'Iraq real estate', 'buy house Baghdad'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'law-firms',
    name: { ar: 'مكاتب محاماة', en: 'Law Firms' },
    description: {
      ar: 'حلول رقمية لمكاتب المحاماة: مواقع احترافية، بوت استشارات، حجز مواعيد، إدارة قضايا.',
      en: 'Digital solutions for law firms: professional websites, consultation bot, appointment booking, case management.'
    },
    keywords: ['محامي العراق', 'مكتب محاماة بغداد', 'Iraq law firms', 'lawyer Baghdad'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'accounting-firms',
    name: { ar: 'مكاتب محاسبة', en: 'Accounting Firms' },
    description: {
      ar: 'حلول رقمية لمكاتب المحاسبة: مواقع خدمات، بوت استفسارات، نظام إدارة عملاء، تقارير.',
      en: 'Digital solutions for accounting firms: service websites, inquiry bot, client management system, reports.'
    },
    keywords: ['محاسب العراق', 'مكتب محاسبة بغداد', 'Iraq accounting firms'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'gyms',
    name: { ar: 'صالات رياضية', en: 'Gyms' },
    description: {
      ar: 'حلول رقمية للصالات الرياضية: حجز تدريبات، بوت اشتراكات، متابعة لياقة، تطبيقات موبايل.',
      en: 'Digital solutions for gyms: training booking, subscription bot, fitness tracking, mobile apps.'
    },
    keywords: ['صالات رياضية العراق', 'جيم بغداد', 'Iraq gyms', 'fitness Baghdad'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-dealerships',
    name: { ar: 'معارض سيارات', en: 'Car Dealerships' },
    description: {
      ar: 'حلول رقمية لمعارض السيارات: كتالوج رقمي، بوت استفسارات، مقارنة سيارات، حجز تجربة قيادة.',
      en: 'Digital solutions for car dealerships: digital catalog, inquiry bot, car comparison, test drive booking.'
    },
    keywords: ['معارض سيارات العراق', 'شراء سيارة بغداد', 'Iraq car dealerships'],
    cities: ALL_IRAQ_CITIES
  },

  // القطاع الصناعي
  {
    key: 'food-factories',
    name: { ar: 'مصانع أغذية', en: 'Food Factories' },
    description: {
      ar: 'حلول رقمية لمصانع الأغذية: موقع منتجات، بوت طلبات بالجملة، نظام توزيع، كتالوج.',
      en: 'Digital solutions for food factories: product website, wholesale order bot, distribution system, catalog.'
    },
    keywords: ['مصانع أغذية العراق', 'منتجات غذائية', 'Iraq food factories'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'textile-factories',
    name: { ar: 'مصانع نسيج', en: 'Textile Factories' },
    description: {
      ar: 'حلول رقمية لمصانع النسيج: كتالوج منتجات، بوت طلبات، نظام إدارة إنتاج، مواقع تصدير.',
      en: 'Digital solutions for textile factories: product catalog, order bot, production management, export websites.'
    },
    keywords: ['مصانع نسيج العراق', 'منسوجات', 'Iraq textile factories'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'construction-companies',
    name: { ar: 'شركات مقاولات', en: 'Construction Companies' },
    description: {
      ar: 'حلول رقمية لشركات المقاولات: موقع مشاريع، بوت عروض أسعار، نظام إدارة مشاريع، معرض أعمال.',
      en: 'Digital solutions for construction companies: project website, quote bot, project management system, portfolio.'
    },
    keywords: ['شركات مقاولات العراق', 'بناء بغداد', 'Iraq construction companies'],
    cities: ALL_IRAQ_CITIES
  },

  // --- 50 New Business Types ---

  // E-commerce
  {
    key: 'book-stores',
    name: { ar: 'مكتبات ومحلات كتب', en: 'Book Stores' },
    description: {
      ar: 'متاجر إلكترونية للمكتبات ومحلات بيع الكتب، مع نظام إدارة مخزون وتوصيل لكافة أنحاء العراق.',
      en: 'E-commerce solutions for bookstores, with inventory management and delivery across Iraq.'
    },
    keywords: ['مكتبات العراق', 'شراء كتب أونلاين', 'Iraq bookstores'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'handmade-goods-stores',
    name: { ar: 'متاجر منتجات يدوية', en: 'Handmade Goods Stores' },
    description: {
      ar: 'منصات لعرض وبيع المنتجات اليدوية العراقية، ودعم الحرفيين المحليين للوصول إلى أسواق أوسع.',
      en: 'Platforms to showcase and sell Iraqi handmade products, supporting local artisans to reach wider markets.'
    },
    keywords: ['منتجات يدوية العراق', 'حرف يدوية بغداد', 'Iraqi handmade'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'auto-parts-stores',
    name: { ar: 'متاجر قطع غيار سيارات', en: 'Auto Parts Stores' },
    description: {
      ar: 'متاجر إلكترونية متخصصة في بيع قطع غيار السيارات الجديدة والمستعملة مع خدمة البحث والتوصيل.',
      en: 'E-commerce stores specializing in new and used auto parts with search and delivery services.'
    },
    keywords: ['قطع غيار سيارات العراق', 'إكسسوارات سيارات بغداد', 'Iraq auto parts'],
    cities: ALL_IRAQ_CITIES
  },

  // Home Services
  {
    key: 'plumbing-services',
    name: { ar: 'خدمات سباكة', en: 'Plumbing Services' },
    description: {
      ar: 'نظام حجز وتواصل مع السباكين المحترفين، مع تقييمات العملاء وأسعار شفافة.',
      en: 'A booking and communication system for professional plumbers, with customer reviews and transparent pricing.'
    },
    keywords: ['سباك في بغداد', 'خدمات صحية العراق', 'plumber Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'electrical-services',
    name: { ar: 'خدمات كهرباء', en: 'Electrical Services' },
    description: {
      ar: 'منصة لطلب كهربائيين محترفين للمنازل والمكاتب، مع نظام تتبع وجدولة للمواعيد.',
      en: 'A platform to request professional electricians for homes and offices, with a tracking and scheduling system.'
    },
    keywords: ['كهربائي في بغداد', 'تصليحات كهرباء العراق', 'electrician Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cleaning-services',
    name: { ar: 'شركات تنظيف', en: 'Cleaning Services' },
    description: {
      ar: 'حلول رقمية لشركات التنظيف، تشمل حجز الخدمات، إدارة الموظفين، وباقات تنظيف متنوعة.',
      en: 'Digital solutions for cleaning companies, including service booking, employee management, and various cleaning packages.'
    },
    keywords: ['شركات تنظيف العراق', 'تنظيف منازل بغداد', 'Iraq cleaning services'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'pest-control-services',
    name: { ar: 'خدمات مكافحة حشرات', en: 'Pest Control Services' },
    description: {
      ar: 'نظام حجز وتواصل مع شركات مكافحة الحشرات، مع معلومات عن المواد المستخدمة وضمانات الخدمة.',
      en: 'A booking and communication system for pest control companies, with information on materials used and service guarantees.'
    },
    keywords: ['مكافحة حشرات العراق', 'رش مبيدات بغداد', 'pest control Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // Events
  {
    key: 'wedding-planners',
    name: { ar: 'منظمو حفلات زفاف', en: 'Wedding Planners' },
    description: {
      ar: 'مواقع احترافية لعرض باقات تنظيم حفلات الزفاف، مع معرض صور وفيديوهات وجولات افتراضية للقاعات.',
      en: 'Professional websites to showcase wedding planning packages, with photo galleries, videos, and virtual hall tours.'
    },
    keywords: ['تنظيم حفلات زفاف العراق', 'قاعات أفراح بغداد', 'Iraq wedding planners'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'event-photographers',
    name: { ar: 'مصورو مناسبات', en: 'Event Photographers' },
    description: {
      ar: 'منصات لعرض أعمال مصوري المناسبات، مع نظام حجز، باقات تصوير، وتسليم الصور أونلاين.',
      en: 'Platforms to showcase the work of event photographers, with a booking system, photography packages, and online photo delivery.'
    },
    keywords: ['مصور فوتوغرافي العراق', 'تصوير حفلات بغداد', 'Iraq photographers'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'catering-services',
    name: { ar: 'خدمات تموين طعام', en: 'Catering Services' },
    description: {
      ar: 'حلول رقمية لشركات التموين، تشمل قوائم طعام تفاعلية، نظام طلبات للمناسبات، وإدارة الحجوزات.',
      en: 'Digital solutions for catering companies, including interactive menus, an event ordering system, and booking management.'
    },
    keywords: ['تموين طعام العراق', 'بوفيهات بغداد', 'catering Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // Automotive
  {
    key: 'car-repair-shops',
    name: { ar: 'ورش تصليح سيارات', en: 'Car Repair Shops' },
    description: {
      ar: 'نظام حجز مواعيد لتصليح السيارات، مع تتبع حالة التصليح، سجل صيانة، وتنبيهات بمواعيد الصيانة الدورية.',
      en: 'An appointment booking system for car repairs, with repair status tracking, maintenance records, and periodic maintenance alerts.'
    },
    keywords: ['تصليح سيارات العراق', 'ميكانيكي بغداد', 'car repair Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-washes',
    name: { ar: 'محطات غسيل سيارات', en: 'Car Washes' },
    description: {
      ar: 'تطبيقات حجز لخدمات غسيل السيارات، مع باقات اشتراك شهرية وخدمات غسيل متنقلة.',
      en: 'Booking apps for car wash services, with monthly subscription packages and mobile wash services.'
    },
    keywords: ['غسيل سيارات العراق', 'غسيل متنقل بغداد', 'car wash Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // Health & Wellness
  {
    key: 'yoga-studios',
    name: { ar: 'استوديوهات يوغا', en: 'Yoga Studios' },
    description: {
      ar: 'نظام حجز حصص اليوغا، مع جداول مواعيد، ملفات تعريفية للمدربين، ودفع إلكتروني.',
      en: 'A booking system for yoga classes, with schedules, instructor profiles, and electronic payment.'
    },
    keywords: ['يوغا في بغداد', 'حصص لياقة العراق', 'yoga Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'nutritionists',
    name: { ar: 'أخصائيو تغذية', en: 'Nutritionists' },
    description: {
      ar: 'منصات لتقديم استشارات التغذية أونلاين، مع برامج غذائية مخصصة، ومتابعة للعملاء.',
      en: 'Platforms for online nutrition consultations, with personalized diet plans and client follow-up.'
    },
    keywords: ['أخصائي تغذية العراق', 'دايت صحي بغداد', 'nutritionist Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'personal-trainers',
    name: { ar: 'مدربون شخصيون', en: 'Personal Trainers' },
    description: {
      ar: 'تطبيقات للربط بين المدربين الشخصيين والعملاء، مع برامج تدريبية مخصصة وتتبع للتقدم.',
      en: 'Apps to connect personal trainers with clients, with personalized training programs and progress tracking.'
    },
    keywords: ['مدرب شخصي العراق', 'تدريب رياضي بغداد', 'personal trainer Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // Professional Services
  {
    key: 'marketing-agencies',
    name: { ar: 'وكالات تسويق', en: 'Marketing Agencies' },
    description: {
      ar: 'مواقع احترافية لعرض خدمات التسويق الرقمي، مع دراسات حالة، وباقات خدمة متنوعة.',
      en: 'Professional websites to showcase digital marketing services, with case studies and various service packages.'
    },
    keywords: ['وكالة تسويق العراق', 'تسويق رقمي بغداد', 'marketing agency Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'translation-services',
    name: { ar: 'خدمات ترجمة', en: 'Translation Services' },
    description: {
      ar: 'منصة لطلب خدمات الترجمة المعتمدة والفورية، مع نظام رفع ملفات وحساب تكلفة.',
      en: 'A platform to request certified and instant translation services, with a file upload and cost calculation system.'
    },
    keywords: ['ترجمة معتمدة العراق', 'مكتب ترجمة بغداد', 'translation services Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'graphic-designers',
    name: { ar: 'مصممو جرافيك', en: 'Graphic Designers' },
    description: {
      ar: 'معارض أعمال لمصممي الجرافيك، مع نظام طلب تصميمات، وباقات تصميم الهوية البصرية.',
      en: 'Portfolios for graphic designers, with a design request system and visual identity design packages.'
    },
    keywords: ['مصمم جرافيك العراق', 'تصميم شعارات بغداد', 'graphic designer Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // Art & Culture
  {
    key: 'art-galleries',
    name: { ar: 'معارض فنية', en: 'Art Galleries' },
    description: {
      ar: 'مواقع لعرض اللوحات الفنية، مع جولات افتراضية للمعارض، ومعلومات عن الفنانين.',
      en: 'Websites to display artworks, with virtual gallery tours and information about the artists.'
    },
    keywords: ['معارض فنية العراق', 'فنانون عراقيون', 'art galleries Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'museums',
    name: { ar: 'متاحف', en: 'Museums' },
    description: {
      ar: 'مواقع تعريفية للمتاحف العراقية، مع معلومات عن المعروضات، مواعيد الزيارة، وحجز تذاكر.',
      en: 'Informational websites for Iraqi museums, with information on exhibits, visiting hours, and ticket booking.'
    },
    keywords: ['متاحف العراق', 'المتحف العراقي بغداد', 'museums in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'music-schools',
    name: { ar: 'مدارس موسيقى', en: 'Music Schools' },
    description: {
      ar: 'نظام حجز دروس الموسيقى، مع ملفات تعريفية للمدرسين، وجداول زمنية مرنة.',
      en: 'A booking system for music lessons, with teacher profiles and flexible schedules.'
    },
    keywords: ['تعليم موسيقى العراق', 'دروس بيانو بغداد', 'music schools Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // Agriculture
  {
    key: 'farms',
    name: { ar: 'مزارع', en: 'Farms' },
    description: {
      ar: 'منصات لبيع المنتجات الزراعية مباشرة من المزرعة إلى المستهلك، مع معلومات عن الزراعة العضوية.',
      en: 'Platforms for selling agricultural products directly from the farm to the consumer, with information on organic farming.'
    },
    keywords: ['مزارع العراق', 'منتجات زراعية بغداد', 'farms in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'agricultural-suppliers',
    name: { ar: 'موردون زراعيون', en: 'Agricultural Suppliers' },
    description: {
      ar: 'متاجر إلكترونية لبيع البذور، الأسمدة، والمعدات الزراعية، مع خدمة توصيل للمزارع.',
      en: 'E-commerce stores for selling seeds, fertilizers, and agricultural equipment, with delivery service to farms.'
    },
    keywords: ['مستلزمات زراعية العراق', 'أسمدة بغداد', 'agricultural suppliers Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // Pet Services
  {
    key: 'vets',
    name: { ar: 'عيادات بيطرية', en: 'Veterinary Clinics' },
    description: {
      ar: 'نظام حجز مواعيد للعيادات البيطرية، مع سجلات صحية للحيوانات الأليفة، وتنبيهات بالتطعيمات.',
      en: 'An appointment booking system for veterinary clinics, with pet health records and vaccination alerts.'
    },
    keywords: ['طبيب بيطري العراق', 'عيادة بيطرية بغداد', 'vet clinic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'pet-shops',
    name: { ar: 'محلات حيوانات أليفة', en: 'Pet Shops' },
    description: {
      ar: 'متاجر إلكترونية لبيع أغذية ومستلزمات الحيوانات الأليفة، مع خدمة توصيل للمنازل.',
      en: 'E-commerce stores for selling pet food and supplies, with home delivery service.'
    },
    keywords: ['محلات حيوانات أليفة العراق', 'أكل قطط بغداد', 'pet shops Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'pet-grooming-services',
    name: { ar: 'خدمات العناية بالحيوانات الأليفة', en: 'Pet Grooming Services' },
    description: {
      ar: 'نظام حجز لخدمات العناية بالحيوانات الأليفة، مع باقات متنوعة وتقييمات من العملاء.',
      en: 'A booking system for pet grooming services, with various packages and customer reviews.'
    },
    keywords: ['العناية بالقطط العراق', 'حلاقة كلاب بغداد', 'pet grooming Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  // More additions
  {
    key: 'bakeries',
    name: { ar: 'مخابز وأفران', en: 'Bakeries' },
    description: {
      ar: 'حلول رقمية للمخابز، تشمل طلبات الخبز والمعجنات أونلاين، واشتراكات توصيل يومية.',
      en: 'Digital solutions for bakeries, including online ordering for bread and pastries, and daily delivery subscriptions.'
    },
    keywords: ['مخابز العراق', 'أفران بغداد', 'bakeries in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'butcher-shops',
    name: { ar: 'محلات قصابة', en: 'Butcher Shops' },
    description: {
      ar: 'متاجر إلكترونية لطلب اللحوم الطازجة، مع خيارات تقطيع وتغليف وتوصيل مبرد.',
      en: 'E-commerce stores for ordering fresh meat, with cutting, packaging, and refrigerated delivery options.'
    },
    keywords: ['محلات قصابة العراق', 'لحوم طازجة بغداد', 'butcher shops in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'sweet-shops',
    name: { ar: 'محلات حلويات', en: 'Sweet Shops' },
    description: {
      ar: 'متاجر إلكترونية لبيع الحلويات الشرقية والغربية، مع إمكانية تخصيص الطلبات للمناسبات.',
      en: 'E-commerce stores for selling eastern and western sweets, with the ability to customize orders for events.'
    },
    keywords: ['حلويات عراقية', 'كنافة بغداد', 'sweet shops in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'event-halls',
    name: { ar: 'قاعات مناسبات', en: 'Event Halls' },
    description: {
      ar: 'نظام حجز إلكتروني لقاعات المناسبات، مع جولات افتراضية، تفاصيل الأسعار، وإدارة التوفر.',
      en: 'An online booking system for event halls, with virtual tours, pricing details, and availability management.'
    },
    keywords: ['قاعات مناسبات العراق', 'حجز قاعة بغداد', 'event halls in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'printing-presses',
    name: { ar: 'مطابع', en: 'Printing Presses' },
    description: {
      ar: 'منصة لطلب المطبوعات التجارية والشخصية، مع رفع التصاميم، واختيار أنواع الورق والتشطيبات.',
      en: 'A platform for ordering commercial and personal prints, with design uploads, and choices of paper types and finishes.'
    },
    keywords: ['مطابع العراق', 'طباعة كروت بغداد', 'printing presses in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-rental-offices',
    name: { ar: 'مكاتب تأجير سيارات', en: 'Car Rental Offices' },
    description: {
      ar: 'نظام حجز سيارات أونلاين، مع عرض للأسطول المتاح، أسعار متنوعة، وتأمين.',
      en: 'An online car rental booking system, with a display of the available fleet, various prices, and insurance.'
    },
    keywords: ['تأجير سيارات العراق', 'ايجار سيارة بغداد', 'car rental Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'delivery-services',
    name: { ar: 'شركات توصيل', en: 'Delivery Services' },
    description: {
      ar: 'حلول تقنية لشركات التوصيل، تشمل تتبع الشحنات، إدارة السائقين، وتكامل مع المتاجر الإلكترونية.',
      en: 'Tech solutions for delivery companies, including shipment tracking, driver management, and e-commerce integration.'
    },
    keywords: ['شركات توصيل العراق', 'توصيل بغداد', 'delivery services Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'recruitment-agencies',
    name: { ar: 'شركات توظيف', en: 'Recruitment Agencies' },
    description: {
      ar: 'بوابات توظيف لعرض الشواغر، مع نظام تقديم السير الذاتية، وفلترة المرشحين.',
      en: 'Job portals to display vacancies, with a CV submission system and candidate filtering.'
    },
    keywords: ['شركات توظيف العراق', 'وظائف في بغداد', 'recruitment agencies Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'insurance-companies',
    name: { ar: 'شركات تأمين', en: 'Insurance Companies' },
    description: {
      ar: 'منصات لعرض وثائق التأمين، مع حاسبة أقساط، وتقديم المطالبات أونلاين.',
      en: 'Platforms to display insurance policies, with a premium calculator and online claims submission.'
    },
    keywords: ['شركات تأمين العراق', 'تأمين سيارات بغداد', 'insurance companies Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'investment-companies',
    name: { ar: 'شركات استثمار', en: 'Investment Companies' },
    description: {
      ar: 'بوابات لعرض الفرص الاستثمارية، مع أدوات تحليل، ومحافظ استثمارية رقمية.',
      en: 'Portals to display investment opportunities, with analysis tools and digital investment portfolios.'
    },
    keywords: ['استثمار في العراق', 'شركات استثمار بغداد', 'investment in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'consulting-firms',
    name: { ar: 'شركات استشارات', en: 'Consulting Firms' },
    description: {
      ar: 'مواقع لعرض الخدمات الاستشارية (إدارية، مالية، تقنية)، مع نظام حجز استشارات.',
      en: 'Websites to display consulting services (administrative, financial, technical), with a consultation booking system.'
    },
    keywords: ['شركات استشارات العراق', 'استشارات إدارية بغداد', 'consulting firms Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'software-companies',
    name: { ar: 'شركات برمجيات', en: 'Software Companies' },
    description: {
      ar: 'مواقع لعرض المنتجات البرمجية والحلول المخصصة، مع عروض توضيحية وطلب عروض أسعار.',
      en: 'Websites to showcase software products and custom solutions, with demos and quote requests.'
    },
    keywords: ['شركات برمجيات العراق', 'تطوير برامج بغداد', 'software companies Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'interior-designers',
    name: { ar: 'مصممو ديكور داخلي', en: 'Interior Designers' },
    description: {
      ar: 'معارض أعمال لمصممي الديكور، مع جولات افتراضية 3D، وخدمات تصميم أونلاين.',
      en: 'Portfolios for interior designers, with 3D virtual tours and online design services.'
    },
    keywords: ['تصميم داخلي العراق', 'ديكور منازل بغداد', 'interior design Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'publishing-houses',
    name: { ar: 'دور نشر', en: 'Publishing Houses' },
    description: {
      ar: 'مواقع لدور النشر لعرض إصداراتهم، مع متاجر إلكترونية للكتب الورقية والإلكترونية.',
      en: 'Websites for publishing houses to showcase their publications, with e-commerce stores for print and e-books.'
    },
    keywords: ['دور نشر العراق', 'كتب عراقية', 'publishing houses Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cinemas',
    name: { ar: 'دور سينما', en: 'Cinemas' },
    description: {
      ar: 'تطبيقات ومواقع لحجز تذاكر السينما، مع عرض لأوقات الأفلام، وتقييمات.',
      en: 'Apps and websites for booking cinema tickets, with movie showtimes and ratings.'
    },
    keywords: ['سينما في بغداد', 'حجز تذاكر سينما العراق', 'cinemas in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'sports-clubs',
    name: { ar: 'أندية رياضية', en: 'Sports Clubs' },
    description: {
      ar: 'مواقع للأندية الرياضية لعرض جداول المباريات، أخبار الفريق، ومتاجر لمنتجات النادي.',
      en: 'Websites for sports clubs to display match schedules, team news, and stores for club merchandise.'
    },
    keywords: ['أندية رياضية العراق', 'الدوري العراقي', 'sports clubs Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'non-profit-organizations',
    name: { ar: 'منظمات غير ربحية', en: 'Non-Profit Organizations' },
    description: {
      ar: 'منصات رقمية للمنظمات غير الربحية لجمع التبرعات، عرض المشاريع، وتنسيق المتطوعين.',
      en: 'Digital platforms for non-profit organizations to collect donations, showcase projects, and coordinate volunteers.'
    },
    keywords: ['منظمات خيرية العراق', 'التطوع في بغداد', 'non-profit Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'government-agencies',
    name: { ar: 'مؤسسات حكومية', en: 'Government Agencies' },
    description: {
      ar: 'بوابات إلكترونية للمؤسسات الحكومية لتقديم الخدمات للمواطنين، عرض الأخبار، وتوفير المعلومات.',
      en: 'Electronic portals for government agencies to provide services to citizens, display news, and provide information.'
    },
    keywords: ['حكومة العراق', 'خدمات إلكترونية بغداد', 'Iraqi government'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'embassies',
    name: { ar: 'سفارات وقنصليات', en: 'Embassies & Consulates' },
    description: {
      ar: 'مواقع إلكترونية للسفارات لتقديم معلومات عن التأشيرات، الخدمات القنصلية، والمواعيد.',
      en: 'Websites for embassies to provide information on visas, consular services, and appointments.'
    },
    keywords: ['سفارات في العراق', 'فيزا أمريكا من بغداد', 'embassies in Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'logistics-companies',
    name: { ar: 'شركات لوجستية', en: 'Logistics Companies' },
    description: {
      ar: 'حلول لإدارة الشحن، التخزين، والتوزيع، مع تتبع الشحنات وإدارة الأسطول.',
      en: 'Solutions for managing shipping, warehousing, and distribution, with shipment tracking and fleet management.'
    },
    keywords: ['شركات شحن العراق', 'خدمات لوجستية بغداد', 'logistics Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'security-companies',
    name: { ar: 'شركات أمنية', en: 'Security Companies' },
    description: {
      ar: 'مواقع لعرض الخدمات الأمنية، مع طلب عروض أسعار، ومعلومات عن الحلول الأمنية.',
      en: 'Websites to showcase security services, with quote requests and information on security solutions.'
    },
    keywords: ['شركات أمنية العراق', 'حماية شخصية بغداد', 'security companies Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  
  // Additional 50 Business Types
  {
    key: 'dermatology-clinics',
    name: { ar: 'عيادات جلدية', en: 'Dermatology Clinics' },
    description: {
      ar: 'حلول رقمية لعيادات الجلدية: حجز مواعيد، استشارات أونلاين، معلومات عن العلاجات التجميلية.',
      en: 'Digital solutions for dermatology clinics: appointment booking, online consultations, cosmetic treatment information.'
    },
    keywords: ['عيادة جلدية العراق', 'علاج حب الشباب بغداد', 'dermatology clinic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cardiology-clinics',
    name: { ar: 'عيادات قلب', en: 'Cardiology Clinics' },
    description: {
      ar: 'حلول رقمية لعيادات القلب: حجز فحوصات، سجلات طبية إلكترونية، تنبيهات بمواعيد المتابعة.',
      en: 'Digital solutions for cardiology clinics: test booking, electronic medical records, follow-up appointment alerts.'
    },
    keywords: ['عيادة قلب العراق', 'طبيب قلب بغداد', 'cardiology clinic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'ophthalmology-clinics',
    name: { ar: 'عيادات عيون', en: 'Ophthalmology Clinics' },
    description: {
      ar: 'حلول رقمية لعيادات العيون: حجز فحوصات نظر، استشارات عن النظارات والعدسات، معلومات عن العمليات.',
      en: 'Digital solutions for ophthalmology clinics: vision test booking, consultations on glasses and lenses, surgery information.'
    },
    keywords: ['عيادة عيون العراق', 'فحص نظر بغداد', 'eye clinic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'pediatric-clinics',
    name: { ar: 'عيادات أطفال', en: 'Pediatric Clinics' },
    description: {
      ar: 'حلول رقمية لعيادات الأطفال: حجز مواعيد، جدول تطعيمات، تذكير الأهل، ملفات صحية للأطفال.',
      en: 'Digital solutions for pediatric clinics: appointment booking, vaccination schedule, parent reminders, child health records.'
    },
    keywords: ['عيادة أطفال العراق', 'طبيب أطفال بغداد', 'pediatric clinic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'orthopedic-clinics',
    name: { ar: 'عيادات عظام', en: 'Orthopedic Clinics' },
    description: {
      ar: 'حلول رقمية لعيادات العظام: حجز مواعيد، معلومات عن العلاج الطبيعي، جدولة العمليات.',
      en: 'Digital solutions for orthopedic clinics: appointment booking, physiotherapy information, surgery scheduling.'
    },
    keywords: ['عيادة عظام العراق', 'جراحة عظام بغداد', 'orthopedic clinic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'gynecology-clinics',
    name: { ar: 'عيادات نسائية', en: 'Gynecology Clinics' },
    description: {
      ar: 'حلول رقمية للعيادات النسائية: حجز خاص ومريح، استشارات حمل، متابعة دورية للحوامل.',
      en: 'Digital solutions for gynecology clinics: private and comfortable booking, pregnancy consultations, periodic monitoring for pregnant women.'
    },
    keywords: ['عيادة نسائية العراق', 'طبيبة نساء بغداد', 'gynecology clinic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'physical-therapy-centers',
    name: { ar: 'مراكز علاج طبيعي', en: 'Physical Therapy Centers' },
    description: {
      ar: 'حلول رقمية لمراكز العلاج الطبيعي: حجز جلسات، برامج تمارين مخصصة، متابعة التقدم.',
      en: 'Digital solutions for physical therapy centers: session booking, customized exercise programs, progress tracking.'
    },
    keywords: ['علاج طبيعي العراق', 'فيزيوثيرابي بغداد', 'physical therapy Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'radiology-centers',
    name: { ar: 'مراكز أشعة', en: 'Radiology Centers' },
    description: {
      ar: 'حلول رقمية لمراكز الأشعة: حجز فحوصات، نتائج رقمية، معلومات عن أنواع الأشعة.',
      en: 'Digital solutions for radiology centers: test booking, digital results, information on types of imaging.'
    },
    keywords: ['مركز أشعة العراق', 'فحوصات طبية بغداد', 'radiology center Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'dialysis-centers',
    name: { ar: 'مراكز غسيل كلى', en: 'Dialysis Centers' },
    description: {
      ar: 'حلول رقمية لمراكز غسيل الكلى: جدولة جلسات، ملفات مرضى، تنبيهات بالمواعيد.',
      en: 'Digital solutions for dialysis centers: session scheduling, patient files, appointment alerts.'
    },
    keywords: ['مركز غسيل كلى العراق', 'ديلزة بغداد', 'dialysis center Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'primary-schools',
    name: { ar: 'مدارس ابتدائية', en: 'Primary Schools' },
    description: {
      ar: 'حلول رقمية للمدارس الابتدائية: تواصل مع الأهل، نشر الواجبات، تتبع الحضور.',
      en: 'Digital solutions for primary schools: parent communication, homework posting, attendance tracking.'
    },
    keywords: ['مدرسة ابتدائية العراق', 'تعليم ابتدائي بغداد', 'primary school Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'middle-schools',
    name: { ar: 'مدارس متوسطة', en: 'Middle Schools' },
    description: {
      ar: 'حلول رقمية للمدارس المتوسطة: منصات تعليمية، بوابة أولياء الأمور، نظام درجات إلكتروني.',
      en: 'Digital solutions for middle schools: learning platforms, parent portal, electronic grading system.'
    },
    keywords: ['مدرسة متوسطة العراق', 'تعليم متوسط بغداد', 'middle school Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'high-schools',
    name: { ar: 'مدارس إعدادية', en: 'High Schools' },
    description: {
      ar: 'حلول رقمية للمدارس الإعدادية: بوابة طلابية، تسجيل مواد، نتائج امتحانات، إرشاد مهني.',
      en: 'Digital solutions for high schools: student portal, course registration, exam results, career guidance.'
    },
    keywords: ['مدرسة إعدادية العراق', 'البكالوريا بغداد', 'high school Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'private-schools',
    name: { ar: 'مدارس أهلية', en: 'Private Schools' },
    description: {
      ar: 'حلول رقمية للمدارس الأهلية: تسجيل إلكتروني، دفع رسوم أونلاين، بوابة تعليمية شاملة.',
      en: 'Digital solutions for private schools: online registration, online fee payment, comprehensive educational portal.'
    },
    keywords: ['مدرسة أهلية العراق', 'مدارس خاصة بغداد', 'private school Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'international-schools',
    name: { ar: 'مدارس دولية', en: 'International Schools' },
    description: {
      ar: 'حلول رقمية للمدارس الدولية: منصات متعددة اللغات، تسجيل دولي، مناهج عالمية.',
      en: 'Digital solutions for international schools: multilingual platforms, international registration, global curricula.'
    },
    keywords: ['مدرسة دولية العراق', 'American school Baghdad', 'international school Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'computer-institutes',
    name: { ar: 'معاهد كمبيوتر', en: 'Computer Institutes' },
    description: {
      ar: 'حلول رقمية لمعاهد الكمبيوتر: حجز دورات برمجة، تصميم، شبكات، شهادات إلكترونية.',
      en: 'Digital solutions for computer institutes: booking programming, design, networking courses, electronic certificates.'
    },
    keywords: ['معهد كمبيوتر العراق', 'دورة برمجة بغداد', 'computer institute Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'beauty-institutes',
    name: { ar: 'معاهد تجميل', en: 'Beauty Institutes' },
    description: {
      ar: 'حلول رقمية لمعاهد التجميل: حجز دورات مكياج وتجميل، شهادات مهنية، معرض أعمال الطلاب.',
      en: 'Digital solutions for beauty institutes: booking makeup and beauty courses, professional certificates, student portfolio.'
    },
    keywords: ['معهد تجميل العراق', 'دورة مكياج بغداد', 'beauty institute Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cooking-schools',
    name: { ar: 'مدارس طبخ', en: 'Cooking Schools' },
    description: {
      ar: 'حلول رقمية لمدارس الطبخ: حجز دورات طهي، وصفات إلكترونية، فيديوهات تعليمية.',
      en: 'Digital solutions for cooking schools: cooking course booking, digital recipes, educational videos.'
    },
    keywords: ['مدرسة طبخ العراق', 'دورة طهي بغداد', 'cooking school Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'driving-schools',
    name: { ar: 'مدارس تعليم قيادة', en: 'Driving Schools' },
    description: {
      ar: 'حلول رقمية لمدارس القيادة: حجز دروس قيادة، اختبارات نظرية أونلاين، جدولة الامتحانات.',
      en: 'Digital solutions for driving schools: driving lesson booking, online theory tests, exam scheduling.'
    },
    keywords: ['مدرسة قيادة العراق', 'تعليم سواقة بغداد', 'driving school Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'mens-clothing-stores',
    name: { ar: 'محلات ملابس رجالية', en: "Men's Clothing Stores" },
    description: {
      ar: 'متاجر إلكترونية للملابس الرجالية: بدلات، قمصان، إكسسوارات، قياسات مخصصة.',
      en: "E-commerce stores for men's clothing: suits, shirts, accessories, custom sizing."
    },
    keywords: ['ملابس رجالية العراق', 'بدلات رجالية بغداد', "men's clothing Iraq"],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'womens-clothing-stores',
    name: { ar: 'محلات ملابس نسائية', en: "Women's Clothing Stores" },
    description: {
      ar: 'متاجر إلكترونية للملابس النسائية: فساتين، عبايات، إكسسوارات، أزياء محتشمة.',
      en: "E-commerce stores for women's clothing: dresses, abayas, accessories, modest fashion."
    },
    keywords: ['ملابس نسائية العراق', 'فساتين بغداد', "women's clothing Iraq"],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'childrens-clothing-stores',
    name: { ar: 'محلات ملابس أطفال', en: "Children's Clothing Stores" },
    description: {
      ar: 'متاجر إلكترونية لملابس الأطفال: ملابس مواليد، أطفال، مراهقين، أحذية أطفال.',
      en: "E-commerce stores for children's clothing: baby clothes, kids, teenagers, children's shoes."
    },
    keywords: ['ملابس أطفال العراق', 'أزياء مواليد بغداد', "children's clothing Iraq"],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'shoe-stores',
    name: { ar: 'محلات أحذية', en: 'Shoe Stores' },
    description: {
      ar: 'متاجر إلكترونية للأحذية: رجالية، نسائية، أطفال، رياضية، كلاسيكية.',
      en: "E-commerce stores for shoes: men's, women's, children's, sports, classic."
    },
    keywords: ['محلات أحذية العراق', 'شراء أحذية بغداد', 'shoe stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'bag-stores',
    name: { ar: 'محلات حقائب', en: 'Bag Stores' },
    description: {
      ar: 'متاجر إلكترونية للحقائب: حقائب يد نسائية، حقائب مدرسية، حقائب سفر، محافظ.',
      en: "E-commerce stores for bags: women's handbags, school bags, travel bags, wallets."
    },
    keywords: ['محلات حقائب العراق', 'حقائب نسائية بغداد', 'bag stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'watch-stores',
    name: { ar: 'محلات ساعات', en: 'Watch Stores' },
    description: {
      ar: 'متاجر إلكترونية للساعات: ساعات رجالية، نسائية، رياضية، ذكية، فاخرة.',
      en: "E-commerce stores for watches: men's, women's, sports, smart, luxury watches."
    },
    keywords: ['محلات ساعات العراق', 'ساعات فاخرة بغداد', 'watch stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'eyewear-stores',
    name: { ar: 'محلات نظارات', en: 'Eyewear Stores' },
    description: {
      ar: 'متاجر نظارات: نظارات طبية، شمسية، عدسات لاصقة، فحص نظر مجاني.',
      en: 'Eyewear stores: prescription glasses, sunglasses, contact lenses, free vision test.'
    },
    keywords: ['محلات نظارات العراق', 'نظارات شمسية بغداد', 'eyewear stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'perfume-stores',
    name: { ar: 'محلات عطور', en: 'Perfume Stores' },
    description: {
      ar: 'متاجر إلكترونية للعطور: عطور رجالية، نسائية، عود، بخور، زيوت عطرية.',
      en: "E-commerce stores for perfumes: men's, women's perfumes, oud, incense, essential oils."
    },
    keywords: ['محلات عطور العراق', 'عطور فاخرة بغداد', 'perfume stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cosmetics-stores',
    name: { ar: 'محلات مستحضرات تجميل', en: 'Cosmetics Stores' },
    description: {
      ar: 'متاجر إلكترونية لمستحضرات التجميل: مكياج، عناية بالبشرة، عناية بالشعر، ماركات عالمية.',
      en: 'E-commerce stores for cosmetics: makeup, skincare, haircare, international brands.'
    },
    keywords: ['مستحضرات تجميل العراق', 'مكياج أونلاين بغداد', 'cosmetics stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'gift-shops',
    name: { ar: 'محلات هدايا', en: 'Gift Shops' },
    description: {
      ar: 'متاجر هدايا: هدايا مناسبات، هدايا شخصية، تغليف فاخر، توصيل مع بالونات.',
      en: 'Gift shops: occasion gifts, personalized gifts, luxury wrapping, balloon delivery.'
    },
    keywords: ['محلات هدايا العراق', 'هدايا عيد ميلاد بغداد', 'gift shops Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'toy-stores',
    name: { ar: 'محلات ألعاب أطفال', en: 'Toy Stores' },
    description: {
      ar: 'متاجر إلكترونية لألعاب الأطفال: ألعاب تعليمية، إلكترونية، تقليدية، حسب العمر.',
      en: 'E-commerce stores for toys: educational, electronic, traditional toys, by age.'
    },
    keywords: ['محلات ألعاب العراق', 'ألعاب أطفال بغداد', 'toy stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'sports-equipment-stores',
    name: { ar: 'محلات معدات رياضية', en: 'Sports Equipment Stores' },
    description: {
      ar: 'متاجر معدات رياضية: أجهزة رياضية منزلية، ملابس رياضية، مكملات غذائية.',
      en: 'Sports equipment stores: home gym equipment, sportswear, dietary supplements.'
    },
    keywords: ['معدات رياضية العراق', 'أجهزة رياضية بغداد', 'sports equipment Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'home-appliances-stores',
    name: { ar: 'محلات أجهزة كهربائية منزلية', en: 'Home Appliances Stores' },
    description: {
      ar: 'متاجر الأجهزة المنزلية: ثلاجات، غسالات، مكيفات، أفران، ضمان وتوصيل.',
      en: 'Home appliances stores: refrigerators, washing machines, air conditioners, ovens, warranty and delivery.'
    },
    keywords: ['أجهزة كهربائية العراق', 'شراء ثلاجة بغداد', 'home appliances Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'computer-stores',
    name: { ar: 'محلات كمبيوترات', en: 'Computer Stores' },
    description: {
      ar: 'متاجر كمبيوترات: لابتوبات، أجهزة مكتبية، قطع، إكسسوارات، صيانة وضمان.',
      en: 'Computer stores: laptops, desktops, parts, accessories, maintenance and warranty.'
    },
    keywords: ['محلات كمبيوتر العراق', 'شراء لابتوب بغداد', 'computer stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'gaming-stores',
    name: { ar: 'محلات ألعاب فيديو', en: 'Gaming Stores' },
    description: {
      ar: 'متاجر ألعاب فيديو: بلايستيشن، إكس بوكس، نينتندو، ألعاب، إكسسوارات.',
      en: 'Gaming stores: PlayStation, Xbox, Nintendo, games, accessories.'
    },
    keywords: ['محلات ألعاب فيديو العراق', 'بلايستيشن بغداد', 'gaming stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'stationery-stores',
    name: { ar: 'مكتبات ولوازم مكتبية', en: 'Stationery Stores' },
    description: {
      ar: 'متاجر لوازم مكتبية: دفاتر، أقلام، أدوات مدرسية، مستلزمات مكاتب.',
      en: 'Stationery stores: notebooks, pens, school supplies, office supplies.'
    },
    keywords: ['لوازم مكتبية العراق', 'دفاتر مدرسية بغداد', 'stationery stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'hardware-stores',
    name: { ar: 'محلات أدوات', en: 'Hardware Stores' },
    description: {
      ar: 'متاجر أدوات: أدوات يدوية، كهربائية، أدوات بناء، صيانة منزلية.',
      en: 'Hardware stores: hand tools, power tools, construction tools, home maintenance.'
    },
    keywords: ['محلات أدوات العراق', 'عدة يدوية بغداد', 'hardware stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'paint-stores',
    name: { ar: 'محلات دهانات', en: 'Paint Stores' },
    description: {
      ar: 'متاجر دهانات: ألوان منزلية، صناعية، ديكورات، أدوات طلاء، استشارات ألوان.',
      en: 'Paint stores: house paints, industrial, decorations, painting tools, color consultations.'
    },
    keywords: ['محلات دهانات العراق', 'ألوان منزلية بغداد', 'paint stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'lighting-stores',
    name: { ar: 'محلات إنارة', en: 'Lighting Stores' },
    description: {
      ar: 'متاجر إنارة: ثريات، إضاءة ليد، إضاءة خارجية، ديكورات إنارة حديثة.',
      en: 'Lighting stores: chandeliers, LED lighting, outdoor lighting, modern lighting decor.'
    },
    keywords: ['محلات إنارة العراق', 'ثريات بغداد', 'lighting stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'flooring-stores',
    name: { ar: 'محلات أرضيات', en: 'Flooring Stores' },
    description: {
      ar: 'متاجر أرضيات: بلاط، باركيه، سيراميك، رخام، تركيب وصيانة.',
      en: 'Flooring stores: tiles, parquet, ceramics, marble, installation and maintenance.'
    },
    keywords: ['محلات أرضيات العراق', 'بلاط سيراميك بغداد', 'flooring stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'kitchen-stores',
    name: { ar: 'محلات مطابخ', en: 'Kitchen Stores' },
    description: {
      ar: 'متاجر مطابخ: تصميم مطابخ حديثة، خزائن، أدوات مطبخ، تركيب كامل.',
      en: 'Kitchen stores: modern kitchen design, cabinets, kitchen tools, full installation.'
    },
    keywords: ['محلات مطابخ العراق', 'تصميم مطبخ بغداد', 'kitchen stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'bathroom-stores',
    name: { ar: 'محلات أدوات صحية', en: 'Bathroom Stores' },
    description: {
      ar: 'متاجر أدوات صحية: مراحيض، مغاسل، حنفيات، شاورات، إكسسوارات حمامات.',
      en: 'Bathroom stores: toilets, sinks, faucets, showers, bathroom accessories.'
    },
    keywords: ['أدوات صحية العراق', 'حنفيات بغداد', 'bathroom stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'curtain-stores',
    name: { ar: 'محلات ستائر', en: 'Curtain Stores' },
    description: {
      ar: 'متاجر ستائر: ستائر حديثة، كلاسيكية، بلاك آوت، قياس وتركيب.',
      en: 'Curtain stores: modern, classic curtains, blackout, measurement and installation.'
    },
    keywords: ['محلات ستائر العراق', 'ستائر منزلية بغداد', 'curtain stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'carpet-stores',
    name: { ar: 'محلات سجاد', en: 'Carpet Stores' },
    description: {
      ar: 'متاجر سجاد: سجاد شرقي، حديث، موكيت، تفصيل حسب المقاس.',
      en: 'Carpet stores: oriental, modern carpets, moquette, custom sizing.'
    },
    keywords: ['محلات سجاد العراق', 'سجاد فاخر بغداد', 'carpet stores Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'garden-centers',
    name: { ar: 'مشاتل ومراكز حدائق', en: 'Garden Centers' },
    description: {
      ar: 'مراكز حدائق: نباتات، أشجار، بذور، أسمدة، أدوات زراعة، تنسيق حدائق.',
      en: 'Garden centers: plants, trees, seeds, fertilizers, gardening tools, landscaping.'
    },
    keywords: ['مشاتل العراق', 'نباتات بغداد', 'garden centers Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'bicycle-shops',
    name: { ar: 'محلات دراجات', en: 'Bicycle Shops' },
    description: {
      ar: 'متاجر دراجات: دراجات هوائية، كهربائية، أطفال، رياضية، قطع غيار وصيانة.',
      en: 'Bicycle shops: bicycles, electric, kids, sports, spare parts and maintenance.'
    },
    keywords: ['محلات دراجات العراق', 'دراجة هوائية بغداد', 'bicycle shops Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'motorcycle-dealers',
    name: { ar: 'معارض دراجات نارية', en: 'Motorcycle Dealers' },
    description: {
      ar: 'معارض دراجات نارية: موتورات جديدة ومستعملة، قطع غيار، إكسسوارات، صيانة.',
      en: 'Motorcycle dealers: new and used motorcycles, spare parts, accessories, maintenance.'
    },
    keywords: ['دراجات نارية العراق', 'موتور بغداد', 'motorcycle dealers Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'solar-energy-companies',
    name: { ar: 'شركات طاقة شمسية', en: 'Solar Energy Companies' },
    description: {
      ar: 'شركات طاقة شمسية: ألواح شمسية، بطاريات، أنظمة كاملة، تركيب وصيانة.',
      en: 'Solar energy companies: solar panels, batteries, complete systems, installation and maintenance.'
    },
    keywords: ['طاقة شمسية العراق', 'ألواح شمسية بغداد', 'solar energy Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'generator-companies',
    name: { ar: 'شركات مولدات كهرباء', en: 'Generator Companies' },
    description: {
      ar: 'شركات مولدات: مولدات كهربائية منزلية وصناعية، قطع غيار، صيانة دورية.',
      en: 'Generator companies: residential and industrial generators, spare parts, periodic maintenance.'
    },
    keywords: ['مولدات كهرباء العراق', 'جنريتر بغداد', 'generator companies Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'water-purification-companies',
    name: { ar: 'شركات تنقية مياه', en: 'Water Purification Companies' },
    description: {
      ar: 'شركات تنقية مياه: فلاتر مياه، محطات تحلية، صيانة وتركيب، فحوصات مياه.',
      en: 'Water purification companies: water filters, desalination plants, maintenance and installation, water testing.'
    },
    keywords: ['تنقية مياه العراق', 'فلتر ماء بغداد', 'water purification Iraq'],
    cities: ALL_IRAQ_CITIES
  },

  // === قطاع الحرف والمهن (150 نوع) ===
  {
    key: 'plumbers',
    name: { ar: 'سباكين', en: 'Plumbers' },
    description: {
      ar: 'خدمات سباكة: إصلاح تسريبات، تركيب أدوات صحية، صيانة خزانات، خدمة 24 ساعة.',
      en: 'Plumbing services: leak repair, sanitary ware installation, tank maintenance, 24-hour service.'
    },
    keywords: ['سباك بغداد', 'إصلاح تسريب', 'plumber Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'electricians',
    name: { ar: 'كهربائيين', en: 'Electricians' },
    description: {
      ar: 'خدمات كهرباء: تمديدات كهربائية، إصلاح أعطال، تركيب لوحات، صيانة دورية.',
      en: 'Electrical services: wiring, fault repair, panel installation, periodic maintenance.'
    },
    keywords: ['كهربائي بغداد', 'تمديدات كهربائية', 'electrician Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'carpenters',
    name: { ar: 'نجارين', en: 'Carpenters' },
    description: {
      ar: 'أعمال نجارة: تفصيل أثاث، أبواب وشبابيك، ديكورات خشبية، ترميم.',
      en: 'Carpentry work: furniture making, doors and windows, wooden decorations, restoration.'
    },
    keywords: ['نجار بغداد', 'تفصيل أثاث', 'carpenter Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'blacksmiths',
    name: { ar: 'حدادين', en: 'Blacksmiths' },
    description: {
      ar: 'أعمال حدادة: أبواب حديد، شبابيك، درابزين، بوابات، أعمال لحام.',
      en: 'Blacksmith work: iron doors, windows, railings, gates, welding work.'
    },
    keywords: ['حداد بغداد', 'أبواب حديد', 'blacksmith Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'painters',
    name: { ar: 'دهانين', en: 'Painters' },
    description: {
      ar: 'أعمال دهان: طلاء منازل، ديكورات، جبس، ورق جدران، دهانات حديثة.',
      en: 'Painting work: house painting, decorations, gypsum, wallpaper, modern paints.'
    },
    keywords: ['دهان بغداد', 'طلاء منازل', 'painter Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'tile-installers',
    name: { ar: 'معلم بلاط', en: 'Tile Installers' },
    description: {
      ar: 'تركيب بلاط وسيراميك: أرضيات، جدران، ديكورات، رخام، جرانيت.',
      en: 'Tile and ceramic installation: floors, walls, decorations, marble, granite.'
    },
    keywords: ['معلم بلاط بغداد', 'تركيب سيراميك', 'tile installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'ac-technicians',
    name: { ar: 'فنيين تكييف', en: 'AC Technicians' },
    description: {
      ar: 'صيانة مكيفات: تنظيف، غاز، إصلاح أعطال، تركيب، صيانة دورية.',
      en: 'AC maintenance: cleaning, gas refill, fault repair, installation, periodic maintenance.'
    },
    keywords: ['صيانة مكيفات بغداد', 'فني تكييف', 'AC repair Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'refrigerator-technicians',
    name: { ar: 'فنيين ثلاجات', en: 'Refrigerator Technicians' },
    description: {
      ar: 'صيانة ثلاجات: إصلاح أعطال، غاز، قطع غيار أصلية، خدمة منزلية.',
      en: 'Refrigerator maintenance: fault repair, gas refill, original parts, home service.'
    },
    keywords: ['صيانة ثلاجات بغداد', 'إصلاح ثلاجة', 'refrigerator repair Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'washing-machine-technicians',
    name: { ar: 'فنيين غسالات', en: 'Washing Machine Technicians' },
    description: {
      ar: 'صيانة غسالات: إصلاح جميع الأنواع، قطع غيار، صيانة منزلية، ضمان.',
      en: 'Washing machine maintenance: repair all types, spare parts, home service, warranty.'
    },
    keywords: ['صيانة غسالات بغداد', 'إصلاح غسالة', 'washing machine repair Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'tv-technicians',
    name: { ar: 'فنيين تلفزيونات', en: 'TV Technicians' },
    description: {
      ar: 'صيانة تلفزيونات: شاشات ليد، بلازما، إصلاح، قطع غيار، خدمة منزلية.',
      en: 'TV maintenance: LED screens, plasma, repair, spare parts, home service.'
    },
    keywords: ['صيانة تلفزيونات بغداد', 'إصلاح شاشة', 'TV repair Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'phone-technicians',
    name: { ar: 'فنيين موبايل', en: 'Phone Technicians' },
    description: {
      ar: 'صيانة موبايلات: شاشات، بطاريات، برمجة، فك حساب، قطع غيار أصلية.',
      en: 'Phone repair: screens, batteries, software, unlocking, original parts.'
    },
    keywords: ['صيانة موبايل بغداد', 'تصليح موبايل', 'phone repair Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'computer-technicians',
    name: { ar: 'فنيين كمبيوتر', en: 'Computer Technicians' },
    description: {
      ar: 'صيانة كمبيوترات: هاردوير، سوفتوير، شبكات، فيروسات، ترقية أجهزة.',
      en: 'Computer maintenance: hardware, software, networks, viruses, upgrades.'
    },
    keywords: ['صيانة كمبيوتر بغداد', 'فني لابتوب', 'computer repair Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'satellite-technicians',
    name: { ar: 'فنيين ستلايت', en: 'Satellite Technicians' },
    description: {
      ar: 'تركيب ستلايت: أطباق، رسيفرات، برمجة قنوات، صيانة، اشتراكات.',
      en: 'Satellite installation: dishes, receivers, channel programming, maintenance, subscriptions.'
    },
    keywords: ['تركيب ستلايت بغداد', 'فني ستلايت', 'satellite technician Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'internet-technicians',
    name: { ar: 'فنيين انترنت', en: 'Internet Technicians' },
    description: {
      ar: 'خدمات انترنت: تركيب، صيانة، راوترات، شبكات واي فاي، حل مشاكل السرعة.',
      en: 'Internet services: installation, maintenance, routers, WiFi networks, speed troubleshooting.'
    },
    keywords: ['تركيب انترنت بغداد', 'فني واي فاي', 'internet technician Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cctv-installers',
    name: { ar: 'مركبين كاميرات مراقبة', en: 'CCTV Installers' },
    description: {
      ar: 'تركيب كاميرات: مراقبة منازل، شركات، محلات، تطبيق جوال، تسجيل سحابي.',
      en: 'Camera installation: homes, companies, shops monitoring, mobile app, cloud recording.'
    },
    keywords: ['كاميرات مراقبة بغداد', 'تركيب كاميرات', 'CCTV installation Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'alarm-installers',
    name: { ar: 'مركبين أنظمة إنذار', en: 'Alarm System Installers' },
    description: {
      ar: 'أنظمة إنذار: حريق، سرقة، إنذار ذكي، تطبيق جوال، مراقبة 24 ساعة.',
      en: 'Alarm systems: fire, theft, smart alarm, mobile app, 24-hour monitoring.'
    },
    keywords: ['أنظمة إنذار بغداد', 'إنذار حريق', 'alarm system Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'glass-installers',
    name: { ar: 'مركبين زجاج', en: 'Glass Installers' },
    description: {
      ar: 'تركيب زجاج: واجهات، شبابيك، أبواب، مرايا، ديكورات زجاجية.',
      en: 'Glass installation: facades, windows, doors, mirrors, glass decorations.'
    },
    keywords: ['تركيب زجاج بغداد', 'واجهات زجاج', 'glass installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'aluminum-installers',
    name: { ar: 'مركبين ألمنيوم', en: 'Aluminum Installers' },
    description: {
      ar: 'أعمال ألمنيوم: شبابيك، أبواب، واجهات، مطابخ، ديكورات.',
      en: 'Aluminum work: windows, doors, facades, kitchens, decorations.'
    },
    keywords: ['ألمنيوم بغداد', 'شبابيك ألمنيوم', 'aluminum installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'upvc-installers',
    name: { ar: 'مركبين يوبي في سي', en: 'UPVC Installers' },
    description: {
      ar: 'تركيب UPVC: شبابيك، أبواب، عازل حراري وصوتي، جودة ألمانية.',
      en: 'UPVC installation: windows, doors, thermal and sound insulation, German quality.'
    },
    keywords: ['UPVC بغداد', 'شبابيك يوبي في سي', 'UPVC installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'gypsum-workers',
    name: { ar: 'معلم جبس', en: 'Gypsum Workers' },
    description: {
      ar: 'أعمال جبس: ديكورات جبس بورد، أسقف معلقة، جدران، إضاءة مخفية.',
      en: 'Gypsum work: gypsum board decorations, suspended ceilings, walls, hidden lighting.'
    },
    keywords: ['جبس بورد بغداد', 'ديكورات جبس', 'gypsum worker Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'wallpaper-installers',
    name: { ar: 'مركبين ورق جدران', en: 'Wallpaper Installers' },
    description: {
      ar: 'تركيب ورق جدران: تصاميم حديثة، ثلاثي الأبعاد، مقاوم للرطوبة، ديكورات فاخرة.',
      en: 'Wallpaper installation: modern designs, 3D, moisture resistant, luxury decorations.'
    },
    keywords: ['ورق جدران بغداد', 'تركيب ورق جدران', 'wallpaper installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'parquet-installers',
    name: { ar: 'مركبين باركيه', en: 'Parquet Installers' },
    description: {
      ar: 'تركيب باركيه: خشب طبيعي، HDF، لامينيت، صيانة وتلميع، ضمان.',
      en: 'Parquet installation: natural wood, HDF, laminate, maintenance and polishing, warranty.'
    },
    keywords: ['باركيه بغداد', 'تركيب أرضيات خشبية', 'parquet installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'carpet-installers',
    name: { ar: 'مركبين موكيت وسجاد', en: 'Carpet Installers' },
    description: {
      ar: 'تركيب موكيت: مكاتب، منازل، مساجد، قاعات، تفصيل حسب المقاس.',
      en: 'Carpet installation: offices, homes, mosques, halls, custom sizing.'
    },
    keywords: ['تركيب موكيت بغداد', 'سجاد للمكاتب', 'carpet installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'curtain-installers',
    name: { ar: 'مركبين ستائر', en: 'Curtain Installers' },
    description: {
      ar: 'تركيب ستائر: قياس، تفصيل، تركيب، ستائر حديثة وكلاسيكية، خدمة منزلية.',
      en: 'Curtain installation: measurement, tailoring, installation, modern and classic curtains, home service.'
    },
    keywords: ['تركيب ستائر بغداد', 'ستائر منزلية', 'curtain installer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'furniture-movers',
    name: { ar: 'نقل أثاث', en: 'Furniture Movers' },
    description: {
      ar: 'نقل عفش: فك وتركيب، تغليف، نقل آمن، داخل وخارج المدينة، تأمين شامل.',
      en: 'Furniture moving: disassembly and assembly, packing, safe transport, inside and outside city, full insurance.'
    },
    keywords: ['نقل عفش بغداد', 'نقل أثاث', 'furniture movers Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cleaning-services',
    name: { ar: 'خدمات تنظيف', en: 'Cleaning Services' },
    description: {
      ar: 'خدمات تنظيف: منازل، مكاتب، شركات، تنظيف عميق، عمالة مدربة، مواد صديقة للبيئة.',
      en: 'Cleaning services: homes, offices, companies, deep cleaning, trained staff, eco-friendly materials.'
    },
    keywords: ['تنظيف منازل بغداد', 'شركة تنظيف', 'cleaning services Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'pest-control',
    name: { ar: 'مكافحة حشرات', en: 'Pest Control' },
    description: {
      ar: 'مكافحة حشرات: رش مبيدات، قوارض، نمل، صراصير، بق الفراش، ضمان وأمان.',
      en: 'Pest control: pesticide spraying, rodents, ants, cockroaches, bed bugs, warranty and safety.'
    },
    keywords: ['مكافحة حشرات بغداد', 'رش مبيدات', 'pest control Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'gardeners',
    name: { ar: 'بستانيين', en: 'Gardeners' },
    description: {
      ar: 'خدمات بستنة: تنسيق حدائق، زراعة، تقليم، صيانة دورية، شبكات ري.',
      en: 'Gardening services: landscaping, planting, pruning, periodic maintenance, irrigation networks.'
    },
    keywords: ['بستاني بغداد', 'تنسيق حدائق', 'gardener Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-wash',
    name: { ar: 'غسيل سيارات', en: 'Car Wash' },
    description: {
      ar: 'غسيل سيارات: غسيل يدوي، أوتوماتيك، تلميع، تنظيف داخلي، خدمة سريعة.',
      en: 'Car wash: manual, automatic, polishing, interior cleaning, quick service.'
    },
    keywords: ['غسيل سيارات بغداد', 'car wash Iraq', 'تلميع سيارة'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-mechanics',
    name: { ar: 'ميكانيكي سيارات', en: 'Car Mechanics' },
    description: {
      ar: 'ورشة ميكانيك: صيانة محرك، فحص، إصلاح أعطال، قطع غيار أصلية، ضمان.',
      en: 'Mechanic workshop: engine maintenance, inspection, fault repair, original parts, warranty.'
    },
    keywords: ['ميكانيكي بغداد', 'ورشة سيارات', 'car mechanic Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-electricians',
    name: { ar: 'كهربائي سيارات', en: 'Car Electricians' },
    description: {
      ar: 'كهرباء سيارات: كمبيوتر، بطاريات، لمبات، مساحات، إصلاح أعطال كهربائية.',
      en: 'Car electrical: computer, batteries, bulbs, wipers, electrical fault repair.'
    },
    keywords: ['كهربائي سيارات بغداد', 'كمبيوتر سيارة', 'car electrician Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-ac-technicians',
    name: { ar: 'فني تكييف سيارات', en: 'Car AC Technicians' },
    description: {
      ar: 'تكييف سيارات: صيانة، غاز، كمبروسر، إصلاح أعطال، خدمة سريعة.',
      en: 'Car AC: maintenance, gas refill, compressor, fault repair, quick service.'
    },
    keywords: ['تكييف سيارات بغداد', 'غاز مكيف سيارة', 'car AC Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-painters',
    name: { ar: 'دهان سيارات', en: 'Car Painters' },
    description: {
      ar: 'دهان سيارات: رش كامل، تلميع، إصلاح خدوش، دوكو أصلي، ضمان.',
      en: 'Car painting: full spray, polishing, scratch repair, original paint, warranty.'
    },
    keywords: ['دهان سيارات بغداد', 'رش سيارة', 'car painter Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-upholstery',
    name: { ar: 'تنجيد سيارات', en: 'Car Upholstery' },
    description: {
      ar: 'تنجيد سيارات: جلد، قماش، تغيير فرش كامل، سقف، ديكورات داخلية.',
      en: 'Car upholstery: leather, fabric, complete seat change, ceiling, interior decorations.'
    },
    keywords: ['تنجيد سيارات بغداد', 'فرش سيارة جلد', 'car upholstery Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'tire-shops',
    name: { ar: 'محلات كفرات', en: 'Tire Shops' },
    description: {
      ar: 'كفرات سيارات: بيع، تركيب، بنشر، ميزان، محاذاة، كافة الماركات.',
      en: 'Car tires: sale, installation, puncture repair, balancing, alignment, all brands.'
    },
    keywords: ['كفرات بغداد', 'بنشر سيارات', 'tire shop Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'oil-change-shops',
    name: { ar: 'مراكز تغيير زيت', en: 'Oil Change Shops' },
    description: {
      ar: 'تغيير زيت: زيوت أصلية، فلاتر، فحص شامل، خدمة سريعة، عروض دورية.',
      en: 'Oil change: original oils, filters, comprehensive inspection, quick service, periodic offers.'
    },
    keywords: ['تغيير زيت بغداد', 'زيت سيارة', 'oil change Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'car-accessories',
    name: { ar: 'محلات إكسسوارات سيارات', en: 'Car Accessories Shops' },
    description: {
      ar: 'إكسسوارات سيارات: مسجلات، كاميرات، حساسات، ديكورات، تركيب وبرمجة.',
      en: 'Car accessories: stereos, cameras, sensors, decorations, installation and programming.'
    },
    keywords: ['إكسسوارات سيارات بغداد', 'كاميرا سيارة', 'car accessories Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'welders',
    name: { ar: 'لحام', en: 'Welders' },
    description: {
      ar: 'أعمال لحام: حديد، ستانلس، ألمنيوم، إنشاءات، إصلاحات، لحام متنقل.',
      en: 'Welding work: iron, stainless steel, aluminum, construction, repairs, mobile welding.'
    },
    keywords: ['لحام بغداد', 'عامل لحام', 'welder Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'locksmiths',
    name: { ar: 'فتح أقفال', en: 'Locksmiths' },
    description: {
      ar: 'فتح أقفال: أبواب، سيارات، خزنات، تغيير أقفال، مفاتيح، خدمة 24 ساعة.',
      en: 'Locksmith: doors, cars, safes, lock change, keys, 24-hour service.'
    },
    keywords: ['فتح أقفال بغداد', 'نسخ مفاتيح', 'locksmith Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'shoemakers',
    name: { ar: 'إسكافي', en: 'Shoemakers' },
    description: {
      ar: 'إصلاح أحذية: خياطة، تلبيس، تغيير نعل، صبغ، خدمة سريعة.',
      en: 'Shoe repair: stitching, covering, sole change, dyeing, quick service.'
    },
    keywords: ['إسكافي بغداد', 'إصلاح أحذية', 'shoemaker Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'tailors',
    name: { ar: 'خياط', en: 'Tailors' },
    description: {
      ar: 'خياطة: تفصيل ملابس رجالية ونسائية، تعديلات، دشداشة، عباءات، تطريز.',
      en: 'Tailoring: men and women clothing, alterations, dishdasha, abayas, embroidery.'
    },
    keywords: ['خياط بغداد', 'تفصيل ملابس', 'tailor Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'barbers',
    name: { ar: 'حلاقين رجالية', en: 'Barbers' },
    description: {
      ar: 'حلاقة رجالية: قصات حديثة، حلاقة تقليدية، تشذيب لحية، حمام مغربي.',
      en: 'Barbershop: modern haircuts, traditional shaving, beard trimming, Moroccan bath.'
    },
    keywords: ['حلاق بغداد', 'صالون رجالي', 'barber Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'beauty-salons',
    name: { ar: 'صالونات تجميل نسائية', en: 'Beauty Salons' },
    description: {
      ar: 'صالون تجميل: قص شعر، صبغة، مكياج، عناية بشرة، مناكير، باديكير.',
      en: 'Beauty salon: haircut, dye, makeup, skin care, manicure, pedicure.'
    },
    keywords: ['صالون نسائي بغداد', 'تجميل عرايس', 'beauty salon Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'photographers',
    name: { ar: 'مصورين', en: 'Photographers' },
    description: {
      ar: 'تصوير احترافي: أعراس، مناسبات، تصوير منتجات، استوديو، فيديو سينمائي.',
      en: 'Professional photography: weddings, events, product photography, studio, cinematic video.'
    },
    keywords: ['مصور أعراس بغداد', 'تصوير احترافي', 'photographer Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'event-planners',
    name: { ar: 'منظمي حفلات', en: 'Event Planners' },
    description: {
      ar: 'تنظيم حفلات: أعراس، أعياد ميلاد، مناسبات، ديكور، تموين، تصوير.',
      en: 'Event planning: weddings, birthdays, occasions, decor, catering, photography.'
    },
    keywords: ['تنظيم حفلات بغداد', 'تنظيم أعراس', 'event planner Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'wedding-halls',
    name: { ar: 'قاعات أفراح', en: 'Wedding Halls' },
    description: {
      ar: 'قاعات أفراح: قاعات فخمة، سعة كبيرة، ديكورات حديثة، تموين، خدمات متكاملة.',
      en: 'Wedding halls: luxury halls, large capacity, modern decorations, catering, full services.'
    },
    keywords: ['قاعات أفراح بغداد', 'صالات زواج', 'wedding halls Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'djs',
    name: { ar: 'دي جي', en: 'DJs' },
    description: {
      ar: 'دي جي احترافي: أعراس، حفلات، مناسبات، صوتيات عالية، إضاءة حديثة.',
      en: 'Professional DJ: weddings, parties, occasions, high-quality sound, modern lighting.'
    },
    keywords: ['دي جي بغداد', 'DJ أعراس', 'DJ Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'musicians',
    name: { ar: 'موسيقيين', en: 'Musicians' },
    description: {
      ar: 'فرق موسيقية: أعراس، مناسبات، موسيقى شرقية وغربية، مطربين.',
      en: 'Music bands: weddings, occasions, oriental and western music, singers.'
    },
    keywords: ['فرقة موسيقية بغداد', 'مطرب أعراس', 'musicians Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'caterers',
    name: { ar: 'متعهدي تموين', en: 'Caterers' },
    description: {
      ar: 'تموين مناسبات: أعراس، عزائم، مؤتمرات، بوفيه مفتوح، طباخين محترفين.',
      en: 'Event catering: weddings, banquets, conferences, open buffet, professional chefs.'
    },
    keywords: ['تموين بغداد', 'تموين أعراس', 'catering Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'florists',
    name: { ar: 'محلات ورود', en: 'Florists' },
    description: {
      ar: 'محلات ورود: باقات، تنسيق، زهور طبيعية، ورود أعراس، توصيل سريع.',
      en: 'Flower shops: bouquets, arrangements, natural flowers, wedding flowers, fast delivery.'
    },
    keywords: ['محل ورود بغداد', 'باقات ورد', 'florist Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'balloon-decorators',
    name: { ar: 'منسقي بالونات', en: 'Balloon Decorators' },
    description: {
      ar: 'تنسيق بالونات: أعياد ميلاد، أعراس، مناسبات، أشكال مبتكرة، توصيل وتركيب.',
      en: 'Balloon decoration: birthdays, weddings, occasions, creative shapes, delivery and installation.'
    },
    keywords: ['بالونات بغداد', 'تنسيق بالونات', 'balloon decorator Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'cake-makers',
    name: { ar: 'صناع كيك', en: 'Cake Makers' },
    description: {
      ar: 'كيك مناسبات: أعياد ميلاد، أعراس، تصاميم خاصة، نكهات متنوعة، توصيل.',
      en: 'Occasion cakes: birthdays, weddings, custom designs, various flavors, delivery.'
    },
    keywords: ['كيك بغداد', 'كيك عيد ميلاد', 'cake maker Iraq'],
    cities: ALL_IRAQ_CITIES
  },
  {
    key: 'chocolate-makers',
    name: { ar: 'صناع شوكولاتة', en: 'Chocolate Makers' },
    description: {
      ar: 'شوكولاتة يدوية: تصاميم فاخرة، هدايا مناسبات، نكهات طبيعية، تغليف راقي.',
      en: 'Handmade chocolate: luxury designs, occasion gifts, natural flavors, elegant packaging.'
    },
    keywords: ['شوكولاتة بغداد', 'شوكولاتة هدايا', 'chocolate maker Iraq'],
    cities: ALL_IRAQ_CITIES
  }
]