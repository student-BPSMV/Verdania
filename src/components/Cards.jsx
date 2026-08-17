import React, { useState } from "react";

import Flower_1 from "../assets/images/flower1.avif";
import Flower_2 from "../assets/images/flower2.jpg";
import Flower_3 from "../assets/images/flower3.jpg";
import Flower_4 from "../assets/images/flower7.jpg";
import Flower_5 from "../assets/images/flower6.jpg";
import Flower_6 from "../assets/images/flower4.jpg";
import Flower_7 from "../assets/images/f2.jpg";
import Flower_8 from "../assets/images/f3.jpg";
import Flower_9 from "../assets/images/f4.jpg";
import Flower_10 from "../assets/images/f5.jpg";
import Flower_11 from "../assets/images/f11.jpg";
import Flower_12 from "../assets/images/f14.jpg";
import Flower_13 from "../assets/images/f16.jpg";
import Flower_14 from "../assets/images/f17.jpg";
import Border from "../assets/images/border.png";

function Cards() {
  // ================= STATES =================
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ================= CATEGORIES =================
  const categories = ["All", "Tropical", "Aquatic", "Climbing", "Ornamental"];

  // ================= FLOWER DATA =================
  const flowers = [
    {
      id: 1,
      image: Flower_1,
      category: "Climbing Flower",
      name: "The Morning Glory",
      description:
        "Vibrant blue blooms that open in the morning and symbolize love and new beginnings.",
      sunlight: "Full Sun",
      water: "Medium",
    },

    {
      id: 2,
      image: Flower_2,
      category: "Tropical Flower",
      name: "The Pink Frangipani",
      description:
        "Fragrant blossoms with vibrant colors that thrive in warm climates and tropical gardens.",
      sunlight: "Full Sun",
      water: "Medium",
    },

    {
      id: 3,
      image: Flower_3,
      category: "Aquatic Flower",
      name: "Lotus",
      description:
        "A sacred flower that blooms beautifully above the water and symbolizes purity and resilience.",
      sunlight: "Full Sun",
      water: "High",
    },

    {
      id: 4,
      image: Flower_4,
      category: "Ornamental Flower",
      name: "The Rose",
      description:
        "A timeless flower celebrated for its delicate petals, enchanting fragrance, and elegance.",
      sunlight: "Full Sun",
      water: "Medium",
    },

    {
      id: 5,
      image: Flower_5,
      category: "Tropical Flower",
      name: "The White Frangipani",
      description:
        "Graceful white petals with a golden center and a sweet fragrance for tropical landscapes.",
      sunlight: "Full Sun",
      water: "Medium",
    },

    {
      id: 6,
      image: Flower_6,
      category: "Ornamental Flower",
      name: "White Lily",
      description:
        "Elegant trumpet-shaped blooms known for their pleasant fragrance and peaceful appearance.",
      sunlight: "Partial Sun",
      water: "Medium",
    },

    {
      id: 7,
      image: Flower_7,
      category: "Tropical Flower",
      name: "The Hibiscus",
      description:
        "Hibiscus is a vibrant tropical flower known for its large, delicate blooms and striking colors. It adds a cheerful and exotic touch to gardens and thrives in warm, sunny conditions.",
      sunlight: "Full Sun",
      water: "Medium",
    },

    {
      id: 8,
      image: Flower_8,
      category: "Ornamental Flower",
      name: "Blue Hibiscus",
      description:
        "Blue Hibiscus produces beautiful lavender-blue blooms with a delicate center. Its graceful flowers and lush foliage make it a lovely choice for ornamental gardens and landscapes.",
      sunlight: "Full Sun",
      water: "Medium",
    },

    {
      id: 9,
      image: Flower_9,
      category: "Aquatic Flower",
      name: "The Water Lily",
      description:
        "Water Lilies are graceful aquatic flowers that float beautifully on the surface of ponds and still water. Their colorful blooms bring a peaceful and natural charm to water gardens.",
      sunlight: "Full Sun",
      water: "High",
    },

    {
      id: 10,
      image: Flower_10,
      category: "Aquatic Flower",
      name: "Water Hyacinth",
      description:
        "Water Hyacinth is a floating aquatic plant recognized for its soft purple flowers and glossy green leaves. It adds beauty and color to ponds and water gardens.",
      sunlight: "Full Sun",
      water: "High",
    },

    {
      id: 11,
      image: Flower_11,
      category: "Tropical Flower",
      name: "Pink Hibiscus",
      description:
        "Pink Hibiscus is admired for its large, delicate pink petals and prominent floral center. Its bright blooms create a tropical and welcoming atmosphere in gardens.",
      sunlight: "Full Sun",
      water: "Medium",
    },

    {
      id: 12,
      image: Flower_12,
      category: "Ornamental Flower",
      name: "The Sunflower",
      description:
        "Sunflowers are cheerful flowering plants known for their bright golden petals and large central disks. They thrive in sunny gardens and are often associated with happiness, warmth, and positivity.",
      sunlight: "Full Sun",
      water: "Medium",
    },
  ];

  // ================= SEARCH + CATEGORY FILTER =================
  const filteredFlowers = flowers.filter((flower) => {
    const search = searchTerm.trim().toLowerCase();

    // Search condition
    const matchesSearch =
      flower.name.toLowerCase().includes(search) ||
      flower.category.toLowerCase().includes(search) ||
      flower.description.toLowerCase().includes(search);

    // Category condition
    const matchesCategory =
      selectedCategory === "All" ||
      flower.category.toLowerCase().includes(selectedCategory.toLowerCase());

    // Both conditions must be true
    return matchesSearch && matchesCategory;
  });

  // ================= CHECK IF FILTERING IS ACTIVE =================
  const isFiltering = searchTerm.trim() !== "" || selectedCategory !== "All";

  // ================= VISIBLE FLOWERS =================
  const visibleFlowers = isFiltering
    ? filteredFlowers
    : showAll
      ? flowers
      : flowers.slice(0, 3);

  return (
    <section
      className="relative overflow-hidden bg-white text-gray-700"
      style={{
        backgroundImage: `url(${Border})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= SOFT OVERLAY ================= */}
      <div className="absolute inset-0 bg-white/55"></div>

      <div className="relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-7xl px-5 pt-35 pb-10 text-center">
          {/* Main Heading */}
          <h1 className="font-serif text-4xl font-bold text-green-950 md:text-5xl">
            Explore the Garden
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
            Discover beautiful flowers and learn what makes each one special.
          </p>

          {/* Decorative Element */}
          <div className="mt-4 flex items-center justify-center gap-2 text-green-700">
            <span className="h-px w-8 bg-green-300"></span>

            <span className="text-lg">❧</span>

            <span className="h-px w-8 bg-green-300"></span>
          </div>

          {/* ================= SEARCH + FILTER ================= */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 md:flex-row">
            {/* ================= SEARCH ================= */}
            <div className="flex w-full max-w-[260px] items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              {/* Search Icon */}
              <svg
                className="mr-2 h-4 w-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7"></circle>

                <path d="m20 20-4-4"></path>
              </svg>

              {/* Search Input */}
              <input
                type="text"
                value={searchTerm}
                placeholder="Search flowers..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>

            {/* ================= FILTER BUTTONS ================= */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAll(false);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-green-900 text-white shadow-sm"
                      : "border border-green-200 bg-white/80 text-gray-700 hover:border-green-700 hover:text-green-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FLOWER CARDS ================= */}
        <div className="mx-auto max-w-5xl px-5 pb-8">
          {visibleFlowers.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {visibleFlowers.map((flower) => (
                <div
                  key={flower.id}
                  data-aos="flip-up"
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* ================= IMAGE ================= */}
                  <div className="relative overflow-hidden">
                    <img
                      src={flower.image}
                      alt={flower.name}
                      className="h-56 w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* ================= FAVORITE BUTTON ================= */}
                    <button
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-green-800 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
                      aria-label={`Favorite ${flower.name}`}
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                      </svg>
                    </button>
                  </div>

                  {/* ================= CARD CONTENT ================= */}
                  <div className="p-5">
                    {/* Category */}
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-green-700">
                      {flower.category}
                    </p>

                    {/* Flower Name */}
                    <h2 className="mb-2 font-serif text-xl font-bold text-gray-900">
                      {flower.name}
                    </h2>

                    {/* Description */}
                    <p className="min-h-[60px] text-xs leading-relaxed text-gray-600">
                      {flower.description}
                    </p>

                    {/* ================= PLANT INFO ================= */}
                    <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-3">
                      {/* Sunlight */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">☀</span>

                        <div>
                          <p className="text-[9px] uppercase tracking-wide text-gray-400">
                            Sunlight
                          </p>

                          <p className="text-[10px] font-semibold text-gray-700">
                            {flower.sunlight}
                          </p>
                        </div>
                      </div>

                      {/* Water */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">💧</span>

                        <div>
                          <p className="text-[9px] uppercase tracking-wide text-gray-400">
                            Water
                          </p>

                          <p className="text-[10px] font-semibold text-gray-700">
                            {flower.water}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ================= EXPLORE MORE ================= */}
                    <div className="mt-4">
                      <button className="group/link inline-flex items-center text-xs font-semibold text-green-800">
                        Explore More
                        <svg
                          className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14"></path>

                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ================= NO RESULTS ================= */
            <div className="py-16 text-center">
              <div className="mb-3 text-4xl">🌿</div>

              <h2 className="font-serif text-2xl font-bold text-green-950">
                No flowers found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Try searching for another flower or selecting a different
                category.
              </p>
            </div>
          )}

          {/* ================= VIEW MORE ================= */}
          {!isFiltering && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center rounded-full bg-green-900 px-7 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-800 hover:shadow-lg"
              >
                {showAll ? "Show Less" : "View More Flowers"}

                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    showAll ? "rotate-180" : "group-hover:translate-x-1"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14"></path>

                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* ================= BOTTOM SPACING ================= */}
        <div className="h-10"></div>
      </div>
    </section>
  );
}

export default Cards;
