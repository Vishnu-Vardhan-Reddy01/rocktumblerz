import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const initMap = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -32 },
    right: { opacity: 0, x: 32 },
  };
  const initial = initMap[direction] || initMap.up;
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Small character SVGs for timeline
function TimelineCharacter({ type, size = 70 }) {
  if (type === 'arrive') return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
      <circle cx="35" cy="35" r="28" fill="#F2D58A" opacity="0.25" />
      {/* Happy pebble walking */}
      <ellipse cx="35" cy="38" rx="18" ry="20" fill="url(#tg1)" />
      <circle cx="28" cy="32" r="5" fill="white" opacity="0.9" />
      <circle cx="42" cy="32" r="5" fill="white" opacity="0.9" />
      <circle cx="28.5" cy="33" r="3.2" fill="#3D2F1F" />
      <circle cx="42.5" cy="33" r="3.2" fill="#3D2F1F" />
      <circle cx="29.5" cy="31.5" r="1.2" fill="white" />
      <circle cx="43.5" cy="31.5" r="1.2" fill="white" />
      <ellipse cx="23" cy="39" rx="7" ry="4" fill="#E9A18A" opacity="0.45" />
      <ellipse cx="47" cy="39" rx="7" ry="4" fill="#E9A18A" opacity="0.45" />
      <path d="M26 44 Q35 52 44 44" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <defs>
        <radialGradient id="tg1" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#F0C888" /><stop offset="100%" stopColor="#C89040" />
        </radialGradient>
      </defs>
    </svg>
  );
  if (type === 'play') return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
      <circle cx="35" cy="35" r="28" fill="#E9A18A" opacity="0.2" />
      <ellipse cx="35" cy="40" rx="16" ry="18" fill="url(#tg2)" />
      <circle cx="28" cy="34" r="5" fill="white" opacity="0.9" />
      <circle cx="42" cy="34" r="5" fill="white" opacity="0.9" />
      <circle cx="29" cy="35" r="3" fill="#3D2F1F" />
      <circle cx="43" cy="35" r="3" fill="#3D2F1F" />
      <circle cx="30" cy="33.5" r="1.2" fill="white" />
      <circle cx="44" cy="33.5" r="1.2" fill="white" />
      <path d="M28 43 Q35 50 42 43" stroke="#3D2F1F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Arms up playing */}
      <ellipse cx="18" cy="36" rx="8" ry="4.5" fill="#D4A870" transform="rotate(-40 18 36)" />
      <ellipse cx="52" cy="32" rx="8" ry="4.5" fill="#D4A870" transform="rotate(40 52 32)" />
      {/* Small paint splat */}
      <circle cx="56" cy="22" r="5" fill="#E9A18A" opacity="0.7" />
      <circle cx="50" cy="17" r="3" fill="#F2D58A" opacity="0.7" />
      <defs>
        <radialGradient id="tg2" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#F0B880" /><stop offset="100%" stopColor="#C07838" />
        </radialGradient>
      </defs>
    </svg>
  );
  if (type === 'snack') return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
      <circle cx="35" cy="35" r="28" fill="#A8B99A" opacity="0.2" />
      <ellipse cx="35" cy="40" rx="16" ry="18" fill="url(#tg3)" />
      <circle cx="28" cy="35" r="4.5" fill="white" opacity="0.9" />
      <circle cx="42" cy="35" r="4.5" fill="white" opacity="0.9" />
      <circle cx="28.5" cy="36" r="2.8" fill="#3D2F1F" />
      <circle cx="42.5" cy="36" r="2.8" fill="#3D2F1F" />
      <path d="M29 43 Q35 48 41 43" stroke="#3D2F1F" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Food item */}
      <circle cx="35" cy="22" r="7" fill="#F2D58A" opacity="0.9" />
      <circle cx="35" cy="22" r="4" fill="#E9A18A" opacity="0.8" />
      <defs>
        <radialGradient id="tg3" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#E8D4A0" /><stop offset="100%" stopColor="#B8A060" />
        </radialGradient>
      </defs>
    </svg>
  );
  if (type === 'explore') return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
      <circle cx="35" cy="35" r="28" fill="#B9A17D" opacity="0.2" />
      <ellipse cx="35" cy="40" rx="16" ry="18" fill="url(#tg4)" />
      <circle cx="28" cy="34" r="5" fill="white" opacity="0.9" />
      <circle cx="42" cy="34" r="5" fill="white" opacity="0.9" />
      <circle cx="29" cy="34.5" r="3.2" fill="#3D2F1F" />
      <circle cx="43" cy="34.5" r="3.2" fill="#3D2F1F" />
      <circle cx="30.5" cy="33" r="1.3" fill="white" />
      <circle cx="44.5" cy="33" r="1.3" fill="white" />
      <path d="M28 43 Q35 52 42 43" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Magnifying glass */}
      <circle cx="53" cy="22" r="7" stroke="#A8B99A" strokeWidth="2.5" fill="none" />
      <line x1="58" y1="27" x2="64" y2="33" stroke="#A8B99A" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <radialGradient id="tg4" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#F0C880" /><stop offset="100%" stopColor="#C09040" />
        </radialGradient>
      </defs>
    </svg>
  );
  if (type === 'rest') return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
      <circle cx="35" cy="35" r="28" fill="#D8C9AD" opacity="0.25" />
      <ellipse cx="35" cy="40" rx="16" ry="18" fill="url(#tg5)" />
      {/* Sleepy eyes */}
      <path d="M26 34 Q28 31 30 34" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 34 Q42 31 44 34" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M29 42 Q35 46 41 42" stroke="#3D2F1F" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* zzz */}
      <text x="48" y="28" fontSize="10" fill="#B9A17D" fontFamily="Georgia, serif" fontStyle="italic">z</text>
      <text x="53" y="22" fontSize="8" fill="#B9A17D" fontFamily="Georgia, serif" fontStyle="italic">z</text>
      <text x="57" y="17" fontSize="6" fill="#B9A17D" fontFamily="Georgia, serif" fontStyle="italic">z</text>
      <defs>
        <radialGradient id="tg5" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#E8D4B0" /><stop offset="100%" stopColor="#B8A070" />
        </radialGradient>
      </defs>
    </svg>
  );
  return null;
}

const timelineItems = [
  {
    time: 'Morning arrival',
    timeLabel: '9:00',
    character: 'arrive',
    title: 'A warm welcome',
    description: 'Every little explorer arrives to a warm, welcoming studio. A gentle transition from home to adventure.',
    color: '#F2D58A',
    accent: '#8B7355',
  },
  {
    time: 'Free exploration',
    timeLabel: '9:30',
    character: 'play',
    title: 'Sensory play begins',
    description: 'Children freely choose their own adventure — clay, water, pebbles, paint or sand. No right answer, only discovery.',
    color: '#E9A18A',
    accent: '#7A3B2E',
  },
  {
    time: 'Mid-morning',
    timeLabel: '10:30',
    character: 'snack',
    title: 'Nourishing snack time',
    description: 'A gentle pause with healthy snacks, enjoyed together in a cosy corner of the studio.',
    color: '#A8B99A',
    accent: '#3D6B3E',
  },
  {
    time: 'Group discovery',
    timeLabel: '11:00',
    character: 'explore',
    title: 'Guided exploration',
    description: 'A gentle group experience — stories, nature discoveries or creative projects inspired by the season.',
    color: '#B9A17D',
    accent: '#5B4520',
  },
  {
    time: 'Rest & reset',
    timeLabel: '12:00',
    character: 'rest',
    title: 'Quiet time',
    description: 'A calm, cosy wind-down — soft music, books or gentle rest to recharge little bodies and minds.',
    color: '#D8C9AD',
    accent: '#8B7355',
  },
];

export default function DaySection() {
  const sectionRef = useRef(null);

  return (
    <section id="day" ref={sectionRef} className="bg-[#F9F6EF] py-24 lg:py-36 relative overflow-hidden">
      {/* Organic background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F2D58A]/10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#A8B99A]/10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <FadeIn delay={0}>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-4">
              A Day at Rock Tumblerz
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3D2F1F] leading-tight max-w-xl mx-auto">
              Every hour holds something beautiful.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base text-[#8B7355] max-w-md mx-auto italic">
              A sample schedule — contact us for current session times and availability.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Organic center path line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 pointer-events-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 4 1000"
              preserveAspectRatio="none"
            >
              <path
                d="M2 0 Q0 200 2 400 Q4 600 2 800 Q0 900 2 1000"
                stroke="#D8C9AD"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
              />
            </svg>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeIn key={item.timeLabel} delay={i * 0.12} direction={isLeft ? 'left' : 'right'}>
                  <div className={`flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content side */}
                    <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-2"
                        style={{ background: item.color + '35', color: item.accent }}
                      >
                        {item.timeLabel} · {item.time}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#3D2F1F] mb-2">{item.title}</h3>
                      <p className="text-[15px] text-[#6B5B3E] leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                        {item.description}
                      </p>
                    </div>

                    {/* Center node */}
                    <div className="hidden md:flex flex-shrink-0 w-20 h-20 items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                        style={{ background: item.color + '30', border: `2px solid ${item.color}60` }}
                      >
                        <TimelineCharacter type={item.character} size={50} />
                      </motion.div>
                    </div>

                    {/* Empty side placeholder */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              );
            })}¥
          </div>
        </div>
      </div>
    </section>
  );
}
