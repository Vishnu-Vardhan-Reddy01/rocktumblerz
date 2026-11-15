import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FileText, Eye, BookOpen, Heart, UserCheck } from 'lucide-react';

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

const observationPillars = [
  {
    title: 'Individual Pace & Comfort',
    desc: 'Some children jump right into sensory playscapes; others prefer observing quietly before participating. We respect and support both approaches without pressure.',
    icon: Eye,
    color: '#E9A18A',
  },
  {
    title: 'Whole-Child Observation',
    desc: 'Educators observe how children communicate, interact, overcome physical obstacles, and regulate emotions in authentic play moments.',
    icon: Heart,
    color: '#F2D58A',
  },
  {
    title: 'Partnering With Parents',
    desc: 'Observations are shared transparently through our Child Understanding Report, offering families meaningful insight into their child’s emerging abilities.',
    icon: UserCheck,
    color: '#A8B99A',
  },
];

export default function ChildUnderstandingSection() {
  const [activeReportTab, setActiveReportTab] = useState('summary');

  return (
    <section id="child-report" className="py-20 lg:py-28 bg-[#F9F6EF] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#E9A18A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#A8B99A]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              Understanding Every Child
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              Every child has a story of their own.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg sm:text-xl font-display text-[#8B7355]">
              No two children explore, participate or develop in quite the same way.
            </p>
          </FadeIn>
        </div>

        {/* Verbatim narrative & Mockup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Narrative */}
          <FadeIn delay={0.15} className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
              Our educators observe how children communicate, interact, respond to challenges and engage with new experiences.
            </p>
            <p className="text-base sm:text-lg text-[#3D2F1F] font-medium leading-relaxed">
              Through our <strong>Child Understanding Report</strong>, we share these observations with parents, offering a meaningful picture of their child's interests, emerging abilities, individual strengths and progress over time.
            </p>
            
            <div className="space-y-4 pt-2">
              {observationPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="p-4 rounded-2xl bg-[#F5F0E7] border border-[#D8C9AD] flex items-start gap-3.5">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${p.color}40`, color: '#3D2F1F' }}
                    >
                      <Icon size={18} />
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#3D2F1F]">{p.title}</h4>
                      <p className="text-xs text-[#6B5B3E] mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-[#8B7355] flex items-center gap-2">
              <BookOpen size={14} className="text-[#3D2F1F]" />
              <span>Aligned with NCERT — National Curriculum Framework for Foundational Stage (NCF-FS).</span>
            </div>
          </FadeIn>

          {/* Right Interactive "Child Understanding Report" Mockup */}
          <FadeIn delay={0.25} className="lg:col-span-6">
            <div className="rounded-3xl bg-white border-2 border-[#D8C9AD] shadow-xl overflow-hidden">
              {/* Report Header */}
              <div className="p-6 bg-[#3D2F1F] text-[#F9F6EF]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileText size={20} className="text-[#F2D58A]" />
                    <span className="font-display font-bold text-base sm:text-lg">
                      Child Understanding Report
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white/15 px-3 py-1 rounded-full text-[#F2D58A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A8B99A] animate-pulse" />
                    <span>Sample Observation View</span>
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-[#D8C9AD]">
                  <span>Age Cohort: 2–3 Years</span>
                  <span>•</span>
                  <span>Observation Focus: Movement & Social Agency</span>
                </div>
              </div>

              {/* Report Tabs */}
              <div className="flex border-b border-[#D8C9AD]/50 bg-[#F5F0E7]/60 px-4 pt-3 gap-2">
                <button
                  onClick={() => setActiveReportTab('summary')}
                  className={`px-3 py-2 text-xs font-semibold rounded-t-xl transition-all cursor-pointer ${
                    activeReportTab === 'summary'
                      ? 'bg-white text-[#3D2F1F] border-t-2 border-[#3D2F1F]'
                      : 'text-[#8B7355] hover:text-[#3D2F1F]'
                  }`}
                >
                  Growth Summary
                </button>
                <button
                  onClick={() => setActiveReportTab('observations')}
                  className={`px-3 py-2 text-xs font-semibold rounded-t-xl transition-all cursor-pointer ${
                    activeReportTab === 'observations'
                      ? 'bg-white text-[#3D2F1F] border-t-2 border-[#3D2F1F]'
                      : 'text-[#8B7355] hover:text-[#3D2F1F]'
                  }`}
                >
                  Educator Anecdotes
                </button>
                <button
                  onClick={() => setActiveReportTab('worlds')}
                  className={`px-3 py-2 text-xs font-semibold rounded-t-xl transition-all cursor-pointer ${
                    activeReportTab === 'worlds'
                      ? 'bg-white text-[#3D2F1F] border-t-2 border-[#3D2F1F]'
                      : 'text-[#8B7355] hover:text-[#3D2F1F]'
                  }`}
                >
                  Learning Worlds Engagement
                </button>
              </div>

              {/* Report Tab Body */}
              <div className="p-6 space-y-4">
                {activeReportTab === 'summary' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="p-3.5 rounded-2xl bg-[#A8B99A]/15 border border-[#A8B99A]/40 text-xs text-[#3D2F1F]">
                      <strong>Key Observation:</strong> Demonstrated marked increase in body balance and persistence when navigating gentle playscape obstacles without prompting.
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium text-[#6B5B3E]">
                        <span>Body Confidence & Physical Agency</span>
                        <span className="font-bold text-[#3D2F1F]">Emerging Strongly</span>
                      </div>
                      <div className="h-2 w-full bg-[#F5F0E7] rounded-full overflow-hidden">
                        <div className="h-full bg-[#A8B99A] rounded-full w-[85%]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium text-[#6B5B3E]">
                        <span>Inquiry & Problem Solving</span>
                        <span className="font-bold text-[#3D2F1F]">Active & Independent</span>
                      </div>
                      <div className="h-2 w-full bg-[#F5F0E7] rounded-full overflow-hidden">
                        <div className="h-full bg-[#F2D58A] rounded-full w-[90%]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium text-[#6B5B3E]">
                        <span>Co-Regulation & Comfort</span>
                        <span className="font-bold text-[#3D2F1F]">Self-Settling Supported</span>
                      </div>
                      <div className="h-2 w-full bg-[#F5F0E7] rounded-full overflow-hidden">
                        <div className="h-full bg-[#E9A18A] rounded-full w-[78%]" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeReportTab === 'observations' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 text-xs text-[#6B5B3E]">
                    <div className="p-3 bg-[#F9F6EF] rounded-xl border border-[#D8C9AD]">
                      <div className="font-bold text-[#3D2F1F] mb-1">Playscape Observation:</div>
                      "Initially observed the rope bridge for 10 minutes. On day three, attempted the first rung independently, smiling and saying 'I did it!' when reaching the soft platform."
                    </div>
                    <div className="p-3 bg-[#F9F6EF] rounded-xl border border-[#D8C9AD]">
                      <div className="font-bold text-[#3D2F1F] mb-1">Language & Social Routine:</div>
                      "Shared natural materials during pebble sorting; used descriptive vocabulary for textures ('smooth', 'bumpy')."
                    </div>
                  </motion.div>
                )}

                {activeReportTab === 'worlds' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 text-xs text-[#6B5B3E]">
                    <div className="flex items-center justify-between p-3 bg-[#F5F0E7] rounded-xl">
                      <span className="font-bold text-[#3D2F1F]">Ocean World Sensory Station</span>
                      <span className="text-[#3D6B3E] font-semibold">High Enthusiasm</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#F5F0E7] rounded-xl">
                      <span className="font-bold text-[#3D2F1F]">Forest Canopy Climb</span>
                      <span className="text-[#3D6B3E] font-semibold">Growing Independence</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#F5F0E7] rounded-xl">
                      <span className="font-bold text-[#3D2F1F]">Story & Rhyme Circle</span>
                      <span className="text-[#3D6B3E] font-semibold">Engaged Listening</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Disclaimer from Page 20 of PDF */}
              <div className="p-4 bg-[#F5F0E7] border-t border-[#D8C9AD] text-[11px] text-[#8B7355] leading-relaxed">
                <strong>Note:</strong> The Child Understanding Report is an educational observation and progress-reporting tool, not a clinical diagnosis or standardised developmental assessment.
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Verbatim Callout */}
        <FadeIn delay={0.2}>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#A8B99A]/20 via-[#F2D58A]/25 to-[#E9A18A]/20 border border-[#D8C9AD] text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#3D2F1F]">
              Because understanding how a child is growing matters as much as recognising what they are learning.
            </h3>
            <p className="mt-3 text-sm text-[#6B5B3E] max-w-xl mx-auto">
              We look beyond standardized academic tests to celebrate the nuanced progress of character, balance, problem-solving, and emotional joy.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
