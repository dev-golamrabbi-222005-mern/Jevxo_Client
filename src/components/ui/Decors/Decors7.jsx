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
      {/* TOP RIGHT GLOW  */}
      <motion.div
        variants={floatingAnimation}
        animate="animate"
        className="
              absolute
              -top-30
              -right-60
              w-[400px]
              h-[500px]
              rounded-full
              bg-[#121E3D]
              blur-[200px]
              pointer-events-none
              z-10
            "
      />
      {/* LEFT MIDDLE */}
      <div
        className="
          absolute
          -top-10
          -left-30
          opacity-80
          z-10
        "
      >
        <img src={ellipse3} className="" />
      </div>

      {/* RIGHT BOTTOM */}
      <div
        className="
          absolute
          bottom-40
          -right-30
          opacity-80
          z-20
        "
      >
        <img src={ellipse2} className="w-60" />
      </div>
    </>
  );
};

export default Decors7;
