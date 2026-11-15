import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart } from 'lucide-react';

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

const steps = [
  {
    step: 'Step 1',
    title: 'Book a Centre Visit',
    detail: 'Schedule a morning visit to step into our open playscape, meet our educators, and see childhood in motion firsthand.',
  },
  {
    step: 'Step 2',
    title: 'Explore Together',
    detail: 'Bring your little one. Watch them explore tactile textures, climbing challenges, and creative stations while we observe and connect.',
  },
  {
    step: 'Step 3',
    title: 'Gentle Transition',
    detail: 'Parents and caregivers are welcome to stay throughout the morning as your toddler becomes comfortable with educators and routines.',
  },
  {
    step: 'Step 4',
    title: 'Growing Autonomy',
    detail: 'As your child discovers security and self-belief, gradual transitions to independent attendance unfold naturally at their pace.',
  },
];

const glanceItems = [
  { label: 'Age Group', value: '1–4 years', sub: 'Toddler-centered developmental stages' },
  { label: 'Days', value: 'Monday to Friday', sub: 'Consistent weekday morning rhythm' },
  { label: 'Timings', value: '9:00 AM – 12:00 PM', sub: 'Three intentional, joyful hours' },
  { label: 'Learning Environment', value: 'Open, movement-led preschool', sub: 'Playscape instead of traditional desks' },
  { label: 'Parent Participation', value: 'Parents & caregivers welcome', sub: 'Gradual, supportive transitions' },
  { label: 'Centres', value: 'Nanakramguda · Kokapet · Kismathpur (Soon)', sub: 'Convenient locations across Hyderabad' },
];

export default function AdmissionsSection({ onOpenBooking }) {
  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#F9F6EF] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#F2D58A]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-[#E9A18A]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              Admissions
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              Every child begins differently. We understand that.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
              Starting preschool is an important milestone for children and families. At Rock Tumblerz, we respect each child's individual pace as they become familiar with their new environment, educators and routines.
            </p>
          </FadeIn>
        </div>

        {/* Narrative Box from PDF */}
        <FadeIn delay={0.15} className="mb-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D8C9AD] shadow-sm max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-2xl bg-[#E9A18A]/20 text-[#E9A18A] shrink-0 mt-1">
                <Heart size={24} />
              </span>
              <div className="space-y-4 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
                <p>
                  <strong>Parents and caregivers are welcome to stay with their children throughout the morning.</strong> Some children feel comfortable exploring from the beginning, while others benefit from a gradual transition before attending independently.
                </p>
                <p className="text-[#3D2F1F] font-medium">
                  Our educators provide reassurance and support at a pace that respects each child's comfort and individual needs.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Programme at a Glance Grid from PDF */}
        <div className="mb-16">
          <FadeIn>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#3D2F1F]">
                Programme at a Glance
              </h3>
              <p className="text-xs sm:text-sm text-[#8B7355] mt-1">
                Thoughtfully designed for toddlers aged 1–4 years
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {glanceItems.map((item, idx) => (
              <FadeIn key={item.label} delay={idx * 0.06}>
                <div className="p-6 rounded-2xl bg-white border border-[#D8C9AD] shadow-xs hover:border-[#3D2F1F]/40 transition-colors">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B9A17D] block mb-1">
                    {item.label}
                  </span>
                  <div className="font-display font-bold text-lg text-[#3D2F1F]">
                    {item.value}
                  </div>
                  <p className="text-xs text-[#8B7355] mt-1">
                    {item.sub}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 4-Step Enrollment Process */}
        <div className="mb-16">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B7355]">
                How to Join Rock Tumblerz
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#3D2F1F] mt-1">
                Your First Step
              </h3>
              <p className="mt-2 text-sm text-[#6B5B3E] max-w-xl mx-auto">
                We invite you to visit Rock Tumblerz, explore our learning environment, meet our educators and discover whether the programme could suit your child.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((st, i) => (
              <FadeIn key={st.step} delay={i * 0.08}>
                <div className="p-6 rounded-3xl bg-[#F5F0E7] border border-[#D8C9AD] h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white text-[#3D2F1F] border border-[#D8C9AD] mb-3">
                      {st.step}
                    </span>
                    <h4 className="font-display font-bold text-base text-[#3D2F1F] mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B5B3E] leading-relaxed">
                      {st.detail}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D8C9AD]/40 text-[11px] text-[#8B7355]">
                    Step {i + 1} of 4
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA Card verbatim from PDF */}
        <FadeIn delay={0.25}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#3D2F1F] text-[#F9F6EF] text-center shadow-xl">
            <h3 className="font-display text-2xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">
              Ready to take the first step?
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-[#D8C9AD] leading-relaxed">
              We look forward to welcoming you and your toddler to our playscape.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking && onOpenBooking('nanakramguda')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F2D58A] text-[#3D2F1F] font-semibold text-sm hover:bg-[#E8C060] shadow-md transition-all cursor-pointer"
              >
                Book a Centre Visit
              </button>
              <button
                onClick={() => onOpenBooking && onOpenBooking('kismathpur')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/40 hover:bg-white/10 text-[#F9F6EF] font-semibold text-sm transition-all cursor-pointer"
              >
                Kismathpur enquiries: Enquire Now →
              </button>
            </div>
            <p className="mt-4 text-xs text-[#D8C9AD]/70">
              * Kismathpur visits available once the centre opens.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
