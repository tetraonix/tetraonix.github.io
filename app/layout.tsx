import type { Metadata } from 'next';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { createMetadata, organizationJsonLd, siteConfig, websiteJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/brand/tetraonix-icon.png',
    apple: '/brand/tetraonix-icon.png',
  },
  ...createMetadata({
    title: 'Tetraonix Consulting | Enterprise AI, QA, HRMS, Cloud & Workforce Solutions',
    description: siteConfig.description,
    path: '/',
    keywords: ['enterprise technology consulting', 'digital transformation consulting', 'AI QA HRMS cloud support'],
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
