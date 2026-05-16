import { useState } from "react";
import logo from "../../assets/logo-navbar.png";
import PrimaryButton from "../shared/PrimaryButton";
import { ChevronDown, Lock, Menu, X } from "lucide-react";

// Maintainable navigation structure
const NAV_LINKS = [
  { label: "The Hub", href: "#", isActive: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Products", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Partnership", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">
        <nav
          className="
            h-auto
            rounded-2xl
            border
            border-white/10
            bg-[#0A0F1C]/80
            backdrop-blur-xl
            flex
            items-center
            justify-between
            px-6
            py-3
            md:py-2
            relative
          "
        >
          {/* LEFT: LOGO */}
          {/* Added pl-3 to match the spatial flex gaps visually before the logo */}
          <div className="flex items-center md:pl-8 lg:pl-16">
            <img
              src={logo}
              alt="Jevxo Logo"
              className="h-6 w-auto object-contain"
            />
          </div>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-10 text-sm text-white/80">
            {NAV_LINKS.map((link, index) => (
              <li
                key={index}
                className={`flex items-center gap-1 cursor-pointer transition duration-200 ${
                  link.isActive ? "text-[#2E7CF6]" : "hover:text-white"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={16} />}
              </li>
            ))}
          </ul>

          {/* RIGHT: CTA & TOGGLE ACTIONS */}
          <div className="flex items-center gap-4">
            <PrimaryButton className="hidden md:block">
              Launch Your Project
            </PrimaryButton>

            {/* Toggle Switch Panel */}
            <div className="flex items-center gap-3">
              <Lock size={18} className="text-[#2E7CF6]" />
              <div
                className="
                  w-14
                  h-8
                  rounded-full
                  bg-gradient-to-r
                  from-[#615CFF]
                  to-[#8C52FF]
                  relative
                  border
                  border-white/10
                  cursor-pointer
                "
              >
                <div
                  className="
                    absolute
                    top-1/2
                    left-1
                    -translate-y-1/2
                    size-6
                    rounded-full
                    bg-white
                  "
                />
              </div>
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white/80 hover:text-white focus:outline-none transition p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* MOBILE & TABLET DROP-DOWN MENU */}
        {isOpen && (
          <div className="mt-2 w-full lg:hidden rounded-2xl border border-white/10 bg-[#0A0F1C]/95 backdrop-blur-xl p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <ul className="flex flex-col gap-5 text-sm text-white/80">
              {NAV_LINKS.map((link, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between cursor-pointer py-1 transition ${
                    link.isActive ? "text-[#2E7CF6]" : "hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={16} />}
                </li>
              ))}
            </ul>

            {/* CTA Inside Mobile Menu for Smaller viewports */}
            <div className="mt-6 pt-6 border-t border-white/5 md:hidden">
              <PrimaryButton className="w-full justify-center py-3">
                Launch Your Project
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
