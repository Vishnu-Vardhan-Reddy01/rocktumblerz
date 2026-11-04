import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const init = { up: { opacity: 0, y: 32 }, left: { opacity: 0, x: -32 }, right: { opacity: 0, x: 32 }, scale: { opacity: 0, scale: 0.93 } }[direction] || { opacity: 0, y: 32 };
  return (
    <motion.div ref={ref} initial={init} animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const pillars = [
  { num: '01', title: 'A Studio, Not a School', body: 'Soft earthy textures, natural materials and open-ended tools invite children to play on their own terms — with no wrong answers.', color: '#F2D58A', accent: '#8B7355', icon: '🪨' },
  { num: '02', title: 'Led by Curiosity',       body: "Children follow their instincts — touching, testing, building, spilling — and every experiment is celebrated as a discovery.",         color: '#A8B99A', accent: '#3D6B3E', icon: '🔍' },
  { num: '03', title: 'Grounded in Nature',     body: 'Pebbles, leaves, flowers, water, clay — we bring the natural world inside, connecting children with the textures of the earth.',     color: '#E9A18A', accent: '#7A3B2E', icon: '🌿' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F0E7] py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F2D58A]/12 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#A8B99A]/12 translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* ── Editorial header ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16 lg:mb-20">
          <div className="flex-1">
            <FadeIn delay={0}>
              <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#B9A17D] mb-4">Welcome to Our Little World</span>
            </FadeIn>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#3D2F1F] leading-[1.1] tracking-tight"
              >
                Protecting the extraordinary<br />
                experience of{' '}
                <em className="text-[#E9A18A] not-italic">being little.</em>
              </motion.h2>
            </div>
          </div>

          <FadeIn delay={0.25} direction="right" className="flex-1 lg:pt-16 max-w-lg">
            <p className="text-[16px] text-[#6B5B3E] leading-relaxed mb-5">
              Rock Tumblerz is not a classroom. It's a studio — a carefully curated world where toddlers are invited to touch, explore, create and wonder. We believe childhood is not a race to the next milestone; it's a rich, sensory experience that deserves to be lived fully.
            </p>
            <p className="text-[15px] text-[#8B7355] leading-relaxed">
              Every pebble, every plant, every soft texture in our space is intentionally chosen to spark curiosity. We give children the time, space and freedom to discover what excites them.
            </p>
          </FadeIn>
        </div>

        {/* ── 3-column feature strip ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <FadeIn key={p.num} delay={0.1 * i + 0.1}>
              <motion.div
                whileHover={{ y: -5, boxShadow: `0 20px 48px ${p.color}30` }}
                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                className="group relative p-7 rounded-2xl border border-white/70 bg-white/50 backdrop-blur-sm overflow-hidden cursor-default"
              >
                {/* Hover wash */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `${p.color}18` }} />
                <div className="relative z-10">
                  {/* Icon + number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-2xl">{p.icon}</div>
                    <span className="text-[11px] font-bold tracking-widest text-[#D8C9AD]">{p.num}</span>
                  </div>
                  {/* Pebble accent dots */}
                  <div className="flex gap-1.5 mb-4">
                    {[0.9, 0.6, 0.3].map((op, j) => (
                      <div key={j} className="rounded-full" style={{ width: 8, height: 8, background: p.color, opacity: op }} />
                    ))}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#3D2F1F] mb-2">{p.title}</h3>
                  <p className="text-[13.5px] text-[#6B5B3E] leading-relaxed">{p.body}</p>
                </div>
                {/* Bottom color bar on hover */}
                <motion.div className="absolute bottom-0 left-0 h-[3px] rounded-full" style={{ background: p.color }} initial={{ width: 0 }} whileHover={{ width: '100%' }} transition={{ duration: 0.5 }} />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* ── Pull quote ── */}
        <FadeIn delay={0.15} className="mt-16">
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="text-7xl font-display text-[#D8C9AD]/50 leading-none absolute -top-4 left-0 pointer-events-none select-none">"</div>
            <p className="font-display text-xl sm:text-2xl font-medium text-[#3D2F1F] leading-snug px-10">
              We don't rush the magic. We let it unfold — one pebble, one discovery, one tiny adventure at a time.
            </p>
            <div className="mt-5 flex justify-center items-center gap-3">
              <div className="h-px w-10 bg-[#D8C9AD]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B9A17D]">Rock Tumblerz</span>
              <div className="h-px w-10 bg-[#D8C9AD]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
