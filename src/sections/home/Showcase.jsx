import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../../components/shared/SectionTitle";
import ShowcaseCard from "../../components/ui/ShowcaseCard";
import FeaturedCaseStudy from "../../components/ui/FeaturedCaseStudy";

import jsIcon from "../../assets/icons/js-icon.png";
import boxIcon from "../../assets/icons/box-icon.png";
import meshIcon from "../../assets/icons/mesh-icon.png";
import growthIcon from "../../assets/icons/growth-icon.png";
import terminalIcon from "../../assets/icons/terminal-icon.png";
import cloudIcon from "../../assets/icons/cloud-icon.png";
import luxePreview from "../../assets/luxe-preview.png";
import novaPreview from "../../assets/nova-preview.png";
import Decors3 from "../../components/ui/Decors/Decors3";

const Showcase = () => {
  const icons1 = [jsIcon, boxIcon, meshIcon];
  const icons2 = [growthIcon, terminalIcon, cloudIcon];

  // MODERN ANIMATION VARIANTS 
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16, 
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.98, 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1], 
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      x: [0, 8, 0], 
      rotate: [0, 2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="
        relative
        py-12 md:py-16 lg:py-20
        bg-[#0B0F14]
      "
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:block">
          <Decors3 />
        </div>
        {/* HEADER */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Our Showcase"
            subtitle="A glimpse into the empires we've built. Scroll to explore our portfolio."
          />

          <motion.button
            whileHover={{
              x: 8,
              scale: 1.05,
              color: "#4f8ff7",
            }}
            whileTap={{ scale: 0.96 }}
            className="
              absolute
              right-0
              top-5/4
              -translate-y-1/2
              md:flex
              items-center
              gap-2
              text-[#2E7CF6]
              font-medium
              hidden
              cursor-pointer
              hover:underline
              transition-all
              duration-300
            "
          >
            Explore All
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            relative
            mt-12 md:mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            z-10
          "
        >
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className="md:col-span-2"
          >
            <FeaturedCaseStudy icons={icons1} image={luxePreview} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.015,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <ShowcaseCard
              image={novaPreview}
              title="Project Nova"
              icons={icons2}
              description="Real-time AI monitoring dashboard for autonomous logistical fleets."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.015,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <ShowcaseCard
              image={novaPreview}
              title="Project Nova"
              icons={icons2}
              description="Real-time AI monitoring dashboard for autonomous logistical fleets."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.015,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <ShowcaseCard
              image={novaPreview}
              title="Project Nova"
              icons={icons2}
              description="Real-time AI monitoring dashboard for autonomous logistical fleets."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.015,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <ShowcaseCard
              image={novaPreview}
              title="Project Nova"
              icons={icons2}
              description="Real-time AI monitoring dashboard for autonomous logistical fleets."
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            whileHover={{
              x: 6,
              scale: 1.04,
            }}
            whileTap={{ scale: 0.96 }}
            className="
              flex
              md:hidden
              justify-center
              items-center
              gap-2
              text-[#2E7CF6]
              font-medium
              hover:underline
            "
          >
            Explore All
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
