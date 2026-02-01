"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Shield, Target, Users, ArrowRight, Mail, Calendar, MapPin, Search, Globe, ScrollText, FileText, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const VIDEO_ID = "uMUaR8ADv58";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
        
        {/* --- LAYER 1: BACKGROUND VIDEO (Z-0) --- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            
            {/* Fallback Image */}
            <div className={`absolute inset-0 bg-neutral-900 z-10 transition-opacity duration-1000 ${isMounted ? 'opacity-0' : 'opacity-100'}`}>
               <Image 
                  src="/skif_kanji.png" 
                  alt="Background"
                  fill
                  className="object-cover opacity-20 blur-sm"
               />
            </div>

            {/* Video Iframe */}
            <div className="relative w-full h-full">
                {isMounted && (
                    <iframe 
                        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-100"
                        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0`} 
                        title="SKIF Background Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        </div>

        {/* --- LAYER 2: OVERLAY (Z-10) --- */}
        <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

        {/* --- LAYER 3: CONTENT (Z-20) --- */}
        <div className="container mx-auto max-w-5xl relative z-20 flex flex-col items-center">
          
          {/* --- TOP CENTERED CONTENT --- */}
          <div className="text-center max-w-4xl mb-12">
            <h2 className="text-neutral-200 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base animate-pulse drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Shotokan Karate-Do International Federation &bull; USA
            </h2>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.9] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Karate-Do <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-400 to-black">
                Way of Life.
              </span>
            </h1>

            <p className="text-neutral-100 text-lg md:text-xl leading-relaxed mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <strong className="text-white">SKIF</strong> was founded in 1977 by Hirokazu Kanazawa Soke, 10th Dan. 
              It has become one of the world’s largest and finest karate organizations with over 
              <span className="text-white"> 2 million members</span> in more than 100 countries. 
              SKIF-USA is closely affiliated with SKIF-Japan and is dedicated to the growth and development of SKIF in the United States.
            </p>
          </div>
          
          {/* --- SPLIT SECTION UNDER TEXT --- */}
          <div className="grid md:grid-cols-2 gap-6 items-center w-full max-w-4xl">
            
            {/* LEFT SIDE: HEADQUARTERS & INFO (DARK BOX) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 bg-neutral-950/90 backdrop-blur-sm border border-neutral-800 text-white p-8 rounded-3xl shadow-2xl shadow-black/50">
              <div className="space-y-4 text-sm md:text-base w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutral-400 font-black uppercase tracking-widest text-xs mb-1">Headquarters</h3>
                  <p className="text-neutral-200">St. Paul, Minnesota</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutral-400 font-black uppercase tracking-widest text-xs mb-1">Mailing Address</h3>
                  <p className="text-neutral-200">SKIF-USA, P.O. Box 42316,<br/>Cincinnati, OH 45242</p>
                </div>

                <div className="flex flex-col gap-1 pt-4 border-t border-neutral-800 mt-2">
                   <h3 className="text-neutral-400 font-black uppercase tracking-widest text-xs mb-1">General Secretary</h3>
                   <p className="text-neutral-200">Chris Johnson</p>
                   <a href="mailto:skifusa@gmail.com" className="text-red-500 hover:text-red-400 transition-colors flex items-center justify-center md:justify-start gap-2 font-bold uppercase tracking-wider mt-1">
                    <Mail size={16} /> skifusa@gmail.com
                  </a>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 w-full pt-2">
                <button className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all text-sm rounded-full w-full sm:w-auto shadow-lg">
                  About Us
                </button>
                <button className="border border-neutral-600 text-neutral-300 px-6 py-3 font-bold uppercase tracking-wider hover:border-red-500 hover:text-red-500 transition-all text-sm rounded-full w-full sm:w-auto">
                  Events
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: HERO IMAGE */}
            <div className="flex justify-center md:justify-start pl-0 md:pl-4">
              <div className="relative w-full max-w-[320px] h-[380px]">
                  <Image 
                    src="/skif_kanji.png" 
                    alt="SKIF Kanji Calligraphy"
                    fill
                    className="object-contain drop-shadow-[0_10px_30px_rgba(220,38,38,0.25)]"
                    priority
                  />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PHILOSOPHY GRID */}
      <section id="philosophy" className="py-24 px-6 border-t border-neutral-900 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield size={32} />}
              title="Defense"
              desc="Learn to protect yourself and others with practical, high-impact techniques refined over generations."
            />
            <FeatureCard 
              icon={<Target size={32} />}
              title="Focus"
              desc="Martial arts is 10% physical and 90% mental. Sharpen your mind and eliminate distractions."
            />
            <FeatureCard 
              icon={<Users size={32} />}
              title="Community"
              desc="Join a brotherhood and sisterhood of warriors dedicated to mutual growth and respect."
            />
          </div>
        </div>
      </section>

      {/* 3. FIND A DOJO SECTION */}
      <section id="find-dojo" className="py-24 px-6 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px] -z-10" />

         <div className="container mx-auto max-w-5xl">
            <div className="bg-black rounded-[3rem] p-8 md:p-16 border border-neutral-800 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl">
                
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <div className="flex-1 relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-4 bg-red-600/10 px-4 py-2 rounded-full">
                        <Globe size={14} /> National Network
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
                        Find a Dojo <br/> Near You
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        Join the SKIF family. Locate an affiliated dojo in your state and train with certified instructors committed to the traditional way.
                    </p>
                    
                    <button className="bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 w-fit">
                        <MapPin size={20} /> View Dojo Directory
                    </button>
                </div>

                <div className="relative z-10 w-full md:w-1/3 flex justify-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 shadow-2xl shadow-red-900/20 animate-[pulse_4s_ease-in-out_infinite]">
                        <div className="absolute inset-4 border border-dashed border-neutral-700 rounded-full animate-[spin_20s_linear_infinite]" />
                        <MapPin size={80} className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* 4. NEWS & EVENTS SECTION */}
      <section id="news" className="py-24 px-6 bg-neutral-950 border-t border-neutral-900">
        <div className="container mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16 relative">
            <span className="absolute -top-12 opacity-5 text-[10rem] font-black text-white select-none pointer-events-none hidden md:block leading-none z-0">
                03
            </span>
            <div className="inline-flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-xs mb-4 relative z-10">
                <span className="w-8 h-[2px] bg-red-600"></span>
                Federation Updates
                <span className="w-8 h-[2px] bg-red-600"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 relative z-10">
                News <span className="text-neutral-700 mx-2">&bull;</span> Events
            </h2>
            <p className="text-neutral-400 max-w-xl text-lg leading-relaxed relative z-10">
                The latest announcements, seminar schedules, and championship results from SKIF-USA headquarters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <NewsCard 
              category="Newsletter"
              date="January 29, 2026"
              title="Newsletter Fall/Winter 2025" 
              location="Headquarters"
              image="/SKIF_Newsletter_Winter_2025.webp" 
            />
            <NewsCard 
              category="Seminar"
              date="January 14, 2026"
              title="Karate Seminar with Ruben Fung, 6.Dan" 
              location="Headquarters"
              image="/seminar_feb_20_21_2026.webp" 
            />
            <NewsCard 
              category="Seminar"
              date="December 30, 2025"
              title="2026 SKIF Houston Annual Gasshuku" 
              location="Houston, TX"
              image="/skif_gasshuku_houston_2026.webp" 
            />
          </div>
        </div>
      </section>

      {/* 5. MEMBER RESOURCES SECTION (Light Gray BG + DARK CARDS) */}
      <section id="resources" className="py-32 px-6 bg-neutral-200 border-t border-neutral-300 relative overflow-hidden">
        
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
           
           {/* HEADER 04 */}
           <div className="flex flex-col items-center text-center mb-16 relative">
            <span className="absolute -top-12 opacity-5 text-[10rem] font-black text-black select-none pointer-events-none hidden md:block leading-none z-0">
                04
            </span>
            <div className="inline-flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-xs mb-4 relative z-10">
                <span className="w-8 h-[2px] bg-red-600"></span>
                Quick Access
                <span className="w-8 h-[2px] bg-red-600"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-6 relative z-10">
                Member <span className="text-neutral-500 mx-2">&bull;</span> Resources
            </h2>
            <p className="text-neutral-600 max-w-xl text-lg leading-relaxed relative z-10">
                Verify black belt credentials, download official technical syllabi, or purchase authentic federation merchandise.
            </p>
          </div>

           <div className="grid md:grid-cols-3 gap-8">
              
              {/* --- CARD 1: Black Belt Registry (Dark Card) --- */}
              {/* CHANGED: bg-neutral-900 (Dark), text-white */}
              <div className="group relative h-[350px] bg-neutral-900 border border-neutral-800 hover:border-red-600 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col p-8 shadow-2xl shadow-neutral-900/20 hover:shadow-red-900/20 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                      <ScrollText size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-black uppercase text-white mb-4 leading-none">
                          Black Belt <br/><span className="text-neutral-500 group-hover:text-white transition-colors">Registry</span>
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                         The official SKIF-USA Black Belt database—search by name to verify Dan grade and dojo affiliation.
                      </p>
                  </div>
                  <div className="mt-auto border-t border-neutral-800 pt-6 flex items-center justify-between text-white font-bold uppercase tracking-widest text-xs">
                      <span>Search Database</span>
                      <ArrowRight className="text-neutral-500 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" size={18} />
                  </div>
              </div>

              {/* --- CARD 2: Technical (Dark Card) --- */}
              <div className="group relative h-[350px] bg-neutral-900 border border-neutral-800 hover:border-red-600 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col p-8 shadow-2xl shadow-neutral-900/20 hover:shadow-red-900/20 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                      <FileText size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-black uppercase text-white mb-4 leading-none">
                          Technical <br/><span className="text-neutral-500 group-hover:text-white transition-colors">Docs</span>
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                         Downloads for grading syllabi, tournament rules, and official instructor manuals.
                      </p>
                  </div>
                  <div className="mt-auto border-t border-neutral-800 pt-6 flex items-center justify-between text-white font-bold uppercase tracking-widest text-xs">
                      <span>View Files</span>
                      <ArrowRight className="text-neutral-500 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" size={18} />
                  </div>
              </div>

              {/* --- CARD 3: Merchandise (Dark Card) --- */}
              <div className="group relative h-[350px] bg-neutral-900 border border-neutral-800 hover:border-red-600 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col p-8 shadow-2xl shadow-neutral-900/20 hover:shadow-red-900/20 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                      <ShoppingBag size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-black uppercase text-white mb-4 leading-none">
                          Official <br/><span className="text-neutral-500 group-hover:text-white transition-colors">Merch</span>
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                         Purchase authentic SKIF-USA stamps, DVDs , books, and accessories.
                      </p>
                  </div>
                  <div className="mt-auto border-t border-neutral-800 pt-6 flex items-center justify-between text-white font-bold uppercase tracking-widest text-xs">
                      <span>Go to Store</span>
                      <ArrowRight className="text-neutral-500 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" size={18} />
                  </div>
              </div>

           </div>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 border border-neutral-900 hover:border-red-600/50 transition-colors duration-300 group">
      <div className="mb-6 text-neutral-500 group-hover:text-red-500 transition-colors">{icon}</div>
      <h3 className="text-xl font-bold uppercase mb-4 tracking-wide">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function NewsCard({ category, date, title, location, image }: { category: string, date: string, title: string, location: string, image: string }) {
  return (
    <div className="group relative h-[700px] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 cursor-pointer">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-neutral-900">
         <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
         />
      </div>

      {/* Hover/Active Background Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
      
      {/* Dark Overlay Gradient (Bottom only) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Content Area */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
         <div className="flex items-end justify-between w-full gap-4">
             
             {/* Left Text Info */}
             <div className="flex flex-col items-start flex-1 pr-2">
                 
                 {/* CATEGORY & DATE */}
                 <div className="flex flex-wrap items-center gap-3 mb-3">
                     <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {category}
                     </span>
                     <span className="text-neutral-300 text-xs font-mono flex items-center gap-1">
                        <Calendar size={12} /> {date}
                     </span>
                 </div>
                 
                 <h3 className="text-xl md:text-2xl font-black uppercase leading-tight drop-shadow-md mb-2">
                    {title}
                 </h3>
                 
                 <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium">
                    <MapPin size={14} /> {location}
                 </div>
             </div>

             {/* Arrow Button */}
             <div className="bg-white text-black p-3 rounded-full shadow-lg shrink-0 
                             opacity-100 translate-y-0 
                             md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 
                             transition-all duration-300 ease-out">
                <ArrowRight size={24} />
             </div>
         </div>
      </div>
    </div>
  );
}