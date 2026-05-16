import React, { useState } from "react";
import { motion } from "framer-motion";

import techLines from "../assets/techline3.png";
import costIcon from "../assets/icons/cost-icon.png";
import savingsIcon from "../assets/icons/savings-icon.png";

import SectionTitle from "../components/shared/SectionTitle";


const FlexiblePricing = () => {
  const [students, setStudents] = useState(750);
  const [isYearly, setIsYearly] = useState(false);

  // Scalable calculation logic
  const monthlyCost = (students * 1.66).toLocaleString();
  const annualSavings = (students * 3.2).toLocaleString();

  // ANIMATION VARIANTS
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-[#0B0F14] py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* BACKGROUND */}
      <motion.img
        src={techLines}
        className="absolute inset-0 w-full opacity-20 pointer-events-none"
        alt=""
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Flexible Pricing for Modern Schools"
            subtitle="Scale your institution with our high-performance management
              platform. Use the calculator below to find your perfect fit."
          />
        </motion.div>

        {/* MAIN CONTAINER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{
            y: -4,
            transition: {
              duration: 0.3,
            },
          }}
          className="
            relative
            max-w-5xl
            mx-auto
            bg-[#13171B]
            border
            border-white/10
            rounded-3xl
            mt-8
            md:mt-12
            p-8
            md:p-12
            backdrop-blur-xl
            overflow-hidden
          "
        >
          {/* INNER GLOW */}
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="
              absolute
              -top-20
              right-0
              w-[300px]
              h-[300px]
              rounded-full
              bg-[#00D1FF]/10
              blur-[120px]
              pointer-events-none
            "
          />

          {/* TOP */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              mb-12
              gap-6
            "
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl text-center md:text-left font-bold text-white mb-2">
                Interactive Savings Estimator
              </h3>

              <p className="text-white/40 text-sm text-center md:text-left">
                Real-time projection based on your student enrollment.
              </p>
            </motion.div>

            {/* TOGGLE */}
            <motion.div
              variants={fadeUp}
              className="
                bg-white/5
                p-1
                rounded-xl
                border
                border-white/10
                flex
                self-center
                md:self-auto
              "
            >
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-lg text-sm transition-all ${
                  !isYearly
                    ? "bg-[#0DB9F2] text-black font-bold shadow-[0_0_20px_rgba(13,185,242,0.45)]"
                    : "text-white/60"
                }`}
              >
                Monthly
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-lg text-sm transition-all ${
                  isYearly
                    ? "bg-[#0DB9F2] text-black font-bold shadow-[0_0_20px_rgba(13,185,242,0.45)]"
                    : "text-white/60"
                }`}
              >
                Yearly (Save 20%)
              </motion.button>
            </motion.div>
          </motion.div>

          {/* SLIDER AREA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex justify-center md:justify-between items-center flex-col md:flex-row md:items-end gap-4 mb-6">
              <span className="text-white/80 font-medium">
                How many students do you have?
              </span>

              <motion.div
                key={students}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="md:text-right text-center"
              >
                <span className="text-5xl font-bold text-[#0DB9F2]">
                  {students}
                </span>

                <span className="text-white/40 ml-2">Students</span>
              </motion.div>
            </div>

            {/* SLIDER */}
            <div className="relative">
              <div className="relative h-[6px] rounded-full bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-[#00D1FF]"
                  animate={{
                    width: `${((students - 100) / (10000 - 100)) * 100}%`,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />

                <motion.div
                  className="
                    absolute
                    top-1/2
                    size-5
                    rounded-full
                    bg-[#F7C93E]
                    border-4
                    border-[#00D1FF]
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                  animate={{
                    left: `${((students - 100) / (10000 - 100)) * 100}%`,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  whileHover={{
                    scale: 1.2,
                  }}
                />
              </div>

              <input
                type="range"
                min="100"
                max="10000"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="
                  absolute
                  inset-0
                  w-full
                  opacity-0
                  cursor-pointer
                  h-full
                "
                aria-label="Number of students"
              />
            </div>

            {/* MARKERS */}
            <div className="flex justify-between text-white/20 text-xs mt-4">
              {[
                { label: "100", value: 100 },
                { label: "2.5K", value: 2500 },
                { label: "5K", value: 5000 },
                { label: "7.5K", value: 7500 },
                { label: "10K+", value: 10000 },
              ].map(({ label, value }) => (
                <motion.span
                  whileHover={{
                    scale: 1.08,
                  }}
                  key={value}
                  onClick={() => setStudents(value)}
                  className={`cursor-pointer transition-colors duration-200 hover:text-[#00D1FF] ${
                    Number(students) === value
                      ? "text-[#00D1FF] font-semibold"
                      : "text-white/20"
                  }`}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* RESULT CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            {/* MONTHLY COST */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                bg-white/5
                border
                border-white/5
                rounded-2xl
                p-4
                md:p-8
                text-center
                md:text-left
                backdrop-blur-xl
              "
            >
              <span className="flex gap-2 text-white/40 text-xs uppercase tracking-widest mb-4 justify-center md:justify-start">
                <img src={costIcon} alt="" />
                Estimated Monthly Cost
              </span>

              <motion.div
                key={monthlyCost}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="text-4xl font-bold text-[#0DB9F2] mb-2"
              >
                ${monthlyCost}
              </motion.div>

              <span className="text-[#147DA1] font-semibold text-sm">
                Electric Blue Scalability
              </span>
            </motion.div>

            {/* SAVINGS */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                bg-white/5
                border
                border-white/5
                rounded-2xl
                p-4
                md:p-8
                text-center
                md:text-left
                backdrop-blur-xl
              "
            >
              <span className="flex gap-2 text-white/40 text-xs uppercase tracking-widest mb-4 justify-center md:justify-start">
                <img src={savingsIcon} alt="" />
                Estimated Annual Savings
              </span>

              <motion.div
                key={annualSavings}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="text-4xl font-bold text-[#FBBE24] mb-2"
              >
                Save ${annualSavings}
              </motion.div>

              <span className="text-[#967C50] font-semibold text-sm">
                With Premium Support Access
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlexiblePricing;
