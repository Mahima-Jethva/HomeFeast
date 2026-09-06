import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMeals } from '../Context/MealContext'; // Verify path

function ViewKitchen() {
  const { id } = useParams(); // URL se kitchen ki 'id' catch karta hai (e.g., 'meera', 'sanjay')
  const { addMeal } = useMeals();

  // All Kitchens Master Database
  const allKitchens = {
    meera: {
      name: "Meera’s Tiffin Room",
      cuisine: "SOUTH INDIAN",
      location: "Indiranagar, Bengaluru",
      timing: "12:00 PM - 1:00 PM Delivery",
      rating: "4.9",
      reviews: "128 reviews",
      bio: "Vegetable-forward Karnataka lunches, packed warm every morning from a family kitchen in 12th Main.",
      menu: [
        { id: 101, name: "Karnataka Festive Thali", price: 180, desc: "Bisi Bele Bath, Kosambari, Puri, Potato Saagu, Mysore Pak, and Curd Rice.", tag: "Bestseller" },
        { id: 102, name: "Everyday Roti Meal", price: 145, desc: "3 Phulkas, Yennegai (Brinjal Curry), Dal Fry, Steamed Rice, and Pickle.", tag: "Homestyle" },
        { id: 103, name: "Filter Coffee Shake", price: 60, desc: "Traditional South Indian decoction blended with chilled milk.", tag: "Beverage" }
      ]
    },
    sanjay: {
      name: "Sanjay’s North Table",
      cuisine: "NORTH INDIAN",
      location: "Powai, Mumbai",
      timing: "1:00 PM - 2:00 PM Delivery",
      rating: "4.8",
      reviews: "95 reviews",
      bio: "Slow-cooked Punjabi comfort food with the kind of dal that tastes like it has a story.",
      menu: [
        { id: 201, name: "Punjabi Dal Makhani Thali", price: 165, desc: "Dal Makhani, Shahi Paneer, 2 Butter Naan, Jeera Rice & Gulab Jamun.", tag: "Bestseller" },
        { id: 202, name: "Chole Bhature Combo", price: 140, desc: "2 Fluffy Bhature, Amritsari Chole, Onion Salad & Pickle.", tag: "Popular" },
        { id: 203, name: "Sweet Lassi", price: 50, desc: "Thick Punjabi lassi topped with fresh malai.", tag: "Beverage" }
      ]
    },
    aai: {
      name: "Aai’s Kitchenette",
      cuisine: "MAHARASHTRIAN",
      location: "Kothrud, Pune",
      timing: "12:30 PM - 1:30 PM Delivery",
      rating: "4.7",
      reviews: "110 reviews",
      bio: "Everyday Maharashtrian meals, from matki usal to soft bhakri, made in small batches.",
      menu: [
        { id: 301, name: "Pithla Bhakri Special", price: 125, desc: "Hot Pithla, 2 Jowar Bhakri, Thecha, Kanda & Solkadhi.", tag: "Traditional" },
        { id: 302, name: "Maharashtrian Veg Thali", price: 150, desc: "Matki Usal, Varan Bhaat, Chapati, Koshimbir & Ukadiche Modak.", tag: "Homestyle" }
      ]
    },
    farah: {
      name: "Farah’s Dastarkhwan",
      cuisine: "HYDERABADI",
      location: "Koramangala, Bengaluru",
      timing: "12:00 PM - 1:00 PM Delivery",
      rating: "4.9",
      reviews: "210 reviews",
      bio: "A fragrant, generous table of biryani, khatti dal and seasonal sides from Farah's apartment kitchen.",
      menu: [
        { id: 401, name: "Hyderabadi Dum Biryani", price: 190, desc: "Slow-cooked aromatic biryani served with Mirchi Ka Salan and Raita.", tag: "Bestseller" },
        { id: 402, name: "Khatti Dal Meal", price: 130, desc: "Hyderabadi Khatti Dal, Rice, Bagara Baingan & Papad.", tag: "Comfort Food" }
      ]
    },
    anjali: {
      name: "Anjali’s Rasoi",
      cuisine: "GUJARATI",
      location: "Hauz Khas, Delhi",
      timing: "1:00 PM - 2:00 PM Delivery",
      rating: "4.8",
      reviews: "82 reviews",
      bio: "Bright Gujarati thalis balanced for busy days, with a new shaak each afternoon.",
      menu: [
        { id: 501, name: "Full Gujarati Thali", price: 155, desc: "4 Rotli, Sev Tamatar Shaak, Kadhai Bhindi, Gujarati Dal, Rice & Shrikhand.", tag: "Bestseller" },
        { id: 502, name: "Dhokla & Khaman Platter", price: 90, desc: "Fresh nylon dhokla served with green chutney and fried chilies.", tag: "Snack" }
      ]
    },
    nirmala: {
      name: "Nirmala’s Coastal Pot",
      cuisine: "COASTAL",
      location: "Adyar, Chennai",
      timing: "12:00 PM - 1:00 PM Delivery",
      rating: "4.6",
      reviews: "74 reviews",
      bio: "Coconut, curry leaves, and the clean heat of a Chennai home kitchen.",
      menu: [
        { id: 601, name: "Coastal Fish Curry Meal", price: 175, desc: "Traditional South Indian Fish Curry, Steamed Rice, Rasam & Appalam.", tag: "Special" },
        { id: 602, name: "Coconut Veg Curry Meal", price: 140, desc: "Mixed Veg Coconut Stew, Appam (3 pcs) & Payasam.", tag: "Vegetarian" }
      ]
    }
  };

  // Current ID ke hisaab se kitchen choose karna (Default: meera agar match na ho)
  const kitchenData = allKitchens[id] || allKitchens.meera;

  const handleAddMeal = (item) => {
    if (addMeal) {
      addMeal({ ...item, kitchenName: kitchenData.name });
    }
    alert(`${item.name} added to My Meals!`);
  };

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
            <Link to="/" className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition">
              <i className="fa-solid fa-magnifying-glass text-xs"></i> Discover
            </Link>
            <Link to="/my-meals" className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition">
              <i className="fa-solid fa-receipt text-xs"></i> My meals
            </Link>
          </nav>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-x-hidden">
        
        {/* HEADER */}
        <header className="flex justify-between items-center px-8 py-4 border-b border-black/5 bg-[#FAF6EF]">
          <Link to="/" className="text-xs font-bold text-[#1C3A34] hover:underline flex items-center gap-2">
            <i className="fa-solid fa-arrow-left"></i> Back to Discover
          </Link>
          <div className="flex items-center gap-4 text-xs font-medium text-[#1C3A34]">
            <span className="capitalize font-semibold text-gray-500">Kitchen Profile: {kitchenData.name}</span>
          </div>
        </header>

        {/* KITCHEN PROFILE DETAILS */}
        <section className="p-6 md:p-8 max-w-4xl">
          
          {/* Banner Box */}
          <div className="bg-[#D47559] p-8 rounded-3xl text-white mb-8 shadow-sm relative overflow-hidden">
            <span className="bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-md">
              {kitchenData.cuisine}
            </span>
            <h2 className="font-serif text-4xl font-bold mt-4 mb-2">{kitchenData.name}</h2>
            <p className="text-white/90 text-sm max-w-lg mb-4">{kitchenData.bio}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-2 border-t border-white/20">
              <span><i className="fa-solid fa-location-dot"></i> {kitchenData.location}</span>
              <span><i className="fa-solid fa-clock"></i> {kitchenData.timing}</span>
              <span><i className="fa-solid fa-star text-amber-300"></i> {kitchenData.rating} ({kitchenData.reviews})</span>
            </div>
          </div>

          {/* MENU SECTION */}
          <h3 className="font-serif text-2xl font-bold text-[#1C3A34] mb-6">Today's Menu</h3>
          
          <div className="space-y-4">
            {kitchenData.menu.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm flex justify-between items-center">
                <div className="max-w-md">
                  <span className="bg-[#FAF6EF] text-[#1C3A34] text-[10px] font-bold px-2.5 py-1 rounded-md border border-black/5">
                    {item.tag}
                  </span>
                  <h4 className="font-bold text-lg text-[#1C3A34] mt-2">{item.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  <p className="text-sm font-bold text-[#1C3A34] mt-3">₹{item.price}</p>
                </div>

                <button 
                  onClick={() => handleAddMeal(item)}
                  className="bg-[#1C3A34] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#112623] transition cursor-pointer"
                >
                  Add to Meal
                </button>
              </div>
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}

export default ViewKitchen;