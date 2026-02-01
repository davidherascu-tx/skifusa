"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Shield, CheckCircle2, Globe, Award, Send } from "lucide-react";

export default function MembershipPage() {
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
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Join the Federation</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Membership
          </h1>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl leading-relaxed">
            Become part of a global legacy. SKIF-USA offers direct affiliation to Japan and a community dedicated to the highest standards of Shotokan Karate.
          </p>
        </motion.div>

        {/* --- HIGHLIGHTS GRID --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <HighlightCard 
            icon={<Shield className="text-red-600" size={32} />}
            title="World Class Karate"
            desc="The way of the empty hand is the cornerstone for Shotokan karate. We combine all the elements into a perfect form."
          />
          <HighlightCard 
            icon={<Award className="text-red-600" size={32} />}
            title="The Master's Legacy"
            desc="Hirokazu Kanazawa was one of the greatest Shotokan Masters in the world. We preserve his technical excellence and spirit."
          />
          <HighlightCard 
            icon={<Users className="text-red-600" size={32} />}
            title="Global Community"
            desc="Join over 3,000 members in the USA and a massive network of 100,000+ practitioners across the globe."
          />
        </div>

        {/* --- PACKAGES & FORM SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: Info & Packages */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Packages</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-neutral-900 flex items-center justify-center border border-neutral-800">
                    <CheckCircle2 className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2">Individual Member</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Perfect for independent practitioners or students looking to register their Dan grades directly with SKIF Headquarters in Tokyo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-neutral-900 flex items-center justify-center border border-neutral-800">
                    <Globe className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2">Group / Dojo</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      For Dojo owners looking to affiliate their school with SKIF-USA, granting access to national seminars and international tournaments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden border border-neutral-800 bg-neutral-900/30">
               <Image src="/skif_kanji.png" alt="SKIF" fill className="object-contain opacity-5 p-12" />
               <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2">Official Affiliation</p>
                  <p className="text-white text-lg font-medium leading-snug">Registration ensures your rank is recognized by SKIF General Headquarters in Tokyo, Japan.</p>
               </div>
            </div>
          </motion.section>

          {/* RIGHT: Application Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/50 border border-neutral-800 p-8 md:p-12 rounded-[3rem] shadow-2xl relative"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
              Apply Now <span className="w-8 h-[1px] bg-red-600" />
            </h3>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="E.G. ICHIBAN KARATEKA"
                  className="w-full bg-black border border-neutral-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-700 font-bold uppercase"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Kyu/Dan Grade</label>
                  <input 
                    type="text" 
                    placeholder="E.G. 1ST DAN"
                    className="w-full bg-black border border-neutral-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-700 font-bold uppercase"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Selection</label>
                  <select className="w-full bg-black border border-neutral-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors font-bold uppercase appearance-none text-neutral-400">
                    <option>Individual</option>
                    <option>Group / Dojo</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">E-Mail Address</label>
                <input 
                  type="email" 
                  placeholder="YOUR@EMAIL.COM"
                  className="w-full bg-black border border-neutral-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-700 font-bold uppercase"
                />
              </div>

              <button className="w-full bg-white text-black hover:bg-red-600 hover:text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 mt-4 group">
                Submit Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- FOOTER BANNER --- */}
        <div className="mt-32 text-center">
          <p className="text-neutral-600 uppercase tracking-[0.4em] text-[10px] font-mono">
            Tradition • Integrity • Strength
          </p>
        </div>

      </div>
    </main>
  );
}

function HighlightCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 bg-neutral-950 border border-neutral-900 rounded-[2rem] hover:border-red-600/30 transition-all group">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}