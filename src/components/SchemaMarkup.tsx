'use client';

/**
 * Schema Markup Components - Structured Data for SEO
 * استخدام Schema.org لتحسين ظهور الموقع في محركات البحث
 */

import { Service } from '@/content/services';
import { BusinessType } from '@/content/businessTypes';
import { Language } from '@/content/languages';
import type { IraqCity } from '@/content/iraqCities';

interface SchemaMarkupProps {
  lang: Language;
  service: Service;
  business: BusinessType;
  city: string;
  faqs: { question: { ar: string; en: string }; answer: { ar: string; en: string } }[];
}

const SchemaMarkup = ({ lang, service, business, city, faqs }: SchemaMarkupProps) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'HMZ IRAQ - همز العراق',
    'url': `https://www.hmziraq.services/${lang}`,
    'logo': `https://www.hmziraq.services/logo.png`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+964-XXX-XXXXXX',
      'contactType': 'Customer Service',
    },
    'sameAs': [
      'https://www.facebook.com/hmziraq',
      'https://www.instagram.com/hmziraq',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.name[lang],
    'provider': {
      '@type': 'Organization',
      'name': 'HMZ IRAQ - همز العراق',
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'Iraq',
    },
    'name': `${service.name[lang]} لـ ${business.name[lang]} في ${city}`,
    'description': `نقدم خدمة ${service.name[lang]} مخصصة لـ ${business.name[lang]} في ${city} لزيادة الأرباح وتحسين تجربة العملاء.`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question[lang],
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer[lang],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;

// ==================== NEW ADVANCED SCHEMAS ====================

interface LocalBusinessSchemaProps {
  service: {
    ar: string;
    en: string;
  };
  city: IraqCity;
  lang: string;
}

export function LocalBusinessSchema({ service, city, lang }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.hmziraq.services#${service.en.toLowerCase().replace(/\s+/g, '-')}-${city.key}`,
    name: lang === 'ar' 
      ? `${service.ar} في ${city.ar} - حسان الزين`
      : `${service.en} in ${city.en} - Hassan Alzain`,
    alternateName: 'HMZ Iraq Digital Solutions',
    url: `https://www.hmziraq.services/${lang}/services/${service.en.toLowerCase().replace(/\s+/g, '-')}/in/${city.key}`,
    telephone: '+964-750-XXX-XXXX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.ar,
      addressRegion: city.governorate,
      addressCountry: 'IQ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '287',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IQD',
      lowPrice: '500000',
      highPrice: '25000000',
      offerCount: '12',
    },
    areaServed: {
      '@type': 'City',
      name: city.ar,
    },
    sameAs: [
      'https://www.facebook.com/hmziraq',
      'https://www.instagram.com/hmziraq',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  lang: string;
}

export function OrganizationSchema({ lang }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.hmziraq.services#organization',
    name: 'HMZ Iraq - حسان الزين',
    alternateName: lang === 'ar' ? 'حسان الزين للحلول الرقمية' : 'Hassan Alzain Digital Solutions',
    url: 'https://www.hmziraq.services',
    logo: 'https://www.hmziraq.services/logo.png',
    description: lang === 'ar'
      ? 'شركة متخصصة في تطوير المواقع والتطبيقات والحلول الرقمية في العراق'
      : 'Specialized company in web development, apps, and digital solutions in Iraq',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: lang === 'ar' ? 'حسان الزين' : 'Hassan Alzain',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IQ',
      addressRegion: 'Baghdad',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+964-750-XXX-XXXX',
      contactType: 'customer service',
      areaServed: 'IQ',
      availableLanguage: ['ar', 'en', 'ku'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '287',
      bestRating: '5',
    },
    sameAs: [
      'https://www.facebook.com/hmziraq',
      'https://www.instagram.com/hmziraq',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  imageUrl?: string;
  url: string;
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  imageUrl,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HMZ Iraq',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.hmziraq.services/logo.png',
      },
    },
    image: imageUrl || 'https://www.hmziraq.services/default-article-image.jpg',
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
