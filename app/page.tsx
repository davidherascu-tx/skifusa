import Image from "next/image";
import { ChevronRight, Award, Users, Clock } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Image Placeholder - In real app, use a real image */}
        <div className="absolute inset-0 opacity-40">
           {/* You can replace this src with a real martial arts image URL */}
           <Image 
             src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop" 
             alt="Karate Training" 
             fill 
             className="object-cover"
             priority
           />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-oswald text-5xl md:text-7xl text-white font-bold uppercase tracking-tight mb-6">
            Forge Your <span className="text-red-600">Spirit</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 font-light max-w-2xl mx-auto">
            Traditional Shotokan Karate for the modern world. Build discipline, confidence, and physical strength.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
              Start Free Trial <ChevronRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all">
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* STATISTICS STRIP */}
      <div className="bg-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Award size={40} className="mb-4 text-red-200" />
            <h3 className="font-oswald text-3xl font-bold">25+ Years</h3>
            <p className="text-red-100">Of Teaching Excellence</p>
          </div>
          <div className="flex flex-col items-center">
            <Users size={40} className="mb-4 text-red-200" />
            <h3 className="font-oswald text-3xl font-bold">500+ Students</h3>
            <p className="text-red-100">Active Members</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock size={40} className="mb-4 text-red-200" />
            <h3 className="font-oswald text-3xl font-bold">30 Classes</h3>
            <p className="text-red-100">Weekly Sessions</p>
          </div>
        </div>
      </div>

      {/* PROGRAMS SECTION */}
      
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl text-stone-900 font-bold uppercase mb-4">Our Programs</h2>
            <div className="w-20 h-1 bg-red-700 mx-auto"></div>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Whether you are looking to compete or just get fit, we have a curriculum tailored to your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="group bg-stone-50 border border-stone-200 p-8 hover:border-red-700 transition-colors duration-300">
              <h3 className="font-oswald text-black text-2xl font-bold mb-4">Little Ninjas (4-7)</h3>
              <p className="text-stone-600 mb-6">Focus, coordination, and fun. The perfect introduction to martial arts for young children.</p>
              <ul className="space-y-2 mb-8 text-sm text-stone-700">
                <li className="flex gap-2">✓ Basic Motor Skills</li>
                <li className="flex gap-2">✓ Listening Skills</li>
                <li className="flex gap-2">✓ Stranger Danger</li>
              </ul>
              <a href="#" className="text-red-700 font-bold uppercase text-sm tracking-wider hover:underline">Learn More</a>
            </div>

            {/* Program 2 */}
            <div className="group bg-stone-900 text-white p-8 border border-stone-900 relative shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase">Most Popular</div>
              <h3 className="font-oswald text-2xl font-bold mb-4">Youth & Teens</h3>
              <p className="text-stone-300 mb-6">Building character through discipline. Self-defense skills that last a lifetime.</p>
              <ul className="space-y-2 mb-8 text-sm text-stone-300">
                <li className="flex gap-2">✓ Confidence Building</li>
                <li className="flex gap-2">✓ Belt Progression</li>
                <li className="flex gap-2">✓ Anti-Bullying</li>
              </ul>
              <a href="#" className="text-white font-bold uppercase text-sm tracking-wider hover:underline">Learn More</a>
            </div>

            {/* Program 3 */}
            <div className="group bg-stone-50 border border-stone-200 p-8 hover:border-red-700 transition-colors duration-300">
              <h3 className="font-oswald text-2xl font-bold mb-4">Adults & Combatives</h3>
              <p className="text-stone-600 mb-6">High-intensity fitness meets traditional technique. Relieve stress and learn to defend yourself.</p>
              <ul className="space-y-2 mb-8 text-sm text-stone-700">
                <li className="flex gap-2">✓ Fitness & Flexibility</li>
                <li className="flex gap-2">✓ Advanced Kata</li>
                <li className="flex gap-2">✓ Sparring (Kumite)</li>
              </ul>
              <a href="#" className="text-red-700 font-bold uppercase text-sm tracking-wider hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-stone-900 py-20 px-4">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-oswald text-4xl text-white font-bold uppercase mb-6">Ready to Start Your Journey?</h2>
            <p className="text-stone-300 mb-8 text-lg">
              Your first class is on us. Come meet the instructors and see the dojo for yourself.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-lg transition-all">
              Book Your Free Trial
            </button>
         </div>
      </section>
    </div>
  );
}