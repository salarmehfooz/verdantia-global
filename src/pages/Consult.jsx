import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Globe, CheckCircle2 } from "lucide-react";

export default function Consult() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-linear-to-br from-[#e8f5ee] to-[#dceef7] py-24 px-6">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4"
          >
            Consult Now
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-light text-ink mb-8 leading-tight tracking-tight"
          >
            Let’s Explore Opportunities Together
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
            Fill in the form and one of our advisors will be in touch within 48
            hours to schedule your complimentary discovery session.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-sky/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-ocean/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-forest-light via-ocean-bright to-ocean-light" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-3xl font-medium mb-2">
                  Start Your Consultation
                </h2>
                <p className="text-sm text-muted mb-8 leading-relaxed">
                  Tell us about your organisation and sustainability goals.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light focus:ring-4 focus:ring-ocean-light/10 transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light focus:ring-4 focus:ring-ocean-light/10 transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light focus:ring-4 focus:ring-ocean-light/10 transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                    Organisation Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light focus:ring-4 focus:ring-ocean-light/10 transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                      Country
                    </label>
                    <select className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light transition-all appearance-none cursor-pointer">
                      <option value="">Select country</option>
                      <option>Pakistan</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                      Organisation Size
                    </label>
                    <select className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light transition-all appearance-none cursor-pointer">
                      <option value="">Select size</option>
                      <option>1–10 employees</option>
                      <option>11–250 employees</option>
                      <option>250+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                    Service Interest
                  </label>
                  <select className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light transition-all appearance-none cursor-pointer">
                    <option value="">What are you looking for?</option>
                    <option>Consulting</option>
                    <option>Reporting</option>
                    <option>Climate Strategy</option>
                    <option>Collaboration & Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate uppercase tracking-wider">
                    Your Goals
                  </label>
                  <textarea
                    className="w-full bg-white border border-sky/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ocean-light focus:ring-4 focus:ring-ocean-light/10 transition-all min-h-[120px] resize-none"
                    placeholder="Briefly describe your sustainability journey..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-forest to-ocean-mid text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-ocean/20 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Submit Consultation Request →
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <div className="w-20 h-20 bg-mint rounded-full flex items-center justify-center mx-auto mb-8 text-forest">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="font-serif text-3xl font-medium mb-4">
                  Request Received!
                </h2>
                <p className="text-muted leading-relaxed">
                  Thank you for reaching out. One of our senior advisors will
                  contact you via email within 48 hours to schedule your free
                  discovery call.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-forest font-bold underline hover:text-ocean transition-colors"
                >
                  Back to Form
                </button>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <h2 className="font-serif text-4xl font-medium mb-6 leading-tight">
              What Happens Next?
            </h2>
            <p className="text-muted leading-relaxed text-lg font-light mb-12">
              We've helped partners take their first — and their boldest — steps
              in sustainability.
            </p>

            <div className="space-y-0 border-y border-sky/20">
              {[
                {
                  n: 1,
                  t: "Discovery Call (Free)",
                  d: "A 45-minute session with one of our senior advisors to understand your context.",
                },
                {
                  n: 2,
                  t: "Tailored Proposal",
                  d: "We design a bespoke scope of work that matches your budget and priorities.",
                },
                {
                  n: 3,
                  t: "Engaged Delivery",
                  d: "Our team works closely with yours to deliver outcomes that last.",
                },
                {
                  n: 4,
                  t: "Ongoing Support",
                  d: "Post-engagement, we offer retainer packages so your journey never stalls.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group flex gap-6 py-6 border-b border-sky/10 last:border-0 hover:pl-2 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-mint to-sky flex items-center justify-center shrink-0 font-bold text-ocean font-mono text-sm group-hover:from-ocean group-hover:to-ocean-bright group-hover:text-white transition-all transform group-hover:scale-110">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-ink group-hover:text-ocean transition-colors">
                      {step.t}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed mt-1">
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-sky/20 flex flex-col gap-4">
              <p className="text-[11px] font-bold text-slate uppercase tracking-wider mb-2">
                Prefer to Reach Us Directly?
              </p>
              <div className="flex items-center gap-4 text-ocean">
                <Mail size={18} />{" "}
                <a
                  href="mailto:hello@verdantiaglobal.com"
                  className="text-sm font-medium hover:underline"
                >
                  info@verdantiaglobal.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-ocean">
                <Phone size={18} />{" "}
                <a
                  href="tel:+447700000000"
                  className="text-sm font-medium hover:underline"
                >
                  +1 425 496 9279
                </a>
              </div>
              <div className="flex items-center gap-4 text-ocean">
                <Globe size={18} />{" "}
                <a href="#" className="text-sm font-medium hover:underline">
                  linkedin.com/company/verdantia-global
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
