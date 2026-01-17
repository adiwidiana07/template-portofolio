"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPython,
} from "react-icons/si";


export default function Skills() {
 const skillList = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

  return (
    <section
      id="skills"
      className="py-32 w-full text-white relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-black" />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]
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
          className="text-5xl font-extrabold uppercase tracking-wider mb-16 text-center drop-shadow-[4px_4px_0px_#000]"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {skillList.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center gap-3"
              >
                <Icon size={64} color={skill.color} />
                <p className="font-semibold tracking-wide">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
