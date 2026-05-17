import techline3 from "../../../assets/techline3.png"
import techline4 from "../../../assets/techline4.png"
import ellipse2 from "../../../assets/ellipse2.png"

const Decors2 = () => {
  return (
    <>
      {/* LEFT BOTTOM */}
      <div
        className="
          absolute
          -bottom-40
          -left-20
          
        "
      >
        <img src={techline4} className="rotate-360" />
      </div>

      {/* RIGHT TOP */}
      <div
        className="
          absolute
          -top-60
          -right-20
          z-100
        "
      >
        <img src={techline3} />
      </div>

      {/* RIGHT BOTTOM */}
      <div
        className="
          absolute
          -bottom-80
          -right-20
          z-100
        "
      >
        <img src={ellipse2} />
      </div>
    </>
  );
};

export default Decors2;
