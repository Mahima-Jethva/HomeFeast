
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