

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Pre-defined testing accounts
  const defaultUsers = [
    {
      id: "cook_1",
      email: "cook@homefeast.com",
      password: "cook123",
      fullName: "Sanjay Sharma",
      role: "cook",
      status: "approved",
      isVerified: true,
    },
    {
      id: "admin_1",
      email: "admin@homefeast.com",
      password: "admin123",
      fullName: "System Admin",
      role: "admin",
      status: "active",
      isVerified: true,
    },
    {
      id: "eater_1",
      email: "customer@homefeast.com",
      password: "user123",
      fullName: "Mahima Jethva",
      role: "eater",
      status: "active",
      isVerified: true,
    },
  ];

  // Currently Active Logged-in User (Alias variable as user for UI compatibility)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("hf_user");
    return saved ? JSON.parse(saved) : null;
  });

  // All registered accounts
  const [allUsers, setAllUsers] = useState(() => {
    const saved = localStorage.getItem("hf_all_users");
    return saved ? JSON.parse(saved) : defaultUsers;
  });

  // Active Kitchen Cards
  const [kitchenCards, setKitchenCards] = useState(() => {
    const saved = localStorage.getItem("hf_kitchens");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: "k1",
            cookId: "cook_1",
            cookName: "Sanjay’s North Table",
            cuisine: "NORTH INDIAN",
            city: "Mumbai",
            price: "165",
            subscriptionPrice: "3800",
            desc: "Slow-cooked Punjabi comfort food made fresh daily.",
            bgColor: "bg-[#E6B37C]",
          },
        ];
  });

  // Admin Notifications
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("hf_notifications");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            message: "New Eater Mahima Jethva requested verification.",
            time: "Just now",
            read: false,
          },
        ];
  });

  // Sync state changes to LocalStorage
  useEffect(() => {
    localStorage.setItem("hf_user", JSON.stringify(user));
    localStorage.setItem("hf_all_users", JSON.stringify(allUsers));
    localStorage.setItem("hf_kitchens", JSON.stringify(kitchenCards));
    localStorage.setItem("hf_notifications", JSON.stringify(notifications));
  }, [user, allUsers, kitchenCards, notifications]);

  // Combined Robust Login Handler
  const login = (email, password) => {
    let loggedInUser = null;

    // Handle Direct Object Login Case
    if (typeof email === "object" && email !== null) {
      loggedInUser = email;
    } else if (email && typeof email === "string") {
      const cleanEmail = email.trim().toLowerCase();

      // 1. Check if user exists in allUsers list
      const foundUser = allUsers.find(
        (u) => u.email && u.email.toLowerCase() === cleanEmail
      );

      if (foundUser) {
        loggedInUser = foundUser;
      } else {
        // 2. Fallback mock generation for unknown dynamic emails
        const isAdmin = cleanEmail.includes("admin");
        const isCook = cleanEmail.includes("cook");

        loggedInUser = {
          id: Date.now().toString(),
          email: cleanEmail,
          fullName: email.split("@")[0],
          role: isAdmin ? "admin" : isCook ? "cook" : "eater",
          status: "active",
          isVerified: true,
        };
      }
    }

    if (loggedInUser) {
      setUser(loggedInUser);
      return { success: true, user: loggedInUser };
    }

    return { success: false, message: "Invalid Login Credentials!" };
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    localStorage.removeItem("hf_user");
  };

  // Register new user with Admin notification
  const signupUser = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      status: userData.role === "cook" ? "pending" : "active",
      isVerified: userData.role !== "cook",
    };

    setAllUsers((prev) => [...prev, newUser]);

    const newNotif = {
      id: Date.now(),
      message: `New ${userData.role.toUpperCase()} Request: ${userData.fullName} registered.`,
      time: "Just now",
      read: false,
    };
    setNotifications((prev) => [newNotif, ...prev]);

    setUser(newUser);
    return newUser;
  };

  // Toggle User Status (Admin Functionality)
  const toggleUserStatus = (userId, newStatus) => {
    setAllUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, status: newStatus } : u))
    );

    if (user && user.id === userId) {
      setUser((prev) => ({ ...prev, status: newStatus }));
    }
  };

  // Add Kitchen Card (Cook Functionality)
  const addKitchenCard = (cardData) => {
    const newCard = {
      ...cardData,
      id: "k_" + Date.now(),
      cookId: user?.id,
      cookName: user?.fullName || "Home Cook",
    };
    setKitchenCards((prev) => [newCard, ...prev]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        currentUser: user, // Alias provided for backwards compatibility
        allUsers,
        kitchenCards,
        notifications,
        login,
        logout,
        signupUser,
        toggleUserStatus,
        addKitchenCard,
        setNotifications,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);