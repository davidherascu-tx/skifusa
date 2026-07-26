import type { Metadata } from 'next';

const title = 'Hall of Fame';
const description =
  'Honoring the karate-ka enshrined in the SKIF-USA Hall of Fame for their invaluable contributions to the federation and Shotokan Karate.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/hall-of-fame' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://www.skifusa.org/hall-of-fame',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function HallOfFameLayout({ children }: { children: React.ReactNode }) {
  return children;
}
