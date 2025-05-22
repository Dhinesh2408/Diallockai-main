"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type Step = {
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    title: "1: Smart Prospecting with AI",
    description:
      "Leverage artificial intelligence to identify high-conversion sales leads through intelligent data analysis, replacing ineffective cold call lists.",
    image: "/ss.png",
  },
  {
    title: "2: Personalized Outreach Automation",
    description:
      "DialLock AI automates personalized sales messages and follow-ups to increase customer engagement and boost conversion rates.",
    image: "/ss.png",
  },
  {
    title: "3: Intelligent Sales Follow-Up",
    description:
      "AI-powered adaptive follow-ups respond dynamically to customer engagement, ensuring natural communication that drives sales success.",
    image: "/ss.png",
  },
];

function WorkflowStep({ step, isEven, index }: { step: Step; isEven: boolean; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`flex flex-col lg:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-md border border-gray-200 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Section */}
      <div className="lg:w-1/2 w-full max-w-xl flex-shrink-0">
        <Image
          src={step.image}
          alt={`AI sales workflow step: ${step.title}`}
          width={480}
          height={320}
          className="rounded-lg shadow-md object-cover border border-gray-200"
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 space-y-3 font-open-sans">
        <h3 className="text-blue-600 text-2xl md:text-3xl font-semibold font-poppins">
          {step.title}
        </h3>
        <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function AiWorkflow() {
  return (
    <section
      id="ai-workflow"
      aria-label="AI Sales Workflow Steps"
      className="py-16 px-6 bg-[#f4f5f7] text-gray-900 scroll-mt-16"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center font-poppins tracking-wide">
        AI Workflow Automation
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            step={step}
            isEven={index % 2 === 0}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
