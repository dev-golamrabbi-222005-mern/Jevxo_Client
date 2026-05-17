import techline3 from "../../../assets/techline3.png"
import ellipse1 from "../../../assets/ellipse1.png"
import ellipse2 from "../../../assets/ellipse2.png"

const Decors3 = () => {
  return (
    <>
      {/* LEFT MIDDLE */}
      <div
        className="
          absolute
          top-130
          -left-50
          
        "
      >
        <img src={ellipse2} className="rotate-180" />
      </div>

      {/* BOTTOM MIDDLE */}
      <div
        className="
          absolute
          -bottom-30
          right-80
        "
      >
        <img src={ellipse1} className="rotate-180" />
      </div>

      {/* RIGHT BOTTOM */}
      <div
        className="
          absolute
          bottom-10
          -right-10
         z-0
        "
      >
        <img src={techline3} />
      </div>
    </>
  );
};

export default Decors3;
