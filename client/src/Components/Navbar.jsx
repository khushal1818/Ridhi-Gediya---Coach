import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Package,
  Phone,
  LogIn,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../asset/ridhi.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  // ================= LOCAL STORAGE =================
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const isLogin = localStorage.getItem("isLogin");

  // ================= LOGOUT =================
  const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");

    toast.success("Logout Successful 👋");

    setOpen(false);
    setDropdown(false);

    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fefae0]/95 backdrop-blur-md shadow-md border-b border-[#606c38]/20 animate-fadeDown">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-[#606c38] shadow-md transition duration-300 hover:scale-105"
            />

            <div>
              <h1 className="text-lg md:text-2xl font-bold text-[#283618] leading-tight">
                Ridhi Gediya
              </h1>

              <p className="text-sm md:text-base text-[#606c38] font-medium">
                Coach
              </p>
            </div>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-8 font-medium text-[#283618]">
            {/* HOME */}
            <a
              href="#hero"
              className="relative flex items-center gap-1 hover:text-[#606c38] transition duration-300 group"
            >
              <Home size={18} />
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#606c38] transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              className="relative flex items-center gap-1 hover:text-[#606c38] transition duration-300 group"
            >
              <Info size={18} />
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#606c38] transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* REVIEW */}
            <a
              href="#review"
              className="relative flex items-center gap-1 hover:text-[#606c38] transition duration-300 group"
            >
              <Package size={18} />
              Review
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#606c38] transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              className="relative flex items-center gap-1 hover:text-[#606c38] transition duration-300 group"
            >
              <Phone size={18} />
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#606c38] transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* ================= LOGIN / USER ================= */}
            {!isLogin ? (
              <Link
                to="/login"
                className="bg-[#606c38] text-[#fefae0] px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-[#283618] transition duration-300 shadow-md hover:scale-105"
              >
                <LogIn size={18} />
                Login
              </Link>
            ) : (
              <div className="relative">
                {/* USER PROFILE */}
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-3 bg-[#606c38]/10 hover:bg-[#606c38]/20 px-3 py-2 rounded-full cursor-pointer transition duration-300 border border-[#606c38]/20"
                >
                  {/* AVATAR */}
                  <div className="h-11 w-11 rounded-full bg-[#606c38] text-[#fefae0] flex items-center justify-center text-lg font-bold shadow-md">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>

                  {/* NAME */}
                  <div className="hidden lg:flex flex-col leading-tight">
                    <span className="font-semibold text-[#283618] text-sm">
                      {user?.name}
                    </span>

                    <span className="text-xs text-[#606c38]">Logged In</span>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-[#606c38] transition duration-300 ${
                      dropdown ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* DROPDOWN */}
                {dropdown && (
                  <div className="absolute right-0 top-16 w-64 bg-white rounded-2xl shadow-2xl border border-[#606c38]/20 overflow-hidden animate-fadeUp">
                    {/* USER INFO */}
                    <div className="px-5 py-4 bg-[#606c38]/10 border-b border-[#606c38]/10">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-[#606c38] text-[#fefae0] flex items-center justify-center text-xl font-bold">
                          {user?.name?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#283618]">
                            {user?.name}
                          </h3>

                          <p className="text-sm text-[#606c38]">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* LOGOUT */}
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-5 py-4 text-red-500 hover:bg-red-50 transition duration-300 font-medium"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#283618] transition duration-300 hover:scale-110"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden mt-5 bg-white rounded-2xl shadow-xl border border-[#606c38]/10 overflow-hidden animate-fadeUp">
            {/* USER INFO */}
            {isLogin && user && (
              <div className="flex items-center gap-4 px-5 py-4 bg-[#606c38]/10 border-b border-[#606c38]/10">
                <div className="h-14 w-14 rounded-full bg-[#606c38] text-[#fefae0] flex items-center justify-center text-xl font-bold shadow-md">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="font-semibold text-[#283618] text-lg">
                    {user?.name}
                  </h2>

                  <p className="text-sm text-[#606c38]">{user?.email}</p>
                </div>
              </div>
            )}

            {/* MENU ITEMS */}
            <div className="flex flex-col p-5 gap-5 text-[#283618] font-medium">
              <a
                href="#hero"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:text-[#606c38] transition duration-300"
              >
                <Home size={20} />
                Home
              </a>

              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:text-[#606c38] transition duration-300"
              >
                <Info size={20} />
                About
              </a>

              <a
                href="#review"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:text-[#606c38] transition duration-300"
              >
                <Package size={20} />
                Review
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:text-[#606c38] transition duration-300"
              >
                <Phone size={20} />
                Contact
              </a>

              {/* LOGIN / LOGOUT */}
              {!isLogin ? (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="bg-[#606c38] text-[#fefae0] py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-[#283618] transition duration-300"
                >
                  <LogIn size={18} />
                  Login
                </Link>
              ) : (
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition duration-300"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
