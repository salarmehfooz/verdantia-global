import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Target, Globe, Zap, ArrowRight } from "lucide-react";

export default function About() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-linear-to-br from-[#e8f5ee] to-[#dceef7] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={revealVariants}
            className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4"
          >
            About Verdantia Global
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={revealVariants}
            className="font-serif text-4xl md:text-6xl font-light text-ink max-w-3xl mb-8 leading-tight tracking-tight"
          >
            We Exist at the Intersection of{" "}
            <em className="italic bg-linear-to-r from-forest-mid to-ocean-mid bg-clip-text text-transparent not-italic">
              Purpose and Performance
            </em>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={revealVariants}
            className="w-16 h-[3px] bg-linear-to-r from-forest-light to-ocean-light rounded-full mb-10"
          />

          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={revealVariants}
            className="text-xl text-muted font-light max-w-2xl leading-relaxed"
          >
            Founded by sustainability practitioners with decades of field
            experience, Verdantia Global was built on the conviction that
            sustainability is not a cost of doing business — it is the business
            of the future.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              custom={0}
              variants={revealVariants}
              className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4"
            >
              Our Story
            </motion.p>

            <motion.h2
              custom={1}
              variants={revealVariants}
              className="font-serif text-4xl font-medium text-ink mb-8 leading-tight"
            >
              Building Practical Sustainability Solutions for a Changing World
            </motion.h2>

            <motion.div
              custom={2}
              variants={revealVariants}
              className="w-16 h-[3px] bg-linear-to-r from-forest-light to-ocean-light rounded-full mb-8"
            />

            <motion.div
              custom={3}
              variants={revealVariants}
              className="space-y-6 text-slate/80 leading-relaxed font-light"
            >
              <p>
                Verdantia Global LLC is a sustainability and impact consultancy
                focused on helping businesses, institutions, communities, and
                development partners navigate environmental, social, and
                sustainability challenges through practical and
                implementation-focused solutions.
              </p>

              <p>
                With international positioning and strong local roots through
                Verdantia Pakistan, Verdantia works across sustainability
                advisory, ESG support, climate-smart agriculture, environmental
                compliance, carbon planning, community resilience, capacity
                building, and sustainability partnerships.
              </p>

              <p>
                We believe sustainability should be practical, inclusive, and
                capable of creating measurable value for both people and the
                environment.
              </p>
            </motion.div>

            <motion.div custom={4} variants={revealVariants} className="mt-12">
              <Link
                to="/consult"
                className="bg-forest text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-forest-mid transition-all inline-flex items-center gap-2"
              >
                Work With Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-linear-to-br from-[#eef7ff] via-[#e4f5f0] to-[#ddf0fb] rounded-3xl p-10 lg:p-16">
              {/* CEO IMAGE (ONLY ADDITION) */}
              <div className="flex flex-col items-center mb-10 text-center">
                <img
                  src="/ceo.png"
                  alt="CEO of Verdantia Global"
                  className="w-30 h-30 rounded-full object-cover object-[center_25%] border-4 border-white shadow-xl"
                />

                <p className="mt-4 font-serif text-lg font-semibold text-ink">
                  Fatima Bajwa
                </p>

                <p className="font-serif text-base text-ink">
                  Chief Executive Officer
                </p>

                <p className="text-xs text-muted tracking-wide">
                  Verdantia Global
                </p>
              </div>

              {/* QUOTE (UNCHANGED) */}
              <div className="font-serif text-2xl italic text-ocean border-l-4 border-ocean-mid pl-8 mb-12 leading-relaxed">
                "We believe sustainability should not exist only in strategy
                documents or reporting frameworks. It should translate into
                realistic action, measurable progress, and long-term value for
                organizations and communities alike."
              </div>

              {/* SYSTEMS THINKING (UNCHANGED) */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Target className="text-ocean-bright" />,
                    title: "Systems Thinking",
                    desc: "We see the whole picture — interconnected social and economic systems.",
                  },
                  {
                    icon: <Globe className="text-forest-light" />,
                    title: "Global Reach, Local Roots",
                    desc: "Deep local knowledge in every market we operate.",
                  },
                  {
                    icon: <Zap className="text-orange-400" />,
                    title: "Action-Oriented",
                    desc: "We produce strategies that get implemented — not reports for shelves.",
                  },
                ].map((val, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/60 transition-all hover:translate-x-2"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">
                        {val.title}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed mt-1">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision (UNCHANGED) */}
      <section className="py-24 px-6 bg-linear-to-br from-[#eef6ff] to-[#f5fbff]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl font-medium text-ink mb-6">
              Mission
            </h2>
            <div className="w-16 h-[3px] bg-linear-to-r from-forest-light to-ocean-light rounded-full mb-8" />
            <p className="text-lg text-slate/80 leading-relaxed font-light">
              To help organizations, businesses, and communities implement
              practical sustainability and impact solutions that support
              responsible growth, environmental resilience, and long-term social
              and economic value.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl font-medium text-ink mb-6">
              Vision
            </h2>
            <div className="w-16 h-[3px] bg-linear-to-r from-ocean-light to-ocean-mid rounded-full mb-8" />
            <p className="text-lg text-slate/80 leading-relaxed font-light">
              To become a trusted sustainability and impact partner connecting
              global expertise with practical implementation across emerging and
              developing markets.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments (UNCHANGED) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4">
            Our Commitments
          </p>

          <h2 className="font-serif text-4xl text-ink mb-16">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌱",
                title: "Planet-First",
                desc: "Our recommendations are grounded in ecological limits and principles.",
              },
              {
                icon: "♀️",
                title: "Gender Justice",
                desc: "Women's leadership is central to sustainable development.",
              },
              {
                icon: "🔍",
                title: "Transparency",
                desc: "We hold ourselves and clients to the highest honesty standards.",
              },
              {
                icon: "🤝",
                title: "Co-Creation",
                desc: "Strategies are built with communities, not delivered to them.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-sky/20 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-6">{v.icon}</div>
                <h4 className="font-bold text-ink mb-3">{v.title}</h4>
                <p className="text-sm text-muted leading-relaxed font-light">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
