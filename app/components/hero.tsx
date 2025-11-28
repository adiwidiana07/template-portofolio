'use client';

import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="
        relative w-full 
        py-20 sm:py-28 md:py-32 
        text-black overflow-hidden
      "
      id="home"
    >

      {/* Background Halftone */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)]
            bg-size-[14px_14px]
          "
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div
        className="
          relative max-w-6xl mx-auto 
          w-full 
          px-5 sm:px-6 md:px-8
          grid 
          grid-cols-1 md:grid-cols-2 
          gap-12 md:gap-16 
          items-center
        "
      >

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h1
            className="
              text-4xl sm:text-5xl lg:text-6xl 
              font-black mb-4 leading-snug
            "
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="false"
          >
            Welcome to My Portfolio
          </h1>

          <p
            className="
              text-base sm:text-lg 
              text-gray-800 
              max-w-md mx-auto md:mx-0
            "
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="800"
            data-aos-once="false"
          >
            Discover my work and learn more about me.
          </p>

          {/* BUTTON + ICONS */}
          <div className="flex flex-col items-center md:items-start space-y-5 mt-6">

            {/* BUTTON */}
            <a
              href="#projects"
              className="
                inline-block
                bg-white hover:bg-gray-200 
                text-black font-extrabold 
                px-5 sm:px-6 py-3 
                rounded-xl 
                border-4 border-black
                shadow-[5px_5px_0px_#000]
                hover:shadow-[8px_8px_0px_#000]
                hover:-translate-x-1 hover:-translate-y-1
                active:shadow-[1px_1px_0px_#000]
                active:translate-x-1 active:translate-y-1
                transition-all
                text-sm sm:text-base
              "
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="false"
            >
              Lets Go
            </a>

            {/* SOCIAL ICONS */}
            <div
              className="flex items-center gap-4 text-2xl sm:text-3xl"
              data-aos="fade-right"
              data-aos-delay="450"
              data-aos-duration="800"
              data-aos-once="false"
            >
              <a href="#" className="text-black hover:text-blue-600 transition-colors">
                <FaFacebook />
              </a>

              <a href="#" className="text-black hover:text-gray-900 transition-colors">
                <FaGithub />
              </a>

              <a href="#" className="text-black hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="false"
        >
          <Image
            src="/img1.jpg"
            alt="Your Portrait"
            width={260}
            height={260}
            className="
              w-[180px] h-[180px]
              sm:w-[220px] sm:h-[220px]
              md:w-[260px] md:h-[260px]
              lg:w-[300px] lg:h-[300px]

              rounded-full
              border-8 md:border-10 border-black
              shadow-[10px_10px_0px_#000]
              hover:shadow-[14px_14px_0px_#000]
              hover:-translate-x-1 hover:-translate-y-1
              transition-all
            "
          />
        </div>

      </div>
    </section>
  );
}
