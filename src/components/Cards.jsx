import React from "react";
import Flower_1 from "../assets/images/flower1.avif";
import Flower_2 from "../assets/images/flower2.jpg";
import Flower_3 from "../assets/images/flower3.jpg";
import Flower_4 from "../assets/images/flower7.jpg";
import Flower_5 from "../assets/images/flower6.jpg";
import Flower_6 from "../assets/images/flower4.jpg";

function Cards() {
  return (
    <>
      <section class="text-gray-600 body-font mt-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-lg overflow-hidden shadow-lg"
                data-aos="flip-up"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Flower_1}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY : Climbing Flower
                  </h2>
                  <h1 class="title-font text-xl font-bold text-gray-900 mb-3 font-serif">
                    The Morning Glory
                  </h1>
                  <p class="leading-relaxed mb-3 text-black text-sm">
                    Morning Glory is a fast-growing climbing vine known for its
                    vibrant blue trumpet-shaped flowers. These blooms open in
                    the early morning and symbolize love, affection, and the
                    beauty of a new beginning.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Know More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-lg overflow-hidden shadow-lg"
                data-aos="flip-up"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Flower_2}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY : Tropical Flower
                  </h2>
                  <h1 class="title-font text-xl font-bold text-gray-900 mb-3 font-serif">
                    The Pink Frangipani
                  </h1>
                  <p class="leading-relaxed mb-3 text-black text-sm">
                    Pink Frangipani is admired for its fragrant blossoms and
                    vibrant colors. It thrives in warm climates and is often
                    used in gardens to create a peaceful, tropical atmosphere.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Know More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-lg overflow-hidden shadow-lg"
                data-aos="flip-up"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Flower_3}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY : Aquatic Flower
                  </h2>
                  <h1 class="title-font text-xl  text-gray-900 mb-3 font-bold font-serif">
                    Lotus
                  </h1>
                  <p class="leading-relaxed mb-3 text-black text-sm">
                    The Lotus is a sacred aquatic flower that blooms beautifully
                    above the water's surface. It symbolizes purity, wisdom,
                    resilience, and spiritual enlightenment in many cultures.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Know More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-lg overflow-hidden shadow-lg"
                data-aos="flip-up"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Flower_4}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY : Flowering Shrub
                  </h2>
                  <h1 class="title-font text-xl text-gray-900 mb-3 font-bold font-serif">
                    The Rose
                  </h1>
                  <p class="leading-relaxed mb-3 text-black text-sm">
                    The Rose is one of the world's most cherished flowers,
                    celebrated for its delicate petals and enchanting fragrance.
                    It represents love, admiration, elegance, and timeless
                    beauty.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Know More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-lg overflow-hidden shadow-lg"
                data-aos="flip-up"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Flower_5}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY : Tropical Flowe
                  </h2>
                  <h1 class="title-font text-xl text-gray-900 mb-3 font-bold font-serif">
                    The White Frangipani
                  </h1>
                  <p class="leading-relaxed mb-3 text-black text-sm">
                    White Frangipani produces creamy white petals with a golden
                    center and a sweet fragrance. It is widely planted in
                    tropical landscapes for its graceful appearance and relaxing
                    aro
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Know More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-lg overflow-hidden shadow-lg"
                data-aos="flip-up"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Flower_6}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY : Ornamental Flower
                  </h2>
                  <h1 class="title-font text-xl text-gray-900 mb-3 font-bold font-serif">
                    White Lily
                  </h1>
                  <p class="leading-relaxed mb-3 text-black text-sm">
                    White Lilies are elegant flowering plants known for their
                    large trumpet-shaped blooms and pleasant fragrance. They
                    symbolize purity, peace, hope, and new beginnings.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Know More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
