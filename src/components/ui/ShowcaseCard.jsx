import { Monitor, Box, Cloud } from "lucide-react";

const ShowcaseCard = ({ image, title, description }) => {
  return (
    <div
      className="
        rounded-[22px]
        overflow-hidden
        border
        border-white/15
        bg-[#09111E]
        group
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#2F7CF7]/40
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
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-white/45 leading-relaxed">{description}</p>

        {/* ICONS */}
        <div className="flex items-center gap-4 mt-6 text-white/40">
          <Monitor size={14} />
          <Box size={14} />
          <Cloud size={14} />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
