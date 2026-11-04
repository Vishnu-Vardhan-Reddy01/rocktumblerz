import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FinalCTAScene, TinyLeaf, TinyFlower } from '../components/Illustrations';

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#F5F0E7] py-24 lg:py-32 relative overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#D8C9AD]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#D8C9AD]/15" />
      </div>

      {/* Floating decoration */}
      <div className="absolute top-12 left-12 md:left-32 pointer-events-none select-none hidden sm:block">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <TinyLeaf size={36} color="#A8B99A" className="opacity-60" />
        </motion.div>
      </div>
      <div className="absolute top-20 right-16 md:right-40 pointer-events-none select-none hidden md:block">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [3, -3, 3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <TinyFlower size={30} petalColor="#E9A18A" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 left-20 md:left-48 pointer-events-none select-none hidden md:block">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <TinyFlower size={26} petalColor="#F2D58A" />
        </motion.div>
      </div>
      <div className="absolute bottom-16 right-12 md:right-36 pointer-events-none select-none hidden sm:block">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <TinyLeaf size={32} color="#8BAD7A" className="opacity-55 rotate-12" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        {/* Illustration */}
        <FadeIn delay={0.1} className="flex justify-center mb-10">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* <FinalCTAScene width={560} height={220} className="w-full max-w-xl drop-shadow-sm" /> */}
            <img
              src="/assets/hero-section-img.png"
              alt="Handcrafted smiling pebble, turtle and elephant characters surrounded by nature"
              className="block h-[220px] w-full object-contain rounded-[20%]"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.15}>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#3D2F1F] leading-tight tracking-tight mb-4">
            Every little adventure<br />
            <em className="text-[#E9A18A] not-italic">begins</em> somewhere.
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-xl text-[#6B5B3E] max-w-xl mx-auto leading-relaxed mb-10">
            Come discover the wonderful little world of Rock Tumblerz.
          </p>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={0.35} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="mailto:hello@rocktumblerz.com?subject=Plan Your Visit"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="px-10 py-4 bg-[#3D2F1F] text-[#F9F6EF] font-bold text-base rounded-full shadow-xl hover:shadow-2xl hover:bg-[#2D1F0F] transition-all duration-300"
          >
            Plan Your Visit
          </motion.a>
          <motion.a
            href="tel:+10000000000"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="px-10 py-4 bg-[#E9A18A] text-white font-bold text-base rounded-full shadow-md hover:shadow-lg hover:bg-[#D98070] transition-all duration-300"
          >
            Call Us
          </motion.a>
        </FadeIn>

        {/* Contact details */}
        <FadeIn delay={0.45} className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[#8B7355]">
          <a href="mailto:hello@rocktumblerz.com" className="flex items-center gap-2 hover:text-[#3D2F1F] transition-colors duration-200 text-sm font-medium">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <path d="M3 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 6l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            hello@rocktumblerz.com
          </a>
          <a href="tel:+10000000000" className="flex items-center gap-2 hover:text-[#3D2F1F] transition-colors duration-200 text-sm font-medium">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <path d="M5 3h3l1.5 4L8 8.5c1 2 3 4 5 5l1.5-1.5L18 13.5v3C15 18 6 14 5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            +1 (000) 000-0000
          </a>
          <span className="flex items-center gap-2 text-sm font-medium">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Nanakramguda, Hyderabad, India
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

