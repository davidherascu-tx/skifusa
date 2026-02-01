"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";

// --- TECHNICAL DOCUMENTS DATA ---
const technicalDocs = [
  {
    id: 1,
    title: "Yondan Research Paper Sample",
    updateDate: "February 22, 2023",
    fileUrl: "/docs/SKIF_Connection_to_the_Earth.pdf" 
  },
  {
    id: 2,
    title: "SKIF Research Paper Criteria for Yondan Examinations",
    updateDate: "November 5, 2022",
    fileUrl: "/docs/skif_usa_research_paper_criteria.pdf"
  },
  {
    id: 3,
    title: "SKIF Tournament Rules",
    updateDate: "December 10, 2019",
    fileUrl: "/docs/SKIF_tournament_rules_dec_2019.pdf"
  },
  {
    id: 4,
    title: "SKIF Kyu and Dan Examination Requirements Training Manual",
    updateDate: "May 13, 2025",
    fileUrl: "/docs/Kyu-and-Dan-Manual-Revision-2024.pdf"
  }
];

export default function TechnicalPage() {
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
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Technical Registry</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
            Technical <span className="text-neutral-700">Resources</span>
          </h1>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl leading-relaxed">
            Access official SKIF-USA documentation and research guidelines for advanced examinations.
          </p>
        </motion.div>

        {/* --- DOCUMENTS LIST --- */}
        <div className="space-y-6">
          {technicalDocs.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-neutral-900/40 border border-neutral-800 rounded-[2.5rem] p-8 md:p-10 hover:border-red-600 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Document Icon */}
              <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0 shadow-xl">
                <FileText size={32} />
              </div>

              {/* Info Area */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                    <Calendar size={12} /> Updated: {doc.updateDate}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-red-500 transition-colors leading-tight">
                  {doc.title}
                </h3>
              </div>

              {/* Download Button */}
              <div className="shrink-0 w-full md:w-auto">
                <a 
                  href={doc.fileUrl}
                  download
                  className="flex items-center justify-center gap-3 bg-neutral-800 hover:bg-white hover:text-black text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all group/btn w-full md:w-auto shadow-lg"
                >
                  Download PDF
                  <Download size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER BANNER --- */}
        <div className="mt-40 text-center">
          <p className="text-neutral-600 uppercase tracking-[0.4em] text-[10px] font-mono">
            Direct Affiliation • Technical Integrity • SKIF-USA
          </p>
        </div>

      </div>
    </main>
  );
}