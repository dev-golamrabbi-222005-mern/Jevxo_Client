import ellipse1 from "../../../assets/ellipse1.png";
import ellipse6 from "../../../assets/ellipse6.png";
import ellipse4 from "../../../assets/ellipse4.png";
import ellipse5 from "../../../assets/ellipse5.png";

const Decors8 = () => {
  return (
    <>
      {/* TOP LEFT */}
      <div
        className="
          absolute
          -top-10
          left-10
          z-10
        "
      >
        <img src={ellipse1} className="w-50 rotate-270"/>
      </div>

      {/* TOP RIGHT*/}
      <div
        className="
          absolute
          -top-60
          right-0
          z-20
        "
      >
        <img src={ellipse4} className="" />
      </div>

      {/* BOTTOM LEFT*/}
      <div
        className="
          absolute
          bottom-10
          -left-15
          z-10
        "
      >
        <img src={ellipse6} className="" />
      </div>

      {/* BOTTOM RIGHT*/}
      <div
        className="
          absolute
          bottom-20
          right-40
          z-20
        "
      >
        <img src={ellipse1} className="rotate-180 w-50" />
      </div>

      {/* BOTTOM MIDDLE*/}
      <div
        className="
          absolute
          -bottom-25
          left-0
          z-20
          pointer-events-none
        "
      >
        <img src={ellipse5} className="w-404" />
      </div>
    </>
  );
};

export default Decors8;
