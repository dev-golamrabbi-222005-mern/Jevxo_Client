const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          tracking-tight
          leading-tight
          bg-gradient-to-r
          from-[#2E7CF6]
          to-[#79E7DF]
          bg-clip-text
          text-transparent
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-3
          text-white/65
          text-sm
          md:text-base
          tracking-wide
          max-w-3xl
          mx-auto
        "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
