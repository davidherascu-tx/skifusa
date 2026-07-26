import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SKIF-USA | Shotokan Karate-Do International Federation',
    short_name: 'SKIF-USA',
    description:
      'Official United States branch of the Shotokan Karate-Do International Federation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F5F5',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
