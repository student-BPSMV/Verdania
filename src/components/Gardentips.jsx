import React from "react";
import Garden_1 from "../assets/images/g1.webp";
import Garden_2 from "../assets/images/g2.webp";
import Garden_3 from "../assets/images/g3.webp";
import Garden_4 from "../assets/images/g4.webp";
import Garden_5 from "../assets/images/g6.webp";
import Garden_6 from "../assets/images/g7.webp";
import ContactBg from "../assets/images/contact.png";

function Gardentips() {
  return (
    <>
      <section
        class="text-gray-600 body-font overflow-hidden relative"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div class="container px-5 py-24 mx-auto relative z-10 mt-20">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="title-font mb-4 text-black font-serif font-bold text-5xl"
              data-aos="zoom-in"
            >
              Garden<span className="text-green-800"> Tips</span>
            </h1>
            <p
              class="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-serif"
              data-aos="zoom-out"
            >
              A Garden is where the soul finds solace and heart finds peace.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 -mt-10">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative" data-aos="fade-up">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={Garden_1}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-green-700 bg-white opacity-0 hover:opacity-100 transition-transform duration-700 group-hover:scale-110">
                  <h1 class="title-font text-gray-900 mb-3 font-serif text-2xl font-bold text-green-900">
                    Watering Plants
                  </h1>
                  <p class="leading-relaxed text-black ">
                    A potted plant being watered with a metal watering can —
                    “Water Wisely.”
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative" data-aos="fade-up">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={Garden_2}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-green-700 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-gray-900 mb-3 font-serif text-2xl font-bold text-green-900">
                    Sunlight for Plants
                  </h1>
                  <p class="leading-relaxed text-black">
                    A young plant sprouting with sunlight ideal for
                    “Understanding Sunlight.”
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative" data-aos="fade-up">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={Garden_3}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-green-700 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-gray-900 mb-3 font-serif text-2xl font-bold text-green-900">
                    Soil & Fertilizer
                  </h1>
                  <p class="leading-relaxed text-black">
                    Dark soil with gardening tools and fertilizer bags — great
                    for “Best Soil & Fertilizer.”
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative" data-aos="fade-up">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={Garden_4}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-green-700 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-gray-900 mb-3 font-serif text-2xl font-bold text-green-900">
                    Pruning Tips
                  </h1>
                  <p class="leading-relaxed text-black">
                    Hands in gloves using pruning shears on a rose bush
                    —“Pruning for Healthy Growth.”
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative" data-aos="fade-up">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={Garden_5}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-green-700 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-gray-900 mb-3 font-serif text-2xl font-bold text-green-900">
                    Mulching & Protection
                  </h1>
                  <p class="leading-relaxed text-black">
                    A garden bed with mulch and green plants .
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative" data-aos="fade-up">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={Garden_6}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-green-700 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-gray-900 mb-3 font-serif text-2xl font-bold text-green-900">
                    Crop Rotation & Harvest
                  </h1>
                  <p class="leading-relaxed text-black">
                    “Rotate Your Crops Periodically to avoid damange.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gardentips;
