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
          <div className="mt-40 text-center" data-aos="zoom-in">
            <h1
              className="font-serif font-bold text-4xl text-green-700"
              data-aos="zoom-out"
            >
              50+ <span className="text-3xl text-black">Flowers</span>
            </h1>
            <h3 className="mt-5 text-md">
              Every flower is a soul blossoming in nature.<br></br>
              Let us live like flowers, wild and beautiful and drenched in sun.
            </h3>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-15 mx-auto">
              <div className="flex flex-wrap -m-4">
                {/* Plant Cards */}
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hydrangea"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_1}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Flowering Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Hydrangea
                    </h2>
                    <p className="mt-1 text-black">$8.00</p>
                  </div>
                </div>

                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_2}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Tropical Flower
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Hibiscus
                    </h2>
                    <p className="mt-1 text-black">$35.00</p>
                  </div>
                </div>

                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Rose of Sharon"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_3}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Flowering Shrub
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Rose of Sharon
                    </h2>
                    <p className="mt-1 text-black">$25.00</p>
                  </div>
                </div>

                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Water Lily"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_4}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Aquatic Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Water Lily
                    </h2>
                    <p className="mt-1 text-black">$30.40</p>
                  </div>
                </div>

                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Water Hyacinth"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_5}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Floating Aquatic Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Water Hyacinth
                    </h2>
                    <p className="mt-1 text-black">$16.00</p>
                  </div>
                </div>

                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="White Water Lily"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_6}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Aquatic Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      White Water Lily
                    </h2>
                    <p className="mt-1 text-black">$34.15</p>
                  </div>
                </div>

                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Echium"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_7}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Ornamental Flowering Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Echium
                    </h2>
                    <p className="mt-1 text-black">$12.00</p>
                  </div>
                </div>

                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Lily of the Valley"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_8}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Ornamental Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Dahlia
                    </h2>
                    <p className="mt-1 text-black">$20.40</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_9}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Ornamental Flower
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Sunflower
                    </h2>
                    <p className="mt-1 text-black">$50.00</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_10}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Aquatic Flower
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Water Poppy
                    </h2>
                    <p className="mt-1 text-black">$15.00</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_11}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Sacred Flower
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Lotus
                    </h2>
                    <p className="mt-1 text-black">$5.00</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_12}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Tropical Flower
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Hibiscus
                    </h2>
                    <p className="mt-1 text-black">$45.00</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_13}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Perennial Flower
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Rose Mallow
                    </h2>
                    <p className="mt-1 text-black">$30.00</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_14}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Ornamental Flower
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Cherry Blossom
                    </h2>
                    <p className="mt-1 text-black">$65.00</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_15}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Ornamental Flowering Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Hibiscus
                    </h2>
                    <p className="mt-1 text-black">$35.00</p>
                  </div>
                </div>
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  data-aos="slide-up"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="Hibiscus"
                      className="object-cover object-center w-full h-full block"
                      src={Pic_16}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      CATEGORY : Ornamental Flowering Plant
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium font-serif">
                      Bougainvillea
                    </h2>
                    <p className="mt-1 text-black">$35.00</p>
                  </div>
                </div>
              </div>
            </div>
            
          </section>
        </div>
      </section>
    </>
  );
}

export default Flowers;
