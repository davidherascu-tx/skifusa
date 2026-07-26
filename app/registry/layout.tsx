import type { Metadata } from 'next';

const title = 'Black Belt Registry';
const description =
  'Verify official SKIF-USA technical grades and dojo affiliations through the centralized Black Belt Registry.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/registry' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://www.skifusa.org/registry',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function RegistryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
