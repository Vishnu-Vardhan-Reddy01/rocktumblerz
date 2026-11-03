import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { HeroIllustration, TinyLeaf, TinyFlower } from '../components/Illustrations';

// Floating decorative element
function FloatingDecor({ children, delay = 0, amplitude = 12, className = "" }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const illustrationY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#F9F6EF]"
    >
      {/* Subtle background texture rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[900px] h-[900px] rounded-full border border-[#D8C9AD]/20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[650px] h-[650px] rounded-full border border-[#D8C9AD]/15" />
      </div>

      {/* Floating decorative leaves - top left */}
      <div className="absolute top-32 left-8 md:left-20 pointer-events-none select-none hidden sm:block">
        <FloatingDecor delay={0.2} amplitude={10}>
          <TinyLeaf size={38} color="#A8B99A" className="opacity-70" />
        </FloatingDecor>
      </div>
      <div className="absolute top-52 left-16 md:left-36 pointer-events-none select-none hidden sm:block">
        <FloatingDecor delay={1.2} amplitude={8}>
          <TinyLeaf size={24} color="#8BAD7A" className="opacity-50" />
        </FloatingDecor>
      </div>
      {/* Top right */}
      <div className="absolute top-28 right-10 md:right-24 pointer-events-none select-none hidden sm:block">
        <FloatingDecor delay={0.7} amplitude={12}>
          <TinyFlower size={32} petalColor="#F2D58A" />
        </FloatingDecor>
      </div>
      <div className="absolute top-48 right-6 md:right-16 pointer-events-none select-none hidden md:block">
        <FloatingDecor delay={1.8} amplitude={9}>
          <TinyLeaf size={28} color="#A8B99A" className="opacity-60 -rotate-45" />
        </FloatingDecor>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-4 min-h-screen">
        {/* Left: Text content */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-[52%] pt-8 lg:pt-0"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2D58A]/40 border border-[#F2D58A]/60 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E9A18A] animate-pulse" />
            <span className="text-[13px] font-semibold text-[#8B7355] tracking-wide uppercase">Exploratory Studio for Toddlers</span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#3D2F1F] leading-[1.05] tracking-tight"
            >
              Little hands.
              <br />
              <em className="text-[#B9A17D] not-italic">Big</em> discoveries.
              <br />
              Endless possibilities.
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="text-lg sm:text-xl text-[#8B7355] leading-relaxed max-w-lg mt-3 mb-8"
          >
            A space where curiosity leads the way, imagination takes flight, and every little discovery becomes a big adventure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#3D2F1F] text-[#F9F6EF] font-semibold text-base rounded-full shadow-lg hover:shadow-xl hover:bg-[#2D1F0F] transition-all duration-300 cursor-pointer"
            >
              Explore Our World
            </motion.button>
            <motion.a
              href="mailto:hello@rocktumblerz.com?subject=Book a Visit"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="px-8 py-4 bg-[#E9A18A] text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg hover:bg-[#D98070] transition-all duration-300"
            >
              Book a Visit
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{ opacity }}
            className="mt-12 hidden lg:flex items-center gap-3 text-[#B9A17D]"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-9 border-2 border-[#B9A17D]/50 rounded-full flex items-start justify-center pt-1"
            >
              <div className="w-1.5 h-1.5 bg-[#B9A17D] rounded-full" />
            </motion.div>
            <span className="text-sm font-medium opacity-70">Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          style={{ y: illustrationY }}
          className="flex-1 relative flex items-end justify-center lg:justify-end min-h-[340px] sm:min-h-[460px] lg:min-h-[560px] w-full lg:w-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          {/* Subtle glow behind illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-[#F2D58A]/20 blur-3xl" />
          </div>

          <HeroIllustration className="relative z-10 w-full max-w-[520px] lg:max-w-none lg:w-[580px] xl:w-[640px] drop-shadow-sm" />
        </motion.div>
      </div>

      {/* Wavy bottom edge */}
      <div className="relative z-10 w-full overflow-hidden -mt-4" style={{ height: 60 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" fill="#F5F0E7">
          <path d="M0,40 C240,65 480,20 720,40 C960,60 1200,20 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

