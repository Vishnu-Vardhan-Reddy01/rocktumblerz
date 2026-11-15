import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Footprints, Play, Pause } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  {
    step: '01',
    title: 'Physical Control & Balance',
    detail: 'As children move, their bodies become stronger, balance improves, and they gain greater control over their movements.',
    badge: 'Body Awareness',
    color: '#E9A18A',
    actionText: 'Climbing slopes, walking edges & testing footing',
  },
  {
    step: '02',
    title: 'Independent Attempt',
    detail: 'Things that once required adult assistance gradually become challenges children can attempt on their own.',
    badge: 'Autonomy',
    color: '#F2D58A',
    actionText: 'Letting go of hands, stepping across logs',
  },
  {
    step: '03',
    title: 'Navigating Hesitation',
    detail: 'A child who hesitates at a challenge returns to it, tries a different approach, and discovers how to adapt and persist.',
    badge: 'Resilience',
    color: '#A8B99A',
    actionText: 'Pausing, re-balancing & trying another route',
  },
  {
    step: '04',
    title: 'The Breakthrough',
    detail: 'Children begin to recognise what they are capable of and discover that they can learn, improve, and overcome difficulties.',
    badge: '“I did it!”',
    color: '#B9A17D',
    actionText: 'Standing tall, beaming with authentic pride',
  },
];

export default function MovementMattersSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Time-based continuous cadence through the movement milestones
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <section id="movement" className="py-20 lg:py-28 bg-[#F9F6EF] relative overflow-hidden">
      {/* Decorative continuous floating background accents */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#E9A18A] blur-3xl pointer-events-none -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#F2D58A] blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              Why Movement Matters
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              When children move, much more than their bodies develop.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-xl sm:text-2xl font-display font-medium text-[#9A7B4F]">
              Confidence begins long before a child can put it into words.
            </p>
          </FadeIn>
        </div>

        {/* Verbatim narrative from PDF */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <FadeIn delay={0.15} className="lg:col-span-6 space-y-5 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
            <p>
              In the earliest years, children begin developing a sense of who they are and what they are capable of. Much of this understanding grows through movement, exploration and their own experiences.
            </p>
            <p>
              As children move, their bodies become stronger, their balance improves and they gain greater control over their movements. Things that once required help gradually become things they can attempt independently.
            </p>
            <p className="font-medium text-[#3D2F1F]">
              A child who initially hesitates at a challenge may return to it, try a different approach and eventually succeed. What develops through these experiences goes beyond physical ability. Children begin to recognise what they are capable of and discover that they can learn, improve and overcome difficulties.
            </p>
            <p>
              Even our imaginative <strong>Learning Worlds</strong> are designed around movement, allowing children to encounter new ideas and concepts through active experiences rather than simply sitting and listening.
            </p>
          </FadeIn>

          {/* Interactive Kinetic Journey Card */}
          <FadeIn delay={0.25} className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8C9AD] shadow-lg relative overflow-hidden">
              
              {/* Top Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D8C9AD]/50 mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D2F1F] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D2F1F]" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B7355]">
                    The Arc of Physical Confidence
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    className="p-1.5 rounded-full hover:bg-[#F5F0E7] text-[#8B7355] transition-colors cursor-pointer"
                    title={autoPlay ? 'Pause auto-flow' : 'Resume auto-flow'}
                  >
                    {autoPlay ? <Pause size={13} /> : <Play size={13} fill="currentColor" />}
                  </button>
                  <span className="text-xs font-semibold text-[#A8B99A] bg-[#A8B99A]/15 px-2.5 py-1 rounded-full">
                    Stage {activeStep + 1} of 4
                  </span>
                </div>
              </div>

              {/* Connected Step Progress Bar */}
              <div className="grid grid-cols-4 gap-2 mb-6 relative">
                {steps.map((st, i) => (
                  <button
                    key={st.step}
                    onClick={() => { setActiveStep(i); setAutoPlay(false); }}
                    className={`h-2.5 rounded-full transition-all cursor-pointer relative overflow-hidden ${
                      activeStep === i
                        ? 'bg-[#3D2F1F] ring-2 ring-[#3D2F1F]/20'
                        : i < activeStep
                        ? 'bg-[#A8B99A]'
                        : 'bg-[#D8C9AD]/40'
                    }`}
                    title={st.title}
                  >
                    {activeStep === i && autoPlay && (
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-[#F2D58A]/50"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Active Step Showcase with smooth animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 rounded-2xl bg-[#F5F0E7]/70 border border-[#D8C9AD]/80"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-display font-bold text-[#9A7B4F]">
                      {steps[activeStep].step}
                    </span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${steps[activeStep].color}35`, color: '#3D2F1F' }}
                    >
                      {steps[activeStep].badge}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-[#3D2F1F] mb-2">
                    {steps[activeStep].title}
                  </h4>

                  <p className="text-sm text-[#6B5B3E] leading-relaxed mb-3">
                    {steps[activeStep].detail}
                  </p>

                  <div className="pt-2 text-xs text-[#8B7355] flex items-center gap-1.5 font-medium">
                    <Footprints size={14} className="text-[#E9A18A]" />
                    <span>In the playscape: {steps[activeStep].actionText}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mini selector pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {steps.map((s, idx) => (
                  <button
                    key={s.title}
                    onClick={() => { setActiveStep(idx); setAutoPlay(false); }}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-[#3D2F1F] text-white border-[#3D2F1F] shadow-xs'
                        : 'bg-white text-[#6B5B3E] border-[#D8C9AD] hover:bg-[#F9F6EF]'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8C9AD]/50 flex items-center justify-between text-xs text-[#8B7355]">
                <span>Active experience &gt; passive listening</span>
                <span className="font-semibold text-[#3D2F1F]">Lifelong Persistence</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Standout Quote Banner from PDF with continuous shimmer border */}
        <FadeIn delay={0.2}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F2D58A]/35 via-[#E9A18A]/25 to-[#A8B99A]/30 border-2 border-[#D8C9AD] text-center shadow-md relative overflow-hidden">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#8B7355] block mb-3">
              The Heart of Rock Tumblerz
            </span>
            <h3 className="font-display text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#3D2F1F] leading-tight">
              A child's belief in <span className="text-[#9A7B4F]">“I can”</span> begins with the experience of{' '}
              <span className="text-[#3D2F1F] underline decoration-[#E9A18A] decoration-wavy">“I did it.”</span>
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#6B5B3E]">
              Through repeated encounters with challenges they can conquer at their own pace, toddlers build an authentic inner confidence that no verbal lecture can bestow.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
