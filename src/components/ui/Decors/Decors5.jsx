// Decors5.jsx
import ellipse1 from "../../../assets/ellipse1.png";
import techline4 from "../../../assets/techline4.png";

const Decors5 = () => {
  return (
    <>
      {/* LEFT BOTTOM */}
      <div className="absolute bottom-0 -left-10 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
        <img src={techline4} />
      </div>

      {/* BOTTOM MIDDLE */}
      <div className="absolute -bottom-25 md:right-50 lg:right-80 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
        <img src={ellipse1} className="rotate-270" />
      </div>
    </>
  );
};

export default Decors5;
