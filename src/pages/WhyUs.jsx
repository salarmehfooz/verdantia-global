import { motion } from "motion/react";
import { Link } from "react-router-dom";
import WhyUsTypewriter from "../components/WhyUsTypewriter";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Leaf,
  Layers3,
  Sparkles,
  Users2,
} from "lucide-react";

export default function WhyUs() {
  const pillars = [
    {
      icon: <Layers3 size={22} className="text-ocean-mid" />,
      title: "Built for Execution",
      desc: "We create sustainability systems that organizations can realistically adopt, manage, and scale.",
    },
    {
      icon: <Globe2 size={22} className="text-sky-500" />,
      title: "Global Thinking",
      desc: "Our work reflects international sustainability standards while staying grounded in local realities.",
    },
    {
      icon: <Users2 size={22} className="text-orange-400" />,
      title: "People-Centered",
      desc: "We prioritize inclusion, stakeholder collaboration, and community resilience in every engagement.",
    },
    {
      icon: <Leaf size={22} className="text-emerald-500" />,
      title: "Long-Term Impact",
      desc: "We focus on meaningful environmental and social transformation—not short-term reporting.",
    },
  ];

  const differences = [
    "Implementation-focused approach",
    "Local insight with global perspective",
    "Community and business centered thinking",
    "Cross-sector sustainability expertise",
    "Long-term strategic partnerships",
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative px-6 pt-32 pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#edf8f1] via-white to-[#edf6ff]" />

        {/* Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-100/50 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-emerald-100 px-4 py-2 rounded-full mb-8 shadow-sm">
                <Sparkles size={15} className="text-forest-light" />

                <div className="text-xs font-semibold tracking-wide text-forest-light uppercase">
                  <WhyUsTypewriter />
                </div>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.05] tracking-tight">
                Sustainability Built Around{" "}
                <span className="bg-linear-to-r from-forest-mid to-ocean-mid bg-clip-text text-transparent">
                  Real-World Outcomes
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-justify text-lg md:text-xl text-slate/75 leading-relaxed font-light">
                Verdantia Global combines sustainability expertise, systems
                thinking, and implementation support to help organizations move
                from ambition to action.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/consult"
                  className="group bg-linear-to-r from-forest via-forest-mid to-ocean-mid text-white px-8 py-4 rounded-xl font-medium text-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 transition-all inline-flex items-center gap-2"
                >
                  Work With Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  to="/about"
                  className="border border-slate-200 bg-white/70 backdrop-blur-md px-8 py-4 rounded-xl text-sm font-medium text-ink hover:border-slate-300 hover:bg-white transition-all"
                >
                  Learn About Verdantia
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white shadow-2xl shadow-slate-200/50 p-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-70" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50" />

                <p className="text-[11px] uppercase tracking-[0.3em] text-ocean-mid font-bold mb-6">
                  Our Difference
                </p>

                <div className="space-y-4">
                  {differences.map((item, i) => (
                    <div
                      key={i}
                      className="
                        group/item
                        relative
                        overflow-hidden
                        rounded-2xl
                        border border-slate-100
                        bg-white
                        p-4
                        transition-all duration-300
                        hover:border-emerald-200
                        hover:shadow-lg
                        hover:shadow-emerald-100/40
                        hover:-translate-y-1
                      "
                    >
                      <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-linear-to-r from-emerald-50/50 via-sky-50/40 to-transparent" />

                      <div className="relative flex items-start gap-4">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2
                            size={18}
                            className="text-emerald-500"
                          />
                        </div>

                        <p className="text-sm text-slate/75 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-forest-light font-bold mb-5">
              What Makes Us Different
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-8">
              Turning Sustainability Into Measurable Progress
            </h2>

            <p className="text-lg text-justify text-slate/75 leading-relaxed font-light">
              We combine sustainability advisory, climate and community
              perspectives, ESG support, and locally informed implementation
              approaches to help organizations navigate evolving environmental
              and social priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((item, i) => (
              <div
                key={i}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-slate-100
                  bg-linear-to-br from-white to-slate-50
                  p-10
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:shadow-slate-200/40
                "
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-7 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-ink mb-4">
                  {item.title}
                </h3>

                <p className="text-slate/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-r from-forest to-ocean-mid p-[1px]">
            <div className="relative bg-white rounded-[2.5rem] px-8 md:px-20 py-20 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-forest-light font-bold mb-6">
                Our Philosophy
              </p>

              <blockquote className="font-serif text-3xl md:text-5xl text-ink leading-tight max-w-4xl mx-auto">
                “Sustainability should create practical value for both
                organizations and the communities they serve.”
              </blockquote>

              <div className="w-16 h-[3px] bg-linear-to-r from-forest-light to-ocean-light rounded-full mx-auto my-10" />

              <p className="max-w-2xl mx-auto text-justify text-slate/70 text-lg leading-relaxed font-light mb-10">
                We believe lasting impact happens when sustainability becomes
                embedded into real operations, partnerships, and
                decision-making.
              </p>

              <Link
                to="/consult"
                className="group bg-forest text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-forest-mid transition-all inline-flex items-center gap-2 hover:-translate-y-1"
              >
                Start Your Journey
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
