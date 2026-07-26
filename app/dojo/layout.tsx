import type { Metadata } from 'next';

const title = 'Find a Dojo';
const description =
  'Locate an official SKIF-USA affiliated Shotokan Karate dojo near you across the United States.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/dojo' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://www.skifusa.org/dojo',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function DojoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
