import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Approach', href: '#philosophy' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F9F6EF]/95 backdrop-blur-md shadow-sm border-b border-[#D8C9AD]/40'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <LogoMark />
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold text-[#3D2F1F] tracking-tight leading-none">
                Rock
              </span>
              <span className="font-display text-xl font-semibold text-[#B9A17D] tracking-tight leading-none">
                tumblerz
              </span>
            </div>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative text-[15px] text-[#6B5B3E] hover:text-[#3D2F1F] transition-colors duration-200 font-medium"
                whileHover={{ y: -1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#E9A18A] rounded-full transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:hello@rocktumblerz.com?subject=Book a Visit"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#E9A18A] text-white font-semibold text-sm rounded-full shadow-sm hover:bg-[#D98070] hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Book a Visit
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#F2D58A]/30 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <motion.span
                className="block w-6 h-0.5 bg-[#3D2F1F] rounded-full origin-center"
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#3D2F1F] rounded-full"
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#3D2F1F] rounded-full origin-center"
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#3D2F1F]/20 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#F9F6EF] z-50 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-[#D8C9AD]/40">
                <LogoMark />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F2D58A]/40 transition-colors"
                  aria-label="Close navigation"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2L14 14M14 2L2 14" stroke="#3D2F1F" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-1 p-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="flex items-center px-4 py-3.5 rounded-xl text-[#3D2F1F] font-medium hover:bg-[#F2D58A]/30 transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="p-6 border-t border-[#D8C9AD]/40">
                <a
                  href="mailto:hello@rocktumblerz.com?subject=Book a Visit"
                  className="flex justify-center items-center gap-2 w-full px-5 py-3 bg-[#E9A18A] text-white font-semibold rounded-full shadow hover:bg-[#D98070] transition-all duration-300"
                >
                  Book a Visit
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* R pebble with dots */}
      <ellipse cx="18" cy="20" rx="14" ry="13" fill="#F9F6EF" />
      {/* Colorful pebble dots */}
      <circle cx="12" cy="11" r="4.5" fill="#E9A18A" />
      <circle cx="20" cy="8" r="3.5" fill="#F2D58A" />
      <circle cx="27" cy="13" r="4" fill="#A8B99A" />
      <circle cx="26" cy="22" r="3" fill="#E9A18A" opacity="0.7" />
      {/* R letterform */}
      <text x="10" y="28" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="#3D2F1F">R</text>
    </svg>
  );
}

