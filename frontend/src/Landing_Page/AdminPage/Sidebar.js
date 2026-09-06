import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const role = user?.role?.toLowerCase();

  return (
    <aside className="w-64 bg-[#1C3A34] text-white p-6 min-h-screen">
      <h1 className="text-2xl font-serif font-bold mb-8">HomeFeast</h1>

      <nav className="space-y-3">
        <Link 
          to="/" 
          className={`block p-3 rounded-xl text-xs font-semibold ${location.pathname === '/' ? 'bg-[#D47559]' : 'hover:bg-white/10'}`}
        >
          Discover
        </Link>

        {/* Admin Dashboard Link */}
        {role === 'admin' && (
          <Link 
            to="/admin-dashboard" 
            className={`block p-3 rounded-xl text-xs font-semibold ${
              location.pathname === '/admin-dashboard' 
                ? 'bg-[#D47559]' 
                : 'bg-amber-500/20 text-amber-200 hover:bg-amber-500/30'
            }`}
          >
            🛡️ Admin Verification Hub
          </Link>
        )}

        {/* Cook Dashboard Link */}
        {role === 'cook' && (
          <Link 
            to="/cook-dashboard" 
            className={`block p-3 rounded-xl text-xs font-semibold ${
              location.pathname === '/cook-dashboard' ? 'bg-[#D47559]' : 'hover:bg-white/10'
            }`}
          >
            🍳 Cook Dashboard
          </Link>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;