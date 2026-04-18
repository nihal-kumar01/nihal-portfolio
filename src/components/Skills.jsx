import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql,
  SiGit, SiDocker, SiFigma, SiLinux, SiFirebase,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { skillCategories } from '../data/portfolioData';

/* ── Icon map ───────────────────────────────────────────── */
const iconMap = {
  react:    { icon: SiReact,       color: '#61dafb' },
  js:       { icon: SiJavascript,  color: '#f7df1e' },
  ts:       { icon: SiTypescript,  color: '#3178c6' },
  tailwind: { icon: SiTailwindcss, color: '#38bdf8' },
  html:     { icon: SiHtml5,       color: '#e34f26' },
  next:     { icon: SiNextdotjs,   color: '#ffffff' },
  node:     { icon: SiNodedotjs,   color: '#8cc84b' },
  express:  { icon: SiExpress,     color: '#888888' },
  mongo:    { icon: SiMongodb,     color: '#47a248' },
  postgres: { icon: SiPostgresql,  color: '#336791' },
  api:      { icon: TbApi,         color: '#06b6d4' },
  graphql:  { icon: SiGraphql,     color: '#e10098' },
  git:      { icon: SiGit,         color: '#f05032' },
  docker:   { icon: SiDocker,      color: '#2496ed' },
  figma:    { icon: SiFigma,       color: '#f24e1e' },
  vscode:   { icon: VscCode,       color: '#007acc' },
  linux:    { icon: SiLinux,       color: '#fcc624' },
  firebase: { icon: SiFirebase,    color: '#ffca28' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.07 },
  }),
};

/* ── Animated progress bar ──────────────────────────────── */
function ProgressBar({ level, color, inView }) {
  return (
    <div className="h-1.5 rounded-full dark:bg-white/10 bg-gray-100 overflow-hidden mt-2">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color})` }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  );
}

/* ── Skill card ─────────────────────────────────────────── */
function SkillCard({ skill, gradColor, inView, idx }) {
  const entry = iconMap[skill.icon] || { icon: TbApi, color: '#8b5cf6' };
  const Icon = entry.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={idx}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -4, scale: 1.02 }}
      className="grad-border rounded-2xl p-4 dark:bg-white/5 bg-white shadow-sm cursor-default group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${entry.color}15` }}
        >
          <Icon size={18} style={{ color: entry.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium dark:text-white text-gray-800 truncate">
            {skill.name}
          </p>
          <p className="text-xs dark:text-white/40 text-gray-400">{skill.level}%</p>
        </div>
      </div>
      <ProgressBar level={skill.level} color={gradColor} inView={inView} />
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const tabs = skillCategories.map((c) => c.label);
  const cat = skillCategories[activeTab];

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding dark:bg-[#0a0a18] bg-white relative overflow-hidden"
    >
      {/* BG accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase dark:text-violet-400 text-violet-600 mb-3">
            What I work with
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl dark:text-white text-gray-900">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {tabs.map((tab, i) => {
            const active = i === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-white shadow-lg'
                    : 'dark:bg-white/5 bg-gray-100 dark:text-white/50 text-gray-600 dark:hover:bg-white/10 hover:bg-gray-200'
                }`}
                style={
                  active
                    ? { background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }
                    : {}
                }
              >
                {tab}
              </button>
            );
          })}
        </motion.div>

        {/* Category heading + gradient bar */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-1">
            <div
              className={`h-1 w-10 rounded-full bg-gradient-to-r ${cat.color}`}
            />
            <span className="text-sm font-semibold dark:text-white/60 text-gray-500">
              {cat.label}
            </span>
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={`grid-${activeTab}`}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {cat.skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              gradColor={`#8b5cf6, #3b82f6`}
              inView={inView}
              idx={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
