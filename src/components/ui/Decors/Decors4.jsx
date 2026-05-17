import techline4 from "../../../assets/techline4.png"
import ellipse1 from "../../../assets/ellipse1.png";
import techline3 from "../../../assets/techline3.png";

const Decors4 = () => {
  return (
    <>
      {/* RIGHT BOTTOM */}
      <div
        className="
          absolute
          -bottom-10
          right-30
          z-10
        "
      >
        <img src={techline3}/>
      </div>

      {/* RIGHT BOTTOM */}
      <div
        className="
          absolute
          -bottom-20
          right-50
          z-10
        "
      >
        <img src={ellipse1} className="rotate-180" />
      </div>

      {/* LEFT TOP */}
      <div
        className="
          absolute
          -top-15
          left-20
         z-0
        "
      >
        <img src={techline4} />
      </div>
    </>
  );
};

export default Decors4;
