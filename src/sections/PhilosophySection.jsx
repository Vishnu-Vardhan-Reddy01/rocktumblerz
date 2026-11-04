import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PhilosophyIllustration } from '../components/Illustrations';

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const initMap = {
    up:    { opacity: 0, y: 28 },
    left:  { opacity: 0, x: -28 },
    right: { opacity: 0, x: 28 },
    scale: { opacity: 0, scale: 0.94 },
  };
  const initial = initMap[direction] || initMap.up;
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    type: 'explore',
    word: 'Explore',
    tagline: 'The world is endlessly curious.',
    body: 'We create spaces that invite children to look, touch, smell and investigate. Exploration is the first act of learning.',
    color: '#F2D58A',
    textColor: '#8B7355',
    bg: 'rgba(242,213,138,0.12)',
    dot: '#E8C060',
    num: '01',
  },
  {
    type: 'discover',
    word: 'Discover',
    tagline: "Every 'what is this?' is a miracle.",
    body: 'Discovery happens when we least expect it — when a child turns a pebble over and finds a tiny hidden world underneath.',
    color: '#A8B99A',
    textColor: '#3D6B3E',
    bg: 'rgba(168,185,154,0.12)',
    dot: '#7A9E6A',
    num: '02',
  },
  {
    type: 'create',
    word: 'Create',
    tagline: 'Making something from nothing is magic.',
    body: 'Clay, water, sand, leaves and paint — we put real materials in little hands and step back to watch the extraordinary unfold.',
    color: '#E9A18A',
    textColor: '#7A3B2E',
    bg: 'rgba(233,161,138,0.12)',
    dot: '#D08070',
    num: '03',
  },
  {
    type: 'grow',
    word: 'Grow',
    tagline: 'Quietly, gently, naturally.',
    body: 'Every texture felt, every experiment run, every mess made — these moments build something deep and lasting inside a child.',
    color: '#B9A17D',
    textColor: '#5B4520',
    bg: 'rgba(185,161,125,0.12)',
    dot: '#9A8060',
    num: '04',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-[#F9F6EF] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle ambient blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F2D58A]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#A8B99A]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Section label + headline ── */}
        <div className="text-center mb-14 lg:mb-18">
          <FadeIn delay={0}>
            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#B9A17D] mb-3">
              How Children Learn
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2F1F] leading-tight">
              Our philosophy, in four words.
            </h2>
          </FadeIn>
        </div>

        {/* ── 2-column card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <FadeIn key={p.type} delay={i * 0.08} direction="up">
              <motion.div
                whileHover={{ y: -4, boxShadow: `0 16px 40px ${p.color}25` }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className="relative rounded-2xl p-6 lg:p-8 border border-white/60 bg-white/50 backdrop-blur-sm overflow-hidden group cursor-default"
              >
                {/* Soft color wash behind card */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: p.bg }}
                />

                {/* Top row: number + icon */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Step number pill */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shadow-sm"
                      style={{ background: p.color, color: p.textColor }}
                    >
                      {p.num}
                    </div>
                    {/* Pebble dots */}
                    <div className="flex gap-1 items-center">
                      {[1, 0.65, 0.35].map((op, j) => (
                        <div
                          key={j}
                          className="rounded-full"
                          style={{ width: 7 - j, height: 7 - j, background: p.dot, opacity: op }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mini illustration */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: p.bg, border: `1.5px solid ${p.color}50` }}
                  >
                    <PhilosophyIllustration type={p.type} size={44} />
                  </motion.div>
                </div>

                {/* Word — medium size, expressive */}
                <div className="relative z-10 mb-1">
                  <h3
                    className="font-display text-4xl sm:text-5xl font-bold leading-none tracking-tight"
                    style={{ color: p.color }}
                  >
                    {p.word}
                  </h3>
                </div>

                {/* Tagline */}
                <p
                  className="relative z-10 text-[13px] font-semibold mb-3 leading-snug"
                  style={{ color: p.textColor }}
                >
                  {p.tagline}
                </p>

                {/* Body */}
                <p className="relative z-10 text-[13.5px] text-[#6B5B3E] leading-relaxed">
                  {p.body}
                </p>

                {/* Hover accent bar at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* ── Central quote ── */}
        <FadeIn delay={0.2} className="mt-14">
          <div className="relative text-center max-w-xl mx-auto py-8 px-6">
            {/* Quote mark */}
            <div className="text-7xl font-display text-[#D8C9AD]/50 leading-none absolute -top-2 left-4 pointer-events-none select-none">"</div>
            <p className="font-display text-xl sm:text-2xl font-medium text-[#3D2F1F] leading-snug relative z-10">
              We don't rush the magic. We let it unfold — one pebble, one discovery, one tiny adventure at a time.
            </p>
            <div className="mt-5 flex justify-center items-center gap-3">
              <div className="h-px w-10 bg-[#D8C9AD]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B9A17D]">Rock Tumblerz</span>
              <div className="h-px w-10 bg-[#D8C9AD]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
