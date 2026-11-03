import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PhilosophyIllustration } from '../components/Illustrations';

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initMap = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    scale: { opacity: 0, scale: 0.9 },
  };
  const initial = initMap[direction] || initMap.up;
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
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
    tagline: 'The world is endlessly curious to a toddler.',
    body: "We create spaces and moments that invite children to look, touch, smell and investigate. Exploration is the first act of learning.",
    color: '#F2D58A',
    textColor: '#8B7355',
    bg: '#FEFAF0',
    num: '01',
  },
  {
    type: 'discover',
    word: 'Discover',
    tagline: "Every 'what is this?' is a small miracle.",
    body: "Discovery happens when we least expect it. When a child turns a pebble over and finds a tiny hidden world underneath — that moment of wonder is everything.",
    color: '#A8B99A',
    textColor: '#3D6B3E',
    bg: '#F3F7F0',
    num: '02',
  },
  {
    type: 'create',
    word: 'Create',
    tagline: 'Making something from nothing is magic.',
    body: "Clay, water, sand, leaves and paint — we put real materials in little hands and stand back. What they create is never expected and always extraordinary.",
    color: '#E9A18A',
    textColor: '#7A3B2E',
    bg: '#FDF5F2',
    num: '03',
  },
  {
    type: 'grow',
    word: 'Grow',
    tagline: 'Quietly, gently, naturally.',
    body: "Children grow through play. Every experience — every texture felt, every experiment run, every mess made — builds something lasting inside a child.",
    color: '#B9A17D',
    textColor: '#5B4520',
    bg: '#F7F4EE',
    num: '04',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-[#F9F6EF] py-24 lg:py-36 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 800" className="absolute -top-20 -left-40 w-[600px] opacity-[0.03]" fill="#3D2F1F">
          <circle cx="300" cy="300" r="280" />
        </svg>
        <svg viewBox="0 0 1200 800" className="absolute -bottom-20 -right-40 w-[500px] opacity-[0.03]" fill="#3D2F1F">
          <circle cx="300" cy="300" r="280" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 lg:mb-28">
          <FadeIn delay={0}>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-4">
              How Children Learn
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3D2F1F] leading-tight max-w-2xl mx-auto">
              Our philosophy, in four beautiful words.
            </h2>
          </FadeIn>
        </div>

        {/* Pillar blocks — organic alternating layout */}
        <div className="space-y-14 lg:space-y-20">
          {pillars.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <FadeIn key={p.type} delay={0.08 * i} direction={isEven ? 'left' : 'right'}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                  {/* Illustration block */}
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: isEven ? 2 : -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex-shrink-0 w-48 h-48 lg:w-60 lg:h-60 rounded-[40px] flex items-center justify-center shadow-md relative"
                    style={{ background: p.bg, border: `2px solid ${p.color}40` }}
                  >
                    <PhilosophyIllustration type={p.type} size={120} />
                    {/* Number badge */}
                    <div
                      className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display shadow-sm"
                      style={{ background: p.color, color: p.textColor }}
                    >
                      {p.num}
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3
                      className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-none mb-3 tracking-tight"
                      style={{ color: p.color }}
                    >
                      {p.word}
                    </h3>
                    <p
                      className="text-xl sm:text-2xl font-medium mb-4"
                      style={{ color: p.textColor }}
                    >
                      {p.tagline}
                    </p>
                    <p className="text-base lg:text-lg text-[#6B5B3E] leading-relaxed max-w-xl">
                      {p.body}
                    </p>
                    {/* Organic divider */}
                    <div className="mt-6 flex gap-2 justify-center lg:justify-start">
                      {[0, 1, 2].map(j => (
                        <div
                          key={j}
                          className="rounded-full"
                          style={{
                            width: 8 + j * 4,
                            height: 8,
                            background: p.color,
                            opacity: 1 - j * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
