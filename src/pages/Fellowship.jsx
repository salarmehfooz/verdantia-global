import { useState } from "react";

const fellowshipTracks = [
  "Climate & Policy Research",
  "ESG & Sustainability Reporting",
  "Climate-Smart Agriculture & Field Research",
  "Gender, Inclusion & Social Impact",
  "Communications & Knowledge Management",
];

const trackCards = [
  {
    number: "01",
    title: "Climate & Policy Research",
    desc: "NDC reviews, adaptation planning, UNFCCC analysis, climate governance research, and policy development support.",
    label:
      "Environmental Sciences · Development Studies · Political Science · IR",
  },
  {
    number: "02",
    title: "ESG & Sustainability Reporting",
    desc: "GHG inventories, Scope 1/2/3 accounting, GRI reporting, TCFD alignment, and sustainability disclosures.",
    label: "Business · Accounting · Economics · Engineering",
  },
  {
    number: "03",
    title: "Climate-Smart Agriculture & Field Research",
    desc: "Vulnerability mapping, drought resilience, GLOF research, and field data collection initiatives.",
    label:
      "Agriculture · Environmental Sciences · Geography · Social Sciences",
  },
  {
    number: "04",
    title: "Gender, Inclusion & Social Impact",
    desc: "Gender-responsive adaptation, inclusive development, social safeguards, and PWD-sensitive design.",
    label:
      "Gender Studies · Social Work · Development Studies · Public Policy",
  },
  {
    number: "05",
    title: "Communications & Knowledge Management",
    desc: "Policy briefs, sustainability content, knowledge products, training materials, and strategic communication.",
    label: "Communications · Journalism · English · Writing",
  },
];

const whyCards = [
  {
    number: "01",
    emoji: "🇺🇸",
    title: "US Firm Experience on Your CV",
    body: "Gain exposure to international sustainability consulting standards, ESG frameworks, and advisory workflows used by global firms.",
  },
  {
    number: "02",
    emoji: "📁",
    title: "A Real Portfolio, Not Limited to Theory",
    body: "Work on actual deliverables including GHG inventories, ESG briefs, climate risk assessments, and policy research outputs.",
  },
  {
    number: "03",
    emoji: "🌐",
    title: "A Network That Opens Doors",
    body: "Access mentorship from leadership, connect with development professionals, and build relationships across Pakistan, the Gulf, and the US.",
  },
];

const benefits = [
  {
    title: "Official Verdantia Fellows Certificate",
    desc: "Issued by Verdantia Global LLC (Dallas, Texas)",
  },
  {
    title: "Real project deliverable in your portfolio",
    desc: "Demonstrate practical sustainability consulting experience",
  },
  {
    title: "Letter of recommendation from the CEO",
    desc: "For exceptional fellows and contributors",
  },

  {
    title: "Access to Verdantia's professional network",
    desc: "Connections across Pakistan, the Gulf, and the US",
  },
  {
    title: "Priority consideration for paid roles",
    desc: "Future consultancy and project opportunities",
  },
  {
    title: "Hands-on exposure to global frameworks",
    desc: "Including GRI, TCFD, SBTi, and UNFCCC systems",
  },
];

export default function FellowsPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    degreeYear: "",
    email: "",
    track: "",
    why: "",
    linkedin: "",
  });

  // GOOGLE APPS SCRIPT URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxFmFKo_VSwWPF1vXwFumWls5HojXkNoO9hHwl_HWwgVpZyOkXhgbY8nG5dPpUKo3LifA/exec";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "fellows",
          ...formData,
        }),
      });

      setSuccess(true);

      setFormData({
        fullName: "",
        university: "",
        degreeYear: "",
        email: "",
        track: "",
        why: "",
        linkedin: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f0fafa] text-[#10343c] overflow-x-hidden">
      {/* GOOGLE FONTS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;700&display=swap');

          *{
            box-sizing:border-box;
          }

          html{
            scroll-behavior:smooth;
          }

          body{
            font-family:'DM Sans', sans-serif;
            background:#f0fafa;
          }

          .font-serif{
            font-family:'Cormorant Garamond', serif;
          }

          @keyframes fadeUp{
            from{
              opacity:0;
              transform:translateY(30px);
            }
            to{
              opacity:1;
              transform:translateY(0);
            }
          }

          .fade-up{
            opacity:0;
            animation:fadeUp 1s forwards;
          }

          .delay-1{
            animation-delay:.2s;
          }

          .delay-2{
            animation-delay:.45s;
          }

          .delay-3{
            animation-delay:.7s;
          }
        `}
      </style>

      {/* HERO */}
      <section className="relative min-h-screen bg-[#0f4a55] overflow-hidden px-6 pt-32 pb-24 flex items-center">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full border border-white/10" />

        <div className="absolute bottom-[-220px] left-[-120px] w-[700px] h-[700px] rounded-full border border-white/5" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <p className="fade-up uppercase tracking-[0.28em] text-[12px] text-[#4dcfc4] mb-8">
              Verdantia Fellows · University Engagement Programme
            </p>

            <h1 className="fade-up delay-1 font-serif italic text-white text-6xl md:text-8xl leading-[0.95] mb-8">
              Don&apos;t just study sustainability. Do it.
            </h1>

            <p className="fade-up delay-2 text-white/75 text-xl leading-relaxed max-w-3xl mb-12">
              Work on real advisory projects with a US-registered consultancy.
              Build a portfolio that stands out.
            </p>

            <div className="fade-up delay-3 flex flex-wrap gap-5">
              <a
                href="#apply"
                className="bg-[#4dcfc4] text-[#0f4a55] px-8 py-4 rounded-full font-medium hover:bg-white transition-all"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#fafaf7] py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-serif italic text-5xl leading-tight text-[#0f4a55] mb-10">
              “Pakistan needs sustainability practitioners who can turn climate
              theory into policy, practice, and measurable impact.”
            </h2>

            <p className="text-lg leading-relaxed text-[#45636a] mb-6">
              Verdantia Fellows is a practical, project-based fellowship
              designed for ambitious university students who want meaningful
              exposure to sustainability consulting and ESG advisory.
            </p>

            <div className="inline-flex items-center gap-3 bg-[#0f4a55] text-white px-6 py-3 rounded-full text-sm tracking-wide">
              🇺🇸 US-Based Firm · Real Project Experience
            </div>
          </div>

          <div className="border-t border-[#dce7e7]">
            {[
              {
                label: "The Gap",
                body: "Universities teach sustainability theory. Employers look for implementation experience.",
              },
              {
                label: "The Credential",
                body: "Verdantia Fellows gives students credible consultancy exposure.",
              },
              {
                label: "The Network",
                body: "Access mentors, climate professionals, and future opportunities.",
              },
            ].map((item, i) => (
              <div key={i} className="py-10 border-b border-[#dce7e7]">
                <p className="uppercase tracking-[0.25em] text-[#1a6b7a] text-xs font-bold mb-5">
                  {item.label}
                </p>

                <p className="text-lg leading-relaxed text-[#3c5b61]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CARDS */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-[2px] bg-[#dce7e7]">
          {whyCards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-12 relative hover:bg-[#f6ffff] transition-all"
            >
              <div className="absolute top-8 right-8 text-7xl font-serif text-[#0f4a55]/8">
                {card.number}
              </div>

              <div className="text-4xl mb-8">{card.emoji}</div>

              <h3 className="text-2xl font-bold text-[#0f4a55] mb-5">
                {card.title}
              </h3>

              <p className="text-[#4e6a70] leading-relaxed text-lg">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRACKS */}
      <section className="bg-[#0f4a55] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-[#4dcfc4] text-xs mb-5">
              Fellowship Tracks
            </p>

            <h2 className="font-serif text-6xl italic text-white">
              Find Your Track
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-[2px] bg-white/10">
            {trackCards.map((track, i) => (
              <div
                key={i}
                className="bg-[#123f48] p-8 hover:bg-[#174f5b] transition-all"
              >
                <div className="text-5xl font-serif text-white/10 mb-10">
                  {track.number}
                </div>

                <h3 className="text-white text-2xl font-bold mb-5">
                  {track.title}
                </h3>

                <p className="text-white/70 leading-relaxed mb-8 text-sm">
                  {track.desc}
                </p>

                <div className="text-[#4dcfc4] uppercase tracking-[0.18em] text-[10px] leading-relaxed">
                  {track.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WALK AWAY + HOW IT WORKS */}
<section className="bg-[#fafaf7] py-32 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">

    {/* LEFT: WHAT YOU WALK AWAY WITH */}
    <div>
      <p className="uppercase tracking-[0.25em] text-[#1a6b7a] text-xs mb-4">
        Fellowship Benefits
      </p>

      <h2 className="font-serif italic text-5xl text-[#0f4a55] mb-12">
        What You Walk Away With
      </h2>

      <div className="space-y-6">
        {benefits.map((item, i) => (
          <div key={i} className="border-b border-[#dce7e7] pb-5">
            <h3 className="text-lg font-semibold text-[#0f4a55] mb-1">
              {item.title}
            </h3>
            <p className="text-[#567176] text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: HOW IT WORKS */}
    <div>
      <p className="uppercase tracking-[0.25em] text-[#1a6b7a] text-xs mb-4">
        Programme Structure
      </p>

      <h2 className="font-serif italic text-5xl text-[#0f4a55] mb-12">
        How It Works
      </h2>

      <div className="border-t border-[#dce7e7]">

        {[
          { label: "Duration", value: "3 months (renewable based on performance)" },
          { label: "Commitment", value: "8–10 hours per week" },
          { label: "Format", value: "Hybrid (remote + occasional in-person sessions)" },
          { label: "Intake", value: "Rolling admissions (reviewed monthly)" },
          { label: "Stipend", value: "Unpaid — experience, mentorship, and network provided" },
          { label: "Eligibility", value: "Current university students in relevant disciplines" },
          { label: "Contact", value: "Reach us at fellows@verdantiaglobal.com . We respond to all enquiries within 3 working days." },
        ].map((item, i) => (
          <div key={i} className="py-6 border-b border-[#dce7e7]">
            <p className="uppercase tracking-[0.2em] text-[#1a6b7a] text-xs mb-2">
              {item.label}
            </p>
            <p className="text-[#3c5b61] text-lg">
              {item.value}
            </p>
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

      {/* APPLICATION */}
      <section id="apply" className="bg-[#f0fafa] py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          {/* FORM */}
          <div>
            <p className="uppercase tracking-[0.25em] text-[#1a6b7a] text-xs mb-4">
              Apply Now
            </p>

            <h2 className="font-serif italic text-6xl text-[#0f4a55] mb-12">
              Fellowship Application
            </h2>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-[#d6e2e2] bg-white px-5 py-4 outline-none focus:border-[#4dcfc4]"
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="university"
                    required
                    placeholder="University"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full border border-[#d6e2e2] bg-white px-5 py-4 outline-none focus:border-[#4dcfc4]"
                  />

                  <input
                    type="text"
                    name="degreeYear"
                    required
                    placeholder="Degree & Year"
                    value={formData.degreeYear}
                    onChange={handleChange}
                    className="w-full border border-[#d6e2e2] bg-white px-5 py-4 outline-none focus:border-[#4dcfc4]"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#d6e2e2] bg-white px-5 py-4 outline-none focus:border-[#4dcfc4]"
                />

                <select
                  name="track"
                  required
                  value={formData.track}
                  onChange={handleChange}
                  className="w-full border border-[#d6e2e2] bg-white px-5 py-4 outline-none focus:border-[#4dcfc4]"
                >
                  <option value="">Select Fellowship Track</option>

                  {fellowshipTracks.map((track, i) => (
                    <option key={i} value={track}>
                      {track}
                    </option>
                  ))}
                </select>

                <textarea
                  rows={7}
                  name="why"
                  required
                  value={formData.why}
                  onChange={handleChange}
                  placeholder="Why do you want to be a Verdantia Fellow?"
                  className="w-full border border-[#d6e2e2] bg-white px-5 py-4 outline-none focus:border-[#4dcfc4] resize-none"
                />

                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn Profile (optional)"
                  className="w-full border border-[#d6e2e2] bg-white px-5 py-4 outline-none focus:border-[#4dcfc4]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0f4a55] text-white py-5 hover:bg-[#123f48] transition-all text-lg disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application →"}
                </button>

                <p className="text-sm text-[#688287]">
                  Applications reviewed within 10 working days.
                </p>
              </form>
            ) : (
              <div className="bg-white border border-[#d6e2e2] p-12 text-center">
                <h3 className="font-serif text-4xl text-[#0f4a55] mb-4">
                  Application Submitted
                </h3>

                <p className="text-[#567176] text-lg">
                  Thank you for applying to Verdantia Fellows.
                </p>
              </div>
            )}
          </div>

          {/* ELIGIBILITY */}
          <div>
            <p className="uppercase tracking-[0.25em] text-[#1a6b7a] text-xs mb-4">
              Who Should Apply
            </p>

            <h2 className="font-serif italic text-6xl text-[#0f4a55] mb-12">
              Eligibility
            </h2>

            <div className="space-y-6 text-lg text-[#567176] leading-relaxed">
              {[
                "Currently enrolled undergraduate or postgraduate at a Pakistani university",
                "Relevant field: Environmental Sciences, Business, Engineering, Social Sciences, Development Studies, Economics, Agriculture, Gender Studies, Communications",
                "Can commit 8–10 hours/week for 3 months",
                "Strong written English",
                "Self-directed and motivated",
                "Genuinely interested in sustainability/climate/ESG as a career",
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[#1a6b7a]">—</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-l-4 border-[#4dcfc4] bg-white p-8">
              <h4 className="text-[#0f4a55] font-bold mb-2">Questions?</h4>

              <p className="text-[#567176]">
                Reach us at fellows@verdantiaglobal.com . We respond to all enquiries within 3 working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO QUOTE */}
      <section className="bg-[#1a6b7a] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif italic text-white text-5xl md:text-6xl leading-tight mb-10">
            “Pakistan needs a new generation of sustainability practitioners
            who don't just understand climate theory — but know how to turn it
            into policy, practice, and measurable impact.”
          </h2>

          <p className="text-[#c7f5ef] tracking-wide">
            Fatima Bajwa — CEO, Verdantia Global
          </p>
        </div>
      </section>
    </div>
  );
}