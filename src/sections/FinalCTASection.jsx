import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, Sparkles, MapPin, ArrowRight } from 'lucide-react';

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

export default function FinalCTASection({ onOpenBooking }) {
  return (
    <section className="py-20 lg:py-28 bg-[#F9F6EF] relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E9A18A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#A8B99A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card from PDF */}
        <FadeIn>
          <div className="rounded-[40px] bg-gradient-to-br from-[#3D2F1F] via-[#2F2317] to-[#1E160D] text-[#F9F6EF] p-8 sm:p-14 lg:p-16 text-center relative shadow-2xl overflow-hidden border border-[#D8C9AD]/20">
            {/* Top decorative badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#F2D58A] text-xs font-semibold backdrop-blur-sm mb-6 border border-white/15">
              <Sparkles size={14} className="text-[#F2D58A]" />
              <span>Discover a different beginning to preschool</span>
            </div>

            {/* Headline from PDF */}
            <h2
  style={{ color: '#FFFFFF', opacity: 1 }}
  className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-3xl mx-auto"
>
  Come See Childhood in Motion.
</h2>

            {/* Subtitle from PDF */}
            <p className="mt-6 text-lg sm:text-xl font-display text-[#D8C9AD] max-w-2xl mx-auto font-medium">
              The best way to understand Rock Tumblerz is to experience it.
            </p>

            {/* Body from PDF */}
            <p className="mt-4 text-sm sm:text-base text-[#D8C9AD]/80 max-w-2xl mx-auto leading-relaxed">
              Step into our open playscape, meet the educators who bring our mornings to life, and discover how movement, imagination and purposeful teaching come together in our approach to early learning.
            </p>

            {/* Reassurance */}
            <p className="mt-5 text-sm sm:text-base font-semibold text-[#F2D58A]">
              We look forward to welcoming you and your little one.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking && onOpenBooking('nanakramguda')}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#F2D58A] text-[#3D2F1F] font-bold text-base hover:bg-[#E8C060] hover:scale-105 shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                <span>Book a Centre Visit</span>
              </button>

              <button
                onClick={() => onOpenBooking && onOpenBooking('kismathpur')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Kismathpur Waitlist</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Location selector links */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D8C9AD]">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#E9A18A]" />
                Nanakramguda (Kidz District)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#A8B99A]" />
                Kokapet (Peekazoo)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#F2D58A]" />
                Kismathpur (Play Panda — Coming Soon)
              </span>
            </div>

            {/* Slogan from Page 21 of PDF */}
            <div className="mt-6 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#D8C9AD]/60">
              Rock Tumblerz — An Exploratory Studio for Toddlers <br className="sm:hidden" />
              <span className="text-white/40 hidden sm:inline"> | </span>
              Movement is the Curriculum. Readiness Before Academics.
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
