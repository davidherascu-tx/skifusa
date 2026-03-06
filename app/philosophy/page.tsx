"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Heart, Scale, GraduationCap } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-neutral-900 selection:bg-red-600 selection:text-white pt-28 md:pt-48 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        
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
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-neutral-900">
            Philosophy
          </h1>
        </motion.div>

        <div className="space-y-16">
          
          {/* --- MISSION SECTION --- */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-widest text-neutral-500 flex items-center gap-3">
               <Target className="text-red-600" size={24} /> SKIF-USA’s MISSION
            </h3>
            <p className="text-xl text-neutral-700 leading-relaxed font-medium">
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
                <li key={i} className="flex items-start gap-4 bg-white shadow-sm p-5 rounded-2xl border border-neutral-200 transition-all hover:shadow-md hover:border-red-600/30">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2.5 shrink-0" />
                  <span className="text-neutral-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-neutral-600 leading-relaxed pt-4">
              To carry out this mission, SKIF-USA provides technical and organizational support, organizes annual seminars with senior instructors, sponsors tournaments, and selects the U.S. team for world championships. Our experienced technical committee ensures the SKIF system is taught with the highest integrity.
            </p>
          </section>

          {/* --- MASTER KANAZAWA SECTION --- */}
          <section className="bg-white border border-neutral-200 shadow-xl rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] -z-10" />
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-neutral-900">Master Hirokazu Kanazawa</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Headquartered in Tokyo, SKIF was founded in 1977 and has grown into the world&apos;s largest Shotokan organization. Master Kanazawa, a 10th Dan, was a direct student of Gichin Funakoshi and is revered as Shotokan&apos;s finest technician. He is admired not just for technique, but for passing on the spiritual essence of karate-do to students of all ages.
                </p>
              </div>
              <div className="relative w-40 h-40 opacity-10 shrink-0">
                 <Image src="/skif_kanji.png" alt="Kanji" fill className="object-contain" />
              </div>
            </div>
          </section>

          {/* --- STACKED HORIZONTAL KANJI DESIGN --- */}
          <section className="space-y-16 py-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-4 text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-2">
                <span className="h-px w-12 bg-red-600"></span>
                The Five Precepts
                <span className="h-px w-12 bg-red-600"></span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-neutral-900">The Dojo Kun</h3>
              <p className="text-neutral-500 max-w-lg mx-auto text-sm">Fundamental principles of character and conduct vital to every SKIF practitioner.</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { 
                  meaning: "Seek perfection of character",
                  japanese: "人格完成に努むること",
                  romaji: "hitotsu, jinkaku kansei ni tsutomuru koto"
                },
                { 
                  meaning: "Be faithful", 
                  japanese: "誠の道を守ること",
                  romaji: "hitotsu, makoto no michi o mamoru koto"
                },
                { 
                  meaning: "Endeavor for effort", 
                  japanese: "努力の精神を養うこと",
                  romaji: "hitotsu, doryoku de seishin o yashinau koto"
                },
                { 
                  meaning: "Respect others", 
                  japanese: "礼儀を重んずること",
                  romaji: "hitotsu, reigi o omonzuru koto"
                },
                { 
                  meaning: "Refrain from violent behavior", 
                  japanese: "血気の勇を戒むること",
                  romaji: "hitotsu, kekki no yū o imashimuru koto"
                }
              ].map((kun, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white border border-neutral-200 rounded-[2.5rem] p-8 md:p-12 hover:border-red-600/40 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  {/* Watermark Numbering */}
                  <div className="absolute top-4 right-8 text-neutral-100 font-black text-8xl group-hover:text-red-600/5 transition-colors pointer-events-none">
                    0{i+1}
                  </div>

                  <div className="relative z-10 flex flex-col gap-6">
                    {/* 1. Japanese Kanji (Horizontal) */}
                    <div className="flex items-center gap-4">
                      <span className="text-red-600 font-mono text-xs font-black uppercase tracking-widest bg-red-600/10 px-3 py-1 rounded-full">Hitotsu</span>
                      <p className="text-neutral-900 text-2xl md:text-3xl font-bold tracking-[0.2em] group-hover:text-red-600 transition-colors">
                        {kun.japanese}
                      </p>
                    </div>

                    {/* 2. English Meaning */}
                    <div className="border-l-2 border-neutral-200 pl-6 group-hover:border-red-600/50 transition-colors">
                      <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        {kun.meaning}
                      </h4>
                    </div>
                    
                    {/* 3. Phonetic Romaji */}
                    <p className="text-neutral-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed italic">
                      {kun.romaji}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- SYSTEM DETAILS --- */}
          <div className="grid md:grid-cols-2 gap-12 text-neutral-600 leading-relaxed text-sm">
            <div className="space-y-4">
              <h4 className="text-neutral-900 font-black uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={18} className="text-red-600" /> Kata & Tradition
              </h4>
              <p>
                While including all 26 traditional Shotokan forms, the SKIF system adds four kata (Seipai, Seienchin, Gankaku-Sho, Niju Hachi-Ho) to complement training. We emphasize standardized movements, timing, and practical applications (bunkai).
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-neutral-900 font-black uppercase tracking-widest flex items-center gap-2">
                 <Shield size={18} className="text-red-600" /> Kihon & Kumite
              </h4>
              <p>
                Our comprehensive approach covers everything from basic five-step sparring (gohon) to advanced free sparring (jyu-kumite). We emphasize breathing, posture, flexibility, and focus (kime) to develop effective techniques for all ages.
              </p>
            </div>
          </div>

          {/* --- FAMILY & CERTIFICATION --- */}
          <section className="border-t border-neutral-200 pt-12 text-center">
            <p className="text-xl text-neutral-600 italic max-w-2xl mx-auto mb-12">
              &quot;SKIF members throughout the world consider themselves to be part of the larger SKIF family.&quot;
            </p>
            <div className="bg-neutral-900 text-white p-8 rounded-3xl inline-block text-left shadow-xl hover:shadow-red-900/20 transition-shadow">
               <h4 className="font-black uppercase mb-2 text-red-500">Global Recognition</h4>
               <p className="text-sm text-neutral-300">
                 All dan grades are registered at Headquarters in Tokyo, Japan, ensuring universal recognition by affiliates and traditional karate organizations worldwide.
               </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}