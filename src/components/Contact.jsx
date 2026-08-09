import React from "react";
import ContactBg from "../assets/images/contact.png";

function Contact() {
  return (
    <section className="min-h-screen py-20 px-6 flex items-center mt-10">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-2 gap-16 items-center">
        {/* ================= LEFT SIDE ================= */}

        <div className="text-gray-800" data-aos="fade-right">
          <p className="text-green-700 font-bold tracking-[4px] text-sm mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-5xl font-serif font-bold leading-tight mb-6">
            Let's Grow
            <span className="text-green-700"> Together</span>
          </h1>

          <p className="text-xl font-semibold text-gray-700 mb-5">
            We'd Love To Hear From You 🌿
          </p>

          <p className="text-gray-600 text-md leading-8 max-w-md">
            Have a question, suggestion, or simply want to share your love for
            nature? We'd love to hear from you and talk about plants, flowers,
            gardens, and the beauty of nature.
          </p>

          {/* Small contact details */}

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <span
                className="
                w-11 h-11
                rounded-full
                bg-green-700/10
                text-green-700
                flex items-center justify-center
              "
              >
                <i className="fa-solid fa-envelope"></i>
              </span>

              <span className="text-gray-700">hello@verdania.com</span>
            </div>

            <div className="flex items-center gap-4">
              <span
                className="
                w-11 h-11
                rounded-full
                bg-green-700/10
                text-green-700
                flex items-center justify-center
              "
              >
                <i className="fa-solid fa-leaf"></i>
              </span>

              <span className="text-gray-700">Explore • Learn • Grow</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE FORM ================= */}

        <div
          className="
            w-full
            p-10
            rounded-[25px]
            bg-white/20
            backdrop-blur-2xl
            border
            border-white/30
            shadow-2xl
          "
          style={{
            backgroundImage: `url(${ContactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="zoom-in"
        >
          {/* Inner overlay */}

          <div
            className="
            bg-white/50
            backdrop-blur-xl
            rounded-2xl
            p-7
          "
          >
            <form>
              {/* NAME + EMAIL */}

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-green-800 font-bold mb-2"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-lg
                      bg-white/90
                      border
                      border-green-700/20
                      outline-none
                      focus:border-green-600
                      focus:ring-2
                      focus:ring-green-500/20
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-green-800 font-bold mb-2"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-lg
                      bg-white/90
                      border
                      border-green-700/20
                      outline-none
                      focus:border-green-600
                      focus:ring-2
                      focus:ring-green-500/20
                    "
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-green-800 font-bold mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    bg-white/90
                    border
                    border-green-700/20
                    outline-none
                    resize-none
                    focus:border-green-600
                    focus:ring-2
                    focus:ring-green-500/20
                  "
                ></textarea>
              </div>

              {/* SEND BUTTON */}

              <button
                type="submit"
                className="
                  w-full
                  mt-6
                  py-3
                  rounded-lg
                  bg-gradient-to-r
                  from-green-700
                  to-emerald-500
                  text-white
                  font-bold
                  text-lg
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-xl
                "
              >
                <i className="fa-solid fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
