import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hmziraq.tech'),
  title: {
    default: 'hmziraq.tech - تطوير المواقع والتطبيقات في العراق',
    template: '%s | hmziraq.tech'
  },
  description: 'شركة متخصصة في تطوير المواقع، التطبيقات، بوتات واتساب، المتاجر الإلكترونية، وحلول الذكاء الاصطناعي في العراق',
  keywords: [
    'تطوير مواقع العراق',
    'تطبيقات جوال العراق',
    'واتساب بوت',
    'متجر إلكتروني',
    'SEO العراق',
    'Web development Iraq',
    'Mobile apps Iraq'
  ],
  authors: [{ name: 'Hassan Zein', url: 'https://www.hmziraq.tech' }],
  creator: 'hmziraq.tech',
  publisher: 'hmziraq.tech',
  
  // Verification codes for search engines
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // أضف الكود من Google Search Console
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    other: {
      'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE', // أضف الكود من Bing Webmaster
    },
  },
  
  // Open Graph for social media
  openGraph: {
    type: 'website',
    locale: 'ar_IQ',
    alternateLocale: ['en_US'],
    url: 'https://www.hmziraq.tech',
    siteName: 'hmziraq.tech',
    title: 'hmziraq.tech - تطوير المواقع والتطبيقات في العراق',
    description: 'شركة متخصصة في تطوير المواقع، التطبيقات، وحلول الذكاء الاصطناعي في العراق',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'hmziraq.tech'
      }
    ]
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@hmziraq',
    creator: '@hmziraq',
    title: 'hmziraq.tech - تطوير المواقع والتطبيقات في العراق',
    description: 'شركة متخصصة في تطوير المواقع، التطبيقات، وحلول الذكاء الاصطناعي في العراق',
    images: ['/og-image.jpg']
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Alternate languages
  alternates: {
    canonical: 'https://www.hmziraq.tech',
    languages: {
      'ar': 'https://www.hmziraq.tech/ar',
      'en': 'https://www.hmziraq.tech/en',
    },
  },
  
  // Other metadata
  other: {
    // OpenAI/ChatGPT specific
    'openai:title': 'hmziraq.tech - Web & App Development',
    'openai:description': 'Specialized company in web development, apps, and AI solutions in Iraq',
    
    // Additional meta tags
    'article:publisher': 'hmziraq.tech',
    'article:author': 'Hassan Zein',
  },
};

const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your Google Analytics ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="hmziraq.tech RSS Feed" href="/feed.xml" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Organization Schema */}
        <Script id="organization-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.hmziraq.tech/#organization",
              "name": "hmziraq.tech",
              "alternateName": "حسان الزين",
              "url": "https://www.hmziraq.tech",
              "logo": "https://www.hmziraq.tech/logo.png",
              "description": "شركة متخصصة في تطوير المواقع والتطبيقات والحلول الرقمية في العراق",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IQ",
                "addressRegion": "Baghdad"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+964-750-XXX-XXXX",
                "contactType": "customer service",
                "areaServed": "IQ",
                "availableLanguage": ["ar", "en", "ku"]
              },
              "sameAs": [
                "https://facebook.com/hmziraq",
                "https://instagram.com/hmziraq",
                "https://twitter.com/hmziraq",
                "https://linkedin.com/company/hmziraq"
              ]
            }
          `}
        </Script>
        
        {/* Website Schema */}
        <Script id="website-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.hmziraq.tech/#website",
              "url": "https://www.hmziraq.tech",
              "name": "hmziraq.tech",
              "publisher": {
                "@id": "https://www.hmziraq.tech/#organization"
              },
              "inLanguage": ["ar", "en"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.hmziraq.tech/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}