"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar, Download, BookOpen } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) { return builder.image(source).url(); }

// Fixes the off-by-1 day timezone bug
function formatDate(dateString: string) {
  if (!dateString) return "TBA";
  const date = new Date(dateString + 'T12:00:00Z');
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await client.fetch(`
        *[_type == "news"] | order(date desc) {
          _id, title, date, description, image,
          "pdfUrl": pdfDocument.asset->url
        }
      `, {}, { cache: 'no-store' }); // Forces fresh updates
      setNewsItems(data);
    };
    fetchNews();
  }, []);

  const heroPost = newsItems[0];
  const archivePosts = newsItems.slice(1);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 selection:bg-red-600 selection:text-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- HERO SECTION --- */}
        {heroPost ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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
                {heroPost.description || "Technical insights, federation updates, and stories from the global SKIF community."}
              </p>

              <div className="flex flex-wrap gap-4">
                {heroPost.pdfUrl && (
                  <>
                    <button onClick={() => setSelectedPdf(heroPost.pdfUrl)} className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all duration-500">
                      Read Now <BookOpen size={18} className="group-hover:rotate-12 transition-transform" />
                    </button>
                    <a href={heroPost.pdfUrl} download className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:border-neutral-600 transition-all">
                      Download PDF <Download size={18} />
                    </a>
                  </>
                )}
              </div>
            </motion.div>

            {/* HERO COVER PREVIEW */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative group cursor-pointer" onClick={() => heroPost.pdfUrl && setSelectedPdf(heroPost.pdfUrl)}>
              <div className="absolute -inset-4 bg-red-600/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transform group-hover:-rotate-2 group-hover:scale-[1.02] transition-all duration-700 bg-neutral-900">
                <Image 
                  src={heroPost.image ? urlFor(heroPost.image) : "/fall_back_news_events.webp"} 
                  alt={heroPost.title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2">
                    <Calendar size={12} /> {formatDate(heroPost.date)}
                  </div>
                  <div className="text-2xl font-black uppercase tracking-tighter">{heroPost.title}</div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="py-24 text-center">Loading latest news...</div>
        )}

        {/* --- PDF READER OVERLAY --- */}
        {selectedPdf && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-neutral-900">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 relative"><Image src="/skifusa_logo.webp" alt="Logo" fill className="object-contain" /></div>
                <div><h3 className="text-sm font-black uppercase tracking-tighter">SKIF-USA Document</h3></div>
              </div>
              <div className="flex items-center gap-3">
                <a href={selectedPdf} target="_blank" className="p-3 bg-neutral-900 hover:bg-neutral-800 rounded-full text-white transition-colors"><ExternalLink size={20} /></a>
                <button onClick={() => setSelectedPdf(null)} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-black uppercase tracking-widest transition-colors">Close Reader</button>
              </div>
            </div>
            <div className="flex-1 bg-neutral-900/50 p-4 md:p-10 flex justify-center">
              <iframe src={`${selectedPdf}#toolbar=0&navpanes=0`} className="w-full max-w-5xl h-full rounded-xl shadow-2xl border border-white/5" />
            </div>
          </motion.div>
        )}

        {/* --- SECONDARY NEWS GRID (ARCHIVE) --- */}
        <div className="border-t border-neutral-900 pt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">Archive</h2>
              <p className="text-neutral-500 text-sm font-medium">Previous updates and announcements</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {archivePosts.length > 0 ? archivePosts.map((item) => (
              <div 
                key={item._id} 
                onClick={() => item.pdfUrl && setSelectedPdf(item.pdfUrl)} 
                className={`group flex flex-col p-6 rounded-[2rem] bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all ${item.pdfUrl ? 'cursor-pointer' : ''}`}
              >
                {/* Archive Image Thumbnail */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-900">
                  <Image 
                    src={item.image ? urlFor(item.image) : "/fall_back_news_events.webp"} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Small icon to indicate it's a readable document */}
                  {item.pdfUrl && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                       <FileText size={18} className="text-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h4 className="text-white font-bold uppercase tracking-tight mb-2 line-clamp-2">{item.title}</h4>
                  <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">{formatDate(item.date)}</p>
                  <p className="text-neutral-400 text-sm line-clamp-3">{item.description}</p>
                </div>
              </div>
            )) : (
              <div className="col-span-3 text-neutral-600 text-sm font-bold uppercase tracking-widest text-center py-12">No archived posts yet.</div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}