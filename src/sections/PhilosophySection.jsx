import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Check, X } from 'lucide-react';

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

const philosophyMoments = [
  {
    title: 'A Climb',
    outcome: 'Opportunities to develop coordination and confidence.',
    detail: 'When children scale gentle inclines or balance logs, they calibrate strength and bodily self-assurance in real time.',
    color: '#E9A18A',
    bg: 'rgba(233, 161, 138, 0.12)',
    icon: '🧗',
  },
  {
    title: 'An Obstacle',
    outcome: 'Becomes a problem to solve.',
    detail: 'Rather than stepping in to clear every hurdle, educators observe and guide as children negotiate routes, experiment, and succeed.',
    color: '#F2D58A',
    bg: 'rgba(242, 213, 138, 0.15)',
    icon: '🧩',
  },
  {
    title: 'A Conversation',
    outcome: 'An opportunity to communicate, listen and connect.',
    detail: 'Language is nurtured naturally in shared exploration, storytelling moments, and cooperative discovery with peers and guides.',
    color: '#A8B99A',
    bg: 'rgba(168, 185, 154, 0.14)',
    icon: '💬',
  },
];

export default function PhilosophySection() {
  const [activeTab, setActiveTab] = useState('tumblerz');

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#F5F0E7] relative overflow-hidden">
      {/* Subtle organic background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F2D58A]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#A8B99A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              Our Philosophy
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              A preschool designed around how young children learn.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-5 text-lg sm:text-xl font-display italic text-[#8B7355]">
              "Have you ever noticed how naturally young children are drawn to movement?"
            </p>
          </FadeIn>
        </div>

        {/* Narrative 2-column layout verbatim from PDF */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <FadeIn delay={0.15} className="lg:col-span-6 space-y-5 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
            <p>
              They get up, move around, reach for things, investigate something that catches their attention and discover something new along the way.
            </p>
            <p className="font-medium text-[#3D2F1F]">
              This instinct to move and explore is an important part of how young children learn about the world. At Rock Tumblerz, we believe early education should work with this instinct, rather than constantly asking children to set it aside.
            </p>
            <p>
              Our preschool is built around an open playscape rather than conventional classrooms. Here, children climb, balance, explore, experiment and interact with one another, discovering what their bodies can do and what their minds can imagine.
            </p>
            <p className="text-sm sm:text-base text-[#8B7355] italic bg-white/60 p-4 rounded-2xl border border-[#D8C9AD]">
              Play and purposeful teaching complement one another, each contributing something important to a child's development.
            </p>
          </FadeIn>

          <FadeIn delay={0.25} className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#D8C9AD] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-2xl bg-[#E9A18A]/20 text-[#3D2F1F]">
                  <Sparkles size={22} className="text-[#E9A18A]" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#3D2F1F]">Everyday Moments at Play</h3>
                  <p className="text-xs text-[#8B7355]">How daily exploration turns into foundational growth</p>
                </div>
              </div>

              <div className="space-y-4">
                {philosophyMoments.map((m) => (
                  <motion.div
                    key={m.title}
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="p-4 rounded-2xl border border-[#D8C9AD]/60 transition-all cursor-default"
                    style={{ backgroundColor: m.bg }}
                  >
                    <div className="flex items-start gap-3.5">
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-2xl shrink-0 mt-0.5"
                      >
                        {m.icon}
                      </motion.span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-base text-[#3D2F1F]">{m.title}</h4>
                          <span className="text-xs font-semibold text-[#8B7355]">— {m.outcome}</span>
                        </div>
                        <p className="mt-1 text-xs text-[#6B5B3E] leading-relaxed">{m.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8C9AD]/60 flex items-center justify-between text-xs font-medium text-[#8B7355]">
                <span>Purposeful guidance in every moment</span>
                <span className="text-[#3D2F1F] font-semibold">Freedom + Structure</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Interactive Comparison: Conventional Classroom vs. Rock Tumblerz */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C9AD] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B9A17D]">Rethinking Early Education</span>
                <h3 className="font-display text-2xl font-bold text-[#3D2F1F] mt-1">
                  How Rock Tumblerz Compares
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-[#F5F0E7] p-1.5 rounded-full border border-[#D8C9AD]/60 self-start sm:self-auto">
                <button
                  onClick={() => setActiveTab('tumblerz')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'tumblerz' ? 'bg-[#3D2F1F] text-white shadow-sm' : 'text-[#6B5B3E] hover:text-[#3D2F1F]'
                  }`}
                >
                  Rock Tumblerz Studio
                </button>
                <button
                  onClick={() => setActiveTab('conventional')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'conventional' ? 'bg-[#8B7355] text-white shadow-sm' : 'text-[#6B5B3E] hover:text-[#3D2F1F]'
                  }`}
                >
                  Conventional Preschool
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rock Tumblerz Column */}
              <div className={`p-6 rounded-2xl border transition-all ${
                activeTab === 'tumblerz' ? 'bg-[#A8B99A]/15 border-[#A8B99A] ring-2 ring-[#A8B99A]/20' : 'bg-[#F9F6EF] border-[#D8C9AD]/60 opacity-70'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#A8B99A]" />
                  <h4 className="font-display font-bold text-lg text-[#3D2F1F]">Rock Tumblerz Exploratory Studio</h4>
                </div>
                <ul className="space-y-3 text-sm text-[#6B5B3E]">
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#3D6B3E] shrink-0 mt-0.5" />
                    <span><strong>Open Playscape:</strong> Natural movement, balancing, climbing, and open sensory exploration without rigid row seating.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#3D6B3E] shrink-0 mt-0.5" />
                    <span><strong>Movement as Curriculum:</strong> Learning happens through active physical discovery, spatial awareness, and hands-on trial.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#3D6B3E] shrink-0 mt-0.5" />
                    <span><strong>Short Guided Moments:</strong> Educators observe and weave in rich language, early concepts, and storytelling naturally.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-[#3D6B3E] shrink-0 mt-0.5" />
                    <span><strong>Child-Paced Transitions:</strong> Parents are welcome to stay as children settle in; milestones are never rushed.</span>
                  </li>
                </ul>
              </div>

              {/* Conventional Column */}
              <div className={`p-6 rounded-2xl border transition-all ${
                activeTab === 'conventional' ? 'bg-[#E9A18A]/15 border-[#E9A18A] ring-2 ring-[#E9A18A]/20' : 'bg-[#F9F6EF] border-[#D8C9AD]/60 opacity-70'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#E9A18A]" />
                  <h4 className="font-display font-bold text-lg text-[#3D2F1F]">Conventional Classroom Routine</h4>
                </div>
                <ul className="space-y-3 text-sm text-[#6B5B3E]">
                  <li className="flex items-start gap-2.5">
                    <X size={18} className="text-[#D98070] shrink-0 mt-0.5" />
                    <span><strong>Fixed Classrooms & Desks:</strong> Expects toddlers to sit still for prolonged periods before developmental readiness.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X size={18} className="text-[#D98070] shrink-0 mt-0.5" />
                    <span><strong>Movement Treated as a Distraction:</strong> Physical activity is confined only to brief recess breaks between lessons.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X size={18} className="text-[#D98070] shrink-0 mt-0.5" />
                    <span><strong>Rigid Rote Instruction:</strong> Rushing young toddlers into premature worksheets and formal academic memorization.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X size={18} className="text-[#D98070] shrink-0 mt-0.5" />
                    <span><strong>Uniform Expectations:</strong> Children forced to meet identical milestones at the same time regardless of readiness.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Pull Quote Callout from PDF */}
        <FadeIn delay={0.2}>
          <div className="relative text-center max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#3D2F1F] text-[#F9F6EF] shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 rounded-full bg-[#E9A18A]/20 blur-2xl" />
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-44 h-44 rounded-full bg-[#F2D58A]/20 blur-2xl" />
            <span className="text-4xl sm:text-5xl font-display text-[#F2D58A] leading-none">“</span>
            <blockquote className="font-display text-2xl sm:text-3xl font-medium leading-snug px-4">
              Because preparing children for school should never mean rushing them through childhood.
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm text-[#D8C9AD] tracking-wider uppercase font-semibold">
              The Rock Tumblerz Founding Philosophy
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
