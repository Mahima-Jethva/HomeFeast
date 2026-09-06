// // // // // Register.jsx
// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { useAuth } from "../Context/AuthContext";

// // // // function Login() {
// // // //   const navigate = useNavigate();
// // // //   const { login } = useAuth();
// // // //   // const navigate = useNavigate();

// // // //   const handleSignup = (e) => {
// // // //     e.preventDefault();

// // // //     // User credentials / state set karein
// // // //     const newUser = { name: "User", role: "user" };

// // // //     login(newUser); // AuthContext update karein
// // // //     navigate("/"); // Direct Home page par bhejein
// // // //   };

// // // //   //   localStorage.setItem(
// // // //   //     "user",
// // // //   //     JSON.stringify({ name: formData.fullName || formData.name }),
// // // //   //   );
// // // //   //   navigate("/");
// // // //   return (
// // // //     <div className="min-h-screen bg-[#FAF6EF] flex flex-col justify-center items-center p-6">
// // // //       <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 max-w-md w-full">
// // // //         <h2 className="font-serif text-3xl font-bold text-[#1C3A34] mb-2">
// // // //           Create Account
// // // //         </h2>
// // // //         <p className="text-xs text-gray-500 mb-6">
// // // //           Join HomeFeast to discover home-cooked food nearby.
// // // //         </p>

// // // //         {/* Form Inputs */}
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Full Name"
// // // //           className="w-full p-3 border rounded-xl mb-3 text-xs"
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email address"
// // // //           className="w-full p-3 border rounded-xl mb-3 text-xs"
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           className="w-full p-3 border rounded-xl mb-4 text-xs"
// // // //         />

// // // //         <button className="w-full bg-[#D47559] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#c26246]">
// // // //           Sign Up
// // // //         </button>

// // // //         <p className="text-xs text-center mt-4 text-gray-500">
// // // //           Already have an account?{" "}
// // // //           <button
// // // //             onClick={() => navigate("/signup")}
// // // //             className="text-[#1C3A34] font-bold underline"
// // // //           >
// // // //             Sign In
// // // //           </button>
// // // //         </p>
// // // //         <form onSubmit={handleSignup}>
// // // //           <button type="submit">Sign Up</button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;


// // // import React, { useState } from "react";
// // // import { useNavigate, Link } from "react-router-dom";
// // // import { useAuth } from "../Context/AuthContext";

// // // function Login() {
// // //   const navigate = useNavigate();
// // //   const { login } = useAuth();
  
// // //   const [credentials, setCredentials] = useState({ email: '', password: '' });

// // //   const handleChange = (e) => {
// // //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// // //   };

// // //   const handleLogin = (e) => {
// // //     e.preventDefault();

// // //     // Default mock user if fields are empty or fill dynamic email
// // //     const loggedUser = {
// // //       name: credentials.email ? credentials.email.split('@')[0] : "Mahima",
// // //       email: credentials.email || "mahimajethva@gmail.com",
// // //       role: "Customer"
// // //     };

// // //     login(loggedUser);
// // //     navigate("/");
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#FAF6EF] flex flex-col justify-center items-center p-6 font-sans">
// // //       <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 max-w-md w-full">
        
// // //         <h2 className="font-serif text-3xl font-bold text-[#1C3A34] mb-2">
// // //           Welcome Back
// // //         </h2>
// // //         <p className="text-xs text-gray-500 mb-6">
// // //           Sign in to your HomeFeast account.
// // //         </p>

// // //         <form onSubmit={handleLogin} className="space-y-4">
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             placeholder="Email address"
// // //             value={credentials.email}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none"
// // //           />
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             placeholder="Password"
// // //             value={credentials.password}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none"
// // //           />

// // //           <button 
// // //             type="submit" 
// // //             className="w-full bg-[#D47559] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#c26246] transition cursor-pointer"
// // //           >
// // //             Sign In
// // //           </button>
// // //         </form>

// // //         <p className="text-xs text-center mt-6 text-gray-500">
// // //           Don't have an account?{" "}
// // //           <Link to="/signup" className="text-[#1C3A34] font-bold underline">
// // //             Sign Up
// // //           </Link>
// // //         </p>

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // import React, { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { useAuth } from "../Context/AuthContext"; // Verify path according to your folder structure

// // function Login() {
// //   const navigate = useNavigate();
// //   const { login } = useAuth();
// //   const [formData, setFormData] = useState({ email: '', password: '' });


// //   const [credentials, setCredentials] = useState({ email: "", password: "" });
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const handleChange = (e) => {
// //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //     setErrorMessage("");
// //   };


// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Perform authentication logic or API call here
// //     if (formData.email && formData.password) {
// //       // Dynamic Redirect: Change path to '/' or '/cook-dashboard'
// //       navigate('/'); 
// //     }
// //   };

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     const response = login(credentials.email, credentials.password);

// //     if (response.success) {
// //       const role = response.user.role.toLowerCase();

// //       // Dynamic Role-Based Redirects
// //       if (role === "admin") {
// //         navigate("/admin-dashboard");
// //       } else if (role === "cook") {
// //         navigate("/cook-dashboard");
// //       } else {
// //         navigate("/");
// //       }
// //     } else {
// //       setErrorMessage(response.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#FAF6EF] flex flex-col justify-center items-center p-6 font-sans">
// //       <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 max-w-md w-full">
// //         {/* Header Icon */}
// //         <div className="w-12 h-12 bg-[#D47559] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
// //           <i className="fa-solid fa-utensils"></i>
// //         </div>

// //         <h2 className="font-serif text-3xl font-bold text-[#1C3A34] mb-2 text-center">
// //           Welcome Back
// //         </h2>
// //         <p className="text-xs text-gray-500 mb-6 text-center">
// //           Sign in to your HomeFeast account.
// //         </p>

// //         {errorMessage && (
// //           <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-600 rounded-xl text-xs text-center font-medium">
// //             {errorMessage}
// //           </div>
// //         )}

// //         <form onSubmit={handleLogin} className="space-y-4">
// //           <div>
// //             <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
// //               EMAIL ADDRESS
// //             </label>
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="e.g. cook@homefeast.com"
// //               value={credentials.email}
// //               onChange={handleChange}
// //               required
// //               className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
// //               PASSWORD
// //             </label>
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="••••••••"
// //               value={credentials.password}
// //               onChange={handleChange}
// //               required
// //               className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-[#D47559] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#c26246] transition cursor-pointer mt-2"
// //           >
// //             Sign In
// //           </button>
// //         </form>

// //         <p className="text-xs text-center mt-6 text-gray-500">
// //           Don't have an account?{" "}
// //           <Link to="/signup" className="text-[#1C3A34] font-bold underline">
// //             Sign Up
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext"; // Ensure path matches your folder structure

// function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     setErrorMessage("");
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!credentials.email || !credentials.password) {
//       setErrorMessage("Please fill in both email and password.");
//       return;
//     }

//     // Pass credentials to Context login method
//     const response = login(credentials.email, credentials.password);

//     if (response && response.success) {
//       const role = response.user?.role?.toLowerCase();

//       // Role-Based Dynamic Navigation
//       if (role === "admin") {
//         navigate("/admin/dashboard");
//       } else if (role === "cook") {
//         navigate("/cook-dashboard");
//       } else {
//         navigate("/");
//       }
//     } else {
//       // Fallback for simple/mock login if context directly returns user or doesn't return response object
//       const mockUser = {
//         email: credentials.email,
//         name: credentials.email.split("@")[0],
//         role: "eater",
//       };
//       login(mockUser);
//       navigate("/");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FAF6EF] flex flex-col justify-center items-center p-6 font-sans">
//       <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 max-w-md w-full">
//         {/* Header Icon */}
//         <div className="w-12 h-12 bg-[#D47559] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
//           <i className="fa-solid fa-utensils"></i>
//         </div>

//         <h2 className="font-serif text-3xl font-bold text-[#1C3A34] mb-2 text-center">
//           Welcome Back
//         </h2>
//         <p className="text-xs text-gray-500 mb-6 text-center">
//           Sign in to your HomeFeast account.
//         </p>

//         {errorMessage && (
//           <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-600 rounded-xl text-xs text-center font-medium">
//             {errorMessage}
//           </div>
//         )}

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
//               EMAIL ADDRESS
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="e.g. cook@homefeast.com"
//               value={credentials.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
//             />
//           </div>

//           <div>
//             <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
//               PASSWORD
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="••••••••"
//               value={credentials.password}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#D47559] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#c26246] transition cursor-pointer mt-2"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-xs text-center mt-6 text-gray-500">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-[#1C3A34] font-bold underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

    // Pass credentials to Context login method
    const response = login(credentials.email, credentials.password);

    if (response && response.success) {
      const role = response.user?.role?.toLowerCase();

      // FIXED ROUTE PATH: /admin-dashboard
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "cook") {
        navigate("/cook-dashboard");
      } else {
        navigate("/");
      }
    } else {
      // Mock Fallback Check for test Admin accounts
      const isAdminEmail = credentials.email.toLowerCase().includes("admin");
      const userRole = isAdminEmail ? "admin" : "eater";

      const mockUser = {
        email: credentials.email,
        name: credentials.email.split("@")[0],
        role: userRole,
      };

      login(mockUser);

      if (userRole === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EF] flex flex-col justify-center items-center p-6 font-sans">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 max-w-md w-full">
        <div className="w-12 h-12 bg-[#D47559] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
          <i className="fa-solid fa-utensils"></i>
        </div>

        <h2 className="font-serif text-3xl font-bold text-[#1C3A34] mb-2 text-center">
          Welcome Back
        </h2>
        <p className="text-xs text-gray-500 mb-6 text-center">
          Sign in to your HomeFeast account.
        </p>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-600 rounded-xl text-xs text-center font-medium">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. admin@homefeast.com"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-black/10 rounded-xl text-xs bg-[#EEF2F6] focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D47559] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#c26246] transition cursor-pointer mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-center mt-6 text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#1C3A34] font-bold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;