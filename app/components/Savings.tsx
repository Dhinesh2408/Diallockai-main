import { motion} from "framer-motion";
import { useState, useEffect } from "react";

export default function EarningsCalculator() {
  const [teamSize, setTeamSize] = useState(100);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [queriesPerUser, setQueries] = useState(10);
  const [resolveTime, setResolveTime] = useState(15);
  const [animatedEarnings, setAnimatedEarnings] = useState(0);

  const hoursSaved = (teamSize * queriesPerUser * resolveTime) / 60;
  const earnings = hoursSaved * hourlyRate;

  // Animate earnings count-up
  useEffect(() => {
    let start = 0;
    const duration = 800; // ms
    const stepTime = 16; // roughly 60fps
    const steps = duration / stepTime;
    const increment = earnings / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= earnings) {
        start = earnings;
        clearInterval(interval);
      }
      setAnimatedEarnings(Math.floor(start));
    }, stepTime);

    return () => clearInterval(interval);
  }, [earnings]);

  // Animation variants for sliders container and individual sliders
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, ease: "easeOut", duration: 0.5 },
    },
  };

  const sliderVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section className="bg-[#f4f5f7] text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Calculate Earnings
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          See how much DialLock AI can save your Sales & Support teams.
        </motion.p>

        <motion.div
          className="space-y-8 max-w-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Team Size */}
          <motion.div variants={sliderVariants}>
            <label className="block mb-1 font-semibold">
              Sales Team Size: <span className="text-blue-600">{teamSize}</span>
            </label>
            <input
              type="range"
              min="1"
              max="1000"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer transition duration-300 ease-in-out hover:accent-blue-800 focus:accent-blue-800"
            />
          </motion.div>

          {/* Hourly Rate */}
          <motion.div variants={sliderVariants}>
            <label className="block mb-1 font-semibold">
              Support Engineer Hourly Rate:{" "}
              <span className="text-blue-600">${hourlyRate}</span>
            </label>
            <input
              type="range"
              min="10"
              max="200"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer transition duration-300 ease-in-out hover:accent-blue-800 focus:accent-blue-800"
            />
          </motion.div>

          {/* Queries Per User */}
          <motion.div variants={sliderVariants}>
            <label className="block mb-1 font-semibold">
              Monthly Queries Per User:{" "}
              <span className="text-blue-600">{queriesPerUser}</span>
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={queriesPerUser}
              onChange={(e) => setQueries(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer transition duration-300 ease-in-out hover:accent-blue-800 focus:accent-blue-800"
            />
          </motion.div>

          {/* Resolve Time */}
          <motion.div variants={sliderVariants}>
            <label className="block mb-1 font-semibold">
              Avg. Resolve Time (mins):{" "}
              <span className="text-blue-600">{resolveTime}</span>
            </label>
            <input
              type="range"
              min="1"
              max="60"
              value={resolveTime}
              onChange={(e) => setResolveTime(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer transition duration-300 ease-in-out hover:accent-blue-800 focus:accent-blue-800"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <motion.h3
            className="text-6xl font-extrabold text-blue-600"
            key={animatedEarnings} // Animate number changes
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            ${animatedEarnings.toLocaleString()}
          </motion.h3>
          <motion.p
            className="mt-3 text-sm text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Potential savings per year
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
