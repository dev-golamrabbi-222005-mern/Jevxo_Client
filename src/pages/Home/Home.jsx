import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from "react-icons/fa";
import Hero from "../../sections/home/Hero";
import GrowthEngine from "../../sections/home/GrowthEngine";
import Showcase from "../../sections/home/Showcase";
import RoiCalculator from "../../sections/home/RoiCalculator";
import Education from "../../sections/home/Education";
import Features from "../../sections/home/Features";
import FlexiblePricing from "../../sections/home/FlexiblePricing";
import Pricing from "../../sections/home/Pricing";

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
