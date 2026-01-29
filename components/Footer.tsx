import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-oswald text-2xl font-bold tracking-tighter">ZENITH DOJO</h2>
            <p className="text-stone-400 text-sm">
              Dedicated to the preservation and teaching of traditional martial arts values in a modern environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-oswald text-lg font-bold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-red-500">Student Login</a></li>
              <li><a href="#" className="hover:text-red-500">Class Schedule</a></li>
              <li><a href="#" className="hover:text-red-500">Events Calendar</a></li>
              <li><a href="#" className="hover:text-red-500">Pro Shop</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-oswald text-lg font-bold mb-4 uppercase">Visit Us</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 mt-0.5" />
                <span>123 Warrior Way,<br />Dojo City, ST 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-600" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-600" />
                <span>sensei@zenithdojo.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-oswald text-lg font-bold mb-4 uppercase">Opening Hours</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>10:00 AM - 9:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">© 2024 Zenith Karate Dojo. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-white"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}