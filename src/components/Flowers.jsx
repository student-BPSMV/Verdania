import React from "react";

import Pic_1 from "../assets/images/f1.jpg";
import Pic_2 from "../assets/images/f2.jpg";
import Pic_3 from "../assets/images/f3.jpg";
import Pic_4 from "../assets/images/f4.jpg";
import Pic_5 from "../assets/images/f5.jpg";
import Pic_6 from "../assets/images/f6.jpg";
import Pic_7 from "../assets/images/f7.jpg";
import Pic_8 from "../assets/images/f8.jpg";
import Pic_9 from "../assets/images/f10.jpg";
import Pic_10 from "../assets/images/f11.jpg";
import Pic_11 from "../assets/images/f12.jpg";
import Pic_12 from "../assets/images/f13.jpg";
import Pic_13 from "../assets/images/f14.jpg";
import Pic_14 from "../assets/images/f16.jpg";
import Pic_15 from "../assets/images/japanes_cherry.jpg";
import Pic_16 from "../assets/images/f17.jpg";

import Flower_bg from "../assets/images/flower-bg.png";

function Flowers() {
  const flowers = [
    {
      image: Pic_1,
      name: "Hydrangea",
      category: "Flowering Plant",
      price: "$8.00",
    },
    {
      image: Pic_2,
      name: "Hibiscus",
      category: "Tropical Flower",
      price: "$35.00",
    },
    {
      image: Pic_3,
      name: "Rose of Sharon",
      category: "Flowering Shrub",
      price: "$25.00",
    },
    {
      image: Pic_4,
      name: "Water Lily",
      category: "Aquatic Plant",
      price: "$30.40",
    },
    {
      image: Pic_5,
      name: "Water Hyacinth",
      category: "Floating Aquatic Plant",
      price: "$16.00",
    },
    {
      image: Pic_6,
      name: "White Water Lily",
      category: "Aquatic Plant",
      price: "$34.15",
    },
    {
      image: Pic_7,
      name: "Echium",
      category: "Ornamental Flowering Plant",
      price: "$12.00",
    },
    {
      image: Pic_8,
      name: "Dahlia",
      category: "Ornamental Plant",
      price: "$20.40",
    },
    {
      image: Pic_9,
      name: "Sunflower",
      category: "Ornamental Flower",
      price: "$50.00",
    },
    {
      image: Pic_10,
      name: "Water Poppy",
      category: "Aquatic Flower",
      price: "$15.00",
    },
    {
      image: Pic_11,
      name: "Lotus",
      category: "Sacred Flower",
      price: "$5.00",
    },
    {
      image: Pic_12,
      name: "Hibiscus",
      category: "Tropical Flower",
      price: "$45.00",
    },
    {
      image: Pic_13,
      name: "Rose Mallow",
      category: "Perennial Flower",
      price: "$30.00",
    },
    {
      image: Pic_14,
      name: "Cherry Blossom",
      category: "Ornamental Flower",
      price: "$65.00",
    },
    {
      image: Pic_15,
      name: "Hibiscus",
      category: "Ornamental Flowering Plant",
      price: "$35.00",
    },
    {
      image: Pic_16,
      name: "Bougainvillea",
      category: "Ornamental Flowering Plant",
      price: "$35.00",
    },
  ];

  return (
    <>
      <section
        className="relative overflow-hidden bg-[#f8faf5]"
        style={{
          backgroundImage: `url(${Flower_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Transparent overlay for subtle fade */}
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative z-10">
          {/* Heading */}
          <div className="mt-40 text-center" data-aos="zoom-in">
            <h1
              className="font-serif font-bold text-5xl text-green-700"
              data-aos="zoom-out"
            >
              50+ <span className="text-4xl text-black">Flowers</span>
            </h1>

            <h3 className="mt-8 text-lg font-serif">
              Every flower is a soul blossoming in nature.
              <br />
              Let us live like flowers, wild and beautiful and drenched in sun.
            </h3>
          </div>

          {/* Flower Cards */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap justify-between gap-y-6">
                {flowers.map((flower, index) => (
                  <div
                    key={index}
                    className="lg:w-[23.5%] md:w-[48%] p-4 w-full border-1 rounded-2xl shadow-xl bg-white"
                    data-aos="slide-up"
                  >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        src={flower.image}
                        alt={flower.name}
                        className="object-cover object-center w-full h-full block"
                      />
                    </a>

                    <div className="mt-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {flower.category}
                        </h3>
                        <div className="icons flex text-yellow-300 text-xs">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                      </div>

                      <h2 className="text-gray-900 pt-3 title-font text-md font-serif text-green-700 font-bold">
                        {flower.name}
                      </h2>
                      <div className="flex justify-between items-center">
                        <p className="mt-1 text-black text-lg font-bold">
                          {flower.price}
                        </p>
                        <i class="fa-solid fa-arrow-right-long text-green-700 text-md"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="flex justify-center mt-12 pb-10">
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
              Explore More
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Flowers;
