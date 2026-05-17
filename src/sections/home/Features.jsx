import {
  GraduationCap,
  Calendar,
  FileText,
  LineChart,
  LayoutGrid,
  CheckSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/shared/SectionTitle";
import Decors5 from "../../components/ui/Decors/Decors5";

const Features = () => {
  const features = [
    {
      title: "Student Management",
      desc: "Track attendance, grades, and progress",
      icon: GraduationCap,
    },
    {
      title: "Schedule Planning",
      desc: "Track attendance, grades, and progress",
      icon: Calendar,
    },
    {
      title: "Report Cards",
      desc: "Digital report card generation",
      icon: FileText,
    },
    {
      title: "Analytics",
      desc: "Performance insights and trends",
      icon: LineChart,
    },
    {
      title: "Course Management",
      desc: "Curriculum and syllabus tracking",
      icon: LayoutGrid,
    },
    {
      title: "Attendance Tracking",
      desc: "Real-time attendance system",
      icon: CheckSquare,
    },
  ];

  // MODERN PREMIUM ANIMATION CONFIGURATIONS
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Smoothly ripples down the grid
      },
    },
  };

  const cardFadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out curve
      },
    },
  };

  return (
    <section className="relative bg-[#0B0F14] py-12 md:py-16 lg:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="hidden md:block">
          <Decors5 />
        </div>
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title={"Everything You Need"}
            subtitle={"Affordable plans that scale with your institution"}
          />
        </motion.div>

        {/* FEATURES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              whileHover={{
                y: -8,
                scale: 1.015,
                borderColor: "rgba(46, 124, 246, 0.35)",
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              }}
              className="group p-8 flex flex-col justify-center items-center md:justify-start md:items-start rounded-3xl bg-[#13171B] border border-white/5 backdrop-blur-sm transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#2E7CF6]/10 group-hover:border-[#2E7CF6]/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-white/50 group-hover:text-[#2E7CF6] transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm text-center md:text-left leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
