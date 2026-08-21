import { client } from "@/sanity/lib/client";
import EventsClient from "./EventsClient";

// Rendered per request so CMS edits appear immediately, while still putting
// the full event list into the server HTML for crawlers.
export const dynamic = 'force-dynamic';

const EVENTS_QUERY = `
  *[_type == "event"] | order(eventStartDate asc) {
    _id, title, category, date, eventStartDate, eventEndDate, location, shortDescription, description, schedule, image,
    registrationLink,
    "pdfUrl": pdfDocument.asset->url
  }
`;

export default async function EventsPage() {
  const events = await client.fetch(EVENTS_QUERY, {}, { cache: 'no-store' });
  return <EventsClient events={events ?? []} />;
}
