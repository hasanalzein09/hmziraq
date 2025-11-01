'use client';

import { useRouter } from 'next/navigation';

interface ProjectFiltersProps {
  lang: 'ar' | 'en';
  serviceFilter?: string;
  categoryFilter?: string;
  services: Array<{ key: string; name: { ar: string; en: string } }>;
  categories: string[];
}

export default function ProjectFilters({
  lang,
  serviceFilter,
  categoryFilter,
  services,
  categories,
}: ProjectFiltersProps) {
  const router = useRouter();

  const handleServiceChange = (value: string) => {
    const params = new URLSearchParams();
    if (value) params.set('service', value);
    if (categoryFilter) params.set('category', categoryFilter);
    router.push(`/${lang}/projects${params.toString() ? '?' + params.toString() : ''}`);
  };

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams();
    if (serviceFilter) params.set('service', serviceFilter);
    if (value) params.set('category', value);
    router.push(`/${lang}/projects${params.toString() ? '?' + params.toString() : ''}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Service Filter */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {lang === 'ar' ? 'تصفية حسب الخدمة' : 'Filter by Service'}
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={serviceFilter || ''}
          onChange={(e) => handleServiceChange(e.target.value)}
        >
          <option value="">{lang === 'ar' ? 'جميع الخدمات' : 'All Services'}</option>
          {services.map((service) => (
            <option key={service.key} value={service.key}>
              {service.name[lang]}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {lang === 'ar' ? 'تصفية حسب القطاع' : 'Filter by Category'}
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={categoryFilter || ''}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">{lang === 'ar' ? 'جميع القطاعات' : 'All Categories'}</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
