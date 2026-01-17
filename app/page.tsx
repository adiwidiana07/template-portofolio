import React from "react";
import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skill";


export default function Home() {
  return (
    <main className="pt-[100vh]" >
      <Hero />
      <About />
      <Skills />
      <Projects />

    </main>
  )
}
