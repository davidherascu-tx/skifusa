"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-oswald text-3xl font-bold text-red-700 tracking-tighter">ZENITH</span>
            <span className="font-oswald text-3xl font-bold text-stone-800 tracking-tighter">DOJO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Programs", "Instructors", "Schedule", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-stone-600 hover:text-red-700 font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
            <button className="bg-red-700 text-white px-6 py-2 rounded-sm font-bold uppercase tracking-wide hover:bg-red-800 transition-colors">
              Book Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {["Programs", "Instructors", "Schedule", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-lg font-medium text-stone-700 hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}