import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Calendar,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Heart,
  X,
  Menu,
  MapPin,
  Compass,
  Layers,
  HelpCircle,
  GraduationCap,
  Users,
  Clock,
  Dumbbell,
  ClipboardList,
} from 'lucide-react';

const curriculumLinks = [
  {
    label: 'Six Foundations',
    desc: 'Readiness before academics',
    href: '#foundations',
    icon: Heart,
    color: 'bg-[#F5E4D9]',
  },
  {
    label: 'Child Understanding Report',
    desc: 'Holistic observation & progress',
    href: '#child-report',
    icon: BookOpen,
    color: 'bg-[#E5EBDD]',
  },
  {
    label: 'People & Expertise',
    desc: 'Early childhood advisors & educators',
    href: '#people',
    icon: Sparkles,
    color: 'bg-[#F6EDCF]',
  },
];

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Why Movement', href: '#movement' },
  { label: 'Daily Rhythm', href: '#daily-rhythm', special: true },
  { label: 'Centres', href: '#centres' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'FAQ', href: '#faq' },
];

// Mobile drawer sections — grouped beautifully
const mobileDrawerSections = [
  {
    group: 'Discover',
    color: '#E9A18A',
    items: [
      { label: 'Philosophy', href: '#philosophy', icon: Compass, accent: '#F5E4D9', note: 'Our core belief' },
      { label: 'Why Movement', href: '#movement', icon: Dumbbell, accent: '#E5EBDD', note: 'Body & brain connection' },
      { label: 'Daily Rhythm', href: '#daily-rhythm', icon: Clock, accent: '#F6EDCF', note: 'A day at Rock Tumblerz', special: true },
    ],
  },
  {
    group: 'Learn & Grow',
    color: '#A8B99A',
    items: [
      { label: '6 Foundations', href: '#foundations', icon: Layers, accent: '#F5E4D9', note: 'Readiness before academics' },
      { label: 'Child Report', href: '#child-report', icon: ClipboardList, accent: '#E5EBDD', note: 'Holistic progress view' },
      { label: 'People & Experts', href: '#people', icon: Users, accent: '#F6EDCF', note: 'Who guides your child' },
    ],
  },
  {
    group: 'Visit Us',
    color: '#F2D58A',
    items: [
      { label: 'Centres', href: '#centres', icon: MapPin, accent: '#FEF9EB', note: '3 locations open' },
      { label: 'Admissions', href: '#admissions', icon: GraduationCap, accent: '#E5EBDD', note: 'Start the journey' },
      { label: 'FAQ', href: '#faq', icon: HelpCircle, accent: '#F5E4D9', note: 'All your questions' },
    ],
  },
];

// For scroll-spy
const mobileAllOptions = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Why Movement', href: '#movement' },
  { label: 'Daily Rhythm', href: '#daily-rhythm' },
  { label: '6 Foundations', href: '#foundations' },
  { label: 'Child Report', href: '#child-report' },
  { label: 'Experts', href: '#people' },
  { label: 'Centres', href: '#centres' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navigation({ onOpenBooking, onOpenStories }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking with scroll-spy
  useEffect(() => {
    const sectionIds = mobileAllOptions.map((opt) => opt.href);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          const currentHash = `#${visible[0].target.id}`;
          setActiveSection(currentHash);
        }
      },
      {
        rootMargin: '-80px 0px -50% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionIds.forEach((href) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const navigateTo = (href) => {
    const element = document.querySelector(href);
    setDropdownOpen(false);
    setMobileMenuOpen(false);

    if (!element) return;

    const yOffset = window.innerWidth < 1024 ? -80 : -95;
    const top = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top,
      behavior: reduceMotion ? 'instant' : 'smooth',
    });

    setActiveSection(href);
  };

  const bookVisit = () => {
    setMobileMenuOpen(false);
    onOpenBooking?.('nanakramguda');
  };

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: 'easeOut' };

  // Find the active section label to show in mini-bar
  const activeSectionLabel = mobileAllOptions.find(o => o.href === activeSection)?.label;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 pt-2 sm:pt-4 pointer-events-none">
        <div className="max-w-[1380px] mx-auto pointer-events-auto">
          <motion.nav
            animate={{
              scale: scrolled ? 0.99 : 1,
            }}
            transition={transition}
            className={`
              relative flex flex-row items-center justify-between
              px-3.5 sm:px-6 py-2.5 sm:py-3
              rounded-[24px] lg:rounded-full
              border transition-all duration-400
              ${
                scrolled
                  ? 'bg-[#FBF8F1]/95 backdrop-blur-2xl border-[#D8C9AD]/80 shadow-[0_12px_40px_rgba(61,47,31,0.12)]'
                  : 'bg-white/90 backdrop-blur-xl border-white/80 shadow-[0_8px_30px_rgba(61,47,31,0.06)]'
              }
            `}
            aria-label="Main navigation"
          >
            {/* BRAND */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#home');
              }}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  transition={transition}
                >
                  <LogoMark size={34} />
                </motion.div>

                <motion.span
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.45, 0.2],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-[#E9A18A]/30 blur-xl -z-10"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-display text-[17px] sm:text-[20px] font-bold text-[#3D2F1F] leading-none tracking-tight group-hover:text-[#92734D] transition-colors">
                  Rock Tumblerz
                </span>

                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#947C5C] font-semibold mt-1">
                  Toddler Studio · Ages 1–4
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION (KEPT EXACTLY AS YOU LIKED IT) */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.slice(0, 3).map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  active={activeSection === item.href}
                  onClick={() => navigateTo(item.href)}
                />
              ))}

              {/* CURRICULUM MEGA MENU */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className={`
                    flex items-center gap-1.5 px-3 py-2
                    rounded-full text-[13px] font-medium
                    transition-all duration-200
                    ${
                      dropdownOpen
                        ? 'bg-[#F2E6D2] text-[#3D2F1F]'
                        : 'text-[#75644D] hover:bg-[#F4EDDF] hover:text-[#3D2F1F]'
                    }
                  `}
                >
                  Curriculum
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.97,
                      }}
                      transition={transition}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[360px]"
                    >
                      <div className="bg-[#FCF9F2] rounded-[26px] p-3 border border-[#E6D9C3] shadow-[0_20px_60px_rgba(61,47,31,0.15)]">
                        <div className="px-3 pt-2 pb-3">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A48B66] font-bold">
                            Explore our approach
                          </span>
                          <h3 className="font-display text-xl text-[#3D2F1F] mt-1">
                            Growing, one step at a time.
                          </h3>
                        </div>

                        {curriculumLinks.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.href}
                              onClick={() => navigateTo(item.href)}
                              className="w-full flex items-center gap-3 p-3 rounded-2xl text-left hover:bg-white transition-all duration-200 group"
                            >
                              <div className={`${item.color} w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                                <Icon size={19} className="text-[#725C40]" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="text-[13px] font-bold text-[#3D2F1F]">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-[#927D60] mt-1">
                                  {item.desc}
                                </div>
                              </div>

                              <ArrowUpRight
                                size={16}
                                className="text-[#B5A17E] group-hover:text-[#3D2F1F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                              />
                            </button>
                          );
                        })}

                        <div className="mt-2 mx-1 px-3 py-3 rounded-2xl bg-[#F3EBDD] flex items-center gap-2">
                          <Sparkles size={15} className="text-[#B28D5B]" />
                          <span className="text-[11px] text-[#79654A]">
                            Discover how little minds grow.
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(3).map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  active={activeSection === item.href}
                  onClick={() => navigateTo(item.href)}
                />
              ))}
            </div>

            {/* DESKTOP RIGHT ACTIONS */}
            <div className="hidden lg:flex items-center gap-2 sm:gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-2 rounded-full bg-[#E9EEE3]/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#73906A] animate-ping opacity-50" />
                  <span className="relative rounded-full w-2 h-2 bg-[#73906A]" />
                </span>
                <span className="text-[11px] font-semibold text-[#56714D]">
                  3 Centres Open
                </span>
              </div>

              <motion.button
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={bookVisit}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3D2F1F] text-[#FBF8F1] text-sm font-semibold shadow-[0_5px_15px_rgba(61,47,31,0.18)] hover:bg-[#57432B] transition-colors cursor-pointer"
              >
                <Calendar size={15} className="text-[#F2D58A]" />
                <span>Book a Visit</span>
              </motion.button>
            </div>

            {/* MOBILE RIGHT — active section chip + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Active section ambient pill */}
              <AnimatePresence mode="wait">
                {activeSectionLabel && (
                  <motion.span
                    key={activeSectionLabel}
                    initial={{ opacity: 0, y: 4, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] font-semibold text-[#947C5C] bg-[#F2EBDD]/80 border border-[#D8C9AD]/50 px-2.5 py-1 rounded-full hidden xs:flex"
                  >
                    {activeSectionLabel}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Hamburger button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(true)}
                className="w-9 h-9 flex items-center justify-center rounded-2xl bg-[#3D2F1F] text-[#FBF8F1] shadow-sm cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu size={18} />
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* ─── MOBILE FULL-SCREEN DRAWER OVERLAY ──────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer panel — slides up from bottom */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 320, damping: 36 }
              }
              className="fixed inset-x-0 bottom-0 z-[70] lg:hidden"
              style={{ maxHeight: '92dvh' }}
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-1 absolute top-0 left-0 right-0 z-10 pointer-events-none">
                <div className="w-10 h-1 rounded-full bg-white/40" />
              </div>

              <div
                className="relative flex flex-col overflow-hidden rounded-t-[32px]"
                style={{
                  background: 'linear-gradient(160deg, #2B1F13 0%, #3D2F1F 50%, #4A3828 100%)',
                  maxHeight: '92dvh',
                }}
              >
                {/* Decorative floating orbs */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #E9A18A, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-32 left-0 w-48 h-48 rounded-full opacity-8 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #A8B99A, transparent 70%)', transform: 'translate(-40%, 20%)' }} />
                <div className="absolute top-1/2 right-4 w-32 h-32 rounded-full opacity-6 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #F2D58A, transparent 70%)' }} />

                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-7 pb-4 shrink-0">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#B9A17D]/70 font-semibold mb-1">
                      Navigate
                    </p>
                    <h2 className="font-display text-[22px] font-bold text-white leading-tight">
                      Rock Tumblerz
                    </h2>
                    <p className="text-[11px] text-[#D8C9AD]/70 mt-0.5">Toddler Studio · Ages 1–4</p>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.88, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-2xl flex items-center justify-center cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                    aria-label="Close navigation menu"
                  >
                    <X size={18} className="text-white" />
                  </motion.button>
                </div>

                {/* Quick action strip */}
                <div className="flex items-center gap-2.5 px-6 pb-4 shrink-0">
                  {onOpenStories && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setMobileMenuOpen(false); onOpenStories?.(); }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl cursor-pointer text-[12px] font-semibold"
                      style={{ background: 'rgba(242,213,138,0.18)', border: '1px solid rgba(242,213,138,0.3)', color: '#F2D58A' }}
                    >
                      <Sparkles size={13} />
                      60-Sec Tour
                    </motion.button>
                  )}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={bookVisit}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl cursor-pointer text-[12px] font-semibold"
                    style={{ background: 'rgba(233,161,138,0.25)', border: '1px solid rgba(233,161,138,0.4)', color: '#E9A18A' }}
                  >
                    <Calendar size={13} />
                    Book Visit
                  </motion.button>
                </div>

                {/* Thin divider */}
                <div className="mx-6 mb-4 h-px shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />

                {/* Nav sections — scrollable */}
                <div className="overflow-y-auto flex-1 px-4 pb-10 space-y-5">
                  {mobileDrawerSections.map((section, si) => (
                    <motion.div
                      key={section.group}
                      initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: si * 0.07 + 0.1, duration: 0.3 }}
                    >
                      {/* Group label */}
                      <div className="flex items-center gap-2 px-2 mb-2">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: section.color }}
                        />
                        <span className="text-[9px] uppercase tracking-[0.25em] font-bold"
                          style={{ color: `${section.color}99` }}>
                          {section.group}
                        </span>
                      </div>

                      {/* Items */}
                      <div className="space-y-1.5">
                        {section.items.map((item, ii) => {
                          const Icon = item.icon;
                          const isActive = activeSection === item.href;
                          return (
                            <motion.button
                              key={item.href}
                              initial={reduceMotion ? {} : { opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: si * 0.07 + ii * 0.04 + 0.15, duration: 0.25 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => navigateTo(item.href)}
                              className="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-left transition-all cursor-pointer"
                              style={{
                                background: isActive
                                  ? 'rgba(255,255,255,0.14)'
                                  : 'rgba(255,255,255,0.05)',
                                border: isActive
                                  ? '1px solid rgba(255,255,255,0.2)'
                                  : '1px solid rgba(255,255,255,0.06)',
                              }}
                            >
                              {/* Icon badge */}
                              <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: item.accent }}
                              >
                                <Icon size={16} className="text-[#5C4433]" />
                              </div>

                              {/* Text */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className={`text-[14px] font-semibold ${isActive ? 'text-white' : 'text-[#EDE4D6]'}`}>
                                    {item.label}
                                  </span>
                                  {item.special && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9A18A] animate-pulse shrink-0" />
                                  )}
                                </div>
                                <span className="text-[11px] text-[#9C8A75] leading-tight">
                                  {item.note}
                                </span>
                              </div>

                              {/* Arrow */}
                              <ArrowUpRight
                                size={15}
                                className={`shrink-0 transition-colors ${isActive ? 'text-white/60' : 'text-white/20'}`}
                              />
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="px-4 pb-6 pt-3 shrink-0 border-t"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={bookVisit}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl text-[14px] font-bold cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #E9A18A 0%, #D97E62 100%)',
                      color: '#fff',
                      boxShadow: '0 8px 24px rgba(217,126,98,0.4)',
                    }}
                  >
                    <Calendar size={16} />
                    Book a Centre Visit
                  </motion.button>
                  <p className="text-center text-[10px] text-[#9C8A75] mt-2.5">
                    3 centres open · Nanakramguda, Kokapet, Narsingi
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-3 py-2 rounded-full text-[13px] font-medium
        transition-colors duration-200 cursor-pointer
        ${
          active
            ? 'text-[#3D2F1F] font-semibold'
            : 'text-[#75644D] hover:text-[#3D2F1F] hover:bg-[#F4EDDF]'
        }
      `}
    >
      {active && (
        <motion.span
          layoutId="navigation-active-pill"
          className="absolute inset-0 rounded-full bg-[#F0E7D7]"
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 30,
          }}
        />
      )}

      <span className="relative z-10 flex items-center gap-1.5">
        {item.label}

        {item.special && (
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-[#E9A18A] animate-ping opacity-50" />
            <span className="relative w-2 h-2 rounded-full bg-[#D98F77]" />
          </span>
        )}
      </span>
    </button>
  );
}

// Brand logo
function LogoMark({ size = 34 }) {
  return (
    <motion.div
      animate={{ rotate: [-2, 2, -2] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="shrink-0"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          cx="18"
          cy="18"
          rx="16"
          ry="15"
          fill="#E8D5B5"
          opacity="0.35"
        />

        <circle cx="11" cy="12" r="4.5" fill="#E9A18A" />
        <circle cx="21" cy="9" r="4" fill="#F2D58A" />
        <circle cx="27" cy="16" r="4" fill="#A8B99A" />
        <circle
          cx="24"
          cy="25"
          r="3.5"
          fill="#E9A18A"
          opacity="0.8"
        />

        <text
          x="9"
          y="27"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="19"
          fontWeight="700"
          fill="#3D2F1F"
        >
          R
        </text>
      </svg>
    </motion.div>
  );
}
