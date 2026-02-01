"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  ExternalLink, 
  Calendar, 
  Download, 
  Maximize2, 
  ChevronRight,
  BookOpen
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function NewsPage() {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const newsletterUrl = "/SKIF-USA-Newsletter-2025.pdf";
  const coverImage = "/SKIF_Newsletter_Winter_2025.webp"; // Using your existing webp preview

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 selection:bg-red-600 selection:text-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              Latest Publication
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              The <span className="text-neutral-800">SKIF</span><br />Journal
            </h1>
            
            <p className="text-neutral-400 text-lg md:text-xl max-w-md leading-relaxed mb-10">
              Technical insights, federation updates, and stories from the global SKIF community. Read the Winter 2025 edition.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsReaderOpen(true)}
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all duration-500"
              >
                Read Now <BookOpen size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
              <a 
                href={newsletterUrl} 
                download
                className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:border-neutral-600 transition-all"
              >
                Download PDF <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* MAGAZINE COVER PREVIEW */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group cursor-pointer"
            onClick={() => setIsReaderOpen(true)}
          >
            <div className="absolute -inset-4 bg-red-600/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transform group-hover:-rotate-2 group-hover:scale-[1.02] transition-all duration-700">
              <Image 
                src={coverImage} 
                alt="Newsletter Cover" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Calendar size={12} /> Winter 2025 Edition
                </div>
                <div className="text-2xl font-black uppercase tracking-tighter">SKIF-USA Newsletter</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- READER OVERLAY --- */}
        {isReaderOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-900">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 relative">
                  <Image src="/skifusa_logo.webp" alt="Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tighter">SKIF-USA Journal</h3>
                  <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Winter 2025</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href={newsletterUrl} 
                  target="_blank" 
                  className="p-3 bg-neutral-900 hover:bg-neutral-800 rounded-full text-white transition-colors"
                  title="Open in New Tab"
                >
                  <ExternalLink size={20} />
                </a>
                <button 
                  onClick={() => setIsReaderOpen(false)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-black uppercase tracking-widest transition-colors"
                >
                  Close Reader
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-neutral-900/50 p-4 md:p-10 flex justify-center">
              <iframe 
                src={`${newsletterUrl}#toolbar=0&navpanes=0`} 
                className="w-full max-w-5xl h-full rounded-xl shadow-2xl border border-white/5"
                title="Newsletter PDF"
              />
            </div>
          </motion.div>
        )}

        {/* --- SECONDARY NEWS GRID --- */}
        <div className="border-t border-neutral-900 pt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">Archive</h2>
              <p className="text-neutral-500 text-sm font-medium">Previous updates and announcements</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="group p-8 rounded-[2rem] bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all cursor-not-allowed">
                <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="text-neutral-500" size={24} />
                </div>
                <h4 className="text-neutral-400 font-bold uppercase tracking-tight mb-2">Coming Soon</h4>
                <p className="text-neutral-600 text-sm">Archived newsletters and historical documents are being digitized.</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}