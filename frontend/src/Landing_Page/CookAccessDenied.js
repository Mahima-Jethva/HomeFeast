import React from 'react';
import { Link } from 'react-router-dom';

function CookAccessDenied() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6EF] font-sans">
      
      {/* LEFT SIDEBAR */}
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

          <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3 font-semibold">MORE FROM HOMEFEAST</p>
          <nav>
            <Link to="/access-denied" className="w-full flex items-center gap-3 bg-[#D47559] text-white px-4 py-3 rounded-2xl font-medium text-sm shadow-sm">
              <i className="fa-solid fa-user-check text-xs"></i> I cook for others
            </Link>
          </nav>
        </div>
      </aside>

      {/* RESTRICTED ACCESS CONTENT */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-white p-10 rounded-3xl border border-black/5 shadow-sm max-w-md w-full flex flex-col items-center">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-3xl mb-6">
            <i className="fa-solid fa-lock"></i>
          </div>
          
          <span className="bg-red-100 text-red-700 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Access Restricted
          </span>
          
          <h2 className="font-serif text-2xl font-bold text-[#1C3A34] mb-2">
            Home Cook Dashboard
          </h2>
          
          <p className="text-xs text-gray-500 leading-relaxed mb-6">
            You do not have active home cook privileges. If you are registered as a neighborhood cook, please log in with your verified seller account.
          </p>

          <Link to="/" className="w-full bg-[#1C3A34] text-white py-3 rounded-xl text-xs font-bold hover:bg-[#112623] transition">
            Return to Discover
          </Link>
        </div>
      </main>

    </div>
  );
}

export default CookAccessDenied;