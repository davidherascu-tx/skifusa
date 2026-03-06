"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

export default function InstructorsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Data list based on the group image from left to right
  const technicalLeaders = [
    { id: 1, name: "Hiyori Kanazawa", rank: "4th Dan", clip: "inset(0% 85% 0% 0%)" },
    { id: 2, name: "Fumitoshi Kanazawa", rank: "6th Dan", clip: "inset(0% 74% 0% 15%)" },
    { id: 3, name: "Shinji Tanaka", rank: "7th Dan", clip: "inset(0% 62% 0% 26%)" },
    { id: 4, name: "Nobuaki Kanazawa", rank: "8th Dan", clip: "inset(0% 50% 0% 38%)" },
    { id: 5, name: "Manabu Murakami", rank: "8th Dan", clip: "inset(0% 39% 0% 50%)" },
    { id: 6, name: "Ryusho Suzuki", rank: "7th Dan", clip: "inset(0% 27% 0% 61%)" },
    { id: 7, name: "Daizo Kanazawa", rank: "6th Dan", clip: "inset(0% 15% 0% 73%)" },
    { id: 8, name: "Paul Huglo", rank: "4th Dan", clip: "inset(0% 0% 0% 85%)" },
  ];

  // Mobile Scroll Observer: Automatically highlights the person when their card scrolls to the center
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only apply this scroll magic on mobile screens
          if (entry.isIntersecting && window.innerWidth < 768) {
            const id = Number(entry.target.getAttribute("data-id"));
            if (id) setHoveredId(id);
          }
        });
      },
      {
        // Triggers when the card enters the middle 20% of the screen height
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    const cards = document.querySelectorAll(".instructor-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-neutral-900 pt-28 md:pt-48 pb-20 px-6 selection:bg-red-600 selection:text-white">
      <div className="container mx-auto max-w-6xl relative">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16 border-l-4 border-red-600 pl-6 max-w-4xl"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Technical Leadership</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-neutral-900">
            Our <span className="text-neutral-400">Instructors</span>
          </h1>
          <p className="text-neutral-600 mt-6 text-lg max-w-2xl leading-relaxed">
            Technical committee dedicated to preserving the traditional standards established by Kanazawa Soke.
          </p>
        </motion.div>

        {/* --- DYNAMIC INTERACTIVE HERO --- */}
        {/* FIX: Used `sticky md:relative` to ensure the absolute images don't break out of the container on Desktop! */}
        <div className="sticky top-24 md:top-auto md:relative z-40 aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-neutral-200 bg-white shadow-2xl mb-8 md:mb-12">
          
          {/* Layer 1: Background (Clear Black & White) */}
          <div className="absolute inset-0 grayscale contrast-115">
            <Image 
              src="/skif_instructor_japan_web.webp" 
              alt="Instructors Black and White"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Layer 2: Persistent Color Layer with Animated Clip-Path */}
          <motion.div 
            initial={false}
            animate={{ 
              clipPath: hoveredId 
                ? technicalLeaders.find(l => l.id === hoveredId)?.clip 
                : "inset(0% 0% 0% 100%)", // Hide to the right when not hovered
              opacity: hoveredId ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom smooth ease
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <Image 
              src="/skif_instructor_japan_web.webp" 
              alt="Instructor Color Highlight"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Layer 3: Subtle Gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20 pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-30">
            <span className="bg-red-600 text-white text-[10px] md:text-sm font-black px-4 py-2 md:px-6 md:py-3 rounded-full tracking-[0.2em] uppercase shadow-xl border border-red-700">
              {hoveredId 
                ? `Highlighting: ${technicalLeaders.find(l => l.id === hoveredId)?.name}` 
                : "Official Technical Committee"}
            </span>
          </div>
        </div>

        {/* --- INSTRUCTOR LIST --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {technicalLeaders.map((leader) => (
            <div
              key={leader.id}
              data-id={leader.id}
              onClick={() => setHoveredId(leader.id)} 
              onMouseEnter={() => setHoveredId(leader.id)} 
              onMouseLeave={() => setHoveredId(null)}
              className={`instructor-card group bg-white border rounded-[1.5rem] md:rounded-3xl p-5 md:p-6 transition-all duration-300 flex items-center gap-4 md:gap-5 cursor-crosshair ${
                hoveredId === leader.id ? "border-red-600 shadow-xl translate-y-[-4px]" : "border-neutral-200 shadow-sm opacity-80 hover:opacity-100"
              }`}
            >
              <div className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                hoveredId === leader.id ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-500"
              }`}>
                <Award size={24} />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight leading-none transition-colors ${
                  hoveredId === leader.id ? "text-red-600" : "text-neutral-900"
                }`}>
                  {leader.name}
                </h3>
                <p className="text-neutral-600 font-bold font-mono text-[10px] md:text-sm uppercase tracking-widest mt-1.5 md:mt-1.5">
                  {leader.rank}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 text-center border-t border-neutral-200 pt-16">
          <p className="text-neutral-500 uppercase tracking-[0.4em] text-[10px] font-mono">
            Direct Affiliation • Technical Integrity • SKIF-USA
          </p>
        </div>

      </div>
    </main>
  );
}