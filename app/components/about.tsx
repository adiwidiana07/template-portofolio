"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        w-full 
        py-32 
        text-black 
        flex 
        items-center 
        justify-center 
        relative 
        overflow-visible
      "
    >

      {/* Comic speed lines layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="
          absolute inset-0 -z-10 pointer-events-none
          bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_12px)]
        "
      />

      {/* Main container */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

        {/* Comic info panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white p-8 rounded-2xl 
            shadow-[8px_8px_0px_#000] 
            border-4 border-black
          "
        >
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tight">
            About Me
          </h2>

          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            I’m a creative developer with passion for expressive, bold,
            comic-inspired digital experiences. My work blends storytelling,
            stylized visuals, and clean interactive design.
          </p>

          <p className="text-lg font-medium text-gray-800 mt-4">
            I love building web interfaces that feel alive, energetic, and full
            of personality just like the dynamic panels you see in American
            comic art.
          </p>
        </motion.div>

        {/* Comic portrait panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="
            relative bg-white p-6 rounded-2xl
            shadow-[8px_8px_0px_#000] 
            border-4 border-black 
            flex justify-center
          "
        >
          {/* Photo */}
          <motion.div
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="
              relative w-64 h-64 rounded-xl overflow-hidden 
              border-4 border-black shadow-[6px_6px_0px_#000]
            "
          >
            <Image
              src="/img.jpg"
              alt="Me"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Comic label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="
              absolute -bottom-6 
              bg-yellow-300 px-4 py-2 
              border-2 border-black 
              shadow-[4px_4px_0px_#000]
              text-xl font-black uppercase
              -rotate-3
            "
          >
            The Creator
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
