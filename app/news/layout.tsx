import type { Metadata } from 'next';

const title = 'News';
const description =
  'Technical insights, federation updates, and stories from the global SKIF community in the SKIF-USA Journal.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/news' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://skifusa.org/news',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
