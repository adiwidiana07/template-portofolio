import type { Metadata } from "next";
import { Inter, Caveat } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "./components/navbar";
import React from "react";
import AOSWrapper from "./components/aoswrap";
import Footer from "./components/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const customfont = localFont({
  src: '../public/the_simple_life/custom.otf',
  display: 'swap',
  variable: '--font-simplelife'
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat'
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Your Name",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll marvel-bg ">
      <body className={`${inter.variable} ${caveat.variable} ${customfont.variable}`}>
        
        <AOSWrapper>
        <Navbar />
        {children}
        <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
