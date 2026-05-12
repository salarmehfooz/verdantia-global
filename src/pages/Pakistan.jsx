import { motion } from "motion/react";

export default function VerdantiaPakistan() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div>
      {/* HERO */}
      <section className="bg-linear-to-br from-[#e8f5ee] to-[#dceef7] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={revealVariants}
            className="text-[11px] font-bold text-forest-light uppercase tracking-widest mb-4"
          >
            Verdantia Pakistan
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={revealVariants}
            className="font-serif text-4xl md:text-6xl font-light text-ink max-w-3xl mx-auto mb-8 leading-tight tracking-tight"
          >
            Driving{" "}
            <em className="italic bg-linear-to-r from-forest-mid to-ocean-mid bg-clip-text text-transparent not-italic">
              Sustainable Transformation
            </em>{" "}
            Across Pakistan
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={revealVariants}
            className="w-16 h-[3px] mx-auto bg-linear-to-r from-forest-light to-ocean-light rounded-full mb-10"
          />

          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={revealVariants}
            className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed"
          >
            Verdantia Pakistan is the local arm of Verdantia Global, focused on
            delivering practical sustainability and climate resilience solutions
            tailored for Pakistan.
          </motion.p>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-32 px-6 bg-linear-to-br from-[#f5fbff] to-[#eef6ff]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-ink mb-6">
              Coming Soon
            </h2>

            <div className="w-20 h-[3px] mx-auto bg-linear-to-r from-forest-light to-ocean-light rounded-full mb-8" />

            <p className="text-lg text-muted font-light leading-relaxed max-w-xl mx-auto">
              We are building something impactful for Pakistan. This section
              will soon showcase our on-ground sustainability programs,
              partnerships, and initiatives.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
