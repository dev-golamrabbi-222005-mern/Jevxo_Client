
const ShowcaseCard = ({ image, title, icons, description }) => {
  return (
    <div
      className="
        rounded-[22px]
        overflow-hidden
        border
        border-[#77797C]
        bg-[#09111E]
        group
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#2E7CF6]
      "
    >
      {/* IMAGE */}
      <div className="h-[250px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-700
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 bg-linear-to-b from-[#13171B] to-[#1B1F24]">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-white/45 leading-relaxed">{description}</p>

        {/* ICONS */}
        <div className="flex items-center gap-4 mt-6">
          {icons.map((icon, index) => (
            <img src={icon} key={index} className="w-5 cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
