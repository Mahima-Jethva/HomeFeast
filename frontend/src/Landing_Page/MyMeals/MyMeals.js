

import React from 'react';
import { Link } from 'react-router-dom';
import { useMeals } from '../Context/MealContext';

function MyMeals() {
  const { orderedMeals, removeMeal } = useMeals();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6EF] font-sans">
      
      {/* SIDEBAR */}
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

          <nav className="space-y-2 mb-8">
            <Link to="/" className="w-full flex items-center gap-3 text-white/70 hover:text-white px-4 py-3 rounded-2xl text-sm font-medium transition">
              <i className="fa-solid fa-magnifying-glass text-xs"></i> Discover
            </Link>
            <Link to="/my-meals" className="w-full flex items-center gap-3 bg-[#D47559] text-white px-4 py-3 rounded-2xl font-medium text-sm shadow-sm">
              <i className="fa-solid fa-receipt text-xs"></i> My meals
            </Link>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C3A34]">Your Ordered Meals</h2>
          <span className="bg-[#1C3A34] text-white text-xs font-bold px-3 py-1 rounded-full">
            {orderedMeals.length} Meals Active
          </span>
        </div>

        {orderedMeals.length === 0 ? (
          <div className="bg-white p-8 rounded-3xl border border-black/5 text-center max-w-lg">
            <i className="fa-solid fa-bowl-rice text-4xl text-[#E6B37C] mb-3"></i>
            <h3 className="font-serif text-xl font-bold text-[#1C3A34] mb-1">No active orders right now</h3>
            <p className="text-xs text-gray-500 mb-6">Explore local kitchens in your neighborhood and order fresh home-cooked meals.</p>
            <Link to="/" className="bg-[#1C3A34] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#112623] transition inline-block">
              Explore Kitchens
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {orderedMeals.map((item) => (
              <div key={item.orderId} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm relative flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold tracking-widest text-[#D47559] uppercase">{item.cuisine}</span>
                  <h4 className="font-serif text-xl font-bold text-[#1C3A34] mb-1">{item.name}</h4>
                  <p className="text-xs text-gray-400 mb-4">{item.kitchenName}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-[#1C3A34]">₹{item.price}</span>
                  <button 
                    onClick={() => removeMeal(item.orderId)}
                    className="text-xs text-red-500 font-bold hover:underline"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default MyMeals;