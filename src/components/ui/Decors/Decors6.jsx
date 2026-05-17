// Decors6.jsx
import ellipse1 from "../../../assets/ellipse1.png";
import techline5 from "../../../assets/techline5.png";
import techline6 from "../../../assets/techline6.png";

const Decors6 = () => {
  return (
    <>
      {/* TOP LEFT techline */}
      <div className="absolute top-20 -left-20 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
        <img src={techline5} />
      </div>

      {/* TOP LEFT ellipse */}
      <div className="absolute -top-5 -left-40 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
        <img src={ellipse1} className="w-50 rotate-270" />
      </div>

      {/* TOP RIGHT techline */}
      <div className="absolute top-20 -right-20 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
        <img src={techline6} />
      </div>

      {/* TOP RIGHT ellipse */}
      <div className="absolute top-55 -right-40 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
        <img src={ellipse1} className="w-50 rotate-180" />
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute -bottom-30 -left-30 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
        <img src={ellipse1} className="w-70" />
      </div>

      {/* MIDDLE RIGHT */}
      <div className="absolute bottom-25 right-70 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-right">
        <img src={ellipse1} className="w-50 rotate-90" />
      </div>
    </>
  );
};

export default Decors6;
