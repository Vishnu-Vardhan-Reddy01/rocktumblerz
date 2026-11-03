import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const initMap = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -32 },
    right: { opacity: 0, x: 32 },
    scale: { opacity: 0, scale: 0.92 },
  };
  const initial = initMap[direction] || initMap.up;
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Gallery items — organic illustrated placeholder tiles with SVG scenes
const galleryItems = [
  {
    id: 1,
    label: 'Sensory garden',
    color: '#E8D4B0',
    size: 'large',
    scene: 'pebbles',
  },
  {
    id: 2,
    label: 'Creative play',
    color: '#F2D58A',
    size: 'small',
    scene: 'art',
  },
  {
    id: 3,
    label: 'Nature corner',
    color: '#C8D8B8',
    size: 'small',
    scene: 'plants',
  },
  {
    id: 4,
    label: 'Clay studio',
    color: '#F0C8B0',
    size: 'medium',
    scene: 'clay',
  },
  {
    id: 5,
    label: 'Discovery trail',
    color: '#D8C9AD',
    size: 'small',
    scene: 'trail',
  },
  {
    id: 6,
    label: 'Tiny builders',
    color: '#F5E8C8',
    size: 'large',
    scene: 'build',
  },
  {
    id: 7,
    label: 'Water wonders',
    color: '#C0D8D0',
    size: 'small',
    scene: 'water',
  },
  {
    id: 8,
    label: 'Story time',
    color: '#E8C8D8',
    size: 'medium',
    scene: 'story',
  },
];

const SceneSVG = ({ scene, color }) => {
  const scenes = {
    pebbles: (
      <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
        <rect width="200" height="160" fill={color} />
        <ellipse cx="100" cy="130" rx="90" ry="28" fill="white" opacity="0.12" />
        <ellipse cx="70" cy="110" rx="40" ry="25" fill="#C8B898" opacity="0.7" />
        <ellipse cx="130" cy="115" rx="50" ry="30" fill="#D8C9AD" opacity="0.7" />
        <ellipse cx="100" cy="95" rx="55" ry="35" fill="#B9A17D" opacity="0.6" />
        <ellipse cx="70" cy="110" rx="40" ry="25" fill="white" opacity="0.08" />
        {/* Main character */}
        <ellipse cx="100" cy="76" rx="28" ry="30" fill="#E8C070" />
        <circle cx="90" cy="68" r="5" fill="white" opacity="0.9" />
        <circle cx="110" cy="68" r="5" fill="white" opacity="0.9" />
        <circle cx="90.5" cy="69" r="3" fill="#3D2F1F" />
        <circle cx="110.5" cy="69" r="3" fill="#3D2F1F" />
        <path d="M90 80 Q100 90 110 80" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Plants */}
        <path d="M40 110 Q38 95 40 80" stroke="#8BAD7A" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 98 Q32 88 26 78 Q36 84 40 94" fill="#A8B99A" />
        <circle cx="40" cy="76" r="5" fill="#E9A18A" opacity="0.9" />
        <path d="M160 108 Q158 93 160 78" stroke="#8BAD7A" strokeWidth="2" strokeLinecap="round" />
        <path d="M160 96 Q168 86 174 76 Q164 82 160 92" fill="#A8B99A" />
        <circle cx="160" cy="74" r="5" fill="#F2D58A" opacity="0.9" />
        {/* Small pebbles */}
        <ellipse cx="50" cy="130" rx="12" ry="8" fill="#C8B898" opacity="0.8" />
        <ellipse cx="155" cy="128" rx="14" ry="9" fill="#D8C9AD" opacity="0.8" />
      </svg>
    ),
    art: (
      <svg viewBox="0 0 160 130" fill="none" className="w-full h-full">
        <rect width="160" height="130" fill={color} />
        {/* Paint splats */}
        <circle cx="50" cy="60" r="22" fill="#E9A18A" opacity="0.65" />
        <circle cx="90" cy="45" r="18" fill="#A8B99A" opacity="0.65" />
        <circle cx="120" cy="65" r="20" fill="#F2D58A" opacity="0.65" />
        <circle cx="70" cy="80" r="15" fill="#B9A17D" opacity="0.5" />
        {/* Brush */}
        <rect x="115" y="25" width="5" height="35" rx="2.5" fill="#8B7355" transform="rotate(20 115 25)" />
        <path d="M130 18 L135 30 L120 35 Z" fill="#E9A18A" />
        {/* Small character */}
        <ellipse cx="45" cy="95" rx="14" ry="16" fill="#E8C070" />
        <circle cx="40" cy="89" r="3.5" fill="white" opacity="0.9" />
        <circle cx="50" cy="89" r="3.5" fill="white" opacity="0.9" />
        <circle cx="40.5" cy="90" r="2" fill="#3D2F1F" />
        <circle cx="50.5" cy="90" r="2" fill="#3D2F1F" />
        <path d="M40 97 Q45 103 50 97" stroke="#3D2F1F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    ),
    plants: (
      <svg viewBox="0 0 150 140" fill="none" className="w-full h-full">
        <rect width="150" height="140" fill={color} />
        {/* Ground */}
        <ellipse cx="75" cy="128" rx="70" ry="16" fill="#D8C9AD" opacity="0.4" />
        {/* Multiple plants */}
        <path d="M40 128 Q38 105 40 82" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 110 Q28 98 20 84 Q34 90 40 106" fill="#A8B99A" />
        <path d="M40 110 Q52 98 60 84 Q46 90 40 106" fill="#8BAD7A" />
        <circle cx="40" cy="76" r="8" fill="#E9A18A" opacity="0.9" />
        <circle cx="40" cy="76" r="5" fill="#F2D58A" />
        <path d="M75" cy="128" />
        <path d="M75 128 Q73 100 75 72" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
        <path d="M75 108 Q58 94 48 78 Q66 86 75 104" fill="#A8B99A" />
        <path d="M75 108 Q92 94 102 78 Q84 86 75 104" fill="#8BAD7A" />
        <path d="M75 88 Q58 72 50 54 Q68 62 75 84" fill="#A8B99A" opacity="0.8" />
        <circle cx="75" cy="60" r="10" fill="#E9A18A" opacity="0.85" />
        <circle cx="75" cy="60" r="6.5" fill="#F2D58A" />
        <path d="M115 128 Q113 108 115 88" stroke="#8BAD7A" strokeWidth="2" strokeLinecap="round" />
        <path d="M115 112 Q105 100 98 88 Q110 94 115 108" fill="#A8B99A" />
        <path d="M115 112 Q125 100 132 88 Q120 94 115 108" fill="#8BAD7A" />
        <circle cx="115" cy="82" r="7" fill="#F2D58A" opacity="0.9" />
        {/* Pebbles base */}
        <ellipse cx="55" cy="128" rx="10" ry="6" fill="#C8B898" opacity="0.7" />
        <ellipse cx="92" cy="130" rx="8" ry="5" fill="#D8C9AD" opacity="0.7" />
      </svg>
    ),
    clay: (
      <svg viewBox="0 0 180 150" fill="none" className="w-full h-full">
        <rect width="180" height="150" fill={color} />
        {/* Clay shapes */}
        <ellipse cx="60" cy="100" rx="35" ry="22" fill="#D8C9AD" />
        <ellipse cx="120" cy="95" rx="30" ry="20" fill="#C8B898" />
        <ellipse cx="90" cy="110" rx="40" ry="25" fill="#B9A17D" opacity="0.7" />
        {/* Little sculptured character */}
        <ellipse cx="90" cy="72" rx="25" ry="28" fill="#E8C070" />
        <circle cx="82" cy="64" r="5" fill="white" opacity="0.9" />
        <circle cx="98" cy="64" r="5" fill="white" opacity="0.9" />
        <circle cx="82.5" cy="65" r="3" fill="#3D2F1F" />
        <circle cx="98.5" cy="65" r="3" fill="#3D2F1F" />
        <path d="M83 76 Q90 84 97 76" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="78" cy="72" rx="8" ry="5" fill="#E9A18A" opacity="0.45" />
        <ellipse cx="102" cy="72" rx="8" ry="5" fill="#E9A18A" opacity="0.45" />
        {/* Hands working clay */}
        <ellipse cx="60" cy="90" rx="14" ry="8" fill="#D4A870" transform="rotate(-30 60 90)" />
        <ellipse cx="120" cy="88" rx="14" ry="8" fill="#D4A870" transform="rotate(35 120 88)" />
        {/* Tools */}
        <path d="M150 40 L140 80" stroke="#8B7355" strokeWidth="3" strokeLinecap="round" />
        <circle cx="148" cy="36" r="5" fill="#A8B99A" />
      </svg>
    ),
    trail: (
      <svg viewBox="0 0 160 140" fill="none" className="w-full h-full">
        <rect width="160" height="140" fill={color} />
        {/* Winding path */}
        <path d="M20 130 Q40 100 60 110 Q80 120 100 90 Q120 60 140 70" stroke="#C8B898" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M20 130 Q40 100 60 110 Q80 120 100 90 Q120 60 140 70" stroke="#D8C9AD" strokeWidth="8" strokeLinecap="round" fill="none" />
        {/* Pebbles along path */}
        <circle cx="40" cy="108" r="5" fill="#B9A17D" opacity="0.7" />
        <circle cx="80" cy="115" r="6" fill="#C8B898" opacity="0.7" />
        <circle cx="115" cy="82" r="5" fill="#B9A17D" opacity="0.7" />
        {/* Little explorer */}
        <ellipse cx="100" cy="76" rx="14" ry="15" fill="#E8C070" />
        <circle cx="95" cy="70" r="3.5" fill="white" opacity="0.9" />
        <circle cx="105" cy="70" r="3.5" fill="white" opacity="0.9" />
        <circle cx="95.5" cy="71" r="2.2" fill="#3D2F1F" />
        <circle cx="105.5" cy="71" r="2.2" fill="#3D2F1F" />
        <path d="M96 80 Q100 86 104 80" stroke="#3D2F1F" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Plants */}
        <path d="M30 130 Q28 115 30 100" stroke="#8BAD7A" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="96" r="6" fill="#A8B99A" opacity="0.8" />
        <circle cx="145" cy="56" r="6" fill="#E9A18A" opacity="0.8" />
      </svg>
    ),
    build: (
      <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
        <rect width="200" height="160" fill={color} />
        {/* Stacked stone tower */}
        <ellipse cx="100" cy="140" rx="50" ry="18" fill="#C8B898" opacity="0.6" />
        <ellipse cx="100" cy="122" rx="42" ry="15" fill="#D8C9AD" opacity="0.8" />
        <ellipse cx="100" cy="107" rx="35" ry="13" fill="#C8B898" opacity="0.9" />
        <ellipse cx="100" cy="94" rx="28" ry="11" fill="#D8C9AD" />
        <ellipse cx="100" cy="83" rx="22" ry="9" fill="#C8B898" />
        <ellipse cx="100" cy="74" rx="17" ry="8" fill="#D8C9AD" />
        {/* Top stone */}
        <ellipse cx="100" cy="66" rx="12" ry="7" fill="#B9A17D" />
        {/* Flag / plant */}
        <path d="M100 66 Q100 44 100 38" stroke="#8BAD7A" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="100" cy="35" rx="5" ry="3" fill="#E9A18A" />
        {/* Little characters watching */}
        <ellipse cx="40" cy="135" rx="16" ry="18" fill="#E8C070" />
        <circle cx="34" cy="128" r="4" fill="white" opacity="0.9" />
        <circle cx="46" cy="128" r="4" fill="white" opacity="0.9" />
        <circle cx="34.5" cy="129" r="2.5" fill="#3D2F1F" />
        <circle cx="46.5" cy="129" r="2.5" fill="#3D2F1F" />
        <path d="M35 137 Q40 143 45 137" stroke="#3D2F1F" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="158" cy="136" rx="14" ry="16" fill="#D4A870" />
        <circle cx="153" cy="130" r="3.5" fill="white" opacity="0.9" />
        <circle cx="163" cy="130" r="3.5" fill="white" opacity="0.9" />
        <circle cx="153.5" cy="131" r="2" fill="#3D2F1F" />
        <circle cx="163.5" cy="131" r="2" fill="#3D2F1F" />
        <path d="M153 138 Q158 144 163 138" stroke="#3D2F1F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    ),
    water: (
      <svg viewBox="0 0 150 130" fill="none" className="w-full h-full">
        <rect width="150" height="130" fill={color} />
        {/* Water basin */}
        <ellipse cx="75" cy="100" rx="55" ry="22" fill="#A8C8D8" opacity="0.5" />
        <ellipse cx="75" cy="100" rx="55" ry="22" fill="#C0D8E8" opacity="0.3" />
        {/* Ripples */}
        <ellipse cx="75" cy="98" rx="30" ry="10" stroke="#A8C8D8" strokeWidth="1.5" fill="none" opacity="0.7" />
        <ellipse cx="75" cy="98" rx="20" ry="7" stroke="#A8C8D8" strokeWidth="1.2" fill="none" opacity="0.5" />
        {/* Stones in water */}
        <ellipse cx="55" cy="102" rx="10" ry="7" fill="#B9A17D" opacity="0.8" />
        <ellipse cx="95" cy="105" rx="12" ry="8" fill="#C8B898" opacity="0.8" />
        {/* Water drops */}
        <circle cx="50" cy="72" r="5" fill="#A8C8D8" opacity="0.8" />
        <circle cx="100" cy="65" r="4" fill="#A8C8D8" opacity="0.7" />
        <circle cx="75" cy="60" r="3" fill="#A8C8D8" opacity="0.6" />
        {/* Character playing */}
        <ellipse cx="75" cy="80" rx="18" ry="20" fill="#E8C070" />
        <circle cx="68" cy="73" r="4.5" fill="white" opacity="0.9" />
        <circle cx="82" cy="73" r="4.5" fill="white" opacity="0.9" />
        <circle cx="68.5" cy="74" r="2.8" fill="#3D2F1F" />
        <circle cx="82.5" cy="74" r="2.8" fill="#3D2F1F" />
        <path d="M68 82 Q75 90 82 82" stroke="#3D2F1F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    story: (
      <svg viewBox="0 0 180 150" fill="none" className="w-full h-full">
        <rect width="180" height="150" fill={color} />
        {/* Open book */}
        <path d="M30 55 Q30 45 40 45 L90 45 L90 110 Q90 115 85 115 L35 115 Q30 115 30 110 Z" fill="#F9F6EF" stroke="#D8C9AD" strokeWidth="1.5" />
        <path d="M90 45 L140 45 Q150 45 150 55 L150 110 Q150 115 145 115 L95 115 Q90 115 90 110 Z" fill="#F5F0E7" stroke="#D8C9AD" strokeWidth="1.5" />
        {/* Book lines */}
        <line x1="42" y1="60" x2="82" y2="60" stroke="#D8C9AD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="70" x2="82" y2="70" stroke="#D8C9AD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="80" x2="75" y2="80" stroke="#D8C9AD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="98" y1="60" x2="138" y2="60" stroke="#D8C9AD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="98" y1="70" x2="138" y2="70" stroke="#D8C9AD" strokeWidth="1.5" strokeLinecap="round" />
        {/* Small illustration on right page */}
        <circle cx="118" cy="90" r="14" fill="#F2D58A" opacity="0.4" />
        <ellipse cx="118" cy="93" rx="10" ry="11" fill="#E8C070" />
        <circle cx="114" cy="88" r="3" fill="white" opacity="0.9" />
        <circle cx="122" cy="88" r="3" fill="white" opacity="0.9" />
        <circle cx="114.5" cy="89" r="1.8" fill="#3D2F1F" />
        <circle cx="122.5" cy="89" r="1.8" fill="#3D2F1F" />
        {/* Listening characters */}
        <ellipse cx="45" cy="135" rx="12" ry="13" fill="#E8C070" />
        <circle cx="40" cy="130" r="3" fill="white" opacity="0.9" />
        <circle cx="50" cy="130" r="3" fill="white" opacity="0.9" />
        <circle cx="40.5" cy="131" r="1.8" fill="#3D2F1F" />
        <circle cx="50.5" cy="131" r="1.8" fill="#3D2F1F" />
        <ellipse cx="90" cy="135" rx="12" ry="13" fill="#D4A870" />
        <circle cx="85" cy="130" r="3" fill="white" opacity="0.9" />
        <circle cx="95" cy="130" r="3" fill="white" opacity="0.9" />
        <circle cx="85.5" cy="131" r="1.8" fill="#3D2F1F" />
        <circle cx="95.5" cy="131" r="1.8" fill="#3D2F1F" />
        <ellipse cx="138" cy="136" rx="11" ry="12" fill="#E8C080" />
        <circle cx="133" cy="131" r="2.8" fill="white" opacity="0.9" />
        <circle cx="143" cy="131" r="2.8" fill="white" opacity="0.9" />
        <circle cx="133.5" cy="132" r="1.7" fill="#3D2F1F" />
        <circle cx="143.5" cy="132" r="1.7" fill="#3D2F1F" />
      </svg>
    ),
  };
  return scenes[scene] || (
    <svg viewBox="0 0 160 130" fill="none" className="w-full h-full">
      <rect width="160" height="130" fill={color} />
    </svg>
  );
};

function GalleryCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.93, y: 24 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden cursor-default group rounded-[24px] min-h-[180px] ${sizeClasses[item.size] || ''}`}
      style={{ background: item.color }}
    >
      {/* SVG Scene */}
      <motion.div
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        <SceneSVG scene={item.scene} color={item.color} />
      </motion.div>

      {/* Label overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-end p-5"
            style={{ background: 'linear-gradient(to top, rgba(61,47,31,0.5) 0%, transparent 60%)' }}
          >
            <span className="text-white font-semibold text-sm font-display">{item.label}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#F5F0E7] py-24 lg:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-4">
              Our Little Explorers
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3D2F1F] leading-tight max-w-xl mx-auto">
              A glimpse into the world of Rock Tumblerz.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base text-[#8B7355] max-w-md mx-auto italic">
              Replace these illustrated scenes with real photographs of your studio and children (with guardian consent).
            </p>
          </FadeIn>
        </div>

        {/* Irregular grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-[#B9A17D] italic">
            All illustrations are placeholders — upload your own photos to bring this gallery to life.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

