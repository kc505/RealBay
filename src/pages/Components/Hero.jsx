import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-white via-white to-purple-50 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-blue-900 leading-tight">
            Invest In The Future of{" "}
            <span className="text-blue-600">Real Estate</span> With RealBay
          </h1>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 rounded cursor-pointer p-2 text-white font-semibold transition">
              Get Started
            </button>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800"
            alt="Modern Real Estate"
            className="relative rounded-2xl shadow-2xl border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
