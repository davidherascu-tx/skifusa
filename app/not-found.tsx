import type { Metadata } from 'next';
import NextLink from 'next/link';

// A 404 must not advertise a canonical URL — the inherited `canonical: '/'`
// from the root layout told Google this page was the homepage.
export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for is no longer available.',
  // Next.js already emits `noindex` for the not-found route; only the
  // inherited canonical needs clearing.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-neutral-900 pt-28 md:pt-48 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="border-l-4 border-red-600 pl-6">
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Error 404</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            Page <span className="text-neutral-400">Not Found</span>
          </h1>
          <p className="text-neutral-600 text-lg leading-relaxed max-w-xl mb-10">
            This page has moved or is no longer available. Use the links below to find what you
            are looking for.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/events', label: 'Events' },
              { href: '/dojo', label: 'Find a Dojo' },
              { href: '/registry', label: 'Black Belt Registry' },
              { href: '/news', label: 'News' },
            ].map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="bg-neutral-900 hover:bg-red-600 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-colors"
              >
                {link.label}
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
