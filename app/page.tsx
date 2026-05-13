"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import NextLink from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Globe, 
  ScrollText, 
  FileText, 
  ShoppingBag,
  ExternalLink,
  X
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SANITY IMPORTS ---
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}
// ----------------------

export default function Home() {
  const VIDEO_ID = "uMUaR8ADv58";
  const [isMounted, setIsMounted] = useState(false);
  const playerRef = useRef<any>(null);
  
  const [showNotice, setShowNotice] = useState(false);
  const noticeShownRef = useRef(false); 
  
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);

    // 1. --- NEW 24-HOUR POPUP LOGIC (ON SCROLL) ---
    let isEligibleForPopup = false;
    try {
      const dismissedTime = window.localStorage.getItem("skifusa_notice_dismissed");
      if (!dismissedTime) {
        isEligibleForPopup = true; 
      } else {
        const now = new Date().getTime();
        const dismissedAt = parseInt(dismissedTime, 10);
        if (now - dismissedAt > 24 * 60 * 60 * 1000) {
          window.localStorage.removeItem("skifusa_notice_dismissed");
          isEligibleForPopup = true;
        }
      }
    } catch (e) {
      isEligibleForPopup = true;
    }

    if (isEligibleForPopup) {
      const handleScroll = () => {
        if (window.scrollY > 100 && !noticeShownRef.current) {
          setShowNotice(true);
          noticeShownRef.current = true;
          window.removeEventListener("scroll", handleScroll); 
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    // 2. --- FETCH LATEST NEWS & EVENTS FROM SANITY ---
    const fetchEvents = async () => {
      try {
        const data = await client.fetch(`
          *[_type in ["news", "event"]] | order(date desc)[0...3] {
            _id,
            _type,
            title,
            category,
            date,
            location,
            image
          }
        `, {}, { cache: 'no-store' });
        setEvents(data);
      } catch (error) {
        console.error("Error fetching Sanity events:", error);
      }
    };

    fetchEvents();

// 3. --- YOUTUBE IFRAME API FOR PRECISE SEGMENT LOOPING (COOKIE-FREE) ---
    if (!(window as any).YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true; // Added async to prevent render blocking
      document.body.appendChild(script);
    }

    const interval = setInterval(() => {
      if ((window as any).YT && (window as any).YT.Player && document.getElementById('yt-player') && !playerRef.current) {
        playerRef.current = new (window as any).YT.Player('yt-player', {
          videoId: VIDEO_ID,
          host: 'https://www.youtube-nocookie.com',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            playsinline: 1,
            disablekb: 1,
            fs: 0,
            start: 48, 
            end: 94,
            // Added strictest privacy parameters
            iv_load_policy: 3, 
            widget_referrer: window.location.origin
          },
          events: {
            onReady: (e: any) => {
              e.target.mute(); 
              e.target.playVideo();
            },
            onStateChange: (e: any) => {
              if (e.data === (window as any).YT.PlayerState.ENDED) {
                e.target.seekTo(48);
                e.target.playVideo();
              }
            }
          }
        });
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const handleDismissNotice = () => {
    try {
      window.localStorage.setItem("skifusa_notice_dismissed", new Date().getTime().toString());
    } catch (e) {
      console.warn("Could not save to local storage.");
    }
    setShowNotice(false);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-neutral-900 selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* --- OFFICIAL NOTICE POPUP --- */}
      <AnimatePresence>
        {isMounted && showNotice && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white border border-red-600/30 p-8 md:p-12 rounded-[20px] shadow-2xl max-h-[90vh] overflow-y-auto text-neutral-900"
            >
              <button 
                onClick={handleDismissNotice}
                className="absolute top-6 right-6 p-2 bg-neutral-100 hover:bg-red-600 hover:text-white rounded-full transition-all text-neutral-500 border border-neutral-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-8 mt-2">
                <span className="w-8 h-[2px] bg-red-600"></span>
                <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm">Official Notice</h2>
              </div>
              
              <div className="space-y-6 text-neutral-700 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  <strong className="text-neutral-900">SKIF-USA</strong> and <strong className="text-neutral-900">SKI-USF</strong> are the only recognized representative bodies of SKIF-Japan in the United States of America and own all rights, title, and interest in and to the SKIF name and the trademarked logos associated with SKIF.
                </p>
                <p>
                  Any use of the SKIF name or these logos without the express permission of these two bodies, or SKIF Japan itself, constitutes trademark infringement, dilution, and misrepresentation in violation of federal and state laws.
                </p>
                <p>
                  As a Federation, each member-country representative has oversight of the hosting of official SKIF seminars, tournaments, and Dan grading taken in a given country.
                </p>
                <p className="text-red-600 font-bold">
                  Please be advised that if anyone has received Dan grading during an unofficial event, i.e., that was not sponsored by either SKIF-USA or SKI-USF, that rank will not be recognized by SKIF-Japan and will be considered invalid.
                </p>
              </div>
              
              <div className="mt-10 pt-6 border-t border-neutral-200 flex justify-end">
                <button 
                  onClick={handleDismissNotice}
                  className="bg-neutral-900 text-white hover:bg-red-600 px-8 py-3 rounded-[20px] font-bold uppercase tracking-wider transition-colors text-xs shadow-lg"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

{/* 1. HERO SECTION */}
      <section className="relative min-h-screen bg-[#F5F5F5] flex flex-col justify-center items-center px-6 overflow-hidden text-white">
        
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
                <div 
                    id="yt-player"
                    className="absolute top-1/2 left-1/2 w-[300%] h-[300%] lg:w-[150%] lg:h-[150%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-100"
                />
            </div>
        </div>

        <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-20 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-24 lg:pt-0">
          
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <h2 className="text-neutral-300 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base animate-pulse drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Karate-Do Way of Life
            </h2>
            
            <h1 className="flex flex-col uppercase leading-[1.1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-6">
              <span className="text-5xl md:text-7xl xl:text-[5.5rem] font-black tracking-tight text-white">
                Shotokan Karate-Do
              </span>
              <span className="text-xl md:text-[2rem] lg:text-[2rem] xl:text-4xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-500 mt-2 md:mt-4 whitespace-nowrap">
                International Federation &bull; USA
              </span>
            </h1>

            <p className="text-neutral-200 text-base md:text-lg leading-relaxed max-w-3xl mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <strong className="text-white font-semibold">SKIF-USA</strong> is affiliated with SKIF-Japan and is dedicated to the growth and development of SKIF in the United States. SKIF was founded in 1977 by Hirokazu Kanazawa Soke, 10th Dan. It has become one of the world’s largest and finest karate organizations with over <span className="text-white font-semibold">2 million members</span> in more than 100 countries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center lg:justify-start items-center">
              <NextLink href="/history" className="bg-white text-center text-black px-10 py-4 font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all text-sm rounded-full shadow-lg">
                About Us
              </NextLink>
              <NextLink href="/events" className="border text-center border-neutral-500 text-neutral-200 px-10 py-4 font-bold uppercase tracking-wider hover:border-red-500 hover:text-red-500 transition-all text-sm rounded-full bg-black/20 backdrop-blur-sm">
                Events
              </NextLink>
            </div>
          </div>
          
        <div className="lg:col-span-4 flex justify-center lg:justify-end items-center w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[130px] sm:max-w-[180px] md:max-w-[320px] lg:max-w-[400px] aspect-[4/5] drop-shadow-[0_20px_50px_rgba(220,38,38,0.25)]">
                <Image 
                  src="/skif_kanji.png" 
                  alt="SKIF Kanji Calligraphy"
                  fill
                  className="object-contain"
                  priority // Ensures it isn't lazy loaded
                  fetchPriority="high" // ADD THIS LINE: Tells browser this is the most important image
                />
            </div>
          </div>
          
        </div>
      </section>

{/* 2. FIND A DOJO SECTION */}
      <section id="find-dojo" className="py-24 px-6 bg-white relative overflow-hidden border-t border-neutral-200 shadow-[0_-8px_15px_rgba(0,0,0,0.03)] z-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px] -z-10" />

         <div className="container mx-auto max-w-5xl">
            {/* Box changed to Light Grey (#F6F6F6) with subtle borders */}
            <div className="bg-[#F6F6F6] rounded-[20px] p-8 md:p-16 border border-neutral-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-sm">
                
                {/* Updated background dot pattern color to light grey */}
                <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c4c4c4 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="flex-1 relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-4 bg-red-600/10 px-4 py-2 rounded-full border border-red-600/10">
                        <Globe size={14} /> National Network
                    </div>
                    
                    {/* Text changed to dark neutral-900 */}
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-neutral-900">
                        Find a Dojo <br/> Near You
                    </h2>
                    
                    {/* Paragraph changed to medium grey */}
                    <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-medium">
                        Join the SKIF family. Locate an affiliated dojo in your state and train with certified instructors committed to the traditional way.
                    </p>
                    
                    {/* Button inverted to dark background */}
                    <NextLink href="/dojo" className="bg-neutral-900 text-white hover:bg-red-600 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 w-fit">
                        <MapPin size={20} /> View Dojo Directory
                    </NextLink>
                </div>

                <div className="relative z-10 w-full md:w-1/3 flex justify-center">
                    {/* Spinning pulse circle inverted to white with light borders */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center border border-neutral-200 shadow-xl animate-[pulse_4s_ease-in-out_infinite]">
                        <div className="absolute inset-4 border border-dashed border-neutral-300 rounded-full animate-[spin_20s_linear_infinite]" />
                        <MapPin size={80} className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.2)]" />
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 3. NEWS & EVENTS SECTION - NO BORDERS, 20PX ROUNDING, FULL WIDTH UNCROPPED IMAGES, EQUAL HEIGHT CARDS */}
      <section id="news" className="py-24 px-6 bg-[#F6F6F6] border-t border-neutral-200 shadow-[0_-8px_15px_rgba(0,0,0,0.03)] relative z-20">
        <div className="container mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16 relative">
            <span className="absolute -top-12 opacity-[0.03] text-[10rem] font-black text-black select-none pointer-events-none hidden md:block leading-none z-0">
                02
            </span>
            <div className="inline-flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-xs mb-4 relative z-10">
                <span className="w-8 h-[2px] bg-red-600"></span>
                Federation Updates
                <span className="w-8 h-[2px] bg-red-600"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 mb-6 relative z-10">
                News <span className="text-neutral-300 mx-2">&bull;</span> Events
            </h2>
            <p className="text-neutral-600 max-w-xl text-lg leading-relaxed relative z-10">
                The latest announcements, seminar schedules, and championship results from SKIF-USA headquarters.
            </p>
          </div>

          {/* CSS Grid defaults to items-stretch, meaning all cards in the row will match the height of the tallest card */}
          <div className="grid md:grid-cols-3 gap-8">
            {events.length > 0 ? (
              events.map((item) => (
                <NewsCard
                  key={item._id}
                  href={item._type === 'news' ? `/news?id=${item._id}` : `/events?id=${item._id}`}
                  category={item._type === 'news' ? 'News' : (item.category || "Event")}
                  date={item.date ? new Date(item.date + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "TBA"}
                  title={item.title} 
                  location={item.location || "Headquarters"}
                  image={item.image ? urlFor(item.image) : "/fall_back_news_events.webp"} 
                />
              ))
            ) : (
              <div className="col-span-3 text-center text-neutral-500 font-bold py-12">Loading latest updates...</div>
            )}
          </div>
        </div>
      </section>

      {/* 4. MEMBER RESOURCES SECTION - BLACK BORDER, NO BACKGROUND, SOFT SHADOW, 20px ROUNDING */}
      <section id="resources" className="py-32 px-6 bg-white border-t border-neutral-200 shadow-[0_-8px_15px_rgba(0,0,0,0.03)] relative z-30 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
           <div className="flex flex-col items-center text-center mb-16 relative">
            <span className="absolute -top-12 opacity-[0.03] text-[10rem] font-black text-black select-none pointer-events-none hidden md:block leading-none z-0">
                03
            </span>
            <div className="inline-flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-xs mb-4 relative z-10">
                <span className="w-8 h-[2px] bg-red-600"></span>
                Quick Access
                <span className="w-8 h-[2px] bg-red-600"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 mb-6 relative z-10">
                Member <span className="text-neutral-300 mx-2">&bull;</span> Resources
            </h2>
            <p className="text-neutral-600 max-w-xl text-lg leading-relaxed relative z-10">
                Verify black belt credentials, download official technical syllabi, or purchase authentic federation merchandise.
            </p>
          </div>

           <div className="grid md:grid-cols-3 gap-8">
              
              {/* CARD 1: Black Belt Registry */}
              <NextLink href="/registry" className="group relative h-[350px] bg-transparent border border-neutral-900 rounded-[20px] overflow-hidden transition-all duration-300 flex flex-col p-8 hover:shadow-xl hover:-translate-y-1 hover:border-red-600">
                  <div className="w-14 h-14 bg-transparent border border-neutral-900 rounded-full flex items-center justify-center mb-6 group-hover:border-red-600 transition-colors">
                      <ScrollText size={24} className="text-neutral-900 group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-black uppercase text-neutral-900 mb-4 leading-none">
                          Black Belt <br/><span className="text-neutral-500 group-hover:text-red-600 transition-colors">Registry</span>
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                         Official database of SKIF-USA Yudansha members. Verify ranks and certification status.
                      </p>
                  </div>
                  <div className="mt-auto border-t border-neutral-900 pt-6 flex items-center justify-between text-neutral-900 font-bold uppercase tracking-widest text-xs group-hover:border-red-600 transition-colors">
                      <span>Search Database</span>
                      <ArrowRight className="text-neutral-900 group-hover:text-red-600 transition-colors" size={18} />
                  </div>
              </NextLink>

              {/* CARD 2: Technical Docs */}
              <NextLink href="/technical" className="group relative h-[350px] bg-transparent border border-neutral-900 rounded-[20px] overflow-hidden transition-all duration-300 flex flex-col p-8 hover:shadow-xl hover:-translate-y-1 hover:border-red-600">
                  <div className="w-14 h-14 bg-transparent border border-neutral-900 rounded-full flex items-center justify-center mb-6 group-hover:border-red-600 transition-colors">
                      <FileText size={24} className="text-neutral-900 group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-black uppercase text-neutral-900 mb-4 leading-none">
                          Technical <br/><span className="text-neutral-500 group-hover:text-red-600 transition-colors">Docs</span>
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                         Downloads for grading syllabi, tournament rules, and official instructor manuals.
                      </p>
                  </div>
                  <div className="mt-auto border-t border-neutral-900 pt-6 flex items-center justify-between text-neutral-900 font-bold uppercase tracking-widest text-xs group-hover:border-red-600 transition-colors">
                      <span>View Files</span>
                      <ArrowRight className="text-neutral-900 group-hover:text-red-600 transition-colors" size={18} />
                  </div>
              </NextLink>

              {/* CARD 3: Merchandise */}
              <a 
                href="https://www.skifusa.org/shop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-[350px] bg-transparent border border-neutral-900 rounded-[20px] overflow-hidden transition-all duration-300 flex flex-col p-8 hover:shadow-xl hover:-translate-y-1 hover:border-red-600"
              >
                  <div className="w-14 h-14 bg-transparent border border-neutral-900 rounded-full flex items-center justify-center mb-6 group-hover:border-red-600 transition-colors">
                      <ShoppingBag size={24} className="text-neutral-900 group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-black uppercase text-neutral-900 mb-4 leading-none">
                          Official <br/><span className="text-neutral-500 group-hover:text-red-600 transition-colors">Merch</span>
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                          Purchase authentic SKIF-USA gi, patches, belts, and branded apparel.
                      </p>
                  </div>
                  <div className="mt-auto border-t border-neutral-900 pt-6 flex items-center justify-between text-neutral-900 font-bold uppercase tracking-widest text-xs group-hover:border-red-600 transition-colors">
                      <span className="flex items-center gap-2">Go to Store <ExternalLink size={14} /></span>
                      <ArrowRight className="text-neutral-900 group-hover:text-red-600 transition-colors" size={18} />
                  </div>
              </a>

           </div>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

// FINAL NEWS CARD: Uses Next.js Image for massive payload savings while maintaining layout
function NewsCard({ href, category, date, title, location, image }: { href: string, category: string, date: string, title: string, location: string, image: string }) {
  return (
    <NextLink 
      href={href} 
      className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 shadow-sm text-neutral-900 h-full border-none"
    >
      
      <div className="relative w-full shrink-0 bg-white aspect-[4/5]"> {/* Set aspect ratio so Next Image knows how to render */}
         {/* CHANGED BACK TO NEXT/IMAGE FOR OPTIMIZATION */}
         <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw" // Tells Next.js to serve smaller images
            className="object-contain block transition-transform duration-700 group-hover:scale-105 origin-center"
         />
         <div className="absolute top-5 left-5 bg-neutral-900 text-white text-[10px] font-black px-4 py-2 rounded-[20px] uppercase tracking-widest shadow-lg group-hover:bg-red-600 transition-colors z-10">
            {category}
         </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1 text-left bg-white relative z-20">
         <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-widest mb-3">
            <Calendar size={14} className="text-red-600" /> {date}
         </div>
         
         <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight mb-6 group-hover:text-red-600 transition-colors line-clamp-3">
            {title}
         </h3>
         
         <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-5">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-xs uppercase tracking-widest">
              <MapPin size={14} className="text-red-600" /> {location}
            </div>
            
            <div className="text-neutral-400 group-hover:text-red-600 transition-all duration-300">
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
         </div>
      </div>
    </NextLink>
  );
}