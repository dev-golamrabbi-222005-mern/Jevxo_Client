import { ArrowRight } from "lucide-react";

import SectionTitle from "../components/shared/SectionTitle";
import ShowcaseCard from "../components/ui/ShowcaseCard";
import FeaturedCaseStudy from "../components/ui/FeaturedCaseStudy";

import techLine from "../assets/techline2.png";
import ellipse from "../assets/ellipse1.png";

import jsIcon from "../assets/icons/js-icon.png";
import boxIcon from "../assets/icons/box-icon.png";
import meshIcon from "../assets/icons/mesh-icon.png";
import growthIcon from "../assets/icons/growth-icon.png";
import terminalIcon from "../assets/icons/terminal-icon.png";
import cloudIcon from "../assets/icons/cloud-icon.png";

import luxePreview from "../assets/luxe-preview.png";
import novaPreview from "../assets/nova-preview.png";

const Showcase = () => {

  const icons1 = [jsIcon, boxIcon, meshIcon]
  const icons2 = [growthIcon, terminalIcon, cloudIcon]

  return (
    <section
      className="
        relative
        overflow-hidden
        py-12 md:py-16 lg:py-20
        bg-[#0B0F14]
      "
    >
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
              top-5/4
              -translate-y-1/2
              md:flex
              items-center
              gap-2
              text-[#2E7CF6]
              font-medium
              hidden
            "
          >
            Explore All
            <ArrowRight size={18} />
          </button>
        </div>

        {/* GRID */}
        <div
          className="
            mt-12 md:mt-16
            grid
            lg:grid-cols-3
            gap-8
          "
        >
          <FeaturedCaseStudy icons={icons1} image={luxePreview} />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            icons={icons2}
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            icons={icons2}
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            icons={icons2}
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />

          <ShowcaseCard
            image={novaPreview}
            title="Project Nova"
            icons={icons2}
            description="Real-time AI monitoring dashboard for autonomous logistical fleets."
          />

          <button
            className="
              flex
              md:hidden
              justify-center
              items-center
              gap-2
              text-[#2E7CF6]
              font-medium
              hover:bg-
              
            "
          >
            Explore All
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
