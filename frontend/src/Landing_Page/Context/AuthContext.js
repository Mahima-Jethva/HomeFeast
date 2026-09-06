// // // import React, { createContext, useContext, useState, useEffect } from 'react';

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(() => {
// // //     const savedUser = localStorage.getItem('homefeast_user');
// // //     return savedUser ? JSON.parse(savedUser) : null;
// // //   });

// // //   const login = (userData) => {
// // //     setUser(userData);
// // //     localStorage.setItem('homefeast_user', JSON.stringify(userData));
// // //   };

// // //   const logout = () => {
// // //     setUser(null);
// // //     localStorage.removeItem('homefeast_user');
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);

// // import React, { createContext, useContext, useState, useEffect } from "react";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {

// //   // Pre-defined users for testing (Cook, Admin, Customer)
// //   const defaultUsers = [
// //     {
// //       email: "cook@homefeast.com",
// //       password: "cook123",
// //       fullName: "Farah Khan",
// //       role: "cook",
// //       status: "approved", // 'pending' ya 'approved' check karne ke liye
// //       isVerified: true
// //     },
// //     {
// //       email: "admin@homefeast.com",
// //       password: "admin123",
// //       fullName: "System Admin",
// //       role: "admin",
// //       status: "active",
// //       isVerified: true
// //     },
// //     {
// //       email: "customer@homefeast.com",
// //       password: "user123",
// //       fullName: "Mahima Jethva",
// //       role: "eater",
// //       status: "active",
// //       isVerified: true
// //     }
// //   ];
// //   // Current Logged-in User
// //   const [currentUser, setCurrentUser] = useState(() => {
// //     const saved = localStorage.getItem("hf_user");
// //     return saved ? JSON.parse(saved) : null;
// //   });

// //   // Master Users List (Cooks & Eaters)
// //   const [allUsers, setAllUsers] = useState(() => {
// //     const saved = localStorage.getItem("hf_all_users");
// //     return saved
// //       ? JSON.parse(saved)
// //       : [
// //           {
// //             id: "1",
// //             name: "Sanjay Sharma",
// //             email: "sanjay@cook.com",
// //             role: "cook",
// //             status: "approved",
// //           },
// //           {
// //             id: "2",
// //             name: "Mahima Jethva",
// //             email: "mahima@gmail.com",
// //             role: "eater",
// //             status: "pending",
// //           },
// //         ];
// //   });

// //   // Live Kitchen/Food Cards (Dono User & Admin ko dikhenge)
// //   const [kitchenCards, setKitchenCards] = useState(() => {
// //     const saved = localStorage.getItem("hf_kitchens");
// //     return saved
// //       ? JSON.parse(saved)
// //       : [
// //           {
// //             id: "k1",
// //             cookId: "1",
// //             cookName: "Sanjay’s North Table",
// //             cuisine: "NORTH INDIAN",
// //             city: "Mumbai",
// //             price: "165",
// //             subscriptionPrice: "3800", // Monthly sub
// //             desc: "Slow-cooked Punjabi comfort food made fresh daily.",
// //             bgColor: "bg-[#E6B37C]",
// //           },
// //         ];
// //   });

// //   // Admin Instant Notifications List
// //   const [notifications, setNotifications] = useState(() => {
// //     const saved = localStorage.getItem("hf_notifications");
// //     return saved
// //       ? JSON.parse(saved)
// //       : [
// //           {
// //             id: 1,
// //             message: "New Eater Mahima Jethva requested verification.",
// //             time: "Just now",
// //             read: false,
// //           },
// //         ];
// //   });

// //   // Sync to LocalStorage
// //   useEffect(() => {
// //     localStorage.setItem("hf_user", JSON.stringify(currentUser));
// //     localStorage.setItem("hf_all_users", JSON.stringify(allUsers));
// //     localStorage.setItem("hf_kitchens", JSON.stringify(kitchenCards));
// //     localStorage.setItem("hf_notifications", JSON.stringify(notifications));
// //   }, [currentUser, allUsers, kitchenCards, notifications]);

// //   // Signup with Instant Notification to Admin
// //   const signupUser = (userData) => {
// //     const newUser = {
// //       ...userData,
// //       id: Date.now().toString(),
// //       status: "pending", // Default verification state
// //     };

// //     setAllUsers((prev) => [...prev, newUser]);

// //     // Trigger Instant Admin Notification
// //     const newNotif = {
// //       id: Date.now(),
// //       message: `New ${userData.role.toUpperCase()} Request: ${userData.fullName} wants to join!`,
// //       time: "Just now",
// //       read: false,
// //     };
// //     setNotifications((prev) => [newNotif, ...prev]);

// //     // Set as current logged in user (Will see verification pending screen)
// //     setCurrentUser(newUser);
// //   };

// //   // Admin Actions: Approve/Reject User
// //   const toggleUserStatus = (userId, newStatus) => {
// //     setAllUsers((prev) =>
// //       prev.map((u) => (u.id === userId ? { ...u, status: newStatus } : u)),
// //     );

// //     // Update active user state if currently logged in
// //     if (currentUser && currentUser.id === userId) {
// //       setCurrentUser((prev) => ({ ...prev, status: newStatus }));
// //     }
// //   };

// //   // Cook Action: Add New Kitchen Card / Subscription Offer
// //   const addKitchenCard = (cardData) => {
// //     const newCard = {
// //       ...cardData,
// //       id: "k_" + Date.now(),
// //       cookId: currentUser?.id,
// //       cookName: currentUser?.name || "Home Cook",
// //     };
// //     setKitchenCards((prev) => [newCard, ...prev]);
// //   };

// //   // const login = (user) => setCurrentUser(user);
// //   const login = (userData) => {
// //     setCurrentUser(userData);
// //     localStorage.setItem("currentUser", JSON.stringify(userData));
// //   };
// //   const logout = () => setCurrentUser(null);

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         currentUser,
// //         allUsers,
// //         kitchenCards,
// //         notifications,
// //         signupUser,
// //         toggleUserStatus,
// //         addKitchenCard,
// //         login,
// //         logout,
// //         setNotifications,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);


// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // Pre-defined testing accounts
//   const defaultUsers = [
//     {
//       id: "cook_1",
//       email: "cook@homefeast.com",
//       password: "cook123",
//       fullName: "Farah Khan",
//       role: "cook",
//       status: "approved",
//       isVerified: true,
//     },
//     {
//       id: "admin_1",
//       email: "admin@homefeast.com",
//       password: "admin123",
//       fullName: "System Admin",
//       role: "admin",
//       status: "active",
//       isVerified: true,
//     },
//     {
//       id: "eater_1",
//       email: "customer@homefeast.com",
//       password: "user123",
//       fullName: "Mahima Jethva",
//       role: "eater",
//       status: "active",
//       isVerified: true,
//     },
//   ];

//   // Currently Active Logged-in User
//   const [currentUser, setCurrentUser] = useState(() => {
//     const saved = localStorage.getItem("hf_user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   // All registered accounts
//   const [allUsers, setAllUsers] = useState(() => {
//     const saved = localStorage.getItem("hf_all_users");
//     return saved ? JSON.parse(saved) : defaultUsers;
//   });

//   // Active Kitchen Cards
//   const [kitchenCards, setKitchenCards] = useState(() => {
//     const saved = localStorage.getItem("hf_kitchens");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           {
//             id: "k1",
//             cookId: "cook_1",
//             cookName: "Sanjay’s North Table",
//             cuisine: "NORTH INDIAN",
//             city: "Mumbai",
//             price: "165",
//             subscriptionPrice: "3800",
//             desc: "Slow-cooked Punjabi comfort food made fresh daily.",
//             bgColor: "bg-[#E6B37C]",
//           },
//         ];
//   });

//   // Admin Notifications
//   const [notifications, setNotifications] = useState(() => {
//     const saved = localStorage.getItem("hf_notifications");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           {
//             id: 1,
//             message: "New Eater Mahima Jethva requested verification.",
//             time: "Just now",
//             read: false,
//           },
//         ];
//   });

//   // Sync state changes to LocalStorage
//   useEffect(() => {
//     localStorage.setItem("hf_user", JSON.stringify(currentUser));
//     localStorage.setItem("hf_all_users", JSON.stringify(allUsers));
//     localStorage.setItem("hf_kitchens", JSON.stringify(kitchenCards));
//     localStorage.setItem("hf_notifications", JSON.stringify(notifications));
//   }, [currentUser, allUsers, kitchenCards, notifications]);

//   // Login handler validating default & newly created users
//   const login = (email, password) => {
//     const foundUser = allUsers.find(
//       (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
//     );

//     if (foundUser) {
//       setCurrentUser(foundUser);
//       return { success: true, user: foundUser };
//     }

//     return { success: false, message: "Invalid email or password!" };
//   };

//   // Logout handler
//   const logout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("hf_user");
//   };

//   // Register new user with Admin notification
//   const signupUser = (userData) => {
//     const newUser = {
//       ...userData,
//       id: Date.now().toString(),
//       status: userData.role === "cook" ? "pending" : "active",
//       isVerified: userData.role !== "cook",
//     };

//     setAllUsers((prev) => [...prev, newUser]);

//     const newNotif = {
//       id: Date.now(),
//       message: `New ${userData.role.toUpperCase()} Request: ${userData.fullName} registered.`,
//       time: "Just now",
//       read: false,
//     };
//     setNotifications((prev) => [newNotif, ...prev]);

//     setCurrentUser(newUser);
//     return newUser;
//   };

//   // Toggle User Status (Admin Functionality)
//   const toggleUserStatus = (userId, newStatus) => {
//     setAllUsers((prev) =>
//       prev.map((u) => (u.id === userId ? { ...u, status: newStatus } : u))
//     );

//     if (currentUser && currentUser.id === userId) {
//       setCurrentUser((prev) => ({ ...prev, status: newStatus }));
//     }
//   };

//   // Add Kitchen Card (Cook Functionality)
//   const addKitchenCard = (cardData) => {
//     const newCard = {
//       ...cardData,
//       id: "k_" + Date.now(),
//       cookId: currentUser?.id,
//       cookName: currentUser?.fullName || "Home Cook",
//     };
//     setKitchenCards((prev) => [newCard, ...prev]);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         allUsers,
//         kitchenCards,
//         notifications,
//         login,
//         logout,
//         signupUser,
//         toggleUserStatus,
//         addKitchenCard,
//         setNotifications,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // Pre-defined testing accounts with specific Cook & Customer names
//   const defaultUsers = [
//     {
//       id: "cook_1",
//       email: "cook@homefeast.com",
//       password: "cook123",
//       fullName: "Sanjay Sharma", // Cook Name
//       role: "cook",
//       status: "approved",
//       isVerified: true,
//     },
//     {
//       id: "admin_1",
//       email: "admin@homefeast.com",
//       password: "admin123",
//       fullName: "System Admin",
//       role: "admin",
//       status: "active",
//       isVerified: true,
//     },
//     {
//       id: "eater_1",
//       email: "customer@homefeast.com",
//       password: "user123",
//       fullName: "Mahima Jethva", // Customer Name
//       role: "eater",
//       status: "active",
//       isVerified: true,
//     },
//   ];

//   // Currently Active Logged-in User
//   const [currentUser, setCurrentUser] = useState(() => {
//     const saved = localStorage.getItem("hf_user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   // All registered accounts
//   const [allUsers, setAllUsers] = useState(() => {
//     const saved = localStorage.getItem("hf_all_users");
//     return saved ? JSON.parse(saved) : defaultUsers;
//   });

//   // Active Kitchen Cards mapped to Cook Sanjay Sharma
//   const [kitchenCards, setKitchenCards] = useState(() => {
//     const saved = localStorage.getItem("hf_kitchens");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           {
//             id: "k1",
//             cookId: "cook_1",
//             cookName: "Sanjay’s North Table",
//             cuisine: "NORTH INDIAN",
//             city: "Mumbai",
//             price: "165",
//             subscriptionPrice: "3800",
//             desc: "Slow-cooked Punjabi comfort food made fresh daily.",
//             bgColor: "bg-[#E6B37C]",
//           },
//         ];
//   });

//   // Admin Notifications
//   const [notifications, setNotifications] = useState(() => {
//     const saved = localStorage.getItem("hf_notifications");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           {
//             id: 1,
//             message: "New Eater Mahima Jethva requested verification.",
//             time: "Just now",
//             read: false,
//           },
//         ];
//   });

//   // Sync state changes to LocalStorage
//   useEffect(() => {
//     localStorage.setItem("hf_user", JSON.stringify(currentUser));
//     localStorage.setItem("hf_all_users", JSON.stringify(allUsers));
//     localStorage.setItem("hf_kitchens", JSON.stringify(kitchenCards));
//     localStorage.setItem("hf_notifications", JSON.stringify(notifications));
//   }, [currentUser, allUsers, kitchenCards, notifications]);

//   // Login handler validating user logic
// //   const login = (email, password) => {
// //   // Defensive Check: Ensure email is a string before calling .toLowerCase()
// //   if (!email || typeof email !== "string") {
// //     return { success: false, message: "Please enter a valid email address!" };
// //   }

// //   const foundUser = allUsers.find(
// //     (u) =>
// //       u.email &&
// //       u.email.toLowerCase() === email.trim().toLowerCase() &&
// //       u.password === password
// //   );

// //   if (foundUser) {
// //     setCurrentUser(foundUser);
// //     return { success: true, user: foundUser };
// //   }

// //   return { success: false, message: "Invalid email or password!" };
// // };

//     const login = (email, password) => {
    
//     let loggedInUser = null;

//     if (typeof email === 'object') {
//       loggedInUser = email;
//     } else {
//       const isAdmin = email.toLowerCase().includes('admin');
//       const isCook = email.toLowerCase().includes('cook');

//       loggedInUser = {
//         id: Date.now(),
//         email: email,
//         name: email.split('@')[0],
//         role: isAdmin ? 'admin' : (isCook ? 'cook' : 'eater')
//       };
//     }

//     setUser(loggedInUser);
//     localStorage.setItem('currentUser', JSON.stringify(loggedInUser));

//     return {
//       success: true,
//       user: loggedInUser
//     };
//   };
//   // Logout handler
//   const logout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("hf_user");
//   };

//   // Register new user with Admin notification
//   const signupUser = (userData) => {
//     const newUser = {
//       ...userData,
//       id: Date.now().toString(),
//       status: userData.role === "cook" ? "pending" : "active",
//       isVerified: userData.role !== "cook",
//     };

//     setAllUsers((prev) => [...prev, newUser]);

//     const newNotif = {
//       id: Date.now(),
//       message: `New ${userData.role.toUpperCase()} Request: ${userData.fullName} registered.`,
//       time: "Just now",
//       read: false,
//     };
//     setNotifications((prev) => [newNotif, ...prev]);

//     setCurrentUser(newUser);
//     return newUser;
//   };

//   // Toggle User Status (Admin Functionality)
//   const toggleUserStatus = (userId, newStatus) => {
//     setAllUsers((prev) =>
//       prev.map((u) => (u.id === userId ? { ...u, status: newStatus } : u))
//     );

//     if (currentUser && currentUser.id === userId) {
//       setCurrentUser((prev) => ({ ...prev, status: newStatus }));
//     }
//   };

//   // Add Kitchen Card (Cook Functionality)
//   const addKitchenCard = (cardData) => {
//     const newCard = {
//       ...cardData,
//       id: "k_" + Date.now(),
//       cookId: currentUser?.id,
//       cookName: currentUser?.fullName || "Home Cook",
//     };
//     setKitchenCards((prev) => [newCard, ...prev]);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         allUsers,
//         kitchenCards,
//         notifications,
//         login,
//         logout,
//         signupUser,
//         toggleUserStatus,
//         addKitchenCard,
//         setNotifications,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

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