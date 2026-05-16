import { Mail, MapPin, Phone, ChevronUp, Share2, Globe } from "lucide-react";
import logo from "../../assets/logo-footer.png";

const Footer = () => {
  const footerLinks = {
    Platform: ["The Hub", "Pricing", "ROI Calculator"],
    Company: ["About Us", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
  };

  return (
    <footer className="bg-[#0B0F14] pt-24 pb-12 relative border-t-3 border-[#2E7BFF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          {/* Left Side: Brand & Info */}
          <div>
            <img src={logo} className="h-10 mb-8" alt="Jevxo" />
            <h2 className="text-5xl font-bold text-[#2E7CF6] mb-6">
              Contact Us
            </h2>
            <p className="text-[#FFCE56] max-w-sm mb-12 leading-relaxed opacity-80">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "example@teamwebflow.com" },
                { icon: MapPin, text: "dsfdfdf dffdsfdsd" },
                { icon: Phone, text: "+123456789" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FFCE56]/40 transition-colors">
                    <item.icon className="text-[#FFCE56]" size={20} />
                  </div>
                  <span className="text-[#2E7CF6] font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
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
              <button className="w-full bg-[#F3B664] text-black font-bold py-4 rounded-xl mt-4 hover:shadow-[0_0_20px_rgba(243,182,100,0.3)] transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pt-16 border-t border-white/5 mb-16">
          <div className="lg:col-span-2">
            <p className="text-white/40 max-w-xs mb-8">
              The partner for enterprises building the next generation of
              digital empires.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li
                    key={link}
                    className="text-white/60 hover:text-[#00D1FF] transition-colors cursor-pointer text-sm font-medium"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs italic">
            © 2023 Jevxo Enterprise. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute -top-14 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#2E7CF6] rounded-full flex items-center justify-center text-black shadow-lg shadow-[#2E7CF6]/20"
          >
            <ChevronUp size={28} />
          </button>

          <div className="flex gap-6 text-[10px] uppercase font-bold tracking-tighter">
            <span className="text-white/20">English (US)</span>
            <span className="text-white/20">
              System Status: <span className="text-green-500">Online</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
