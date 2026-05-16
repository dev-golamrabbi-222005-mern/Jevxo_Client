import React, { useState } from "react";
import techLines from "../assets/techline3.png";

const FlexiblePricing = () => {
  const [students, setStudents] = useState(750);
  const [isYearly, setIsYearly] = useState(false);

  // Scalable calculation logic
  const monthlyCost = (students * 1.66).toLocaleString();
  const annualSavings = (students * 3.2).toLocaleString();

  return (
    <section className="relative bg-[#020817] py-24 overflow-hidden border-t border-white/5">
      <img
        src={techLines}
        className="absolute inset-0 w-full opacity-20 pointer-events-none"
        alt=""
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2E7CF6] to-[#6FE7DD] bg-clip-text text-transparent mb-4">
            Flexible Pricing for Modern Schools
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Scale your institution with our high-performance management
            platform. Use the calculator below to find your perfect fit.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#0A0F1C]/80 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Interactive Savings Estimator
              </h3>
              <p className="text-white/40 text-sm">
                Real-time projection based on your student enrollment.
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-lg text-sm transition-all ${!isYearly ? "bg-[#00D1FF] text-black font-bold" : "text-white/60"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-lg text-sm transition-all ${isYearly ? "bg-[#00D1FF] text-black font-bold" : "text-white/60"}`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex justify-between items-end mb-6">
              <span className="text-white/80 font-medium">
                How many students do you have?
              </span>
              <div className="text-right">
                <span className="text-5xl font-bold text-[#00D1FF]">
                  {students}
                </span>
                <span className="text-white/40 ml-2">Students</span>
              </div>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00D1FF]"
            />
            <div className="flex justify-between text-white/20 text-xs mt-4">
              <span>100</span>
              <span>2.5K</span>
              <span>5K</span>
              <span>7.5K</span>
              <span>10K+</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
              <span className="text-white/40 text-xs uppercase tracking-widest block mb-4">
                Estimated Monthly Cost
              </span>
              <div className="text-4xl font-bold text-[#00D1FF] mb-2">
                ${monthlyCost}
              </div>
              <span className="text-[#2E7CF6] text-sm">
                Electric Blue Scalability
              </span>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8">
              <span className="text-white/40 text-xs uppercase tracking-widest block mb-4">
                Estimated Annual Savings
              </span>
              <div className="text-4xl font-bold text-[#FFCE56] mb-2">
                Save ${annualSavings}
              </div>
              <span className="text-[#FFCE56]/60 text-sm">
                With Premium Support Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexiblePricing;
