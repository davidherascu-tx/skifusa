import type { Metadata } from 'next';

const title = 'Our Instructors';
const description =
  'Meet the SKIF-USA technical committee dedicated to preserving the traditional Shotokan Karate standards established by Kanazawa Soke.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/instructors' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://skifusa.org/instructors',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function InstructorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
