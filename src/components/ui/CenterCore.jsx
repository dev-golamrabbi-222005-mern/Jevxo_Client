import centerLogo from "../../assets/center-logo.png";

const CenterCore = () => {
  return (
    <div className="relative">
      {/* OUTER RINGS */}
      <div
        className="
          absolute
          top-49
          inset-1/2
          -translate-x-1/2
          -translate-y-1/2
          size-[175px]
          rounded-full
          border
          border-dashed
          border-[#1B67FF]/40
        "
      />

      <div
        className="
          absolute
          inset-1/2
          -translate-x-1/2
          -translate-y-1/2
          size-[180px]
          rounded-full
          border
          border-dashed
          border-[#1B67FF]/40
        "
      />

      {/* CENTER */}
      {/* <div
        className="
          relative
          z-10
          
          rounded-full
          border
          border-[#1595FF]
          bg-[#07172B]
          flex
          items-center
          justify-center
          shadow-[0_0_60px_rgba(0,140,255,0.45)]
        "
      > */}
        <div
          className="
            absolute
            inset-0
            top-20
            rounded-full
            bg-[#0084FF]/10
            blur-2xl
          "
        />

        <img src={centerLogo} alt="Jevxo" className="w-[150px] top-30 relative z-10" />
      </div>
    // </div>
  );
};

export default CenterCore;
