"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Heart, Scale, GraduationCap } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        
        {/* --- HERO HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-red-600 pl-6"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">
            The SKIF System
          </h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Philosophy
          </h1>
        </motion.div>

        <div className="space-y-16">
          
          {/* --- MISSION SECTION --- */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-widest text-neutral-400 flex items-center gap-3">
               <Target className="text-red-600" size={24} /> SKIF-USA’s MISSION
            </h3>
            <p className="text-xl text-neutral-200 leading-relaxed">
              To carry forth the teachings and goals of SKIF founder, Master Hirokazu Kanazawa, Kancho:
            </p>
            <ul className="grid md:grid-cols-1 gap-4">
              {[
                "To instruct and promote the growth of karate-do",
                "To promote good physical training for long life",
                "To teach correct karate spirit and karate technique",
                "To promote harmonious relationships with all karate practitioners (“karateka”)",
                "To avoid the single-minded sport purpose"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-neutral-900/50 p-4 rounded-2xl border border-neutral-800">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2.5 shrink-0" />
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-neutral-400 leading-relaxed pt-4">
              To carry out this mission, SKIF-USA provides technical and organizational support, organizes annual seminars with senior instructors, sponsors tournaments, and selects the U.S. team for world championships. Our experienced technical committee ensures the SKIF system is taught with the highest integrity.
            </p>
          </section>

          {/* --- MASTER KANAZAWA SECTION --- */}
          <section className="bg-neutral-900/30 border border-neutral-800 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] -z-10" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Master Hirokazu Kanazawa</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Headquartered in Tokyo, SKIF was founded in 1977 and has grown into the world&apos;s largest Shotokan organization. Master Kanazawa, a 10th Dan, was a direct student of Gichin Funakoshi and is revered as Shotokan&apos;s finest technician. He is admired not just for technique, but for passing on the spiritual essence of karate-do to students of all ages.
                </p>
              </div>
              <div className="relative w-40 h-40 opacity-20 shrink-0">
                 <Image src="/skif_kanji.png" alt="Kanji" fill className="object-contain" />
              </div>
            </div>
          </section>

          {/* --- DOJO KUN SECTION --- */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
               <h3 className="text-3xl font-black uppercase tracking-tight">The Dojo Kun</h3>
               <p className="text-neutral-400">Precepts passed down from Master Funakoshi, vital to all SKIF members:</p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "Character", desc: "Strive for perfection" },
                { title: "Sincerity", desc: "Defend paths of truth" },
                { title: "Effort", desc: "Foster spirit of effort" },
                { title: "Etiquette", desc: "Honor principles" },
                { title: "Self-Control", desc: "Guard against impetuous courage" }
              ].map((kun, i) => (
                <div key={kun.title} className="text-center p-6 border border-neutral-800 rounded-3xl hover:border-red-600/50 transition-colors">
                  <span className="text-red-600 font-bold block mb-2">0{i+1}</span>
                  <h4 className="font-black uppercase text-xs mb-1 tracking-widest">{kun.title}</h4>
                  <p className="text-[10px] text-neutral-500 uppercase">{kun.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- SYSTEM DETAILS --- */}
          <div className="grid md:grid-cols-2 gap-12 text-neutral-400 leading-relaxed text-sm">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={18} className="text-red-600" /> Kata & Tradition
              </h4>
              <p>
                While including all 26 traditional Shotokan forms, the SKIF system adds four kata (Seipai, Seienchin, Gankaku-Sho, Niju Hachi-Ho) to complement training. We emphasize standardized movements, timing, and practical applications (bunkai).
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest flex items-center gap-2">
                 <Shield size={18} className="text-red-600" /> Kihon & Kumite
              </h4>
              <p>
                Our comprehensive approach covers everything from basic five-step sparring (gohon) to advanced free sparring (jyu-kumite). We emphasize breathing, posture, flexibility, and focus (kime) to develop effective techniques for all ages.
              </p>
            </div>
          </div>

          {/* --- FAMILY & CERTIFICATION --- */}
          <section className="border-t border-neutral-800 pt-12 text-center">
            <p className="text-xl text-neutral-300 italic max-w-2xl mx-auto mb-12">
              &quot;SKIF members throughout the world consider themselves to be part of the larger SKIF family.&quot;
            </p>
            <div className="bg-white text-black p-8 rounded-3xl inline-block text-left">
               <h4 className="font-black uppercase mb-2">Global Recognition</h4>
               <p className="text-sm">
                 All dan grades are registered at Headquarters in Tokyo, Japan, ensuring universal recognition by affiliates and traditional karate organizations worldwide.
               </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}