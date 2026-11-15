import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Activity, Palette, MessageSquare, Heart, Compass, CheckCircle2 } from 'lucide-react';

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

const foundations = [
  {
    id: 'body-confidence',
    num: '01',
    title: 'Body Confidence',
    summary: 'Strength, balance, coordination and confidence in movement.',
    description: 'Developing strength, balance, coordination and body awareness through movement, while gradually building the confidence to explore and move independently.',
    icon: Activity,
    color: '#E9A18A',
    accent: '#7A3B2E',
    tag: 'Physical Mastery',
    howWeNurture: 'Climbing logs, balance beams, open running playscape, sensory stepping stones, and body-awareness games.',
  },
  {
    id: 'creativity',
    num: '02',
    title: 'Creativity',
    summary: 'Imagination, curiosity, experimentation and problem-solving.',
    description: 'Imagining possibilities, exploring ideas, experimenting, asking questions and discovering different ways to approach challenges and solve problems.',
    icon: Palette,
    color: '#F2D58A',
    accent: '#8B7355',
    tag: 'Open-Ended Inquiry',
    howWeNurture: 'Clay work, natural dye painting, loose-parts pebble construction, sensory tubs, and imaginative Learning Worlds.',
  },
  {
    id: 'language',
    num: '03',
    title: 'Language',
    summary: 'Listening, understanding, expression and communication.',
    description: 'Learning to listen, understand, build vocabulary, express thoughts and feelings, and communicate and connect with others.',
    icon: MessageSquare,
    color: '#A8B99A',
    accent: '#3D6B3E',
    tag: 'Expressive Communication',
    howWeNurture: 'Rhyme circles, conversational storytelling, collaborative play dialogues, and rich descriptive educator language.',
  },
  {
    id: 'emotional-regulation',
    num: '04',
    title: 'Emotional Regulation',
    summary: 'Recognising feelings, building relationships and finding calm with support.',
    description: 'Beginning to recognise and express feelings, build relationships, navigate emotions and gradually develop ways to find calm with guidance and support.',
    icon: Heart,
    color: '#D8C9AD',
    accent: '#6B5B3E',
    tag: 'Social Harmony',
    howWeNurture: 'Gentle co-regulation spaces, cozy reading nooks, supportive educator validation, and predictable daily rhythms.',
  },
  {
    id: 'focus-attention',
    num: '05',
    title: 'Focus & Attention',
    summary: 'Observation, meaningful engagement and gradually sustaining attention.',
    description: 'Learning to observe, engage in meaningful activities, persist through challenges and gradually develop the ability to sustain attention.',
    icon: Compass,
    color: '#B9A17D',
    accent: '#5B4520',
    tag: 'Deep Engagement',
    howWeNurture: 'Self-selected inquiry stations, uninterrupted sensory investigations, and hands-on trial without forced seatwork.',
  },
  {
    id: 'independence',
    num: '06',
    title: 'Independence',
    summary: 'Making choices, attempting challenges, participating in routines and learning when to seek help.',
    description: 'Learning to make simple choices, attempt age-appropriate tasks, participate in familiar routines and communicate when help is needed, while gradually developing the confidence to do more for themselves.',
    icon: Sparkles,
    color: '#E9A18A',
    accent: '#7A3B2E',
    tag: 'Life Agency',
    howWeNurture: 'Snack routines, selecting materials, managing personal belongings, and attempting challenges before asking for support.',
  },
];

export default function SixFoundationsSection() {
  const [selectedFoundation, setSelectedFoundation] = useState(foundations[0]);

  return (
    <section id="foundations" className="py-20 lg:py-28 bg-[#F5F0E7] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#A8B99A]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#F2D58A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              Growing in Every Way
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              Six interconnected areas we nurture in early childhood.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
              At Rock Tumblerz, we nurture these six interconnected areas through age-appropriate experiences, recognising that <strong>every child develops at their own pace</strong>.
            </p>
          </FadeIn>
        </div>

        {/* 6 Foundation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {foundations.map((f, i) => {
            const Icon = f.icon;
            const isSelected = selectedFoundation.id === f.id;
            return (
              <FadeIn key={f.id} delay={i * 0.08}>
                <motion.div
                  onClick={() => setSelectedFoundation(f)}
                  whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(61,47,31,0.08)' }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className={`relative p-7 rounded-3xl bg-white border cursor-pointer transition-all h-full flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#3D2F1F] ring-2 ring-[#3D2F1F]/15 shadow-md'
                      : 'border-[#D8C9AD]/70 hover:border-[#3D2F1F]/40'
                  }`}
                >
                  <div>
                    {/* Top row: Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-sm font-bold text-[#B9A17D] tracking-wider">
                        {f.num}
                      </span>
                      <span
                        className="w-10 h-10 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${f.color}35`, color: '#3D2F1F' }}
                      >
                        <Icon size={20} />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-[#3D2F1F] mb-2">
                      {f.title}
                    </h3>

                    {/* Summary from PDF */}
                    <p className="text-xs sm:text-[13px] font-semibold text-[#8B7355] mb-3">
                      {f.summary}
                    </p>

                    {/* Full Description from PDF */}
                    <p className="text-xs sm:text-sm text-[#6B5B3E] leading-relaxed">
                      {f.description}
                    </p>
                  </div>

                  {/* Bottom detail pill */}
                  <div className="mt-6 pt-4 border-t border-[#D8C9AD]/40 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#8B7355]">{f.tag}</span>
                    <span className="font-bold text-[#3D2F1F] flex items-center gap-1">
                      {isSelected ? 'Viewing' : 'Tap to explore'} →
                    </span>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* Selected Foundation Deep-Dive Panel */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C9AD] shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#D8C9AD]/50">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${selectedFoundation.color}40`, color: '#3D2F1F' }}
                >
                  <selectedFoundation.icon size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#8B7355] uppercase tracking-wider">
                      Foundation {selectedFoundation.num}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#F5F0E7] text-[#3D2F1F] font-semibold">
                      {selectedFoundation.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#3D2F1F] mt-0.5">
                    {selectedFoundation.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-[#8B7355] italic">
                Nurturing the child holistically before formal academics.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              <div className="lg:col-span-7">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B7355] mb-2">
                  Developmental Focus
                </h4>
                <p className="text-base text-[#3D2F1F] leading-relaxed">
                  {selectedFoundation.description}
                </p>
                <p className="mt-3 text-sm text-[#6B5B3E] leading-relaxed">
                  Young children develop at their own individual tempo. Rather than pushing benchmarks prematurely, we create rich exploratory conditions where toddlers naturally strengthen this capability through physical engagement and guided trial.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#F9F6EF] p-5 rounded-2xl border border-[#D8C9AD]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B7355] mb-2">
                  In Our Playscape & Learning Worlds:
                </h4>
                <p className="text-sm text-[#3D2F1F] leading-relaxed font-medium">
                  {selectedFoundation.howWeNurture}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#8B7355]">
                  <CheckCircle2 size={14} className="text-[#3D6B3E]" />
                  <span>Observed & documented in our Child Understanding Report</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Highlight Banner from PDF */}
        <FadeIn delay={0.25}>
          <div className="p-8 sm:p-10 rounded-3xl bg-[#3D2F1F] text-[#F9F6EF] text-center shadow-lg">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F2D58A] mb-2">
              Foundations Before Formal Schooling
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">
              This is readiness before academics.
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#D8C9AD] leading-relaxed">
              School readiness involves far more than sitting at a desk. Communication, emotional regulation, physical balance, and active curiosity form the bedrock of genuine lifelong learning.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
