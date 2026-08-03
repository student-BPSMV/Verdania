import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="garden-section flex items-center justify-center">
      <div
        className="container w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-around items-center gap-10"
        data-aos="fade-up"
      >
        {/* Left Side Content */}
        <div className="content max-w-lg">
          <h1 className="text-4xl font-bold leading-tight font-sans">
            Welcome to{" "}
            <span className="text-6xl text-green-500 text-shadow-lg font-serif block sm:inline mt-2">
              VERDANIA
            </span>
          </h1>
          <p className="text-justify leading-relaxed pt-4 text-lg">
            Nature has an incredible way of inspiring us. Explore our collection
            of flowers, medicinal herbs, ornamental plants, and seasonal blooms
            from around the world.
          </p>
        </div>

        {/* Right Side Buttons Grid */}
        <div className="grid grid-cols-2 gap-6 w-full max-w-md h-auto">
          <button className="p-6 rounded-[10px] font-bold text-lg bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-transform hover:scale-105">
            50+ Flowers
          </button>
          <button className="p-6 rounded-[10px] font-bold text-lg bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-transform hover:scale-105">
            30+ Plants
          </button>
          <button className="p-6 rounded-[10px] font-bold text-lg bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-transform hover:scale-105">
            Garden Tips
          </button>
          <button className="p-6 rounded-[10px] font-bold text-md bg-green-500/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-transform hover:scale-105">
            Worldwide Species
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
