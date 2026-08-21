"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Clock, GraduationCap, ChevronRight, X, ExternalLink, FileText } from "lucide-react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);
function urlFor(source: any) { return builder.image(source).url(); }

function formatEventDate(start: string, end?: string) {
  if (!start) return { month: "TBA", day: "TBA", year: "", full: "Dates to be announced" };
  const startDate = new Date(start + 'T12:00:00Z');
  const month = startDate.toLocaleString('default', { month: 'short' });
  const fullMonth = startDate.toLocaleString('default', { month: 'long' });
  let day = startDate.getDate().toString();
  const year = startDate.getFullYear().toString();
  let full = `${fullMonth} ${day}, ${year}`;

  if (end && end !== start) {
    const endDate = new Date(end + 'T12:00:00Z');
    day = `${startDate.getDate()}-${endDate.getDate()}`;
    full = `${fullMonth} ${startDate.getDate()} - ${endDate.getDate()}, ${startDate.getFullYear()}`;
  }
  return { month, day, year, full };
}

export default function EventsClient({ events }: { events: any[] }) {
  const [filter, setFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  // Events arrive server-rendered from page.tsx. This only handles the
  // ?id=... deep link used by the homepage cards.
  useEffect(() => {
    const targetId = new URLSearchParams(window.location.search).get('id');
    if (!targetId) return;
    const match = events.find((e: any) => e._id === targetId);
    if (match) setSelectedEvent(match);
  }, [events]);

  const filteredEvents = events.filter(event => filter === "All" ? true : event.category === filter);

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-neutral-900 selection:bg-red-600 selection:text-white pt-28 md:pt-48 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16 border-l-4 border-red-600 pl-6 max-w-4xl">
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Federation Schedule</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-neutral-900">
            Our <span className="text-neutral-400">Events</span>
          </h1>
        </motion.div>

        {/* --- FILTERS --- */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-neutral-200 pb-8">
          {["All", "Seminar", "Tournament"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                filter === type ? "bg-red-600 text-white shadow-md" : "bg-white text-neutral-500 hover:text-neutral-900 border border-neutral-200 shadow-sm hover:shadow-md"
              }`}
            >
              {type === "All" ? "All Events" : type + "s"}
            </button>
          ))}
        </div>

        {/* --- EVENT LIST --- */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => {
                const dateDisplay = formatEventDate(event.eventStartDate, event.eventEndDate);
                return (
                  <motion.div key={event._id} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    className="group relative bg-white border border-neutral-200 rounded-[2rem] p-6 md:p-8 hover:border-red-600/30 transition-all flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm hover:shadow-xl"
                  >
                    {/* CUSTOM Date Badge - Solid black */}
                    <div className="flex flex-col items-center justify-center bg-black rounded-2xl w-24 h-24 shrink-0 shadow-md group-hover:bg-red-600 transition-all duration-300">
                      <span className="text-[11px] font-black text-white uppercase tracking-widest transition-colors">{dateDisplay.month}</span>
                      <span className="text-2xl font-black text-white leading-none my-1 transition-colors">{dateDisplay.day}</span>
                      <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest transition-colors">{dateDisplay.year}</span>
                    </div>

                    {/* Image Thumbnail in List - object-contain to show whole image */}
                    <div className="relative w-full md:w-32 md:h-32 aspect-square rounded-xl overflow-hidden shrink-0 border border-neutral-100 hidden md:block bg-neutral-50 p-2">
                      <Image 
                        src={event.image ? urlFor(event.image) : "/fall_back_news_events.webp"} 
                        alt={event.title} 
                        fill 
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 space-y-4 w-full">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-600/10 px-2.5 py-1 rounded-md">
                          <GraduationCap size={12} /> {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-neutral-900">{event.title}</h3>
                      <p className="text-neutral-600 text-sm line-clamp-2 max-w-2xl leading-relaxed">{event.shortDescription || "Click event details for more information."}</p>
                      
                      <div className="flex items-center gap-2 text-neutral-500">
                        <MapPin size={16} className="text-red-600" />
                        <span className="text-sm font-medium">{event.location || "Location TBA"}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="shrink-0 w-full md:w-auto self-center">
                       <button onClick={() => setSelectedEvent(event)} className="flex items-center justify-center gap-2 w-full md:w-auto bg-neutral-900 hover:bg-red-600 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all group/btn shadow-lg">
                         Event Details <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 text-center border-2 border-dashed border-neutral-300 bg-white rounded-[3.5rem]">
                <p className="text-neutral-400 uppercase tracking-[0.4em] font-black text-sm">No scheduled events found.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- FULL EVENT DETAILS OVERLAY --- */}
        {selectedEvent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] flex flex-col overflow-y-auto">
            
            {/* Clickable Backdrop to close modal */}
            <div 
              className="fixed inset-0 bg-black/95 backdrop-blur-xl -z-10 cursor-pointer" 
              onClick={() => setSelectedEvent(null)}
              title="Click to close"
            />
            
            {/* Highly Visible Top Sticky Close Button */}
            <div className="sticky top-0 z-50 flex items-center justify-end p-6 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none">
              <button 
                onClick={() => setSelectedEvent(null)} 
                className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all border border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                <span className="text-xs font-black uppercase tracking-widest">Close</span>
                <X size={20} />
              </button>
            </div>
            
            <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 pb-12 cursor-default">
              
              <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
                
                <div className="flex-1 space-y-6 pt-4 text-center lg:text-left">
                  <span className="inline-block bg-red-600/10 text-red-500 border border-red-600/20 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs">
                    {selectedEvent.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                    {selectedEvent.title}
                  </h2>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-neutral-400 pt-4">
                    <div className="flex items-center gap-2 text-lg">
                      <CalendarIcon size={20} className="text-red-600" /> 
                      {formatEventDate(selectedEvent.eventStartDate, selectedEvent.eventEndDate).full}
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                      <MapPin size={20} className="text-red-600" /> 
                      {selectedEvent.location || "Location TBA"}
                    </div>
                  </div>

                  {/* --- NEW REGISTRATION BUTTON --- */}
                  {selectedEvent.registrationLink && (
                    <div className="pt-6 flex justify-center lg:justify-start">
                      <a 
                        href={selectedEvent.registrationLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:-translate-y-1"
                      >
                        Register Now <ExternalLink size={18} />
                      </a>
                    </div>
                  )}
                  {/* ------------------------------- */}

                </div>

                <div className="w-full lg:w-[45%] shrink-0">
                  <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-[2rem] overflow-hidden border border-neutral-800 bg-neutral-900/50 shadow-2xl">
                    <Image 
                      src={selectedEvent.image ? urlFor(selectedEvent.image) : "/fall_back_news_events.webp"} 
                      alt={selectedEvent.title} 
                      fill 
                      className="object-contain p-4" 
                    />
                  </div>
                </div>

              </div>

              <div className="max-w-4xl mx-auto space-y-16">
                
                <div className="space-y-6">
                  <h4 className="text-2xl font-black uppercase tracking-tight border-b border-neutral-800 pb-4 text-white">
                    Event Overview
                  </h4>
                  <p className="text-neutral-300 text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                    {selectedEvent.description || "No further details provided."}
                  </p>
                </div>

                {selectedEvent.schedule && selectedEvent.schedule.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black uppercase tracking-tight border-b border-neutral-800 pb-4 text-white">
                      Schedule
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedEvent.schedule.map((slot: any, index: number) => (
                        <div key={index} className="flex flex-col bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
                          <span className="font-bold text-white text-lg mb-1">{slot.day}</span>
                          <span className="text-red-400 font-mono flex items-center gap-2">
                            <Clock size={16} /> {slot.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.pdfUrl && (
                  <div className="space-y-6 pt-8">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                      <h4 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-white">
                        <FileText className="text-red-600" size={28} /> Official Document
                      </h4>
                      <a href={selectedEvent.pdfUrl} target="_blank" className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-white flex items-center gap-2 transition-colors">
                        Open in New Tab <ExternalLink size={14} />
                      </a>
                    </div>
                    <iframe src={`${selectedEvent.pdfUrl}#toolbar=0`} className="w-full h-[800px] rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl" />
                  </div>
                )}
                
                {/* Secondary Bottom Close Button */}
                <div className="pt-12 pb-8 flex justify-center border-t border-neutral-800 mt-16">
                   <button 
                     onClick={() => setSelectedEvent(null)} 
                     className="px-10 py-4 bg-neutral-900 border border-neutral-700 hover:bg-red-600 hover:border-red-500 text-white rounded-full font-black uppercase tracking-widest transition-colors flex items-center gap-3"
                   >
                      <X size={18} /> Close Event Details
                   </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </div>
    </main>
  );
}