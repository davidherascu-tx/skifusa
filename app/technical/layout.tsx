import type { Metadata } from 'next';

const title = 'Technical Resources';
const description =
  'Access official SKIF-USA documentation and research guidelines for advanced Shotokan Karate examinations.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/technical' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://www.skifusa.org/technical',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function TechnicalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
