const OrbitNode = ({ icon, title, subtitle, className = "" }) => {
  return (
    <div
      className={`
        absolute
        flex
        flex-col
        items-center
        
        ${className}
      `}
    >
      {/* CIRCLE */}
      <div
        className="
          size-[100px]
          rounded-full
          border
          border-[#5E7A47]/20
          bg-[#17211C]/70
          backdrop-blur-md
          flex
          items-center
          justify-center
          shadow-[0_0_35px_rgba(0,0,0,0.35)]
        "
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className="mt-5 text-center">
        <h3 className="text-white font-semibold text-[20px]">{title}</h3>

        <p className="text-white/45 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default OrbitNode;
