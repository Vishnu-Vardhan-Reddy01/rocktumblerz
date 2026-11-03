import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

function AnimatedText({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -36 },
    right: { opacity: 0, x: 36 },
    scale: { opacity: 0, scale: 0.92 },
  }[direction] || { opacity: 0, y: 36 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="bg-[#F5F0E7] py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#F2D58A]/15 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#A8B99A]/15 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Oversize quote text */}
          <div className="flex-1">
            <FadeIn delay={0}>
              <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-4">
                Welcome to Our Little World
              </span>
            </FadeIn>
            <AnimatedText className="font-display text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-[#3D2F1F] leading-[1.1] tracking-tight" delay={0.1}>
              Protecting the extraordinary<br />
              experience of <em className="text-[#E9A18A] not-italic">being little.</em>
            </AnimatedText>
          </div>

          {/* Right: Philosophy intro */}
          <div className="flex-1 lg:pt-20">
            <FadeIn delay={0.25} direction="right">
              <p className="text-lg text-[#6B5B3E] leading-relaxed mb-6">
                Rock Tumblerz is not a classroom. It's a studio — a carefully curated world where toddlers are invited to touch, explore, create and wonder. We believe that childhood is not a race to the next milestone. It's a rich, sensory experience that deserves to be lived fully.
              </p>
              <p className="text-base text-[#8B7355] leading-relaxed">
                Every pebble, every plant, every soft texture in our space is intentionally chosen to spark curiosity. We give children the time, space and freedom to discover what excites them — and we celebrate every single moment of that discovery.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Feature blocks - Editorial asymmetric layout */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              num: "01",
              title: "A Studio, Not a School",
              body: "We've built a space that feels different — because it is. Soft earthy textures, natural materials and open-ended tools invite children to play on their own terms.",
              color: "#F2D58A",
              accent: "#8B7355",
            },
            {
              num: "02",
              title: "Led by Curiosity",
              body: "There are no wrong answers here. Children follow their instincts — touching, testing, building, spilling — and every experiment is celebrated as a discovery.",
              color: "#A8B99A",
              accent: "#3D6B3E",
            },
            {
              num: "03",
              title: "Grounded in Nature",
              body: "Pebbles, leaves, flowers, water, clay — we bring the natural world inside. Children connect with the textures, colours and rhythms of the earth from their very first visit.",
              color: "#E9A18A",
              accent: "#7A3B2E",
            },
          ].map((item, i) => (
            <FadeIn key={item.num} delay={0.1 * i + 0.2} className="group">
              <div className="relative p-8 rounded-3xl border border-[#D8C9AD]/40 bg-white/40 hover:bg-white/70 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold font-display"
                  style={{ background: item.color + '30', color: item.accent }}
                >
                  {item.num}
                </div>
                {/* Decorative dot cluster */}
                <div className="flex gap-1.5 mb-4">
                  {[0, 1, 2].map(j => (
                    <div
                      key={j}
                      className="w-2 h-2 rounded-full"
                      style={{ background: item.color, opacity: 1 - j * 0.25 }}
                    />
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold text-[#3D2F1F] mb-3">{item.title}</h3>
                <p className="text-[15px] text-[#6B5B3E] leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Central quote pull */}
        <FadeIn delay={0.15} className="mt-20 lg:mt-28">
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="text-8xl font-display text-[#D8C9AD]/60 leading-none absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none">"</div>
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#3D2F1F] leading-snug relative z-10 px-8">
              We don't rush the magic. We let it unfold — one pebble, one discovery, one tiny adventure at a time.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-px w-16 bg-[#D8C9AD]" />
            </div>
            <p className="mt-4 text-sm font-medium text-[#B9A17D] tracking-widest uppercase">Rock Tumblerz</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

