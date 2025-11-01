const fs = require('fs');

// CRM Projects (451-500)
const crmProjects = [
  {
    id: 'project-451',
    slug: 'crm-real-estate-baghdad',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لشركة عقارات في بغداد', en: 'CRM System for Real Estate Company in Baghdad' },
    description: { ar: 'نظام إدارة علاقات العملاء لتتبع العقارات والعملاء المحتملين', en: 'CRM system for tracking properties and potential customers' },
    category: { ar: 'عقارات', en: 'Real Estate' },
  },
  {
    id: 'project-452',
    slug: 'crm-car-dealership-basra',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لمعرض سيارات في البصرة', en: 'CRM System for Car Dealership in Basra' },
    description: { ar: 'نظام إدارة المبيعات والعملاء لمعرض السيارات', en: 'Sales and customer management system for car showroom' },
    category: { ar: 'سيارات', en: 'Automotive' },
  },
  {
    id: 'project-453',
    slug: 'crm-insurance-company-erbil',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لشركة تأمين في أربيل', en: 'CRM System for Insurance Company in Erbil' },
    description: { ar: 'نظام إدارة العملاء والوثائق والمطالبات', en: 'Customer, policy, and claims management system' },
    category: { ar: 'تأمين', en: 'Insurance' },
  },
  {
    id: 'project-454',
    slug: 'crm-telecom-provider-baghdad',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لمزود اتصالات في بغداد', en: 'CRM System for Telecom Provider in Baghdad' },
    description: { ar: 'نظام إدارة المشتركين والشكاوى والفواتير', en: 'Subscriber, complaints, and billing management' },
    category: { ar: 'اتصالات', en: 'Telecom' },
  },
  {
    id: 'project-455',
    slug: 'crm-gym-chain-najaf',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لسلسلة نوادي رياضية في النجف', en: 'CRM System for Gym Chain in Najaf' },
    description: { ar: 'نظام إدارة الأعضاء والاشتراكات والتسويق', en: 'Members, subscriptions, and marketing management' },
    category: { ar: 'رياضة', en: 'Fitness' },
  },
  {
    id: 'project-456',
    slug: 'crm-travel-agency-baghdad',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لوكالة سفر في بغداد', en: 'CRM System for Travel Agency in Baghdad' },
    description: { ar: 'نظام إدارة الحجوزات والعملاء والعروض السياحية', en: 'Bookings, customers, and travel packages management' },
    category: { ar: 'سياحة', en: 'Travel' },
  },
  {
    id: 'project-457',
    slug: 'crm-medical-clinic-basra',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لعيادة طبية في البصرة', en: 'CRM System for Medical Clinic in Basra' },
    description: { ar: 'نظام إدارة المرضى والمواعيد والمتابعات', en: 'Patients, appointments, and follow-ups management' },
    category: { ar: 'طب', en: 'Medical' },
  },
  {
    id: 'project-458',
    slug: 'crm-law-firm-erbil',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لمكتب محاماة في أربيل', en: 'CRM System for Law Firm in Erbil' },
    description: { ar: 'نظام إدارة القضايا والعملاء والاستشارات', en: 'Cases, clients, and consultations management' },
    category: { ar: 'قانون', en: 'Legal' },
  },
  {
    id: 'project-459',
    slug: 'crm-beauty-salon-chain-baghdad',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لسلسلة صالونات تجميل في بغداد', en: 'CRM System for Beauty Salon Chain in Baghdad' },
    description: { ar: 'نظام إدارة الحجوزات والعملاء وبرامج الولاء', en: 'Bookings, customers, and loyalty programs management' },
    category: { ar: 'تجميل', en: 'Beauty' },
  },
  {
    id: 'project-460',
    slug: 'crm-advertising-agency-baghdad',
    serviceKey: 'crm-system',
    title: { ar: 'نظام CRM لوكالة إعلانات في بغداد', en: 'CRM System for Advertising Agency in Baghdad' },
    description: { ar: 'نظام إدارة العملاء والحملات الإعلانية', en: 'Clients and advertising campaigns management' },
    category: { ar: 'إعلان', en: 'Advertising' },
  },
];

// Generate remaining 40 CRM projects
for (let i = 11; i <= 50; i++) {
  crmProjects.push({
    id: `project-${450 + i}`,
    slug: `crm-system-project-${i}`,
    serviceKey: 'crm-system',
    title: { ar: `نظام CRM لمشروع رقم ${i}`, en: `CRM System for Project ${i}` },
    description: { ar: 'نظام إدارة علاقات العملاء متكامل لعميل في العراق', en: 'Complete CRM system for Iraqi client' },
    category: { ar: 'أعمال', en: 'Business' },
  });
}

// Invoicing Projects (501-550)
const invoicingProjects = [
  {
    id: 'project-501',
    slug: 'invoicing-consulting-firm-baghdad',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لشركة استشارات في بغداد', en: 'Invoicing System for Consulting Firm in Baghdad' },
    description: { ar: 'نظام فوترة احترافي لإدارة فواتير الاستشارات', en: 'Professional invoicing system for consulting services' },
    category: { ar: 'استشارات', en: 'Consulting' },
  },
  {
    id: 'project-502',
    slug: 'invoicing-software-company-erbil',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لشركة برمجيات في أربيل', en: 'Invoicing System for Software Company in Erbil' },
    description: { ar: 'نظام فوترة للخدمات البرمجية والاشتراكات', en: 'Invoicing for software services and subscriptions' },
    category: { ar: 'برمجيات', en: 'Software' },
  },
  {
    id: 'project-503',
    slug: 'invoicing-graphic-design-studio-basra',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لاستديو تصميم في البصرة', en: 'Invoicing System for Design Studio in Basra' },
    description: { ar: 'نظام فوترة لخدمات التصميم الجرافيكي', en: 'Invoicing system for graphic design services' },
    category: { ar: 'تصميم', en: 'Design' },
  },
  {
    id: 'project-504',
    slug: 'invoicing-engineering-office-baghdad',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لمكتب هندسي في بغداد', en: 'Invoicing System for Engineering Office in Baghdad' },
    description: { ar: 'نظام فوترة للخدمات الهندسية والاستشارات', en: 'Invoicing for engineering services and consulting' },
    category: { ar: 'هندسة', en: 'Engineering' },
  },
  {
    id: 'project-505',
    slug: 'invoicing-training-center-najaf',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لمركز تدريب في النجف', en: 'Invoicing System for Training Center in Najaf' },
    description: { ar: 'نظام فوترة للدورات التدريبية والشهادات', en: 'Invoicing for training courses and certificates' },
    category: { ar: 'تدريب', en: 'Training' },
  },
  {
    id: 'project-506',
    slug: 'invoicing-photography-studio-erbil',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لاستديو تصوير في أربيل', en: 'Invoicing System for Photography Studio in Erbil' },
    description: { ar: 'نظام فوترة لخدمات التصوير الفوتوغرافي', en: 'Invoicing for photography services' },
    category: { ar: 'تصوير', en: 'Photography' },
  },
  {
    id: 'project-507',
    slug: 'invoicing-accounting-firm-baghdad',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لمكتب محاسبة في بغداد', en: 'Invoicing System for Accounting Firm in Baghdad' },
    description: { ar: 'نظام فوترة للخدمات المحاسبية والمالية', en: 'Invoicing for accounting and financial services' },
    category: { ar: 'محاسبة', en: 'Accounting' },
  },
  {
    id: 'project-508',
    slug: 'invoicing-translation-office-basra',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لمكتب ترجمة في البصرة', en: 'Invoicing System for Translation Office in Basra' },
    description: { ar: 'نظام فوترة لخدمات الترجمة والتوثيق', en: 'Invoicing for translation and notarization services' },
    category: { ar: 'ترجمة', en: 'Translation' },
  },
  {
    id: 'project-509',
    slug: 'invoicing-marketing-agency-baghdad',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لوكالة تسويق في بغداد', en: 'Invoicing System for Marketing Agency in Baghdad' },
    description: { ar: 'نظام فوترة للحملات التسويقية والإعلانية', en: 'Invoicing for marketing and advertising campaigns' },
    category: { ar: 'تسويق', en: 'Marketing' },
  },
  {
    id: 'project-510',
    slug: 'invoicing-event-management-erbil',
    serviceKey: 'invoicing-system',
    title: { ar: 'نظام فواتير لشركة تنظيم فعاليات في أربيل', en: 'Invoicing System for Event Management in Erbil' },
    description: { ar: 'نظام فوترة لخدمات تنظيم الفعاليات والمؤتمرات', en: 'Invoicing for events and conferences management' },
    category: { ar: 'فعاليات', en: 'Events' },
  },
];

// Generate remaining 40 Invoicing projects
for (let i = 11; i <= 50; i++) {
  invoicingProjects.push({
    id: `project-${500 + i}`,
    slug: `invoicing-system-project-${i}`,
    serviceKey: 'invoicing-system',
    title: { ar: `نظام فواتير لمشروع رقم ${i}`, en: `Invoicing System for Project ${i}` },
    description: { ar: 'نظام فوترة احترافي لعميل في العراق', en: 'Professional invoicing system for Iraqi client' },
    category: { ar: 'أعمال', en: 'Business' },
  });
}

// POS Projects (551-600)
const posProjects = [
  {
    id: 'project-551',
    slug: 'pos-restaurant-baghdad',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لمطعم في بغداد', en: 'POS System for Restaurant in Baghdad' },
    description: { ar: 'نظام نقاط بيع متكامل لإدارة الطلبات والمدفوعات', en: 'Complete POS system for orders and payments management' },
    category: { ar: 'مطاعم', en: 'Restaurant' },
  },
  {
    id: 'project-552',
    slug: 'pos-supermarket-basra',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لسوبرماركت في البصرة', en: 'POS System for Supermarket in Basra' },
    description: { ar: 'نظام كاشير ومخزون لإدارة السوبرماركت', en: 'Cashier and inventory system for supermarket' },
    category: { ar: 'سوبرماركت', en: 'Supermarket' },
  },
  {
    id: 'project-553',
    slug: 'pos-pharmacy-erbil',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لصيدلية في أربيل', en: 'POS System for Pharmacy in Erbil' },
    description: { ar: 'نظام نقاط بيع للأدوية مع إدارة الصلاحيات', en: 'POS system for medicines with expiry management' },
    category: { ar: 'صيدلية', en: 'Pharmacy' },
  },
  {
    id: 'project-554',
    slug: 'pos-clothing-store-baghdad',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لمحل ملابس في بغداد', en: 'POS System for Clothing Store in Baghdad' },
    description: { ar: 'نظام كاشير مع إدارة المقاسات والألوان', en: 'Cashier system with sizes and colors management' },
    category: { ar: 'ملابس', en: 'Clothing' },
  },
  {
    id: 'project-555',
    slug: 'pos-electronics-shop-najaf',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لمحل إلكترونيات في النجف', en: 'POS System for Electronics Shop in Najaf' },
    description: { ar: 'نظام نقاط بيع مع إدارة الضمانات والصيانة', en: 'POS system with warranty and maintenance management' },
    category: { ar: 'إلكترونيات', en: 'Electronics' },
  },
  {
    id: 'project-556',
    slug: 'pos-cafe-erbil',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لكافيه في أربيل', en: 'POS System for Cafe in Erbil' },
    description: { ar: 'نظام كاشير للمقاهي مع إدارة الطاولات', en: 'Cafe cashier system with table management' },
    category: { ar: 'مقاهي', en: 'Cafe' },
  },
  {
    id: 'project-557',
    slug: 'pos-bakery-basra',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لمخبز في البصرة', en: 'POS System for Bakery in Basra' },
    description: { ar: 'نظام نقاط بيع للمخابز مع إدارة الإنتاج اليومي', en: 'Bakery POS with daily production management' },
    category: { ar: 'مخابز', en: 'Bakery' },
  },
  {
    id: 'project-558',
    slug: 'pos-jewelry-store-baghdad',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لمحل مجوهرات في بغداد', en: 'POS System for Jewelry Store in Baghdad' },
    description: { ar: 'نظام كاشير للمجوهرات مع إدارة الأوزان والعيارات', en: 'Jewelry POS with weight and purity management' },
    category: { ar: 'مجوهرات', en: 'Jewelry' },
  },
  {
    id: 'project-559',
    slug: 'pos-bookstore-mosul',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لمكتبة في الموصل', en: 'POS System for Bookstore in Mosul' },
    description: { ar: 'نظام نقاط بيع للكتب والقرطاسية', en: 'POS system for books and stationery' },
    category: { ar: 'مكتبة', en: 'Bookstore' },
  },
  {
    id: 'project-560',
    slug: 'pos-gas-station-kirkuk',
    serviceKey: 'pos-system',
    title: { ar: 'نظام POS لمحطة وقود في كركوك', en: 'POS System for Gas Station in Kirkuk' },
    description: { ar: 'نظام كاشير لمحطات الوقود مع إدارة المضخات', en: 'Gas station POS with pump management' },
    category: { ar: 'وقود', en: 'Fuel' },
  },
];

// Generate remaining 40 POS projects
for (let i = 11; i <= 50; i++) {
  posProjects.push({
    id: `project-${550 + i}`,
    slug: `pos-system-project-${i}`,
    serviceKey: 'pos-system',
    title: { ar: `نظام POS لمشروع رقم ${i}`, en: `POS System for Project ${i}` },
    description: { ar: 'نظام نقاط بيع متكامل لعميل في العراق', en: 'Complete POS system for Iraqi client' },
    category: { ar: 'تجزئة', en: 'Retail' },
  });
}

// Combine all projects
const allNewProjects = [...crmProjects, ...invoicingProjects, ...posProjects];

// Format projects for the file
const projectsCode = allNewProjects.map(p => `  {
    id: '${p.id}',
    slug: '${p.slug}',
    serviceKey: '${p.serviceKey}',
    title: {
      ar: '${p.title.ar}',
      en: '${p.title.en}',
    },
    description: {
      ar: '${p.description.ar}',
      en: '${p.description.en}',
    },
    category: { ar: '${p.category.ar}', en: '${p.category.en}' },
  },`).join('\n');

console.log('✅ Generated 150 new projects (50 CRM + 50 Invoicing + 50 POS)');
console.log('Copy the following code and add it before the closing ]; in portfolioProjects.ts:\n');
console.log(projectsCode);
