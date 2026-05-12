import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, useScroll, useSpring } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-r from-ocean-bright via-forest-light to-ocean-light z-[2000] origin-[0%] shadow-[0_0_8px_rgba(74,174,232,0.6)]"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
