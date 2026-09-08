
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF6EF] flex flex-col justify-center items-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 max-w-md w-full">
        <h2 className="font-serif text-3xl font-bold text-[#1C3A34] mb-2">Create Account</h2>
        <p className="text-xs text-gray-500 mb-6">Join HomeFeast to discover home-cooked food nearby.</p>
        
        {/* Form Inputs */}
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl mb-3 text-xs" />
        <input type="email" placeholder="Email address" className="w-full p-3 border rounded-xl mb-3 text-xs" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl mb-4 text-xs" />
        
        <button className="w-full bg-[#D47559] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#c26246]">
          Sign Up
        </button>

        <p className="text-xs text-center mt-4 text-gray-500">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-[#1C3A34] font-bold underline">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;