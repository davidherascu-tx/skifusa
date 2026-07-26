import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar'; // <-- IMPORTED NAVBAR
import Footer from '@/components/Footer';

const SITE_URL = 'https://www.skifusa.org';
const SITE_NAME = 'SKIF-USA';
const SITE_DESCRIPTION =
  'Official United States branch of the Shotokan Karate-Do International Federation (SKIF). Find SKIF-USA affiliated dojos, instructors, events, and the black belt registry.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SKIF-USA | Shotokan Karate-Do International Federation',
    template: '%s | SKIF-USA',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'SKIF-USA',
    'Shotokan Karate',
    'Shotokan Karate-Do International Federation',
    'Karate dojo USA',
    'Kanazawa Shotokan',
    'martial arts federation',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'SKIF-USA | Shotokan Karate-Do International Federation',
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKIF-USA | Shotokan Karate-Do International Federation',
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: '/favicon.ico',
  },
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
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: 'SKIF-USA',
  alternateName:
    'Shotokan Karate-Do International Federation - United States of America',
  url: SITE_URL,
  logo: `${SITE_URL}/skifusa_logo.webp`,
  description: SITE_DESCRIPTION,
  foundingDate: '1998',
  sameAs: ['https://facebook.com/groups/skifusa', 'https://instagram.com/skif_usa'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://zil3k1gj.api.sanity.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar /> {/* <-- ADDED BACK HERE */}
        {children}
        <Footer />
      </body>
    </html>
  );
}