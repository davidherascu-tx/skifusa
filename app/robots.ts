import type { MetadataRoute } from 'next';

const SITE_URL = 'https://skifusa.org';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /studio is intentionally crawlable so Google can read its
      // `X-Robots-Tag: noindex` header (see next.config.ts). A robots.txt
      // block would hide that header and let the URLs linger in the index.
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
