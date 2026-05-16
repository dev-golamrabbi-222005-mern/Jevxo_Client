import techline1 from "../../assets/techline1.png"

const TechLines1 = () => {
  return (
    <>
      {/* LEFT BOTTOM */}
      <div
        className="
          absolute
          bottom-10
          left-10
          rotate-180
        "
      >
        <img src={techline1} />
      </div>

      {/* RIGHT TOP */}
      <div
        className="
          absolute
          top-24
          right-10
        "
      >
        <img src={techline1} />
      </div>
    </>
  );
};

export default TechLines1;
