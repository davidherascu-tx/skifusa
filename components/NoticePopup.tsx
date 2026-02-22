"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function NoticePopup() {
  const [isMounted, setIsMounted] = useState(false);
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {showNotice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-neutral-950 border border-red-600/30 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-red-900/20 max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setShowNotice(false)}
              className="absolute top-6 right-6 p-2 bg-neutral-900 hover:bg-red-600 rounded-full transition-all text-white border border-neutral-800"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-3 mb-8 mt-2">
              <span className="w-8 h-[2px] bg-red-600"></span>
              <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm">Official Notice</h2>
            </div>
            
            <div className="space-y-6 text-neutral-300 text-sm md:text-base leading-relaxed">
              <p>
                <strong className="text-white">SKIF-USA</strong> and <strong className="text-white">SKI-USF</strong> are the only recognized representative bodies of SKIF-Japan in the United States of America...
              </p>
              <p>
                Any use of the SKIF name or these logos without the express permission of these two bodies...
              </p>
              <p>
                As a Federation, each member-country representative has oversight of the hosting of official SKIF seminars...
              </p>
              <p className="text-red-400 font-medium">
                Please be advised that if anyone has received Dan grading during an unofficial event...
              </p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-neutral-800 flex justify-end">
              <button 
                onClick={() => setShowNotice(false)}
                className="bg-white text-black hover:bg-neutral-200 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors text-xs"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}