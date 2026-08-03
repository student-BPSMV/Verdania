import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <header
          class="fixed top-5 left-1/2 -translate-x-1/2 z-50
w-[90%] max-w-7xl
px-6 py-2
flex items-center justify-between
rounded-full
bg-green-800/10
backdrop-blur-xl
border border-white/20
shadow-2xl"
          data-aos="zoom-in"
        >
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto gap-4">
              <Link
                to="/"
                class="mr-5 text-white
font-large tracking-wide hover:text-lime-500 hover:text-xl
transition-all
duration-200 "
              >
                Home
              </Link>
              <Link
                to="/about"
                class="mr-5 text-white
font-large
tracking-wide
hover:text-lime-500
hover:text-xl
transition-all
duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                class="mr-5 text-white
hover:text-lime-500
hover:text-xl
transition-all
duration-200"
              >
                Contact Us
              </Link>
            </nav>
            <a class="flex lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
              <span class="ml-3 font-bold text-3xl tracking-wide text-white hover:text-green-800 font-serif">
                Verdania
              </span>
            </a>
            <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
              <button
                class="inline-flex items-center bg-emerald-700
hover:bg-emerald-800
text-white
font-semibold
px-6
py-3
rounded-full
transition-all
duration-300
hover:scale-105
shadow-lg"
              >
                <Link
                  to="/explore"
                  className="flex justify-center items-center"
                >
                  Explore
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
}

export default Navbar;
