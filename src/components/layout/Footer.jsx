import { Mail, MapPin, Phone, ChevronUp, Share2, Globe } from "lucide-react";
import logo from "../../assets/logo-footer.png";
import PrimaryButton from "../shared/PrimaryButton";

const Footer = () => {
  const footerLinks = {
    Platform: ["The Hub", "Pricing", "ROI Calculator"],
    Company: ["About Us", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
  };

  const systemStatus = "Online";

  return (
    <footer className="bg-[#0B0F14] pt-12 md:pt-16 lg:pt-20 pb-8 relative border-t-3 border-[#2E7BFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-50 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Left Side: Brand & Info */}
          <div className="md:flex md:justify-between md:items-center lg:block">
            <div className="flex justify-center items-center flex-col md:block">
              <img src={logo} className="h-15 mb-8 lg:ml-12" alt="Jevxo" />
              <h2 className="text-5xl font-semibold text-[#2E7BFF] mb-6">
                Contact Us
              </h2>
              <p className="text-[#BB9C34] max-w-xs text-[18px] mb-12 tracking-wide">
                We are committed to processing the information in order to
                contact you and talk about your project.
              </p>
            </div>

            <div className="space-y-8 flex justify-center items-center flex-col md:block">
              {[
                { icon: Mail, text: "contact@jevxo.com" },
                { icon: MapPin, text: "Rajshahi, Bangladesh" },
                { icon: Phone, text: "+880123456789" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="flex gap-5 hover:scale-110 hover:-translate-y-2.5 transition-all duration-300">
                    <item.icon className="text-[#FD7E1E]" size={22} />
                    <span className="text-[#2E7BFF] text-lg tracking-wide">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-5">
              <input
                type="text"
                placeholder="Name*"
                className="w-full bg-white text-black p-4 rounded-xl outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-white text-black p-4 rounded-xl outline-none"
                required
              />
              <input
                type="url"
                placeholder="Website*"
                className="w-full bg-white text-black p-4 rounded-xl outline-none"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-white text-black p-4 rounded-xl outline-none resize-none"
              />
            </div>
            <PrimaryButton type="submit" className="w-full">
              Submit
            </PrimaryButton>
          </form>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pt-4 mb-16">
          <div className="lg:col-span-2">
            <p className="text-white/80 text-center md:text-left max-w-xs mb-8">
              The partner for enterprises building the next generation of
              digital empires.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#BB9B33] hover:text-white hover:border-white/30 transition-all cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="text-center lg:text-left">
              <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li
                    key={link}
                    className="text-white/80 hover:text-[#2E7BFF] transition-colors cursor-pointer font-medium"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-16 md:pt-20 lg:pt-24 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Jevxo Enterprise. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute cursor-pointer -top-4 md:top-10 lg:top-16 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#2E7BFF] rounded-full flex items-center justify-center text-black shadow-lg shadow-[#2E7CF6]/20"
          >
            <ChevronUp size={28} />
          </button>

          <div className="flex gap-6 text-sm">
            <span className="text-white/20">English (US)</span>
            <span className="text-white/20">
              System Status:{" "}
              <span className="text-green-500">{systemStatus}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
