import { ArrowRight } from "lucide-react";

import SectionTitle from "../components/shared/SectionTitle";
import ShowcaseCard from "../components/ui/ShowcaseCard";
import FeaturedCaseStudy from "../components/ui/FeaturedCaseStudy";

import techLine from "../assets/techline2.png";
import ellipse from "../assets/ellipse1.png";

import luxePreview from "../assets/luxe-preview.png";
import novaPreview from "../assets/nova-preview.png";

const Showcase = () => {
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

      {/* DECOR */}
      <img src={techLine} alt="" className="absolute left-0 top-0 opacity-50" />

      <img src={ellipse} alt="" className="absolute right-0 top-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="relative">
          <SectionTitle
            title="Our Showcase"
            subtitle="A glimpse into the empires we've built. Scroll to explore our portfolio."
          />

          <button
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              flex
              items-center
              gap-2
              text-[#2E7CF6]
              font-medium
            "
          >
            Explore All
            <ArrowRight size={18} />
          </button>
        </div>

        {/* GRID */}
        <div
          className="
            mt-20
            grid
            lg:grid-cols-3
            gap-8
          "
        >
          <FeaturedCaseStudy image={luxePreview} />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
