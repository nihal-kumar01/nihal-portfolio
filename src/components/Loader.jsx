import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07070f]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated logo */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
          >
            {/* Spinning ring */}
            <motion.div
              className="absolute w-24 h-24 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, #8b5cf6, #3b82f6, #06b6d4, transparent)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner circle */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-[#07070f] flex items-center justify-center">
              <span
                className="text-2xl font-bold gradient-text"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                NK
              </span>
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="mt-8 text-sm tracking-[0.3em] text-white/40 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Loading portfolio...
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-4 h-[2px] bg-white/10 rounded-full overflow-hidden"
            style={{ width: 160 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
