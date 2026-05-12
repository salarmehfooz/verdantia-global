import { Link } from "react-router-dom";
import { Linkedin, Send, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Why Us?", path: "/whyUs" },
    { label: "Our Partners", path: "/partners" },
  ];

  const services = [
    "Climate Strategy & ESG Advisory",
    "Climate Smart Agriculture",
    "Sustainability Reporting for SMEs",
    "Capacity Building & Training",
    "Stakeholder Engagement & Materiality",
    "Health, Wellbeing & Social Impact",
  ];

  return (
    <footer className="bg-linear-to-b from-[#060e1f] via-[#081526] to-[#061510] text-white/70 py-20 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1.1fr_1fr] gap-12 mb-16">
        {/* Logo + Description */}
        <div className="flex flex-col gap-5">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-2 mb-2 group"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden transition-transform group-hover:scale-110">
              <img
                src="/logo-bgfree.png.png"
                alt="Verdantia Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-2xl font-bold text-mint">
              Verdantia
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-white/50 max-w-xs text-justify">
            Verdantia Global helps businesses, institutions, and communities
            design practical sustainability, ESG, climate, and impact solutions.
          </p>

          <div className="flex gap-3">
            <a className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 transition-all">
              <Linkedin size={18} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 transition-all">
              <Send size={18} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h5 className="text-[13px] font-bold text-white uppercase tracking-widest mb-6">
            Navigate
          </h5>

          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={scrollToTop}
                  className="text-sm hover:text-mint transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/consult"
                onClick={scrollToTop}
                className="text-sm hover:text-mint transition-colors"
              >
                Consult Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-[13px] font-bold text-white uppercase tracking-widest mb-6">
            Services
          </h5>

          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="text-sm hover:text-mint transition-colors"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-[13px] font-bold text-white uppercase tracking-widest mb-6">
            Contact
          </h5>

          <ul className="flex flex-col gap-3">
            <li className="text-sm">
              <a
                href="mailto:info@verdantiaglobal.com"
                className="hover:text-mint"
              >
                info@verdantiaglobal.com
              </a>
            </li>

            <li className="text-sm">
              <a href="tel:+14254969279" className="hover:text-mint">
                +1 425 496 9279
              </a>
            </li>
            <li className="text-sm">
              Head Office <br></br>17350 State Hwy 249, Ste 220 #32292, Houston,
              Texas 77064
            </li>

            <li className="text-sm text-white/50">
              United States · Pakistan (Islamabad-Lahore-Karachi-Hyderabad)
            </li>

            <li className="mt-2">
              <Link
                to="/consult"
                onClick={scrollToTop}
                className="text-mint font-medium hover:underline"
              >
                → Book a Free Call
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-black/40 -mx-[5%] px-[5%] py-8">
        {/* Left: Copyright + Disclaimer */}
        <div className="text-xs text-white/30 leading-relaxed max-w-3xl">
          <p className="mb-3">© 2026 Verdantia Global. All rights reserved.</p>

          <p>
            The information provided here is general in nature and may not apply
            to any specific person or situation. While efforts are made to
            ensure the information is accurate and up to date, we cannot
            guarantee its correctness at the time it is received or that it will
            remain accurate in the future. No action should be taken based on
            this information without first seeking appropriate professional
            advice and carefully reviewing the relevant circumstances.
          </p>
        </div>

        {/* Right: Badges */}
        <div className="flex flex-wrap gap-2 md:justify-end">
          {["UN Global Compact", "B Corp Aligned"].map((badge) => (
            <span
              key={badge}
              className="text-[10px] px-3 py-1 rounded-full bg-white/10 text-white/50 border border-white/10 uppercase tracking-wider font-semibold"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
