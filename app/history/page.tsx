"use client";

import { motion } from "framer-motion";

export default function HistoryPage() {
  return (
    // Removed "min-h-screen" here so the footer hugs the content naturally
    <main className="bg-[#F5F5F5] text-neutral-900 selection:bg-red-600 selection:text-white pt-28 md:pt-48 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        
        {/* --- PAGE HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-red-600 pl-6"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">
            About the Federation
          </h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-neutral-900">
            Our History
          </h1>
        </motion.div>

        {/* --- CONTENT SECTION --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-1 gap-12"
        >
          {/* Main Text Content */}
          <div className="space-y-8 text-neutral-700 text-lg md:text-xl leading-relaxed">
            <p>
              <strong className="text-neutral-900">Shotokan Karate-Do International Federation-United States of America (“SKIF-USA”)</strong> is a private, not-for-profit, educational karate organization based in the United States of America.
            </p>
            
            <p>
              SKIF-USA was formed in 1998 and is affiliated directly with <strong className="text-neutral-900">Shotokan Karate-Do International Federation (“SKIF”)</strong>, based in Japan.
            </p>

            {/* Callout box for the light gray background */}
            <div className="bg-white border border-neutral-200 p-8 rounded-3xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
              <p className="relative z-10 text-neutral-800">
                SKIF-USA is a representative organization controlled by a volunteer board of directors who are elected by its members. The board of directors elects officers and appoints staff to manage the day-to-day affairs of the organization.
              </p>
            </div>

            <p>
              SKIF-USA’s office, which is located in <span className="text-neutral-900 font-bold">New Brighton, Minnesota</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}