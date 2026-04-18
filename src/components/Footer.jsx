import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { navLinks } from '../data/portfolioData';

const socials = [
  { icon: SiGithub,   href: 'https://github.com/nihalkumar',       label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/nihalkumar',  label: 'LinkedIn' },
  { icon: FaTwitter,  href: 'https://twitter.com/nihalkumar',       label: 'Twitter' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#0a0a18] bg-white border-t dark:border-white/5 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span
              className="gradient-text font-heading font-extrabold text-2xl"
            >
              NK
            </span>
            <p className="mt-2 text-sm dark:text-white/40 text-gray-500 leading-relaxed max-w-xs">
              Crafting digital experiences that blend great engineering with elegant design.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase dark:text-white/30 text-gray-400 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(href.replace('#', ''))
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-sm dark:text-white/50 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase dark:text-white/30 text-gray-400 mb-4">
              Contact
            </p>
            <a
              href="mailto:nihal.kumar@email.com"
              className="text-sm dark:text-white/50 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors block mb-3"
            >
              nihal.kumar@email.com
            </a>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="dark:text-white/40 text-gray-400 dark:hover:text-violet-400 hover:text-violet-600 transition-colors"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t dark:border-white/5 border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs dark:text-white/25 text-gray-400">
            © {year} Nihal Kumar. All rights reserved.
          </p>
          <p className="text-xs dark:text-white/25 text-gray-400 flex items-center gap-1">
            Built with <HiHeart className="text-red-400 w-3 h-3" /> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
