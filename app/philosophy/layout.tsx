import type { Metadata } from 'next';

const title = 'Philosophy';
const description =
  "Explore the mission and philosophy behind the SKIF system and SKIF-USA's approach to traditional Shotokan Karate-Do.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/philosophy' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://skifusa.org/philosophy',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function PhilosophyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
