import type { Metadata } from 'next';

const title = 'Events';
const description =
  'Browse the SKIF-USA federation schedule of upcoming seminars, gasshukus, and Shotokan Karate events across the United States.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/events' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://www.skifusa.org/events',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
