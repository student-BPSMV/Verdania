import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="garden-section flex items-center justify-center">
      <div
        className="container w-full max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-around items-center gap-10"
        data-aos="fade-up"
      >
        {/* Left Side Content */}
        <div className="content max-w-lg ml-10">
          <p className="text-sm pb-7 tracking-widest">
            ✨DISCOVER THE BEAUTY OF NATURE
          </p>
          <h1 className="text-4xl font-bold leading-tight font-serif">
            Welcome to{" "}
            <span className="text-6xl text-green-500 text-shadow-lg font-serif block sm:inline mt-2">
              VERDANIA
            </span>
          </h1>
          <p className="text-justify pt-4 text-md  leading-relaxed font-sans">
            Nature has an incredible way of inspiring us. Explore our collection
            of flowers, medicinal herbs, ornamental plants, and seasonal blooms
            from around the world.
          </p>
          <div className="icons mt-8 flex gap-5 text-2xl text-green-500 text-shadow-lg">
            <div
              className="github  border border-[#E8E1C8]/70 rounded-full p-1 size-10  text-center
backdrop-blur-2xl bg-white/10 text-[#F5F1E3]
hover:bg-white/20 hover:border-green-500
hover:text-green-500 hover:scale-110 transition-all duration-300"
              data-aos="fade-up"
            >
              <i class="fa-brands fa-github"></i>
            </div>
            <div
              className="phone border border-[#E8E1C8]/70 rounded-full p-1 size-10  text-center  
backdrop-blur-2xl bg-white/10 text-[#F5F1E3]
hover:bg-white/20 hover:border-green-500
hover:text-green-500 hover:scale-110 transition-all duration-300"
              data-aos="fade-up"
            >
              <i class="fa-solid fa-mobile-screen"></i>
            </div>
            <div
              className="linkedIn border border-[#E8E1C8]/70 rounded-full p-1 size-10  text-center
backdrop-blur-2xl bg-white/10 text-[#F5F1E3]
hover:bg-white/20 hover:border-green-500
hover:text-green-500 hover:scale-110   transition-all duration-300"
              data-aos="fade-up"
            >
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div
              className="mail border border-[#E8E1C8]/70 rounded-full p-1 text-center size-10
backdrop-blur-2xl bg-white/10 text-[#F5F1E3]
hover:bg-white/20 hover:border-green-500
hover:text-green-500 hover:scale-110   transition-all duration-300"
              data-aos="fade-up"
            >
              <i class="fa-solid fa-at"></i>
            </div>
            <div
              className="telegram border border-[#E8E1C8]/70 rounded-full p-1 size-10  text-center
backdrop-blur-2xl bg-white/10 text-[#F5F1E3]
hover:bg-white/20 hover:border-green-500
hover:text-green-500 hover:scale-110   transition-all duration-300"
              data-aos="fade-up"
            >
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>

        {/* Right Side Buttons Grid */}
        <div className="grid grid-cols-1 w-full max-w-md h-auto">
          <button className="p-6 rounded-[10px] font-bold text-xl bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl flex justify-around items-center gap-20 transition-transform hover:scale-105 ">
            <Link to="/flowers">🌸 50+ Flowers</Link>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button className="p-6 rounded-[10px] font-bold text-xl bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl flex justify-around items-center gap-20 transition-transform hover:scale-105">
            <Link to="/plants">🌿 30+ Plants</Link>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button className="p-6 rounded-[10px] font-bold text-xl bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl flex justify-around items-center gap-19 transition-transform hover:scale-105">
            <Link to="/garden">💡 Garden Tips</Link>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button className="p-6 rounded-[10px] font-bold text-xl bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl flex justify-around items-center gap-5 transition-transform hover:scale-105">
            <Link to="/worldwide">🌍Worldwide Species</Link>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
