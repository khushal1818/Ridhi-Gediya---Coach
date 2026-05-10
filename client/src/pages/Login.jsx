// import React from "react";
// import { Link } from "react-router-dom";
// import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";
// // import { loginUser } from "../api/authApi";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { ArrowLeft } from "lucide-react";

// const Login = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get all users
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     // Find matched user
//     const matchedUser = users.find(
//       (user) => user.email === form.email && user.password === form.password,
//     );

//     // If no user found
//     if (!matchedUser) {
//       toast.error("Please register first or invalid credentials");

//       navigate("/register");

//       return;
//     }

//     // Save login info
//     localStorage.setItem("isLogin", "true");
//     localStorage.setItem("currentUser", JSON.stringify(matchedUser));
//     toast.success(
//       <div>
//         <p>Login successful 🎉</p>
//         <p>Welcome to Riddhi Gediya Coach</p>
//       </div>,
//     );

//     navigate("/");
//   };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const res = await loginUser(form);

//   //     localStorage.setItem("token", res.data.token);
//   //     localStorage.setItem("user", JSON.stringify(res.data.user));

//   //     toast.success(
//   //       <div>
//   //         <p>Login successful</p>
//   //         <p>Welcome to Ridhi Gediya Coach 🎉🎊</p>
//   //       </div>,
//   //     );

//   //     navigate("/");
//   //   } catch (error) {
//   //     const message = error.response?.data?.message;

//   //     toast.error(message);

//   //     // Redirect to register if user not found
//   //     if (message === "User not registered. Please register first.") {
//   //       setTimeout(() => {
//   //         navigate("/register");
//   //       }, 2000);
//   //     }
//   //   }
//   // };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fefae0] px-4">
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-[#606c38]/20 text-[#283618] font-medium hover:bg-[#606c38] hover:text-[#fefae0] transition duration-300 hover:scale-105"
//       >
//         <ArrowLeft size={18} />
//         Back Home
//       </button>
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-[#606c38]">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#283618]">
//           Login
//         </h2>

//         <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//           {/* Email */}
//           <div>
//             <label className="text-[#283618] text-sm">Email</label>
//             <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
//               <Mail size={18} className="text-[#606c38]" />
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-[#283618] text-sm">Password</label>
//             <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
//               <Lock size={18} className="text-[#606c38]" />

//               <input
//                 type={showPassword ? "text" : "password"} // 👈 toggle type
//                 name="password"
//                 onChange={handleChange}
//                 placeholder="Enter password"
//                 className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
//               />

//               {/* Toggle Button */}
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="text-[#606c38] hover:text-[#283618] transition"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Forgot Password */}
//           <div className="flex justify-end text-sm">
//             <a
//               href="#"
//               className="text-[#606c38] hover:text-[#283618] hover:underline"
//             >
//               Forgot password?
//             </a>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#606c38] text-[#fefae0] py-2 rounded-lg font-semibold hover:bg-[#283618] transition flex items-center justify-center gap-2"
//           >
//             <LogIn size={18} /> Login
//           </button>

//           <hr className="border-[#606c38]" />

//           <button
//             type="button"
//             className="w-full border border-[#606c38] py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#fefae0] transition text-[#283618]"
//           >
//             <img
//               src="https://www.svgrepo.com/show/475656/google-color.svg"
//               className="w-5 h-5"
//             />
//             Continue with Google
//           </button>
//         </form>

//         {/* Register Link */}
//         <p className="text-center text-[#606c38] text-sm mt-6">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-[#283618] font-semibold hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Mail,
//   Lock,
//   LogIn,
//   Eye,
//   EyeOff,
//   ArrowLeft,
// } from "lucide-react";
// import { toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   // Handle Input Change
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle Login
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get Registered Users
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     // Find User
//     const matchedUser = users.find(
//       (user) =>
//         user.email === form.email &&
//         user.password === form.password
//     );

//     // User Not Found
//     if (!matchedUser) {
//       toast.error("User not found! Please register first 🚀");

//       setTimeout(() => {
//         navigate("/register");
//       }, 2000);

//       return;
//     }

//     // Save Login Info
//     localStorage.setItem("isLogin", "true");
//     localStorage.setItem(
//       "currentUser",
//       JSON.stringify(matchedUser)
//     );

//     // Separate Data Storage For Each User
//     const userKey = `userData_${matchedUser.email}`;

//     if (!localStorage.getItem(userKey)) {
//       localStorage.setItem(
//         userKey,
//         JSON.stringify({
//           profile: matchedUser,
//           notes: [],
//           progress: [],
//         })
//       );
//     }

//     // Success Message
//     toast.success(
//       <div>
//         <p>Login successful 🎉</p>
//         <p>Welcome to Riddhi Gediya Coach</p>
//       </div>
//     );

//     // Redirect Home
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fefae0] px-4">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-[#606c38]/20 text-[#283618] font-medium hover:bg-[#606c38] hover:text-[#fefae0] transition duration-300 hover:scale-105"
//       >
//         <ArrowLeft size={18} />
//         Back Home
//       </button>

//       {/* Login Card */}
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-[#606c38]">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#283618]">
//           Login
//         </h2>

//         <form
//           className="mt-6 space-y-4"
//           onSubmit={handleSubmit}
//         >
//           {/* Email */}
//           <div>
//             <label className="text-[#283618] text-sm">
//               Email
//             </label>

//             <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
//               <Mail
//                 size={18}
//                 className="text-[#606c38]"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
//                 required
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-[#283618] text-sm">
//               Password
//             </label>

//             <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
//               <Lock
//                 size={18}
//                 className="text-[#606c38]"
//               />

//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Enter password"
//                 className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
//                 required
//               />

//               {/* Show / Hide Password */}
//               <button
//                 type="button"
//                 onClick={() =>
//                   setShowPassword(!showPassword)
//                 }
//                 className="text-[#606c38] hover:text-[#283618] transition"
//               >
//                 {showPassword ? (
//                   <EyeOff size={18} />
//                 ) : (
//                   <Eye size={18} />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Forgot Password */}
//           <div className="flex justify-end text-sm">
//             <a
//               href="#"
//               className="text-[#606c38] hover:text-[#283618] hover:underline"
//             >
//               Forgot password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#606c38] text-[#fefae0] py-2 rounded-lg font-semibold hover:bg-[#283618] transition flex items-center justify-center gap-2"
//           >
//             <LogIn size={18} />
//             Login
//           </button>

//           <hr className="border-[#606c38]" />

//           {/* Google Button */}
//           <button
//             type="button"
//             className="w-full border border-[#606c38] py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#fefae0] transition text-[#283618]"
//           >
//             <img
//               src="https://www.svgrepo.com/show/475656/google-color.svg"
//               alt="google"
//               className="w-5 h-5"
//             />
//             Continue with Google
//           </button>
//         </form>

//         {/* Register Link */}
//         <p className="text-center text-[#606c38] text-sm mt-6">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-[#283618] font-semibold hover:underline"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  LogIn,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get Registered Users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check Email Exists
    const existingUser = users.find(
      (user) => user.email === form.email
    );

    // Email Not Found
    if (!existingUser) {
      toast.error("User not found! Please register first 🚀");

      setTimeout(() => {
        navigate("/register");
      }, 2000);

      return;
    }

    // Wrong Password
    if (existingUser.password !== form.password) {
      toast.error("Wrong password ❌");
      return;
    }

    // Save Login Info
    localStorage.setItem("isLogin", "true");

    localStorage.setItem(
      "currentUser",
      JSON.stringify(existingUser)
    );

    // Separate Storage For Each User
    const userKey = `userData_${existingUser.email}`;

    if (!localStorage.getItem(userKey)) {
      localStorage.setItem(
        userKey,
        JSON.stringify({
          profile: existingUser,
          notes: [],
          progress: [],
        })
      );
    }

    // Success Message
    toast.success(
      <div>
        <p>Login successful 🎉</p>
        <p>Welcome to Riddhi Gediya Coach</p>
      </div>
    );

    // Redirect Home
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefae0] px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-[#606c38]/20 text-[#283618] font-medium hover:bg-[#606c38] hover:text-[#fefae0] transition duration-300 hover:scale-105"
      >
        <ArrowLeft size={18} />
        Back Home
      </button>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-[#606c38]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#283618]">
          Login
        </h2>

        <form
          className="mt-6 space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <div>
            <label className="text-[#283618] text-sm">
              Email
            </label>

            <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
              <Mail
                size={18}
                className="text-[#606c38]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-[#283618] text-sm">
              Password
            </label>

            <div className="flex items-center border border-[#606c38] rounded-lg mt-1 px-3">
              <Lock
                size={18}
                className="text-[#606c38]"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 outline-none bg-transparent text-[#283618]"
                required
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-[#606c38] hover:text-[#283618] transition"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <a
              href="#"
              className="text-[#606c38] hover:text-[#283618] hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#606c38] text-[#fefae0] py-2 rounded-lg font-semibold hover:bg-[#283618] transition flex items-center justify-center gap-2"
          >
            <LogIn size={18} />
            Login
          </button>

          <hr className="border-[#606c38]" />

          {/* Google Button */}
          <button
            type="button"
            className="w-full border border-[#606c38] py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#fefae0] transition text-[#283618]"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-[#606c38] text-sm mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#283618] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;