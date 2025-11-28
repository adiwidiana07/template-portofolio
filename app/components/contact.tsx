"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-32 relative text-black">

      {/* Background halftone */}
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          bg-[radial-gradient(circle,rgba(0,0,0,0.12)_2px,transparent_2px)]
          [background-size:28px_28px]
        "
      />

      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black uppercase text-center mb-12 
                     drop-shadow-[5px_5px_0px_#000]"
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            bg-white p-10 rounded-2xl border-4 border-black
            shadow-[10px_10px_0px_#000]
            max-w-3xl mx-auto space-y-6
          "
        >
          {/* Name */}
          <div>
            <label className="block font-bold mb-2">Name</label>
            <input
              name="name"
              required
              className="
                w-full px-4 py-3 border-4 border-black rounded-xl
                focus:outline-none focus:border-gray-800
              "
              type="text"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-bold mb-2">Email</label>
            <input
              name="email"
              required
              type="email"
              className="
                w-full px-4 py-3 border-4 border-black rounded-xl
                focus:outline-none focus:border-gray-800
              "
              placeholder="Your Email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-bold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="
                w-full px-4 py-3 border-4 border-black rounded-xl
                focus:outline-none focus:border-gray-800
              "
              placeholder="Your Message"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              bg-yellow-300 font-black text-lg px-6 py-3
              border-4 border-black rounded-xl
              shadow-[6px_6px_0px_#000]
              hover:shadow-[10px_10px_0px_#000]
              hover:-translate-x-1 hover:-translate-y-1
              transition-all
            "
          >
            Send Message
          </button>

          {/* Status */}
          {status === "loading" && (
            <p className="text-gray-700 font-semibold">Sending...</p>
          )}
          {status === "success" && (
            <p className="text-green-600 font-bold">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-bold">Error sending message.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
