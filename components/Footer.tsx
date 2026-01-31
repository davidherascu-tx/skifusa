// components/Footer.tsx
import Link from "next/link";
import { Instagram, Twitter, Facebook, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* TOP SECTION: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* COLUMN 1: BRANDING (Span 4) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="text-3xl font-black tracking-tighter uppercase mb-6 block">
                Kuro<span className="text-neutral-600">Obi</span>.
              </Link>
              <p className="text-neutral-400 max-w-sm leading-relaxed mb-8">
                Forging character through discipline. Traditional values meeting modern application. 
                The dojo is open.
              </p>
            </div>
          </div>

          {/* COLUMN 2: SITEMAP (Span 2) */}
          <div className="md:col-span-2">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-neutral-500">Explore</h4>
            <ul className="space-y-4">
              {['The Dojo', 'Philosophy', 'Instructors', 'Schedule', 'Student Portal'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase font-medium tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT (Span 3) */}
          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-neutral-500">Visit Us</h4>
            <ul className="space-y-6 text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-white" size={18} />
                <span>
                  104 District Blvd,<br />
                  Shibuya City, Tokyo 150-0001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-white" size={18} />
                <span>sensei@kuroobi.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-white" size={18} />
                <span>+81 90-5555-0199</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER (Span 3) */}
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

        {/* BOTTOM SECTION: COPYRIGHT & SOCIALS */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} KuroObi Organization. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <SocialLink icon={<Instagram size={20} />} />
            <SocialLink icon={<Twitter size={20} />} />
            <SocialLink icon={<Facebook size={20} />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Small helper for socials
function SocialLink({ icon }: { icon: any }) {
  return (
    <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">
      {icon}
    </a>
  );
}