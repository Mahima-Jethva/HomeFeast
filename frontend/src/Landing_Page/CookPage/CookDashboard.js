import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CookDashboard() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Karnataka Festive Thali', price: 180, available: true },
    { id: 2, name: 'Everyday Roti Meal', price: 145, available: true }
  ]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6EF] font-sans">
      <aside className="w-full md:w-64 bg-[#1C3A34] text-white p-6 shrink-0">
        <h1 className="font-serif text-2xl font-bold mb-6">HomeFeast Cook</h1>
        <nav className="space-y-3">
          <Link to="/cook-dashboard" className="block px-4 py-2 bg-[#D47559] rounded-xl text-sm font-medium">Dashboard</Link>
          <Link to="/" className="block px-4 py-2 text-white/70 hover:text-white text-sm">Main Site</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="font-serif text-3xl font-bold text-[#1C3A34] mb-6">Cook Control Panel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
            <h3 className="text-gray-500 text-xs font-bold uppercase">Today's Orders</h3>
            <p className="text-3xl font-bold text-[#1C3A34] mt-2">8 Meals</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
            <h3 className="text-gray-500 text-xs font-bold uppercase">Total Earnings</h3>
            <p className="text-3xl font-bold text-[#D47559] mt-2">₹1,420</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#1C3A34] mb-4">Manage Today's Menu</h3>
        <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4 max-w-2xl">
          {menuItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <h4 className="font-bold text-[#1C3A34]">{item.name}</h4>
                <p className="text-xs text-gray-500">₹{item.price}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Available</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CookDashboard;