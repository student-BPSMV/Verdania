import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <section className="about-section pt-20 pb-10">
        <div className="main-container">
          <div className="content-part mt-20 ml-30 mr-30">
            <h3
              className="text-md font-bold text-green-500"
              data-aos="fade-down"
            >
              ABOUT VERDANIA
            </h3>
            <h1 className="font-bold text-3xl font-serif" data-aos="fade-down">
              A Sanctuary of{" "}
              <span className="text-4xl text-green-500">Green</span>,<br></br>A
              World of <span className="text-4xl text-green-500">Peace</span>
            </h1>
            <p className="w-[950px] mt-5" data-aos="fade-down">
              Welcome to Verdania, a virtual sanctuary where the timeless beauty
              of nature comes to life. Created for plant lovers, curious
              explorers, and anyone who finds peace in greenery, Verdania is a
              place to discover the fascinating world of flowers and plants from
              across the globe. From vibrant blossoms and fragrant flowers to
              medicinal herbs and ornamental plants, every collection has been
              thoughtfully curated to celebrate the diversity and wonder of the
              natural world. Each plant tells its own story, revealing its
              origins, unique characteristics, and the role it plays in our
              environment. Whether you're here to learn, explore, or simply
              admire nature's artistry, Verdania invites you to wander through
              its digital garden and experience the serenity, beauty, and
              inspiration that every bloom has to offer.
            </p>
          </div>
          <div className="cards-group grid grid-cols-3 w-[1000px] gap-0 mt-10 ml-30">
            <div
              className="mission border-1 rounded-lg p-4 w-[270px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105"
              data-aos="flip-up"
            >
              <h1 className="font-bold text-xl">🌱 Our Mission</h1>
              <p className="text-md">
                To inspire a deeper appreciation for nature by making the
                beauty, diversity, and knowledge of flowers and plants
                accessible through an engaging virtual garden experience.
              </p>
            </div>
            <div
              className="vision border-1 rounded-lg p-4 w-[270px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105"
              data-aos="flip-up"
            >
              <h1 className="font-bold text-xl">🌍 Our Vision</h1>
              <p className="text-md">
                To create a peaceful digital sanctuary where people of all ages
                can explore, learn, and reconnect with nature—one flower, one
                plant, and one story at a time.
              </p>
            </div>
            <div
              className="includes border-1 rounded-lg p-4 w-[270px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105"
              data-aos="flip-up"
            >
              <h1 className="font-bold text-xl">🍀What we Have ?</h1>
              <ul className="text-md">
                <li>🪷Beautiful Flowers</li>
                <li>🌹Medicinal Plants</li>
                <li>🌷Seasonal Blooms</li>
                <li>🌻Garden Tips</li>
                <li>🌺Ornamental Plants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
