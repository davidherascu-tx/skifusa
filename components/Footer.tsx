// components/Footer.tsx
import Link from "next/link";
import { Instagram, Facebook, ArrowUpRight, MapPin, Mail, Phone, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* TOP SECTION: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* UPDATED LOGO & TITLE SECTION ONLY */}
          <div className="md:col-span-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            {/* Logo */}
            <div className="shrink-0">
              <img 
                src="/skifusa_logo.webp" 
                alt="SKIF USA Logo" 
                className="h-28 md:h-36 w-auto object-contain" 
              />
            </div>

            {/* Title and Slogan */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-3 block">
                SKIF.<span className="text-neutral-600">USA</span>
              </Link>
              <p className="text-neutral-400 text-sm md:text-base uppercase tracking-[0.2em] whitespace-nowrap">
                One Style. One Spirit. One Federation.
              </p>
            </div>
          </div>

          {/* COLUMN 3: CONTACT (Kept original as requested) */}
          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-neutral-500">Contact Us</h4>
            <ul className="space-y-6 text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-white" size={18} />
                <span>
                  P.O. Box 42316<br />
                  Cincinnati, OH 45242
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-white" size={18} />
                <span>skifusa@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-white" size={18} />
                <span>+1 (513) 555-0199</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: UPDATES (Kept original as requested) */}
          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-neutral-500">Updates</h4>
            <p className="text-neutral-400 text-sm mb-4">Join the inner circle. No spam, only discipline.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-neutral-700 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors uppercase text-sm"
                />
                <button type="button" className="absolute right-0 top-3 text-neutral-400 hover:text-white">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} SKIF.USA. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
            <SocialLink href="https://x.com" icon={<X size={20} />} />
            <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
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