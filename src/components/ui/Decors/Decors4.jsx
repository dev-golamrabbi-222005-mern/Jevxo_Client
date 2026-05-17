// Decors4.jsx
import techline4 from "../../../assets/techline4.png";
import ellipse1 from "../../../assets/ellipse1.png";
import techline3 from "../../../assets/techline3.png";

const Decors4 = () => {
  return (
    <>
      {/* RIGHT BOTTOM */}
      <div className="absolute -bottom-10 md:right-0 lg:right-30 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
        <img src={techline3} />
      </div>

      {/* RIGHT BOTTOM ellipse */}
      <div className="absolute md:-bottom-10 lg:-bottom-20 md:right-10 lg:right-50 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
        <img src={ellipse1} className="rotate-180" />
      </div>

      {/* LEFT TOP */}
      <div className="absolute -top-15 lg:left-20 z-0 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
        <img src={techline4} />
      </div>
    </>
  );
};

export default Decors4;
