import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initMap = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -36 },
    right: { opacity: 0, x: 36 },
    scale: { opacity: 0, scale: 0.92 },
  };
  const initial = initMap[direction] || initMap.up;
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Experience Illustrations using SVG
const ExperienceIcon = ({ type }) => {
  const icons = {
    sensory: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="32" fill="url(#sg1)" opacity="0.15" />
        {/* Hands with texture elements */}
        <ellipse cx="30" cy="48" rx="18" ry="12" fill="#D8C9AD" transform="rotate(-20 30 48)" />
        <ellipse cx="52" cy="44" rx="16" ry="11" fill="#C8B898" transform="rotate(15 52 44)" />
        <circle cx="36" cy="36" r="6" fill="#A8B99A" opacity="0.8" />
        <circle cx="48" cy="34" r="5" fill="#E9A18A" opacity="0.7" />
        <circle cx="42" cy="42" r="4" fill="#F2D58A" opacity="0.8" />
        <defs><radialGradient id="sg1"><stop stopColor="#F2D58A"/><stop offset="1" stopColor="transparent"/></radialGradient></defs>
      </svg>
    ),
    creative: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="32" fill="#E9A18A" opacity="0.1" />
        <ellipse cx="40" cy="44" rx="22" ry="18" fill="#D8C9AD" />
        <circle cx="30" cy="36" r="7" fill="#E9A18A" opacity="0.8" />
        <circle cx="42" cy="32" r="6" fill="#F2D58A" opacity="0.85" />
        <circle cx="54" cy="38" r="7" fill="#A8B99A" opacity="0.8" />
        <path d="M22 50 Q40 58 58 50" stroke="#B9A17D" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>
    ),
    nature: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="32" fill="#A8B99A" opacity="0.1" />
        {/* Leaf stack */}
        <path d="M40 20 Q28 30 28 46 Q36 52 40 56 Q44 52 52 46 Q52 30 40 20Z" fill="#A8B99A" />
        <path d="M40 22 Q32 32 32 44" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="40" y1="20" x2="40" y2="56" stroke="white" strokeWidth="1.2" opacity="0.35" />
        {/* Small pebbles at base */}
        <ellipse cx="32" cy="60" rx="8" ry="5" fill="#C8B898" />
        <ellipse cx="48" cy="60" rx="8" ry="5" fill="#D8C9AD" />
      </svg>
    ),
    messy: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="32" fill="#F2D58A" opacity="0.12" />
        {/* Splats */}
        <circle cx="28" cy="34" r="10" fill="#E9A18A" opacity="0.7" />
        <circle cx="52" cy="30" r="8" fill="#F2D58A" opacity="0.75" />
        <circle cx="42" cy="50" r="9" fill="#A8B99A" opacity="0.7" />
        <circle cx="24" cy="50" r="6" fill="#F2D58A" opacity="0.6" />
        <circle cx="56" cy="48" r="7" fill="#E9A18A" opacity="0.6" />
        {/* drops */}
        <ellipse cx="34" cy="22" rx="3" ry="5" fill="#E9A18A" opacity="0.5" transform="rotate(-15 34 22)" />
        <ellipse cx="50" cy="18" rx="3" ry="5" fill="#F2D58A" opacity="0.5" transform="rotate(20 50 18)" />
      </svg>
    ),
    imaginative: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="32" fill="#B9A17D" opacity="0.1" />
        {/* Dreamy castle from pebbles */}
        <rect x="28" y="42" width="24" height="22" rx="4" fill="#D8C9AD" />
        <rect x="24" y="36" width="12" height="28" rx="3" fill="#C8B898" />
        <rect x="44" y="38" width="12" height="26" rx="3" fill="#C8B898" />
        {/* Turret tops */}
        <ellipse cx="30" cy="36" rx="7" ry="6" fill="#B9A17D" />
        <ellipse cx="50" cy="38" rx="7" ry="6" fill="#B9A17D" />
        <ellipse cx="40" cy="42" rx="6" ry="5" fill="#D8C9AD" />
        {/* Star */}
        <circle cx="40" cy="26" r="4" fill="#F2D58A" opacity="0.9" />
        <path d="M40 20 L41 24 L45 24 L42 27 L43 31 L40 28 L37 31 L38 27 L35 24 L39 24Z" fill="#F2D58A" opacity="0.7" />
      </svg>
    ),
    development: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="40" cy="40" r="32" fill="#8BAD7A" opacity="0.1" />
        {/* Growth chart from pebbles */}
        <ellipse cx="24" cy="58" rx="8" ry="5" fill="#C8B898" />
        <ellipse cx="36" cy="50" rx="8" ry="5" fill="#B9A17D" />
        <ellipse cx="48" cy="42" rx="8" ry="5" fill="#A8B99A" />
        <ellipse cx="60" cy="32" rx="8" ry="5" fill="#8BAD7A" />
        {/* Connecting path */}
        <path d="M24 56 L36 48 L48 40 L60 30" stroke="#D8C9AD" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
        {/* Flower on top */}
        <circle cx="60" cy="24" r="6" fill="#E9A18A" opacity="0.8" />
        <circle cx="60" cy="24" r="3.5" fill="#F2D58A" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const experiences = [
  {
    id: 'sensory',
    type: 'sensory',
    title: 'Sensory Exploration',
    tagline: 'Feel. Touch. Wonder.',
    description: 'Natural textures, materials and surfaces that invite little hands to explore — sand, clay, water, stones and more.',
    color: '#D8C9AD',
    accent: '#8B7355',
    bg: '#FAF7F2',
  },
  {
    id: 'creative',
    type: 'creative',
    title: 'Creative Expression',
    tagline: 'Make. Paint. Build.',
    description: 'Open-ended creative tools for painting, sculpting, and making — where the process matters more than the product.',
    color: '#E9A18A',
    accent: '#7A3B2E',
    bg: '#FDF5F2',
  },
  {
    id: 'nature',
    type: 'nature',
    title: 'Nature Discovery',
    tagline: 'Observe. Collect. Connect.',
    description: 'Leaves, pebbles, flowers and natural wonders brought into our studio so children can forge real connections with nature.',
    color: '#A8B99A',
    accent: '#3D6B3E',
    bg: '#F3F7F0',
  },
  {
    id: 'messy',
    type: 'messy',
    title: 'Messy Play',
    tagline: 'Splash. Squish. Experiment.',
    description: 'The most joyful kind of learning — messy play liberates children to experiment freely without worry or constraint.',
    color: '#F2D58A',
    accent: '#8B7355',
    bg: '#FEFAF0',
  },
  {
    id: 'imaginative',
    type: 'imaginative',
    title: 'Imaginative Play',
    tagline: 'Pretend. Story. Adventure.',
    description: 'Whimsical corners and props invite toddlers into their own narrative worlds — where dragons live in stone castles.',
    color: '#B9A17D',
    accent: '#5B4520',
    bg: '#F7F4EE',
  },
  {
    id: 'development',
    type: 'development',
    title: 'Early Development',
    tagline: 'Grow. Discover. Thrive.',
    description: 'Every experience at Rock Tumblerz is thoughtfully designed to support the natural development of toddlers through play.',
    color: '#8BAD7A',
    accent: '#2D5B2E',
    bg: '#EFF5EC',
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{ background: exp.bg, border: `1.5px solid ${exp.color}35` }}
    >
      <motion.div
        whileHover={{ y: -4, boxShadow: `0 16px 40px ${exp.color}28` }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        className="p-6 h-full"
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={{ rotate: hovered ? 8 : 0, scale: hovered ? 1.08 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 16 }}
            className="w-14 h-14"
          >
            <ExperienceIcon type={exp.type} />
          </motion.div>
          <div
            className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
            style={{ background: exp.color + '28', color: exp.accent }}
          >
            {exp.tagline}
          </div>
        </div>

        <h3 className="font-display text-[17px] font-bold text-[#3D2F1F] mb-2 leading-snug">{exp.title}</h3>
        <p className="text-[13px] text-[#6B5B3E] leading-relaxed">{exp.description}</p>

        {/* Animated pebble trail */}
        <motion.div
          animate={{ x: hovered ? 5 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mt-5 flex gap-1.5 items-center"
        >
          {[9, 6, 4].map((w, j) => (
            <motion.div
              key={j}
              animate={{ opacity: hovered ? 1 - j * 0.15 : 1 - j * 0.25 }}
              className="rounded-full"
              style={{ width: w, height: w * 0.65, background: exp.color }}
            />
          ))}
        </motion.div>

        {/* Hover bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2.5px]"
          style={{ background: exp.color }}
          initial={{ width: 0 }}
          animate={{ width: hovered ? '100%' : 0 }}
          transition={{ duration: 0.45 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="bg-[#F5F0E7] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 lg:mb-16">
          <FadeIn delay={0}>
            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#B9A17D] mb-3">
              Our Experiences
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2F1F] leading-tight max-w-xl mx-auto">
              Every day holds something wonderful.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-3 text-[15px] text-[#8B7355] max-w-md mx-auto leading-relaxed">
              A rich variety of studio experiences, all designed to nourish curiosity and imagination.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
