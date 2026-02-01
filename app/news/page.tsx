"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  const pdfUrl = "/SKIF-USA-Newsletter-2025.pdf"; // Ensure this file is in your /public folder

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-l-4 border-red-600 pl-6"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Federation Updates</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Latest <span className="text-neutral-700">News</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-6">
            <p className="text-neutral-400 text-lg max-w-2xl">
              Official Fall/Winter 2025 Newsletter1. Read about Taikyoku Shodan perspectives, Kancho Kanazawa in Hawaii, and more.
            </p>
            <a 
              href={pdfUrl} 
              download 
              className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-red-600 px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all shadow-xl shadow-black/50"
            >
              <Download size={16} className="text-red-600" /> Download PDF
            </a>
          </div>
        </motion.div>

        {/* --- PDF EMBED CONTAINER --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-[1/1.4] md:aspect-video rounded-[2.5rem] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl shadow-red-900/10"
        >
          {/* Using <object> with an <iframe> fallback covers the most browsers.
              If the browser supports PDFs, <object> renders it. 
              If not, it attempts the <iframe>. 
          */}
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pdfUrl)}&embedded=true`}
              className="w-full h-full border-none"
              title="PDF Viewer Fallback"
            >
              <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                <FileText size={48} className="text-red-600 mb-4" />
                <p className="text-neutral-400 mb-6">Your browser does not support embedded PDFs.</p>
                <a href={pdfUrl} download className="text-white font-bold underline">Click here to download the Newsletter instead.</a>
              </div>
            </iframe>
          </object>
        </motion.div>

        {/* --- FOOTER BANNER --- */}
        <div className="mt-20 pt-12 border-t border-neutral-900 flex justify-between items-center text-neutral-600">
          <p className="uppercase tracking-[0.4em] text-[10px] font-mono">Volume 20 • SKIF-USA News</p>
          <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest">
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}