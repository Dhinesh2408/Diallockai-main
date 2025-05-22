// app/services/page.tsx

'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    heading: "Personalization in Sales",
    subHeading: "Reach with Relevance",
    points: [
      "Send up to 300 safe connection requests weekly with AI-enhanced targeting.",
      "Scrape and personalize data from groups, events, and more for tailored messages.",
      "Prioritize top-performing campaigns for better conversion.",
    ],
    image: "/s.jpg",
  },
  {
    heading: "Client Outreach",
    subHeading: "Smarter Follow-ups, Better Results",
    points: [
      "Triple your open rate using smart follow-up through omnichannel strategies.",
      "Set up any email provider in seconds and launch campaigns fast.",
      "Improve replies by monitoring email interactions and refining sequences.",
    ],
    image: "/s1.jpg",
  },
  {
    heading: "Sales Kickoff",
    subHeading: "Start with Impact",
    points: [
      "Start with a compelling first impression using LinkedIn visit and auto-like.",
      "Use behavioral conditions to design responsive automation flows.",
      "Pinpoint drop-off points with visualized outreach sequences.",
    ],
    image: "/s2.jpg",
  },
  {
    heading: "Lead Generation",
    subHeading: "Prospects That Matter",
    points: [
      "Automatically gather quality leads from LinkedIn events, posts, and comments.",
      "Use AI-driven segmentation for precise targeting.",
      "Enrich leads with actionable data from multiple sources.",
    ],
    image: "/s.jpg",
  },
  {
    heading: "Sales Automation",
    subHeading: "Workflows That Work for You",
    points: [
      "Trigger multi-step automated flows with 10+ actions and logic gates.",
      "Blend human-like behavior into every message and action.",
      "Use campaign-level insights to optimize for performance.",
    ],
    image: "/s1.jpg",
  },
  {
    heading: "B2B Sales",
    subHeading: "Close Deals with Precision",
    points: [
      "Shorten your sales cycle using targeted industry outreach.",
      "Map and track decision-makers using LinkedIn scraping.",
      "Launch integrated email and LinkedIn flows tailored to B2B personas.",
    ],
    image: "/s2.jpg",
  },
];

export default function FullServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-800">
        All Services We Offer
      </h1>

      <div className="space-y-28">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
            className="flex flex-col lg:flex-row items-center gap-10"
          >
            <div className="lg:w-1/2 space-y-5 text-gray-800">
              <h3 className="text-3xl md:text-4xl font-bold">{service.heading}</h3>
              <h4 className="text-xl md:text-2xl text-blue-600 font-semibold">
                {service.subHeading}
              </h4>
              <ul className="list-disc pl-6 text-base md:text-lg leading-relaxed space-y-2 font-light text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <Image
              src={service.image}
              alt={service.heading}
              className="lg:w-1/2 w-full rounded-3xl shadow-xl border border-gray-200"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
