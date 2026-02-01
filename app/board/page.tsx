"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Mail, Info } from "lucide-react";

// --- BOARD MEMBERS DATA ---
const boardMembers = [
  { 
    id: 1, 
    name: "Jim Shea", 
    title: "President", 
    rank: "7th Dan", 
    bio: `D.O.B. 07.20.1950
Education
Southeastern Massachusetts Technological Institute – B. S. Psychology 1975
Univ. of Central Florida – M.Ed. 1985 / M.S. Mental Health Counseling 1988
Karate
Began karate-do training – SMTI’s University Shotokan Karate Club as an undergraduate student
Tai Chi Chuan Training -Sifu Pui Chan – Orlando, FL 1983-1995
Taught Shotokan Karate do & Yang Style Tai Chi Chuan – Seminole College Physical Education Dept., Sanford, FL 1983-1995.
Operated dojos/ clubs in FL, NH, VT, CT & MA
Presently teaching Karate-do & Tai Chi Chuan – Longmeadow, MA
Joined SKIF 1994
Leadership
Member SKIF- USA first Steering Committee & Board of Directors
Assistant Coach SKIF World Championships Japan 2006
Team Coach SKIF Pan American Championships Costa Rica 2007
Assistant Coach SKIF World Championships Greece 2009`, 
    image: "/shea_profil_bw.webp" 
  },
  { 
    id: 2, 
    name: "Chris Johnson", 
    title: "General Secretary", 
    rank: "6th Dan", 
    bio: `Karate Journey
Chris has been training Shotokan Karate (traditional Japanese karate) since 1985. She achieved her first level of black belt in 1992. Over the years she has trained and tested for subsequence ranks, achieving her 6 th Dan rank in 2014.
Instruction
In 2002 she became owner and Chief Instructor of Peak Performance Shotokan Karate-Do dojo located in New Brighton, MN. Her school teaches all ages of students, specializing in youth programs. Chris is also honored to be teaching preschool programs at Creative Kids Academy in the Minneapolis area and youth/adult programs for the YMCA Emma B. Howe-Coon Rapids. 
Leadership
Chris has also served on the Shotokan Karate International Federation-USA board of directors since 2005; an organization dedicated to growing Shotokan Karate schools throughout the US.
This organization is the USA branch of Shotokan Karate International Federation located in Japan and founded by Kanazawa Soke. Chris is a certified instructor, judge and referee through SKIF. And has competed on the international stage in Kata.`, 
    image: "/chris_profil_bw2.webp" 
  },
  { 
    id: 3, 
    name: "Rubén Fung", 
    title: "Secretary", 
    rank: "6th Dan", 
    bio: `Rank:
6th Godan
Country of Birth:
Panama
Karate
Practice Karate since 1985 and Karate Instructor since 1998
6th Dan Black Belt given by Shotokan Karate Do International Federation (SKIF) in August 2024
5th Dan Black Belt given by Shotokan Karate Do International Federation (SKIF) in March 2014
4th Dan Black Belt given by Shotokan Karate Do International Federation (SKIF) in July 2008
3 Dan Black Belt given by Shotokan Karate Do International Federation (SKIF), Nov 2004
2 Dan Black Belt given by Shotokan Karate Do International Federation (SKIF), Sept 2001
1 Dan Black Belt given by Asociacion Universitaria de Karate Do Panama, Dec 1997.
Trained with:
Sensei. Arnoldo R Cohen (Asociación Univesitaria de Karate-Do SKIF Panama)
Shihan Leonel Worrell (R.I.P) (Panamá)
Shihan. Marcos Moron (R.I.P) (SKIF Peru)
Sensei Francisco Estévez (SKIF Nicaragua)
Hanshi. Masataka Mori (JKA NY)
Hanshi Namiki Toshiaki (JKSF)
Hanshi Wei Yui Ji (Costa Rica)
Kancho Masaya Kohama (Shobukan Japon)
Kancho Hirokazu Kanazawa, Shihan Manabu Murakami, Shinji Tanaka, Daizo Kanazawa and Fumitoshi Kanazawa (SKIF HQ Japon)
Sensei Shadi Barazi and Karayash Daylami (SKIF USA)
Tournaments
SKIF Pan American Championship 2012 at Dominic Replublic
SKIF World Championship Greece 2009
SKIF USA 2008 National and Open Tournament in Miami – 2 Place in Kata
Shobukan Karate Do Tournament 2008, Killeen Tx, 2 Place in Kata
SKIF Pan American Championship 2007 at San Jose Costa Rica
Karate Do Tournament in NY 2000, 2 Place in Kata
Karate Do Tournament in Pennsylvania 2000, 1 Place in Kumite and Kata
Karate Do Tournament in San Jose Costa Rica, 1 Place in Kata and 1 Place Team Kumite
Interests
Director and Instructor “Asociación Universitaria de Karate – Do Panamá” in Panama City, since 1997
Director – Representative “Shotokan Karate – Do International Federation – Panama” affiliated to Japan, since 1999
Director “SKIF USA” , since 2010
Life
Language:
English, Spanish and Chinese (Cantonese)
Education
MBA in International Business and Finance at University of St Thomas
MBA in Marketing at Universidad Latina de Ciencias y Tecnologia (Panama)
Bachelor Degree in Finance at Universidad Santa Maria la Antigua (Panama)`, 
    image: "/ruben_profil_bw_3.webp" 
  },
  { 
    id: 4, 
    name: "Penny Karpovsky", 
    title: "Treasurer", 
    rank: "5th Dan", 
    bio: `Karate
Penny began training under Fujishima Hanshi in 1989 and helped organize the first and second SKIF international seminars held at California State University, Northridge. She was promoted to shodan by Soke in Tokyo following the 5th SKIF World Championship, Yokohama.
Tournaments
She has participated in seminars of Soke, Kancho, and Fujishima Hanshi as well as placing first in kata, masters division, at the 9th SKIF World Championship, Tokyo, and 10th SKIF World Championship, Athens.
Promotions
She was promoted to 5th dan by Kanazawa Kancho in 2018.
Life & Career
A teacher for 30 years in Los Angeles Unified School District, Penny has managed the CSUN Martial Arts Center, the CSUN Karate Club, and California Karate Association as administrative assistant to Fujishima Hanshi.
Leadership
She has served on the board of SKIF-USA as Treasurer since 2016.`, 
    image: "/penny_profil.webp" 
  },
  { 
    id: 5, 
    name: "Manfred Nagel", 
    title: "Director", 
    rank: "7th Dan", 
    bio: `Bio of Sensei Manfred Nagel
7 th DAN Shotokan Karate.
SKIF Windward Oahu Foundation Kaneohe Hawaii.
Sensei Manfred Nagel is the Chief Instructor of the Windward Oahu Foundation.
Relocation
Sensei Nagel is a Native of Germany and relocated to Hawaii in 1985. He started Karate in 1967 back in his Home Town of Schwaebisch Hall.
Tournaments
Sensei Nagel participated in many Karate Tournaments, National and International in Kumite and Kata, placing always in the top five in National Tournaments. In 1974 he placed third at the European Championship held in Berlin, Germany.
Philosophy
It is the goal of Sensei Nagel to introduce Karate to as many people as possible because it is the ultimate exercise. Karate teaches you compassion, respect and discipline for yourself and your fellow humans.
Rank History
Since his relocation to Hawaii Nagel practice Karate under the watchful eyes of Takemori Sensei 9 th DAN, Kiyuna Sensei 8 th DAN, Fong Sensei 8 th DAN and Nishimura Sensei 7 th DAN. In 2018 Nagel tested successfully for 7 th DAN under Kanzcho Kanazawa in Honolulu, Hawaii.`, 
    image: "/manfred_nagel_profil.webp" 
  },
  { id: 6, name: "Ricardo Neves", title: "Director", rank: "4th Dan", bio: "Bio for Ricardo Neves", image: "/ricardo_profil_bw.webp" },
  { id: 7, name: "Norman Odani", title: "Director", rank: "2nd Dan", bio: "Bio for Norman Odani", image: "/norman_profil_bw.webp" },
];

export default function BoardPage() {
  const [selectedMember, setSelectedMember] = useState<typeof boardMembers[0] | null>(null);

  const formatBio = (text: string) => {
    const headers = [
      "Education", "Karate", "Leadership", "Rank:", "Country of Birth:", 
      "Tournaments", "Interests", "Life", "Language:", "Karate Journey", 
      "Instruction", "Promotions", "Life & Career", "Relocation", "Philosophy", "Rank History", "Trained with:", "Seminar Given:"
    ];
    
    return text.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return <div key={i} className="h-6" />;

      const isHeader = headers.some(h => trimmedLine === h || trimmedLine === h.replace(':', ''));
      
      const isListItem = 
        trimmedLine.startsWith('–') || 
        trimmedLine.startsWith('-') || 
        trimmedLine.includes('Dan Black Belt') || 
        trimmedLine.includes('Place in') || 
        trimmedLine.includes('MBA') || 
        trimmedLine.includes('Bachelor') ||
        trimmedLine.startsWith('Sensei') || 
        trimmedLine.startsWith('Shihan') || 
        trimmedLine.startsWith('Hanshi') || 
        trimmedLine.startsWith('Kancho') ||
        (selectedMember?.name === "Rubén Fung" && (trimmedLine.includes('SKIF') || trimmedLine.includes('Karate Do Tournament')));

      if (isHeader) {
        return (
          <h4 key={i} className="text-white font-black uppercase text-sm tracking-widest mt-10 mb-6 border-b border-neutral-800 pb-3">
            {trimmedLine}
          </h4>
        );
      }

      return (
        <div key={i} className="flex items-start gap-3 mb-3">
          {isListItem && <span className="text-red-600 font-bold mt-1 shrink-0">•</span>}
          <p className={`${isListItem ? 'text-neutral-200' : 'text-neutral-400'} text-sm md:text-base leading-relaxed`}>
            {trimmedLine}
          </p>
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-red-600 pl-6 max-w-4xl mx-auto"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Leadership</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">Board of <br/>Directors</h1>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl leading-relaxed">
            SKIF-USA is controlled by a volunteer board of directors who are elected by its members to manage the day-to-day affairs of the organization.
          </p>
        </motion.div>

        {/* --- GRID (Restored and Refined) --- */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {boardMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-red-600 transition-all duration-500 shadow-xl"
            >
              <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              
              {/* Card Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-black uppercase leading-tight mb-2 group-hover:text-white transition-colors">{member.name}</h3>
                
                {/* Role Badges directly under name */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                    {member.title}
                  </span>
                  <span className="text-neutral-400 text-[10px] font-mono tracking-tighter uppercase">
                    {member.rank}
                  </span>
                </div>

                <div className="absolute bottom-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <Info size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- POPUP MODAL --- */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMember(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button onClick={() => setSelectedMember(null)} className="absolute top-6 right-6 z-30 p-2 bg-neutral-900 hover:bg-red-600 rounded-full transition-all text-white border border-neutral-800 shadow-lg"><X size={20} /></button>

                {/* Left Side: Sidebar Image with Fade Transition */}
                <div className="relative w-full md:w-[38%] h-72 md:h-auto shrink-0 bg-neutral-900 overflow-hidden">
                  <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover object-top" priority />
                  <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 via-neutral-950/40 to-transparent" />
                  <div className="md:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
                </div>

                {/* Right Side: Content Area */}
                <div className="p-8 md:p-14 flex-1 overflow-y-auto bg-neutral-950">
                  <div className="relative z-10 text-left">
                    <span className="text-red-600 font-black uppercase tracking-widest text-[9px]">{selectedMember.rank}</span>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-1 text-white">{selectedMember.name}</h2>
                    <p className="text-neutral-500 font-bold uppercase tracking-widest text-[11px] mb-8 flex items-center gap-3"><span className="w-8 h-[1px] bg-red-600" /> {selectedMember.title}</p>
                    
                    <div className="pl-0 relative">
                       <div className="py-2">{formatBio(selectedMember.bio)}</div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-neutral-900">
                      <a href="mailto:skifusa@gmail.com" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-all group">
                        <Mail size={16} className="text-red-600 group-hover:scale-110" /> Contact via Secretary
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}