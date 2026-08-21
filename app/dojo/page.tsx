"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Search, Filter, Facebook } from "lucide-react";

// --- FULL DOJO DATASET ---
const dojoLocations = [
  {
    id: 1,
    name: "Budokan Dojo S.K.A",
    instructor: "Sensei",
    state: "Alabama",
    city: "Montgomery",
    address: "6369 Atlanta Hwy, Montgomery Alabama 36117",
    email: "kbudokan@gmail.com",
    phone: "334-230-6826",
    website: "" 
  },
  {
    id: 2,
    name: "California Karate Association",
    instructor: "Hiroyasu Fujishima, Hanshi",
    state: "California",
    city: "Northridge",
    address: "17319 Roscoe Blvd., Northridge, CA 91325",
    phone: "818-774-1299",
    email: "californiakarateassociation@gmail.com",
    website: ""
  },
  {
    id: 3,
    name: "Canal Shotokan Karate",
    instructor: "Hugo Que Galvez / Ramona Teresa Mendoza",
    state: "California",
    city: "San Rafael",
    address: "50 Canal Sreet, San Rafael, CA 94947",
    phone: "415-485-3077",
    email: "",
    website: ""
  },
  {
    id: 4,
    name: "San Francisco Shotokan",
    instructor: "Masashi Yasuhiro, Sensei",
    state: "California",
    city: "San Francisco",
    address: "3338 Vicente St., San Francisco, CA 94116",
    phone: "650-270-6774",
    email: "masashi1435@gmail.com",
    website: ""
  },
  {
    id: 5,
    name: "Satsuma Dojo",
    instructor: "Jay Castellano, Chief Instructor",
    state: "California",
    city: "Sunnyvale",
    address: "Columbia Neighborhood Center, 785 Morse Ave., Sunnyvale, CA 94085",
    phone: "408-757-8073",
    email: "satsumadojo@yahoo.com",
    website: "https://www.satsumadojo.com"
  },
  {
    id: 6,
    name: "Satsuma Dojo – Alameda Branch",
    instructor: "Amarjargal Enkhobold / Slauson Kevin",
    state: "California",
    city: "Alameda",
    address: "2512 Blanding Avenue, Alameda, CA 94501",
    phone: "",
    email: "satsumadojo@yahoo.com",
    website: "https://www.satsumadojo.com"
  },
  {
    id: 7,
    name: "ShoShin Karate",
    instructor: "Peter Rodriquez, Sensei",
    state: "California",
    city: "Fremont",
    address: "37428 Centralmont Place, Fremont, CA 94536",
    phone: "510-938-8250",
    email: "karateclasses@hotmail.com",
    website: ""
  },
  {
    id: 8,
    name: "SKIF Samurai",
    instructor: "Paul Danos, Sensei",
    state: "Florida",
    city: "Weston",
    address: "Weston Florida 33326",
    phone: "954-471-9252",
    email: "pauldanos@aol.com",
    website: ""
  },
  {
    id: 9,
    name: "Shotokan Karate-Do Florida “SKF”",
    instructor: "Henry Barnabei, Sensei",
    state: "Florida",
    city: "Oviedo",
    address: "1500 Alayafa Trail, Suite # 1008, Oviedo, Florida 32765",
    phone: "",
    email: "info@SKFFlorida.com",
    website: "https://www.SKFFlorida.com"
  },
  {
    id: 40,
    name: "Nami No Hibiki Dojo",
    instructor: "Attila Zoard Toth",
    state: "Florida",
    city: "Jacksonville",
    address: "Downtown Jacksonville YMCA, Jacksonville, FL 32202",
    phone: "",
    email: "naminohibikidojo@gmail.com",
    website: "",
    facebook: "https://facebook.com/naminohibikidojo"
  },
  {
    id: 10,
    name: "SKIF Hawaii – Kona",
    instructor: "Gilbert Taira, Sensei",
    state: "Hawaii",
    city: "Kailua-Kona",
    address: "Kailua-Kona, HI",
    phone: "808-329-3723",
    email: "gillanat@hawaiiantel.net",
    website: ""
  },
  {
    id: 11,
    name: "SKIF Big Island",
    instructor: "Sidney Kanno, Sensei",
    state: "Hawaii",
    city: "Capt. Cook-Kona",
    address: "Rodney Yano Memorial Bldg, 82-6156 Mamalahoa Hwy, Capt. Cook-Kona, HI 96704",
    phone: "",
    email: "sidneyk@hawaii.rr.com",
    website: ""
  },
  {
    id: 12,
    name: "SKIF Hawaii Pearl City",
    instructor: "Victor Takemori, Sensei",
    state: "Hawaii",
    city: "Pearl City",
    address: "1750 Komo Mai Dr., Pearl City HI 96782",
    phone: "",
    email: "pearlcityshotokan@gmail.com",
    website: "http://www.shotokanpearlcity.com"
  },
  {
    id: 13,
    name: "SKIF Hawaii-Iwilei Dojo",
    instructor: "Ronald Awa, Shihan",
    state: "Hawaii",
    city: "Honolulu",
    address: "501 Sumner Street Ste 620, Honolulu, HI 96817",
    phone: "808-955-0747",
    email: "rawa-awallc@hawaii.rr.com",
    website: ""
  },
  {
    id: 14,
    name: "SKIF Windward Oahu Foundation",
    instructor: "Manfred Nagel, Sensei",
    state: "Hawaii",
    city: "Honolulu",
    address: "P.O. Box 3403, Honolulu HI 96801",
    phone: "808-306-3057",
    email: "windwardshotokan@gmail.com",
    website: ""
  },
  {
    id: 15,
    name: "Waikoloa Karate Academy",
    instructor: "Nelson Vaughn, Sensei",
    state: "Hawaii",
    city: "Waikoloa",
    address: "68-1792 Melia Street, Waikoloa, Hawaii 96738",
    phone: "207-844-9294",
    email: "nxv1947@gmail.com",
    website: ""
  },
  {
    id: 16,
    name: "American Tiger Karate Academy",
    instructor: "Pat Pusateri, Sensei",
    state: "Illinois",
    city: "Elk Grove Village",
    address: "1031 Bonaventure Drive, Elk Grove Village, IL 60007",
    phone: "847-593-6390",
    email: "patpusateri@gmail.com",
    website: "http://www.AmericanTigerKarate.org"
  },
  {
    id: 17,
    name: "Maine Shotokan Karate Association",
    instructor: "Mike Cook, Sensei",
    state: "Maine",
    city: "Farmington",
    address: "P.O. Box 549, 221 Broadway #3, Farmington, ME 04938",
    phone: "207-778-0413",
    email: "gunnermfc@gwi.net",
    website: "http://www.maineshotokan-skif.com"
  },
  {
    id: 18,
    name: "SKIF of Maine",
    instructor: "Harold Dowse, Sensei",
    state: "Maine",
    city: "Dixmont",
    address: "643 North Road, Dixmont, ME 04932",
    phone: "207-234-2062",
    email: "",
    website: ""
  },
  {
    id: 19,
    name: "SKIF of Maine – Millinocket",
    instructor: "Richard McGibbon Jr, Sensei",
    state: "Maine",
    city: "Millinocket",
    address: "84 Bates St, Millinocket, ME 04462",
    phone: "207-723-7988",
    email: "mcgibbon@gwi.net",
    website: ""
  },
  {
    id: 20,
    name: "New England Shotokan Karate-Do",
    instructor: "James Shea, Sensei",
    state: "Massachusetts",
    city: "Longmeadow",
    address: "256 Captain Road, Longmeadow, MA 01106",
    phone: "413-537-6300",
    email: "",
    website: ""
  },
  {
    id: 21,
    name: "MSU Karate Club",
    instructor: "Mark Willie / Brad Weelborg",
    state: "Minnesota",
    city: "Mankato",
    address: "Room PH102 at Minnesota State University, Mankato, MN 56001",
    phone: "507-388-5301",
    email: "rentkato@gmail.com",
    website: "https://www.mnsu.edu/university-life/campus-recreation/intramural-sports-and-sport-clubs/sport-clubs/",
    facebook: "https://www.facebook.com/groups/MSUShotokanKarateClub/"
  },
  {
    id: 22,
    name: "Peak Performance Shotokan Karate-Do",
    instructor: "Chris Johnson, Sensei",
    state: "Minnesota",
    city: "New Brighton",
    address: "2210 Silver Lake Rd, New Brighton, MN 55112",
    phone: "612-799-8464",
    email: "chrisjohnson9411@gmail.com",
    website: "http://www.peakperformanceshotokankarate.com"
  },
  {
    id: 23,
    name: "Reigikai SKIF Las Vegas",
    instructor: "Ronald Tolentino, Sensei",
    state: "Nevada",
    city: "Las Vegas",
    address: "614 E. Sahara Ave. Ste 13, Las Vegas, Nevada 89104",
    phone: "702-493-5253",
    email: "skc.lv@yahoo.com; 702karatedo@gmail.com",
    website: ""
  },
  {
    id: 24,
    name: "Rochester Shotokan Karate Dojo",
    instructor: "Steve Warren, Chief Instructor",
    state: "New Hampshire",
    city: "Rochester",
    address: "150 Wakefield Street, Rochester, NH 03867",
    phone: "603-312-8414",
    email: "sdwarren@rskdojo.com",
    website: "http://www.RSKDojo.com",
    facebook: "https://www.facebook.com/RSKDojo"
  },
  {
    id: 26,
    name: "SKIF New York",
    instructor: "Ricardo Neves / Angelo Skordos, Sensei",
    state: "New York",
    city: "New York",
    address: "134 W 29th St, Floor 2, New York, NY 10001",
    phone: "646-737-2407",
    email: "skifnewyork@gmail.com",
    website: "http://www.skifnewyork.com"
  },
  {
    id: 27,
    name: "Shotokan-Ryu Karate Dojo-USA",
    instructor: "Charles Valentin, Sensei",
    state: "New York",
    city: "Orangeburg",
    address: "22-A Dutch Hollow Drive, Orangeburg, NY 10962-1704",
    phone: "(914) 589-5126",
    email: "ShotoKarate22@gmail.com",
    website: "http://www.shotokan-ryu-karate.com"
  },
  {
    id: 28,
    name: "Doshinkai Dojo SKIF Cincinnati",
    instructor: "Ruben Fung, Sensei",
    state: "Ohio",
    city: "Cincinnati",
    address: "6620 Montgomery Road, Suite 3, Cincinnati OH 45213",
    phone: "832-513-0058",
    email: "dskdojo1@gmail.com",
    website: "http://www.doshinkaidojo.com"
  },
  {
    id: 29,
    name: "Hillsboro Shotokan Karate Club",
    instructor: "Joseph Gasparakis, Sensei",
    state: "Oregon",
    city: "Hillsboro",
    address: "Hillsboro OR 97124",
    phone: "971-317-8625",
    email: "contact@hillsboro-shotokan-karate.com",
    website: "http://www.hillsboro-shotokan-karate.com"
  },
  {
    id: 30,
    name: "Austin Shotokan",
    instructor: "N Scott Monroe, Sensei",
    state: "Texas",
    city: "Austin",
    address: "Austin, TX 78701",
    phone: "512-476-5662",
    email: "scott4austin@yahoo.com",
    website: "http://www.austinshotokan.com",
    facebook: "https://www.facebook.com/AustinShotokanKarate"
  },
  {
    id: 31,
    name: "Shotokan Karate-Do Center",
    instructor: "K. Daylami Sensei / Rubén Fung, Sensei",
    state: "Texas",
    city: "Houston",
    address: "1331 Augusta Dr, Houston, TX 77057",
    phone: "832-513-0058",
    email: "shotokankaratedocenter@gmail.com",
    website: "http://www.shotokanhouston.com"
  },
  {
    id: 32,
    name: "Texas A & M University Shotokan Karate Club",
    instructor: "Anatholy Svidzinsky",
    state: "Texas",
    city: "College Station",
    address: "203 Yale Circle, College Station, TX 77840",
    phone: "979-492-4724",
    email: "asvid@physics.tamu.edu",
    website: ""
  },
  {
    id: 33,
    name: "University of Houston Shotokan",
    instructor: "Deddy Mansyur, Sensei",
    state: "Texas",
    city: "Houston",
    address: "6315 Feldpar St, Houston, TX 77092",
    phone: "713-412-5062",
    email: "",
    website: "http://www.houstonshotokankarate.com"
  },
  {
    id: 34,
    name: "Danka International Karate-Do",
    instructor: "Carlos Vasquez",
    state: "Utah",
    city: "Taylorsville",
    address: "(Dream Venue Event Center) 3193 West 4700 South Taylorsville, Utah 84129",
    phone: "",
    email: "dankainternacional@gmail.com",
    website: ""
  },
  {
    id: 35,
    name: "Shotokan Karate Club Madison",
    instructor: "Tim Blindauer, Sensei",
    state: "Wisconsin",
    city: "Madison",
    address: "Madison, Wisconsin",
    phone: "608-695-4577",
    email: "madisonshotokan@gmail.com; tim.blindauer@gmail.com",
    website: "https://shoto.madcitykarate.com/",
    facebook: "https://www.facebook.com/madisonshotokan/"
  },
  {
    id: 36,
    name: "Tora Dento Martial Arts",
    instructor: "Amy Blackwell",
    state: "Illinois",
    city: "Elk Grove Village",
    address: "629 Meacham Road, Elk Grove Village, IL 60007",
    phone: "(847) 230-9505",
    email: "ToraDento@gmail.com",
    website: "https://TDMartialArts.com"
  },
  {
    id: 37,
    name: "Martial Arts University",
    instructor: "Juan Rafael Guzman Diaz",
    state: "Florida",
    city: "",
    address: "",
    phone: "954-681-0725",
    email: "martialartsuniversity@gmail.com",
    website: ""
  },
  {
    id: 38,
    name: "Nashville Shotokan Karate Club",
    instructor: "Dr. Nataliya Pidkovka",
    state: "Tennessee",
    city: "Nashville",
    address: "3955 Nolensville Pk, Nashville, TN 37211, USA",
    phone: "615-566-7178",
    email: "karatenashville@gmail.com",
    website: "https://nashvilleshotokan.com/",
    facebook: "https://www.facebook.com/share/181CbzevQU/"
  },
  {
    id: 39,
    name: "Dojo SK",
    instructor: "Vitalli Ovsiannikov",
    state: "Florida",
    city: "",
    address: "",
    phone: "954-599-2420",
    email: "vovsiannikov9005@gmail.com",
    website: ""
  }
];

export default function FindADojo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  const states = ["All", ...Array.from(new Set(dojoLocations.map(d => d.state))).sort()];

  const filteredDojos = dojoLocations.filter(dojo => {
    const matchesSearch = 
      dojo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      dojo.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dojo.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState === "All" || dojo.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-neutral-900 selection:bg-red-600 selection:text-white pt-28 md:pt-48 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-red-600 pl-6 max-w-4xl"
        >
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Dojo Directory</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-neutral-900">
            Find <span className="text-neutral-400">a</span> Dojo
          </h1>
          <p className="text-neutral-600 mt-6 text-lg max-w-2xl leading-relaxed">
            Use the tools below to locate an official SKIF-USA affiliated dojo in your region.
          </p>
        </motion.div>

        {/* --- SEARCH & FILTER SECTION --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-red-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="SEARCH BY DOJO, CITY, OR INSTRUCTOR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-neutral-200 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-red-600 focus:shadow-md transition-all font-bold uppercase tracking-widest text-sm placeholder:text-neutral-400 text-neutral-900"
            />
          </div>
          
          <div className="relative w-full md:w-64">
            <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
            <select 
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full h-full bg-white border border-neutral-200 rounded-2xl py-5 pl-14 pr-10 focus:outline-none focus:border-red-600 focus:shadow-md transition-all font-black uppercase tracking-widest text-sm appearance-none cursor-pointer text-neutral-900"
            >
              {states.map(s => <option key={s} value={s}>{s === "All" ? "ALL STATES" : s.toUpperCase()}</option>)}
            </select>
          </div>
        </div>

        {/* --- RESULTS AREA --- */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredDojos.length > 0 ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredDojos.map((dojo) => (
                  <motion.div
                    key={dojo.id}
                    layout
                    // Updated to white cards with shadow for the light theme
                    className="group bg-white border border-neutral-200 rounded-[2.5rem] p-8 hover:border-red-600/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col shadow-md"
                  >
                    {/* Kept watermark but adjusted opacity/color for light background */}
                    <div className="absolute top-[-15%] right-[-10%] opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-700 filter invert">
                      <Image src="/skif_kanji.png" alt="SKIF" width={220} height={220} className="rotate-12" />
                    </div>

                    <div className="relative z-10 flex-1">
                      <div className="flex items-center justify-between mb-6">
                        <span className="bg-red-600/10 text-red-600 border border-red-600/20 text-[9px] font-black px-3 py-1 rounded-full tracking-[0.2em] uppercase">{dojo.state}</span>
                        <MapPin className="text-neutral-300 group-hover:text-red-600 transition-colors" size={20} />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-2 text-neutral-900 group-hover:text-red-600 transition-colors">{dojo.name}</h3>
                      <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-8 border-b border-neutral-200 pb-4">
                        Contact: <span className="text-neutral-800">{dojo.instructor}</span>
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 text-neutral-600">
                          <MapPin size={16} className="text-red-600 shrink-0 mt-1" />
                          <span className="text-sm font-medium leading-relaxed">{dojo.address}</span>
                        </div>
                        {dojo.phone && (
                          <div className="flex items-center gap-3 text-neutral-600 font-mono">
                            <Phone size={16} className="text-red-600 shrink-0" />
                            <span className="text-sm">{dojo.phone}</span>
                          </div>
                        )}
                        {dojo.email && (
                          <div className="flex items-center gap-3 text-neutral-600">
                            <Mail size={16} className="text-red-600 shrink-0" />
                            <span className="text-sm lowercase truncate">{dojo.email}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-neutral-100 relative z-10 flex flex-wrap gap-4">
                      {dojo.website && (
                        <a href={dojo.website} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-800 hover:text-red-600 transition-all group/link">
                          <Globe size={14} className="text-red-600 group-hover/link:scale-110 transition-transform" /> Website
                        </a>
                      )}
                      {dojo.facebook && (
                        <a href={dojo.facebook} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-800 hover:text-red-600 transition-all group/link">
                          <Facebook size={14} className="text-blue-600 group-hover/link:scale-110 transition-transform" /> Facebook
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-40 text-center border-2 border-dashed border-neutral-300 bg-white rounded-[3.5rem]"
              >
                <p className="text-neutral-500 uppercase tracking-[0.4em] font-black text-sm">No affiliated dojos found matching your criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-32 text-center border-t border-neutral-200 pt-16">
          <p className="text-neutral-500 uppercase tracking-[0.4em] text-[10px] font-mono">
            Verified SKIF-USA Technical Network
          </p>
        </div>

      </div>
    </main>
  );
}