import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = ({ showLinks = true }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {" "}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
        </div>
        {showLinks && (
          <div className="flex gap-4">
            {" "}
            <Link
              className="text-blue-600 hover:text-blue-800 font-medium"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-blue-600 hover:text-blue-800 font-medium"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
