"use client";

import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white mt-20 border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-black">Your Name</h2>
          <p className="text-gray-700 mt-2 max-w-xs">
            Thanks for visiting my portfolio. Stay connected for more updates.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-extrabold mb-3 text-black">Links</h3>
          <ul className="flex flex-col gap-2 text-gray-800 font-medium">
            <li>
              <a
                href="#hero"
                className="hover:underline hover:text-black"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline hover:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline hover:text-black"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-xl font-extrabold mb-3 text-black">Follow Me</h3>

          <div className="flex items-center gap-5 text-3xl">
            <a
              href="#"
              className="text-black hover:text-blue-600 transition-all
                border-2 border-black p-2 rounded-xl
                shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="text-black hover:text-gray-900 transition-all
                border-2 border-black p-2 rounded-xl
                shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-black hover:text-pink-500 transition-all
                border-2 border-black p-2 rounded-xl
                shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center py-4 border-t-4 border-black bg-gray-100">
        <p className="font-medium text-gray-700">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
