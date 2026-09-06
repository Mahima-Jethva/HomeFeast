// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import { AuthProvider } from './Landing_Page/Context/AuthContext';
// import { MealProvider } from './Landing_Page/Context/MealContext';

// import Hero from './Landing_Page/DiscoverPage/Hero';
// import ViewKitchen from './Landing_Page/DiscoverPage/ViewKitchen';
// import MyMeals from './Landing_Page/MyMeals/MyMeals';
// import CookAccessDenied from './Landing_Page/CookAccessDenied';
// import Login from './Landing_Page/Auth/Login';
// import Signup from './Landing_Page/Auth/Signup';
// import Register from './Landing_Page/components/Register';

// import CookDashboard from './Landing_Page/CookPage/CookDashboard';
// import AdminDashboard from './Landing_Page/AdminPage/Dashboard';
// import ProtectedRoute from './Landing_Page/components/ProtectedRoute';

// function App() {
//   return (
//     <AuthProvider>
//       <MealProvider>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Hero />} />
//           <Route path="/kitchen/:id" element={<ViewKitchen />} />
//           <Route path="/my-meals" element={<MyMeals />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/access-denied" element={<CookAccessDenied />} />

//           {/* Protected Routes */}
//           <Route 
//             path="/cook-dashboard" 
//             element={
//               <ProtectedRoute allowedRoles={['cook']}>
//                 <CookDashboard />
//               </ProtectedRoute>
//             } 
//           />
//           <Route 
//             path="/admin/dashboard" 
//             element={
//               <ProtectedRoute allowedRoles={['admin']}>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             } 
//           />

//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </MealProvider>
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './Landing_Page/Context/AuthContext';
import { MealProvider } from './Landing_Page/Context/MealContext';

import Hero from './Landing_Page/DiscoverPage/Hero';
import ViewKitchen from './Landing_Page/DiscoverPage/ViewKitchen';
import MyMeals from './Landing_Page/MyMeals/MyMeals';
import CookAccessDenied from './Landing_Page/CookAccessDenied';
import Login from './Landing_Page/Auth/Login';
import Signup from './Landing_Page/Auth/Signup';
import Register from './Landing_Page/components/Register';
import VerificationPending from './Landing_Page/AdminPage/VerificationPending'; // New verification component

import CookDashboard from './Landing_Page/CookPage/CookDashboard';
import AdminDashboard from './Landing_Page/AdminPage/Dashboard';
import ProtectedRoute from './Landing_Page/components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <MealProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/kitchen/:id" element={<ViewKitchen />} />
          <Route path="/my-meals" element={<MyMeals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/access-denied" element={<CookAccessDenied />} />
          <Route path="/pending" element={<VerificationPending />} />

          {/* Protected Routes */}
          <Route 
            path="/cook-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['cook']}>
                <CookDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MealProvider>
    </AuthProvider>
  );
}

export default App;