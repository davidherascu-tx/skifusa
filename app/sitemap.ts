import type { MetadataRoute } from 'next';

const SITE_URL = 'https://skifusa.org';

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/dojo', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/events', changeFrequency: 'daily', priority: 0.9 },
  { path: '/registry', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/news', changeFrequency: 'daily', priority: 0.8 },
  { path: '/membership', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/instructors', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/technical', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/history', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/board', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/hall-of-fame', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/philosophy', changeFrequency: 'monthly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
