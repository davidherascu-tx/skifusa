import type { Metadata } from 'next';

const title = 'Membership';
const description =
  'Join SKIF-USA and become part of a global legacy with direct affiliation to Japan and a community dedicated to the highest standards of Shotokan Karate.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/membership' },
  openGraph: {
    title: `${title} | SKIF-USA`,
    description,
    url: 'https://skifusa.org/membership',
  },
  twitter: {
    title: `${title} | SKIF-USA`,
    description,
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
