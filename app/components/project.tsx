"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "Project One",
      desc: "A dynamic web experience inspired by bold comic visuals.",
      img: "/img1.jpg",
      link: "/projects/project-one",
    },
    {
      title: "Project Two",
      desc: "A creative UI exploration with expressive animations.",
      img: "/img1.jpg",
      link: "/projects/project-two",
    },
    {
      title: "Project Three",
      desc: "A stylish interactive page mixing art and technology.",
      img: "/img1.jpg",
      link: "/projects/project-three",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 w-full text-black relative overflow-hidden"
    >

              <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)]
            bg-[length:14px_14px]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold uppercase tracking-wider mb-12 text-center drop-shadow-[4px_4px_0px_#000]"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projectList.map((p, i) => (
            <Link key={i} href={p.link}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="
                  bg-white border-4 border-black rounded-2xl 
                  shadow-[8px_8px_0px_#000] overflow-hidden
                  hover:-translate-y-2 hover:shadow-[10px_10px_0px_#000]
                  transition-all cursor-pointer relative
                "
              >
                {/* CARD GLARE */}
                <div
                  className="
                    absolute inset-0 pointer-events-none
                    bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.75)_50%,rgba(255,255,255,0)_100%)]
                    opacity-40 mix-blend-screen
                  "
                />

                <div className="relative w-full h-48 border-b-4 border-black">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                    {p.title}
                  </h3>

                  <p className="text-gray-800 font-medium leading-relaxed">
                    {p.desc}
                  </p>

                  <div
                    className="
                      mt-4 bg-yellow-300 px-3 py-1 inline-block
                      border-2 border-black 
                      shadow-[3px_3px_0px_#000]
                      text-sm font-extrabold uppercase 
                      -rotate-2
                    "
                  >
                    View Project
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
