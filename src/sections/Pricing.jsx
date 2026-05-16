import { CheckCircle2, GraduationCap, Home, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      icon: GraduationCap,
      desc: "Perfect for growing schools and specialized academies.",
      features: [
        "Up to 250 students",
        "Basic Academic Records",
        "Attendance Tracking",
      ],
      buttonText: "Start Free",
      isFeatured: false,
    },
    {
      name: "Pro Management",
      icon: Home,
      desc: "Advanced tools for data-driven educational institutions.",
      features: [
        "Up to 1,000 students",
        "Full Finance & Analytics",
        "Parent/Teacher Portal",
        "Automated Scheduling",
      ],
      buttonText: "Upgrade to Pro",
      isFeatured: true,
    },
    {
      name: "Ultimate",
      icon: Zap,
      desc: "Custom ecosystem for large districts and universities.",
      features: [
        "Unlimited Students",
        "API Access & Webhooks",
        "Dedicated Account Manager",
      ],
      buttonText: "Contact Sales",
      isFeatured: false,
    },
  ];

  return (
    <section className="bg-[#020817] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-[32px] border transition-all ${plan.isFeatured ? "bg-[#0A0F1C] border-[#FFCE56]/50 shadow-[0_0_40px_rgba(255,206,86,0.1)]" : "bg-[#0A0F1C]/40 border-white/5"}`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-[#FFCE56] rounded-b-full shadow-[0_0_15px_#FFCE56]" />
              )}

              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <plan.icon className="text-[#00D1FF]" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                {plan.desc}
              </p>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-white/80 text-sm"
                  >
                    <CheckCircle2 size={18} className="text-[#00D1FF]" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.isFeatured ? "bg-[#F3B664] text-black" : "border border-white/10 text-white hover:bg-white/5"}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-8 md:px-16 rounded-[40px] bg-gradient-to-r from-[#0A0F1C] to-[#161C2C] border border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to modernize your campus?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-[#F3B664] text-black px-10 py-4 rounded-2xl font-bold whitespace-nowrap shadow-[0_0_30px_rgba(243,182,100,0.2)]">
              Get Free Personalised Demo
            </button>
            <p className="text-white/40 text-sm max-w-[280px]">
              Join over 4,500+ modern schools already using EduFlow to transform
              education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
