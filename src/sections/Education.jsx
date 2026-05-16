import techLines from "../assets/techline2.png"; // Adjust path as needed
import ellipse from "../assets/ellipse1.png";
import PrimaryButton from "../components/shared/PrimaryButton"; // Using your existing component
import eduImg from "../assets/Video Animation.png"

const Education = () => {
  const stats = [
    { label: "School", value: "11k" },
    { label: "Students", value: "500k" },
    { label: "Average Roll", value: "100%" },
  ];

  return (
    <section className="relative bg-[#020817] pt-24 pb-20 overflow-hidden">
      {/* Background Assets */}
      <img
        src={techLines}
        className="absolute top-0 left-0 w-full opacity-40 pointer-events-none"
        alt=""
      />
      <img
        src={ellipse}
        className="absolute -bottom-20 -right-20 w-1/2 opacity-30 blur-3xl pointer-events-none"
        alt=""
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Header Content */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#2E7CF6] to-[#6FE7DD] bg-clip-text text-transparent mb-6">
          Transform education with Jevxo Edu
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
          Complete school management solution that saves time, reduces costs,
          and improves educational outcomes.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#F3B664] to-[#EC8F5E] text-[#1E1E1E] hover:shadow-[0_0_20px_rgba(243,182,100,0.4)] transition-all">
            Start free Trial
          </button>
          <button className="px-8 py-3 rounded-xl font-semibold border border-white/10 bg-white/5 backdrop-blur-md text-white/80 hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Watch video
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-24">
          <img
            src={eduImg}
            alt="Office Environment"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#2E7CF6] mb-2">
                {stat.value}
              </span>
              <span className="text-white/60 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
