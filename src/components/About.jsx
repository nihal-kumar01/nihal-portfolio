import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { about } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 },
  }),
};

/* ── Decorative avatar placeholder ── */
function AvatarCard() {
  return (
    <div className="relative flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0">
      {/* Glow rings */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 blur-2xl" />

      {/* Card */}
      <div className="relative grad-border rounded-3xl dark:bg-white/5 bg-white overflow-hidden aspect-[4/5] flex flex-col items-center justify-center p-8 shadow-xl">
        {/* Initials avatar */}
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-6"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)' }}
        >
          NK
        </div>

        <h3 className="font-heading font-bold text-xl dark:text-white text-gray-900">
          Nihal Kumar
        </h3>
        <p className="text-sm dark:text-white/50 text-gray-500 mt-1">Full Stack Developer</p>

        {/* Status badge */}
        <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full dark:bg-emerald-500/10 bg-emerald-50 border dark:border-emerald-500/20 border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-500 font-medium">Available for hire</span>
        </div>

        {/* Decorative dots grid */}
        <div
          className="absolute bottom-6 right-6 grid grid-cols-5 gap-1.5 opacity-20"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full dark:bg-white bg-gray-400" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding dark:bg-[#07070f] bg-gray-50 relative overflow-hidden"
    >
      {/* Subtle background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="text-sm font-medium tracking-widest uppercase dark:text-violet-400 text-violet-600 mb-3">
            Get to know me
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl dark:text-white text-gray-900">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <AvatarCard />
          </motion.div>

          {/* Text content */}
          <div className="space-y-6">
            {about.story.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="dark:text-white/60 text-gray-600 leading-relaxed text-base"
              >
                {para}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {about.stats.map(({ value, label }, i) => (
                <div
                  key={i}
                  className="grad-border rounded-2xl p-4 text-center dark:bg-white/5 bg-white shadow-sm"
                >
                  <p className="gradient-text font-heading font-extrabold text-2xl">
                    {value}
                  </p>
                  <p className="text-xs dark:text-white/40 text-gray-500 mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              custom={6}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 px-6 py-3 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
