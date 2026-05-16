const ServiceCard = ({ title, multiplier, active = false }) => {
  return (
    <div
      className={`
        rounded-2xl
        border
        p-5
        transition-all
        duration-300

        ${
          active
            ? `
          border-[#15C8FF]
          bg-[#0D2A33]
          shadow-[0_0_25px_rgba(21,200,255,0.12)]
        `
            : `
          border-white/10
          bg-[#09111E]
        `
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-white text-lg font-medium">{title}</h3>

          <p className="mt-4 text-white/45 text-sm font-semibold">
            {multiplier}
          </p>
        </div>

        <div
          className={`
            size-4
            rounded-full
            border

            ${active ? "bg-[#F7D047] border-[#F7D047]" : "border-white/20"}
          `}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
