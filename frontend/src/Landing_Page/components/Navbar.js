// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/AuthContext'; // Apne folder structure ke hisab se path verify kar lein

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // LocalStorage se user fetch karna
//     const savedUser = JSON.parse(localStorage.getItem('user'));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-[#1C3A34] text-white shadow-md font-sans">
      
//       {/* Left Section: Brand Logo & Delivery Location */}
//       <div className="flex items-center gap-8">
//         <Link to="/" className="text-2xl font-serif font-bold text-[#FAF6EF] tracking-tight">
//           HomeFeast
//         </Link>

//         <div className="hidden md:flex items-center gap-2 text-xs text-[#FAF6EF]/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
//           <span className="text-[#D47559]">📍</span>
//           <span>Delivering to <strong className="text-white">Indiranagar, Bengaluru</strong></span>
//         </div>
//       </div>

//       {/* Middle Section: Navigation Links */}
//       <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
//         <Link to="/" className="text-[#FAF6EF] hover:text-[#E5B27D] transition-colors">
//           Discover
//         </Link>
//         <Link to="/my-meals" className="text-[#FAF6EF] hover:text-[#E5B27D] transition-colors">
//           My Meals
//         </Link>

//         {/* Role-Based Links (Sirf Logged-in Users ke liye) */}
//         {user?.role === 'cook' && (
//           <Link to="/cook/dashboard" className="text-[#E5B27D] font-semibold hover:underline">
//             Cook Panel
//           </Link>
//         )}
//         {user?.role === 'admin' && (
//           <Link to="/admin/dashboard" className="text-[#E5B27D] font-semibold hover:underline">
//             Admin Panel
//           </Link>
//         )}
//       </div>

//       {/* Right Section: Auth State & Actions */}
//       <div className="flex items-center gap-4 text-sm">
        
//         {/* API Status Indicator */}
//         <span className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
//           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//           API connected
//         </span>

//         {/* Dynamic Auth Section */}
//         {user ? (
//           /* LOGGED IN STATE */
//           <div className="flex items-center gap-4 border-l border-white/10 pl-4">
//             <div className="flex items-center gap-2">
//               {/* Notification Bell Badge */}
//               <div className="relative cursor-pointer p-1.5 rounded-full hover:bg-white/10 transition">
//                 <span className="text-base">🔔</span>
//                 <span className="absolute top-0 right-0 w-4 h-4 bg-[#D47559] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
//                   2
//                 </span>
//               </div>

//               <span className="font-serif text-sm font-bold text-[#1C3A34]">
//               Good day, {user.name.split(' ')[0]}! 👋
//             </span>
//             </div>

//             <button 
//               onClick={handleLogout}
//               className="px-4 py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-medium text-xs transition cursor-pointer shadow-sm"
//             >
//               Log out
//             </button>
//           </div>
//         ) : (
//           /* LOGGED OUT STATE */
//           <div className="flex items-center gap-3 border-l border-white/10 pl-4">
//             <Link 
//               to="/login" 
//               className="px-4 py-2 rounded-xl border border-white/20 text-[#FAF6EF] hover:bg-white/10 transition text-xs font-semibold"
//             >
//               Sign in
//             </Link>
//             <Link 
//               to="/login" 
//               className="px-4 py-2 rounded-xl bg-[#D47559] hover:bg-[#c06449] text-white transition text-xs font-semibold shadow-sm"
//             >
//               Join HomeFeast
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Navbar() {
  const { currentUser, logout, notifications } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const [deliveryLocation, setDeliveryLocation] = useState("Indiranagar, Bengaluru");

  const handleLocationChange = () => {
    const newLocation = prompt("Enter your new delivery location:", deliveryLocation);
    if (newLocation && newLocation.trim() !== "") {
      setDeliveryLocation(newLocation.trim());
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1C3A34] text-white shadow-md font-sans">
      
      {/* Left Section: Brand Logo & Delivery Location */}
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-serif font-bold text-[#FAF6EF] tracking-tight">
          HomeFeast
        </Link>

        <div className="hidden md:flex items-center gap-2 text-xs text-[#FAF6EF]/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <span className="text-[#D47559]">📍 Delivering to</span>
          <span className="underline font-bold text-[#1C3A34]">{deliveryLocation}</span>
          <span className="text-gray-400">▼</span>
        </div>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="text-[#FAF6EF] hover:text-[#E5B27D] transition-colors">
          Discover
        </Link>
        <Link to="/my-meals" className="text-[#FAF6EF] hover:text-[#E5B27D] transition-colors">
          My Meals
        </Link>

        {/* Role-Based Links */}
        {currentUser?.role === 'cook' && currentUser?.status === 'approved' && (
          <Link to="/cook-dashboard" className="text-[#E5B27D] font-semibold hover:underline">
            Cook Panel
          </Link>
        )}
        {currentUser?.role === 'admin' && (
          <Link to="/admin/dashboard" className="text-[#E5B27D] font-semibold hover:underline">
            Admin Panel
          </Link>
        )}
      </div>

      {/* Right Section: Auth State & Actions */}
      <div className="flex items-center gap-4 text-sm">
        
        <span className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          API connected
        </span>

        {/* Dynamic Auth Section */}
        {currentUser ? (
          <div className="flex items-center gap-4 border-l border-white/10 pl-4">
            <div className="flex items-center gap-2">
              <div 
                className="relative cursor-pointer p-1.5 rounded-full hover:bg-white/10 transition"
                onClick={() => currentUser.role === 'admin' && navigate('/admin/dashboard')}
              >
                <span className="text-base">🔔</span>
                {notifications?.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#D47559] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </div>

              <span className="font-serif text-sm font-bold text-[#FAF6EF]">
                Hi, {(currentUser.fullName || currentUser.name || "User").split(' ')[0]}! 👋
              </span>
            </div>

            <button 
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-medium text-xs transition cursor-pointer shadow-sm"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 border-l border-white/10 pl-4">
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-xl border border-white/20 text-[#FAF6EF] hover:bg-white/10 transition text-xs font-semibold"
            >
              Sign in
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 rounded-xl bg-[#D47559] hover:bg-[#c06449] text-white transition text-xs font-semibold shadow-sm"
            >
              Join HomeFeast
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;