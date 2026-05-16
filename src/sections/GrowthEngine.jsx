import { Palette, Smartphone, Globe, TrendingUp } from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import CenterCore from "../components/ui/CenterCore";
import OrbitNode from "../components/ui/OrbitNode";
import { useMemo } from "react";

// ─── Constants
const SIZE = 650; 
const HALF = SIZE / 2;


const GrowthEngine = () => {
  // Stars Generation
  const stars = useMemo(() => {
    return Array.from({ length: 250 }).map((_, i) => {
      const random = Math.random();
      const size =
        random > 0.85
          ? "w-[3px] h-[3px]"
          : random > 0.4
            ? "w-[2px] h-[2px]"
            : "w-[1px] h-[1px]";
      const opacity =
        random > 0.7
          ? "opacity-30"
          : random > 0.3
            ? "opacity-20"
            : "opacity-10";

      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        className: `absolute bg-white rounded-full ${size} ${opacity} ${
          random > 0.8 ? "shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" : ""
        } ${random > 0.75 ? "animate-pulse" : ""}`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 4}s`,
      };
    });
  }, []);

  return (
    <section className="relative overflow-hidden px-4 md:px-6 py-12 md:py-16 lg:py-20 bg-[#020817]">
      {/* Grid Lines */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)," +
            "linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className={star.className}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <SectionTitle
          title="The Jevxo Growth Engine"
          subtitle="A Unified Ecosystem where Strategy, Design, and technology work as one."
        />

        <div
          className="
            relative mt-16 md:mt-24 lg:mt-28
            w-full flex items-center justify-center
            h-[312px] md:h-[468px] lg:h-[650px]
          "
        >
          {/* Scale wrapper */}
          <div
            className="
              absolute
              scale-[0.44] md:scale-[0.72] lg:scale-100
            "
            style={{
              width: SIZE,
              height: SIZE,
              transformOrigin: "center center",
            }}
          >
            {/* Ambient blue glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 950,
                height: 950,
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                background:
                  "radial-gradient(circle, rgba(29,78,216,0.30) 0%, transparent 66%)",
              }}
            />

            {/* ── SVG axis lines ── */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width={SIZE}
              height={SIZE}
              overflow="visible"
            >
              {/* Vertical axis */}
              <line
                x1={HALF}
                y1={0}
                x2={HALF}
                y2={SIZE}
                stroke="#1B2527"
                strokeWidth="3"
              />
              {/* Horizontal axis */}
              <line
                x1={0}
                y1={HALF}
                x2={SIZE}
                y2={HALF}
                stroke="#1B2527"
                strokeWidth="3"
              />

              {/* Diagonal dashed lines */}
              {[35, -35].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const reach = HALF * 1.05;
                const dx = reach * Math.sin(rad);
                const dy = reach * Math.cos(rad);
                return (
                  <line
                    key={deg}
                    x1={HALF - dx}
                    y1={HALF - dy}
                    x2={HALF + dx}
                    y2={HALF + dy}
                    stroke="rgba(27,103,255,0.28)"
                    strokeWidth="3"
                    strokeDasharray="10 7"
                  />
                );
              })}
            </svg>

            {/* ── Center core ── */}
            <CenterCore />

            {/* TOP — Marketing */}
            <OrbitNode
              icon={<TrendingUp size={32} className="text-[#1B67FF]" />}
              title="Marketing"
              subtitle="Growth Synergy"
              style={{ top: 0, left: HALF, transform: "translate(-50%, -50%)" }}
            />

            {/* LEFT — Graphics */}
            <OrbitNode
              icon={<Palette size={32} className="text-[#1B67FF]" />}
              title="Graphics"
              subtitle="Visual Identity"
              style={{
                top: HALF + 25,
                left: 0,
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* RIGHT — App Dev */}
            <OrbitNode
              icon={<Smartphone size={32} className="text-[#1B67FF]" />}
              title="App Dev"
              subtitle="Mobile Solutions"
              style={{
                top: HALF + 25,
                left: SIZE,
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* BOTTOM — Web Arch */}
            <OrbitNode
              icon={<Globe size={32} className="text-[#1B67FF]" />}
              title="Web Arch"
              subtitle="High Performance"
              style={{
                top: SIZE,
                left: HALF,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthEngine;
