"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", target: "home" },       
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-6 py-4 flex items-center justify-between z-50 shadow-md">
      
      <h1 className="text-xl font-bold text-gray-800">Your Name</h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        {navItems.map((item) => (
          <li key={item.target}>
            <a
              href={`#${item.target}`}
              onClick={() => setActive(item.target)}
              className={`
                px-3 py-1 rounded-lg transition-all
                ${active === item.target
                  ? "bg-yellow-300 border-2 border-black shadow-[3px_3px_0px_#000]"
                  : "hover:bg-black hover:text-white hover:shadow-[3px_3px_0px_#000]"
                }
              `}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-2xl text-gray-800"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>

        <ul className="flex flex-col gap-4 text-gray-900 text-lg">
          {navItems.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                onClick={() => {
                  setActive(item.target);
                  setOpen(false);
                }}
                className={`
                  block w-full px-3 py-2 rounded-lg
                  ${active === item.target
                    ? "bg-yellow-300 border-2 border-black shadow-[3px_3px_0px_#000]"
                    : "hover:bg-black hover:text-white hover:shadow-[3px_3px_0px_#000]"
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
