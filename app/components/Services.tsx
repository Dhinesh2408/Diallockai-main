"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const services = [
  {
    heading: "Personalized Sales Outreach with AI",
    subHeading: "Reach Prospects with Relevance",
    points: [
      "Send up to 300 safe connection requests weekly with AI-enhanced targeting for better lead quality.",
      "Scrape and personalize data from LinkedIn groups, events, and more for tailored, effective messaging.",
      "Prioritize top-performing campaigns to maximize conversion rates.",
    ],
    video: "/Demo1.mp4",
  },
  {
    heading: "Automated Client Outreach",
    subHeading: "Smarter Follow-ups for Higher Engagement",
    points: [
      "Triple your email open rates using AI-powered omnichannel follow-up strategies.",
      "Quickly set up any email provider and launch personalized campaigns in minutes.",
      "Analyze and optimize email sequences by monitoring interactions and reply rates.",
    ],
    video: "/Demo1.mp4",
  },
  {
    heading: "AI-Driven Lead Generation",
    subHeading: "Find Quality Prospects That Matter",
    points: [
      "Automatically gather high-quality leads from LinkedIn events, posts, and comments.",
      "Segment leads precisely using AI-driven data enrichment.",
      "Enrich your lead database with actionable insights from multiple data sources.",
    ],
    video: "/Demo1.mp4",
  },
];

export default function Services() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Face challenges reaching out to clients?",
        "Struggling with outbound sales engagement?",
        "Want better lead generation results?",
      ],
      typeSpeed: 25,
      backSpeed: 15,
      backDelay: 2200,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="services"
      aria-label="Diallockai Sales Outreach Services"
      className="max-w-6xl mx-auto px-6 py-20 relative"
    >
      {/* Top Bar with Animated Problem Statement */}
      <div className="w-full bg-gradient-to-r from-[#d0e2ff] to-[#f0f4ff] text-blue-900 font-extrabold text-center text-2xl md:text-3xl py-10 rounded-xl mb-20 shadow-sm select-none font-playfair">
        <span ref={typedRef} className="block min-h-[2.5rem]" />
        <p className="text-gray-800 text-base md:text-lg font-medium mt-3 font-inter">
          <strong>Diallockai</strong> empowers seamless sales outreach and solves outbound engagement challenges.
        </p>
      </div>

      {/* Services Cards */}
      <div className="space-y-24">
        {services.map((service, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.15 }}
            className="flex flex-col lg:flex-row items-center gap-10"
            aria-label={`${service.heading} service description`}
          >
            {/* Text Section */}
            <div className="lg:w-1/2 space-y-5 text-gray-800 font-inter">
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-playfair">
                {service.heading}
              </h3>
              <h4 className="text-xl md:text-2xl text-blue-600 font-semibold font-inter">
                {service.subHeading}
              </h4>
              <ul className="list-disc pl-6 text-base md:text-lg leading-relaxed space-y-2 font-light text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Video Section */}
            <div className="lg:w-1/2 w-full">
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl shadow-xl border border-gray-200 object-cover"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
