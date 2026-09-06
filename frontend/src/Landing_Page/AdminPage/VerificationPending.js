import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function VerificationPending() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF6EF] flex items-center justify-center p-6 text-center font-sans">
      <div className="bg-white p-8 rounded-3xl border border-black/5 max-w-md w-full shadow-lg">
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 animate-bounce">
          <i className="fa-solid fa-[#1C3A34] fa-user-clock"></i>
        </div>

        <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Waiting for Admin Approval
        </span>

        <h2 className="font-serif text-2xl font-bold text-[#1C3A34] mt-3 mb-2">
          Registration Received!
        </h2>

        <p className="text-xs text-gray-500 leading-relaxed mb-6">
          Hello{" "}
          <strong>
            {currentUser?.fullName || currentUser?.name || "User"}
          </strong>
          , your request to join as a{" "}
          <strong className="uppercase text-[#D47559]">
            {currentUser?.role || "Cook"}
          </strong>{" "}
          has been sent to the Admin. Notification send ho gaya hai, Admin ke
          approve karte hi dashboard unlock ho jaayega.
        </p>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-[#1C3A34] text-white py-3 rounded-xl text-xs font-bold hover:bg-[#112623]"
          >
            Check Approval Status
          </button>

          {/* Admin Verification Alert for Cook */}
          {currentUser &&
            (currentUser.role === "cook" || currentUser.role === "Cook") &&
            !currentUser.isVerified && (
              <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-3 text-xs mb-4 rounded-r-xl flex justify-between items-center">
                <span>
                  ⚠️ Your Cook profile is pending Admin Verification. Dashboard
                  features will unlock once approved.
                </span>
                <button
                  onClick={() => navigate("/cook-dashboard")}
                  className="bg-amber-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold"
                >
                  View Status
                </button>
              </div>
            )}

          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl text-xs font-bold hover:bg-gray-200"
          >
            Log Out & Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationPending;
