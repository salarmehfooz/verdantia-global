import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TEAM = [
  {
    name: "Dr. Nadia Rahman",
    role: "Founder & CEO",
    bio: "Former UNDP climate advisor with 18 years across South Asia and MENA. Leads strategic direction.",
    initials: "NR",
    color: "from-[#c8e6d4] to-[#a8d8bf]",
    iconBg: "bg-forest",
    tags: ["Climate Policy", "UNDP", "Net-Zero"],
  },
  {
    name: "James Mbeki",
    role: "Managing Director, ESG",
    bio: "Chartered accountant and reporting specialist helping SMEs navigate GRI, CSRD, and TCFD.",
    initials: "JM",
    color: "from-[#aed6f1] to-[#85c1e9]",
    iconBg: "bg-ocean",
    tags: ["GRI", "CSRD", "ESG Finance"],
  },
  {
    name: "Sana Khalid",
    role: "Director, Gender Equity",
    bio: "Development economist. Leads our gender-lens investment and supply chain empowerment programmes.",
    initials: "SK",
    color: "from-[#fde8d8] to-[#f5c6a8]",
    iconBg: "bg-gold",
    tags: ["WEPs", "Gender Finance", "SDG 5"],
  },
  {
    name: "Dr. Luis Paredes",
    role: "Director, Climate Science",
    bio: "PhD from ETH Zürich. Specialises in Scope 3 emissions modelling and SBTi pathway design.",
    initials: "LP",
    color: "from-[#e8e0f4] to-[#d0c3e8]",
    iconBg: "bg-purple-600",
    tags: ["SBTi", "Scope 3", "Climate Risk"],
  },
  {
    name: "Dr. Amina Toure",
    role: "Head of Health impact",
    bio: "Public health physician. Leads our health sustainability practice and community wellbeing frameworks.",
    initials: "AT",
    color: "from-[#d5ece0] to-[#b5dcc6]",
    iconBg: "bg-green-600",
    tags: ["Public Health", "OHSE", "SDG 3"],
  },
  {
    name: "Wei Chen",
    role: "Director, Engagement",
    bio: "Materiality expert. Facilitates stakeholder engagement for complex multi-country projects.",
    initials: "WC",
    color: "from-[#dbeeff] to-[#b3d7f5]",
    iconBg: "bg-blue-800",
    tags: ["Materiality", "Civil Society", "Asia-Pacific"],
  },
];

export default function Team() {
  return (
    <div>
      <section className="bg-linear-to-br from-[#e8f5ee] to-[#dceef7] py-24 px-6">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4"
          >
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-light text-ink mb-8 leading-tight tracking-tight"
          >
            Practitioners Who
            <br />
            Have Done the Work
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
            Our team brings together experts from climate science, international
            development, gender studies, and public health.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-10">
            Leadership
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-sky/20 rounded-[32px] overflow-hidden hover:border-ocean-light hover:-translate-y-2 hover:shadow-2xl hover:shadow-ocean/10 transition-all duration-300"
              >
                <div
                  className={`h-[240px] relative overflow-hidden bg-linear-to-br ${member.color} flex items-center justify-center`}
                >
                  <div
                    className={`w-28 h-28 rounded-full ${member.iconBg} text-white font-serif text-3xl font-bold flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110`}
                  >
                    {member.initials}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-ocean/10 to-transparent pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-ink mb-1">
                    {member.name}
                  </h3>
                  <div className="text-[10px] font-bold text-forest-light uppercase tracking-wider mb-4">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted font-light leading-relaxed mb-6 h-[80px] overflow-hidden">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1 rounded-full bg-mint/50 text-forest font-bold hover:bg-forest hover:text-white transition-colors cursor-default capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-10 md:p-16 bg-linear-to-br from-mint/10 to-sky/5 rounded-3xl text-center border border-sky/10">
            <p className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4">
              Join Our Team
            </p>
            <h3 className="font-serif text-2xl font-medium text-ink mb-4">
              We're Always Looking for Exceptional People
            </h3>
            <p className="text-muted text-lg font-light max-w-lg mx-auto mb-10 leading-relaxed">
              If you are passionate about sustainability and want to work on
              meaningful challenges at global scale, we'd love to hear from you.
            </p>
            <Link
              to="/consult"
              className="bg-forest text-white px-10 py-3.5 rounded-md text-sm font-semibold hover:bg-forest-mid transition-all inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
