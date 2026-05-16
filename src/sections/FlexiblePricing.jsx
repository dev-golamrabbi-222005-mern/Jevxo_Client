import React, { useState } from "react";
import techLines from "../assets/techline3.png";
import SectionTitle from "../components/shared/SectionTitle"
import costIcon from "../assets/icons/cost-icon.png"
import savingsIcon from "../assets/icons/savings-icon.png"


const FlexiblePricing = () => {
  const [students, setStudents] = useState(750);
  const [isYearly, setIsYearly] = useState(false);

  // Scalable calculation logic
  const monthlyCost = (students * 1.66).toLocaleString();
  const annualSavings = (students * 3.2).toLocaleString();

  return (
    <section className="relative bg-[#0B0F14] py-12 md:py-16 lg:py-20 overflow-hidden ">
      {/* <img
        src={techLines}
        className="absolute inset-0 w-full opacity-20 pointer-events-none"
        alt=""
      /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Flexible Pricing for Modern Schools"
          subtitle="Scale your institution with our high-performance management
            platform. Use the calculator below to find your perfect fit."
        />

        <div className="max-w-5xl mx-auto bg-[#13171B] border border-white/10 rounded-3xl mt-8 md:mt-12 p-8 md:p-12 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h3 className="text-2xl text-center md:text-left font-bold text-white mb-2">
                Interactive Savings Estimator
              </h3>
              <p className="text-white/40 text-sm text-center md:text-left">
                Real-time projection based on your student enrollment.
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-lg text-sm transition-all ${!isYearly ? "bg-[#0DB9F2] text-black font-bold" : "text-white/60"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-lg text-sm transition-all ${isYearly ? "bg-[#0DB9F2] text-black font-bold" : "text-white/60"}`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex justify-center md:justify-between items-center flex-col md:flex-row md:items-end gap-4 mb-6">
              <span className="text-white/80 font-medium">
                How many students do you have?
              </span>
              <div className="md:text-right text-center">
                <span className="text-5xl font-bold text-[#0DB9F2]">
                  {students}
                </span>
                <span className="text-white/40 ml-2">Students</span>
              </div>
            </div>

            {/* Custom styled slider */}
            <div className="relative">
              <div className="relative h-[6px] rounded-full bg-white/10">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-[#00D1FF] transition-all"
                  style={{
                    width: `${((students - 100) / (10000 - 100)) * 100}%`,
                  }}
                />
                <div
                  className="absolute top-1/2 size-5 rounded-full bg-[#F7C93E] border-4 border-[#00D1FF] -translate-x-1/2 -translate-y-1/2 transition-all"
                  style={{
                    left: `${((students - 100) / (10000 - 100)) * 100}%`,
                  }}
                />
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
                aria-label="Number of students"
              />
            </div>

            <div className="flex justify-between text-white/20 text-xs mt-4">
              {[
                { label: "100", value: 100 },
                { label: "2.5K", value: 2500 },
                { label: "5K", value: 5000 },
                { label: "7.5K", value: 7500 },
                { label: "10K+", value: 10000 },
              ].map(({ label, value }) => (
                <span
                  key={value}
                  onClick={() => setStudents(value)}
                  className={`cursor-pointer transition-colors duration-200 hover:text-[#00D1FF] ${
                    Number(students) === value
                      ? "text-[#00D1FF] font-semibold"
                      : "text-white/20"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-8 text-center md:text-left">
              <span className="flex gap-2 text-white/40 text-xs uppercase tracking-widest mb-4">
                <img src={costIcon} alt="" />
                Estimated Monthly Cost
              </span>
              <div className="text-4xl font-bold text-[#0DB9F2] mb-2">
                ${monthlyCost}
              </div>
              <span className="text-[#147DA1] font-semibold text-sm">
                Electric Blue Scalability
              </span>
            </div>
            <div className=" bg-white/5 border border-white/5 rounded-2xl p-4 md:p-8 text-center md:text-left">
              <span className="flex gap-2 text-white/40 text-xs uppercase tracking-widest mb-4">
                <img src={savingsIcon} alt="" />
                Estimated Annual Savings
              </span>
              <div className="text-4xl font-bold text-[#FBBE24] mb-2">
                Save ${annualSavings}
              </div>
              <span className="text-[#967C50] font-semibold text-sm">
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
