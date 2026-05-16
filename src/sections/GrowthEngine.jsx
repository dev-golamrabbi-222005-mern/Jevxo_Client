import { Palette, Smartphone, Globe, TrendingUp } from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import TechLines from "../components/ui/TechLines1";
import CenterCore from "../components/ui/CenterCore";
import OrbitNode from "../components/ui/OrbitNode";

const GrowthEngine = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
        bg-[#020817]
      "
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* STARS */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:120px_120px]
          opacity-[0.12]
        "
      />

      {/* CENTER GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[850px]
          h-[850px]
          rounded-full
          bg-[#1D4ED8]/25
          blur-[140px]
        "
      />

      {/* TECH LINES */}
      <TechLines />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* TITLE */}
        <SectionTitle
          title="The Jevxo Growth Engine"
          subtitle="A Unified Ecosystem where Strategy, Design , and technology work as one."
        />

        {/* ORBIT AREA */}
        <div
          className="
            relative
            mt-12
            min-h-screen
            flex
            items-center
            justify-center
          "
        >
          {/* CENTER LINES */}
          <div
            className="
              absolute
              top-20
              w-[600px]
              h-[600px]
            "
          >
            {/* VERTICAL */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-[#1A2428]" />

            {/* HORIZONTAL */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 w-full bg-[#1A2428]" />

            {/* DIAGONAL */}
            <div
              className="
                absolute
                left-1/2
                h-full
                bg-[#1B67FF]/40
                rotate-35
                origin-center
                border-l
                border-dashed
              "
            />

            <div
              className="
                absolute
                left-1/2
                h-full
                bg-[#1B67FF]/40
                -rotate-35
                origin-center
                border-l
                border-dashed
              "
            />
          </div>

          {/* CENTER CORE */}
          <CenterCore />

          {/* TOP */}
          <OrbitNode
            title="Marketing"
            subtitle="Growth Synergy"
            className="top-0 left-1/2 -translate-x-1/2"
            icon={<TrendingUp size={34} className="text-[#1B67FF]" />}
          />

          {/* LEFT */}
          <OrbitNode
            title="Graphics"
            subtitle="Visual Identity"
            className="left-60 top-105 -translate-y-1/2"
            icon={<Palette size={34} className="text-[#1B67FF]" />}
          />

          {/* RIGHT */}
          <OrbitNode
            title="App Dev"
            subtitle="Mobile Solutions"
            className="right-60 top-105 -translate-y-1/2"
            icon={<Smartphone size={34} className="text-[#1B67FF]" />}
          />

          {/* BOTTOM */}
          <OrbitNode
            title="Web Arch"
            subtitle="High Performance"
            className="bottom-0 left-1/2 -translate-x-1/2"
            icon={<Globe size={34} className="text-[#1B67FF]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default GrowthEngine;
