import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Particles from "../components/Particles";
import Typewriter from "../components/Typewriter";
import Counter from "../components/Counter";
import { ArrowRight, Globe, BarChart3, Users } from "lucide-react";

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SDG_BADGES = [
  "SDG 3 · Good Health",
  "SDG 5 · Gender Equality",
  "SDG 8 · Decent Work",
  "SDG 12 · Responsible Consumption",
  "SDG 13 · Climate Action",
  "SDG 15 · Life on Land",
  "SDG 16 · Peace & Justice",
  "SDG 17 · Partnerships",
];

const PILLARS = [
  {
    icon: "🌿",
    color: "bg-mint",
    title: "Climate Resilience",
    desc: "Supporting adaptation, resource efficiency, net-zero pathways, biodiversity assessments, climate risk frameworks and long-term environmental preparedness.",
  },
  {
    icon: "💙",
    color: "bg-sky-pale",
    title: "Health & Environmental Well-Being",
    desc: "Advancing cleaner, safer, and healthier communities through community health impact assessments, occupational safety frameworks, and supply chain health audits.",
  },
  {
    icon: "👩💼",
    color: "bg-orange-50",
    title: "Women & Gender Equality",
    desc: "Supporting women empowerment programmes, women-led participation, enterprise development, and inclusive opportunity.",
  },
  {
    icon: "🚜🌾",
    color: "bg-purple-50",
    title: "Sustainable Agriculture",
    desc: "Promoting climate-smart practices, resilient livelihoods, and sustainable food systems.",
  },
  {
    icon: "🏭",
    color: "bg-green-50",
    title: "SME Sustainability",
    desc: "Making sustainability more accessible, affordable, and actionable for growing businesses.",
  },
  {
    icon: "⚖️",
    color: "bg-red-50",
    title: "Policy & Governance",
    desc: "ESG governance frameworks, sustainability policy development, regulatory compliance, and board capacity building.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center bg-linear-to-br from-[#dff1ee] via-[#cce6f8] to-[#e8f5ee]">
        <Particles />
        {/* Animated Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-linear-to-br from-ocean-mid/10 to-transparent blur-3xl animate-blob-float" />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-linear-to-br from-forest-light/10 to-transparent blur-3xl animate-blob-float"
          style={{ animationDirection: "reverse" }}
        />
        <div className="animate-morph absolute right-[3%] top-[10%] w-[340px] h-[340px] bg-linear-to-br from-ocean-mid/10 to-forest-light/10 pointer-events-none hidden lg:block" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible">
            <motion.div
              custom={0}
              variants={revealVariants}
              className="inline-flex items-center gap-2 bg-linear-to-r from-forest/5 to-ocean-mid/10 border border-ocean-bright/30 px-4 py-1.5 rounded-full mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-ocean-bright animate-pulse" />
              <div className="text-[11px] font-bold text-ocean tracking-widest uppercase">
                <Typewriter />
              </div>
            </motion.div>

            <motion.h1
              custom={1}
              variants={revealVariants}
              viewport={{ once: true, amount: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-light leading-[1.05] text-ink mb-6 tracking-tight"
            >
              Practical{" "}
              <em className="italic bg-linear-to-r from-forest-mid to-ocean-mid bg-clip-text text-transparent not-italic">
                Sustainability Solutions
              </em>
              <br />
              For Responsible Growth
              <br />
            </motion.h1>

            <motion.p
              custom={2}
              variants={revealVariants}
              className="text-lg text-justify text-slate/80 leading-relaxed max-w-md mb-10 font-light"
            >
              Verdantia Global helps businesses, institutions, and communities
              design practical sustainability, ESG, climate, and impact
              solutions that create long-term environmental, social, and
              economic value.
            </motion.p>

            <motion.div
              custom={3}
              variants={revealVariants}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link
                to="/consult"
                className="group bg-linear-to-r from-forest via-forest-mid to-ocean-mid text-white px-8 py-3.5 rounded-md text-sm font-semibold shadow-xl shadow-ocean-mid/20 hover:shadow-2xl hover:shadow-ocean-mid/40 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Start Your Journey{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-1.5 border-forest text-forest px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-mint/50 hover:-translate-y-1 transition-all"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-forest/10">
              {[
                { n: "7+", l: "Core Service Areas" },
                { n: "15+", l: "Industry & Community Focus Areas" },
                { n: "2", l: "Operational Regions" },
                { n: "100%", l: "Commitment to Sustainable Impact" },
              ].map((s, i) => (
                <div
                  key={i}
                  custom={i}
                  variants={revealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <div
                    className={`font-serif text-4xl font-bold ${i % 2 === 1 ? "text-ocean-mid" : "text-forest"}`}
                  >
                    <Counter key={s.n} value={s.n} />
                  </div>
                  <div className="text-[11px] text-muted uppercase tracking-wider mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className=" grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-min"
          >
            <div className="bg-white/80 backdrop-blur-md border border-sky/20 rounded-2xl p-6 shadow-xl shadow-ocean/5 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center text-xl mb-4">
                🌍
              </div>
              <h4 className="font-bold text-ink mb-1">Climate Strategy</h4>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-sky/20 rounded-2xl p-6 shadow-xl shadow-ocean/5 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-ocean-light/10 flex items-center justify-center text-xl mb-4">
                📊
              </div>
              <h4 className="font-bold text-ink mb-1 text-sm">
                Sustainability & ESG Advisory
              </h4>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-sky/20 rounded-2xl p-6 shadow-xl shadow-ocean/5 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-ocean-light/10 flex items-center justify-center text-xl mb-4">
                📢
              </div>
              <h4 className="font-bold text-ink mb-1 text-sm">
                Sustainability Workshops and Training
              </h4>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-sky/20 rounded-2xl p-6 shadow-xl shadow-ocean/5 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-ocean-light/10 flex items-center justify-center text-xl mb-4">
                🌾
              </div>
              <h4 className="font-bold text-ink mb-1 text-sm">
                Climate-smart Agriculture
              </h4>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Stripe */}
      <div className="bg-linear-to-r from-sky-pale to-mint/20 border-y border-sky/20 py-10 overflow-hidden">
        <p className="text-center text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-6">
          Aligned with UN Sustainable Development Goals
        </p>
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...SDG_BADGES, ...SDG_BADGES].map((badge, i) => (
            <span
              key={i}
              className="inline-block px-4 py-1.5 rounded-full bg-white border border-sky/20 text-xs font-semibold text-slate hover:border-ocean-light hover:text-ocean hover:bg-sky-pale transition-all cursor-default"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Pillars Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header + Image Row */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* LEFT: Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p
                custom={0}
                variants={revealVariants}
                className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-linear-to-r from-ocean-bright to-forest-light shadow-lg shadow-ocean-bright/50" />
                Our Focus Areas
              </motion.p>

              <motion.h2
                custom={1}
                variants={revealVariants}
                className="font-serif text-4xl md:text-5xl font-medium text-ink mb-8 leading-tight"
              >
                Integrated Sustainability
                <br />
                Across Every Dimension
              </motion.h2>

              <motion.div
                custom={2}
                variants={revealVariants}
                className="w-16 h-[3px] bg-linear-to-r from-forest-light via-ocean-bright to-ocean-light rounded-full mb-8 shadow-md shadow-ocean-bright/30"
              />

              <motion.p
                custom={3}
                variants={revealVariants}
                className="text-lg text-justify text-muted max-w-2xl font-light leading-relaxed"
              >
                We tackle sustainability holistically — connecting environment,
                social equity, and governance into coherent strategies. Our
                approach combines global sustainability thinking with practical
                implementation for emerging markets.
              </motion.p>
            </motion.div>

            {/* RIGHT: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block w-full lg:block"
            >
              <img
                src="/home.png"
                alt="Sustainability illustration"
                className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[380px] object-cover"
              />
            </motion.div>
          </div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                custom={i}
                className="group relative bg-white border border-sky/20 rounded-2xl p-10 transition-all duration-300 hover:border-sky hover:-translate-y-2 hover:shadow-2xl hover:shadow-ocean/10 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-ocean-bright via-forest-light to-ocean-light scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                {/* Icon */}
                <div
                  className={`${p.color} w-18 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {p.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-ink mb-4">{p.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-28 px-6 bg-linear-to-br from-[#061a3a] via-ocean to-[#0a3520] text-white">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-bold text-sage uppercase tracking-widest mb-4"
          >
            Our Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-medium mb-6"
          >
            Creating Measurable Value Through Sustainability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/60 max-w-xl mx-auto mb-16"
          >
            Every project we take on creates ripples far beyond the boardroom.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { n: "20+", l: "New Opportunities Identified" },
              { n: "30K", l: "Beneficiaries" },
              { n: "18+", l: "Sustainability RoadMaps" },
              { n: "$40M+", l: "Green Investment Potential" },
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="font-serif text-5xl font-bold text-sage mb-2 group-hover:text-ocean-light transition-colors drop-shadow-md">
                  <Counter value={s.n} />
                </div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4">
            Ready to Begin?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-ink max-w-2xl mx-auto mb-6">
            Let’s Build Sustainable Growth Together
          </h2>
          <p className="text-muted text-justify text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you are a business seeking ESG support, a development
            organization designing a climate project, or a partner exploring
            cross-border collaboration, Verdantia can help turn sustainability
            goals into practical action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/consult"
              className="bg-linear-to-r from-forest via-forest-mid to-ocean-mid text-white px-10 py-4 rounded-md text-sm font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book a Free Consultation →
            </Link>
            <Link
              to="/about"
              className="border-1.5 border-forest text-forest px-10 py-4 rounded-md text-sm font-semibold hover:bg-mint/50 transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
