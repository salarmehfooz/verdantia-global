import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Why Us?", path: "/whyUs" },
  { name: "Partnerships", path: "/partners" },
  { name: "Verdantia Pakistan", path: "/pakistan" },
  { name: "Fellowship", path: "/fellowship" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[5%] transition-all duration-300 border-b border-slate-100 ${
        isScrolled
          ? "h-20 bg-white/90 backdrop-blur-xl shadow-sm"
          : "h-24 bg-white/80 backdrop-blur-md"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center h-full group">
        <img
          src="/logo+name.png.png"
          alt="Verdantia Global"
          className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
            isScrolled ? "h-16 md:h-18" : "h-20 md:h-24"
          }`}
        />
      </Link>

      {/* DESKTOP NAV */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === link.path
                  ? "text-forest"
                  : "text-slate-600"
              } hover:text-forest`}
            >
              {link.name}

              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-forest transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </li>
        ))}

        <li>
          <Link
            to="/consult"
            className="bg-gradient-to-r from-forest to-ocean-mid text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:opacity-90 transition-all"
          >
            Consult Now
          </Link>
        </li>
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-forest"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 text-lg hover:text-forest transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/consult"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-forest font-semibold mt-2"
            >
              Consult Now →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
