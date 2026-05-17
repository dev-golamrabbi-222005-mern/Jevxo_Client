import ellipse1 from "../../../assets/ellipse1.png";
import ellipse6 from "../../../assets/ellipse6.png";
import ellipse4 from "../../../assets/ellipse4.png";
import ellipse5 from "../../../assets/ellipse5.png";

const Decors8 = () => {
  return (
    <>
      {/* TOP LEFT */}
      <div className="absolute md:top-0 md:left-0 lg:-top-10 lg:left-10 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
        <img src={ellipse1} className="w-50 rotate-270" />
      </div>

      {/* TOP RIGHT */}
      <div className="absolute md:-top-20 lg:-top-50 right-0 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-right">
        <img src={ellipse4} />
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-10 -left-15 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-left">
        <img src={ellipse6} />
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-20 md:right-10 lg:right-40 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-bottom-right">
        <img src={ellipse1} className="rotate-180 w-50" />
      </div>

      {/* BOTTOM MIDDLE */}
      <div className="absolute md:bottom-15 lg:-bottom-25 left-0 z-20 pointer-events-none">
        <img src={ellipse5} className="w-404" />
      </div>
    </>
  );
};

export default Decors8;
