// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../Context/AuthContext'; // Path verify kar lein (e.g., ../Context/AuthContext)

// // // function Hero() {
// // //   const navigate = useNavigate();
// // //   const { user, logout } = useAuth(); // AuthContext state and functions

// // //   // State Management for Interactivity
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [selectedCity, setSelectedCity] = useState('All kitchens');
// // //   const [favorites, setFavorites] = useState([]);
// // //   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
// // //   const [activeFilterTag, setActiveFilterTag] = useState('All');
// // //   const [notificationCount, setNotificationCount] = useState(2);

// // //   // Mock Kitchen Data
// // //   const initialKitchens = [
// // //     {
// // //       id: "meera",
// // //       name: "Meera’s Tiffin Room",
// // //       cuisine: "SOUTH INDIAN",
// // //       city: "Bengaluru",
// // //       location: "Indiranagar · 12–1 PM",
// // //       rating: "4.9",
// // //       price: "145",
// // //       desc: "Vegetable-forward Karnataka lunches, packed warm every morning from a family kitchen in 12th Main.",
// // //       tags: ["Vegetarian", "No onion garlic"],
// // //       bgColor: "bg-[#D47559]"
// // //     },
// // //     {
// // //       id: "sanjay",
// // //       name: "Sanjay’s North Table",
// // //       cuisine: "NORTH INDIAN",
// // //       city: "Mumbai",
// // //       location: "Powai · 1–2 PM",
// // //       rating: "4.8",
// // //       price: "165",
// // //       desc: "Slow-cooked Punjabi comfort food with the kind of dal that tastes like it has a story.",
// // //       tags: ["High protein", "Jain option"],
// // //       bgColor: "bg-[#E6B37C]"
// // //     },
// // //     {
// // //       id: "aai",
// // //       name: "Aai’s Kitchenette",
// // //       cuisine: "MAHARASHTRIAN",
// // //       city: "Pune",
// // //       location: "Kothrud · 12:30–1:30 PM",
// // //       rating: "4.7",
// // //       price: "125",
// // //       desc: "Everyday Maharashtrian meals, from matki usal to soft bhakri, made in small batches.",
// // //       tags: ["Homestyle", "Eggs available"],
// // //       bgColor: "bg-[#2D5A4C]"
// // //     },
// // //     {
// // //       id: "farah",
// // //       name: "Farah’s Dastarkhwan",
// // //       cuisine: "HYDERABADI",
// // //       city: "Bengaluru",
// // //       location: "Koramangala · 12–1 PM",
// // //       rating: "4.9",
// // //       price: "190",
// // //       desc: "A fragrant, generous table of biryani, khatti dal and seasonal sides from Farah's apartment kitchen.",
// // //       tags: ["Halal", "Weekend special"],
// // //       bgColor: "bg-[#A65B5B]"
// // //     },
// // //     {
// // //       id: "anjali",
// // //       name: "Anjali’s Rasoi",
// // //       cuisine: "GUJARATI",
// // //       city: "Delhi",
// // //       location: "Hauz Khas · 1–2 PM",
// // //       rating: "4.8",
// // //       price: "155",
// // //       desc: "Bright Gujarati thalis balanced for busy days, with a new shaak each afternoon.",
// // //       tags: ["Vegetarian", "Low oil"],
// // //       bgColor: "bg-[#6182A4]"
// // //     },
// // //     {
// // //       id: "nirmala",
// // //       name: "Nirmala’s Coastal Pot",
// // //       cuisine: "COASTAL",
// // //       city: "Chennai",
// // //       location: "Adyar · 12–1 PM",
// // //       rating: "4.6",
// // //       price: "175",
// // //       desc: "Coconut, curry leaves, and the clean heat of a Chennai home kitchen.",
// // //       tags: ["Pescatarian", "Seasonal"],
// // //       bgColor: "bg-[#3D7068]"
// // //     }
// // //   ];
// // //   {user ? (
// // //   <div className="flex items-center gap-3">
// // //     <span>Good morning, <strong className="capitalize">{user.name}</strong></span>
// // //     <button
// // //       onClick={() => {
// // //         logout();
// // //         navigate('/login');
// // //       }}
// // //       className="text-gray-500 hover:text-red-600 transition font-semibold cursor-pointer underline"
// // //     >
// // //       Log out
// // //     </button>
// // //   </div>
// // // ) : (
// // //   <div className="flex items-center gap-3">
// // //     {/* Sign in - Route to /login */}
// // //     <button
// // //       onClick={() => navigate('/login')}
// // //       className="text-[#1C3A34] font-bold hover:underline cursor-pointer"
// // //     >
// // //       Sign in
// // //     </button>

// // //     {/* Join HomeFeast - Route to /register */}
// // //     <button
// // //       onClick={() => navigate('/register')}
// // //       className="bg-[#1C3A34] text-white px-4 py-1.5 rounded-xl font-bold hover:bg-[#112623] transition cursor-pointer shadow-sm"
// // //     >
// // //       Join HomeFeast
// // //     </button>
// // //   </div>
// // // )}

// // //   // Favorite Heart Toggle Action
// // //   const toggleFavorite = (id) => {
// // //     if (favorites.includes(id)) {
// // //       setFavorites(favorites.filter(favId => favId !== id));
// // //     } else {
// // //       setFavorites([...favorites, id]);
// // //     }
// // //   };

// // //   // Location Selector Handler
// // //   const handleLocationChange = () => {
// // //     const newLoc = prompt("Enter your area/city:", "Indiranagar, Bengaluru");
// // //     if (newLoc) {
// // //       alert(`Delivering area updated to: ${newLoc}`);
// // //     }
// // //   };

// // //   // Filter Logic: Filter by Search, Selected City, and Active Dietary Tags
// // //   const filteredKitchens = initialKitchens.filter(k => {
// // //     const matchesCity = selectedCity === 'All kitchens' || k.city.toLowerCase() === selectedCity.toLowerCase();
// // //     const matchesSearch = k.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                           k.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                           k.desc.toLowerCase().includes(searchQuery.toLowerCase());
// // //     const matchesTag = activeFilterTag === 'All' || k.tags.some(t => t.toLowerCase() === activeFilterTag.toLowerCase());

// // //     return matchesCity && matchesSearch && matchesTag;
// // //   });

// // //   return (
// // //     <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6EF] font-sans">

// // //       {/* 1. LEFT SIDEBAR */}
// // //       <aside className="w-full md:w-64 bg-[#1C3A34] text-white p-6 flex flex-col justify-between shrink-0">
// // //         <div>
// // //           <Link to="/" className="flex items-center gap-3 mb-10">
// // //             <div className="bg-[#D47559] p-2.5 rounded-xl text-white font-bold text-xl flex items-center justify-center">
// // //               <i className="fa-solid fa-utensils"></i>
// // //             </div>
// // //             <div>
// // //               <h1 className="font-serif text-2xl font-bold tracking-wide">HomeFeast</h1>
// // //               <p className="text-[10px] tracking-widest text-white/60 uppercase">MADE NEARBY</p>
// // //             </div>
// // //           </Link>

// // //           <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">YOUR NEIGHBORHOOD</p>
// // //           <nav className="space-y-2 mb-8">
// // //             <Link to="/" className="w-full flex items-center gap-3 bg-[#D47559] text-white px-4 py-3 rounded-2xl font-medium text-sm shadow-sm transition hover:bg-[#c26246]">
// // //               <i className="fa-solid fa-magnifying-glass text-xs"></i> Discover
// // //             </Link>
// // //             <button
// // //               onClick={() => navigate('/my-meals')}
// // //               className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition text-left cursor-pointer"
// // //             >
// // //               <i className="fa-solid fa-receipt text-xs"></i> My meals
// // //             </button>
// // //           </nav>

// // //           <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">MORE FROM HOMEFEAST</p>
// // //           <nav>
// // //             <Link to="/cook/dashboard" className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition">
// // //               <i className="fa-solid fa-user-check text-xs"></i> I cook for others
// // //             </Link>
// // //           </nav>
// // //         </div>

// // //         {/* Dynamic User Profile Footer */}
// // //         {user ? (
// // //           <button
// // //             onClick={() => alert(`Logged in as ${user.name}`)}
// // //             className="pt-6 border-t border-white/10 flex items-center gap-3 w-full text-left hover:opacity-80 transition cursor-pointer"
// // //           >
// // //             <div className="w-9 h-9 rounded-full bg-[#E6B37C] text-[#1C3A34] font-bold flex items-center justify-center text-xs uppercase">
// // //               {user.name ? user.name.substring(0, 2) : 'US'}
// // //             </div>
// // //             <div>
// // //               <h5 className="text-xs font-bold text-white capitalize">{user.name}</h5>
// // //               <p className="text-[10px] text-white/50 capitalize">{user.role || 'Customer'}</p>
// // //             </div>
// // //           </button>
// // //         ) : (
// // //           <div className="pt-6 border-t border-white/10">
// // //             <button
// // //               onClick={() => navigate('/login')}
// // //               className="w-full bg-[#D47559] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#c26246] transition cursor-pointer"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </div>
// // //         )}
// // //       </aside>

// // //       {/* 2. MAIN CONTENT */}
// // //       <main className="flex-1 flex flex-col overflow-x-hidden">

// // //         {/* TOP HEADER */}
// // //         <header className="flex justify-between items-center px-8 py-4 border-b border-black/5 bg-[#FAF6EF]">

// // //           {/* Location Trigger */}
// // //           <button
// // //             onClick={handleLocationChange}
// // //             className="flex items-center gap-2 text-[#1C3A34] text-xs font-medium hover:opacity-80 transition cursor-pointer"
// // //           >
// // //             <i className="fa-solid fa-location-dot text-[#D47559]"></i>
// // //             <span>Delivering to <strong className="underline">Indiranagar, Bengaluru</strong> <i className="fa-solid fa-chevron-down text-[9px] ml-1"></i></span>
// // //           </button>

// // //           {/* Action Header Buttons & Dynamic Auth */}
// // //           <div className="flex items-center gap-4 text-xs font-medium text-[#1C3A34]">
// // //             <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
// // //               <span className="w-2 h-2 rounded-full bg-green-500"></span> API connected
// // //             </span>

// // //             {/* Notification Button */}
// // //             <button
// // //               onClick={() => {
// // //                 alert("You have 2 pending meal delivery updates!");
// // //                 setNotificationCount(0);
// // //               }}
// // //               className="relative p-2 bg-white rounded-xl border border-black/5 shadow-sm hover:bg-gray-50 transition cursor-pointer"
// // //             >
// // //               <i className="fa-regular fa-bell"></i>
// // //               {notificationCount > 0 && (
// // //                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
// // //                   {notificationCount}
// // //                 </span>
// // //               )}
// // //             </button>

// // //             {/* Menu Trigger */}
// // //             <button onClick={() => alert("Quick Menu Options Opened")} className="p-2 bg-white rounded-xl border border-black/5 shadow-sm hover:bg-gray-50 transition cursor-pointer">
// // //               <i className="fa-solid fa-bars"></i>
// // //             </button>

// // //             {/* Dynamic User Profile Header State */}
// // //             {user ? (
// // //               <div className="flex items-center gap-3">
// // //                 <span>Good morning, <strong className="capitalize">{user.name}</strong></span>
// // //                 <button
// // //                   onClick={() => {
// // //                     logout();
// // //                     navigate('/');
// // //                   }}
// // //                   className="text-gray-500 hover:text-red-600 transition font-semibold cursor-pointer underline"
// // //                 >
// // //                   Log out
// // //                 </button>
// // //               </div>
// // //             ) : (
// // //               <div className="flex items-center gap-3">
// // //                 <button
// // //                   onClick={() => navigate('/login')}
// // //                   className="text-[#1C3A34] font-bold hover:underline cursor-pointer"
// // //                 >
// // //                   Sign in
// // //                 </button>
// // //                 <button
// // //                   onClick={() => navigate('/signup')}
// // //                   className="bg-[#1C3A34] text-white px-4 py-1.5 rounded-xl font-bold hover:bg-[#112623] transition cursor-pointer shadow-sm"
// // //                 >
// // //                   Join HomeFeast
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </header>

// // //         {/* HERO BANNER SECTION WITH WORKING SEARCH */}
// // //         <section className="p-6 md:p-8 pb-4">
// // //           <div className="relative overflow-hidden bg-[#E6B37C] rounded-3xl p-8 md:p-12 text-[#1C3A34] shadow-sm">

// // //             <div className="absolute -right-10 -top-10 w-80 h-80 rounded-full border-[30px] border-white/20 pointer-events-none"></div>
// // //             <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none"></div>

// // //             <p className="text-[10px] font-bold tracking-widest text-[#1C3A34]/70 uppercase mb-3">
// // //               A BETTER LUNCH STARTS CLOSE TO HOME
// // //             </p>

// // //             <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight max-w-xl mb-4">
// // //               Your neighbourhood, on a plate.
// // //             </h2>

// // //             <p className="text-[#1C3A34]/80 text-xs md:text-sm max-w-md mb-8">
// // //               Find trusted home cooks making the food you want to eat every day — not just once in a while.
// // //             </p>

// // //             {/* Operational Search Form */}
// // //             <form
// // //               onSubmit={(e) => e.preventDefault()}
// // //               className="relative z-10 flex items-center bg-white p-1.5 rounded-2xl shadow-sm max-w-md"
// // //             >
// // //               <i className="fa-solid fa-magnifying-glass text-gray-400 ml-4 text-sm"></i>
// // //               <input
// // //                 type="text"
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 placeholder="Search a dish, cuisine or cook"
// // //                 className="w-full px-3 py-2 text-xs text-[#1C3A34] outline-none bg-transparent"
// // //               />
// // //               {searchQuery && (
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setSearchQuery('')}
// // //                   className="text-xs text-gray-400 mr-2 hover:text-black cursor-pointer"
// // //                 >
// // //                   <i className="fa-solid fa-xmark"></i>
// // //                 </button>
// // //               )}
// // //               <button
// // //                 type="submit"
// // //                 className="bg-[#1C3A34] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#112623] transition cursor-pointer"
// // //               >
// // //                 Search
// // //               </button>
// // //             </form>

// // //             <div className="absolute right-6 bottom-6 bg-white/30 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#1C3A34] px-3 py-1 rounded-md uppercase">
// // //               Cooked with care since 2019
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* CARDS LISTING SECTION */}
// // //         <section className="p-6 md:p-8">
// // //           <p className="text-[10px] font-bold tracking-widest text-[#D47559] uppercase mb-1">
// // //             MADE NEAR YOU
// // //           </p>

// // //           <div className="flex justify-between items-end mb-6">
// // //             <div>
// // //               <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A34]">
// // //                 A good meal is closer than you think.
// // //               </h3>
// // //               <p className="text-[#1C3A34]/70 text-xs mt-1">
// // //                 Small-batch menus from home kitchens around your neighborhood. Order once or make it your daily rhythm.
// // //               </p>
// // //             </div>

// // //             {/* Filter Toggle Button */}
// // //             <button
// // //               onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
// // //               className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
// // //                 isFilterModalOpen ? 'bg-[#1C3A34] text-white' : 'bg-[#F4CFAD] text-[#1C3A34] hover:opacity-90'
// // //               }`}
// // //             >
// // //               <i className="fa-solid fa-sliders"></i> {isFilterModalOpen ? 'Close Filters' : 'Filters'}
// // //             </button>
// // //           </div>

// // //           {/* Quick Filter Modal / Bar toggle */}
// // //           {isFilterModalOpen && (
// // //             <div className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm mb-6 flex items-center gap-3 flex-wrap">
// // //               <span className="text-xs font-bold text-[#1C3A34]">Dietary preference:</span>
// // //               {['All', 'Vegetarian', 'High protein', 'Homestyle', 'Halal'].map((tag) => (
// // //                 <button
// // //                   key={tag}
// // //                   onClick={() => setActiveFilterTag(tag)}
// // //                   className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
// // //                     activeFilterTag === tag
// // //                       ? 'bg-[#D47559] text-white'
// // //                       : 'bg-[#FAF6EF] text-[#1C3A34] border border-black/5'
// // //                   }`}
// // //                 >
// // //                   {tag}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* Operational City Category Pills */}
// // //           <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
// // //             {['All kitchens', 'Bengaluru', 'Mumbai', 'Pune', 'Delhi', 'Chennai'].map((city) => (
// // //               <button
// // //                 key={city}
// // //                 onClick={() => setSelectedCity(city)}
// // //                 className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
// // //                   selectedCity === city
// // //                     ? 'bg-[#1C3A34] text-white shadow-sm'
// // //                     : 'bg-white text-[#1C3A34] border border-black/5 hover:bg-gray-50'
// // //                 }`}
// // //               >
// // //                 {city}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {/* Dynamic Kitchen Cards Grid */}
// // //           {filteredKitchens.length === 0 ? (
// // //             <div className="text-center py-12 bg-white rounded-3xl border border-black/5">
// // //               <i className="fa-solid fa-utensils text-3xl text-gray-300 mb-2"></i>
// // //               <p className="text-sm font-semibold text-[#1C3A34]">No kitchens found matching your selection.</p>
// // //               <button
// // //                 onClick={() => { setSelectedCity('All kitchens'); setSearchQuery(''); setActiveFilterTag('All'); }}
// // //                 className="mt-3 text-xs text-[#D47559] font-bold underline cursor-pointer"
// // //               >
// // //                 Reset all filters
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
// // //               {filteredKitchens.map((k) => (
// // //                 <div key={k.id} className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition">

// // //                   {/* Banner Artwork */}
// // //                   <div className={`relative h-44 ${k.bgColor} p-4 flex items-start justify-between overflow-hidden`}>
// // //                     <span className="bg-white/90 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md text-[#1C3A34] z-10">
// // //                       {k.cuisine}
// // //                     </span>

// // //                     {/* SVG Artwork */}
// // //                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// // //                       <div className="w-32 h-32 rounded-full bg-[#E8C59C] border-4 border-[#C88E63]/40 flex items-center justify-center shadow-inner">
// // //                         <div className="w-24 h-24 rounded-full bg-[#C25B38] relative overflow-hidden flex items-center justify-center">
// // //                           <div className="w-10 h-2 bg-[#426B43] rounded-full transform -rotate-45 absolute top-6"></div>
// // //                           <div className="w-10 h-2 bg-[#426B43] rounded-full transform rotate-45 absolute bottom-6"></div>
// // //                         </div>
// // //                       </div>
// // //                     </div>

// // //                     {/* Operational Wishlist Heart Button */}
// // //                     <button
// // //                       onClick={() => toggleFavorite(k.id)}
// // //                       className="bg-white p-2 rounded-full shadow-sm text-[#1C3A34] z-10 hover:scale-110 transition cursor-pointer"
// // //                     >
// // //                       <i className={`text-xs ${favorites.includes(k.id) ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}`}></i>
// // //                     </button>
// // //                   </div>

// // //                   {/* Card Content Body */}
// // //                   <div className="p-5">
// // //                     <div className="flex justify-between items-center mb-1">
// // //                       <h4 className="font-serif text-xl font-bold text-[#1C3A34]">{k.name}</h4>
// // //                       <span className="text-xs font-bold text-[#1C3A34] flex items-center gap-1">
// // //                         <i className="fa-solid fa-star text-amber-500 text-[10px]"></i> {k.rating}
// // //                       </span>
// // //                     </div>

// // //                     <p className="text-[11px] text-gray-400 mb-3">{k.location}</p>
// // //                     <p className="text-xs text-[#1C3A34]/80 leading-relaxed mb-4 min-h-[36px]">{k.desc}</p>

// // //                     <div className="flex gap-2 mb-6 flex-wrap">
// // //                       {k.tags.map((tag) => (
// // //                         <span key={tag} className="bg-[#FAF6EF] text-[#1C3A34] text-[10px] px-3 py-1 rounded-full font-medium border border-black/5">
// // //                           {tag}
// // //                         </span>
// // //                       ))}
// // //                     </div>

// // //                     {/* Operational Route Button */}
// // //                     <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-xs">
// // //                       <span className="text-gray-500">from <strong className="text-[#1C3A34] text-sm">₹{k.price}</strong> / meal</span>

// // //                       <button
// // //                         onClick={() => navigate(`/kitchen/${k.id}`)}
// // //                         className="text-[#1C3A34] font-bold hover:underline flex items-center gap-1 group cursor-pointer"
// // //                       >
// // //                         View kitchen <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
// // //                       </button>
// // //                     </div>
// // //                   </div>

// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* Bottom Features */}
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/5">
// // //             <div className="flex items-start gap-4">
// // //               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
// // //                 <i className="fa-solid fa-shield-halved"></i>
// // //               </div>
// // //               <div>
// // //                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">People, not listings</h5>
// // //                 <p className="text-[11px] text-gray-500">Every cook is verified with a kitchen visit and a real neighborhood address.</p>
// // //               </div>
// // //             </div>

// // //             <div className="flex items-start gap-4">
// // //               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
// // //                 <i className="fa-solid fa-utensils"></i>
// // //               </div>
// // //               <div>
// // //                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">Food with a point of view</h5>
// // //                 <p className="text-[11px] text-gray-500">Menus change with the market, the family recipe, and what is good today.</p>
// // //               </div>
// // //             </div>

// // //             <div className="flex items-start gap-4">
// // //               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
// // //                 <i className="fa-regular fa-comment"></i>
// // //               </div>
// // //               <div>
// // //                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">A direct line home</h5>
// // //                 <p className="text-[11px] text-gray-500">Ask your cook about ingredients, spice, or tomorrow's menu anytime.</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </section>

// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // export default Hero;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../Context/AuthContext'; // Path verify kar lein

// // function Hero() {
// //   const navigate = useNavigate();
// //   const { user, logout } = useAuth(); // Global Auth Context

// //   // State Management
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedCity, setSelectedCity] = useState('All kitchens');
// //   const [favorites, setFavorites] = useState([]);
// //   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
// //   const [activeFilterTag, setActiveFilterTag] = useState('All');
// //   const [notificationCount, setNotificationCount] = useState(2);

// //   // Mock Kitchen Data
// //   const initialKitchens = [
// //     {
// //       id: "meera",
// //       name: "Meera’s Tiffin Room",
// //       cuisine: "SOUTH INDIAN",
// //       city: "Bengaluru",
// //       location: "Indiranagar · 12–1 PM",
// //       rating: "4.9",
// //       price: "145",
// //       desc: "Vegetable-forward Karnataka lunches, packed warm every morning from a family kitchen in 12th Main.",
// //       tags: ["Vegetarian", "No onion garlic"],
// //       bgColor: "bg-[#D47559]"
// //     },
// //     {
// //       id: "sanjay",
// //       name: "Sanjay’s North Table",
// //       cuisine: "NORTH INDIAN",
// //       city: "Mumbai",
// //       location: "Powai · 1–2 PM",
// //       rating: "4.8",
// //       price: "165",
// //       desc: "Slow-cooked Punjabi comfort food with the kind of dal that tastes like it has a story.",
// //       tags: ["High protein", "Jain option"],
// //       bgColor: "bg-[#E6B37C]"
// //     },
// //     {
// //       id: "aai",
// //       name: "Aai’s Kitchenette",
// //       cuisine: "MAHARASHTRIAN",
// //       city: "Pune",
// //       location: "Kothrud · 12:30–1:30 PM",
// //       rating: "4.7",
// //       price: "125",
// //       desc: "Everyday Maharashtrian meals, from matki usal to soft bhakri, made in small batches.",
// //       tags: ["Homestyle", "Eggs available"],
// //       bgColor: "bg-[#2D5A4C]"
// //     },
// //     {
// //       id: "farah",
// //       name: "Farah’s Dastarkhwan",
// //       cuisine: "HYDERABADI",
// //       city: "Bengaluru",
// //       location: "Koramangala · 12–1 PM",
// //       rating: "4.9",
// //       price: "190",
// //       desc: "A fragrant, generous table of biryani, khatti dal and seasonal sides from Farah's apartment kitchen.",
// //       tags: ["Halal", "Weekend special"],
// //       bgColor: "bg-[#A65B5B]"
// //     },
// //     {
// //       id: "anjali",
// //       name: "Anjali’s Rasoi",
// //       cuisine: "GUJARATI",
// //       city: "Delhi",
// //       location: "Hauz Khas · 1–2 PM",
// //       rating: "4.8",
// //       price: "155",
// //       desc: "Bright Gujarati thalis balanced for busy days, with a new shaak each afternoon.",
// //       tags: ["Vegetarian", "Low oil"],
// //       bgColor: "bg-[#6182A4]"
// //     },
// //     {
// //       id: "nirmala",
// //       name: "Nirmala’s Coastal Pot",
// //       cuisine: "COASTAL",
// //       city: "Chennai",
// //       location: "Adyar · 12–1 PM",
// //       rating: "4.6",
// //       price: "175",
// //       desc: "Coconut, curry leaves, and the clean heat of a Chennai home kitchen.",
// //       tags: ["Pescatarian", "Seasonal"],
// //       bgColor: "bg-[#3D7068]"
// //     }
// //   ];

// //   // Favorite Heart Toggle Action
// //   const toggleFavorite = (id) => {
// //     if (favorites.includes(id)) {
// //       setFavorites(favorites.filter(favId => favId !== id));
// //     } else {
// //       setFavorites([...favorites, id]);
// //     }
// //   };

// //   // Location Selector Handler
// //   const handleLocationChange = () => {
// //     const newLoc = prompt("Enter your area/city:", "Indiranagar, Bengaluru");
// //     if (newLoc) {
// //       alert(`Delivering area updated to: ${newLoc}`);
// //     }
// //   };

// //   // Logout Handler
// //   const handleLogout = () => {
// //     logout();
// //     navigate('/');
// //   };

// //   // Filter Logic
// //   const filteredKitchens = initialKitchens.filter(k => {
// //     const matchesCity = selectedCity === 'All kitchens' || k.city.toLowerCase() === selectedCity.toLowerCase();
// //     const matchesSearch = k.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                           k.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                           k.desc.toLowerCase().includes(searchQuery.toLowerCase());
// //     const matchesTag = activeFilterTag === 'All' || k.tags.some(t => t.toLowerCase() === activeFilterTag.toLowerCase());

// //     return matchesCity && matchesSearch && matchesTag;
// //   });

// //   return (
// //     <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6EF] font-sans">

// //       {/* 1. LEFT SIDEBAR */}
// //       <aside className="w-full md:w-64 bg-[#1C3A34] text-white p-6 flex flex-col justify-between shrink-0">
// //         <div>
// //           <Link to="/" className="flex items-center gap-3 mb-10">
// //             <div className="bg-[#D47559] p-2.5 rounded-xl text-white font-bold text-xl flex items-center justify-center">
// //               <i className="fa-solid fa-utensils"></i>
// //             </div>
// //             <div>
// //               <h1 className="font-serif text-2xl font-bold tracking-wide">HomeFeast</h1>
// //               <p className="text-[10px] tracking-widest text-white/60 uppercase">MADE NEARBY</p>
// //             </div>
// //           </Link>

// //           <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">YOUR NEIGHBORHOOD</p>
// //           <nav className="space-y-2 mb-8">
// //             <Link to="/" className="w-full flex items-center gap-3 bg-[#D47559] text-white px-4 py-3 rounded-2xl font-medium text-sm shadow-sm transition hover:bg-[#c26246]">
// //               <i className="fa-solid fa-magnifying-glass text-xs"></i> Discover
// //             </Link>
// //             <button
// //               onClick={() => navigate('/my-meals')}
// //               className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition text-left cursor-pointer"
// //             >
// //               <i className="fa-solid fa-receipt text-xs"></i> My meals
// //             </button>
// //           </nav>

// //           <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">MORE FROM HOMEFEAST</p>
// //           <nav>
// //             <Link to="/cook/dashboard" className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition">
// //               <i className="fa-solid fa-user-check text-xs"></i> I cook for others
// //             </Link>
// //           </nav>
// //         </div>

// //         {/* Dynamic User Profile / Login Footer in Sidebar */}
// //         {user ? (
// //           <div className="pt-6 border-t border-white/10 flex items-center justify-between w-full">
// //             <div className="flex items-center gap-3">
// //               <div className="w-9 h-9 rounded-full bg-[#E6B37C] text-[#1C3A34] font-bold flex items-center justify-center text-xs uppercase">
// //                 {user.name ? user.name.substring(0, 2) : 'US'}
// //               </div>
// //               <div>
// //                 <h5 className="text-xs font-bold text-white capitalize">{user.name}</h5>
// //                 <p className="text-[10px] text-white/50 capitalize">{user.role || 'Customer'}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="pt-6 border-t border-white/10">
// //             <button
// //               onClick={() => navigate('/login')}
// //               className="w-full bg-[#D47559] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#c26246] transition cursor-pointer"
// //             >
// //               Sign In
// //             </button>
// //           </div>
// //         )}
// //       </aside>

// //       {/* 2. MAIN CONTENT */}
// //       <main className="flex-1 flex flex-col overflow-x-hidden">

// //         {/* TOP HEADER */}
// //         <header className="flex justify-between items-center px-8 py-4 border-b border-black/5 bg-[#FAF6EF]">

// //           {/* Location Trigger */}
// //           <button
// //             onClick={handleLocationChange}
// //             className="flex items-center gap-2 text-[#1C3A34] text-xs font-medium hover:opacity-80 transition cursor-pointer"
// //           >
// //             <i className="fa-solid fa-location-dot text-[#D47559]"></i>
// //             <span>Delivering to <strong className="underline">Indiranagar, Bengaluru</strong> <i className="fa-solid fa-chevron-down text-[9px] ml-1"></i></span>
// //           </button>

// //           {/* Header Actions & Dynamic Auth */}
// //           <div className="flex items-center gap-4 text-xs font-medium text-[#1C3A34]">
// //             <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
// //               <span className="w-2 h-2 rounded-full bg-green-500"></span> API connected
// //             </span>

// //             {/* Notification Button */}
// //             <button
// //               onClick={() => {
// //                 alert("You have 2 pending meal delivery updates!");
// //                 setNotificationCount(0);
// //               }}
// //               className="relative p-2 bg-white rounded-xl border border-black/5 shadow-sm hover:bg-gray-50 transition cursor-pointer"
// //             >
// //               <i className="fa-regular fa-bell"></i>
// //               {notificationCount > 0 && (
// //                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
// //                   {notificationCount}
// //                 </span>
// //               )}
// //             </button>

// //             {/* Menu Trigger */}
// //             <button onClick={() => alert("Quick Menu Options Opened")} className="p-2 bg-white rounded-xl border border-black/5 shadow-sm hover:bg-gray-50 transition cursor-pointer">
// //               <i className="fa-solid fa-bars"></i>
// //             </button>

// //             {/* Dynamic Auth Header Right State */}
// //             {user ? (
// //               <div className="flex items-center gap-3">
// //                 <span className="text-xs">Hi, <strong className="capitalize text-[#1C3A34]">{user.name}</strong></span>
// //                 <button
// //                   onClick={handleLogout}
// //                   className="text-gray-500 hover:text-red-600 transition font-semibold cursor-pointer underline text-xs"
// //                 >
// //                   Log out
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="flex items-center gap-3">
// //                 <button
// //                   onClick={() => navigate('/login')}
// //                   className="text-[#1C3A34] font-bold hover:underline cursor-pointer"
// //                 >
// //                   Sign in
// //                 </button>
// //                 <button
// //                   onClick={() => navigate('/signup')}
// //                   className="bg-[#1C3A34] text-white px-4 py-1.5 rounded-xl font-bold hover:bg-[#112623] transition cursor-pointer shadow-sm"
// //                 >
// //                   Join HomeFeast
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </header>

// //         {/* HERO BANNER SECTION */}
// //         <section className="p-6 md:p-8 pb-4">
// //           <div className="relative overflow-hidden bg-[#E6B37C] rounded-3xl p-8 md:p-12 text-[#1C3A34] shadow-sm">
// //             <div className="absolute -right-10 -top-10 w-80 h-80 rounded-full border-[30px] border-white/20 pointer-events-none"></div>
// //             <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none"></div>

// //             <p className="text-[10px] font-bold tracking-widest text-[#1C3A34]/70 uppercase mb-3">
// //               A BETTER LUNCH STARTS CLOSE TO HOME
// //             </p>

// //             <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight max-w-xl mb-4">
// //               Your neighbourhood, on a plate.
// //             </h2>

// //             <p className="text-[#1C3A34]/80 text-xs md:text-sm max-w-md mb-8">
// //               Find trusted home cooks making the food you want to eat every day — not just once in a while.
// //             </p>

// //             {/* Operational Search Form */}
// //             <form
// //               onSubmit={(e) => e.preventDefault()}
// //               className="relative z-10 flex items-center bg-white p-1.5 rounded-2xl shadow-sm max-w-md"
// //             >
// //               <i className="fa-solid fa-magnifying-glass text-gray-400 ml-4 text-sm"></i>
// //               <input
// //                 type="text"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 placeholder="Search a dish, cuisine or cook"
// //                 className="w-full px-3 py-2 text-xs text-[#1C3A34] outline-none bg-transparent"
// //               />
// //               {searchQuery && (
// //                 <button
// //                   type="button"
// //                   onClick={() => setSearchQuery('')}
// //                   className="text-xs text-gray-400 mr-2 hover:text-black cursor-pointer"
// //                 >
// //                   <i className="fa-solid fa-xmark"></i>
// //                 </button>
// //               )}
// //               <button
// //                 type="submit"
// //                 className="bg-[#1C3A34] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#112623] transition cursor-pointer"
// //               >
// //                 Search
// //               </button>
// //             </form>

// //             <div className="absolute right-6 bottom-6 bg-white/30 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#1C3A34] px-3 py-1 rounded-md uppercase">
// //               Cooked with care since 2019
// //             </div>
// //           </div>
// //         </section>

// //         {/* CARDS LISTING SECTION */}
// //         <section className="p-6 md:p-8">
// //           <p className="text-[10px] font-bold tracking-widest text-[#D47559] uppercase mb-1">
// //             MADE NEAR YOU
// //           </p>

// //           <div className="flex justify-between items-end mb-6">
// //             <div>
// //               <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A34]">
// //                 A good meal is closer than you think.
// //               </h3>
// //               <p className="text-[#1C3A34]/70 text-xs mt-1">
// //                 Small-batch menus from home kitchens around your neighborhood. Order once or make it your daily rhythm.
// //               </p>
// //             </div>

// //             {/* Filter Toggle Button */}
// //             <button
// //               onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
// //               className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
// //                 isFilterModalOpen ? 'bg-[#1C3A34] text-white' : 'bg-[#F4CFAD] text-[#1C3A34] hover:opacity-90'
// //               }`}
// //             >
// //               <i className="fa-solid fa-sliders"></i> {isFilterModalOpen ? 'Close Filters' : 'Filters'}
// //             </button>
// //           </div>

// //           {/* Quick Filter Bar */}
// //           {isFilterModalOpen && (
// //             <div className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm mb-6 flex items-center gap-3 flex-wrap">
// //               <span className="text-xs font-bold text-[#1C3A34]">Dietary preference:</span>
// //               {['All', 'Vegetarian', 'High protein', 'Homestyle', 'Halal'].map((tag) => (
// //                 <button
// //                   key={tag}
// //                   onClick={() => setActiveFilterTag(tag)}
// //                   className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
// //                     activeFilterTag === tag
// //                       ? 'bg-[#D47559] text-white'
// //                       : 'bg-[#FAF6EF] text-[#1C3A34] border border-black/5'
// //                   }`}
// //                 >
// //                   {tag}
// //                 </button>
// //               ))}
// //             </div>
// //           )}

// //           {/* City Category Pills */}
// //           <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
// //             {['All kitchens', 'Bengaluru', 'Mumbai', 'Pune', 'Delhi', 'Chennai'].map((city) => (
// //               <button
// //                 key={city}
// //                 onClick={() => setSelectedCity(city)}
// //                 className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
// //                   selectedCity === city
// //                     ? 'bg-[#1C3A34] text-white shadow-sm'
// //                     : 'bg-white text-[#1C3A34] border border-black/5 hover:bg-gray-50'
// //                 }`}
// //               >
// //                 {city}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Dynamic Kitchen Cards Grid */}
// //           {filteredKitchens.length === 0 ? (
// //             <div className="text-center py-12 bg-white rounded-3xl border border-black/5">
// //               <i className="fa-solid fa-utensils text-3xl text-gray-300 mb-2"></i>
// //               <p className="text-sm font-semibold text-[#1C3A34]">No kitchens found matching your selection.</p>
// //               <button
// //                 onClick={() => { setSelectedCity('All kitchens'); setSearchQuery(''); setActiveFilterTag('All'); }}
// //                 className="mt-3 text-xs text-[#D47559] font-bold underline cursor-pointer"
// //               >
// //                 Reset all filters
// //               </button>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
// //               {filteredKitchens.map((k) => (
// //                 <div key={k.id} className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition">

// //                   {/* Banner Artwork */}
// //                   <div className={`relative h-44 ${k.bgColor} p-4 flex items-start justify-between overflow-hidden`}>
// //                     <span className="bg-white/90 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md text-[#1C3A34] z-10">
// //                       {k.cuisine}
// //                     </span>

// //                     {/* Wishlist Heart Button */}
// //                     <button
// //                       onClick={() => toggleFavorite(k.id)}
// //                       className="bg-white p-2 rounded-full shadow-sm text-[#1C3A34] z-10 hover:scale-110 transition cursor-pointer"
// //                     >
// //                       <i className={`text-xs ${favorites.includes(k.id) ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}`}></i>
// //                     </button>
// //                   </div>

// //                   {/* Card Content Body */}
// //                   <div className="p-5">
// //                     <div className="flex justify-between items-center mb-1">
// //                       <h4 className="font-serif text-xl font-bold text-[#1C3A34]">{k.name}</h4>
// //                       <span className="text-xs font-bold text-[#1C3A34] flex items-center gap-1">
// //                         <i className="fa-solid fa-star text-amber-500 text-[10px]"></i> {k.rating}
// //                       </span>
// //                     </div>

// //                     <p className="text-[11px] text-gray-400 mb-3">{k.location}</p>
// //                     <p className="text-xs text-[#1C3A34]/80 leading-relaxed mb-4 min-h-[36px]">{k.desc}</p>

// //                     <div className="flex gap-2 mb-6 flex-wrap">
// //                       {k.tags.map((tag) => (
// //                         <span key={tag} className="bg-[#FAF6EF] text-[#1C3A34] text-[10px] px-3 py-1 rounded-full font-medium border border-black/5">
// //                           {tag}
// //                         </span>
// //                       ))}
// //                     </div>

// //                     <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-xs">
// //                       <span className="text-gray-500">from <strong className="text-[#1C3A34] text-sm">₹{k.price}</strong> / meal</span>

// //                       <button
// //                         onClick={() => navigate(`/kitchen/${k.id}`)}
// //                         className="text-[#1C3A34] font-bold hover:underline flex items-center gap-1 group cursor-pointer"
// //                       >
// //                         View kitchen <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
// //                       </button>
// //                     </div>
// //                   </div>

// //                 </div>
// //               ))}
// //             </div>
// //           )}

// //           {/* Bottom Features */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/5">
// //             <div className="flex items-start gap-4">
// //               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
// //                 <i className="fa-solid fa-shield-halved"></i>
// //               </div>
// //               <div>
// //                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">People, not listings</h5>
// //                 <p className="text-[11px] text-gray-500">Every cook is verified with a kitchen visit and a real neighborhood address.</p>
// //               </div>
// //             </div>

// //             <div className="flex items-start gap-4">
// //               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
// //                 <i className="fa-solid fa-utensils"></i>
// //               </div>
// //               <div>
// //                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">Food with a point of view</h5>
// //                 <p className="text-[11px] text-gray-500">Menus change with the market, the family recipe, and what is good today.</p>
// //               </div>
// //             </div>

// //             <div className="flex items-start gap-4">
// //               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
// //                 <i className="fa-regular fa-comment"></i>
// //               </div>
// //               <div>
// //                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">A direct line home</h5>
// //                 <p className="text-[11px] text-gray-500">Ask your cook about ingredients, spice, or tomorrow's menu anytime.</p>
// //               </div>
// //             </div>
// //           </div>

// //         </section>

// //       </main>
// //     </div>
// //   );
// // }

// // export default Hero;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext"; // Path verify kar lein

// function Hero() {
//   const navigate = useNavigate();

//   // FIX 1: 'user' ki jagah 'currentUser' destructure karein context se
//   const { currentUser, logout } = useAuth();

//   // Helper name getter (supports both name and fullName)
//   const displayName = currentUser?.fullName || currentUser?.name || "User";

//   // State Management
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCity, setSelectedCity] = useState("All kitchens");
//   const [favorites, setFavorites] = useState([]);
//   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
//   const [activeFilterTag, setActiveFilterTag] = useState("All");
//   const [notificationCount, setNotificationCount] = useState(2);

//   // Mock Kitchen Data
//   const initialKitchens = [
//     {
//       id: "meera",
//       name: "Meera’s Tiffin Room",
//       cuisine: "SOUTH INDIAN",
//       city: "Bengaluru",
//       location: "Indiranagar · 12–1 PM",
//       rating: "4.9",
//       price: "145",
//       desc: "Vegetable-forward Karnataka lunches, packed warm every morning from a family kitchen in 12th Main.",
//       tags: ["Vegetarian", "No onion garlic"],
//       bgColor: "bg-[#D47559]",
//     },
//     {
//       id: "sanjay",
//       name: "Sanjay’s North Table",
//       cuisine: "NORTH INDIAN",
//       city: "Mumbai",
//       location: "Powai · 1–2 PM",
//       rating: "4.8",
//       price: "165",
//       desc: "Slow-cooked Punjabi comfort food with the kind of dal that tastes like it has a story.",
//       tags: ["High protein", "Jain option"],
//       bgColor: "bg-[#E6B37C]",
//     },
//     {
//       id: "aai",
//       name: "Aai’s Kitchenette",
//       cuisine: "MAHARASHTRIAN",
//       city: "Pune",
//       location: "Kothrud · 12:30–1:30 PM",
//       rating: "4.7",
//       price: "125",
//       desc: "Everyday Maharashtrian meals, from matki usal to soft bhakri, made in small batches.",
//       tags: ["Homestyle", "Eggs available"],
//       bgColor: "bg-[#2D5A4C]",
//     },
//     {
//       id: "farah",
//       name: "Farah’s Dastarkhwan",
//       cuisine: "HYDERABADI",
//       city: "Bengaluru",
//       location: "Koramangala · 12–1 PM",
//       rating: "4.9",
//       price: "190",
//       desc: "A fragrant, generous table of biryani, khatti dal and seasonal sides from Farah's apartment kitchen.",
//       tags: ["Halal", "Weekend special"],
//       bgColor: "bg-[#A65B5B]",
//     },
//     {
//       id: "anjali",
//       name: "Anjali’s Rasoi",
//       cuisine: "GUJARATI",
//       city: "Delhi",
//       location: "Hauz Khas · 1–2 PM",
//       rating: "4.8",
//       price: "155",
//       desc: "Bright Gujarati thalis balanced for busy days, with a new shaak each afternoon.",
//       tags: ["Vegetarian", "Low oil"],
//       bgColor: "bg-[#6182A4]",
//     },
//     {
//       id: "nirmala",
//       name: "Nirmala’s Coastal Pot",
//       cuisine: "COASTAL",
//       city: "Chennai",
//       location: "Adyar · 12–1 PM",
//       rating: "4.6",
//       price: "175",
//       desc: "Coconut, curry leaves, and the clean heat of a Chennai home kitchen.",
//       tags: ["Pescatarian", "Seasonal"],
//       bgColor: "bg-[#3D7068]",
//     },
//   ];

//   const toggleFavorite = (id) => {
//     if (favorites.includes(id)) {
//       setFavorites(favorites.filter((favId) => favId !== id));
//     } else {
//       setFavorites([...favorites, id]);
//     }
//   };

//   const handleLocationChange = () => {
//     const newLoc = prompt("Enter your area/city:", "Indiranagar, Bengaluru");
//     if (newLoc) {
//       alert(`Delivering area updated to: ${newLoc}`);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const filteredKitchens = initialKitchens.filter((k) => {
//     const matchesCity =
//       selectedCity === "All kitchens" ||
//       k.city.toLowerCase() === selectedCity.toLowerCase();
//     const matchesSearch =
//       k.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       k.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       k.desc.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesTag =
//       activeFilterTag === "All" ||
//       k.tags.some((t) => t.toLowerCase() === activeFilterTag.toLowerCase());

//     return matchesCity && matchesSearch && matchesTag;
//   });

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6EF] font-sans">
//       {/* 1. LEFT SIDEBAR */}
//       <aside className="w-full md:w-64 bg-[#1C3A34] text-white p-6 flex flex-col justify-between shrink-0">
//         <div>
//           <Link to="/" className="flex items-center gap-3 mb-10">
//             <div className="bg-[#D47559] p-2.5 rounded-xl text-white font-bold text-xl flex items-center justify-center">
//               <i className="fa-solid fa-utensils"></i>
//             </div>
//             <div>
//               <h1 className="font-serif text-2xl font-bold tracking-wide">
//                 HomeFeast
//               </h1>
//               <p className="text-[10px] tracking-widest text-white/60 uppercase">
//                 MADE NEARBY
//               </p>
//             </div>
//           </Link>

//           <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">
//             YOUR NEIGHBORHOOD
//           </p>
//           <nav className="space-y-2 mb-8">
//             <Link
//               to="/"
//               className="w-full flex items-center gap-3 bg-[#D47559] text-white px-4 py-3 rounded-2xl font-medium text-sm shadow-sm transition hover:bg-[#c26246]"
//             >
//               <i className="fa-solid fa-magnifying-glass text-xs"></i> Discover
//             </Link>
//             <button
//               onClick={() => navigate("/my-meals")}
//               className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition text-left cursor-pointer"
//             >
//               <i className="fa-solid fa-receipt text-xs"></i> My meals
//             </button>
//           </nav>

//           <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">
//             MORE FROM HOMEFEAST
//           </p>
//           <nav>
//             <Link
//               to="/cook-dashboard"
//               className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition"
//             >
//               <i className="fa-solid fa-user-check text-xs"></i> I cook for
//               others
//             </Link>
//           </nav>
//         </div>

//         {/* FIX 2: Check currentUser instead of user */}
//         {currentUser ? (
//           <div className="pt-6 border-t border-white/10 flex items-center justify-between w-full">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-full bg-[#E6B37C] text-[#1C3A34] font-bold flex items-center justify-center text-xs uppercase">
//                 {displayName.substring(0, 2)}
//               </div>
//               <div>
//                 <h5 className="text-xs font-bold text-white capitalize">
//                   {displayName}
//                 </h5>
//                 <p className="text-[10px] text-white/50 capitalize">
//                   {currentUser.role || "Customer"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="pt-6 border-t border-white/10">
//             <button
//               onClick={() => navigate("/login")}
//               className="w-full bg-[#D47559] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#c26246] transition cursor-pointer"
//             >
//               Sign In
//             </button>
//           </div>
//         )}
//       </aside>

//       {/* 2. MAIN CONTENT */}
//       <main className="flex-1 flex flex-col overflow-x-hidden">
//         {/* TOP HEADER */}
//         <header className="flex justify-between items-center px-8 py-4 border-b border-black/5 bg-[#FAF6EF]">
//           <button
//             onClick={handleLocationChange}
//             className="flex items-center gap-2 text-[#1C3A34] text-xs font-medium hover:opacity-80 transition cursor-pointer"
//           >
//             <i className="fa-solid fa-location-dot text-[#D47559]"></i>
//             <span>
//               Delivering to{" "}
//               <strong className="underline">Indiranagar, Bengaluru</strong>{" "}
//               <i className="fa-solid fa-chevron-down text-[9px] ml-1"></i>
//             </span>
//           </button>

//           <div className="flex items-center gap-4 text-xs font-medium text-[#1C3A34]">
//             <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
//               <span className="w-2 h-2 rounded-full bg-green-500"></span> API
//               connected
//             </span>

//             <button
//               onClick={() => {
//                 alert("You have 2 pending meal delivery updates!");
//                 setNotificationCount(0);
//               }}
//               className="relative p-2 bg-white rounded-xl border border-black/5 shadow-sm hover:bg-gray-50 transition cursor-pointer"
//             >
//               <i className="fa-regular fa-bell"></i>
//               {notificationCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                   {notificationCount}
//                 </span>
//               )}
//             </button>

//             <button
//               onClick={() => alert("Quick Menu Options Opened")}
//               className="p-2 bg-white rounded-xl border border-black/5 shadow-sm hover:bg-gray-50 transition cursor-pointer"
//             >
//               <i className="fa-solid fa-bars"></i>
//             </button>

//             {/* FIX 3: Dynamic Auth Check Fix */}
//             {/* Left Sidebar Bottom User Info */}
//             {currentUser ? (
//               <div className="pt-6 border-t border-white/10 flex items-center justify-between w-full">
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-[#E6B37C] text-[#1C3A34] font-bold flex items-center justify-center text-xs uppercase">
//                     {displayName.substring(0, 2)}
//                   </div>
//                   <div>
//                     <h5 className="text-xs font-bold text-white capitalize">
//                       {displayName}
//                     </h5>
//                     {/* Dynamic Role Display */}
//                     <p className="text-[10px] text-white/50 capitalize">
//                       {currentUser.role ? currentUser.role : "Customer"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="text-[#1C3A34] font-bold hover:underline cursor-pointer"
//                 >
//                   Sign in
//                 </button>
//                 <button
//                   onClick={() => navigate("/signup")}
//                   className="bg-[#1C3A34] text-white px-4 py-1.5 rounded-xl font-bold hover:bg-[#112623] transition cursor-pointer shadow-sm"
//                 >
//                   Join HomeFeast
//                 </button>
//               </div>
//             )}
//           </div>
//         </header>

//         {/* HERO BANNER SECTION */}
//         <section className="p-6 md:p-8 pb-4">
//           <div className="relative overflow-hidden bg-[#E6B37C] rounded-3xl p-8 md:p-12 text-[#1C3A34] shadow-sm">
//             <div className="absolute -right-10 -top-10 w-80 h-80 rounded-full border-[30px] border-white/20 pointer-events-none"></div>
//             <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none"></div>

//             <p className="text-[10px] font-bold tracking-widest text-[#1C3A34]/70 uppercase mb-3">
//               A BETTER LUNCH STARTS CLOSE TO HOME
//             </p>

//             <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight max-w-xl mb-4">
//               Your neighbourhood, on a plate.
//             </h2>

//             <p className="text-[#1C3A34]/80 text-xs md:text-sm max-w-md mb-8">
//               Find trusted home cooks making the food you want to eat every day
//               — not just once in a while.
//             </p>

//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="relative z-10 flex items-center bg-white p-1.5 rounded-2xl shadow-sm max-w-md"
//             >
//               <i className="fa-solid fa-magnifying-glass text-gray-400 ml-4 text-sm"></i>
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search a dish, cuisine or cook"
//                 className="w-full px-3 py-2 text-xs text-[#1C3A34] outline-none bg-transparent"
//               />
//               {searchQuery && (
//                 <button
//                   type="button"
//                   onClick={() => setSearchQuery("")}
//                   className="text-xs text-gray-400 mr-2 hover:text-black cursor-pointer"
//                 >
//                   <i className="fa-solid fa-xmark"></i>
//                 </button>
//               )}
//               <button
//                 type="submit"
//                 className="bg-[#1C3A34] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#112623] transition cursor-pointer"
//               >
//                 Search
//               </button>
//             </form>

//             <div className="absolute right-6 bottom-6 bg-white/30 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#1C3A34] px-3 py-1 rounded-md uppercase">
//               Cooked with care since 2019
//             </div>
//           </div>
//         </section>

//         {/* CARDS LISTING SECTION */}
//         <section className="p-6 md:p-8">
//           <p className="text-[10px] font-bold tracking-widest text-[#D47559] uppercase mb-1">
//             MADE NEAR YOU
//           </p>

//           <div className="flex justify-between items-end mb-6">
//             <div>
//               <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A34]">
//                 A good meal is closer than you think.
//               </h3>
//               <p className="text-[#1C3A34]/70 text-xs mt-1">
//                 Small-batch menus from home kitchens around your neighborhood.
//                 Order once or make it your daily rhythm.
//               </p>
//             </div>

//             <button
//               onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
//                 isFilterModalOpen
//                   ? "bg-[#1C3A34] text-white"
//                   : "bg-[#F4CFAD] text-[#1C3A34] hover:opacity-90"
//               }`}
//             >
//               <i className="fa-solid fa-sliders"></i>{" "}
//               {isFilterModalOpen ? "Close Filters" : "Filters"}
//             </button>
//           </div>

//           {isFilterModalOpen && (
//             <div className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm mb-6 flex items-center gap-3 flex-wrap">
//               <span className="text-xs font-bold text-[#1C3A34]">
//                 Dietary preference:
//               </span>
//               {["All", "Vegetarian", "High protein", "Homestyle", "Halal"].map(
//                 (tag) => (
//                   <button
//                     key={tag}
//                     onClick={() => setActiveFilterTag(tag)}
//                     className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
//                       activeFilterTag === tag
//                         ? "bg-[#D47559] text-white"
//                         : "bg-[#FAF6EF] text-[#1C3A34] border border-black/5"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ),
//               )}
//             </div>
//           )}

//           <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
//             {[
//               "All kitchens",
//               "Bengaluru",
//               "Mumbai",
//               "Pune",
//               "Delhi",
//               "Chennai",
//             ].map((city) => (
//               <button
//                 key={city}
//                 onClick={() => setSelectedCity(city)}
//                 className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
//                   selectedCity === city
//                     ? "bg-[#1C3A34] text-white shadow-sm"
//                     : "bg-white text-[#1C3A34] border border-black/5 hover:bg-gray-50"
//                 }`}
//               >
//                 {city}
//               </button>
//             ))}
//           </div>

//           {filteredKitchens.length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-3xl border border-black/5">
//               <i className="fa-solid fa-utensils text-3xl text-gray-300 mb-2"></i>
//               <p className="text-sm font-semibold text-[#1C3A34]">
//                 No kitchens found matching your selection.
//               </p>
//               <button
//                 onClick={() => {
//                   setSelectedCity("All kitchens");
//                   setSearchQuery("");
//                   setActiveFilterTag("All");
//                 }}
//                 className="mt-3 text-xs text-[#D47559] font-bold underline cursor-pointer"
//               >
//                 Reset all filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//               {filteredKitchens.map((k) => (
//                 <div
//                   key={k.id}
//                   className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition"
//                 >
//                   <div
//                     className={`relative h-44 ${k.bgColor} p-4 flex items-start justify-between overflow-hidden`}
//                   >
//                     <span className="bg-white/90 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md text-[#1C3A34] z-10">
//                       {k.cuisine}
//                     </span>
//                     <button
//                       onClick={() => toggleFavorite(k.id)}
//                       className="bg-white p-2 rounded-full shadow-sm text-[#1C3A34] z-10 hover:scale-110 transition cursor-pointer"
//                     >
//                       <i
//                         className={`text-xs ${favorites.includes(k.id) ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart"}`}
//                       ></i>
//                     </button>
//                   </div>

//                   <div className="p-5">
//                     <div className="flex justify-between items-center mb-1">
//                       <h4 className="font-serif text-xl font-bold text-[#1C3A34]">
//                         {k.name}
//                       </h4>
//                       <span className="text-xs font-bold text-[#1C3A34] flex items-center gap-1">
//                         <i className="fa-solid fa-star text-amber-500 text-[10px]"></i>{" "}
//                         {k.rating}
//                       </span>
//                     </div>

//                     <p className="text-[11px] text-gray-400 mb-3">
//                       {k.location}
//                     </p>
//                     <p className="text-xs text-[#1C3A34]/80 leading-relaxed mb-4 min-h-[36px]">
//                       {k.desc}
//                     </p>

//                     <div className="flex gap-2 mb-6 flex-wrap">
//                       {k.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="bg-[#FAF6EF] text-[#1C3A34] text-[10px] px-3 py-1 rounded-full font-medium border border-black/5"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-xs">
//                       <span className="text-gray-500">
//                         from{" "}
//                         <strong className="text-[#1C3A34] text-sm">
//                           ₹{k.price}
//                         </strong>{" "}
//                         / meal
//                       </span>
//                       <button
//                         onClick={() => navigate(`/kitchen/${k.id}`)}
//                         className="text-[#1C3A34] font-bold hover:underline flex items-center gap-1 group cursor-pointer"
//                       >
//                         View kitchen{" "}
//                         <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/5">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
//                 <i className="fa-solid fa-shield-halved"></i>
//               </div>
//               <div>
//                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">
//                   People, not listings
//                 </h5>
//                 <p className="text-[11px] text-gray-500">
//                   Every cook is verified with a kitchen visit and a real
//                   neighborhood address.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
//                 <i className="fa-solid fa-utensils"></i>
//               </div>
//               <div>
//                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">
//                   Food with a point of view
//                 </h5>
//                 <p className="text-[11px] text-gray-500">
//                   Menus change with the market, the family recipe, and what is
//                   good today.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
//                 <i className="fa-regular fa-comment"></i>
//               </div>
//               <div>
//                 <h5 className="font-bold text-[#1C3A34] text-xs mb-1">
//                   A direct line home
//                 </h5>
//                 <p className="text-[11px] text-gray-500">
//                   Ask your cook about ingredients, spice, or tomorrow's menu
//                   anytime.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Hero;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Path verify kar lein

function Hero() {
  const navigate = useNavigate();
  const { currentUser, logout, notifications } = useAuth();

  // Helper name & role getters
  const displayName = currentUser?.fullName || currentUser?.name || 'User';
  const userRole = currentUser?.role ? currentUser.role.toLowerCase() : 'customer';

  // State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All kitchens');
  const [favorites, setFavorites] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeFilterTag, setActiveFilterTag] = useState('All');

  // Mock Kitchen Data
  const initialKitchens = [
    {
      id: "meera",
      name: "Meera’s Tiffin Room",
      cuisine: "SOUTH INDIAN",
      city: "Bengaluru",
      location: "Indiranagar · 12–1 PM",
      rating: "4.9",
      price: "145",
      desc: "Vegetable-forward Karnataka lunches, packed warm every morning from a family kitchen in 12th Main.",
      tags: ["Vegetarian", "No onion garlic"],
      bgColor: "bg-[#D47559]"
    },
    {
      id: "sanjay",
      name: "Sanjay’s North Table",
      cuisine: "NORTH INDIAN",
      city: "Mumbai",
      location: "Powai · 1–2 PM",
      rating: "4.8",
      price: "165",
      desc: "Slow-cooked Punjabi comfort food with the kind of dal that tastes like it has a story.",
      tags: ["High protein", "Jain option"],
      bgColor: "bg-[#E6B37C]"
    },
    {
      id: "aai",
      name: "Aai’s Kitchenette",
      cuisine: "MAHARASHTRIAN",
      city: "Pune",
      location: "Kothrud · 12:30–1:30 PM",
      rating: "4.7",
      price: "125",
      desc: "Everyday Maharashtrian meals, from matki usal to soft bhakri, made in small batches.",
      tags: ["Homestyle", "Eggs available"],
      bgColor: "bg-[#2D5A4C]"
    },
    {
      id: "farah",
      name: "Farah’s Dastarkhwan",
      cuisine: "HYDERABADI",
      city: "Bengaluru",
      location: "Koramangala · 12–1 PM",
      rating: "4.9",
      price: "190",
      desc: "A fragrant, generous table of biryani, khatti dal and seasonal sides from Farah's apartment kitchen.",
      tags: ["Halal", "Weekend special"],
      bgColor: "bg-[#A65B5B]"
    },
    {
      id: "anjali",
      name: "Anjali’s Rasoi",
      cuisine: "GUJARATI",
      city: "Delhi",
      location: "Hauz Khas · 1–2 PM",
      rating: "4.8",
      price: "155",
      desc: "Bright Gujarati thalis balanced for busy days, with a new shaak each afternoon.",
      tags: ["Vegetarian", "Low oil"],
      bgColor: "bg-[#6182A4]"
    },
    {
      id: "nirmala",
      name: "Nirmala’s Coastal Pot",
      cuisine: "COASTAL",
      city: "Chennai",
      location: "Adyar · 12–1 PM",
      rating: "4.6",
      price: "175",
      desc: "Coconut, curry leaves, and the clean heat of a Chennai home kitchen.",
      tags: ["Pescatarian", "Seasonal"],
      bgColor: "bg-[#3D7068]"
    }
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleLocationChange = () => {
    const newLoc = prompt("Enter your area/city:", "Indiranagar, Bengaluru");
    if (newLoc) {
      alert(`Delivering area updated to: ${newLoc}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const filteredKitchens = initialKitchens.filter(k => {
    const matchesCity = selectedCity === 'All kitchens' || k.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesSearch = k.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          k.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          k.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeFilterTag === 'All' || k.tags.some(t => t.toLowerCase() === activeFilterTag.toLowerCase());

    return matchesCity && matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6EF] font-sans">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-full md:w-64 bg-[#1C3A34] text-white p-6 flex flex-col justify-between shrink-0">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-10">
            <div className="bg-[#D47559] p-2.5 rounded-xl text-white font-bold text-xl flex items-center justify-center">
              <i className="fa-solid fa-utensils"></i>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold tracking-wide">HomeFeast</h1>
              <p className="text-[10px] tracking-widest text-white/60 uppercase">MADE NEARBY</p>
            </div>
          </Link>

          <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">YOUR NEIGHBORHOOD</p>
          <nav className="space-y-2 mb-8">
            <Link to="/" className="w-full flex items-center gap-3 bg-[#D47559] text-white px-4 py-3 rounded-2xl font-medium text-sm shadow-sm transition hover:bg-[#c26246]">
              <i className="fa-solid fa-magnifying-glass text-xs"></i> Discover
            </Link>
            <button 
              onClick={() => navigate('/my-meals')} 
              className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition text-left cursor-pointer"
            >
              <i className="fa-solid fa-receipt text-xs"></i> My meals
            </button>
          </nav>

          <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">MORE FROM HOMEFEAST</p>
          <nav>
            <button 
              onClick={() => navigate(userRole === 'cook' ? '/cook-dashboard' : '/signup?role=cook')} 
              className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition text-left cursor-pointer"
            >
              <i className="fa-solid fa-user-check text-xs"></i> {userRole === 'cook' ? 'Cook Dashboard' : 'I cook for others'}
            </button>
          </nav>
        </div>

        {/* Dynamic Sidebar Footer */}
        {currentUser ? (
          <div className="pt-6 border-t border-white/10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E6B37C] text-[#1C3A34] font-bold flex items-center justify-center text-xs uppercase">
                {displayName.substring(0, 2)}
              </div>
              <div>
                <h5 className="text-xs font-bold text-white capitalize">{displayName}</h5>
                <p className="text-[10px] text-emerald-400 font-semibold capitalize">{userRole}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="text-white/60 hover:text-red-400 text-xs font-bold transition"
              title="Logout"
            >
              <i className="fa-solid fa-power-off"></i>
            </button>
          </div>
        ) : (
          <div className="pt-6 border-t border-white/10">
            <button 
              onClick={() => navigate('/login')}
              className="w-full bg-[#D47559] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#c26246] transition cursor-pointer"
            >
              Sign In
            </button>
          </div>
        )}
      </aside>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-x-hidden">
        
        {/* TOP HEADER */}
        <header className="flex justify-between items-center px-8 py-4 border-b border-black/5 bg-[#FAF6EF]">
          
          <button 
            onClick={handleLocationChange}
            className="flex items-center gap-2 text-[#1C3A34] text-xs font-medium hover:opacity-80 transition cursor-pointer"
          >
            <i className="fa-solid fa-location-dot text-[#D47559]"></i>
            <span>Delivering to <strong className="underline">Indiranagar, Bengaluru</strong> <i className="fa-solid fa-chevron-down text-[9px] ml-1"></i></span>
          </button>

          <div className="flex items-center gap-4 text-xs font-medium text-[#1C3A34]">
            <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> API connected
            </span>
            
            {/* Notification Button */}
            <button 
              onClick={() => alert(`Notifications: ${notifications?.length || 0} active updates`)}
              className="relative p-2 bg-white rounded-xl border border-black/5 shadow-sm hover:bg-gray-50 transition cursor-pointer"
            >
              <i className="fa-regular fa-bell"></i>
              {notifications && notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {notifications.length}
                </span>
              )}
            </button>

            {/* Dynamic Header Auth Controls with High Visibility CSS */}
            {currentUser ? (
              <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-black/10 shadow-sm">
                <span className="text-xs text-[#1C3A34]">
                  Hi, <strong className="capitalize text-[#1C3A34] font-bold">{displayName.split(' ')[0]}</strong>
                  <span className="ml-1 text-[10px] bg-[#1C3A34] text-white px-1.5 py-0.5 rounded font-semibold uppercase">{userRole}</span>
                </span>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-50 hover:bg-red-100 text-red-600 px-2.5 py-1 rounded-lg transition font-bold text-xs border border-red-200 cursor-pointer"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigate('/login')}
                  className="text-[#1C3A34] font-bold hover:underline cursor-pointer"
                >
                  Sign in
                </button>
                <button 
                  onClick={() => navigate('/signup')}
                  className="bg-[#1C3A34] text-white px-4 py-1.5 rounded-xl font-bold hover:bg-[#112623] transition cursor-pointer shadow-sm"
                >
                  Join HomeFeast
                </button>
              </div>
            )}
          </div>
        </header>

        {/* COOK APPROVAL ALERT BANNER */}
        {currentUser && userRole === 'cook' && currentUser.status === 'pending' && (
          <div className="m-6 mb-0 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl flex justify-between items-center text-amber-900 text-xs">
            <div>
              <p className="font-bold">⚠️ Cook Profile Under Review</p>
              <p className="text-[#1C3A34]/70">Admin verification pending hai. Approval milte hi aap kitchen list create kar payenge.</p>
            </div>
            <button 
              onClick={() => navigate('/cook-dashboard')}
              className="bg-amber-600 text-white px-3 py-1.5 rounded-xl font-bold hover:bg-amber-700 transition"
            >
              Open Cook Dashboard
            </button>
          </div>
        )}

        {/* HERO BANNER SECTION */}
        <section className="p-6 md:p-8 pb-4">
          <div className="relative overflow-hidden bg-[#E6B37C] rounded-3xl p-8 md:p-12 text-[#1C3A34] shadow-sm">
            <div className="absolute -right-10 -top-10 w-80 h-80 rounded-full border-[30px] border-white/20 pointer-events-none"></div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none"></div>

            <p className="text-[10px] font-bold tracking-widest text-[#1C3A34]/70 uppercase mb-3">
              A BETTER LUNCH STARTS CLOSE TO HOME
            </p>
            
            <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight max-w-xl mb-4">
              Your neighbourhood, on a plate.
            </h2>
            
            <p className="text-[#1C3A34]/80 text-xs md:text-sm max-w-md mb-8">
              Find trusted home cooks making the food you want to eat every day — not just once in a while.
            </p>

            <form 
              onSubmit={(e) => e.preventDefault()}
              className="relative z-10 flex items-center bg-white p-1.5 rounded-2xl shadow-sm max-w-md"
            >
              <i className="fa-solid fa-magnifying-glass text-gray-400 ml-4 text-sm"></i>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a dish, cuisine or cook" 
                className="w-full px-3 py-2 text-xs text-[#1C3A34] outline-none bg-transparent" 
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-gray-400 mr-2 hover:text-black cursor-pointer"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
              <button 
                type="submit" 
                className="bg-[#1C3A34] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#112623] transition cursor-pointer"
              >
                Search
              </button>
            </form>

            <div className="absolute right-6 bottom-6 bg-white/30 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#1C3A34] px-3 py-1 rounded-md uppercase">
              Cooked with care since 2019
            </div>
          </div>
        </section>

        {/* CARDS LISTING SECTION */}
        <section className="p-6 md:p-8">
          <p className="text-[10px] font-bold tracking-widest text-[#D47559] uppercase mb-1">
            MADE NEAR YOU
          </p>

          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3A34]">
                A good meal is closer than you think.
              </h3>
              <p className="text-[#1C3A34]/70 text-xs mt-1">
                Small-batch menus from home kitchens around your neighborhood. Order once or make it your daily rhythm.
              </p>
            </div>
            
            <button 
              onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                isFilterModalOpen ? 'bg-[#1C3A34] text-white' : 'bg-[#F4CFAD] text-[#1C3A34] hover:opacity-90'
              }`}
            >
              <i className="fa-solid fa-sliders"></i> {isFilterModalOpen ? 'Close Filters' : 'Filters'}
            </button>
          </div>

          {isFilterModalOpen && (
            <div className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm mb-6 flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold text-[#1C3A34]">Dietary preference:</span>
              {['All', 'Vegetarian', 'High protein', 'Homestyle', 'Halal'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilterTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                    activeFilterTag === tag 
                      ? 'bg-[#D47559] text-white' 
                      : 'bg-[#FAF6EF] text-[#1C3A34] border border-black/5'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
            {['All kitchens', 'Bengaluru', 'Mumbai', 'Pune', 'Delhi', 'Chennai'].map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedCity === city 
                    ? 'bg-[#1C3A34] text-white shadow-sm' 
                    : 'bg-white text-[#1C3A34] border border-black/5 hover:bg-gray-50'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {filteredKitchens.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-black/5">
              <i className="fa-solid fa-utensils text-3xl text-gray-300 mb-2"></i>
              <p className="text-sm font-semibold text-[#1C3A34]">No kitchens found matching your selection.</p>
              <button 
                onClick={() => { setSelectedCity('All kitchens'); setSearchQuery(''); setActiveFilterTag('All'); }}
                className="mt-3 text-xs text-[#D47559] font-bold underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredKitchens.map((k) => (
                <div key={k.id} className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition">
                  <div className={`relative h-44 ${k.bgColor} p-4 flex items-start justify-between overflow-hidden`}>
                    <span className="bg-white/90 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md text-[#1C3A34] z-10">
                      {k.cuisine}
                    </span>
                    <button 
                      onClick={() => toggleFavorite(k.id)}
                      className="bg-white p-2 rounded-full shadow-sm text-[#1C3A34] z-10 hover:scale-110 transition cursor-pointer"
                    >
                      <i className={`text-xs ${favorites.includes(k.id) ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'}`}></i>
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-serif text-xl font-bold text-[#1C3A34]">{k.name}</h4>
                      <span className="text-xs font-bold text-[#1C3A34] flex items-center gap-1">
                        <i className="fa-solid fa-star text-amber-500 text-[10px]"></i> {k.rating}
                      </span>
                    </div>
                    
                    <p className="text-[11px] text-gray-400 mb-3">{k.location}</p>
                    <p className="text-xs text-[#1C3A34]/80 leading-relaxed mb-4 min-h-[36px]">{k.desc}</p>

                    <div className="flex gap-2 mb-6 flex-wrap">
                      {k.tags.map((tag) => (
                        <span key={tag} className="bg-[#FAF6EF] text-[#1C3A34] text-[10px] px-3 py-1 rounded-full font-medium border border-black/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-xs">
                      <span className="text-gray-500">from <strong className="text-[#1C3A34] text-sm">₹{k.price}</strong> / meal</span>
                      <button 
                        onClick={() => navigate(`/kitchen/${k.id}`)} 
                        className="text-[#1C3A34] font-bold hover:underline flex items-center gap-1 group cursor-pointer"
                      >
                        View kitchen <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <h5 className="font-bold text-[#1C3A34] text-xs mb-1">People, not listings</h5>
                <p className="text-[11px] text-gray-500">Every cook is verified with a kitchen visit and a real neighborhood address.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <div>
                <h5 className="font-bold text-[#1C3A34] text-xs mb-1">Food with a point of view</h5>
                <p className="text-[11px] text-gray-500">Menus change with the market, the family recipe, and what is good today.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F4CFAD]/40 rounded-2xl text-[#1C3A34] text-sm">
                <i className="fa-regular fa-comment"></i>
              </div>
              <div>
                <h5 className="font-bold text-[#1C3A34] text-xs mb-1">A direct line home</h5>
                <p className="text-[11px] text-gray-500">Ask your cook about ingredients, spice, or tomorrow's menu anytime.</p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Hero;