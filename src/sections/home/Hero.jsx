import { useMemo } from "react";
import { motion } from "framer-motion";
import heroOrbit from "../../assets/hero-orbit.png";
import PrimaryButton from "../../components/shared/PrimaryButton";

// Stats Card
const StatCard = ({ value, label }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl sm:text-4xl font-bold text-[#3AA6FF]">{value}</h3>
      <p className="mt-1 text-[11px] sm:text-sm text-white/70 whitespace-nowrap">
        {label}
      </p>
    </div>
  );
};

// ─── Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

const Hero = () => {
  // RANDOM STARS GENERATE 
  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => {
      const random = Math.random();
      const size =
        random > 0.85
          ? "w-[3px] h-[3px]"
          : random > 0.4
            ? "w-[2px] h-[2px]"
            : "w-[1px] h-[1px]";
      const opacity =
        random > 0.7
          ? "opacity-90"
          : random > 0.3
            ? "opacity-60"
            : "opacity-30";

      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        className: `absolute bg-white rounded-full ${size} ${opacity} ${
          random > 0.8 ? "shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" : ""
        } ${random > 0.75 ? "animate-pulse" : ""}`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 4}s`,
      };
    });
  }, []);

  const statsData = [
    { id: 1, value: "500+", label: "Projects Delivered" },
    { id: 2, value: "98%", label: "Client Satisfaction" },
    { id: 3, value: "15x", label: "Average ROI" },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0B0F14]
        flex
        items-start       
        md:items-center
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]
          [background-size:35px_40px]
          pointer-events-none
          z-20
        "
      />

      {/* DYNAMIC GLOWING STARS LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={star.className}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* CONTENT LAYOUT CONTAINER */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          pt-28            
          pb-12
          md:pt-32      
          md:pb-17
        "
      >
        {/* ORBIT IMAGE  */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
          className="
            absolute
            -translate-y-1/2
            pointer-events-none
            select-none
            z-0
            left-1/2
            top-1/2
            -translate-x-1/2
            w-[130%]
            max-w-md
            opacity-30
            md:left-auto
            md:right-20
            md:top-5/9
            md:translate-x-1/4
            md:w-[70%]
            md:max-w-xl
            md:opacity-60
            lg:w-[55%]
            lg:right-28
            lg:top-3/8
            lg:max-w-2xl
            lg:opacity-100
            xl:max-w-3xl
            transition-all
            duration-500
          "
        >
          {/* Slow continuous float */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="
                absolute
                top-32
                inset-0
                m-auto
                w-[80%]
                h-[70%]
                bg-[#096af1]
                blur-[222px]
                rounded-full
              "
            />
            <img
              src={heroOrbit}
              alt="Hero Orbit"
              className="relative w-full h-auto z-10 select-none"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* LEFT SIDE CONTENT */}
          <div className="w-full lg:max-w-[65%] xl:max-w-3xl text-left">
            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="
                text-4xl
                md:text-5xl
                lg:text-7xl
                font-bold
                leading-[1.2]
                md:leading-[1.25]
                bg-gradient-to-r
                from-[#2F7CFF]
                to-[#67BEBC]
                bg-clip-text
                text-transparent
                tracking-wide
              "
            >
              Stop Building Sites,
              <br className="hidden md:inline" /> Start Building Empires.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
              className="
                mt-6
                md:mt-8
                text-white/70
                text-sm
                sm:text-base
                max-w-xl
                leading-relaxed
              "
            >
              Transform your vision into a digital empire with cutting-edge
              technology, stunning design, and data-driven strategies.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
            >
              <PrimaryButton className="mt-8">See Jevxo</PrimaryButton>
            </motion.div>

            {/* Stats card */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="
                mt-12
                md:mt-14
                md:mb-2.75
                lg:-mb-5
                w-full
                sm:w-fit
                rounded-2xl
                border
                border-[#878787]
                bg-linear-to-b from-[#01050A] to-[#14181E]
                backdrop-blur-xl
                p-4
                md:px-8
                grid
                grid-cols-3
                gap-4
                sm:gap-8
              "
            >
              {statsData.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={0.7 + i * 0.12}
                >
                  <StatCard value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Bottom fade — blends into next section */}
      <div className="absolute bottom-0 right-0 w-full h-44 bg-gradient-to-b from-transparent to-[#0B0F14] pointer-events-none z-10" />
    </section>
  );
};

export default Hero;
