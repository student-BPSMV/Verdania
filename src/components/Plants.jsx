import React, { useState } from "react";

import Indoor_1 from "../assets/images/i1.jpg";
import Indoor_2 from "../assets/images/i2.webp";
import Indoor_3 from "../assets/images/i3.jpg";
import Indoor_4 from "../assets/images/i5.jpg";
import Indoor_5 from "../assets/images/i6.jpg";
import Indoor_6 from "../assets/images/i7.webp";

import Outdoor_1 from "../assets/images/o1.jpg";
import Outdoor_2 from "../assets/images/o2.webp";
import Outdoor_3 from "../assets/images/o3.jpg";
import Outdoor_4 from "../assets/images/o4.jpg";
import Outdoor_5 from "../assets/images/o5.webp";
import Outdoor_6 from "../assets/images/o6.avif";

import Succulents_1 from "../assets/images/s1.jpg";
import Succulents_2 from "../assets/images/s2.jpg";
import Succulents from "../assets/images/s3.jpg";
import Succulents_3 from "../assets/images/s4.avif";
import Succulents_4 from "../assets/images/s5.jpg";
import Succulents_5 from "../assets/images/s6.jpg";

import Med_1 from "../assets/images/m1.jpg";
import Med_2 from "../assets/images/m2.jpg";
import Med_3 from "../assets/images/m3.jpg";
import Med_4 from "../assets/images/m4.jpg";
import Med_5 from "../assets/images/m5.jpg";
import Med_6 from "../assets/images/m6.jpg";

import GardenBorder from "../assets/images/garden-border.png";

function Plants() {
  const [category, setCategory] = useState("All Plants");

  const plants = [
    // ================= INDOOR PLANTS =================
    {
      image: Indoor_1,
      name: "Rubber Plant",
      price: 499,
      category: "Indoor Plants",
    },
    {
      image: Indoor_2,
      name: "Snake Plant",
      price: 399,
      category: "Indoor Plants",
    },
    {
      image: Indoor_3,
      name: "Peace Lily",
      price: 449,
      category: "Indoor Plants",
    },
    {
      image: Indoor_4,
      name: "Areca Palm",
      price: 599,
      category: "Indoor Plants",
    },
    {
      image: Indoor_5,
      name: "Money Plant",
      price: 299,
      category: "Indoor Plants",
    },
    {
      image: Indoor_6,
      name: "Monstera Plant",
      price: 699,
      category: "Indoor Plants",
    },

    // ================= OUTDOOR PLANTS =================
    {
      image: Outdoor_1,
      name: "Bougainvillea",
      price: 349,
      category: "Outdoor Plants",
    },
    {
      image: Outdoor_2,
      name: "Hibiscus",
      price: 299,
      category: "Outdoor Plants",
    },
    {
      image: Outdoor_3,
      name: "Rose Plant",
      price: 249,
      category: "Outdoor Plants",
    },
    {
      image: Outdoor_4,
      name: "Jasmine Plant",
      price: 299,
      category: "Outdoor Plants",
    },
    {
      image: Outdoor_5,
      name: "Croton Plant",
      price: 399,
      category: "Outdoor Plants",
    },
    {
      image: Outdoor_6,
      name: "Ixora Plant",
      price: 349,
      category: "Outdoor Plants",
    },

    // ================= SUCCULENTS =================
    {
      image: Succulents_1,
      name: "Aloe Vera",
      price: 199,
      category: "Succulents",
    },
    {
      image: Succulents_2,
      name: "Echeveria",
      price: 249,
      category: "Succulents",
    },
    {
      image: Succulents,
      name: "Jade Plant",
      price: 299,
      category: "Succulents",
    },
    {
      image: Succulents_3,
      name: "Haworthia",
      price: 229,
      category: "Succulents",
    },
    {
      image: Succulents_4,
      name: "Zebra Haworthia",
      price: 279,
      category: "Succulents",
    },
    {
      image: Succulents_5,
      name: "String of Pearls",
      price: 349,
      category: "Succulents",
    },

    // ================= MEDICINAL PLANTS =================
    {
      image: Med_1,
      name: "Tulsi",
      price: 149,
      category: "Medicinal",
    },
    {
      image: Med_2,
      name: "Neem Plant",
      price: 199,
      category: "Medicinal",
    },
    {
      image: Med_3,
      name: "Aloe Vera",
      price: 199,
      category: "Medicinal",
    },
    {
      image: Med_4,
      name: "Mint Plant",
      price: 129,
      category: "Medicinal",
    },
    {
      image: Med_5,
      name: "Lemongrass",
      price: 149,
      category: "Medicinal",
    },
    {
      image: Med_6,
      name: "Ashwagandha",
      price: 249,
      category: "Medicinal",
    },
  ];

  const filteredPlants =
    category === "All Plants"
      ? plants
      : plants.filter((plant) => plant.category === category);

  return (
    <>
      <section
        className="text-gray-600 bg-[#f8faf5] body-font relative overflow-hidden"
        style={{
          backgroundImage: `url(${GardenBorder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ================= HEADING ================= */}
        <div className="heading text-center mt-40 relative z-10">
          <h1
            className="font-serif font-bold text-4xl text-green-700"
            data-aos="zoom-in"
          >
            30+
            <span className="text-3xl text-black"> Plants</span>
          </h1>

          <h3 className="mt-5 text-black text-sm" data-aos="zoom-in">
            Explore a wide variety of indoor, outdoor & flowering Plants
            <br />
            to bring nature closer to you
          </h3>

          {/* ================= CATEGORY BUTTONS ================= */}
          <div
            className="btn-group flex gap-5 justify-start ml-35 items-center mt-7"
            data-aos="fade-up"
          >
            {[
              "All Plants",
              "Indoor Plants",
              "Outdoor Plants",
              "Succulents",
              "Medicinal",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                  rounded-full
                  px-3
                  py-2
                  transition-all
                  duration-300
                  ${
                    category === item
                      ? "text-white bg-green-700 shadow-md shadow-green-700/70 scale-105"
                      : "text-green-700 bg-white shadow-lg hover:border-2 hover:border-green-700 hover:-translate-y-1"
                  }
                `}
              >
                {item === "Succulents"
                  ? "Succulents Plants"
                  : item === "Medicinal"
                    ? "Medicinal Plants"
                    : item}
              </button>
            ))}
          </div>
        </div>

        {/* ================= PLANTS ================= */}
        <div className="container px-5 py-20 mx-auto -mt-10 relative z-10">
          <div className="flex flex-wrap -m-4">
            {filteredPlants.map((plant, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div
                  className="
                    h-full
                    bg-white
                    border-2
                    rounded-lg
                    overflow-hidden
                    shadow-xl
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                    duration-300
                  "
                  data-aos="fade-down"
                >
                  {/* ================= IMAGE ================= */}
                  <img
                    className="
                      lg:h-48
                      md:h-36
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                    src={plant.image}
                    alt={plant.name}
                  />

                  {/* ================= PLANT DETAILS ================= */}
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {plant.name}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {plant.category}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold text-green-700">
                        ₹{plant.price}
                      </span>

                      <button
                        className="
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-white
                          bg-green-700
                          rounded-full
                          hover:bg-green-800
                          hover:scale-105
                          transition-all
                          duration-300
                        "
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EXPLORE MORE ================= */}
        <div className="flex justify-center -mt-3 mb-10 relative z-20">
          <button
            className="
              px-8
              py-3
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
      </section>
    </>
  );
}

export default Plants;
