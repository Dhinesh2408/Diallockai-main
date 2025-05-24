"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from 'next/image';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        'Close <span class="highlight">3x More Deals</span> Faster with Your AI-Powered Sales Agent',
      ],
      typeSpeed: 20,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="
        relative w-full min-h-screen
        flex items-center justify-center
        text-center
        px-6 pt-32
        md:pt-24
        lg:pt-32
        xl:pt-40
        2xl:pt-48
        md:px-12 lg:px-24
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          quality={75}
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-white/20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-black max-w-[720px] w-full mx-auto px-4">
        <h1 className="
          text-2xl  
          sm:text-3xl md:text-4xl
          font-bold leading-tight font-serif tracking-tight text-black mb-6
        ">
          <span ref={typedRef} />
        </h1>

        <p className="
          text-sm 
          sm:text-base md:text-lg
          font-medium text-gray-700 mb-10 font-[var(--font-inter)]
        ">
          Deep Market Research, Personalized Outreach and Increased Sales Leads for Higher Conversion Rates
        </p>

        <div className="flex justify-center mt-10">
          <button
            className="
              mt-6 md:-mt-2
              w-[12em] h-[2.8em] rounded-full
              flex justify-center items-center gap-2
              bg-[#1C1A1C] text-[#AAAAAA] font-semibold uppercase tracking-wide
              transition-all duration-450 ease-in-out
              font-[var(--font-poppins)]
              md:hover:bg-gradient-to-t md:hover:from-[#A47CF3] md:hover:to-[#683FEA]
              md:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-4px_0_rgba(0,0,0,0.2),0_0_0_4px_rgba(255,255,255,0.2),0_0_180px_0_#9917FF]
              md:hover:-translate-y-0.5
            "
          >
            <svg
              height="16"
              width="16"
              viewBox="0 0 24 24"
              className="sparkle fill-[#AAAAAA] transition-transform duration-800 ease md:hover:fill-white md:hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-sm text-[#AAAAAA] font-medium md:hover:text-white whitespace-nowrap">
              Generate Lead
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
