// قاعدة بيانات شاملة للمدن العراقية - محدثة 2025
// تستخدم للاستهداف المحلي في SEO

export interface IraqCity {
  key: string;
  ar: string;
  en: string;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  governorate: string;
  districts?: string[];
  businessPotential: 'high' | 'medium' | 'low';
  keywords: string[];
}

// المحافظات الـ 19 في العراق
export const IRAQ_CITIES: IraqCity[] = [
  // محافظة بغداد
  {
    key: 'baghdad',
    ar: 'بغداد',
    en: 'Baghdad',
    population: 8126755,
    coordinates: { lat: 33.3152, lng: 44.3661 },
    governorate: 'baghdad',
    districts: ['الكرخ', 'الرصافة', 'الكاظمية', 'الأعظمية', 'الدورة', 'الشعلة'],
    businessPotential: 'high',
    keywords: ['بغداد', 'العاصمة', 'عاصمة العراق', 'بغداد الرصافة', 'بغداد الكرخ']
  },
  
  // محافظة البصرة
  {
    key: 'basra',
    ar: 'البصرة',
    en: 'Basra',
    population: 2750000,
    coordinates: { lat: 30.5085, lng: 47.7804 },
    governorate: 'basra',
    districts: ['العشار', 'الحسين', 'الجمهورية', 'الفيحاء', 'أبو الخصيب'],
    businessPotential: 'high',
    keywords: ['البصرة', 'بصرة', 'ميناء العراق', 'العشار', 'الفاو']
  },
  
  // محافظة نينوى
  {
    key: 'mosul',
    ar: 'الموصل',
    en: 'Mosul',
    population: 1739800,
    coordinates: { lat: 36.3489, lng: 43.1189 },
    governorate: 'nineveh',
    districts: ['الموصل الجديدة', 'باب الطوب', 'النور', 'الزهراء', 'الشورجة'],
    businessPotential: 'high',
    keywords: ['الموصل', 'موصل', 'نينوى', 'الموصل الجديدة']
  },
  
  // محافظة أربيل
  {
    key: 'erbil',
    ar: 'أربيل',
    en: 'Erbil',
    population: 1530000,
    coordinates: { lat: 36.1911, lng: 44.0091 },
    governorate: 'erbil',
    districts: ['شارع 100', 'شارع 60', 'عينكاوة', 'المنارة', 'الأندلس'],
    businessPotential: 'high',
    keywords: ['أربيل', 'اربيل', 'هولير', 'كردستان العراق', 'عاصمة كردستان']
  },
  
  // محافظة النجف
  {
    key: 'najaf',
    ar: 'النجف',
    en: 'Najaf',
    population: 1023000,
    coordinates: { lat: 31.9996, lng: 44.3128 },
    governorate: 'najaf',
    districts: ['المدينة القديمة', 'الجديدة', 'الحنانة', 'الكوفة', 'المشخاب'],
    businessPotential: 'high',
    keywords: ['النجف', 'النجف الأشرف', 'الكوفة', 'مدينة النجف']
  },
  
  // محافظة كربلاء
  {
    key: 'karbala',
    ar: 'كربلاء',
    en: 'Karbala',
    population: 711500,
    coordinates: { lat: 32.6149, lng: 44.0244 },
    governorate: 'karbala',
    districts: ['المدينة القديمة', 'الجديدة', 'العباسية', 'الحسينية', 'عون'],
    businessPotential: 'high',
    keywords: ['كربلاء', 'كربلاء المقدسة', 'الحسين', 'العباس']
  },
  
  // محافظة السليمانية
  {
    key: 'sulaymaniyah',
    ar: 'السليمانية',
    en: 'Sulaymaniyah',
    population: 723000,
    coordinates: { lat: 35.5558, lng: 45.4375 },
    governorate: 'sulaymaniyah',
    districts: ['المدينة الجديدة', 'القديمة', 'مال أفندي', 'سرايوان', 'بختياري'],
    businessPotential: 'high',
    keywords: ['السليمانية', 'سليمانية', 'سلێمانی', 'كردستان']
  },
  
  // محافظة بابل
  {
    key: 'hilla',
    ar: 'الحلة',
    en: 'Hilla',
    population: 600000,
    coordinates: { lat: 32.4636, lng: 44.4199 },
    governorate: 'babil',
    districts: ['المدينة', 'الكفل', 'المسيب', 'المحاويل', 'الهاشمية'],
    businessPotential: 'medium',
    keywords: ['الحلة', 'بابل', 'المحاويل', 'الكفل']
  },
  
  // محافظة كركوك
  {
    key: 'kirkuk',
    ar: 'كركوك',
    en: 'Kirkuk',
    population: 601433,
    coordinates: { lat: 35.4681, lng: 44.3922 },
    governorate: 'kirkuk',
    districts: ['المدينة', 'الحويجة', 'داقوق', 'دبس', 'طوز خورماتو'],
    businessPotential: 'high',
    keywords: ['كركوك', 'كرکووک', 'مدينة النفط']
  },
  
  // محافظة ديالى
  {
    key: 'baqubah',
    ar: 'بعقوبة',
    en: 'Baqubah',
    population: 467900,
    coordinates: { lat: 33.7488, lng: 44.6448 },
    governorate: 'diyala',
    districts: ['المدينة', 'الخالص', 'المقدادية', 'خانقين', 'بلدروز'],
    businessPotential: 'medium',
    keywords: ['بعقوبة', 'ديالى', 'خانقين', 'المقدادية']
  },
  
  // محافظة الأنبار
  {
    key: 'ramadi',
    ar: 'الرمادي',
    en: 'Ramadi',
    population: 495000,
    coordinates: { lat: 33.4231, lng: 43.3047 },
    governorate: 'anbar',
    districts: ['المدينة', 'الصقلاوية', 'الخالدية', 'حديثة', 'الكرمة'],
    businessPotential: 'medium',
    keywords: ['الرمادي', 'رمادي', 'الأنبار', 'الفلوجة']
  },
  
  {
    key: 'fallujah',
    ar: 'الفلوجة',
    en: 'Fallujah',
    population: 326471,
    coordinates: { lat: 33.3489, lng: 43.7839 },
    governorate: 'anbar',
    businessPotential: 'medium',
    keywords: ['الفلوجة', 'فلوجة', 'الأنبار']
  },
  
  // محافظة ذي قار
  {
    key: 'nasiriyah',
    ar: 'الناصرية',
    en: 'Nasiriyah',
    population: 560000,
    coordinates: { lat: 31.0432, lng: 46.2572 },
    governorate: 'dhi-qar',
    districts: ['المدينة', 'سوق الشيوخ', 'الشطرة', 'قلعة سكر', 'الرفاعي'],
    businessPotential: 'medium',
    keywords: ['الناصرية', 'ناصرية', 'ذي قار', 'أور']
  },
  
  // محافظة القادسية
  {
    key: 'diwaniyah',
    ar: 'الديوانية',
    en: 'Diwaniyah',
    population: 440927,
    coordinates: { lat: 31.9929, lng: 44.9255 },
    governorate: 'qadisiyyah',
    districts: ['المدينة', 'الشامية', 'غماس', 'عفك', 'الدغارة'],
    businessPotential: 'medium',
    keywords: ['الديوانية', 'ديوانية', 'القادسية', 'عفك']
  },
  
  // محافظة ميسان
  {
    key: 'amarah',
    ar: 'العمارة',
    en: 'Amarah',
    population: 420000,
    coordinates: { lat: 31.8365, lng: 47.1450 },
    governorate: 'maysan',
    districts: ['المدينة', 'علي الغربي', 'المجر الكبير', 'قلعة صالح', 'الكحلاء'],
    businessPotential: 'medium',
    keywords: ['العمارة', 'عمارة', 'ميسان', 'قلعة صالح']
  },
  
  // محافظة المثنى
  {
    key: 'samawah',
    ar: 'السماوة',
    en: 'Samawah',
    population: 197000,
    coordinates: { lat: 31.2833, lng: 45.2833 },
    governorate: 'muthanna',
    districts: ['المدينة', 'الرميثة', 'الخضر', 'السلمان', 'الوركاء'],
    businessPotential: 'low',
    keywords: ['السماوة', 'سماوة', 'المثنى', 'الرميثة']
  },
  
  // محافظة واسط
  {
    key: 'kut',
    ar: 'الكوت',
    en: 'Kut',
    population: 389400,
    coordinates: { lat: 32.5086, lng: 45.8197 },
    governorate: 'wasit',
    districts: ['المدينة', 'الحي', 'الصويرة', 'النعمانية', 'بدرة'],
    businessPotential: 'medium',
    keywords: ['الكوت', 'كوت', 'واسط', 'الحي']
  },
  
  // محافظة صلاح الدين
  {
    key: 'tikrit',
    ar: 'تكريت',
    en: 'Tikrit',
    population: 204000,
    coordinates: { lat: 34.6092, lng: 43.6778 },
    governorate: 'salah-ad-din',
    districts: ['المدينة', 'سامراء', 'بيجي', 'الدور', 'الشرقاط'],
    businessPotential: 'medium',
    keywords: ['تكريت', 'صلاح الدين', 'سامراء', 'بيجي']
  },
  
  {
    key: 'samarra',
    ar: 'سامراء',
    en: 'Samarra',
    population: 208000,
    coordinates: { lat: 34.1957, lng: 43.8739 },
    governorate: 'salah-ad-din',
    businessPotential: 'medium',
    keywords: ['سامراء', 'سامرا', 'العسكري', 'صلاح الدين']
  },
  
  // محافظة دهوك
  {
    key: 'duhok',
    ar: 'دهوك',
    en: 'Duhok',
    population: 548000,
    coordinates: { lat: 36.8675, lng: 42.9533 },
    governorate: 'duhok',
    districts: ['المدينة', 'زاخو', 'عقرة', 'سميل', 'شيخان'],
    businessPotential: 'medium',
    keywords: ['دهوك', 'دهۆک', 'زاخو', 'كردستان']
  },
  
  // مدن إضافية مهمة
  {
    key: 'kufa',
    ar: 'الكوفة',
    en: 'Kufa',
    population: 110000,
    coordinates: { lat: 32.0289, lng: 44.4014 },
    governorate: 'najaf',
    businessPotential: 'medium',
    keywords: ['الكوفة', 'كوفة', 'النجف']
  },
  
  {
    key: 'khanaqin',
    ar: 'خانقين',
    en: 'Khanaqin',
    population: 85000,
    coordinates: { lat: 34.3519, lng: 45.3861 },
    governorate: 'diyala',
    businessPotential: 'low',
    keywords: ['خانقين', 'ديالى', 'الحدود']
  },
  
  {
    key: 'zakho',
    ar: 'زاخو',
    en: 'Zakho',
    population: 350000,
    coordinates: { lat: 37.1437, lng: 42.6908 },
    governorate: 'duhok',
    businessPotential: 'medium',
    keywords: ['زاخو', 'زاخۆ', 'الحدود التركية', 'دهوك']
  },
  
  {
    key: 'halabja',
    ar: 'حلبجة',
    en: 'Halabja',
    population: 95089,
    coordinates: { lat: 35.1778, lng: 45.9856 },
    governorate: 'halabja',
    businessPotential: 'low',
    keywords: ['حلبجة', 'ھەڵەبجە', 'كردستان']
  },
];

// دالة للحصول على مدينة حسب المفتاح
export function getCityByKey(key: string): IraqCity | undefined {
  return IRAQ_CITIES.find(city => city.key === key);
}

// دالة للحصول على مدن حسب المحافظة
export function getCitiesByGovernorate(governorate: string): IraqCity[] {
  return IRAQ_CITIES.filter(city => city.governorate === governorate);
}

// دالة للحصول على المدن عالية الإمكانات التجارية
export function getHighPotentialCities(): IraqCity[] {
  return IRAQ_CITIES.filter(city => city.businessPotential === 'high');
}

// دالة للبحث في المدن
export function searchCities(query: string): IraqCity[] {
  const lowerQuery = query.toLowerCase();
  return IRAQ_CITIES.filter(city => 
    city.ar.includes(query) || 
    city.en.toLowerCase().includes(lowerQuery) ||
    city.keywords.some(k => k.includes(query))
  );
}

// المدن الرئيسية (للاستخدام في generateStaticParams)
export const MAIN_CITIES = IRAQ_CITIES.filter(city => 
  city.businessPotential === 'high'
).map(city => city.key);

// جميع مفاتيح المدن
export const ALL_CITY_KEYS = IRAQ_CITIES.map(city => city.key);
