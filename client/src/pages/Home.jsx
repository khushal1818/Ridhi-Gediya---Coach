import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Benefits from "../Components/Benefits";
import Products from "../Components/Products";
import Contact from "../Components/Contact";
import Footer from "../Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Loader screen
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#fefae0]">
        <div className="w-12 h-12 border-4 border-[#606c38] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <Hero />

      <Benefits />

      <Products />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
