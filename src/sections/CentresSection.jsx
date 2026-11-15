import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MapPin, Clock, Navigation as NavIcon, Check } from 'lucide-react';

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

const centres = [
  {
    id: 'nanakramguda',
    name: 'Nanakramguda',
    locationName: 'Rock Tumblerz at Kidz District',
    city: 'Hyderabad, Telangana',
    status: 'Open for Visits',
    statusBadge: 'Active Centre',
    badgeColor: '#A8B99A',
    timings: 'Monday to Friday · 9:00 AM – 12:00 PM',
    ages: 'Ages 1–4 years',
    description: 'A spacious movement-led playscape with natural wood fixtures, soft climbing slopes, tactile sensory atelier, and welcoming caregiver observation lounges.',
    highlights: ['Natural wood open playscape', 'Sensory material stations', 'Stroller parking & secure entry'],
    mapQuery: 'Kidz District Nanakramguda Hyderabad',
  },
  {
    id: 'kokapet',
    name: 'Kokapet',
    locationName: 'Rock Tumblerz at Peekazoo',
    city: 'Hyderabad, Telangana',
    status: 'Open for Visits',
    statusBadge: 'Active Centre',
    badgeColor: '#E9A18A',
    timings: 'Monday to Friday · 9:00 AM – 12:00 PM',
    ages: 'Ages 1–4 years',
    description: 'Surrounded by calm greenery, our Kokapet studio features an expansive toddler movement floor, imaginative story caverns, and clay exploration tables.',
    highlights: ['Expansive movement track', 'Imaginative Learning Worlds', 'Co-regulation quiet corners'],
    mapQuery: 'Peekazoo Kokapet Hyderabad',
  },
  {
    id: 'kismathpur',
    name: 'Kismathpur',
    locationName: 'Rock Tumblerz at Play Panda',
    city: 'Hyderabad, Telangana',
    status: 'Coming Soon',
    statusBadge: 'Inaugural Waitlist Open',
    badgeColor: '#F2D58A',
    timings: 'Monday to Friday · 9:00 AM – 12:00 PM',
    ages: 'Ages 1–4 years',
    description: 'Our newest upcoming exploratory studio in Kismathpur. Designing an innovative playscape tailored to toddler physical autonomy and sensory play.',
    highlights: ['Purpose-built toddler playscape', 'Priority enrollment list open', 'Preview tours opening soon'],
    mapQuery: 'Play Panda Kismathpur Hyderabad',
  },
];

export default function CentresSection({ onOpenBooking }) {
  const [activeCentre, setActiveCentre] = useState(centres[0]);

  const openGoogleMaps = (query) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="centres" className="py-20 lg:py-28 bg-[#F5F0E7] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#E9A18A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#A8B99A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              Our Centres
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              Find your Rock Tumblerz.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
              Discover Rock Tumblerz at a location near you.
            </p>
          </FadeIn>
        </div>

        {/* Centre Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {centres.map((c, i) => {
            const isComingSoon = c.id === 'kismathpur';
            const isSelected = activeCentre.id === c.id;

            return (
              <FadeIn key={c.id} delay={i * 0.1}>
                <motion.div
                  onClick={() => setActiveCentre(c)}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(61,47,31,0.08)' }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                  className={`relative p-7 sm:p-8 rounded-3xl bg-white border cursor-pointer transition-all flex flex-col justify-between h-full ${
                    isSelected
                      ? 'border-[#3D2F1F] ring-2 ring-[#3D2F1F]/15 shadow-md'
                      : 'border-[#D8C9AD]/80 hover:border-[#3D2F1F]/40'
                  }`}
                >
                  <div>
                    {/* Header badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                        style={{ backgroundColor: `${c.badgeColor}35`, color: '#3D2F1F' }}
                      >
                        {c.statusBadge}
                      </span>
                      <MapPin size={18} className="text-[#8B7355]" />
                    </div>

                    {/* Centre Name */}
                    <h3 className="font-display text-2xl font-bold text-[#3D2F1F]">
                      {c.name}
                    </h3>

                    {/* Location verbatim from PDF */}
                    <p className="text-sm font-semibold text-[#8B7355] mt-1 mb-4">
                      {c.locationName}
                    </p>

                    <p className="text-xs sm:text-sm text-[#6B5B3E] leading-relaxed mb-6">
                      {c.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {c.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-[#6B5B3E]">
                          <Check size={14} className="text-[#3D6B3E] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Timings */}
                    <div className="p-3 rounded-xl bg-[#F9F6EF] border border-[#D8C9AD]/60 text-xs text-[#8B7355] mb-6 flex items-center gap-2">
                      <Clock size={14} className="text-[#3D2F1F]" />
                      <span>{c.timings}</span>
                    </div>
                  </div>

                  {/* Actions matching PDF verbatim */}
                  <div className="pt-4 border-t border-[#D8C9AD]/50 space-y-2.5">
                    {!isComingSoon ? (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenBooking && onOpenBooking(c.id);
                          }}
                          className="flex-1 py-2.5 px-4 rounded-full bg-[#3D2F1F] text-[#F9F6EF] font-semibold text-xs text-center hover:bg-[#2A1F13] transition-colors cursor-pointer"
                        >
                          Book a Centre Visit
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openGoogleMaps(c.mapQuery);
                          }}
                          className="py-2.5 px-3 rounded-full border border-[#D8C9AD] hover:bg-[#F9F6EF] text-[#3D2F1F] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          title="Open Google Maps"
                        >
                          <NavIcon size={12} />
                          <span>Directions</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking && onOpenBooking('kismathpur');
                        }}
                        className="w-full py-2.5 px-4 rounded-full bg-[#F2D58A] text-[#3D2F1F] font-semibold text-xs text-center hover:bg-[#E8C060] transition-colors cursor-pointer"
                      >
                        Enquire Now (Join Waitlist)
                      </button>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* Quick Help Banner */}
        <FadeIn delay={0.25}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8C9AD] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#E9A18A]/20 flex items-center justify-center text-[#E9A18A] shrink-0">
                <MapPin size={20} />
              </span>
              <div>
                <h4 className="font-display font-bold text-base text-[#3D2F1F]">
                  Not sure which centre is closest to you?
                </h4>
                <p className="text-xs text-[#8B7355] mt-0.5">
                  Our team can recommend the most convenient location and answer any questions about our spaces.
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking && onOpenBooking('nanakramguda')}
              className="px-6 py-2.5 rounded-full border border-[#3D2F1F] text-[#3D2F1F] font-semibold text-xs hover:bg-[#3D2F1F] hover:text-white transition-all shrink-0 cursor-pointer"
            >
              Contact Centres Team
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
