import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Award, Users, CheckCircle } from 'lucide-react';

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

const advisors = [
  {
    name: 'Dr. Ritika Srivastava',
    role: 'Early Childhood Education Consultant',
    advisoryFocus: 'Teaching practices, educator development and age-appropriate learning experiences.',
    contribution: 'Contributing expertise in early-childhood education to strengthen our teaching practices, educator training and the design of age-appropriate learning experiences.',
    icon: GraduationCap,
    badgeColor: '#E9A18A',
  },
  {
    name: 'Dr. Saroj Arya',
    role: 'Child Development & Inclusion Advisor',
    advisoryFocus: 'Child development, individual developmental differences and inclusive learning.',
    contribution: 'Bringing expertise in child development, developmental psychology and inclusive education to deepen our understanding of children\'s individual developmental needs and support more responsive, inclusive learning experiences.',
    icon: Award,
    badgeColor: '#A8B99A',
  },
];

export default function PeopleExpertiseSection() {
  return (
    <section id="people" className="py-20 lg:py-28 bg-[#F9F6EF] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#E9A18A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-[#F2D58A]/12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              People & Expertise
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              Thoughtful education begins with thoughtful people.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
              At Rock Tumblerz, our movement-led educational approach is strengthened by expertise in early-childhood education and child development. We bring together professional knowledge, thoughtful teaching practices and a deeper understanding of how young children grow, learn and develop.
            </p>
          </FadeIn>
        </div>

        {/* Academic & Developmental Advisors */}
        <div className="mb-14">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#3D2F1F]" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#3D2F1F]">
                Academic & Developmental Expertise
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <FadeIn key={adv.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(61,47,31,0.08)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                    className="p-7 sm:p-8 rounded-3xl bg-white border border-[#D8C9AD] shadow-sm flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Avatar header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                          style={{ backgroundColor: `${adv.badgeColor}35`, color: '#3D2F1F' }}
                        >
                          <Icon size={26} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-xl text-[#3D2F1F]">
                            {adv.name}
                          </h4>
                          <p className="text-xs sm:text-sm font-semibold text-[#8B7355] mt-0.5">
                            {adv.role}
                          </p>
                        </div>
                      </div>

                      {/* Advisory Focus */}
                      <div className="p-4 rounded-2xl bg-[#F5F0E7]/70 border border-[#D8C9AD]/60 mb-4 text-xs sm:text-sm">
                        <span className="font-bold text-[#3D2F1F] block mb-1 uppercase tracking-wider text-[10px]">
                          Advisory Focus:
                        </span>
                        <p className="text-[#6B5B3E] leading-relaxed">{adv.advisoryFocus}</p>
                      </div>

                      {/* Contribution */}
                      <div className="text-xs sm:text-sm text-[#6B5B3E] leading-relaxed">
                        <span className="font-semibold text-[#3D2F1F]">Contribution: </span>
                        {adv.contribution}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#D8C9AD]/40 flex items-center gap-2 text-xs text-[#8B7355]">
                      <CheckCircle size={14} className="text-[#3D6B3E]" />
                      <span>Guiding curriculum architecture & educator training</span>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Our Educators Feature Card from PDF */}
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-white via-[#F9F6EF] to-[#F5F0E7] rounded-3xl p-8 sm:p-12 border-2 border-[#D8C9AD] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8B99A]/20 text-[#3D2F1F] text-xs font-semibold">
                  <Users size={14} className="text-[#3D6B3E]" />
                  In the Studio Daily
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#3D2F1F]">
                  Our Educators
                </h3>

                <p className="text-base sm:text-lg text-[#3D2F1F] font-medium leading-relaxed">
                  Our educators bring the Rock Tumblerz philosophy to life every morning.
                </p>

                <p className="text-sm sm:text-base text-[#6B5B3E] leading-relaxed">
                  Through careful observation, meaningful interactions and purposeful guidance, they support children as they explore, experiment, communicate and develop new abilities.
                </p>

                <p className="text-sm sm:text-base text-[#6B5B3E] leading-relaxed">
                  Ongoing training, professional guidance and reflective teaching practices help ensure that our educational approach is thoughtfully carried into everyday experiences across our centres.
                </p>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#D8C9AD] shadow-xs space-y-3">
                <h4 className="font-display font-bold text-sm text-[#3D2F1F] uppercase tracking-wider text-[11px]">
                  Educator Commitments
                </h4>
                <div className="space-y-2 text-xs text-[#6B5B3E]">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9A18A] mt-1.5 shrink-0" />
                    <span>Observe first, step in with intentional language</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2D58A] mt-1.5 shrink-0" />
                    <span>Respect each child's individual pace & temperament</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A8B99A] mt-1.5 shrink-0" />
                    <span>Encourage trial & error rather than rushing to solve</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D2F1F] mt-1.5 shrink-0" />
                    <span>Reflective teaching logs & parent communication</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
