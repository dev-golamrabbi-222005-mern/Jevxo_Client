import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logo-navbar.png";
import switchBody from "../../assets/switch-body.png";

import PrimaryButton from "../shared/PrimaryButton";

import { ChevronDown, Lock, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "The Hub", href: "#", isActive: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Products", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Partnership", href: "#" },
];

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <motion.div
        animate={{ scale: isOn ? 1.08 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Lock size={18} className="text-[#2E7CF6]" />
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOn(!isOn)}
        className="w-14 h-8 rounded-full relative border border-white/10 cursor-pointer bg-cover bg-center bg-no-repeat transition-all duration-300 overflow-hidden"
        style={{
          backgroundImage: `url(${switchBody})`,
          filter: isOn ? "none" : "grayscale(30%) brightness(80%)",
        }}
      >
        {/* GLOW */}
        <motion.div
          animate={{ opacity: isOn ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#2E7CF6] blur-xl"
        />

        {/* TOGGLE HANDLE */}
        <motion.div
          animate={{ x: isOn ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute top-1 left-1 size-6 rounded-full bg-white shadow-md"
        />
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.25 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full fixed top-0 left-0 z-50"
    >
      <div className="w-full" style={{ overflowX: "clip" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-2 md:pt-4 lg:pt-6 w-screen md:w-auto">
          <motion.nav
            whileHover={{ borderColor: "rgba(255,255,255,0.16)" }}
            className="
              h-auto rounded-2xl border border-white/10
              bg-[#0A0F1C]/80 backdrop-blur-xl
              flex items-center justify-between
              px-4 md:px-6
              py-3 md:py-2
              relative transition-all duration-300
            "
          >
            {/* LEFT: LOGO */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Jevxo Logo"
                className="h-6 w-auto object-contain lg:pl-12"
              />
            </motion.div>

            {/* DESKTOP NAV LINKS */}
            <ul className="hidden lg:flex items-center gap-10 text-sm text-white/80">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-1 cursor-pointer transition duration-200 ${
                    link.isActive ? "text-[#2E7CF6]" : "hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* RIGHT */}
            <div className="flex items-center gap-2 md:gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <div className="shadow-[0_0_20px_rgba(216,171,90,0.45)] rounded-xl">
                  <PrimaryButton className="hidden md:block">
                    Launch Your Project
                  </PrimaryButton>
                </div>
              </motion.div>

              <ToggleSwitch />

              {/* MOBILE MENU BUTTON */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white/80 hover:text-white focus:outline-none transition p-1"
                aria-label="Toggle Menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.nav>

          {/* MOBILE & TABLET MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                  mt-2 w-full lg:hidden
                  rounded-2xl border border-white/10
                  bg-[#0A0F1C]/95 backdrop-blur-xl
                  p-6 shadow-xl
                "
              >
                <ul className="flex flex-col gap-5 text-sm text-white/80">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={navItemVariants}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center justify-between cursor-pointer py-1 transition ${
                        link.isActive ? "text-[#2E7CF6]" : "hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.hasDropdown && <ChevronDown size={16} />}
                    </motion.li>
                  ))}
                </ul>

                {/* MOBILE CTA */}
                <motion.div
                  variants={navItemVariants}
                  className="mt-6 pt-6 border-t border-white/5 md:hidden"
                >
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <PrimaryButton className="w-full justify-center py-3">
                      Launch Your Project
                    </PrimaryButton>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
