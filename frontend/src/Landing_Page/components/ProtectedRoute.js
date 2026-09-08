

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  // 1. Agar user logged in nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Case-insensitive Role Check (Supports "admin" & "ADMIN")
  if (allowedRoles) {
    const userRole = user.role?.toLowerCase();
    const formattedAllowedRoles = allowedRoles.map((r) => r.toLowerCase());

    if (!formattedAllowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
