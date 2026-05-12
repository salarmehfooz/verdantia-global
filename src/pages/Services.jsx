import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Climate Strategy & ESG Advisory",
    desc: "We supports organizations in integrating sustainability and ESG considerations into operations, planning, decision-making, and long-term growth strategies. We help businesses understand their climate footprint, set science-based targets, and develop credible net-zero transition pathways. Includes Scope 1, 2, and 3 emissions inventories.",
    tags: ["Net-Zero", "SBTi", "Carbon Inventory"],
  },
  {
    num: "02",
    title: "Climate Smart Agriculture",
    desc: "We supports climate-conscious and resilience-focused approaches to agriculture, livelihoods, and resource management. We work with stakeholders, communities, and partners to explore practical agricultural solutions that strengthen sustainability, environmental resilience, and long-term productivity.",
    tags: ["Net-Zero", "SBTi", "Carbon Inventory"],
  },
  {
    num: "03",
    title: "Sustainability Reporting for SMEs",
    desc: "We make sustainability reporting accessible. Our team guides small and medium enterprises through GRI Standards, TCFD disclosures, and SDG-aligned reporting — producing credible, investor-ready reports.",
    tags: ["GRI Standards", "TCFD", "CSRD Readiness"],
  },
  {
    num: "04",
    title: "Energy and Green Supply Chain Support",
    desc: "We help organisations transition to renewable energy sources and build resilient, low-carbon supply chains that align with global sustainability goals.",
    tags: ["Renewable Energy", "Supply Chain", "Carbon Footprint"],
  },

  {
    num: "05",
    title: "Capacity Building & Training",
    desc: "We designs and supports workshops, training sessions, and learning engagements focused on sustainability, ESG, climate awareness, environmental responsibility, and practical implementation.",
    tags: ["ESG Governance", "Training", "Board Advisory"],
  },
  {
    num: "06",
    title: "Stakeholder Engagement & Materiality",
    desc: "Meaningful sustainability starts with listening. We design and facilitate multi-stakeholder engagement processes using double materiality methodology to identify what matters most.",
    tags: ["Materiality", "Multi-Stakeholder", "Community"],
  },
  {
    num: "07",
    title: "Health, Wellbeing & Social Impact",
    desc: "From community health impact assessments to occupational health frameworks and broader access-to-health evaluations, we help organisations understand and improve their health-related impact across communities and workplaces.",
    tags: ["Health Impact", "SDG 3", "OHSE"],
  },
  {
    num: "08",
    title: "Women Empowerment and Inclusive Participation",
    desc: "We support women empowerment programmes, women-led participation, enterprise development, and ensure inclusive opportunity.",
    tags: ["Gender Equality", "SDG 5", "Preparedness"],
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-linear-to-br from-[#e8f5ee] to-[#dceef7] py-24 px-6">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-light text-ink mb-8 leading-tight tracking-tight"
          >
            End-to-End Sustainability
            <br />
            Advisory Services
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
            className="text-xl text-muted font-light leading-relaxed"
          >
            From project development to implementation; first-time
            sustainability reporters to organisations seeking to embed ESG
            across their entire value chain — we have a service for every stage
            of your journey.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-sky/20 border-l-[3px] border-l-transparent rounded-2xl p-8 md:p-12 bg-white hover:border-sky-pale hover:border-l-ocean-light hover:shadow-2xl hover:shadow-ocean/5 hover:translate-x-2 transition-all flex flex-col md:flex-row gap-8 md:items-start"
            >
              <div className="font-serif text-5xl font-light text-sky/40 group-hover:text-sage transition-colors shrink-0">
                {s.num}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-ink mb-4">{s.title}</h3>
                <p className="text-muted leading-relaxed font-light text-lg mb-8 max-w-3xl text-justify">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-3 py-1 rounded-full bg-linear-to-r from-mint/30 to-sky/40 text-ocean font-bold border border-ocean/10 uppercase tracking-wider group-hover:bg-ocean-mid group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-20 p-12 lg:p-20 bg-linear-to-br from-sky-pale to-mint/20 rounded-3xl text-center border border-sky/20">
          <p className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4">
            Tailored Solutions
          </p>
          <h3 className="font-serif text-3xl font-medium text-ink mb-6">
            Not Sure Where to Start?
          </h3>
          <p className="text-muted text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed">
            Book a free 45-minute discovery call. Our advisors will help you
            identify your priorities and design the right engagement.
          </p>
          <Link
            to="/consult"
            className="bg-linear-to-r from-forest to-ocean-mid text-white px-10 py-4 rounded-md text-sm font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            Book Free Discovery Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
