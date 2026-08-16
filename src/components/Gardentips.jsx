import React from "react";

import Garden_1 from "../assets/images/g1.webp";
import Garden_2 from "../assets/images/g2.webp";
import Garden_3 from "../assets/images/g3.webp";
import Garden_4 from "../assets/images/g4.webp";
import Garden_5 from "../assets/images/g6.webp";
import Garden_6 from "../assets/images/g7.webp";

import GTBg from "../assets/images/gt.png";

function Gardentips() {
  const gardenTips = [
    {
      image: Garden_2,
      icon: "☀",
      title: "Sunlight for Plants",
      description:
        "Understand how much sunlight your plants need to grow strong and healthy.",
    },
    {
      image: Garden_3,
      icon: "🌱",
      title: "Soil & Fertilizer",
      description:
        "Use the right soil and natural fertilizers to nourish your plants the right way.",
    },
    {
      image: Garden_4,
      icon: "✂",
      title: "Pruning Tips",
      description:
        "Prune your plants regularly to encourage new growth and maintain their shape.",
    },
    {
      image: Garden_5,
      icon: "🍃",
      title: "Mulching & Protection",
      description:
        "Mulch helps retain moisture, control weeds, and protect plant roots through every season.",
    },
    {
      image: Garden_6,
      icon: "↻",
      title: "Crop Rotation",
      description:
        "Rotate your crops periodically to maintain soil health and prevent plant diseases.",
    },
    {
      image: Garden_6,
      icon: "🧺",
      title: "Harvest & Enjoy",
      description:
        "Harvest your fresh vegetables and enjoy the fruits of your hard work in the garden.",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden text-gray-800"
      style={{
        backgroundImage: `url(${GTBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#f8f6ec]/20"></div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-5 py-33">
        {/* ================= HEADING ================= */}
        <div
          className="flex flex-col text-center items-center mb-14"
          data-aos="fade-down"
        >
          {/* Small botanical symbol */}
          <div className="mb-3 text-3xl text-green-800 ">❧</div>

          <h1 className="font-serif font-bold text-5xl md:text-5xl text-green-950">
            Garden <span className="text-green-800">Tips</span>
          </h1>

          <div className="flex items-center gap-3 my-4">
            <span className="h-px w-12 bg-green-700/40"></span>

            <span className="text-green-800 text-xl">❧</span>

            <span className="h-px w-12 bg-green-700/40"></span>
          </div>

          <p className="font-serif text-md md:text-xl text-gray-800">
            Small changes. Healthier gardens.
          </p>
        </div>

        {/* ================= FEATURED TIP ================= */}
        <div
          className="
            max-w-5xl
            mx-auto
            mb-16
            bg-white/90
            backdrop-blur-md
            rounded-3xl
            overflow-hidden
            shadow-2xl
            border
            border-white/60
          "
          data-aos="zoom-in"
        >
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Featured Image */}
            <div className="relative min-h-[320px] lg:min-h-[400px]  h-full overflow-hidden group">
              <img
                src={Garden_1}
                alt="Watering Plants"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              {/* Label */}
              <div className="mb-5">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-full
                    bg-green-100
                    text-green-900
                    text-sm
                    font-semibold
                  "
                >
                  <span>🌿</span>
                  FEATURED TIP
                </span>
              </div>

              {/* Title */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl text-green-800">💧</span>

                <h2 className="font-serif font-bold text-3xl md:text-4xl text-green-950">
                  Water Wisely
                </h2>
              </div>

              {/* Decorative line */}
              <div className="flex items-center gap-3 mb-6 ml-20">
                <span className="h-px w-20 bg-green-800/40"></span>
                <span className="text-green-800 text-center">❧</span>
                <span className="h-px w-20 bg-green-800/40"></span>
              </div>

              <p className="text-gray-700 text-md leading-relaxed max-w-lg mb-8">
                Learn how to properly water different types of plants and keep
                them healthy and thriving.
              </p>

              {/* Button */}
              <button
                className="
                  w-fit
                  px-5
                  py-3
                  ml-25
                  rounded-xl
                  bg-green-900
                  hover:bg-green-800
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  shadow-lg
                  hover:shadow-xl
                "
              >
                Read More
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= SECTION TITLE ================= */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-green-950">
            Explore More Garden Tips
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 bg-green-800/30"></span>

            <span className="text-green-800 text-xl">❧</span>

            <span className="h-px w-16 bg-green-800/30"></span>
          </div>
        </div>

        {/* ================= GARDEN TIP CARDS ================= */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardenTips.map((tip, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="
                  h-full
                  bg-white/90
                  backdrop-blur-md
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  border
                  border-white/70
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image dark overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-500"></div>

                  {/* Floating icon */}
                  <div
                    className="
                      absolute
                      -bottom-6
                      left-1/2
                      -translate-x-1/2
                      w-12
                      h-12
                      rounded-full
                      bg-white
                      shadow-lg
                      flex
                      items-center
                      justify-center
                      text-xl
                      border
                      border-green-100
                    "
                  >
                    {tip.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pt-10 pb-6 text-center">
                  <h3 className="font-serif font-bold text-2xl text-green-950 mb-3">
                    {tip.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-5">
                    {tip.description}
                  </p>

                  <button
                    className="
                      text-green-900
                      font-semibold
                      hover:text-green-700
                      transition-colors
                      duration-300
                    "
                  >
                    Read More
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM QUOTE ================= */}
        <div
          className="
            max-w-5xl
            mx-auto
            mt-20
            bg-white/70
            backdrop-blur-md
            border
            border-green-800/20
            rounded-3xl
            shadow-lg
            overflow-hidden
          "
          // data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* Quote */}
            <div className="p-8 md:p-12 text-center">
              <h3 className="font-serif font-bold text-2xl md:text-2xl text-green-950 leading-relaxed">
                A Garden is where the soul finds solace and the heart finds
                peace.
              </h3>

              <p className="mt-5 text-gray-700 text-md">
                Keep learning, keep growing.
              </p>

              <div className="mt-4 text-green-800 text-2xl">❧</div>
            </div>

            {/* CTA */}
            <div className="p-8 md:p-12 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🌿</div>

              <h4 className="font-serif font-bold text-2xl text-green-950 mb-3">
                Stay Connected
              </h4>

              <p className="text-gray-700 mb-6 max-w-sm">
                Get weekly garden tips and inspiration straight to your inbox.
              </p>

              <button
                className="
                  px-5
                  py-3
                  bg-green-900
                  hover:bg-green-800
                  text-white
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  shadow-lg
                "
              >
                🌱 Stay Connected
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gardentips;
