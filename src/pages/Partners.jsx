import { motion } from "motion/react";
import { Link } from "react-router-dom";

/* -----------------------------
   DATA (emoji OR image support)
------------------------------*/
const PARTNER_GROUPS = [
  {
    category: "Ecosystem & Professional Networks",
    partners: [
      {
        logo: { type: "image", src: "/logos/UNenvoirnment.png" },
        name: "UN Environment Programme",
        desc: "Collaborative partner on climate reporting standards and SME sustainability toolkits.",
        type: "UN Agency",
      },
      {
        logo: { type: "image", src: "/logos/Texas.png" },
        name: "Texas Sustainable Business Network",
        desc: "Engaed in joint initiatives to support local businesses.",
        type: "Business Network",
      },
      {
        logo: { type: "emoji", value: "🍃" },
        name: "The Sustainability Network",
        desc: "Technical partner supporting just transition frameworks and green skills development.",
        type: "Business Network",
      },
      {
        logo: { type: "emoji", value: "🌐" },
        name: "UN Global Compact Network",
        desc: "Service provider supporting businesses in their UN Global Compact Communication on Progress.",
        type: "UN Initiative",
      },
    ],
  },
];

/* -----------------------------
   LOGO RENDERER COMPONENT
------------------------------*/
function PartnerLogo({ logo, name }) {
  if (logo?.type === "image") {
    return (
      <img
        src={logo.src}
        alt={name}
        className="w-full h-full object-contain p-2"
        loading="lazy"
      />
    );
  }

  return <span className="text-3xl">{logo?.value}</span>;
}

/* -----------------------------
   MAIN COMPONENT
------------------------------*/
export default function Partners() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-linear-to-br from-[#e8f5ee] to-[#dceef7] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4"
            >
              Collaboration & Partnerships
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-6xl font-light text-ink mb-8 leading-tight tracking-tight"
            >
              A Global Network for
              <br />
              Transformative Change
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="w-16 h-[3px] bg-linear-to-r from-forest-light to-ocean-light rounded-full mb-10 origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-justify text-muted font-light leading-relaxed max-w-xl"
            >
              Verdantia Global works alongside a curated network of multilateral
              organizations, NGOs, consultants, institutions, sustainability
              stakeholders and mission-aligned businesses.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/40">
              <img
                src="/texas.png"
                alt="Global sustainability partnerships"
                className="w-full h-[620px]  object-cover bg-sky-pale"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {PARTNER_GROUPS.map((group, groupIdx) => (
            <div key={groupIdx}>
              <p className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-10">
                {group.category}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.partners.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 border border-sky/20 rounded-2xl bg-white text-center hover:border-ocean-light hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    {/* LOGO */}
                    <div className="w-16 h-16 rounded-2xl bg-sky-pale flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:-rotate-6 transition-transform overflow-hidden">
                      <PartnerLogo logo={p.logo} name={p.name} />
                    </div>

                    {/* TEXT */}
                    <h4 className="font-bold text-ink mb-2 text-sm">
                      {p.name}
                    </h4>

                    <p className="text-[11px] text-muted leading-relaxed mb-4">
                      {p.desc}
                    </p>

                    <span className="inline-block text-[9px] px-2 py-0.5 rounded-md bg-sky-pale text-ocean-mid font-bold uppercase tracking-wider border border-ocean-mid/10">
                      {p.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 lg:p-20 bg-linear-to-br from-ocean to-forest rounded-3xl text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-x-0 bottom-0 h-full bg-radial-gradient from-ocean/20 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-serif text-3xl font-medium mb-6">
                Become a Partner
              </h3>

              <p className="text-white/70 text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed">
                We are always open to new partnerships with organisations that
                share our values.
              </p>

              <Link
                to="/consult"
                className="bg-white text-ocean px-10 py-4 rounded-md text-sm font-semibold shadow-2xl hover:bg-mint transition-all inline-block"
              >
                Explore Partnership →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
