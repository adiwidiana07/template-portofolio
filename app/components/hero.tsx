
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hitung opacity berdasarkan scroll
  const opacity = Math.max(1 - scrollY / 500, 0);
  
  return (
    <section
      id="home"
      className="
        fixed top-0 left-0
        w-full h-screen
        py-20 sm:py-28 md:py-32
        text-black overflow-hidden
        z-10
      "
      style={{ opacity }}
    >

      {/* Background Halftone dengan Parallax */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)]
          "
          style={{
            backgroundSize: '14px 14px'
          }}
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

        {/* LEFT TEXT dengan Parallax */}
        <div 
          className="text-center md:text-left"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <h1
            className="
              text-4xl sm:text-5xl lg:text-6xl 
              font-black mb-4 leading-snug
            "
          >
            Hi Im <span className="text-yellow-300">Canzy</span>
             <br />A Frontend Developer
          </h1>

          <p
            className="
              text-base sm:text-lg 
              text-gray-800 
              max-w-md mx-auto md:mx-0
            "
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
            >
              Lets Go
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 text-2xl sm:text-3xl">
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

        {/* RIGHT IMAGE dengan Parallax */}
        <div
          className="flex justify-center md:justify-end"
          style={{
            transform: `translateY(${scrollY * 0.2}px) scale(${Math.max(1 - scrollY / 2000, 0.8)})`
          }}
        >
          <Image
            src="/img2.png"
            alt="Your Portrait"
            width={660}
            height={660}
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}