import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// LEGACY WORDPRESS URL MAP
// The site was migrated off WordPress (WooCommerce + The Events Calendar +
// custom post types). Google still has ~950 of the old URLs in its index and
// every one of them was returning a hard 404. Each entry below sends an old
// URL to its closest equivalent on the current site so the link equity and
// the crawl budget are not thrown away.
//
// Deliberately NOT redirected (a real 404 is the honest answer, and Google
// drops these faster than it drops an irrelevant redirect):
//   /shop, /shop-2, /cart, /checkout, /my-account/*, /product/*,
//   /product-category/*, /skif-usa-t-shirt, /skif-usa-holiday-sale
//     -> the WooCommerce store no longer exists
//   /wp-content/*, /wp-includes/*, /wp-admin/*, /wp-json/*, /wp-sitemap*.xml,
//   /wp-login.php, /xmlrpc.php
//     -> WordPress internals, never had a public equivalent
//   /cookie-policy, /covid-19, /elementor-210637, /warning-message, /now-connect
//     -> no current equivalent
// ---------------------------------------------------------------------------

const EVENT_PAGES = [
  '/calendar',
  '/even',
  '/kanazawa-week',
  '/2022-shotokan-karate-do-center-annual-skif-gasshuku',
  '/2023-houston-annual-skif-gasshuku',
  '/2023-houston-annual-skif-gasshuku-2',
  '/2024-houston-annual-skif-gasshuku',
  '/2025-houston-annual-skif-gasshuku',
  '/2026-skif-cincinnati-gasshuku',
  '/2026-skif-hawaii-seminar',
  '/2026-skif-houston-annual-gasshuku',
  '/karate-seminar-with-ruben-fung-6-dan-february-20-21-2026',
  '/kata-seminar-with-clay-morton-sensei',
  '/skif-cincinnati-2025-seminar-hiyori-kanazawa',
  '/skif-cincinnati-seminar-with-fumitoshi-kanazawa-sensei',
  '/skif-karate-seminar-in-new-york-city',
  '/skif-minnesota-seminar-with-fumitoshi-kanazawa-sensei',
  '/skif-usa-cross-dojo-virtual-training',
  '/training-with-shihan-murakami-in-hillsboro',
  '/skif-usa-zoom-event-april-17-2021',
  '/skif-usa-zoom-event-august-20th-2022',
  '/skif-usa-zoom-event-august-29-2021',
  '/skif-usa-zoom-event-dec-15-2024',
  '/skif-usa-zoom-event-july-19-2025',
  '/skif-usa-zoom-event-july-22th-2023',
  '/skif-usa-zoom-event-july-23th-2022',
  '/skif-usa-zoom-event-june-18th-2022',
  '/skif-usa-zoom-event-june-19-2021',
  '/skif-usa-zoom-event-march-27-2021',
  '/skif-usa-zoom-event-may-22-2021',
  '/skif-usa-zoom-event-may-24-2025',
  '/skif-usa-zoom-event-november-11th-2023',
  '/skif-usa-zoom-event-november-13-2021',
  '/skif-usa-zoom-event-oct-27-2024',
  '/skif-usa-zoom-event-october-16-2021',
  '/skif-usa-zoom-event-sept-21-2024',
  '/skif-usa-zoom-event-september-26-2021',
  '/skif-usa-zoom-event-with-paul-huglo-december-13-2025',
  '/zoom-live-training-seminar',
  '/zoom-live-training-seminar-copy',
  '/zoom-live-training-seminar-copy-copy',
  '/zoom-live-training-seminar-copy-copy-copy',
  '/zoom-live-training-seminar-copy-copy-copy-copy',
  '/zoom-live-training-seminar-copy-copy-copy-copy-copy',
  '/zoom-live-training-seminar-copy-copy-copy-copy-copy-2',
  '/zoom-live-training-seminar-copy-copy-copy-copy-copy-2-copy',
  '/zoom-live-training-seminar-copy-copy-copy-copy-copy-2-copy-copy',
];

const NEWS_PAGES = [
  '/19-0531-skif-usa-fb-page',
  '/2021-holiday-greetings-from-skif-japan-hq',
  '/2021-holiday-greetings-from-skif-usa',
  '/new-website-online',
  '/newsletter',
  '/newsletter-fall-winter-2019',
  '/newsletter-fall-winter-2019-copy',
  '/newsletter-fall-winter-2025',
  '/newsletter-spring-summer-2023',
  '/newsletter-spring-summer-2024',
  '/shihan-francis-fong-passing',
];

const HALL_OF_FAME_PAGES = [
  '/2022-inductee-into-the-skif-usa-hall-of-fame',
  '/skif-usa-hall-of-fame',
  '/skif-usa-hall-of-fame-copy',
];

const HOME_PAGES = ['/home', '/home-2023', '/home-2026-version-1', '/home-2026-version-2'];

const ONE_OFF_PAGES: Record<string, string> = {
  '/about-us': '/history',
  '/greetings-from-the-general-secretary': '/board',
  '/black-belt-registry': '/registry',
  '/find-a-dojo': '/dojo',
  '/doshinkai-dojo-skif-cincinnati': '/dojo',
};

function toRedirects(sources: string[], destination: string) {
  return sources.map((source) => ({ source, destination, permanent: true }));
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ],
  },
  // Removes console.logs in production to save a bit of bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async headers() {
    return [
      {
        // Keep the CMS out of the index. Served as a header rather than a
        // robots.txt block so Googlebot can actually fetch and obey it.
        source: '/studio/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/studio',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },

  async redirects() {
    return [
      // --- Legacy custom post types (the bulk of the 404s) ---
      // 753 archived URLs
      { source: '/black_belt_registry/:path*', destination: '/registry', permanent: true },
      // 101 archived URLs
      { source: '/dojo_name/:path*', destination: '/dojo', permanent: true },
      { source: '/team-showcase/:path*', destination: '/instructors', permanent: true },
      { source: '/download/:path*', destination: '/technical', permanent: true },

      // --- The Events Calendar plugin ---
      { source: '/event/:path*', destination: '/events', permanent: true },
      // Date/list/month archives such as /events/2024-03-09/. Split into two
      // rules instead of `:path*` so that /events itself does not self-redirect.
      { source: '/events/:slug', destination: '/events', permanent: true },
      { source: '/events/:slug/:rest*', destination: '/events', permanent: true },

      // --- Legacy blog taxonomies and pagination ---
      { source: '/category/:path*', destination: '/news', permanent: true },
      { source: '/author/:path*', destination: '/news', permanent: true },
      { source: '/tag/:path*', destination: '/news', permanent: true },

      // --- Legacy standalone pages ---
      ...toRedirects(EVENT_PAGES, '/events'),
      ...toRedirects(NEWS_PAGES, '/news'),
      ...toRedirects(HALL_OF_FAME_PAGES, '/hall-of-fame'),
      ...toRedirects(HOME_PAGES, '/'),
      ...Object.entries(ONE_OFF_PAGES).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
