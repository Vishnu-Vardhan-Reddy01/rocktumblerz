import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3D2F1F] text-[#D8C9AD] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <FooterLogo />
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  ROCK TUMBLERZ
                </h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#B9A17D]">
                  Exploratory Studio for Toddlers
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D8C9AD]/80 leading-relaxed max-w-sm">
              A movement-led preschool where the freedom of play and the purpose of teaching come together through open playscapes and imaginative Learning Worlds.
            </p>

            <div className="pt-2 text-xs text-[#F2D58A] font-semibold">
              Movement is the Curriculum. Readiness Before Academics.
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking && onOpenBooking('nanakramguda')}
                className="px-5 py-2.5 rounded-full bg-[#F2D58A] text-[#3D2F1F] font-semibold text-xs hover:bg-[#E8C060] transition-colors cursor-pointer"
              >
                Book a Centre Visit
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#philosophy"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#philosophy'); }}
                  className="hover:text-white transition-colors"
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#movement"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#movement'); }}
                  className="hover:text-white transition-colors"
                >
                  Why Movement Matters
                </a>
              </li>
              <li>
                <a
                  href="#foundations"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#foundations'); }}
                  className="hover:text-white transition-colors"
                >
                  Six Foundations
                </a>
              </li>
              <li>
                <a
                  href="#child-report"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#child-report'); }}
                  className="hover:text-white transition-colors"
                >
                  Child Understanding Report
                </a>
              </li>
              <li>
                <a
                  href="#daily-rhythm"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#daily-rhythm'); }}
                  className="hover:text-white transition-colors"
                >
                  A Morning at Rock Tumblerz
                </a>
              </li>
              <li>
                <a
                  href="#people"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#people'); }}
                  className="hover:text-white transition-colors"
                >
                  People & Expertise
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions & Info Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#admissions"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#admissions'); }}
                  className="hover:text-white transition-colors"
                >
                  Programme at a Glance
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#admissions'); }}
                  className="hover:text-white transition-colors"
                >
                  Gradual Transition Pace
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <span className="text-[#8B7355] block pt-2 text-[11px] uppercase tracking-wider font-semibold">
                  Hours:
                </span>
                <span className="text-[#D8C9AD] text-xs">Mon–Fri: 9:00 AM – 12:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Centres in Hyderabad Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Our Hyderabad Centres
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Nanakramguda</span>
                  <span className="text-[10px] bg-[#A8B99A]/20 text-[#A8B99A] px-2 py-0.5 rounded-full font-bold">Open</span>
                </div>
                <p className="text-[#D8C9AD]/80 text-xs mt-0.5">Rock Tumblerz at Kidz District</p>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Kokapet</span>
                  <span className="text-[10px] bg-[#E9A18A]/20 text-[#E9A18A] px-2 py-0.5 rounded-full font-bold">Open</span>
                </div>
                <p className="text-[#D8C9AD]/80 text-xs mt-0.5">Rock Tumblerz at Peekazoo</p>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Kismathpur</span>
                  <span className="text-[10px] bg-[#F2D58A]/20 text-[#F2D58A] px-2 py-0.5 rounded-full font-bold">Coming Soon</span>
                </div>
                <p className="text-[#D8C9AD]/80 text-xs mt-0.5">Rock Tumblerz at Play Panda</p>
              </div>
            </div>
          </div>

        </div>

        {/* Educational References Bar from PDF */}
        <div className="py-6 border-b border-white/10 text-xs text-[#D8C9AD]/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-white/80">Educational & Research References:</span>
            <span>American Academy of Pediatrics — The Power of Play</span>
            <span>•</span>
            <span>National Education Policy (NEP 2020)</span>
            <span>•</span>
            <span>NCERT National Curriculum Framework for Foundational Stage</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#F2D58A] hover:underline cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8C9AD]/50 gap-3">
          <p>© {new Date().getFullYear()} Rock Tumblerz. All rights reserved. Exploratory Studio for Toddlers (Ages 1–4).</p>
          <p className="italic">
            "Because preparing children for school should never mean rushing them through childhood."
          </p>
        </div>

      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="18" cy="18" rx="16" ry="15" fill="#E8D5B5" opacity="0.2" />
      <circle cx="11" cy="12" r="4.5" fill="#E9A18A" />
      <circle cx="21" cy="9" r="4" fill="#F2D58A" />
      <circle cx="27" cy="16" r="4" fill="#A8B99A" />
      <circle cx="24" cy="25" r="3.5" fill="#E9A18A" opacity="0.8" />
      <text x="9" y="27" fontFamily="Playfair Display, Georgia, serif" fontSize="19" fontWeight="700" fill="#F9F6EF">
        R
      </text>
    </svg>
  );
}
