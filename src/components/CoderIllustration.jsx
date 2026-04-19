import { motion } from 'framer-motion';

export default function CoderIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto lg:mx-0 select-none"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
    >
      {/* Radial glow behind illustration */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 rounded-full"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, #3b82f6 50%, transparent 75%)' }}
      />

      {/* Floating wrapper */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 480 420"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-full drop-shadow-2xl"
        >
          <defs>
            {/* Skin */}
            <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fcd5b0" />
              <stop offset="100%" stopColor="#f5b98e" />
            </linearGradient>
            {/* Hoodie */}
            <linearGradient id="hoodie" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            {/* Desk surface */}
            <linearGradient id="deskSurface" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2e2560" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            {/* Laptop screen bg */}
            <linearGradient id="screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d1117" />
              <stop offset="100%" stopColor="#0a0f1e" />
            </linearGradient>
            {/* Screen glow */}
            <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
            {/* Lamp cone */}
            <linearGradient id="lampCone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde68a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
            </linearGradient>
            {/* Lamp glow radial */}
            <radialGradient id="lampGlow" cx="50%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#fde68a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
            </radialGradient>
            {/* Chair */}
            <linearGradient id="chairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            {/* Floor */}
            <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
            </linearGradient>

            {/* Soft glow filter for lamp */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* ── LAMP AREA GLOW (behind everything) ── */}
          <ellipse cx="95" cy="255" rx="90" ry="70" fill="url(#lampGlow)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </ellipse>

          {/* ── LAMP ── */}
          {/* Base */}
          <rect x="68" y="293" width="44" height="9" rx="4" fill="#312e81" />
          {/* Pole */}
          <rect x="87" y="218" width="6" height="76" rx="3" fill="#4338ca" />
          {/* Arm */}
          <line x1="90" y1="220" x2="120" y2="188" stroke="#4338ca" strokeWidth="6" strokeLinecap="round" />
          {/* Shade */}
          <path d="M 104 188 L 136 188 L 128 214 L 112 214 Z" fill="#6d28d9" />
          {/* Shade rim */}
          <rect x="102" y="185" width="36" height="6" rx="3" fill="#7c3aed" />
          {/* Bulb glow blob */}
          <ellipse cx="120" cy="214" rx="22" ry="12" fill="#fde68a" opacity="0.4" filter="url(#softBlur)">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
          </ellipse>
          {/* Bulb */}
          <circle cx="120" cy="212" r="5" fill="#fef9c3" filter="url(#glow)">
            <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite" />
          </circle>
          {/* Light cone */}
          <path d="M 108 214 L 75 295 L 145 295 L 132 214 Z" fill="url(#lampCone)" opacity="0.5">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
          </path>

          {/* ── FLOWER POT ── */}
          {/* Pot body */}
          <path d="M 380 278 L 392 301 L 422 301 L 434 278 Z" fill="#dc2626" />
          {/* Pot rim */}
          <rect x="377" y="273" width="60" height="9" rx="4" fill="#ef4444" />
          {/* Soil */}
          <ellipse cx="407" cy="278" rx="25" ry="7" fill="#6b3b0e" />
          {/* Stem */}
          <line x1="407" y1="274" x2="407" y2="234" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />
          {/* Leaves — animated slight sway */}
          <g>
            <ellipse cx="394" cy="256" rx="16" ry="8" fill="#22c55e" transform="rotate(-35 394 256)">
              <animateTransform attributeName="transform" type="rotate" values="-35 394 256;-30 394 256;-35 394 256" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="421" cy="248" rx="16" ry="8" fill="#16a34a" transform="rotate(35 421 248)">
              <animateTransform attributeName="transform" type="rotate" values="35 421 248;30 421 248;35 421 248" dur="4.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="400" cy="238" rx="13" ry="7" fill="#4ade80" transform="rotate(-15 400 238)">
              <animateTransform attributeName="transform" type="rotate" values="-15 400 238;-10 400 238;-15 400 238" dur="3.8s" repeatCount="indefinite" />
            </ellipse>
          </g>
          {/* Flower on top */}
          <circle cx="407" cy="231" r="9" fill="#fbcfe8" />
          <circle cx="407" cy="231" r="5" fill="#fbbf24" />

          {/* ── DESK ── */}
          {/* Tabletop */}
          <rect x="28" y="299" width="424" height="18" rx="5" fill="url(#deskSurface)" />
          {/* Desk front edge shadow */}
          <rect x="28" y="313" width="424" height="7" rx="3" fill="#1a1745" />
          {/* Desk legs */}
          <rect x="52" y="320" width="14" height="82" rx="4" fill="#1e1b4b" />
          <rect x="414" y="320" width="14" height="82" rx="4" fill="#1e1b4b" />
          {/* Desk cross support */}
          <rect x="52" y="368" width="376" height="6" rx="3" fill="#1a1745" />

          {/* ── CHAIR ── */}
          {/* Seat */}
          <rect x="138" y="308" width="90" height="14" rx="5" fill="url(#chairGrad)" />
          {/* Back support pole */}
          <rect x="143" y="215" width="10" height="95" rx="4" fill="#312e81" />
          {/* Backrest */}
          <rect x="136" y="210" width="22" height="46" rx="6" fill="url(#chairGrad)" />
          {/* Chair legs */}
          <rect x="142" y="322" width="8" height="60" rx="3" fill="#312e81" />
          <rect x="214" y="322" width="8" height="60" rx="3" fill="#312e81" />
          <rect x="128" y="350" width="72" height="6" rx="3" fill="#1e1b4b" />

          {/* ── COFFEE MUG ── */}
          {/* Shadow */}
          <ellipse cx="337" cy="302" rx="20" ry="4" fill="#1a1745" opacity="0.5" />
          {/* Mug body */}
          <rect x="319" y="264" width="36" height="36" rx="6" fill="#1e293b" />
          {/* Mug highlight */}
          <rect x="322" y="267" width="7" height="26" rx="3" fill="#334155" opacity="0.6" />
          {/* Coffee inside */}
          <ellipse cx="337" cy="267" rx="15" ry="5" fill="#7c3007" />
          {/* Handle */}
          <path d="M 355 272 Q 374 272 374 282 Q 374 292 355 292" stroke="#1e293b" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Steam wisps */}
          <path d="M 330 262 Q 324 250 330 238 Q 336 226 330 214" stroke="#cbd5e1" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="translate" values="0 0;2 -8;0 -16" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.4;0" dur="2.2s" repeatCount="indefinite" />
          </path>
          <path d="M 337 260 Q 343 248 337 236 Q 331 224 337 212" stroke="#cbd5e1" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="translate" values="0 0;-2 -8;0 -16" dur="2.7s" begin="0.3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0" dur="2.7s" begin="0.3s" repeatCount="indefinite" />
          </path>
          <path d="M 344 262 Q 350 250 344 238 Q 338 226 344 214" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="translate" values="0 0;3 -8;0 -16" dur="3s" begin="0.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0" dur="3s" begin="0.7s" repeatCount="indefinite" />
          </path>

          {/* ── LAPTOP ── */}
          {/* Laptop shadow */}
          <ellipse cx="248" cy="303" rx="68" ry="5" fill="#1a1745" opacity="0.5" />
          {/* Keyboard base */}
          <rect x="183" y="285" width="132" height="16" rx="5" fill="#1e1b4b" />
          {/* Keyboard deck */}
          <rect x="186" y="285" width="126" height="13" rx="4" fill="#312e81" />
          {/* Keys row 1 */}
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <rect key={i} x={190 + i * 13} y={287} width={10} height={5} rx={1.5} fill="#4338ca" opacity={0.8} />
          ))}
          {/* Keys row 2 */}
          {[0,1,2,3,4,5,6,7].map(i => (
            <rect key={i} x={192 + i * 13} y={294} width={10} height={4} rx={1.5} fill="#4338ca" opacity={0.6} />
          ))}
          {/* Touchpad */}
          <rect x="226" y="294" width="44" height="4} rx={2" fill="#4338ca" opacity="0.4" />

          {/* Screen frame */}
          <rect x="188" y="190" width="122" height="95" rx="7" fill="#0f0a20" />
          {/* Screen border inner */}
          <rect x="191" y="193" width="116" height="89" rx="5" fill="#160d2e" />
          {/* Screen display */}
          <rect x="194" y="196" width="110" height="82" rx="4" fill="url(#screenBg)" />
          {/* Screen glow overlay */}
          <rect x="194" y="196" width="110" height="82" rx="4" fill="url(#screenGlow)" />

          {/* Code lines on screen */}
          {/* Line 1 */}
          <rect x="198" y="202" width="22" height="4" rx="1" fill="#c084fc" />
          <rect x="224" y="202" width="38" height="4" rx="1" fill="#60a5fa" />
          <rect x="266" y="202" width="16" height="4" rx="1" fill="#f472b6" />
          {/* Line 2 */}
          <rect x="203" y="210" width="16" height="4" rx="1" fill="#34d399" />
          <rect x="223" y="210" width="28" height="4" rx="1" fill="#93c5fd" />
          <rect x="255" y="210" width="32" height="4" rx="1" fill="#fbbf24" />
          {/* Line 3 */}
          <rect x="208" y="218" width="42" height="4" rx="1" fill="#a78bfa" />
          <rect x="254" y="218" width="22" height="4" rx="1" fill="#6ee7b7" />
          {/* Line 4 — blank/indent */}
          <rect x="208" y="226" width="15" height="4" rx="1" fill="#60a5fa" />
          {/* Line 5 */}
          <rect x="203" y="234" width="19" height="4" rx="1" fill="#f472b6" />
          <rect x="226" y="234" width="47" height="4" rx="1" fill="#93c5fd" />
          {/* Line 6 */}
          <rect x="208" y="242" width="58" height="4" rx="1" fill="#86efac" />
          {/* Line 7 */}
          <rect x="203" y="250" width="30" height="4" rx="1" fill="#c084fc" />
          <rect x="237" y="250" width="36" height="4" rx="1" fill="#60a5fa" />
          {/* Line 8 (current line with cursor) */}
          <rect x="198" y="258" width="14" height="4" rx="1" fill="#f472b6" />
          <rect x="215" y="258" width="28" height="4" rx="1" fill="#93c5fd" />
          {/* Blinking cursor */}
          <rect x="246" y="257" width="2" height="6" rx="1" fill="#e2e8f0">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
          {/* Line 9 — closing brace */}
          <rect x="198" y="268" width="10" height="4" rx="1" fill="#f472b6" />

          {/* Hinge */}
          <rect x="185" y="282" width="128" height="5" rx="2" fill="#1a1745" />

          {/* ── PERSON ── */}
          {/* Body / Hoodie */}
          <path
            d="M 158 258 Q 150 280 150 302 L 222 302 Q 222 280 214 258 Q 200 248 186 247 Q 172 248 158 258 Z"
            fill="url(#hoodie)"
          />
          {/* Hoodie front pocket */}
          <path d="M 170 278 Q 170 296 186 296 Q 202 296 202 278 Q 198 274 186 274 Q 174 274 170 278 Z" fill="#4f46e5" opacity="0.6" />
          {/* Hood strings */}
          <line x1="183" y1="250" x2="179" y2="265" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="189" y1="250" x2="193" y2="265" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round" />

          {/* Left shoulder & arm */}
          <path d="M 158 262 Q 144 275 150 291 Q 160 300 185 296" stroke="#7c3aed" strokeWidth="15" fill="none" strokeLinecap="round" />
          {/* Right shoulder & arm */}
          <path d="M 214 262 Q 228 275 224 291 Q 214 300 197 296" stroke="#6d28d9" strokeWidth="15" fill="none" strokeLinecap="round" />

          {/* Left hand on keyboard */}
          <ellipse cx="188" cy="295" rx="13" ry="7" fill="url(#skin)" />
          {/* Right hand */}
          <ellipse cx="206" cy="295" rx="11" ry="7" fill="url(#skin)" />

          {/* Neck */}
          <rect x="179" y="237" width="14" height="16" rx="5" fill="url(#skin)" />

          {/* Head */}
          <ellipse cx="186" cy="213" rx="31" ry="34" fill="url(#skin)" />

          {/* Ears */}
          <ellipse cx="155" cy="215" rx="5" ry="7" fill="#f5b98e" />
          <ellipse cx="217" cy="215" rx="5" ry="7" fill="#f5b98e" />

          {/* Hair — top */}
          <path
            d="M 157 202 Q 158 170 186 168 Q 214 170 215 202 Q 208 186 186 184 Q 164 186 157 202 Z"
            fill="#1c1917"
          />
          {/* Hair sides */}
          <path d="M 157 202 Q 153 212 155 222 Q 156 195 163 188 Z" fill="#1c1917" />
          <path d="M 215 202 Q 219 212 217 222 Q 216 195 209 188 Z" fill="#1c1917" />

          {/* Eyebrows */}
          <path d="M 171 203 Q 177 199 183 202" stroke="#292524" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 190 202 Q 196 199 202 203" stroke="#292524" strokeWidth="2.2" fill="none" strokeLinecap="round" />

          {/* Eyes */}
          <ellipse cx="177" cy="213" rx="5" ry="5.5" fill="#1c1917" />
          <ellipse cx="196" cy="213" rx="5" ry="5.5" fill="#1c1917" />
          {/* Eye whites / shine */}
          <circle cx="179" cy="211" r="1.8" fill="white" />
          <circle cx="198" cy="211" r="1.8" fill="white" />

          {/* Nose */}
          <path d="M 184 218 Q 186 223 188 218" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Smile */}
          <path d="M 178 224 Q 186 230 194 224" stroke="#c2410c" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Headphones */}
          <path d="M 156 207 Q 156 178 186 175 Q 216 178 216 207" stroke="#1e1b4b" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <rect x="149" y="203" width="11" height="16" rx="5" fill="#4338ca" />
          <rect x="211" y="203" width="11" height="16" rx="5" fill="#4338ca" />

          {/* ── FLOOR SHADOW ── */}
          <ellipse cx="248" cy="404" rx="200" ry="12" fill="url(#floorGrad)" />
        </svg>
      </motion.div>

      {/* Floating badge — "Available to Code" */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/10 bg-white/80 backdrop-blur-sm shadow-lg border dark:border-white/10 border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium dark:text-white/80 text-gray-700 whitespace-nowrap">
          Ready to build something awesome
        </span>
      </motion.div>
    </motion.div>
  );
}
