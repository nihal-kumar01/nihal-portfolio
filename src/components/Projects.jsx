import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import { projects, projectCategories } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
};

/* ── Tech badge ─────────────────────────────────────────── */
function TechBadge({ label }) {
  return (
    <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-medium dark:bg-white/10 bg-gray-100 dark:text-white/60 text-gray-600">
      {label}
    </span>
  );
}

/* ── Project card ───────────────────────────────────────── */
function ProjectCard({ project, idx, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={idx}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative grad-border rounded-2xl overflow-hidden dark:bg-white/5 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Gradient banner */}
      <div
        className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
      />

      {/* Card body */}
      <div className="p-6">
        {/* Category badge + featured */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-semibold tracking-wider uppercase dark:text-white/30 text-gray-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-violet-400 border border-violet-500/20">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-heading font-bold text-xl dark:text-white text-gray-900 mb-2 group-hover:gradient-text transition-all duration-200">
          {project.title}
        </h3>

        <p className="text-sm dark:text-white/50 text-gray-500 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t dark:border-white/10 border-gray-100">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center gap-1.5 text-xs font-medium dark:text-white/50 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors"
          >
            <SiGithub size={14} />
            Source code
          </motion.a>

          <span className="dark:text-white/20 text-gray-300">·</span>

          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center gap-1.5 text-xs font-medium dark:text-violet-400 text-violet-600 dark:hover:text-violet-300 hover:text-violet-700 transition-colors"
          >
            <HiExternalLink size={14} />
            Live demo
          </motion.a>
        </div>
      </div>

      {/* Hover glow overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className={`absolute inset-0 pointer-events-none rounded-2xl opacity-10 bg-gradient-to-br ${project.gradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding dark:bg-[#07070f] bg-gray-50 relative overflow-hidden"
    >
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase dark:text-violet-400 text-violet-600 mb-3">
            What I've built
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl dark:text-white text-gray-900">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-sm dark:text-white/40 text-gray-500 max-w-md mx-auto">
            A selection of side projects, hackathon entries, and real-world work.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {projectCategories.map((cat) => {
            const active = cat === filter;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-white'
                    : 'dark:bg-white/5 bg-gray-100 dark:text-white/50 text-gray-600 dark:hover:bg-white/10 hover:bg-gray-200'
                }`}
                style={
                  active
                    ? { background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }
                    : {}
                }
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={i}
                inView={inView}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/nihal-kumar01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium dark:text-white/50 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:bg-white/5 bg-gray-100 dark:hover:bg-white/10 hover:bg-gray-200 transition-all duration-200 grad-border"
          >
            <SiGithub size={15} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
