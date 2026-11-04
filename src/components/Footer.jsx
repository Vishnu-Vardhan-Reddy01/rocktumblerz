import { motion } from 'motion/react';

const navColumns = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Our Approach', href: '#philosophy' },
      { label: 'Experiences', href: '#experiences' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Book a Visit', href: 'mailto:hello@rocktumblerz.com?subject=Book a Visit' },
      { label: 'Email Us', href: 'mailto:hello@rocktumblerz.com' },
      { label: 'Call Us', href: 'tel:+10000000000' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
    ],
  },
];

function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="22" cy="24" r="17" fill="#F5F0E7" opacity="0.15" />
        <circle cx="15" cy="13" r="5.5" fill="#E9A18A" />
        <circle cx="24" cy="10" r="4.5" fill="#F2D58A" />
        <circle cx="33" cy="16" r="5" fill="#A8B99A" />
        <circle cx="32" cy="27" r="3.5" fill="#E9A18A" opacity="0.7" />
        <text x="12" y="35" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#F9F6EF">R</text>
      </svg>
      <div>
        <div className="font-display text-[22px] font-bold text-[#F9F6EF] leading-none">Rock</div>
        <div className="font-display text-[18px] font-semibold text-[#D8C9AD] leading-none">tumblerz</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3D2F1F] text-[#D8C9AD] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-14 border-b border-white/10">
          {/* Brand column */}
          <div className="flex-1 max-w-sm">
            <FooterLogo />
            <p className="mt-5 text-[15px] text-[#B9A17D] leading-relaxed">
              An exploratory studio for toddlers where curiosity leads the way, imagination takes flight, and every little discovery becomes a big adventure.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E9A18A]/30 transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#D8C9AD]">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B7355] mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }
                        }}
                        className="text-[15px] text-[#B9A17D] hover:text-[#F9F6EF] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact info */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B7355] mb-5">Find Us</h4>
              <div className="space-y-3 text-[15px] text-[#B9A17D]">
                <p>Nanakramguda<br /> Hyderabad, India</p>
                <a href="mailto:hello@rocktumblerz.com" className="block hover:text-[#F9F6EF] transition-colors duration-200">
                  hello@rocktumblerz.com
                </a>
                <a href="tel:+10000000000" className="block hover:text-[#F9F6EF] transition-colors duration-200">
                  +1 (000) 000-0000
                </a>
                <p className="text-[#6B5B3E] text-[13px] pt-2">
                  Mon–Fri: 9am – 1pm<br />
                  (sample hours, subject to change)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-[#6B5B3E]">
          <p>© {new Date().getFullYear()} Rock Tumblerz. All rights reserved.</p>
          <p className="text-[#5B4520]">Exploratory Studio for Toddlers</p>
        </div>
      </div>
    </footer>
  );
}

