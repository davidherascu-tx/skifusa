"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

export default function InstructorsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Data list based on the group image from left to right
  // The 'clip' values define the vertical "slice" for each person
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

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 selection:bg-white selection:text-black">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-4 border-red-600 pl-6 max-w-4xl"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Technical Leadership</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
            Our <span className="text-neutral-700">Instructors</span>
          </h1>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl leading-relaxed">
            Technical committee dedicated to preserving the traditional standards established by Kanazawa Soke.
          </p>
        </motion.div>

        {/* --- DYNAMIC INTERACTIVE HERO --- */}
        <div className="relative aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl mb-12">
          
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 z-30">
            <span className="bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-full tracking-[0.2em] uppercase shadow-lg border border-red-500/20">
              {hoveredId 
                ? `Highlighting: ${technicalLeaders.find(l => l.id === hoveredId)?.name}` 
                : "Official Technical Committee"}
            </span>
          </div>
        </div>

        {/* --- INSTRUCTOR LIST --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalLeaders.map((leader) => (
            <div
              key={leader.id}
              onMouseEnter={() => setHoveredId(leader.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group bg-neutral-950 border rounded-3xl p-6 transition-all duration-300 flex items-center gap-4 cursor-crosshair ${
                hoveredId === leader.id ? "border-red-600 bg-neutral-900 translate-y-[-4px]" : "border-neutral-900 opacity-60 hover:opacity-100"
              }`}
            >
              <div className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                hoveredId === leader.id ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-500"
              }`}>
                <Award size={20} />
              </div>
              <div>
                <h3 className={`text-sm font-black uppercase tracking-tight transition-colors ${
                  hoveredId === leader.id ? "text-red-500" : "text-white"
                }`}>
                  {leader.name}
                </h3>
                <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest">
                  {leader.rank}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center border-t border-neutral-900 pt-16">
          <p className="text-neutral-600 uppercase tracking-[0.4em] text-[10px] font-mono">
            Direct Affiliation • Technical Integrity • SKIF-USA
          </p>
        </div>

      </div>
    </main>
  );
}