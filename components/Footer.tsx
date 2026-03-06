"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, ArrowUpRight, MapPin, Mail, Loader2, X } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Hide Footer if we are in the Studio
  if (pathname.startsWith("/studio")) return null; 

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Newsletter Subscription',
          email: email
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="shrink-0">
              <img src="/skifusa_logo.webp" alt="SKIF USA Logo" className="h-28 md:h-36 w-auto object-contain" />
            </div>
            <div className="flex flex-col items-center md:items-start">
              {/* Changed SKIF.USA to SKIF-USA */}
              <Link href="/" className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-3 block">
                SKIF-<span className="text-neutral-600">USA</span>
              </Link>
              {/* Reduced font size to text-xs md:text-sm */}
              <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">
                One Style. One Spirit. One Federation.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-neutral-500">Contact Us</h4>
            <ul className="space-y-6 text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-white" size={18} />
                <span>P.O. Box 42316<br />Cincinnati, OH 45242</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-white" size={18} />
                <span>skifusa@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-neutral-500">Updates</h4>
            {/* Changed SKIF.USA to SKIF-USA */}
            <p className="text-neutral-400 text-sm mb-4">Join SKIF-USA news. No spam, only discipline.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={status === "success" ? "SUBSCRIBED!" : "EMAIL ADDRESS"}
                  disabled={status === "success" || status === "loading"}
                  className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button type="submit" disabled={status === "success" || status === "loading"} className="absolute right-0 top-3 text-neutral-400 hover:text-white disabled:opacity-50">
                  {status === "loading" ? <Loader2 className="animate-spin" size={20} /> : <ArrowUpRight size={20} />}
                </button>
              </div>
              {status === "success" && <p className="text-green-500 text-xs font-bold uppercase mt-1">Welcome to the federation.</p>}
              {status === "error" && <p className="text-red-500 text-xs font-bold uppercase mt-1">Error. Please try again.</p>}
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Changed SKIF.USA to SKIF-USA */}
          <p className="text-neutral-600 text-xs uppercase tracking-wider">&copy; {new Date().getFullYear()} SKIF-USA. All rights reserved.</p>
          <div className="flex gap-6">
            <SocialLink href="https://facebook.com/groups/skifusa" icon={<Facebook size={20} />} />
            <SocialLink href="https://x.com/skif_usa" icon={<X size={20} />} />
            <SocialLink href="https://instagram.com/skif_usa" icon={<Instagram size={20} />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300">
      {icon}
    </a>
  );
}