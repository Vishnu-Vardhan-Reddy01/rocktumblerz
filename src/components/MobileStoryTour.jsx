import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';

const storySlides = [
  {
    id: 1,
    tag: 'Welcome to Rock Tumblerz',
    title: 'A Different Way to Begin.',
    subtitle: 'Children are born to move, explore and discover.',
    description: 'A movement-led preschool where the freedom of play and the purpose of teaching come together through open playscapes.',
    badge: 'Ages 1–4 · Mon–Fri · 9 AM–12 PM',
    bgGradient: 'from-[#3D2F1F] via-[#4A3B2C] to-[#2B1F13]',
    accentColor: '#F2D58A',
    image: '/assets/child-hero-img.png',
    stat: 'Movement is the Curriculum',
  },
  {
    id: 2,
    tag: 'Our Philosophy',
    title: 'An Open Playscape, Not Desks.',
    subtitle: 'Preparing children without rushing childhood.',
    description: 'A climb builds coordination. An obstacle becomes a problem to solve. A conversation becomes an opportunity to connect.',
    badge: 'Freedom + Purpose',
    bgGradient: 'from-[#2D3A2B] via-[#384A36] to-[#1F2B1E]',
    accentColor: '#A8B99A',
    image: '/assets/hero-section-img.png',
    stat: 'Readiness Before Academics',
  },
  {
    id: 3,
    tag: 'Why Movement Matters',
    title: 'From “I Can’t” to “I Did It!”',
    subtitle: 'Confidence begins long before words.',
    description: 'When children move, they build balance, navigate small setbacks, and develop a lasting belief in their own capabilities.',
    badge: 'Body Agency & Resilience',
    bgGradient: 'from-[#4A2E28] via-[#5C3932] to-[#36211C]',
    accentColor: '#E9A18A',
    image: '/assets/child-hero-img.png',
    stat: 'Active Experience > Passive Listening',
  },
  {
    id: 4,
    tag: 'Three Joyful Hours',
    title: 'A Morning of Discovery.',
    subtitle: '9:00 AM – 12:00 PM Daily Rhythm',
    description: 'From tactile hands-at-work and yoga movement to rhyme circles, healthy snacks, purposeful learning, and joyful music closing.',
    badge: 'Predictable & Gentle',
    bgGradient: 'from-[#4D3F28] via-[#5C4D32] to-[#382D1B]',
    accentColor: '#F2D58A',
    stat: '7 Joyful Morning Routines',
  },
  {
    id: 5,
    tag: 'Whole-Child Observation',
    title: 'Every Child Has a Story.',
    subtitle: 'Child Understanding Report',
    description: 'We observe emerging strengths, language, and emotional regulation over time — shared transparently with parents.',
    badge: 'NCERT (NCF-FS) Aligned',
    bgGradient: 'from-[#2B3540] via-[#374452] to-[#1F2730]',
    accentColor: '#A8B99A',
    stat: 'Observing Growth, Not Testing',
  },
  {
    id: 6,
    tag: 'Come See Us in Motion',
    title: 'Visit Our 3 Centres.',
    subtitle: 'Nanakramguda · Kokapet · Kismathpur',
    description: 'Parents and caregivers are warmly welcome to accompany their children. Experience our open playscape firsthand!',
    badge: 'Visits Open Mon–Fri',
    bgGradient: 'from-[#3D2F1F] via-[#54402A] to-[#2B1F13]',
    accentColor: '#E9A18A',
    action: true,
    stat: 'Hyderabad, Telangana',
  },
];

export default function MobileStoryTour({ isOpen, onClose, onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance story slides every 6 seconds if not paused
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev < storySlides.length - 1) return prev + 1;
        return prev; // Stay on last slide so user can click action
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isOpen, isPaused, currentSlide]);

  const nextSlide = () => {
    if (currentSlide < storySlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onClose();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  if (!isOpen) return null;

  const slide = storySlides[currentSlide];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md select-none touch-none">
        
        {/* Story Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full h-[95svh] max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-b ${slide.bgGradient} text-white shadow-2xl flex flex-col justify-between p-6`}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
        >
          {/* Top Bars: Instagram-like Story Progress Bars */}
          <div>
            <div className="flex gap-1.5 mb-4">
              {storySlides.map((s, idx) => (
                <div
                  key={s.id}
                  className="h-1 flex-1 bg-white/25 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => setCurrentSlide(idx)}
                >
                  <div
                    className={`h-full transition-all duration-300 ${
                      idx < currentSlide
                        ? 'w-full bg-white'
                        : idx === currentSlide
                        ? 'w-full bg-[#F2D58A]'
                        : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Header: Brand + Close button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9A18A] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                  {slide.tag}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white/90 transition-colors"
                aria-label="Close stories"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Center: Slide Visual Content */}
          <div className="my-auto py-4">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              {/* Image or Artwork Preview */}
              {slide.image && (
                <div className="w-full h-44 rounded-2xl bg-white/10 p-3 flex items-center justify-center overflow-hidden border border-white/15">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow"
                  />
                </div>
              )}

              {/* Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur-xs border border-white/20" style={{ color: slide.accentColor }}>
                {slide.badge}
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                {slide.title}
              </h2>

              <p className="text-sm font-semibold" style={{ color: slide.accentColor }}>
                {slide.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {slide.description}
              </p>

              {/* Stat or Callout */}
              <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-xs font-medium text-white/90 flex items-center gap-2">
                <Sparkles size={14} style={{ color: slide.accentColor }} />
                <span>{slide.stat}</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Controls / Action */}
          <div className="pt-2">
            {slide.action ? (
              <div className="space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking && onOpenBooking('nanakramguda');
                  }}
                  className="w-full py-3.5 rounded-full bg-[#F2D58A] text-[#3D2F1F] font-bold text-sm shadow-lg hover:bg-[#E8C060] flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  <span>Book a Centre Visit Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-center text-xs text-white/70 hover:text-white"
                >
                  Or explore full website ↓
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`p-2 rounded-full bg-white/10 text-white transition-opacity ${
                    currentSlide === 0 ? 'opacity-30' : 'hover:bg-white/20'
                  }`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="text-xs text-white/60">
                  Tap sides to navigate · Slide {currentSlide + 1} of {storySlides.length}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Left / Right touch tap targets */}
          <div
            className="absolute left-0 top-16 bottom-20 w-1/3 z-10 cursor-pointer"
            onClick={prevSlide}
          />
          <div
            className="absolute right-0 top-16 bottom-20 w-1/3 z-10 cursor-pointer"
            onClick={nextSlide}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
