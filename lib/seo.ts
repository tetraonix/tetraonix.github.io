import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Tetraonix Consulting',
  shortName: 'Tetraonix',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tetraonix.github.io',
  description:
    'Tetraonix provides enterprise AI automation, QA engineering, HRMS platforms, cloud modernization, cybersecurity, data engineering, managed support, and workforce solutions.',
  email: 'contact@tetraonix.com',
  keywords: [
    'Tetraonix',
    'enterprise AI consulting',
    'AI automation consulting',
    'QA engineering services',
    'test automation consulting',
    'HRMS software',
    'workforce management platform',
    'cloud modernization services',
    'managed IT support',
    'cybersecurity consulting',
    'technology staffing services',
  ],
};

export const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/platform', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/hrms', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/industries', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/support', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/company', priority: 0.65, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
];

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

type SeoMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = '/',
  image = '/home/enterprise-command-hero.png',
  keywords = [],
}: SeoMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    logo: absoluteUrl('/brand/tetraonix-text-logo.png'),
    sameAs: [siteConfig.url],
    description: siteConfig.description,
    knowsAbout: [
      'Enterprise AI automation',
      'Quality assurance engineering',
      'HRMS implementation',
      'Cloud modernization',
      'Cybersecurity governance',
      'Managed support services',
      'Technology staffing',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

export function serviceJsonLd(name: string, description: string, path: string, serviceType: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    url: absoluteUrl(path),
  };
}
