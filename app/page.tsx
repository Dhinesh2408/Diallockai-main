"use client";

import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Savings from "./components/Savings";
import Support from "./components/Support";
import AIWorkflow from "./components/Workflow";
import Image from "next/image";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedSection({ children, id }: { children: React.ReactNode; id?: string }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariant}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [play, setPlay] = useState(false);
  const router = useRouter();

  const handleBookDemo = () => {
    router.push("https://cal.com/dhinesh-valentine-flbxpp/test");
  };

  return (
    <main className="text-gray-900 font-poppins min-h-screen bg-transparent">
      <Hero />

      {/* Demo Video */}
      <div className="mt-10 w-full rounded-xl overflow-hidden shadow-lg border border-gray-300 aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[450px] lg:mx-auto relative">
        {!play && (
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
            aria-label="Play Demo Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
        {play ? (
          <iframe
            src="https://www.youtube.com/embed/b07W6BfVpBQ?si=5EVyBIlU3mDcApA_&autoplay=1&mute=1"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          <Image
            src="https://img.youtube.com/vi/b07W6BfVpBQ/hqdefault.jpg"
            alt="Video thumbnail"
            width={1000}
            height={562}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* AI Workflow Section */}
      <AIWorkflow />

      {/* Services Section */}
      <Services />

      {/* Calculate earnings */}
      <Savings />

      {/* Support Section */}
      <Support />

      {/* Demo section in last */}
      <AnimatedSection id="demo">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 py-12">
            {/* Left Text Content */}
            <div className="md:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight font-serif text-left"
              >
                Supercharge Your B2B Sales with{" "}
                <span className="text-blue-600 font-extrabold">Diallock AI</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed font-serif text-left"
              >
                Personalized outreach at scale — convert your leads into loyal customers in just{" "}
                <strong className="text-blue-500 font-semibold">a few days</strong> using AI-powered automation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <button
                  onClick={handleBookDemo}
                  className="bg-black text-white font-semibold text-base px-8 py-3 rounded-full shadow-md transition duration-300 hover:bg-gray-800 hover:scale-105"
                >
                  Book a Free Demo
                </button>
              </motion.div>
            </div>

            {/* Right Side Preview Video with Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-1/2 w-full"
            >
              <div className="border border-gray-300 rounded-2xl shadow-lg overflow-hidden p-2 bg-white">
                <video
                  src="/Demo1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>
    </main>
  );
}
