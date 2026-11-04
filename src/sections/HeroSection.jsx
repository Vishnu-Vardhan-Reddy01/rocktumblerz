import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import WaveBackground from '../components/WaveBackground';

const EASE = [0.22, 1, 0.36, 1];

const HEADLINE = [
  { text: 'Little hands.', accent: false },
  { text: 'Big discoveries.', accent: true },
  { text: 'Endless possibilities.', accent: false },
];

const VALUES = ['Nature-led', 'Creative play', 'Sensory-rich', 'Toddler-first'];

export default function HeroSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // One quiet scroll effect: the image drifts up slightly as you scroll away.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -40]);

  // Single orchestrated page-load sequence. Skipped for reduced-motion users.
  const enter = (delay = 0, y = 16) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F9F6EF]"
    >
      <WaveBackground />
      {/* Static, soft background tone — no movement */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#E9A18A]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[460px] w-[460px] rounded-full bg-[#A8B99A]/12 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-12 px-6 pb-28 pt-28 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-32">
        {/* ── Left: content ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            {...enter(0.1, 8)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8C9AD] bg-white/70 px-4 py-1.5 text-sm font-medium text-[#6F5B40]"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#E9A18A]" />
            Exploratory studio for toddlers
          </motion.p>

          <h1
            id="hero-heading"
            className="font-display text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl xl:text-7xl"
          >
            {HEADLINE.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${line.accent ? 'text-[#9A7B4F]' : 'text-[#3D2F1F]'}`}
                  {...(reduceMotion
                    ? {}
                    : {
                        initial: { y: '105%' },
                        animate: { y: 0 },
                        transition: { duration: 0.85, delay: 0.2 + i * 0.12, ease: EASE },
                      })}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...enter(0.7)}
            className="mt-6 max-w-[34rem] text-lg leading-relaxed text-[#6F5B40] sm:text-xl"
          >
            A space where curiosity leads the way, imagination takes flight, and every little
            discovery becomes a big adventure.
          </motion.p>

          <motion.div
            {...enter(0.85)}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <a
              href="mailto:hello@rocktumblerz.com?subject=Book a visit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#3D2F1F] px-8 py-3.5 text-base font-semibold text-[#F9F6EF] shadow-sm transition-colors duration-200 hover:bg-[#2A1F13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D2F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F6EF] sm:w-auto"
            >
              Book a visit
            </a>
            <a
              href="#about"
              onClick={(e) => {
                const target = document.querySelector('#about');
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
                }
              }}
              className="inline-flex w-full items-center justify-center rounded-full border border-[#3D2F1F]/25 bg-transparent px-8 py-3.5 text-base font-semibold text-[#3D2F1F] transition-colors duration-200 hover:border-[#3D2F1F]/60 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D2F1F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F6EF] sm:w-auto"
            >
              Explore our studio
            </a>
          </motion.div>

          <motion.ul
            {...enter(1.0, 0)}
            aria-label="What we value"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-medium text-[#6F5B40] lg:justify-start"
          >
            {VALUES.map((value, i) => (
              <li key={value} className="flex items-center gap-6">
                {value}
                {i < VALUES.length - 1 && (
                  <span aria-hidden="true" className="hidden h-4 w-px bg-[#D8C9AD] sm:block" />
                )}
              </li>
            ))}
          </motion.ul>
        </div>
                  
        {/* Right: Image */}
        <motion.figure
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.97 },
                animate: { opacity: 1, scale: 1 },
                transition: {
                  duration: 1,
                  delay: 0.35,
                  ease: EASE,
                },
              })}
          className="mx-auto w-full max-w-xl lg:max-w-none"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative w-full"
          >
            <img
              src="/assets/child-hero-img.png"
              alt="Handcrafted smiling pebble, turtle and elephant characters surrounded by nature"
              className="block h-auto w-full object-contain rounded-[20%]"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
           <figcaption className="mx-auto mt-8 max-w-sm text-center font-display text-lg italic leading-snug text-[#3D2F1F] lg:text-left">
                    Protecting the extraordinary experience of being little.
            </figcaption>
        </motion.figure>
            
      </div>

      {/* Static divider into the next section */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-20 h-[60px] leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-full w-full" fill="#F5F0E7">
          <path d="M0,36 C240,60 480,12 720,32 C960,52 1200,16 1440,34 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

