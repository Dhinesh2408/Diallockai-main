"use client";

import React from "react";

const PreBooking = () => {
  return (
    <section className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-serif mb-6">
          Pre-Book Access to Our <span className="text-indigo-600">AI-Powered LinkedIn Outreach</span> Solution
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-[var(--font-inter)] mb-8">
          We&apos;re launching an advanced automation tool that supercharges your sales outreach on LinkedIn. Seamlessly engage
          B2B clients, generate qualified leads, and close deals faster — all with minimal manual effort.
          <br className="hidden sm:block" />
          Be the first to experience <strong>automated prospecting</strong>, <strong>AI-driven messaging</strong>, and <strong>personalized follow-ups</strong> that convert.
        </p>

        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for pre-booking! We’ll notify you at launch.");
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 w-full sm:w-[300px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="
              px-6 py-3 rounded-md 
              bg-indigo-600 text-white font-semibold tracking-wide uppercase 
              hover:bg-indigo-700 transition-all duration-300
            "
          >
            Pre-Book Now
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 font-[var(--font-inter)]">
          No spam. Only early access to smarter client outreach.
        </p>
      </div>
    </section>
  );
};

export default PreBooking;
