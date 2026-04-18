import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { hero } from '../data/portfolioData';

/* ── Typewriter hook ───────────────────────────────────── */
function useTypewriter(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timer;

    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

/* ── Floating blob ─────────────────────────────────────── */
function Blob({ className, color }) {
  return (
    <div
      className={`absolute rounded-full blur-[80px] opacity-20 blob ${className}`}
      style={{ background: color }}
    />
  );
}

const socials = [
  { icon: SiGithub,   href: 'https://github.com/nihal-kumar01',       label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/nihal-kumar01',  label: 'LinkedIn' },
  { icon: FaTwitter,  href: 'https://twitter.com/nihal-kumar01',       label: 'Twitter' },
];

/* ── Stagger variants ──────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const role = useTypewriter(hero.roles);

  const scrollToWork = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-[#07070f] bg-gray-50 bg-grid"
    >
      {/* Background blobs */}
      <Blob className="w-96 h-96 -top-24 -left-24 blob" color="#8b5cf6" />
      <Blob className="w-80 h-80 top-1/2 -right-20 blob-delay" color="#3b82f6" />
      <Blob className="w-72 h-72 bottom-0 left-1/3 blob" color="#06b6d4" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 dark:bg-gradient-radial from-violet-950/30 via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center mb-6">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase dark:bg-white/10 bg-violet-100 dark:text-violet-300 text-violet-700 dark:border-white/10 border border-violet-200"
          >
            ✦ Open to Opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={item}
          className="text-lg dark:text-white/50 text-gray-500 font-medium mb-2"
        >
          {hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl gradient-text leading-none tracking-tight mb-4"
        >
          {hero.name}
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={item}
          className="h-12 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-2xl dark:text-white/70 text-gray-600 font-medium typewriter-cursor">
            {role}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg dark:text-white/40 text-gray-500 max-w-xl mx-auto leading-relaxed mb-3"
        >
          {hero.tagline}
        </motion.p>

        {/* Intro */}
        <motion.p
          variants={item}
          className="text-sm dark:text-white/30 text-gray-400 max-w-lg mx-auto leading-relaxed mb-10"
        >
          {hero.intro}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={scrollToWork}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-semibold text-sm text-white relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {hero.cta.primary}
              <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </motion.button>

          <motion.a
            href={hero.cvLink}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`px-8 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 grad-border transition-colors duration-200
              dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10
              bg-white text-gray-700 hover:bg-gray-50 shadow-sm`}
          >
            <HiDownload className="w-4 h-4" />
            {hero.cta.secondary}
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="dark:text-white/40 text-gray-400 hover:text-violet-400 dark:hover:text-violet-400 transition-colors duration-200"
            >
              <Icon size={22} />
            </motion.a>
          ))}
          <span className="dark:text-white/20 text-gray-300 text-xs">Follow me</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs dark:text-white/30 text-gray-400 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 dark:bg-white/20 bg-gray-300"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
