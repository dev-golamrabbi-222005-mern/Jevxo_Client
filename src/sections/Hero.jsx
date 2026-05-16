import heroOrbit from "../assets/hero-orbit.png";
import PrimaryButton from "../components/shared/PrimaryButton";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020817]
      "
    >
      {/* GRID BACKGROUND - Opacity increased */}
      <div
        className="
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]
          [background-size:30px_30px]
        "
      />

      {/* 
        RIGHT SIDE IMAGE & GLOW 
      */}
      <div
        className="
          absolute
          lg:right-64
          translate-x-1/4
          pointer-events-none
          select-none
          z-0
        "
      >
        {/* Dedicated Glow behind the Orbit Image */}
        <div
          className="
            absolute
            top-36
            left-16
            inset-0
            scale-100
            bg-[#2E7CF6]/50
            blur-[120px]
            rounded-full
          "
        />

        <img
          src={heroOrbit}
          alt="Hero Orbit"
          className="                
            relative
            z-10
            max-w-xl
            lg:max-w-2xl
            h-auto
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          pt-36
          pb-20
        "
      >
        {/* 
          Flex container handles layout. 
          Image is removed from here to be absolutely positioned relative to section. 
        */}
        <div className="flex">
          {/* LEFT SIDE - Restrict width to prevent H1 overlap with background image */}
          <div className="w-full lg:max-w-3xl">
            <h1
              className="
                text-4xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.25]
                bg-gradient-to-r
                from-[#2E7CF6]
                to-[#6FE7DD]
                bg-clip-text
                text-transparent
                tracking-wide
              "
            >
              Stop Building Sites, Start Building Empires.
            </h1>

            <p
              className="
                mt-8
                text-white/70
                text-base
                max-w-xl
                leading-relaxed
              "
            >
              Transform your vision into a digital empire with cutting-edge
              technology, stunning design, and data-driven strategies.
            </p>

            <PrimaryButton className="mt-8">See Jevxo</PrimaryButton>

            {/* STATS */}
            <div
              className="
                mt-14
                w-fit
                rounded-2xl
                border
                border-white/15
                bg-black/30
                backdrop-blur-xl
                px-8
                py-5
                flex
                gap-10
              "
            >
              <div>
                <h3 className="text-4xl font-bold text-[#3AA6FF]">500+</h3>
                <p className="text-white/70 text-sm mt-1">Projects Delivered</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#3AA6FF]">98%</h3>
                <p className="text-white/70 text-sm mt-1">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#3AA6FF]">15x</h3>
                <p className="text-white/70 text-sm mt-1">Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
