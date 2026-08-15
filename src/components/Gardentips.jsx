import React from "react";

import Garden_1 from "../assets/images/g1.webp";
import Garden_2 from "../assets/images/g2.webp";
import Garden_3 from "../assets/images/g3.webp";
import Garden_4 from "../assets/images/g4.webp";
import Garden_5 from "../assets/images/g6.webp";
import Garden_6 from "../assets/images/g7.webp";

import ContactBg from "../assets/images/contact.png";

function Gardentips() {
  const gardenTips = [
    {
      image: Garden_1,
      title: "Watering Plants",
      description:
        "A potted plant being watered with a metal watering can — “Water Wisely.”",
    },
    {
      image: Garden_2,
      title: "Sunlight for Plants",
      description:
        "A young plant sprouting with sunlight ideal for “Understanding Sunlight.”",
    },
    {
      image: Garden_3,
      title: "Soil & Fertilizer",
      description:
        "Dark soil with gardening tools and fertilizer bags — great for “Best Soil & Fertilizer.”",
    },
    {
      image: Garden_4,
      title: "Pruning Tips",
      description:
        "Hands in gloves using pruning shears on a rose bush — “Pruning for Healthy Growth.”",
    },
    {
      image: Garden_5,
      title: "Mulching & Protection",
      description: "A garden bed with mulch and green plants.",
    },
    {
      image: Garden_6,
      title: "Crop Rotation & Harvest",
      description: "Rotate Your Crops Periodically to avoid damage.",
    },
  ];

  return (
    <>
      <section
        className="text-gray-600 body-font overflow-hidden relative"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/30"></div>

        <div className="container px-5 py-24 mx-auto relative z-10 mt-20">
          {/* ================= HEADING ================= */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              className="title-font mb-4 text-black font-serif font-bold text-5xl"
              data-aos="zoom-in"
            >
              Garden<span className="text-green-800"> Tips</span>
            </h1>

            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-serif"
              data-aos="zoom-out"
            >
              A Garden is where the soul finds solace and heart finds peace.
            </p>
          </div>

          {/* ================= GARDEN TIPS ================= */}
          <div className="flex flex-wrap -m-4 -mt-10">
            {gardenTips.map((tip, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative" data-aos="fade-up">
                  {/* Garden Image */}
                  <img
                    alt={tip.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={tip.image}
                  />

                  {/* Hover Content */}
                  <div
                    className="
                      px-8
                      py-10
                      relative
                      z-10
                      w-full
                      border-4
                      border-green-700
                      bg-white
                      opacity-0
                      hover:opacity-100
                      transition-all
                      duration-700
                    "
                  >
                    <h1
                      className="
                        title-font
                        text-gray-900
                        mb-3
                        font-serif
                        text-2xl
                        font-bold
                        text-green-900
                      "
                    >
                      {tip.title}
                    </h1>

                    <p className="leading-relaxed text-black">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gardentips;
