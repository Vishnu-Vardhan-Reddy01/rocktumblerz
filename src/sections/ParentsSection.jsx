import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ParentScene } from '../components/Illustrations';

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const initMap = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -32 },
    right: { opacity: 0, x: 32 },
    scale: { opacity: 0, scale: 0.92 },
  };
  const initial = initMap[direction] || initMap.up;
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

const parentValues = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#F2D58A" opacity="0.2" />
        <circle cx="24" cy="20" r="8" fill="#F2D58A" opacity="0.7" />
        <path d="M10 38 Q10 28 24 28 Q38 28 38 38" stroke="#F2D58A" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="20" r="5" fill="#E8C060" />
      </svg>
    ),
    title: "Individual attention",
    body: "Small group sizes mean every child is seen, heard and supported in their unique way.",
    color: "#F2D58A",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#A8B99A" opacity="0.2" />
        <path d="M14 24 Q14 14 24 14 Q34 14 34 24 Q34 34 24 34 Q14 34 14 24Z" stroke="#A8B99A" strokeWidth="2.5" fill="none" />
        <circle cx="24" cy="24" r="6" fill="#A8B99A" opacity="0.7" />
        <path d="M24 14 L24 10 M34 24 L38 24 M24 34 L24 38 M14 24 L10 24" stroke="#A8B99A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "A welcoming environment",
    body: "Soft textures, warm light, natural materials and calm spaces make every visit feel like home.",
    color: "#A8B99A",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#E9A18A" opacity="0.2" />
        <path d="M24 12 L28 20 L38 21 L30 29 L32 39 L24 34 L16 39 L18 29 L10 21 L20 20 Z" fill="#E9A18A" opacity="0.6" />
        <path d="M24 16 L26.5 22 L33 22.5 L28 27 L29.5 34 L24 31 L18.5 34 L20 27 L15 22.5 L21.5 22 Z" fill="#E9A18A" opacity="0.8" />
      </svg>
    ),
    title: "Learning through experiences",
    body: "Every texture touched, plant observed and material explored builds real, lasting understanding.",
    color: "#E9A18A",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#B9A17D" opacity="0.2" />
        {/* Speech bubbles */}
        <path d="M12 18 Q12 12 18 12 L30 12 Q36 12 36 18 Q36 24 30 24 L22 24 L18 28 L18 24 Q12 24 12 18Z" fill="#B9A17D" opacity="0.5" />
        <path d="M18 30 Q18 26 22 26 L32 26 Q36 26 36 30 Q36 34 32 34 L24 34 L24 37 L20 34 Q18 34 18 30Z" fill="#D8C9AD" opacity="0.7" />
      </svg>
    ),
    title: "Open parent communication",
    body: "We believe in a warm, open relationship with families. You are always welcome to connect with us.",
    color: "#B9A17D",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#A8B99A" opacity="0.2" />
        {/* Plant / growth */}
        <path d="M24 36 Q24 22 24 14" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 26 Q16 20 10 12 Q20 16 24 24" fill="#A8B99A" />
        <path d="M24 26 Q32 20 38 12 Q28 16 24 24" fill="#8BAD7A" />
        <circle cx="24" cy="12" r="5" fill="#E9A18A" opacity="0.8" />
        <circle cx="24" cy="12" r="3" fill="#F2D58A" />
        <ellipse cx="24" cy="38" rx="8" ry="4" fill="#C8B898" opacity="0.6" />
      </svg>
    ),
    title: "Exploration & creativity",
    body: "We champion curiosity above all else. Children are encouraged to follow their interests and express themselves freely.",
    color: "#8BAD7A",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#F2D58A" opacity="0.2" />
        {/* Heart made of pebbles */}
        <path d="M24 36 Q14 28 14 22 Q14 16 20 16 Q22 16 24 18 Q26 16 28 16 Q34 16 34 22 Q34 28 24 36Z" fill="#E9A18A" opacity="0.6" />
        <circle cx="20" cy="20" r="3" fill="#E9A18A" opacity="0.8" />
        <circle cx="28" cy="20" r="3" fill="#E9A18A" opacity="0.8" />
        <circle cx="24" cy="30" r="3" fill="#E9A18A" opacity="0.6" />
      </svg>
    ),
    title: "A space you'll love",
    body: "From the moment you walk in, Rock Tumblerz is designed to make children — and parents — feel completely at ease.",
    color: "#E9A18A",
  },
];

export default function ParentsSection() {
  return (
    <section id="parents" className="bg-[#F9F6EF] py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F2D58A]/10 -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#A8B99A]/10 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20 lg:mb-28">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <FadeIn delay={0}>
              <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-4">
                For Parents
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#3D2F1F] leading-tight mb-6">
                You'll love it here too.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-[#6B5B3E] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6">
                We know that leaving your little one somewhere new is a big moment. Rock Tumblerz is designed with trust, warmth and transparency at its heart — for children <em>and</em> the people who love them most.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a
                href="mailto:hello@rocktumblerz.com?subject=I'd love to learn more"
                className="inline-flex items-center gap-2 text-[#E9A18A] font-semibold hover:text-[#D98070] transition-colors duration-200 group"
              >
                Get in touch to learn more
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </FadeIn>
          </div>

          {/* Illustration */}
          <FadeIn delay={0.2} direction="right" className="flex-1 flex justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ParentScene width={420} height={260} className="w-full max-w-md drop-shadow-sm" />
            </motion.div>
          </FadeIn>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parentValues.map((val, i) => (
            <FadeIn key={val.title} delay={i * 0.09} className="group">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex gap-5 p-6 rounded-2xl border border-[#D8C9AD]/40 bg-white/40 hover:bg-white/70 transition-all duration-400 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#3D2F1F] mb-2">{val.title}</h3>
                  <p className="text-[14px] text-[#6B5B3E] leading-relaxed">{val.body}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

