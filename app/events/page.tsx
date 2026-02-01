"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Clock, Video, Trophy, GraduationCap, ChevronRight, Filter } from "lucide-react";

// --- CORRECTED CALENDAR DATA ---
const events = [
  {
    id: 1,
    title: "Karate Seminar with Ruben Fung, 6.Dan",
    type: "Seminar",
    dateDisplay: "Feb 20-21",
    date: "2026-02-20", 
    schedule: [
      { day: "Friday 20th", time: "5:30PM - 7:30PM" },
      { day: "Saturday 21st", time: "4:30PM - 7:00PM" }
    ],
    location: "Hillsboro Shotokan Karate Club, OR",
    description: "An official SKIF-USA sanctioned technical seminar focusing on advanced kata and kihon.",
    link: "/news"
  },
  {
    id: 2,
    title: "2026 SKIF Houston Annual Gasshuku",
    type: "Seminar",
    dateDisplay: "Mar 7-8",
    date: "2026-03-07",
    schedule: [
      { day: "Saturday 7th", time: "Full Technical Schedule" },
      { day: "Sunday 8th", time: "Technical Review & Training" }
    ],
    location: "Houston, TX",
    description: "Annual intensive training camp featuring senior SKIF-USA instructors.",
    link: "/news"
  }
];

export default function CalendarPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = events.filter(event => 
    filter === "All" ? true : event.type === filter
  );

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-red-600 pl-6 max-w-4xl"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Federation Schedule</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
            Event <span className="text-neutral-700">Calendar</span>
          </h1>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl leading-relaxed">
            Stay updated with upcoming technical seminars and annual training camps hosted by SKIF-USA.
          </p>
        </motion.div>

        {/* --- FILTER TABS --- */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-neutral-900 pb-8">
          {["All", "Seminar", "Tournament", "Online"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                filter === type 
                ? "bg-red-600 text-white shadow-lg shadow-red-900/20" 
                : "bg-neutral-900 text-neutral-500 hover:text-white border border-neutral-800"
              }`}
            >
              {type}s
            </button>
          ))}
        </div>

        {/* --- EVENTS LIST --- */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="group relative bg-neutral-950 border border-neutral-900 rounded-3xl p-6 md:p-8 hover:border-red-600 transition-all flex flex-col md:flex-row gap-8 items-start shadow-xl"
                >
                  {/* Date Block */}
                  <div className="flex flex-col items-center justify-center bg-neutral-900 rounded-2xl w-24 h-24 shrink-0 border border-neutral-800 group-hover:bg-red-600 group-hover:border-red-500 transition-colors">
                    <span className="text-[10px] font-black text-neutral-500 group-hover:text-white uppercase tracking-tighter">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="text-xl font-black group-hover:text-white leading-none mt-1">
                      {event.dateDisplay.split(' ')[1]}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-600/10 px-2.5 py-1 rounded-md">
                        <GraduationCap size={12} />
                        {event.type}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-red-500 transition-colors">
                      {event.title}
                    </h3>

                    {/* Schedule Display */}
                    <div className="space-y-2 py-2">
                      {event.schedule.map((slot, index) => (
                        <div key={index} className="flex items-center gap-3 text-neutral-400 font-mono text-xs">
                          <Clock size={14} className="text-red-600 shrink-0" />
                          <span className="text-neutral-200 font-bold">{slot.day}:</span>
                          <span>{slot.time}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="shrink-0 w-full md:w-auto self-center">
                     <a 
                      href={event.link} 
                      className="flex items-center justify-center gap-2 w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all group/btn"
                     >
                       Event Details 
                       <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                     </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center border-2 border-dashed border-neutral-900 rounded-[3.5rem]"
              >
                <p className="text-neutral-600 uppercase tracking-[0.4em] font-black text-sm">No scheduled events found for this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-40 text-center">
          <p className="text-neutral-600 uppercase tracking-[0.4em] text-[10px] font-mono">
            One Style • One Spirit • One Federation
          </p>
        </div>

      </div>
    </main>
  );
}