"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X as CloseIcon, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  ChevronDown,
  ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- NAVIGATION DATA ---
const navLinks = [
  { 
    name: "About", 
    href: "#", // No link, just opens submenu
    submenu: [
      { name: "Our History", href: "/history" },
      { name: "Instructors", href: "/instructors" },
      { name: "Philosophy", href: "/philosophy" },
      { name: "Board of Directors", href: "/board" },
      { name: "Hall of Fame", href: "/hall-of-fame" },
    ]
  },
  { name: "News", href: "/news" },
  { name: "Events/Calendar", href: "/events" }, 
  { 
    name: "Resources", 
    href: "#",
    submenu: [
        { name: "Membership", href: "/membership" },
        { name: "Black Belt Registry", href: "/registry" },    
        { name: "Find a Dojo", href: "/dojo" },
        { name: "Technical", href: "/technical" },
        { name: "SKIF Japan", href: "https://www.skifworld.com/" },
    ]
  },
  { name: "Shop", href: "https://www.skifusa.org/shop" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileExpandedIndex(null);
  };

  return (
    <>
      {/* --- FLOATING PILL NAVBAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 inset-x-0 max-w-7xl mx-auto px-4 z-[60]"
      >
        <div 
          className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-full pl-6 pr-2 py-2 flex justify-between items-center shadow-2xl shadow-black/50"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <NextLink href="/" className="flex items-center gap-3 mr-4 relative z-50 shrink-0 group" onClick={closeMenu}>
            <div className="relative h-8 w-8 md:h-9 md:w-9">
              <Image 
                src="/skifusa_logo.webp"
                alt="SKIF USA Logo" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 32px, 36px"
              />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase group-hover:text-neutral-300 transition-colors">
              SKIF.<span className="text-neutral-500">USA</span>
            </span>
          </NextLink>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {navLinks.map((link, index) => {
              const isExternal = link.href.startsWith("http");
              const hasSubmenu = !!link.submenu;
              const isNoLink = link.href === "#";

              return (
                <div 
                  key={link.name} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {isNoLink ? (
                    /* Render as a div/span if there is no link to follow */
                    <div
                      className={`px-4 py-2 text-xs font-bold transition-all uppercase tracking-wider rounded-full flex items-center gap-1 cursor-default ${
                        hoveredIndex === index ? "text-white bg-white/10" : "text-neutral-400"
                      }`}
                    >
                      {link.name}
                      {hasSubmenu && <ChevronDown size={12} />}
                    </div>
                  ) : (
                    <NextLink
                      href={link.href}
                      target={isExternal ? "_blank" : "_self"}
                      rel={isExternal ? "noopener noreferrer" : ""}
                      className={`px-4 py-2 text-xs font-bold transition-all uppercase tracking-wider rounded-full flex items-center gap-1 ${
                        hoveredIndex === index ? "text-white bg-white/10" : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {hasSubmenu && <ChevronDown size={12} />}
                      {isExternal && <ExternalLink size={12} className="opacity-50" />}
                    </NextLink>
                  )}

                  <AnimatePresence>
                    {link.submenu && hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-60 bg-neutral-900 border border-neutral-800 rounded-2xl p-2 shadow-xl overflow-hidden"
                      >
                        <div className="flex flex-col gap-1">
                          {link.submenu.map((subItem) => {
                            const isSubExternal = subItem.href.startsWith("http");
                            return (
                              <NextLink
                                key={subItem.name}
                                href={subItem.href}
                                target={isSubExternal ? "_blank" : "_self"}
                                rel={isSubExternal ? "noopener noreferrer" : ""}
                                onClick={() => setHoveredIndex(null)}
                                className="text-neutral-400 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between group/item"
                              >
                                {subItem.name}
                                {isSubExternal && <ExternalLink size={12} className="opacity-50 group-hover/item:opacity-100 transition-opacity" />}
                              </NextLink>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 relative z-50">
            <NextLink 
              href="/membership" 
              className="hidden sm:flex bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors items-center gap-2"
              onClick={closeMenu}
            >
              Join <ArrowRight size={14} />
            </NextLink>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-neutral-800 hover:bg-neutral-700 text-white p-3 rounded-full transition-colors border border-neutral-700 relative z-[70]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <CloseIcon size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- FULL SCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 flex flex-col px-6 md:px-20 pt-32 pb-10 overflow-y-auto"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-900/30 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-24">
              <div className="flex flex-col gap-4">
                <p className="text-neutral-500 text-sm font-mono mb-2 uppercase tracking-widest">Navigation</p>
                
                {navLinks.map((link, idx) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <div key={link.name} className="flex flex-col">
                      <div 
                        className="flex items-center justify-between group cursor-pointer"
                        onClick={() => {
                           if (link.submenu) {
                              setMobileExpandedIndex(mobileExpandedIndex === idx ? null : idx);
                           } else if (isExternal) {
                              window.open(link.href, "_blank", "noopener,noreferrer");
                              closeMenu();
                           } else {
                              closeMenu();
                           }
                        }}
                      >
                        <span className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors ${mobileExpandedIndex === idx ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                          {link.name}
                        </span>
                        {link.submenu ? (
                          <ChevronDown 
                            className={`text-neutral-500 transition-transform duration-300 ${mobileExpandedIndex === idx ? 'rotate-180' : ''}`} 
                            size={32} 
                          />
                        ) : isExternal ? (
                          <ExternalLink size={32} className="text-neutral-600" />
                        ) : null}
                      </div>

                      <AnimatePresence>
                        {link.submenu && mobileExpandedIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 pt-2 flex flex-col gap-3 border-l-2 border-neutral-800 ml-2 my-4">
                              {link.submenu.map((subItem) => {
                                const isSubExternal = subItem.href.startsWith("http");
                                return (
                                  <NextLink 
                                    key={subItem.name}
                                    href={subItem.href}
                                    target={isSubExternal ? "_blank" : "_self"}
                                    rel={isSubExternal ? "noopener noreferrer" : ""}
                                    onClick={closeMenu}
                                    className="text-xl text-neutral-400 hover:text-white font-medium flex items-center gap-3"
                                  >
                                    {subItem.name}
                                    {isSubExternal && <ExternalLink size={16} className="text-neutral-600" />}
                                  </NextLink>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* RESTORED INFO COLUMN */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col justify-end pt-12 lg:pt-0"
              >
                <div className="space-y-8 p-8 bg-neutral-900/50 rounded-3xl border border-neutral-800">
                  <div>
                    <h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">Headquarters</h4>
                    <p className="text-xl text-white font-medium">P.O. Box 42316<br />Cincinnati, OH 45242</p>
                  </div>
                  <div>
                    <h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">Contact</h4>
                    <p className="text-xl text-white font-medium hover:underline cursor-pointer">skifusa@gmail.com</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href="https://facebook.com/groups/skifusa" target="_blank" className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
                      <Facebook size={24} />
                    </a>
                    
                    <a href="https://x.com/skif_usa" target="_blank" className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
                        </svg>
                    </a>

                    <a href="https://instagram.com/skif_usa" target="_blank" className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white transition-all">
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}