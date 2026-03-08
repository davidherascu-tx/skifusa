import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar'; // <-- IMPORTED NAVBAR
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
        <link rel="preconnect" href="https://zil3k1gj.api.sanity.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      </head>
      <body className="antialiased">
        <Navbar /> {/* <-- ADDED BACK HERE */}
        {children}
        <Footer />
      </body>
    </html>
  );
}