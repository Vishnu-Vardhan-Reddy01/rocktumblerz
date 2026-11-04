import { useRef, useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';

/* ───────────────────────────────────────────────────────────────────────────
   KEEP these two from your existing file, unchanged, ABOVE this code:
     - const SceneSVG = ({ scene, color }) => { ... }
     - const galleryItems = [ ... ]
   Replace GallerySection + GalleryCard with everything below.
   Only the import line changes (see top of this file).
─────────────────────────────────────────────────────────────────────────── */

const SceneSVG = ({ scene, color }) => {
  const scenes = {
    pebbles: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <ellipse cx="160" cy="195" rx="145" ry="32" fill="white" opacity="0.1" />
        <ellipse cx="105" cy="155" rx="60" ry="38" fill="#C8B898" opacity="0.65" />
        <ellipse cx="215" cy="160" rx="75" ry="44" fill="#D8C9AD" opacity="0.65" />
        <ellipse cx="160" cy="132" rx="82" ry="52" fill="#B9A17D" opacity="0.55" />
        {/* Main happy pebble character */}
        <ellipse cx="160" cy="108" rx="42" ry="46" fill="url(#pg1)" />
        <circle cx="147" cy="97" r="8" fill="white" opacity="0.9" />
        <circle cx="173" cy="97" r="8" fill="white" opacity="0.9" />
        <circle cx="148" cy="99" r="5" fill="#3D2F1F" />
        <circle cx="174" cy="99" r="5" fill="#3D2F1F" />
        <circle cx="150" cy="96.5" r="2" fill="white" />
        <circle cx="176" cy="96.5" r="2" fill="white" />
        <ellipse cx="137" cy="110" rx="10" ry="6" fill="#E9A18A" opacity="0.5" />
        <ellipse cx="183" cy="110" rx="10" ry="6" fill="#E9A18A" opacity="0.5" />
        <path d="M147 120 Q160 134 173 120" stroke="#3D2F1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Plants */}
        <path d="M60 180 Q58 158 60 136" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M60 162 Q46 148 38 132 Q52 140 60 158" fill="#A8B99A" />
        <circle cx="60" cy="130" r="8" fill="#E9A18A" opacity="0.85" />
        <path d="M262 178 Q260 156 262 134" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M262 160 Q276 146 284 130 Q270 138 262 156" fill="#A8B99A" />
        <circle cx="262" cy="128" r="8" fill="#F2D58A" opacity="0.85" />
        <defs>
          <radialGradient id="pg1" cx="38%" cy="30%" r="68%">
            <stop offset="0%" stopColor="#F0C888" /><stop offset="100%" stopColor="#C89040" />
          </radialGradient>
        </defs>
      </svg>
    ),
    art: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <circle cx="90" cy="95" r="38" fill="#E9A18A" opacity="0.6" />
        <circle cx="165" cy="78" r="30" fill="#A8B99A" opacity="0.6" />
        <circle cx="232" cy="100" r="34" fill="#F2D58A" opacity="0.6" />
        <circle cx="130" cy="135" r="24" fill="#B9A17D" opacity="0.45" />
        <rect x="220" y="40" width="7" height="52" rx="3.5" fill="#8B7355" transform="rotate(22 220 40)" />
        <path d="M244 28 L252 48 L232 56 Z" fill="#E9A18A" />
        <ellipse cx="78" cy="158" rx="22" ry="25" fill="#E8C070" />
        <circle cx="70" cy="147" r="6.5" fill="white" opacity="0.9" />
        <circle cx="86" cy="147" r="6.5" fill="white" opacity="0.9" />
        <circle cx="70.5" cy="149" r="4" fill="#3D2F1F" />
        <circle cx="86.5" cy="149" r="4" fill="#3D2F1F" />
        <path d="M70 160 Q78 168 86 160" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    plants: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <ellipse cx="160" cy="208" rx="145" ry="18" fill="#D8C9AD" opacity="0.35" />
        <path d="M80 208 Q78 172 80 136" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 178 Q60 160 46 138 Q66 148 80 170" fill="#A8B99A" />
        <path d="M80 178 Q100 160 114 138 Q94 148 80 170" fill="#8BAD7A" />
        <circle cx="80" cy="128" r="12" fill="#E9A18A" opacity="0.9" /><circle cx="80" cy="128" r="7.5" fill="#F2D58A" />
        <path d="M160 208 Q158 164 160 120" stroke="#8BAD7A" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M160 178 Q136 158 122 130 Q148 144 160 172" fill="#A8B99A" />
        <path d="M160 178 Q184 158 198 130 Q172 144 160 172" fill="#8BAD7A" />
        <path d="M160 152 Q136 130 124 102 Q150 118 160 146" fill="#A8B99A" opacity="0.8" />
        <circle cx="160" cy="108" r="14" fill="#E9A18A" opacity="0.85" /><circle cx="160" cy="108" r="9" fill="#F2D58A" />
        <path d="M242 208 Q240 178 242 148" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M242 178 Q226 160 216 140 Q232 150 242 170" fill="#A8B99A" />
        <path d="M242 178 Q258 160 268 140 Q252 150 242 170" fill="#8BAD7A" />
        <circle cx="242" cy="138" r="10" fill="#F2D58A" opacity="0.9" />
        <ellipse cx="92" cy="208" rx="14" ry="9" fill="#C8B898" opacity="0.7" />
        <ellipse cx="220" cy="208" rx="14" ry="9" fill="#D8C9AD" opacity="0.7" />
      </svg>
    ),
    clay: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <ellipse cx="100" cy="158" rx="52" ry="32" fill="#D8C9AD" />
        <ellipse cx="210" cy="152" rx="46" ry="28" fill="#C8B898" />
        <ellipse cx="155" cy="172" rx="62" ry="36" fill="#B9A17D" opacity="0.65" />
        <ellipse cx="155" cy="110" rx="38" ry="42" fill="#E8C070" />
        <ellipse cx="140" cy="97" rx="15" ry="17" fill="white" opacity="0.9" />
        <ellipse cx="170" cy="97" rx="15" ry="17" fill="white" opacity="0.9" />
        <circle cx="141" cy="100" r="9.5" fill="#3D2F1F" /><circle cx="171" cy="100" r="9.5" fill="#3D2F1F" />
        <circle cx="144" cy="97" r="3.8" fill="white" /><circle cx="174" cy="97" r="3.8" fill="white" />
        <ellipse cx="128" cy="114" rx="14" ry="8" fill="#E9A18A" opacity="0.5" />
        <ellipse cx="182" cy="114" rx="14" ry="8" fill="#E9A18A" opacity="0.5" />
        <path d="M138 128 Q155 144 172 128" stroke="#3D2F1F" strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="93" cy="144" rx="22" ry="12" fill="#D4A870" transform="rotate(-30 93 144)" />
        <ellipse cx="218" cy="140" rx="22" ry="12" fill="#D4A870" transform="rotate(35 218 140)" />
      </svg>
    ),
    trail: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <path d="M30 205 Q75 160 120 175 Q165 190 210 145 Q255 100 295 115" stroke="#C8B898" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M30 205 Q75 160 120 175 Q165 190 210 145 Q255 100 295 115" stroke="#D8C9AD" strokeWidth="13" strokeLinecap="round" fill="none" />
        <circle cx="75" cy="170" r="8" fill="#B9A17D" opacity="0.7" />
        <circle cx="165" cy="182" r="9" fill="#C8B898" opacity="0.7" />
        <circle cx="248" cy="130" r="8" fill="#B9A17D" opacity="0.7" />
        <ellipse cx="210" cy="128" rx="22" ry="24" fill="#E8C070" />
        <circle cx="201" cy="118" r="5.5" fill="white" opacity="0.9" /><circle cx="219" cy="118" r="5.5" fill="white" opacity="0.9" />
        <circle cx="201.5" cy="120" r="3.5" fill="#3D2F1F" /><circle cx="219.5" cy="120" r="3.5" fill="#3D2F1F" />
        <path d="M202 130 Q210 138 218 130" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M58 205 Q56 184 58 162" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="58" cy="156" r="9" fill="#A8B99A" opacity="0.8" />
        <circle cx="290" cy="100" r="9" fill="#E9A18A" opacity="0.8" />
      </svg>
    ),
    build: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <ellipse cx="160" cy="208" rx="80" ry="28" fill="#C8B898" opacity="0.55" />
        <ellipse cx="160" cy="194" rx="66" ry="22" fill="#D8C9AD" opacity="0.75" />
        <ellipse cx="160" cy="180" rx="55" ry="18" fill="#C8B898" opacity="0.85" />
        <ellipse cx="160" cy="166" rx="44" ry="15" fill="#D8C9AD" />
        <ellipse cx="160" cy="154" rx="35" ry="13" fill="#C8B898" />
        <ellipse cx="160" cy="142" rx="27" ry="11" fill="#D8C9AD" />
        <ellipse cx="160" cy="132" rx="20" ry="9" fill="#B9A17D" />
        <path d="M160 132 Q160 106 160 96" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="160" cy="92" rx="7" ry="4.5" fill="#E9A18A" />
        <ellipse cx="65" cy="200" rx="25" ry="28" fill="#E8C070" />
        <circle cx="56" cy="188" r="6" fill="white" opacity="0.9" /><circle cx="74" cy="188" r="6" fill="white" opacity="0.9" />
        <circle cx="56.5" cy="190" r="3.8" fill="#3D2F1F" /><circle cx="74.5" cy="190" r="3.8" fill="#3D2F1F" />
        <path d="M56 200 Q65 210 74 200" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="252" cy="202" rx="22" ry="24" fill="#D4A870" />
        <circle cx="244" cy="192" r="5.5" fill="white" opacity="0.9" /><circle cx="260" cy="192" r="5.5" fill="white" opacity="0.9" />
        <circle cx="244.5" cy="194" r="3.5" fill="#3D2F1F" /><circle cx="260.5" cy="194" r="3.5" fill="#3D2F1F" />
        <path d="M244 202 Q252 210 260 202" stroke="#3D2F1F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    water: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <ellipse cx="160" cy="172" rx="110" ry="40" fill="#A8C8D8" opacity="0.45" />
        <ellipse cx="160" cy="172" rx="110" ry="40" fill="#C0D8E8" opacity="0.25" />
        <ellipse cx="160" cy="168" rx="65" ry="18" stroke="#A8C8D8" strokeWidth="2" fill="none" opacity="0.6" />
        <ellipse cx="160" cy="168" rx="42" ry="12" stroke="#A8C8D8" strokeWidth="1.5" fill="none" opacity="0.4" />
        <ellipse cx="114" cy="176" rx="18" ry="12" fill="#B9A17D" opacity="0.75" />
        <ellipse cx="210" cy="180" rx="20" ry="14" fill="#C8B898" opacity="0.75" />
        <circle cx="100" cy="122" r="9" fill="#A8C8D8" opacity="0.75" />
        <circle cx="218" cy="110" r="7" fill="#A8C8D8" opacity="0.65" />
        <circle cx="160" cy="105" r="5.5" fill="#A8C8D8" opacity="0.55" />
        <ellipse cx="160" cy="146" rx="28" ry="30" fill="#E8C070" />
        <circle cx="149" cy="133" r="7" fill="white" opacity="0.9" /><circle cx="171" cy="133" r="7" fill="white" opacity="0.9" />
        <circle cx="149.5" cy="135" r="4.5" fill="#3D2F1F" /><circle cx="171.5" cy="135" r="4.5" fill="#3D2F1F" />
        <path d="M149 146 Q160 156 171 146" stroke="#3D2F1F" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    ),
    story: (
      <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
        <rect width="320" height="220" fill={color} />
        <path d="M55 95 Q55 78 68 78 L160 78 L160 170 Q160 178 152 178 L63 178 Q55 178 55 170 Z" fill="#F9F6EF" stroke="#D8C9AD" strokeWidth="1.5" />
        <path d="M160 78 L252 78 Q265 78 265 95 L265 170 Q265 178 257 178 L168 178 Q160 178 160 170 Z" fill="#F5F0E7" stroke="#D8C9AD" strokeWidth="1.5" />
        <line x1="72" y1="102" x2="142" y2="102" stroke="#D8C9AD" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="116" x2="142" y2="116" stroke="#D8C9AD" strokeWidth="2" strokeLinecap="round" />
        <line x1="72" y1="130" x2="128" y2="130" stroke="#D8C9AD" strokeWidth="2" strokeLinecap="round" />
        <line x1="175" y1="102" x2="245" y2="102" stroke="#D8C9AD" strokeWidth="2" strokeLinecap="round" />
        <line x1="175" y1="116" x2="245" y2="116" stroke="#D8C9AD" strokeWidth="2" strokeLinecap="round" />
        <circle cx="210" cy="148" r="22" fill="#F2D58A" opacity="0.35" />
        <ellipse cx="210" cy="152" rx="17" ry="18" fill="#E8C070" />
        <circle cx="202" cy="143" r="5" fill="white" opacity="0.9" /><circle cx="218" cy="143" r="5" fill="white" opacity="0.9" />
        <circle cx="202.5" cy="145" r="3" fill="#3D2F1F" /><circle cx="218.5" cy="145" r="3" fill="#3D2F1F" />
        <path d="M75" cy="200" />
        <ellipse cx="82" cy="198" rx="19" ry="21" fill="#E8C070" />
        <circle cx="74" cy="189" r="5" fill="white" opacity="0.9" /><circle cx="90" cy="189" r="5" fill="white" opacity="0.9" />
        <circle cx="74.5" cy="191" r="3.2" fill="#3D2F1F" /><circle cx="90.5" cy="191" r="3.2" fill="#3D2F1F" />
        <ellipse cx="160" cy="198" rx="19" ry="21" fill="#D4A870" />
        <circle cx="152" cy="189" r="5" fill="white" opacity="0.9" /><circle cx="168" cy="189" r="5" fill="white" opacity="0.9" />
        <circle cx="152.5" cy="191" r="3.2" fill="#3D2F1F" /><circle cx="168.5" cy="191" r="3.2" fill="#3D2F1F" />
        <ellipse cx="240" cy="198" rx="18" ry="20" fill="#E8C080" />
        <circle cx="232" cy="189" r="4.5" fill="white" opacity="0.9" /><circle cx="248" cy="189" r="4.5" fill="white" opacity="0.9" />
        <circle cx="232.5" cy="191" r="2.8" fill="#3D2F1F" /><circle cx="248.5" cy="191" r="2.8" fill="#3D2F1F" />
      </svg>
    ),
  };
  return scenes[scene] || <rect width="320" height="220" fill={color} />;
};

const galleryItems = [
  { id: 1, label: 'Sensory Garden',   color: '#EDE4D0', scene: 'pebbles', caption: 'Where little hands touch everything' },
  { id: 2, label: 'Creative Play',    color: '#F5EDD0', scene: 'art',     caption: 'Paint, colour, make magic' },
  { id: 3, label: 'Nature Corner',    color: '#D8E8CC', scene: 'plants',  caption: 'Growing up with growing things' },
  { id: 4, label: 'Clay Studio',      color: '#F0D8C0', scene: 'clay',    caption: 'Hands deep in beautiful mess' },
  // { id: 5, label: 'Discovery Trail',  color: '#E4D8C0', scene: 'trail',   caption: 'Every path leads to wonder' },
  // { id: 6, label: 'Tiny Builders',    color: '#F0EAD8', scene: 'build',   caption: 'Stacking stones, building worlds' },
  // { id: 7, label: 'Water Wonders',    color: '#D0E4E0', scene: 'water',   caption: 'Splash, pour, explore' },
  // { id: 8, label: 'Story Time',       color: '#F0D8E4', scene: 'story',   caption: 'Gathered around a great tale' },
];



/*
  GALLERY SECTION REDESIGN
  Keep your existing SceneSVG component and galleryItems array above this code.
  Replace everything from your old INTERVAL constant through ArrowButton with this.
*/

const INTERVAL = 4000;

export default function GallerySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });
  const reduceMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = galleryItems[active];
  const total = galleryItems.length;

  const goTo = useCallback((index) => {
    setActive((index + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const previous = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
  if (!isInView) return;

  const timer = window.setInterval(() => {
    setActive((index) => (index + 1) % total);
  }, INTERVAL);

  return () => window.clearInterval(timer);
}, [isInView, total]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      previous();
    }
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8F6F0] py-20 sm:py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {/* Soft decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-[#E8DCC8]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#DCE8D5]/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="mb-10 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C28F73]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#A77B60]">
                Our little explorers
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-[#3D3328] sm:text-4xl lg:text-[3.4rem]"
            >
              Little moments.
              <span className="block font-normal italic text-[#B58A70]">
                Big memories.
              </span>
            </motion.h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#817568] sm:text-base">
              Every day is a new adventure. Take a peek at the little things
              that make our world a special place to grow.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-end">
            <div className="min-w-[72px]">
              <p className="font-display text-2xl font-semibold tabular-nums text-[#3D3328]">
                {String(active + 1).padStart(2, '0')}
                <span className="ml-1 text-sm font-normal text-[#B7AA99]">
                  / {String(total).padStart(2, '0')}
                </span>
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A09281]">
                Exploring
              </p>
            </div>
            <div className="flex gap-2">
              <ArrowButton label="Previous activity" onClick={previous} direction="left" />
              <ArrowButton label="Next activity" onClick={next} direction="right" />
            </div>
          </div>
        </div>

        {/* Featured activity + activity selector */}
        <div
          className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]"
          onKeyDown={handleKeyDown}
        >
          {/* Main featured panel */}
          <div className="relative min-w-0">
            <div
              className="relative min-h-[360px] overflow-hidden rounded-[28px] sm:min-h-[470px] sm:rounded-[34px] lg:min-h-[550px]"
              style={{ backgroundColor: current.color }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0">
                    <SceneSVG scene={current.scene} color={current.color} />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Gentle image wash for a more finished composition */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D3328]/35 via-transparent to-white/10" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/50 bg-white/55 px-3.5 py-2 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A5B58D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#665747]">
                  A day full of wonder
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${current.id}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, delay: 0.12 }}
                  className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10"
                >
                  <div className="max-w-xl rounded-2xl border border-white/35 bg-[#FBF8F1]/85 p-5 shadow-[0_10px_40px_rgba(61,51,40,0.08)] backdrop-blur-lg sm:p-7">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A77B60]">
                      Activity {String(active + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-[#3D3328] sm:text-3xl">
                      {current.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#817568] sm:text-base">
                      {current.caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress indicator */}
              <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden bg-[#3D3328]/10">
                <div
                  key={`progress-${active}-${paused}`}
                  className="h-full origin-left bg-[#B9876D]"
                  style={{
                    width: paused || reduceMotion ? '0%' : '100%',
                    animation: !paused && !reduceMotion && isInView
                      ? `gallery-progress ${INTERVAL}ms linear forwards`
                      : 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Activity selector */}
          <div className="flex min-w-0 flex-col">
            <div className="mb-3 hidden items-center justify-between px-1 lg:flex">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A09281]">
                Explore activities
              </p>
              <span className="text-xs text-[#B5A897]">Select a moment</span>
            </div>

            <div
              role="tablist"
              aria-label="Choose a gallery activity"
              className="flex gap-3 overflow-x-auto pb-2 lg:h-full lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {galleryItems.map((item, index) => {
                const selected = index === active;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={`Show ${item.label}`}
                    onClick={() => goTo(index)}
                    className={[
                      'group flex shrink-0 items-center gap-3 rounded-2xl border p-2 text-left transition-all duration-300',
                      'w-[220px] sm:w-[245px] lg:w-full lg:flex-1',
                      selected
                        ? 'border-[#D7B59E] bg-white shadow-[0_8px_24px_rgba(61,51,40,0.07)]'
                        : 'border-transparent bg-white/45 hover:border-[#E5D8C8] hover:bg-white/80',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9876D] focus-visible:ring-offset-2',
                    ].join(' ')}
                  >
                    <span
                      className="relative h-[62px] w-[76px] shrink-0 overflow-hidden rounded-xl sm:h-[68px] sm:w-[84px]"
                      style={{ backgroundColor: item.color }}
                    >
                      <SceneSVG scene={item.scene} color={item.color} />
                    </span>

                    <span className="min-w-0 flex-1 py-1">
                      <span className="mb-1 block text-[9px] font-bold tracking-[0.15em] text-[#B19B83]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={[
                        'block truncate text-xs font-semibold transition-colors sm:text-[13px]',
                        selected ? 'text-[#493B2E]' : 'text-[#817568] group-hover:text-[#493B2E]',
                      ].join(' ')}>
                        {item.label}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={[
                        'mr-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all',
                        selected
                          ? 'bg-[#F1E5DA] text-[#A77B60]'
                          : 'text-[#B8AA98] group-hover:bg-[#F4EDE5]',
                      ].join(' ')}
                    >
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                        <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#E9E1D6] pt-5">
          <p className="text-xs leading-5 text-[#9A8D7D]">
            A little curiosity goes a long way.
          </p>
          
        </div>
      </div>

      <style>{`
        @keyframes gallery-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

function ArrowButton({ label, onClick, direction }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED4C7] bg-white/70 text-[#625343] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#B9876D] hover:bg-[#B9876D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9876D] focus-visible:ring-offset-2"
    >
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none">
        {direction === 'right' ? (
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M19 12H5m6-6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}
