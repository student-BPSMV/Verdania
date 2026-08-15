import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isContact = location.pathname === "/contact";
  const isExplore = location.pathname === "/explore";

  const navbarStyle = isContact
    ? "bg-[#163A2B] border-[#A8C9B2]"
    : isExplore
      ? "bg-[#163A2B] border-[#A8C9B2]"
      : "bg-green-800/10 border-green-300/20";

  const textStyle = isContact ? "text-[#F8F5EA]" : "text-white";

  return (
    <header
      className={`
        fixed top-5 left-1/2 -translate-x-1/2 z-50
        w-[90%] max-w-7xl
        px-4
        rounded-full
        backdrop-blur-xl
        border-2
        shadow-2xl
        transition-all duration-500
        ${navbarStyle}
      `}
      data-aos="zoom-in"
    >
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        {/* Left Links */}
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-4">
          <Link
            to="/"
            className={`mr-5 font-medium tracking-wide hover:text-green-600 transition-all duration-300 ${textStyle}`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`mr-5 font-medium tracking-wide hover:text-green-600 transition-all duration-300 ${textStyle}`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`mr-5 font-medium tracking-wide hover:text-green-600 transition-all duration-300 ${textStyle}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex lg:w-1/5 items-center justify-center">
          <span
            className={`font-bold text-3xl tracking-wide font-serif transition-colors duration-500 ${textStyle}`}
          >
            Verdania
          </span>
        </div>

        {/* Explore */}
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link
            to="/explore"
            className={`
              inline-flex items-center
              bg-gradient-to-r from-green-500 via-green-600 to-green-700
              text-white
              font-semibold
              px-6 py-3
              rounded-full
              transition-all duration-300
              hover:scale-105
              shadow-lg
               ${textStyle}`}
          >
            Explore
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
