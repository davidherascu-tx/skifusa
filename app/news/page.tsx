import { client } from "@/sanity/lib/client";
import NewsClient from "./NewsClient";

// Rendered per request so CMS edits appear immediately, while still putting
// the full news list into the server HTML for crawlers.
export const dynamic = 'force-dynamic';

const NEWS_QUERY = `
  *[_type == "news"] | order(date desc) {
    _id, title, date, description, image,
    "pdfUrl": pdfDocument.asset->url
  }
`;

export default async function NewsPage() {
  const newsItems = await client.fetch(NEWS_QUERY, {}, { cache: 'no-store' });
  return <NewsClient newsItems={newsItems ?? []} />;
}
