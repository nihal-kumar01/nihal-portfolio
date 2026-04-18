import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import { timeline } from '../data/portfolioData';

const typeIcon = {
  experience: HiBriefcase,
  education: HiAcademicCap,
};

/* ── Single timeline entry ──────────────────────────────── */
function TimelineItem({ entry, idx, inView }) {
  const isLeft = idx % 2 === 0;
  const Icon = typeIcon[entry.type] || HiBriefcase;

  return (
    <div
      className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-6 mb-8 last:mb-0`}
    >
      {/* Left side — shows content on even idx */}
      <div
        className={`hidden md:flex ${
          isLeft ? 'justify-end' : 'justify-start'
        }`}
      >
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            className={`max-w-sm w-full`}
          >
            <EntryCard entry={entry} />
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: idx * 0.12 + 0.1 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${entry.color} flex-shrink-0`}
        >
          <Icon size={16} />
        </motion.div>
        {/* Line connector */}
        {idx < timeline.length - 1 && (
          <motion.div
            className="w-px flex-1 min-h-[2rem] dark:bg-white/10 bg-gray-200 mt-2"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.12 + 0.2 }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* Right side */}
      <div className={`hidden md:flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: idx * 0.12 }}
            className="max-w-sm w-full"
          >
            <EntryCard entry={entry} />
          </motion.div>
        )}
      </div>

      {/* Mobile (single column) */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
      >
        <div className="flex gap-4">
          {/* Icon */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${entry.color} flex-shrink-0 mt-1`}
          >
            <Icon size={16} />
          </div>
          <EntryCard entry={entry} />
        </div>
        {/* Connector line */}
        {idx < timeline.length - 1 && (
          <div className="ml-5 mt-1 mb-4 w-px h-6 dark:bg-white/10 bg-gray-200" />
        )}
      </motion.div>
    </div>
  );
}

/* ── Card content ───────────────────────────────────────── */
function EntryCard({ entry }) {
  return (
    <div className="grad-border rounded-2xl p-5 dark:bg-white/5 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-heading font-semibold text-base dark:text-white text-gray-900 leading-snug">
          {entry.title}
        </h3>
      </div>
      <p
        className={`text-xs font-semibold gradient-text mb-1`}
      >
        {entry.org}
      </p>
      <p className="text-xs dark:text-white/40 text-gray-400 mb-3">{entry.duration}</p>
      <p className="text-sm dark:text-white/55 text-gray-600 leading-relaxed mb-4">
        {entry.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-2 py-0.5 rounded-full dark:bg-white/10 bg-gray-100 dark:text-white/60 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding dark:bg-[#0a0a18] bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase dark:text-violet-400 text-violet-600 mb-3">
            My journey
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl dark:text-white text-gray-900">
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px dark:bg-white/10 bg-gray-200 -translate-x-1/2" />

          {timeline.map((entry, idx) => (
            <TimelineItem key={idx} entry={entry} idx={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
