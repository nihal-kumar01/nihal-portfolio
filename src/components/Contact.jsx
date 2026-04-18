import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiCheckCircle } from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { contact } from '../data/portfolioData';

/* ── Social icon map ────────────────────────────────────── */
const socialIcons = {
  github:    { icon: SiGithub,    color: '#888' },
  linkedin:  { icon: FaLinkedin,  color: '#0077b5' },
  twitter:   { icon: FaTwitter,   color: '#1da1f2' },
  instagram: { icon: SiInstagram, color: '#e1306c' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
};

/* ── Floating label input ───────────────────────────────── */
function FloatingInput({ label, id, type = 'text', value, onChange, textarea }) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  const baseClass = `
    w-full px-4 pt-6 pb-2 rounded-xl text-sm outline-none transition-all duration-200
    dark:bg-white/5 bg-gray-50
    dark:border-white/10 border-gray-200 border
    dark:text-white text-gray-900
    dark:focus:border-violet-500 focus:border-violet-500
    dark:focus:bg-white/8
    resize-none
  `;

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={baseClass}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={baseClass}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none
          ${lifted
            ? 'top-2 text-[10px] tracking-wide font-medium dark:text-violet-400 text-violet-600'
            : 'top-4 text-sm dark:text-white/30 text-gray-400'
          }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async send (replace with your form handler, e.g. Formspree)
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding dark:bg-[#07070f] bg-gray-50 relative overflow-hidden"
    >
      {/* BG accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase dark:text-violet-400 text-violet-600 mb-3">
            Get in touch
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl dark:text-white text-gray-900">
            {contact.headline.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">
              {contact.headline.split(' ').slice(-1)}
            </span>
          </h2>
          <p className="mt-4 text-sm dark:text-white/40 text-gray-500 max-w-md mx-auto">
            {contact.subtext}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Left — info + socials */}
          <div className="space-y-8">
            {/* Email */}
            <motion.a
              href={`mailto:${contact.email}`}
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 grad-border rounded-2xl p-5 dark:bg-white/5 bg-white shadow-sm group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-blue-500 text-white flex-shrink-0">
                <HiMail size={18} />
              </div>
              <div>
                <p className="text-xs dark:text-white/40 text-gray-400 mb-0.5">Email me at</p>
                <p className="text-sm font-medium dark:text-white text-gray-900 group-hover:gradient-text transition-all">
                  {contact.email}
                </p>
              </div>
            </motion.a>

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <p className="text-xs dark:text-white/40 text-gray-400 mb-3 uppercase tracking-wider font-medium">
                Find me online
              </p>
              <div className="grid grid-cols-2 gap-3">
                {contact.socials.map((social) => {
                  const { icon: Icon, color } = socialIcons[social.icon] || {
                    icon: SiGithub,
                    color: '#888',
                  };
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl grad-border dark:bg-white/5 bg-white shadow-sm transition-colors duration-200"
                    >
                      <Icon size={16} style={{ color }} />
                      <span className="text-sm dark:text-white/60 text-gray-600">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability note */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="rounded-2xl p-5 border dark:border-emerald-500/20 border-emerald-200 dark:bg-emerald-500/5 bg-emerald-50"
            >
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold dark:text-emerald-300 text-emerald-700 mb-1">
                    Currently available
                  </p>
                  <p className="text-xs dark:text-emerald-400/70 text-emerald-600">
                    Open to internships, freelance, and full-time opportunities. Response time: within 24h.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grad-border rounded-2xl p-6 md:p-8 dark:bg-white/5 bg-white shadow-sm"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <HiCheckCircle className="text-emerald-400" size={48} />
                <h3 className="font-heading font-bold text-xl dark:text-white text-gray-900">
                  Message sent!
                </h3>
                <p className="text-sm dark:text-white/50 text-gray-500">
                  Thanks for reaching out, Nihal will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-2 text-sm text-violet-500 hover:text-violet-400 underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading font-bold text-lg dark:text-white text-gray-900 mb-6">
                  Send a message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FloatingInput
                    label="Your name"
                    id="name"
                    value={form.name}
                    onChange={handleChange('name')}
                  />
                  <FloatingInput
                    label="Email address"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                  />
                </div>

                <FloatingInput
                  label="Your message..."
                  id="message"
                  value={form.message}
                  onChange={handleChange('message')}
                  textarea
                />

                <motion.button
                  type="submit"
                  disabled={loading || !form.name || !form.email || !form.message}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity duration-200 disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </motion.button>

                <p className="text-center text-xs dark:text-white/25 text-gray-400">
                  No spam. I usually reply within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
