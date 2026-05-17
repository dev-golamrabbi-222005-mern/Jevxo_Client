// Decors3.jsx
import techline3 from "../../../assets/techline3.png";
import ellipse1 from "../../../assets/ellipse1.png";
import ellipse2 from "../../../assets/ellipse2.png";

const Decors3 = () => {
  return (
    <>
      {/* LEFT MIDDLE */}
      <div className="absolute top-130 md:-left-20 lg:-left-50 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-left">
        <img src={ellipse2} className="rotate-180" />
      </div>

      {/* BOTTOM MIDDLE */}
      <div className="absolute -bottom-30 md:right-50 lg:right-80 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom">
        <img src={ellipse1} className="rotate-180" />
      </div>

      {/* RIGHT BOTTOM */}
      <div className="absolute md:-bottom-32 lg:bottom-10 md:right-0 lg:-right-10 z-0 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
        <img src={techline3} />
      </div>
    </>
  );
};

export default Decors3;
