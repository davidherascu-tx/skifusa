import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Shield, Target, Users, ArrowRight, Mail, Calendar, MapPin, Search, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black -z-10" />

        <div className="container mx-auto max-w-5xl z-10 flex flex-col items-center">
          
          {/* --- TOP CENTERED CONTENT --- */}
          <div className="text-center max-w-4xl mb-12">
            <h2 className="text-neutral-500 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base animate-pulse">
              Shotokan Karate-Do International Federation &bull; USA
            </h2>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
              Karate-Do <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-700">
                Way of Life.
              </span>
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mx-auto">
              <strong className="text-white">SKIF</strong> was founded in 1977 by Hirokazu Kanazawa Soke, 10th Dan. 
              It has become one of the world’s largest and finest karate organizations with over 
              <span className="text-white"> 2 million members</span> in more than 100 countries. 
              SKIF-USA is closely affiliated with SKIF-Japan and is dedicated to the growth and development of SKIF in the United States.
            </p>
          </div>
          
          {/* --- SPLIT SECTION UNDER TEXT --- */}
          <div className="grid md:grid-cols-2 gap-6 items-center w-full max-w-4xl">
            
            {/* LEFT SIDE: HEADQUARTERS & INFO (WHITE BOX) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 bg-white text-neutral-800 p-8 rounded-3xl shadow-xl shadow-white/5">
              <div className="space-y-4 text-sm md:text-base w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-black font-black uppercase tracking-widest text-xs mb-1">Headquarters</h3>
                  <p>St. Paul, Minnesota</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="text-black font-black uppercase tracking-widest text-xs mb-1">Mailing Address</h3>
                  <p>SKIF-USA, P.O. Box 42316,<br/>Cincinnati, OH 45242</p>
                </div>

                <div className="flex flex-col gap-1 pt-4 border-t border-neutral-200 mt-2">
                   <h3 className="text-black font-black uppercase tracking-widest text-xs mb-1">General Secretary</h3>
                   <p>Chris Johnson</p>
                   {/* Email in RED */}
                   <a href="mailto:skifusa@gmail.com" className="text-red-600 hover:text-red-800 transition-colors flex items-center justify-center md:justify-start gap-2 font-bold uppercase tracking-wider mt-1">
                    <Mail size={16} /> skifusa@gmail.com
                  </a>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 w-full pt-2">
                <button className="bg-black text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all text-sm rounded-full w-full sm:w-auto shadow-lg">
                  About Us
                </button>
                <button className="border border-neutral-300 text-black px-6 py-3 font-bold uppercase tracking-wider hover:border-red-600 hover:text-red-600 transition-all text-sm rounded-full w-full sm:w-auto">
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
      <section id="philosophy" className="py-24 px-6 border-t border-neutral-900">
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
         {/* Background Glow Effect */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px] -z-10" />

         <div className="container mx-auto max-w-5xl">
            <div className="bg-black rounded-[3rem] p-8 md:p-16 border border-neutral-800 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl">
                
                {/* Dotted Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                {/* Left Text */}
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
                    
                    {/* BUTTON REPLACING SEARCH BAR */}
                    <button className="bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 w-fit">
                        <MapPin size={20} /> View Dojo Directory
                    </button>
                </div>

                {/* Right Visual (Abstract Map/Icon) */}
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
          {/* UPDATED HEADER: Centered on Mobile, Row on Desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 border-b border-neutral-800 pb-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center md:text-left">
              News & <span className="text-white">Events</span>
            </h2>
            <p className="text-neutral-500 mb-2 mt-4 md:mt-0 text-center md:text-right">Updates from the Federation.</p>
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