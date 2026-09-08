
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { signupUser, setNotifications } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "eater", // Default role
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Please fill in all required fields!");
      return;
    }

    const newUser = signupUser({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: formData.role.toLowerCase(),
    });

    const role = newUser?.role?.toLowerCase() || formData.role.toLowerCase();

    // Dynamic redirection based on user role
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "cook") {
      navigate("/cook-dashboard");
    } else {
      navigate("/");
    }
  };

  const handleSignup = async (e) => {
  e.preventDefault();
  
  // 1. Regular signup process
  const newUser = await signupUser(formData);

  // 2. Push Real-time Admin Notification
  if (setNotifications) {
    const newAdminNotif = {
      id: Date.now(),
      message: `New Account Created: ${formData.fullName} (${formData.role.toUpperCase()})`,
      time: "Just now",
      read: false
    };

    setNotifications((prev) => [newAdminNotif, ...(prev || [])]);
  }
};

  return (
    <div className="min-h-screen bg-[#FAF6EF] flex justify-center items-center p-6 font-sans">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-black/5 max-w-md w-full text-center">
        <div className="w-12 h-12 bg-[#D47559] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
          <i className="fa-solid fa-utensils"></i>
        </div>

        <h2 className="font-serif text-3xl font-bold text-[#1C3A34]">
          Join HomeFeast
        </h2>
        <p className="text-xs text-gray-500 mt-1 mb-6">
          Create an account to explore home-cooked meals
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-600 rounded-xl text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
              FULL NAME
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Mahima Jethva"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#EEF2F6] rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              placeholder="mahimajethva@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#EEF2F6] rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
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
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#EEF2F6] rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#1C3A34]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#1C3A34] uppercase tracking-wider mb-1">
              I WANT TO
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#FAF6EF] rounded-xl border border-black/10 text-xs text-gray-800 focus:outline-none cursor-pointer"
            >
              <option value="eater">Order Food (Eater)</option>
              <option value="cook">Cook Food (Home Cook)</option>
              <option value="admin">System Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1C3A34] text-white py-3.5 rounded-xl text-xs font-bold hover:bg-[#112623] transition cursor-pointer mt-2"
          >
            Create Account
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#D47559] font-bold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;