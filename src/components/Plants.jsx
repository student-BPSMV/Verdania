import React from "react";
import Indoor_1 from "../assets/images/i1.jpg";
import Indoor_2 from "../assets/images/i2.webp";
import Indoor_3 from "../assets/images/i3.jpg";
import Outdoor_1 from "../assets/images/o1.jpg";
import Outdoor_2 from "../assets/images/o2.webp";
import Outdoor_3 from "../assets/images/o3.jpg";
import Succulents_1 from "../assets/images/s1.jpg";
import Succulents_2 from "../assets/images/s2.jpg";
import Succulents from "../assets/images/s3.jpg";
import Med_1 from "../assets/images/m1.jpg";
import Med_2 from "../assets/images/m2.jpg";
import Med_3 from "../assets/images/m3.jpg";
import GardenBorder from "../assets/images/garden-border.png";
function Plants() {
  return (
    <>
      <section
        class="text-gray-600 bg-[#f8faf5] body-font relative overflow-hidden"
        style={{
          backgroundImage: `url(${GardenBorder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="heading text-center mt-40 relative z-10">
          <h1
            className="font-serif font-bold text-4xl text-green-700"
            data-aos="zoom-in"
          >
            30+ <span className="text-3xl text-black"> Plants</span>{" "}
          </h1>
          <h3 className="mt-5 text-black text-sm" data-aos="zoom-in">
            Explore a wide variety of indoor , outdoor & flowering Plants{" "}
            <br></br> to bring nature closer to you{" "}
          </h3>
          <div
            className="btn-group flex gap-5 justify-start ml-35 items-center mt-7"
            data-aos="fade-up"
          >
            <button className="rounded-full px-3 py-2 text-white bg-green-700 shadow-md shadow-green-700/70">
              All Plants
            </button>
            <button className="rounded-full px-3 py-2 text-green-700 bg-white shadow-lg hover:border-2 hover:border-green-700 transition-all duration-300">
              Indoor Plants
            </button>
            <button className="rounded-full px-3 py-2 text-green-700 bg-white shadow-lg hover:border-2 hover:border-green-700">
              Outdoor Plants
            </button>
            <button className="rounded-full px-3 py-2 text-green-700 bg-white shadow-lg hover:border-2 hover:border-green-700">
              Succulents Plants
            </button>
            <button className="rounded-full px-3 py-2 text-green-700 bg-white shadow-lg hover:border-2 hover:border-green-700">
              Medicinal Plants
            </button>
          </div>
        </div>

        <div class="container px-5 py-24 mx-auto -mt-10">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Indoor_1}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Indoor_2}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2  rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Indoor_3}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Outdoor_1}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Outdoor_2}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Outdoor_3}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Succulents_1}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2  rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Succulents_2}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2 rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Succulents}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2  rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Med_1}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2  rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Med_2}
                  alt="blog"
                />
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full border-2  rounded-lg overflow-hidden shadow-xl/20 hover:translate-2"
                data-aos="fade-down"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Med_3}
                  alt="blog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plants;
