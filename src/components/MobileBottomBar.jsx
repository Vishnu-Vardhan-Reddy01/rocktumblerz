import { motion } from 'motion/react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

export default function MobileBottomBar({ onOpenStories, onOpenBooking }) {
  const scrollToCentres = () => {
    const el = document.querySelector('#centres');
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 lg:hidden pointer-events-none">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="max-w-md mx-auto p-1.5 rounded-full bg-[#3D2F1F]/92 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between gap-1 pointer-events-auto"
      >
        {/* Quick Tour Button */}
        <button
          onClick={onOpenStories}
          className="flex-1 py-2 px-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1.5 text-xs font-semibold cursor-pointer"
        >
          <Sparkles size={14} className="text-[#F2D58A] animate-pulse" />
          <span>Quick Tour</span>
        </button>

        {/* Centres Button */}
        <button
          onClick={scrollToCentres}
          className="py-2 px-3 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1 text-xs font-medium cursor-pointer"
        >
          <MapPin size={13} className="text-[#A8B99A]" />
          <span>Centres</span>
        </button>

        {/* Primary Action Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onOpenBooking && onOpenBooking('nanakramguda')}
          className="py-2.5 px-4 rounded-full bg-[#F2D58A] text-[#3D2F1F] font-bold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Calendar size={13} />
          <span>Book Visit</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
