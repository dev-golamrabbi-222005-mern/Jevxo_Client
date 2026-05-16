import {
  GraduationCap,
  Calendar,
  FileText,
  LineChart,
  LayoutGrid,
  CheckSquare,
} from "lucide-react";
// import techLines from "../assets/techline2.png";
// import ellipse from "../assets/ellipse1.png";

const Features = () => {
  const features = [
    {
      title: "Student Management",
      desc: "Track attendance, grades, and progress",
      icon: GraduationCap,
    },
    {
      title: "Schedule Planning",
      desc: "Track attendance, grades, and progress",
      icon: Calendar,
    },
    {
      title: "Report Cards",
      desc: "Digital report card generation",
      icon: FileText,
    },
    {
      title: "Analytics",
      desc: "Performance insights and trends",
      icon: LineChart,
    },
    {
      title: "Course Management",
      desc: "Curriculum and syllabus tracking",
      icon: LayoutGrid,
    },
    {
      title: "Attendance Tracking",
      desc: "Real-time attendance system",
      icon: CheckSquare,
    },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Overlays
      <img
        src={techLines}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1D4ED8]/10 blur-[120px] rounded-full pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#2E7CF6] to-[#6FE7DD] bg-clip-text text-transparent mb-4">
            Everything You Need
          </h2>
          <p className="text-white/60 text-lg">
            Affordable plans that scale with your institution
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 flex flex-col justify-center items-center md:justify-start md:items-start rounded-3xl bg-[#13171B] border border-white/8 backdrop-blur-sm hover:border-[#2E7CF6]/30 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#2E7CF6]/10 group-hover:border-[#2E7CF6]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-white/50" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm text-center md:text-left leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
