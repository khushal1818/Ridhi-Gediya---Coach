import React from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, UserPlus, Eye, EyeOff } from "lucide-react";
// import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ArrowLeft } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check existing email
    const userExists = users.find((user) => user.email === form.email);

    if (userExists) {
      toast.error("User already exists");
      return;
    }

    // Add new user
    users.push(form);

    // Save all users
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registration successful 🎉");

    navigate("/login");
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     console.log(form);

  //     const res = await registerUser(form);

  //     localStorage.setItem("token", res.data.token);
  //     localStorage.setItem("user", JSON.stringify(res.data.user));

  //     toast.success("Register success");

  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error.response.data);

  //     toast.error(error.response.data.message);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefae0] px-4">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-[#606c38]/20 text-[#283618] font-medium hover:bg-[#606c38] hover:text-[#fefae0] transition duration-300 hover:scale-105"
      >
        <ArrowLeft size={18} />
        Back Home
      </button>
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-[#606c38]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#283618]">
          Create Account
        </h2>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="text-[#283618] text-sm">Full Name</label>
            <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
              <User size={18} className="text-[#606c38]" />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[#283618] text-sm">Email</label>
            <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
              <Mail size={18} className="text-[#606c38]" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
                required
              />
            </div>
          </div>

          {/* Password */}
          {/* Password */}
          <div>
            <label className="text-[#283618] text-sm">Password</label>
            <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
              <Lock size={18} className="text-[#606c38]" />

              <input
                type={showPassword ? "text" : "password"} // 👈 toggle type
                name="password"
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
                required
              />

              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#606c38] hover:text-[#283618] transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#606c38] text-[#fefae0] py-2 rounded-lg font-semibold hover:bg-[#283618] transition flex items-center justify-center gap-2"
          >
            <UserPlus size={18} /> Register
          </button>

          <hr className="border-[#606c38]" />

          <button
            type="button"
            className="w-full border border-[#606c38] py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#fefae0] transition text-[#283618]"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-[#606c38] text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#283618] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
