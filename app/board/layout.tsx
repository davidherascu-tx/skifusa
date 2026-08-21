import type { Metadata } from 'next';

const title = 'Board of Directors';
const description =
  'Meet the volunteer Board of Directors guiding SKIF-USA, the official U.S. branch of the Shotokan Karate-Do International Federation.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/board' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://skifusa.org/board',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
