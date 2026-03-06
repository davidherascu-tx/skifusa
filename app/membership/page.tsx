"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Shield, CheckCircle2, Globe, Award, Send, Loader2 } from "lucide-react";

export default function MembershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    rank: "",
    selection: "Group / Dojo",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Membership Application',
          ...formData
        }),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({ fullName: "", rank: "", selection: "Group / Dojo", email: "" });
      } else {
        alert('Failed to send application. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-neutral-900 selection:bg-red-600 selection:text-white pt-28 md:pt-48 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-red-600 pl-6 max-w-4xl"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Join the Federation</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-neutral-900">
            Membership
          </h1>
          <p className="text-neutral-600 mt-6 text-lg max-w-2xl leading-relaxed">
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
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-neutral-900">Packages</h2>
              <div className="space-y-8">
                {/* SWAPPED: Group / Dojo is now first */}
                <div className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-white flex items-center justify-center border border-neutral-200 shadow-sm">
                    <Globe className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-neutral-900">Group / Dojo</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      For Dojo owners looking to affiliate their school with SKIF-USA, granting access to national seminars and international tournaments.
                    </p>
                  </div>
                </div>

                {/* SWAPPED: Individual Member is now second */}
                <div className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-white flex items-center justify-center border border-neutral-200 shadow-sm">
                    <CheckCircle2 className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-neutral-900">Individual Member</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Perfect for independent practitioners or students looking to register their Dan grades directly with SKIF Headquarters in Tokyo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden border border-neutral-200 bg-white shadow-sm">
               <Image src="/skif_kanji.png" alt="SKIF" fill className="object-contain opacity-5 p-12 grayscale" />
               <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <p className="text-red-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold">Official Affiliation</p>
                  <p className="text-neutral-800 text-lg font-medium leading-snug">Registration ensures your rank is recognized by SKIF General Headquarters in Tokyo, Japan.</p>
               </div>
            </div>
          </motion.section>

          {/* RIGHT: Application Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-neutral-200 p-8 md:p-12 rounded-[3rem] shadow-xl relative"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3 text-neutral-900">
              Apply Now <span className="w-8 h-[1px] bg-red-600" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4">Full Name</label>
                <input 
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text" 
                  placeholder="E.G. ICHIBAN KARATEKA"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-neutral-300 font-bold uppercase text-neutral-900"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4">Kyu/Dan Grade</label>
                  <input 
                    required
                    name="rank"
                    value={formData.rank}
                    onChange={handleChange}
                    type="text" 
                    placeholder="E.G. 1ST DAN"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-neutral-300 font-bold uppercase text-neutral-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4">Selection</label>
                  <select 
                    name="selection"
                    value={formData.selection}
                    onChange={handleChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all font-bold uppercase appearance-none text-neutral-700"
                  >
                    {/* SWAPPED: Group / Dojo is now the first option */}
                    <option value="Group / Dojo">Group / Dojo</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4">E-Mail Address</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="YOUR@EMAIL.COM"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-all placeholder:text-neutral-300 font-bold uppercase text-neutral-900"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-neutral-900 text-white hover:bg-red-600 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 mt-4 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Submit Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- FOOTER BANNER --- */}
        <div className="mt-32 text-center border-t border-neutral-200 pt-16">
          <p className="text-neutral-500 uppercase tracking-[0.4em] text-[10px] font-mono">
            Tradition • Integrity • Strength
          </p>
        </div>

      </div>
    </main>
  );
}

function HighlightCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 bg-white border border-neutral-200 rounded-[2rem] hover:border-red-600/30 hover:shadow-xl transition-all group shadow-sm">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-neutral-900">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}