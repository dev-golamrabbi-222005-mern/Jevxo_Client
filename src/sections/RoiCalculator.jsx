import SectionTitle from "../components/shared/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";
import RoiChart from "../components/ui/RoiChart";

import techLine from "../assets/techline2.png";
import ellipse from "../assets/ellipse1.png";

const RoiCalculator = () => {
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
      <img
        src={techLine}
        alt=""
        className="absolute left-0 bottom-0 opacity-50"
      />

      <img
        src={ellipse}
        alt=""
        className="absolute right-0 bottom-0 opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          title="ROI Calculator"
          subtitle="Discover your potential return on investment with our services"
        />

        {/* MAIN CARD */}
        <div
          className="
            mt-20
            rounded-[28px]
            border
            border-[#1B67FF]
            bg-[#060D18]/80
            backdrop-blur-xl
            grid
            lg:grid-cols-[480px_1fr]
            overflow-hidden
          "
        >
          {/* LEFT */}
          <div className="p-8 border-r border-[#1B67FF]">
            {/* BUDGET */}
            <div
              className="
                rounded-3xl
                bg-[#09111E]
                border
                border-white/10
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <p className="text-white/55 font-semibold">YOUR BUDGET</p>

                <div
                  className="
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-[#15C8FF]/40
                    text-[#15C8FF]
                    font-semibold
                  "
                >
                  $50,000
                </div>
              </div>

              {/* SLIDER */}
              <div className="mt-8">
                <div className="relative h-[6px] rounded-full bg-[#12354A]">
                  <div className="absolute left-0 top-0 h-full w-[25%] rounded-full bg-[#15C8FF]" />

                  <div
                    className="
                      absolute
                      left-[25%]
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      size-5
                      rounded-full
                      bg-[#F7C93E]
                      border-4
                      border-[#15C8FF]
                    "
                  />
                </div>
              </div>

              {/* ROI */}
              <div className="mt-14 border-t border-white/10 pt-10 text-center">
                <p className="text-white/40 tracking-[0.25em] text-sm">
                  PROJECTED ROI
                </p>

                <h3 className="mt-3 text-[#F7C93E] text-6xl font-bold">
                  $75,000
                </h3>
              </div>
            </div>

            {/* SERVICES */}
            <div className="mt-10">
              <div className="flex items-center gap-2">
                <h3 className="text-white/60 font-semibold">SELECT SERVICES</h3>

                <div className="size-2 rounded-full bg-[#15C8FF]" />
              </div>

              <div className="grid grid-cols-2 gap-5 mt-6">
                <ServiceCard
                  title="Web Development"
                  multiplier="1.5X MULTIPLIER"
                  active
                />

                <ServiceCard
                  title="App Development"
                  multiplier="2X MULTIPLIER"
                />

                <ServiceCard
                  title="Digital Marketing"
                  multiplier="3X MULTIPLIER"
                />

                <ServiceCard
                  title="Branding & Design"
                  multiplier="1.8X MULTIPLIER"
                />
              </div>

              <button
                className="
                  mt-6
                  mx-auto
                  block
                  px-5
                  py-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-white/70
                  text-sm
                "
              >
                + MORE SERVICE
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <RoiChart />
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
