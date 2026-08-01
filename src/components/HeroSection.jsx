import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className="garden-section">
        <div
          className="container flex justify-center items-center"
          data-aos="fade-up"
        >
          <div className="content mt-50 ml-30">
            <h1 className="text-4xl font-bold leading-12 font-sans">
              Welcome to{" "}
              <span className="text-6xl text-green-500 text-shadow-lg font-serif">
                VERDANIA
              </span>
            </h1>
            <p className="text-justify w-[400px] leading-6 pt-4 text-lg ">
              Nature has an incredible way of inspiring us. Explore our
              collection of flowers, medicinal herbs, ornamental plants, and
              seasonal blooms from around the world.
            </p>
          </div>
          <div className="image mt-50 grid grid-cols-2 w-[450px] h-[220px] gap-7 ml-30 -mr-20">
            <button
              className="border-1 rounded-[10px] font-bold text-lg bg-green-500/10
backdrop-blur-xl
border border-white/20
shadow-2xl hover:scale-105"
            >
              50+ Flowers
            </button>
            <button
              className="border-1 rounded-[10px] font-bold text-lg bg-green-500/10
backdrop-blur-xl
border border-white/20
shadow-2xl hover:scale-105"
            >
              30+ Plants
            </button>
            <button
              className="border-1 rounded-[10px] font-bold text-lg bg-green-500/10
backdrop-blur-xl
border border-white/20
shadow-2xl hover:scale-105"
            >
              Garden Tips
            </button>
            <button
              className="border-1 rounded-[10px] font-bold text-md bg-green-500/10
backdrop-blur-xl
border border-white/20
shadow-2xl hover:scale-105"
            >
              Worldwide Species
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
