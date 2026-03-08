import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SKIF-USA | Shotokan Karate-Do International Federation',
  description: 'Official United States branch of the Shotokan Karate-Do International Federation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ADDED crossOrigin="anonymous" TO FIX LIGHTHOUSE WARNING */}
        <link rel="preconnect" href="https://zil3k1gj.api.sanity.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}