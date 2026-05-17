// Decors1.jsx
import techline1 from "../../../assets/techline1.png";
import techline2 from "../../../assets/techline2.png";
import ellipse1 from "../../../assets/ellipse1.png";

const Decors1 = () => {
  return (
    <>
      {/* LEFT BOTTOM */}
      <div className="absolute lg:-bottom-60 md:-bottom-40 -left-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
        <img src={techline2} className="rotate-360" />
        <img src={ellipse1} alt="" className="absolute bottom-0" />
      </div>

      {/* RIGHT TOP */}
      <div className="absolute top-0 -right-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
        <img src={techline1} />
      </div>
    </>
  );
};

export default Decors1;
