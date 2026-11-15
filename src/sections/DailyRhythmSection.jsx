import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Clock, Sun, Music, Coffee, BookOpen, Activity, Compass, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const morningSchedule = [
  {
    index: 0,
    time: '9:00 AM',
    title: 'Welcome & Explore',
    description: 'Children arrive, settle into the environment and begin exploring the playscape.',
    category: 'Gentle Arrival',
    icon: Sun,
    color: '#F2D58A',
    accent: '#8B7355',
    ambientVibe: 'Soft footsteps, warm welcomes & gentle settling',
    skyTone: 'from-[#FFF7EB] to-[#F5ECE0]',
    detail: 'A warm greeting where children ease in at their own pace, exploring textures, greet educators, and choose their opening play space.',
  },
  {
    index: 1,
    time: '9:20 AM',
    title: 'Little Hands at Work',
    description: 'Fine-motor experiences, creative activities and opportunities to experiment with materials.',
    category: 'Sensory & Creative',
    icon: PaletteIcon,
    color: '#E9A18A',
    accent: '#7A3B2E',
    ambientVibe: 'Clay squishing, wooden blocks & tactile trial',
    skyTone: 'from-[#FFF1ED] to-[#F8E7DE]',
    detail: 'Pebble stacking, soft clay modelling, leaf prints, water pouring, and open-ended tactile investigation.',
  },
  {
    index: 2,
    time: '9:45 AM',
    title: 'Movement & Body Awareness',
    description: 'Yoga, balancing, climbing, movement games and physical exploration.',
    category: 'Active Movement',
    icon: Activity,
    color: '#A8B99A',
    accent: '#3D6B3E',
    ambientVibe: 'Balancing logs, joyful leaps & body confidence',
    skyTone: 'from-[#F1F6EE] to-[#E5EFE1]',
    detail: 'Gentle toddler yoga stretches, negotiating natural timber obstacles, balancing logs, and discovering body capabilities.',
  },
  {
    index: 3,
    time: '10:20 AM',
    title: 'Rhymes, Stories & Discovery',
    description: 'Language-rich experiences through songs, conversations and imaginative Learning Worlds.',
    category: 'Language Worlds',
    icon: BookOpen,
    color: '#D8C9AD',
    accent: '#6B5B3E',
    ambientVibe: 'Story circle, rhyming melodies & puppet adventures',
    skyTone: 'from-[#FAF5EC] to-[#EFE7D8]',
    detail: 'Interactive storytelling, rhyming songs with percussion, and imaginative roleplay in themed Learning Worlds.',
  },
  {
    index: 4,
    time: '11:00 AM',
    title: 'Snack & Connection',
    description: 'A familiar routine that encourages independence, social interaction and everyday life skills.',
    category: 'Social Routine',
    icon: Coffee,
    color: '#F2D58A',
    accent: '#8B7355',
    ambientVibe: 'Sharing wholesome bites, pouring & friendly chatter',
    skyTone: 'from-[#FFF9EB] to-[#F6EDE0]',
    detail: 'Washing hands, setting small mats, passing healthy snacks, practicing turns, and engaging in cozy table chats.',
  },
  {
    index: 5,
    time: '11:20 AM',
    title: 'Purposeful Learning',
    description: "Short, engaging learning experiences connected to children's interests and developmental abilities.",
    category: 'Focused Guidance',
    icon: Compass,
    color: '#A8B99A',
    accent: '#3D6B3E',
    ambientVibe: 'Curious inquiries, pattern matching & teacher guidance',
    skyTone: 'from-[#F3F8F0] to-[#E4EFE0]',
    detail: 'Targeted early mathematical concepts (sorting, sizing), scientific curiosity (floating vs. sinking), guided by educators.',
  },
  {
    index: 6,
    time: '11:45 AM',
    title: 'Music, Movement & Joy',
    description: 'Dance, free movement and a joyful close to the morning.',
    category: 'Joyful Close',
    icon: Music,
    color: '#E9A18A',
    accent: '#7A3B2E',
    ambientVibe: 'Tambourines, expressive dancing & cheerful farewells',
    skyTone: 'from-[#FFF0EC] to-[#F7E5DD]',
    detail: 'Upbeat rhythm instruments, whole-body expressive dance, wind-down celebration, and joyful transition for home.',
  },
];

function PaletteIcon(props) {
  return (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C21.438 5.89 17.202 2 12 2z" />
    </svg>
  );
}

export default function DailyRhythmSection({ onOpenBooking }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const selectedSlot = morningSchedule[activeIndex];

  // Continuous auto-advancing time-based morning flow
  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = 50;
    const totalStepMs = 4200; // 4.2 seconds per stage
    const stepIncrement = (intervalMs / totalStepMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % morningSchedule.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, activeIndex]);

  const handleSelectSlot = (idx) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const resetFlow = () => {
    setActiveIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section id="daily-rhythm" className="py-20 lg:py-28 bg-[#F5F0E7] relative overflow-hidden">
      {/* Continuous ambient breathing circles */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#F2D58A] blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#E9A18A] blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D8C9AD] shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E9A18A] animate-ping" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B7355]">
                Live Morning Flow Simulator
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              Three little hours. A whole world of experiences.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
              Our mornings are designed around a natural rhythm of movement, exploration, focused learning and joyful interaction.
            </p>
          </FadeIn>

          {/* Interactive Simulation Controls */}
          <FadeIn delay={0.25}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D8C9AD] text-xs font-semibold text-[#3D2F1F] shadow-xs">
                <Clock size={14} className="text-[#E9A18A]" />
                <span>Simulated: {selectedSlot.time}</span>
              </div>

              <button
                onClick={togglePlayback}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3D2F1F] text-white text-xs font-semibold hover:bg-[#2A1F13] transition-all cursor-pointer shadow-xs"
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} fill="currentColor" />}
                <span>{isPlaying ? 'Pause Morning Flow' : 'Play Morning Flow'}</span>
              </button>

              <button
                onClick={resetFlow}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 hover:bg-white border border-[#D8C9AD] text-[#6B5B3E] text-xs font-medium transition-all cursor-pointer"
                title="Restart from 9:00 AM"
              >
                <RotateCcw size={13} />
                <span>Restart</span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Continuous Time Bar along top */}
        <div className="max-w-4xl mx-auto mb-10 hidden sm:block">
          <div className="relative h-2 w-full bg-white/60 rounded-full overflow-hidden border border-[#D8C9AD]/60">
            <motion.div
              className="h-full bg-gradient-to-r from-[#F2D58A] via-[#E9A18A] to-[#A8B99A]"
              style={{
                width: `${((activeIndex + progress / 100) / morningSchedule.length) * 100}%`,
              }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-semibold text-[#8B7355] mt-1.5 px-1">
            <span>9:00 AM Arrival</span>
            <span>10:30 AM Mid-Morning</span>
            <span>12:00 PM Pickup</span>
          </div>
        </div>

        {/* Interactive Schedule Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left: Interactive Timeline list */}
          <div className="lg:col-span-7 space-y-3">
            {morningSchedule.map((slot, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <FadeIn key={slot.time} delay={idx * 0.04}>
                  <motion.div
                    onClick={() => handleSelectSlot(idx)}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className={`relative p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all overflow-hidden ${
                      isSelected
                        ? 'bg-white border-[#3D2F1F] shadow-lg ring-2 ring-[#3D2F1F]/15'
                        : 'bg-white/60 border-[#D8C9AD]/70 hover:bg-white hover:border-[#D8C9AD]'
                    }`}
                  >
                    {/* Active Progress Line in card */}
                    {isSelected && isPlaying && (
                      <div
                        className="absolute bottom-0 left-0 h-1 bg-[#E9A18A] transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    )}

                    <div className="flex items-start gap-3.5">
                      {/* Time Pill with pulsating indicator when active */}
                      <div className="shrink-0 text-center">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-[#3D2F1F] text-[#F9F6EF] border-[#3D2F1F] shadow-xs'
                            : 'bg-[#F5F0E7] text-[#3D2F1F] border-[#D8C9AD]'
                        }`}>
                          <slot.icon size={13} className={isSelected ? 'text-[#F2D58A]' : 'text-[#8B7355]'} />
                          {slot.time}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-display font-bold text-base text-[#3D2F1F] truncate">
                            {slot.title}
                          </h4>
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shrink-0 hidden sm:inline-block"
                            style={{ backgroundColor: `${slot.color}40`, color: '#3D2F1F' }}
                          >
                            {slot.category}
                          </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-[#6B5B3E] leading-relaxed">
                          {slot.description}
                        </p>
                      </div>

                      {/* Active pointer animation */}
                      {isSelected && (
                        <motion.div
                          layoutId="activePointer"
                          className="shrink-0 self-center hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-[#E9A18A]/20 text-[#3D2F1F]"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#E9A18A] animate-ping" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right: Dynamic Spotlight Stage Card with time-shifting ambient tone */}
          <div className="lg:col-span-5 sticky top-24">
            <FadeIn delay={0.15}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSlot.time}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-3xl p-6 sm:p-8 border-2 border-[#D8C9AD] shadow-xl bg-gradient-to-b ${selectedSlot.skyTone} relative overflow-hidden`}
                >
                  {/* Floating decorative sparkle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/40 blur-lg pointer-events-none"
                  />

                  {/* Header bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#D8C9AD]/60 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9A18A] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E9A18A]" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8B7355]">
                        Session Spotlight
                      </span>
                    </div>
                    <span className="text-sm font-bold font-display text-[#3D2F1F] bg-white/90 px-3 py-1 rounded-xl border border-[#D8C9AD] shadow-xs">
                      {selectedSlot.time}
                    </span>
                  </div>

                  {/* Title and Icon */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{ backgroundColor: `${selectedSlot.color}50`, color: '#3D2F1F' }}
                    >
                      <selectedSlot.icon size={26} />
                    </motion.div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B7355]">
                        {selectedSlot.category}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#3D2F1F] leading-tight">
                        {selectedSlot.title}
                      </h3>
                    </div>
                  </div>

                  {/* Verbatim description */}
                  <p className="text-base text-[#3D2F1F] font-medium leading-relaxed mb-4">
                    "{selectedSlot.description}"
                  </p>

                  {/* Deep details */}
                  <div className="p-4 rounded-2xl bg-white/80 border border-[#D8C9AD]/80 text-xs text-[#6B5B3E] space-y-2 shadow-xs backdrop-blur-xs">
                    <span className="font-bold text-[#3D2F1F] block uppercase tracking-wider text-[10px]">
                      Toddler Experience:
                    </span>
                    <p className="leading-relaxed">{selectedSlot.detail}</p>
                    <div className="pt-2 border-t border-[#D8C9AD]/40 flex items-center gap-1.5 text-[11px] text-[#8B7355] italic">
                      <Sparkles size={12} className="text-[#E9A18A]" />
                      <span>{selectedSlot.ambientVibe}</span>
                    </div>
                  </div>

                  {/* Interactive Next Stage scrubber button */}
                  <div className="mt-6 pt-5 border-t border-[#D8C9AD]/60 flex items-center justify-between">
                    <span className="text-xs text-[#8B7355] italic">
                      Step {selectedSlot.index + 1} of {morningSchedule.length}
                    </span>
                    <button
                      onClick={() => handleSelectSlot((activeIndex + 1) % morningSchedule.length)}
                      className="text-xs font-bold text-[#3D2F1F] hover:text-[#9A7B4F] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Next Routine</span>
                      <span>→</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </FadeIn>

            {/* Note verbatim from PDF */}
            <p className="mt-4 text-center text-xs text-[#8B7355] italic">
              * This is an illustrative daily rhythm. Activities and timings may vary.
            </p>
          </div>
        </div>

        {/* Daily Slogan Banner from PDF */}
        <FadeIn delay={0.25}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#3D2F1F] text-[#F9F6EF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
            <div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F2D58A]">
                Freedom to explore. Purpose in every experience.
              </h4>
              <p className="text-xs sm:text-sm text-[#D8C9AD] mt-1">
                Every morning brings together movement, hands-on discovery, and purposeful guided moments.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking && onOpenBooking('nanakramguda')}
              className="px-6 py-3 rounded-full bg-[#F2D58A] text-[#3D2F1F] font-semibold text-xs sm:text-sm hover:bg-[#E8C060] transition-colors shrink-0 cursor-pointer shadow-md"
            >
              Book a Morning Visit
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
