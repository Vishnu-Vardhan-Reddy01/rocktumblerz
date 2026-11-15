import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, Compass, Play, Pause, MapPin, CheckCircle, Sun, Sparkles } from 'lucide-react';
import WaveBackground from '../components/Wavebackground';

export default function HeroSection({ onOpenBooking, onOpenStories }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeMedia, setActiveMedia] = useState('artwork'); // 'artwork' | 'photo' | 'video'
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -35]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F9F6EF] pt-24 sm:pt-28 pb-20 lg:pt-32 lg:pb-28"
    >
      <WaveBackground />

      {/* Decorative ambient continuous breathing orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 right-[-5%] h-[520px] w-[520px] rounded-full bg-[#E9A18A] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-32 h-[480px] w-[480px] rounded-full bg-[#A8B99A] blur-3xl"
        />
        <motion.div
          animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-1/4 h-[380px] w-[380px] rounded-full bg-[#F2D58A] blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Core PDF Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7"
          >
            {/* Top pill badge with continuous live pulse */}
            <div className="mb-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#D8C9AD] bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#6F5B40] shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9A18A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E9A18A]" />
              </span>
              <span className="font-semibold text-[#3D2F1F]">An Exploratory Studio for Toddlers</span>
              <span className="text-[#D8C9AD]">·</span>
              <span className="text-[#8B7355]">Ages 1–4</span>
            </div>

            {/* Main Headline from PDF */}
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-[#3D2F1F] leading-[1.08]"
            >
              A Different Way{' '}
              <span className="relative inline-block text-[#9A7B4F]">
                to Begin.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#F2D58A]"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Sub-lead verbatim from PDF */}
            <p className="mt-6 text-xl sm:text-2xl font-display font-medium text-[#3D2F1F]/90">
              Children are born to move, explore and discover.
            </p>

            {/* Detailed description verbatim from PDF */}
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#6B5B3E]">
              <strong>Rock Tumblerz</strong> is a movement-led preschool where the freedom of play and the purpose of teaching come together. Through our open playscape, imaginative Learning Worlds and thoughtfully designed learning experiences, children explore, make discoveries and develop foundations for future learning.
            </p>

            {/* Continuous dynamic schedule & centre indicator */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-medium text-[#8B7355]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 border border-[#D8C9AD]/80 shadow-2xs">
                <Sun size={14} className="text-[#F2D58A]" />
                Monday–Friday
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 border border-[#D8C9AD]/80 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E9A18A]" />
                9:00 AM – 12:00 PM
              </span>
              <a
                href="#centres"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 border border-[#D8C9AD]/80 text-[#3D2F1F] font-semibold hover:border-[#3D2F1F] shadow-2xs transition-colors"
              >
                <MapPin size={13} className="text-[#A8B99A]" />
                3 Centres in Hyderabad →
              </a>
            </div>

            {/* Mobile-Exclusive Quick Tour Card: Avoid scroll fatigue */}
            {onOpenStories && (
              <div className="lg:hidden w-full mt-6 p-3.5 rounded-2xl bg-gradient-to-r from-[#F2D58A]/35 via-[#E9A18A]/25 to-[#A8B99A]/30 border-2 border-[#D8C9AD] shadow-xs text-left flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#3D2F1F] text-[#F2D58A] flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles size={18} className="animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B7355] block">
                      Short on time?
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#3D2F1F]">
                      60-Sec Visual Story Tour
                    </h4>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenStories}
                  className="px-3.5 py-1.5 rounded-full bg-[#3D2F1F] text-[#F9F6EF] text-xs font-bold shadow-xs hover:bg-[#2A1F13] transition-transform active:scale-95 cursor-pointer"
                >
                  Play ⚡
                </button>
              </div>
            )}

            {/* CTAs matching PDF */}
            <div className="mt-6 sm:mt-8 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking && onOpenBooking('nanakramguda')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#3D2F1F] px-8 py-4 text-base font-semibold text-[#F9F6EF] shadow-md hover:bg-[#2A1F13] hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <Calendar size={18} className="text-[#F2D58A]" />
                <span>Book a Centre Visit</span>
              </motion.button>

              <a
                href="#philosophy"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#philosophy');
                  if (target) {
                    const y = target.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#3D2F1F]/30 bg-white/80 px-8 py-4 text-base font-semibold text-[#3D2F1F] hover:bg-white hover:border-[#3D2F1F] transition-all duration-200"
              >
                <Compass size={18} className="text-[#8B7355]" />
                <span>Explore Our Approach</span>
              </a>
            </div>

            {/* Core PDF Tagline */}
            <div className="mt-8 pt-6 border-t border-[#D8C9AD]/60 w-full flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#3D2F1F]">
              <span className="text-[#E9A18A]">●</span>
              <span>Movement is the Curriculum.</span>
              <span className="text-[#B9A17D]">|</span>
              <span>Readiness Before Academics.</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Studio Media Showcase with continuous floating companion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: heroImageY }}
            className="lg:col-span-5 relative"
          >
            {/* Interactive media switcher pills */}
            <div className="flex items-center justify-center lg:justify-end gap-2 mb-3">
              <span className="text-xs font-bold text-[#8B7355] mr-1 hidden sm:inline">Explore Visuals:</span>
              <button
                onClick={() => { setActiveMedia('artwork'); setIsPlaying(false); }}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  activeMedia === 'artwork'
                    ? 'bg-[#3D2F1F] text-white shadow-xs'
                    : 'bg-white/80 text-[#6B5B3E] hover:bg-white'
                }`}
              >
                Handcrafted Art
              </button>
              <button
                onClick={() => { setActiveMedia('photo'); setIsPlaying(false); }}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  activeMedia === 'photo'
                    ? 'bg-[#3D2F1F] text-white shadow-xs'
                    : 'bg-white/80 text-[#6B5B3E] hover:bg-white'
                }`}
              >
                Studio Space
              </button>
              <button
                onClick={() => { setActiveMedia('video'); }}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                  activeMedia === 'video'
                    ? 'bg-[#E9A18A] text-white shadow-xs'
                    : 'bg-white/80 text-[#6B5B3E] hover:bg-white'
                }`}
              >
                <Play size={10} fill="currentColor" />
                Video Sneak Peek
              </button>
            </div>

            {/* Media frame with soft pebble curve */}
            <div className="relative rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-[#EFE8D8] aspect-[4/3] sm:aspect-[4/3.2]">
              {activeMedia === 'artwork' && (
                <div className="relative w-full h-full p-4 flex items-center justify-center bg-gradient-to-b from-[#F5F0E7] to-[#EAE0D0]">
                  <motion.img
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    src="/assets/child-hero-img.png"
                    alt="Handcrafted pebble toddler characters exploring the open playscape"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                  <div className="absolute bottom-3 left-4 right-4 bg-white/85 backdrop-blur-md rounded-2xl p-2.5 text-center text-xs text-[#3D2F1F] border border-white/60 shadow-sm">
                    <span className="font-display italic font-semibold">"Protecting the extraordinary experience of being little."</span>
                  </div>
                </div>
              )}

              {activeMedia === 'photo' && (
                <div className="relative w-full h-full">
                  <img
                    src="/assets/hero-section-img.png"
                    alt="Toddler engaging in sensory and movement playscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs text-center drop-shadow">
                    Open playscape where movement, touch and inquiry thrive.
                  </div>
                </div>
              )}

              {activeMedia === 'video' && (
                <div className="relative w-full h-full bg-black">
                  <video
                    ref={videoRef}
                    src="/assets/rocktumblerz-hero.mp4"
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    muted
                  />
                  <button
                    onClick={toggleVideo}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-[#3D2F1F] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                  </button>
                  <div className="absolute bottom-3 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl py-1 px-3 text-center text-[11px] text-white">
                    {isPlaying ? 'Playing studio sneak peek' : 'Tap to watch children in motion'}
                  </div>
                </div>
              )}

              {/* Continuous floating badge: Open Playscape */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-1, 2, -1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 bg-white border border-[#D8C9AD] shadow-lg rounded-2xl px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-[#3D2F1F] hidden sm:flex"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#A8B99A]" />
                Open Playscape
              </motion.div>

              {/* Continuous floating badge: Learning Worlds */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [2, -2, 2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -right-3 bg-white border border-[#D8C9AD] shadow-lg rounded-2xl px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-[#3D2F1F] hidden sm:flex"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#E9A18A]" />
                Learning Worlds
              </motion.div>
            </div>

            {/* Feature quick badges under image */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white/85 backdrop-blur-xs rounded-2xl p-3 border border-[#D8C9AD]/60 shadow-xs flex items-start gap-2.5"
              >
                <CheckCircle size={18} className="text-[#A8B99A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2F1F]">No Desks, Just Freedom</h4>
                  <p className="text-[11px] text-[#6B5B3E] leading-tight mt-0.5">Built around an open movement playscape</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-white/85 backdrop-blur-xs rounded-2xl p-3 border border-[#D8C9AD]/60 shadow-xs flex items-start gap-2.5"
              >
                <CheckCircle size={18} className="text-[#E9A18A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2F1F]">Purposeful Teaching</h4>
                  <p className="text-[11px] text-[#6B5B3E] leading-tight mt-0.5">Short, intentional educator-guided moments</p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
