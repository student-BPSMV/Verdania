import React from "react";

import Peony from "../assets/images/peony.jpg";
import Cherry_Blossam from "../assets/images/japanes_cherry.jpg";
import Protea from "../assets/images/king_protea.jpg";
import Heliconia from "../assets/images/Heliconia_Bihai.webp";
import Plant_1 from "../assets/images/f1.jpg";

function Worldwide() {
  return (
    <>
      <section className="relative overflow-hidden py-38 px-6 bg-[#f8faf5] ">
        {/* ================= HEADER ================= */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h1
            className="text-4xl md:text-5xl font-serif font-bold text-gray-800"
            data-aos="fade-down"
          >
            Worldwide <span className="text-green-700">Species</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg" data-aos="fade-down">
            Discover Nature Across Continents
          </p>

          <p
            className="max-w-2xl mx-auto mt-2 text-gray-500"
            data-aos="fade-down"
          >
            Explore beautiful flowers and plants from different regions of the
            world and discover the diversity of nature.
          </p>

          {/* ================= STATISTICS ================= */}
          <div
            className="flex justify-center items-center gap-10 md:gap-20 mt-8"
            data-aos="fade-up"
          >
            <div>
              <h2 className="text-2xl font-bold text-green-700">70+</h2>
              <p className="text-sm text-gray-500">Countries</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-700">5000+</h2>
              <p className="text-sm text-gray-500">Species</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-700">6</h2>
              <p className="text-sm text-gray-500">Continents</p>
            </div>
          </div>
        </div>

        {/* ================= WORLDWIDE GRID ================= */}

        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
          data-aos="fade-up"
        >
          {/* ================= SOUTH AFRICA ================= */}
          <div className="group relative h-[280px] overflow-hidden rounded-xl">
            <img
              src={Protea}
              alt="King Protea from South Africa"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-sm uppercase tracking-widest text-green-300">
                South Africa
              </p>

              <h2 className="text-2xl font-bold">King Protea</h2>

              <p className="text-sm text-gray-200 mt-1">
                National flower of South Africa
              </p>
            </div>
          </div>

          {/* ================= JAPAN ================= */}
          <div className="group relative h-[280px] overflow-hidden rounded-xl">
            <img
              src={Cherry_Blossam}
              alt="Cherry Blossom from Japan"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-sm uppercase tracking-widest text-pink-300">
                Japan
              </p>

              <h2 className="text-2xl font-bold">Cherry Blossom</h2>

              <p className="text-sm text-gray-200 mt-1">
                Symbol of spring and renewal
              </p>
            </div>
          </div>

          {/* ================= FEATURED HYDRANGEA ================= */}
          <div className="group relative md:row-span-2 h-[575px] overflow-hidden rounded-xl">
            <img
              src={Plant_1}
              alt="Hydrangea flowers"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Stronger gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Featured Badge */}
            <div className="absolute top-5 left-5">
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm">
                Featured Species
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-7 left-6 text-white">
              <p className="text-sm uppercase tracking-widest text-pink-300">
                Japan
              </p>

              <h2 className="text-4xl font-serif font-bold">Hydrangea</h2>

              <p className="mt-2 text-gray-200 max-w-sm">
                Known for its beautiful clusters of pink, purple and blue
                blossoms.
              </p>

              <button className="mt-5 px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 transition-all duration-300 font-semibold">
                Discover →
              </button>
            </div>
          </div>

          {/* ================= INDIA ================= */}
          <div className="group relative h-[280px] overflow-hidden rounded-xl">
            <img
              src={Heliconia}
              alt="Heliconia flower"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-sm uppercase tracking-widest text-yellow-300">
                India
              </p>

              <h2 className="text-2xl font-bold">Tropical Bloom</h2>

              <p className="text-sm text-gray-200 mt-1">
                Vibrant tropical species
              </p>
            </div>
          </div>

          {/* ================= CHINA ================= */}
          <div className="group relative h-[280px] overflow-hidden rounded-xl">
            <img
              src={Peony}
              alt="Peony flower from China"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-sm uppercase tracking-widest text-pink-300">
                China
              </p>

              <h2 className="text-2xl font-bold">Peony</h2>

              <p className="text-sm text-gray-200 mt-1">
                Symbol of beauty and prosperity
              </p>
            </div>
          </div>
        </div>

        {/* ================= EXPLORE BUTTON ================= */}

        <div className="flex justify-center mt-12" data-aos="fade-up">
          <button
            className="
              px-8 py-3
              rounded-full
              bg-green-700
              text-white
              font-semibold
              shadow-lg
              hover:bg-green-800
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Explore All Species
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default Worldwide;
