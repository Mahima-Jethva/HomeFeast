

import React from 'react';
import { useAuth } from '../Context/AuthContext';

function Dashboard() {
  const { allUsers, toggleUserStatus, notifications, kitchenCards, setNotifications } = useAuth();

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EF] p-6 font-sans">
      
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8 bg-[#1C3A34] text-white p-6 rounded-3xl shadow-sm">
        <div>
          <h1 className="font-serif text-2xl font-bold">Admin Verification Hub</h1>
          <p className="text-xs text-white/60">Control user approvals and monitor live kitchens</p>
        </div>
        
        {/* Instant Notification Badge */}
        <div className="relative">
          <div className="bg-white/10 p-3 rounded-2xl flex items-center gap-2">
            <i className="fa-solid fa-bell text-amber-400"></i>
            <span className="text-xs font-bold">{notifications.length} Alerts</span>
          </div>
        </div>
      </header>

      {/* NOTIFICATION FEED */}
      {notifications.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl mb-8">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">Live System Alerts</h4>
            <button onClick={clearNotifications} className="text-[10px] text-amber-700 font-bold underline">Clear All</button>
          </div>
          <div className="space-y-1">
            {notifications.map(n => (
              <p key={n.id} className="text-xs text-amber-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> {n.message}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* USER VERIFICATION TABLE */}
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#1C3A34] mb-4">Pending Approvals</h3>
          
          <div className="space-y-3">
            {allUsers.map(user => (
              <div key={user.id} className="flex justify-between items-center p-3 bg-[#FAF6EF] rounded-2xl">
                <div>
                  <h4 className="text-xs font-bold text-[#1C3A34]">{user.fullName || user.name}</h4>
                  <p className="text-[10px] text-gray-500 capitalize">{user.email} • <strong className="text-[#D47559]">{user.role}</strong></p>
                </div>

                <div>
                  {user.status === 'pending' ? (
                    <button 
                      onClick={() => toggleUserStatus(user.id, 'approved')}
                      className="bg-green-600 text-white text-[11px] font-bold px-4 py-1.5 rounded-xl hover:bg-green-700 transition"
                    >
                      Approve Fast
                    </button>
                  ) : (
                    <span className="text-[10px] font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIVE PLATFORM STATS & KITCHEN CARDS */}
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#1C3A34] mb-4">Live Kitchen Cards ({kitchenCards.length})</h3>
          
          <div className="space-y-3">
            {kitchenCards.map(k => (
              <div key={k.id} className="p-3 border border-black/5 rounded-2xl flex justify-between items-center">
                <div>
                  <h5 className="text-xs font-bold text-[#1C3A34]">{k.cookName}</h5>
                  <p className="text-[10px] text-gray-400">{k.cuisine} • ₹{k.price}/meal</p>
                </div>
                <span className="text-[10px] bg-[#1C3A34] text-white px-2.5 py-1 rounded-md font-bold">
                  Visible to Users
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;