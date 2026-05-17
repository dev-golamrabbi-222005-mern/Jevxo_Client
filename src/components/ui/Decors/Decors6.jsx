import ellipse1 from "../../../assets/ellipse1.png"
import techline5 from "../../../assets/techline5.png"
import techline6 from "../../../assets/techline6.png"

const Decors6 = () => {
  return (
    <>
      {/* TOP LEFT */}
      <div
        className="
          absolute
          top-20
          -left-20
          z-10
        "
      >
        <img src={techline5}/>
      </div>

      <div
        className="
          absolute
          -top-5
          -left-40
          z-10
        "
      >
        <img src={ellipse1} className="w-50 rotate-270"/>
      </div>

      {/* TOP RIGHT */}
      <div
        className="
          absolute
          top-20
          -right-20
          z-10
        "
      >
        <img src={techline6} className="" />
      </div>

      <div
        className="
          absolute
          top-55
          -right-40
          z-10
        "
      >
        <img src={ellipse1} className="w-50 rotate-180" />
      </div>

      {/* BOTTOM LEFT */}
      <div
        className="
          absolute
          -bottom-30
          -left-30
          z-10
        "
      >
        <img src={ellipse1} className="w-70" />
      </div>

      {/* MIDDLE RIGHT */}
      <div
        className="
          absolute
          bottom-25
          right-70
          z-10
        "
      >
        <img src={ellipse1} className="w-50 rotate-90" />
      </div>
    </>
  );
};

export default Decors6;
