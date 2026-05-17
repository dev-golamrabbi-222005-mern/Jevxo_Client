// Decors7.jsx
import ellipse2 from "../../../assets/ellipse2.png";
import ellipse3 from "../../../assets/ellipse3.png";
import { motion } from "framer-motion";

const Decors7 = () => {
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
    <>
      {/* TOP RIGHT GLOW */}
      <motion.div
        variants={floatingAnimation}
        animate="animate"
        className="
          absolute lg:-top-30 lg:-right-60
          md:-top-20 md:-right-30 
          md:w-[300px] md:h-[375px]
          lg:w-[400px] lg:h-[500px]
          rounded-full bg-[#121E3D] blur-[200px]
          pointer-events-none z-10
        "
      />

      {/* LEFT MIDDLE */}
      <div className="absolute md:top-20 lg:-top-10 -left-30 opacity-80 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
        <img src={ellipse3} />
      </div>

      {/* RIGHT BOTTOM */}
      <div className="absolute bottom-40 md:-right-5 lg:-right-30 opacity-80 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-right">
        <img src={ellipse2} className="w-60" />
      </div>
    </>
  );
};

export default Decors7;
