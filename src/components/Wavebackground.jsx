
import { motion, useReducedMotion } from 'motion/react';

export default function WaveBackground() {
  const reduceMotion = useReducedMotion();

  const waves = [
    {
      color: '#E9A18A',
      opacity: 0.10,
      duration: 18,
      path: 'M0 120 C240 40 420 190 720 110 C1020 30 1200 180 1440 100 L1440 300 L0 300 Z',
    },
    {
      color: '#A8B99A',
      opacity: 0.15,
      duration: 24,
      path: 'M0 160 C300 240 460 60 720 150 C980 240 1200 70 1440 160 L1440 300 L0 300 Z',
    },
    {
      color: '#F2D58A',
      opacity: 0.16,
      duration: 21,
      path: 'M0 190 C240 100 480 250 720 170 C960 90 1200 230 1440 150 L1440 300 L0 300 Z',
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[55%] w-[200%]"
      >
        {waves.map((wave, i) => (
          <motion.path
            key={i}
            d={wave.path}
            fill={wave.color}
            initial={false}
            animate={
              reduceMotion
                ? { x: 0 }
                : { x: ['0%', '-25%', '0%'] }
            }
            transition={{
              duration: wave.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ opacity: wave.opacity }}
          />
        ))}
      </svg>

      {/* Soft organic floating shapes */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute -left-20 top-[30%] h-64 w-64 rounded-full bg-[#A8B99A]/10 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-20 top-[15%] h-72 w-72 rounded-full bg-[#E9A18A]/10 blur-3xl"
            animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  );
}
