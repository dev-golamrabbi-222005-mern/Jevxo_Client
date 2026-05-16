import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from "react-icons/fa";
import Hero from "../../sections/Hero";
import GrowthEngine from "../../sections/GrowthEngine";
import Showcase from "../../sections/Showcase";
import RoiCalculator from "../../sections/RoiCalculator";
import Education from "../../sections/Education";
import Features from "../../sections/Features";
import FlexiblePricing from "../../sections/FlexiblePricing";
import Pricing from "../../sections/Pricing";

const Home = () => {
  return (
    <div>
      <Hero />
      <GrowthEngine/>
      <RoiCalculator/>
      <Showcase/>
      <Education/>
      <Features/>
      <FlexiblePricing/>
      <Pricing/>
    </div>
  );
};

export default Home;
