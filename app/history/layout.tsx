import type { Metadata } from 'next';

const title = 'Our History';
const description =
  'Learn the history of SKIF-USA, a private not-for-profit educational karate organization founded in 1998 and directly affiliated with SKIF Japan.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/history' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://skifusa.org/history',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
