import ellipse1 from "../../../assets/ellipse1.png"
import techline4 from "../../../assets/techline4.png"

const Decors5 = () => {
  return (
    <>
      {/* LEFT BOTTOM */}
      <div
        className="
          absolute
          -bottom-0
          -left-10
          z-10
        "
      >
        <img src={techline4}/>
      </div>

      {/* BOTTOM MIDDLE */}
      <div
        className="
          absolute
          -bottom-25
          right-80
          z-20
        "
      >
        <img src={ellipse1} className="rotate-270" />
      </div>
    </>
  );
};

export default Decors5;
