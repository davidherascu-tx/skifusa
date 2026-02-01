"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Award, Star, Quote } from "lucide-react";

// --- HALL OF FAME DATA ---
const inductees = [
  {
    year: "2022",
    name: "Sensei Glenna Burleson",
    location: "CA",
    image: "/glenna_burleson.webp", 
    bio: `Sensei Burleson was a founding board member for SKIF-USA. At the request of Soke, she became the first General Secretary, a position she held from 1998 – 2006. During that time she worked tirelessly to create the structure SKIF-USA functions under today. During her tenure with SKIF-USA she attended numerous tournament and international events. At all of these events, Sensei Burleson represented SKIF-USA with dignity and humility. She was a true ambassador of Soke Kanazawa’s philosophy of harmony with oneself, others, and nature. Her leadership during those formative years was essential for the success of our organization.

In 1991 Sensei Burleson opened her own dojo, Peak Performance Shotokan Karate-Do in New Brighton, Mn.

Sensei Burleson is a model teacher who believes profoundly in Soke’s message of Shotokan Karate being a vehicle for world peace. All of SKIF-USA is grateful for her contributions.`
  },
  {
    year: "2020",
    name: "Shihan Francis Fong",
    location: "HI",
    image: "/shihan_francis_fong.webp",
    bio: `Shihan Fong served as SKIF-USA’s 1st President, a position he held for ten years. During that time, he traveled extensively to SKIF functions in Mexico City, Mexico; Yokohama, Japan; Milan, Italy; Bali Indonesia; Durban, South Africa; Tokyo, Japan; and Athens, Greece. At all of these events, Shihan Fong represented SKIF-USA with dignity and humility. He was a true ambassador of Soke Kanazawa’s philosophy of harmony with oneself, others, and nature. Shihan Fong’s leadership during those formative years was marked by calmness and integrity.

In the late 1990s, Shihan Fong was the Chief Instructor of his dojo in Salt Lake, Honolulu, HI, and has instructed many students over the years.

In 2006, Soke presented Shihan Fong a “Special Award” of appreciation for his contributions and efforts made by him to expand SKIF.

Shihan Fong is a model teacher who believes profoundly in Soke’s message of Shotokan Karate being a vehicle for world peace. All of SKIF-USA is grateful for your contributions.`
  },
  {
    year: "2020",
    name: "Shihan Glenn Stoddard",
    location: "WI",
    image: "/shihan_glenn_stoddard.webp",
    bio: `Shihan Stoddard was a founding member of SKIF-USA. During those formative years, he acted as legal counsel to the board. In 2005 Shihan Stoddard was elected as General Secretary for SKIF-USA and served in that role until 2011. In 2006 Shihan Stoddard received an award of appreciation from Soke Kanazawa to recognize his contributions and efforts to expand the SKIF community in the world.

Shihan Stoddard was generous in sharing his vast knowledge of Shotokan Karate, teaching in his dojo in WI, at seminars around the country, and writing articles for Shotokan Karate Magazine. “I have never encountered such a knowledgeable and humble man,” remarked a fellow board member. His sense of duty to “give back” was a hallmark of his great stature.

Shihan Stoddard passed away in June 2017. A year later, Nobuaki Kancho visited Sensei Glenn’s memorial in Bayfield, WI. There Kancho presented Mrs. Stoddard with Shihan Stoddard’s posthumous 8th Dan certificate. With Soke’s, Kancho’s, and all of SKIF’s final bow, they said farewell to a great Karate-ka. All of SKIF-USA is grateful for his contributions.`
  }
];

export default function HallOfFame() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-200 selection:text-black pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER (Alignment fixed to match Board Page) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-amber-500 pl-6 max-w-4xl"
        >
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-2">Honoring Excellence</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Hall of <br/>Fame
          </h1>
          <div className="space-y-6 text-neutral-400 mt-6 text-lg max-w-2xl leading-relaxed">
            <p>
              In 2019, the SKIF-USA Board of Directors voted to create the <strong className="text-white">SKIF-USA Hall of Fame</strong> to recognize the valuable contributions our members have made to the development of SKIF, SKIF-USA, and Shotokan Karate.
            </p>
            <p className="text-sm border-t border-neutral-900 pt-6">
              It is with deep honor, respect and gratitude that we enshrine the following karate-ka for their invaluable contributions to our organization.
            </p>
          </div>
        </motion.div>

        {/* --- INDUCTEES LIST --- */}
        <div className="space-y-32">
          {inductees.map((person) => (
            <motion.section 
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col md:flex-row gap-12 items-start"
            >
              {/* Image Side with Seamless Gradients */}
              <div className="relative w-full md:w-[38%] aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 shrink-0 group shadow-2xl shadow-amber-900/10">
                <Image 
                  src={person.image} 
                  alt={person.name} 
                  fill 
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                {/* Seamless Fade Transitions into Black */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent" />
                <div className="md:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-full font-black text-[10px] tracking-widest shadow-xl">
                  <Star size={12} fill="currentColor" /> INDUCTEE {person.year}
                </div>
              </div>

              {/* Bio Content Side */}
              <div className="flex-1 py-4">
                <div className="flex items-center gap-3 mb-4">
                   <Award className="text-amber-500" size={18} />
                   <span className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px]">{person.location} // SKIF.USA</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                  {person.name}
                </h2>
                
                <div className="relative border-l-2 border-neutral-800 pl-8">
                  <div className="absolute top-0 left-[-2px] w-[2px] h-12 bg-amber-500" />
                  <Quote className="absolute -left-6 -top-8 text-neutral-900 opacity-20 pointer-events-none" size={80} />
                  <div className="text-neutral-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-medium relative z-10">
                    {person.bio}
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-6 opacity-20">
                  <Trophy size={32} className="text-amber-500" />
                  <div className="h-[1px] flex-1 bg-neutral-800" />
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* --- FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center py-20 border-t border-neutral-900"
        >
          <p className="text-neutral-500 uppercase tracking-[0.5em] text-[10px] font-mono">
            One Style • One Spirit • One Federation
          </p>
        </motion.div>

      </div>
    </main>
  );
}