// Inline SVG Illustrations for Rock Tumblerz
// All illustrations are custom-crafted to match the brand identity

export const PebbleCharacterHappy = ({ className = "", size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Main pebble body - rounded organic shape */}
    <ellipse cx="60" cy="72" rx="42" ry="45" fill="url(#pebbleGrad1)" />
    <ellipse cx="60" cy="72" rx="42" ry="45" fill="url(#pebbleSheen)" opacity="0.3" />
    {/* Face */}
    <ellipse cx="46" cy="64" rx="6" ry="7" fill="white" opacity="0.9" />
    <ellipse cx="74" cy="64" rx="6" ry="7" fill="white" opacity="0.9" />
    <circle cx="47" cy="65" r="3.5" fill="#3D2F1F" />
    <circle cx="75" cy="65" r="3.5" fill="#3D2F1F" />
    <circle cx="48.5" cy="63.5" r="1.2" fill="white" />
    <circle cx="76.5" cy="63.5" r="1.2" fill="white" />
    {/* Blush */}
    <ellipse cx="38" cy="72" rx="7" ry="4" fill="#E9A18A" opacity="0.5" />
    <ellipse cx="82" cy="72" rx="7" ry="4" fill="#E9A18A" opacity="0.5" />
    {/* Smile */}
    <path d="M48 78 Q60 88 72 78" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Little hands/arms */}
    <ellipse cx="20" cy="80" rx="8" ry="5" fill="#D8C9AD" transform="rotate(-20 20 80)" />
    <ellipse cx="100" cy="78" rx="8" ry="5" fill="#D8C9AD" transform="rotate(25 100 78)" />
    {/* Tiny plant on head */}
    <path d="M60 27 Q55 20 48 22" stroke="#A8B99A" strokeWidth="2" strokeLinecap="round" fill="none" />
    <ellipse cx="47" cy="21" rx="5" ry="3" fill="#A8B99A" transform="rotate(-20 47 21)" />
    <path d="M60 27 Q65 18 72 20" stroke="#A8B99A" strokeWidth="2" strokeLinecap="round" fill="none" />
    <ellipse cx="73" cy="19" rx="5" ry="3" fill="#8BAD7A" transform="rotate(15 73 19)" />
    <defs>
      <radialGradient id="pebbleGrad1" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#E8C5A0" />
        <stop offset="50%" stopColor="#C9A07A" />
        <stop offset="100%" stopColor="#9E7850" />
      </radialGradient>
      <radialGradient id="pebbleSheen" cx="30%" cy="25%" r="50%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export const PebbleTurtle = ({ className = "", size = 110 }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shell - made of stacked pebbles */}
    <ellipse cx="52" cy="52" rx="32" ry="26" fill="#8BAD7A" />
    {/* Shell pattern - pebble mosaic */}
    <ellipse cx="52" cy="52" rx="20" ry="16" fill="#A8B99A" opacity="0.6" />
    <ellipse cx="44" cy="44" rx="8" ry="6" fill="#7A9E6A" opacity="0.7" />
    <ellipse cx="60" cy="44" rx="8" ry="6" fill="#7A9E6A" opacity="0.7" />
    <ellipse cx="52" cy="57" rx="8" ry="6" fill="#7A9E6A" opacity="0.7" />
    {/* Head */}
    <ellipse cx="82" cy="50" rx="12" ry="10" fill="#B9C9A5" />
    <ellipse cx="82" cy="50" rx="12" ry="10" fill="url(#turtleSheen)" opacity="0.4" />
    {/* Eyes */}
    <circle cx="86" cy="46" r="3" fill="white" />
    <circle cx="87" cy="46.5" r="1.8" fill="#3D2F1F" />
    <circle cx="87.5" cy="45.8" r="0.7" fill="white" />
    {/* Smile */}
    <path d="M78 54 Q82 58 86 54" stroke="#3D2F1F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <ellipse cx="28" cy="44" rx="8" ry="5" fill="#B9C9A5" transform="rotate(-30 28 44)" />
    <ellipse cx="28" cy="62" rx="8" ry="5" fill="#B9C9A5" transform="rotate(30 28 62)" />
    <ellipse cx="65" cy="70" rx="7" ry="5" fill="#B9C9A5" transform="rotate(-15 65 70)" />
    {/* Tiny tail */}
    <path d="M20 52 Q12 52 10 55" stroke="#B9C9A5" strokeWidth="4" strokeLinecap="round" />
    <defs>
      <radialGradient id="turtleSheen" cx="35%" cy="30%" r="60%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export const ClayElephant = ({ className = "", size = 100 }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body */}
    <ellipse cx="52" cy="68" rx="28" ry="24" fill="#D8C9AD" />
    <ellipse cx="52" cy="68" rx="28" ry="24" fill="url(#elephantSheen)" opacity="0.25" />
    {/* Head */}
    <ellipse cx="52" cy="40" rx="22" ry="20" fill="#D8C9AD" />
    {/* Ears */}
    <ellipse cx="24" cy="38" rx="12" ry="14" fill="#C8B89D" />
    <ellipse cx="24" cy="38" rx="8" ry="10" fill="#E9A18A" opacity="0.5" />
    <ellipse cx="80" cy="38" rx="12" ry="14" fill="#C8B89D" />
    <ellipse cx="80" cy="38" rx="8" ry="10" fill="#E9A18A" opacity="0.5" />
    {/* Trunk */}
    <path d="M44 52 Q36 62 40 75 Q42 80 46 78" stroke="#C8B89D" strokeWidth="8" strokeLinecap="round" fill="none" />
    {/* Eyes */}
    <circle cx="44" cy="36" r="4" fill="white" />
    <circle cx="44" cy="36.5" r="2.5" fill="#3D2F1F" />
    <circle cx="44.8" cy="35.5" r="1" fill="white" />
    <circle cx="62" cy="36" r="4" fill="white" />
    <circle cx="62" cy="36.5" r="2.5" fill="#3D2F1F" />
    <circle cx="62.8" cy="35.5" r="1" fill="white" />
    {/* Blush */}
    <ellipse cx="38" cy="43" rx="6" ry="3.5" fill="#E9A18A" opacity="0.5" />
    <ellipse cx="66" cy="43" rx="6" ry="3.5" fill="#E9A18A" opacity="0.5" />
    {/* Legs */}
    <rect x="28" y="85" width="14" height="18" rx="7" fill="#C8B89D" />
    <rect x="60" y="85" width="14" height="18" rx="7" fill="#C8B89D" />
    {/* Tiny tail */}
    <path d="M78 72 Q84 68 82 62" stroke="#C8B89D" strokeWidth="3" strokeLinecap="round" />
    <defs>
      <radialGradient id="elephantSheen" cx="35%" cy="25%" r="55%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export const TinyBird = ({ className = "", size = 50 }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="28" cy="22" rx="14" ry="10" fill="#8BAD7A" />
    {/* Wing */}
    <ellipse cx="20" cy="20" rx="10" ry="6" fill="#7A9E6A" transform="rotate(-15 20 20)" />
    {/* Head */}
    <circle cx="38" cy="16" r="9" fill="#8BAD7A" />
    {/* Eye */}
    <circle cx="41" cy="14" r="2.5" fill="white" />
    <circle cx="41.5" cy="14" r="1.5" fill="#3D2F1F" />
    <circle cx="42" cy="13.5" r="0.5" fill="white" />
    {/* Beak */}
    <path d="M45 17 L50 16 L45 19 Z" fill="#F2D58A" />
    {/* Tail */}
    <path d="M14 24 Q8 20 6 26 Q10 26 14 22" fill="#7A9E6A" />
    {/* Feet */}
    <line x1="28" y1="32" x2="24" y2="35" stroke="#B9A17D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="28" y1="32" x2="30" y2="35" stroke="#B9A17D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="32" x2="30" y2="35" stroke="#B9A17D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="32" x2="36" y2="35" stroke="#B9A17D" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const TinyButterfly = ({ className = "", size = 44 }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Wings */}
    <ellipse cx="14" cy="16" rx="13" ry="9" fill="#F2D58A" opacity="0.85" transform="rotate(-20 14 16)" />
    <ellipse cx="30" cy="16" rx="13" ry="9" fill="#F2D58A" opacity="0.85" transform="rotate(20 30 16)" />
    <ellipse cx="13" cy="27" rx="9" ry="6" fill="#E9A18A" opacity="0.8" transform="rotate(-30 13 27)" />
    <ellipse cx="31" cy="27" rx="9" ry="6" fill="#E9A18A" opacity="0.8" transform="rotate(30 31 27)" />
    {/* Wing details */}
    <circle cx="16" cy="14" r="3" fill="#B9A17D" opacity="0.3" />
    <circle cx="28" cy="14" r="3" fill="#B9A17D" opacity="0.3" />
    {/* Body */}
    <ellipse cx="22" cy="20" rx="2.5" ry="10" fill="#8BAD7A" />
    {/* Antennae */}
    <path d="M20 10 Q16 4 13 2" stroke="#8BAD7A" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="13" cy="2" r="1.5" fill="#A8B99A" />
    <path d="M24 10 Q28 4 31 2" stroke="#8BAD7A" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="31" cy="2" r="1.5" fill="#A8B99A" />
  </svg>
);

export const StonePebbles = ({ className = "", width = 200, height = 80 }) => (
  <svg width={width} height={height} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="30" cy="58" rx="28" ry="18" fill="#C8B898" />
    <ellipse cx="30" cy="58" rx="28" ry="18" fill="url(#stoneSheen)" opacity="0.2" />
    <ellipse cx="75" cy="55" rx="22" ry="16" fill="#D8C9AD" />
    <ellipse cx="75" cy="55" rx="22" ry="16" fill="url(#stoneSheen)" opacity="0.2" />
    <ellipse cx="120" cy="60" rx="32" ry="20" fill="#B9A17D" />
    <ellipse cx="120" cy="60" rx="32" ry="20" fill="url(#stoneSheen)" opacity="0.2" />
    <ellipse cx="170" cy="56" rx="25" ry="17" fill="#C8B898" />
    <ellipse cx="170" cy="56" rx="25" ry="17" fill="url(#stoneSheen)" opacity="0.2" />
    {/* Small pebbles */}
    <ellipse cx="52" cy="68" rx="10" ry="7" fill="#D4C4A0" />
    <ellipse cx="100" cy="70" rx="8" ry="5" fill="#C8B898" />
    <ellipse cx="148" cy="68" rx="12" ry="8" fill="#B9A17D" />
    <defs>
      <radialGradient id="stoneSheen" cx="30%" cy="25%" r="60%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export const TinyLeaf = ({ className = "", size = 30, color = "#A8B99A" }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15 2 Q28 10 26 24 Q20 32 15 34 Q10 32 4 24 Q2 10 15 2Z" fill={color} />
    <path d="M15 4 Q24 12 22 24" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <path d="M15 8 Q20 16 18 22" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    <line x1="15" y1="2" x2="15" y2="34" stroke="white" strokeWidth="1" opacity="0.3" />
  </svg>
);

export const TinyFlower = ({ className = "", size = 36, petalColor = "#E9A18A" }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Petals */}
    <ellipse cx="18" cy="8" rx="5" ry="8" fill={petalColor} opacity="0.8" />
    <ellipse cx="28" cy="13" rx="5" ry="8" fill={petalColor} opacity="0.8" transform="rotate(60 28 13)" />
    <ellipse cx="28" cy="23" rx="5" ry="8" fill={petalColor} opacity="0.8" transform="rotate(120 28 23)" />
    <ellipse cx="18" cy="28" rx="5" ry="8" fill={petalColor} opacity="0.8" transform="rotate(180 18 28)" />
    <ellipse cx="8" cy="23" rx="5" ry="8" fill={petalColor} opacity="0.8" transform="rotate(240 8 23)" />
    <ellipse cx="8" cy="13" rx="5" ry="8" fill={petalColor} opacity="0.8" transform="rotate(300 8 13)" />
    {/* Center */}
    <circle cx="18" cy="18" r="7" fill="#F2D58A" />
    <circle cx="18" cy="18" r="4" fill="#E8C96A" />
  </svg>
);

export const SmallPlant = ({ className = "", height = 70 }) => (
  <svg width={height * 0.7} height={height} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stem */}
    <path d="M25 70 Q24 50 25 30" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Leaves */}
    <path d="M25 55 Q15 45 10 35 Q18 38 25 50" fill="#A8B99A" />
    <path d="M25 55 Q35 45 40 35 Q32 38 25 50" fill="#8BAD7A" />
    <path d="M25 40 Q12 30 8 20 Q18 24 25 36" fill="#A8B99A" />
    <path d="M25 40 Q38 30 42 20 Q32 24 25 36" fill="#8BAD7A" />
    {/* Small flower top */}
    <circle cx="25" cy="18" r="6" fill="#E9A18A" opacity="0.9" />
    <circle cx="25" cy="18" r="4" fill="#F2D58A" />
  </svg>
);

export const HeroIllustration = ({ className = "" }) => (
  <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Rock Tumblerz - cute pebble characters in a miniature garden">
    {/* Background ground / soil area */}
    <ellipse cx="350" cy="490" rx="320" ry="40" fill="#D8C9AD" opacity="0.4" />

    {/* Background pebbles (far) */}
    <ellipse cx="80" cy="430" rx="55" ry="35" fill="#C8B898" opacity="0.5" />
    <ellipse cx="620" cy="420" rx="65" ry="40" fill="#C8B898" opacity="0.5" />
    <ellipse cx="580" cy="450" rx="40" ry="26" fill="#D8C9AD" opacity="0.6" />

    {/* Large center stone platform */}
    <ellipse cx="350" cy="430" rx="145" ry="65" fill="url(#mainRockGrad)" />
    <ellipse cx="350" cy="430" rx="145" ry="65" fill="url(#mainRockSheen)" opacity="0.15" />
    <ellipse cx="320" cy="415" rx="90" ry="40" fill="white" opacity="0.08" />

    {/* Left stone */}
    <ellipse cx="165" cy="440" rx="90" ry="52" fill="url(#leftRockGrad)" />
    <ellipse cx="165" cy="440" rx="90" ry="52" fill="url(#mainRockSheen)" opacity="0.12" />

    {/* Right stone */}
    <ellipse cx="535" cy="435" rx="100" ry="56" fill="url(#rightRockGrad)" />
    <ellipse cx="535" cy="435" rx="100" ry="56" fill="url(#mainRockSheen)" opacity="0.12" />

    {/* Small scattered pebbles */}
    <ellipse cx="90" cy="465" rx="22" ry="14" fill="#D4C4A0" />
    <ellipse cx="240" cy="475" rx="16" ry="10" fill="#C8B898" />
    <ellipse cx="460" cy="472" rx="18" ry="11" fill="#D4C4A0" />
    <ellipse cx="620" cy="468" rx="24" ry="15" fill="#C8B898" />
    <ellipse cx="130" cy="475" rx="12" ry="8" fill="#B9A17D" />
    <ellipse cx="560" cy="476" rx="14" ry="9" fill="#B9A17D" />

    {/* === MAIN PEBBLE CHARACTER (Center, big happy one) === */}
    {/* Body */}
    <ellipse cx="350" cy="350" rx="70" ry="78" fill="url(#mainCharGrad)" />
    <ellipse cx="350" cy="350" rx="70" ry="78" fill="url(#charSheen)" opacity="0.25" />
    {/* Face */}
    <ellipse cx="330" cy="335" rx="12" ry="14" fill="white" opacity="0.95" />
    <ellipse cx="370" cy="335" rx="12" ry="14" fill="white" opacity="0.95" />
    <circle cx="332" cy="337" r="8" fill="#3D2F1F" />
    <circle cx="372" cy="337" r="8" fill="#3D2F1F" />
    {/* Eye shine */}
    <circle cx="335" cy="334" r="3" fill="white" />
    <circle cx="375" cy="334" r="3" fill="white" />
    {/* Blush */}
    <ellipse cx="315" cy="352" rx="14" ry="8" fill="#E9A18A" opacity="0.55" />
    <ellipse cx="385" cy="352" rx="14" ry="8" fill="#E9A18A" opacity="0.55" />
    {/* Big smile */}
    <path d="M325 362 Q350 385 375 362" stroke="#3D2F1F" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Tiny arms */}
    <ellipse cx="288" cy="365" rx="16" ry="9" fill="#D4A870" transform="rotate(-25 288 365)" />
    <ellipse cx="412" cy="360" rx="16" ry="9" fill="#D4A870" transform="rotate(30 412 360)" />
    {/* Little leaf on head */}
    <path d="M350 272 Q340 258 328 260" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="326" cy="258" rx="10" ry="6" fill="#A8B99A" transform="rotate(-25 326 258)" />
    <path d="M350 272 Q362 258 374 260" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="376" cy="258" rx="10" ry="6" fill="#8BAD7A" transform="rotate(20 376 258)" />

    {/* === TURTLE (Left) === */}
    {/* Shell */}
    <ellipse cx="175" cy="392" rx="48" ry="38" fill="#8BAD7A" />
    <ellipse cx="175" cy="392" rx="30" ry="24" fill="#A8B99A" opacity="0.6" />
    <ellipse cx="165" cy="382" rx="12" ry="9" fill="#7A9E6A" opacity="0.8" />
    <ellipse cx="185" cy="382" rx="12" ry="9" fill="#7A9E6A" opacity="0.8" />
    <ellipse cx="175" cy="398" rx="12" ry="9" fill="#7A9E6A" opacity="0.8" />
    {/* Head */}
    <ellipse cx="220" cy="390" rx="18" ry="16" fill="#B9C9A5" />
    <ellipse cx="220" cy="390" rx="18" ry="16" fill="url(#charSheen)" opacity="0.3" />
    <circle cx="226" cy="384" r="5" fill="white" />
    <circle cx="227" cy="384.5" r="3" fill="#3D2F1F" />
    <circle cx="228" cy="383.5" r="1.2" fill="white" />
    <path d="M216 394 Q220 400 225 395" stroke="#3D2F1F" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <ellipse cx="138" cy="380" rx="14" ry="8" fill="#B9C9A5" transform="rotate(-35 138 380)" />
    <ellipse cx="140" cy="408" rx="14" ry="8" fill="#B9C9A5" transform="rotate(25 140 408)" />
    <ellipse cx="208" cy="420" rx="12" ry="8" fill="#B9C9A5" transform="rotate(-10 208 420)" />
    <path d="M128 394 Q118 392 114 398" stroke="#B9C9A5" strokeWidth="6" strokeLinecap="round" />

    {/* === ELEPHANT (Right) === */}
    {/* Body */}
    <ellipse cx="522" cy="390" rx="52" ry="44" fill="#D8C9AD" />
    <ellipse cx="522" cy="390" rx="52" ry="44" fill="url(#charSheen)" opacity="0.2" />
    {/* Head */}
    <ellipse cx="522" cy="348" rx="38" ry="34" fill="#D8C9AD" />
    {/* Ears */}
    <ellipse cx="490" cy="345" rx="20" ry="24" fill="#C8B89D" />
    <ellipse cx="490" cy="345" rx="13" ry="16" fill="#E9A18A" opacity="0.45" />
    <ellipse cx="554" cy="345" rx="20" ry="24" fill="#C8B89D" />
    <ellipse cx="554" cy="345" rx="13" ry="16" fill="#E9A18A" opacity="0.45" />
    {/* Trunk */}
    <path d="M512 370 Q500 388 505 408 Q508 416 514 414" stroke="#C8B89D" strokeWidth="13" strokeLinecap="round" fill="none" />
    <path d="M512 370 Q500 388 505 408 Q508 416 514 414" stroke="#D4C4A8" strokeWidth="8" strokeLinecap="round" fill="none" />
    {/* Eyes */}
    <ellipse cx="510" cy="338" rx="7" ry="8" fill="white" opacity="0.95" />
    <circle cx="510" cy="339" r="5" fill="#3D2F1F" />
    <circle cx="511.5" cy="337.5" r="2" fill="white" />
    <ellipse cx="534" cy="338" rx="7" ry="8" fill="white" opacity="0.95" />
    <circle cx="534" cy="339" r="5" fill="#3D2F1F" />
    <circle cx="535.5" cy="337.5" r="2" fill="white" />
    {/* Blush */}
    <ellipse cx="502" cy="350" rx="10" ry="6" fill="#E9A18A" opacity="0.5" />
    <ellipse cx="542" cy="350" rx="10" ry="6" fill="#E9A18A" opacity="0.5" />
    {/* Legs */}
    <rect x="500" y="422" width="22" height="24" rx="11" fill="#C8B89D" />
    <rect x="528" y="422" width="22" height="24" rx="11" fill="#C8B89D" />
    {/* Tail */}
    <path d="M572" cy="395" />
    <path d="M572 390 Q580 382 577 372" stroke="#C8B89D" strokeWidth="4" strokeLinecap="round" />

    {/* === FLOATING BIRD (top left area) === */}
    <ellipse cx="108" cy="148" rx="22" ry="15" fill="#8BAD7A" />
    <ellipse cx="92" cy="145" rx="15" ry="9" fill="#7A9E6A" transform="rotate(-15 92 145)" />
    <circle cx="126" cy="140" r="13" fill="#8BAD7A" />
    <circle cx="130" cy="136" r="3.5" fill="white" />
    <circle cx="130.5" cy="136" r="2" fill="#3D2F1F" />
    <circle cx="131" cy="135.2" r="0.7" fill="white" />
    <path d="M136 143 L142 141 L136 146 Z" fill="#F2D58A" />
    <path d="M82 150 Q76 146 72 152 Q77 152 82 148" fill="#7A9E6A" />

    {/* === FLOATING BUTTERFLY (top right) === */}
    <ellipse cx="572" cy="130" rx="20" ry="14" fill="#F2D58A" opacity="0.85" transform="rotate(-20 572 130)" />
    <ellipse cx="596" cy="130" rx="20" ry="14" fill="#F2D58A" opacity="0.85" transform="rotate(20 596 130)" />
    <ellipse cx="572" cy="146" rx="14" ry="10" fill="#E9A18A" opacity="0.8" transform="rotate(-30 572 146)" />
    <ellipse cx="596" cy="146" rx="14" ry="10" fill="#E9A18A" opacity="0.8" transform="rotate(30 596 146)" />
    <ellipse cx="584" cy="138" rx="4" ry="14" fill="#8BAD7A" />
    <path d="M581 124 Q576 116 572 113" stroke="#8BAD7A" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="572" cy="113" r="2.5" fill="#A8B99A" />
    <path d="M587 124 Q592 116 596 113" stroke="#8BAD7A" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="596" cy="113" r="2.5" fill="#A8B99A" />

    {/* === PLANTS AND FOLIAGE === */}
    {/* Left plant cluster */}
    <path d="M60 430 Q58 400 60 375" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
    <path d="M60 415 Q45 400 35 385 Q48 390 60 408" fill="#A8B99A" />
    <path d="M60 415 Q75 400 85 385 Q72 390 60 408" fill="#8BAD7A" />
    <path d="M60 395 Q42 380 34 362 Q50 368 60 388" fill="#A8B99A" />
    <circle cx="60" cy="368" r="9" fill="#E9A18A" opacity="0.85" />
    <circle cx="60" cy="368" r="6" fill="#F2D58A" />

    {/* Right plant cluster */}
    <path d="M640 425 Q638 394 640 368" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
    <path d="M640 410 Q624 394 614 378 Q628 384 640 402" fill="#A8B99A" />
    <path d="M640 410 Q656 394 666 378 Q652 384 640 402" fill="#8BAD7A" />
    <path d="M640 388 Q622 372 614 354 Q630 360 640 382" fill="#A8B99A" />
    <circle cx="640" cy="360" r="9" fill="#E9A18A" opacity="0.85" />
    <circle cx="640" cy="360" r="6" fill="#F2D58A" />

    {/* Small flowers on ground */}
    <circle cx="290" cy="468" r="6" fill="#E9A18A" opacity="0.8" />
    <circle cx="290" cy="468" r="3.5" fill="#F2D58A" />
    <circle cx="418" cy="466" r="6" fill="#F2D58A" opacity="0.8" />
    <circle cx="418" cy="466" r="3.5" fill="#E9A18A" />

    {/* Scattered leaves */}
    <path d="M200 460 Q208 450 215 455 Q212 464 200 460Z" fill="#A8B99A" opacity="0.7" />
    <path d="M490" cy="455" />
    <path d="M485 458 Q494 448 500 454 Q496 462 485 458Z" fill="#A8B99A" opacity="0.7" />

    {/* Floating particles/sparkles */}
    <circle cx="160" cy="220" r="3" fill="#F2D58A" opacity="0.7" />
    <circle cx="540" cy="200" r="3" fill="#E9A18A" opacity="0.7" />
    <circle cx="440" cy="180" r="2.5" fill="#A8B99A" opacity="0.7" />
    <circle cx="265" cy="200" r="2.5" fill="#F2D58A" opacity="0.6" />
    <circle cx="620" cy="280" r="2" fill="#E9A18A" opacity="0.6" />
    <circle cx="85" cy="300" r="2" fill="#A8B99A" opacity="0.6" />

    {/* Extra small pebbles in foreground */}
    <ellipse cx="308" cy="480" rx="8" ry="5" fill="#D4C4A0" />
    <ellipse cx="390" cy="478" rx="6" ry="4" fill="#C8B898" />
    <ellipse cx="350" cy="482" rx="5" ry="3" fill="#B9A17D" />

    <defs>
      <radialGradient id="mainRockGrad" cx="40%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#E8D8C0" />
        <stop offset="60%" stopColor="#C8B898" />
        <stop offset="100%" stopColor="#A89870" />
      </radialGradient>
      <radialGradient id="leftRockGrad" cx="40%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#D8C9AD" />
        <stop offset="60%" stopColor="#B9A17D" />
        <stop offset="100%" stopColor="#8B7355" />
      </radialGradient>
      <radialGradient id="rightRockGrad" cx="40%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#E0D0B8" />
        <stop offset="60%" stopColor="#C0A880" />
        <stop offset="100%" stopColor="#9A8060" />
      </radialGradient>
      <radialGradient id="mainCharGrad" cx="35%" cy="30%" r="68%">
        <stop offset="0%" stopColor="#F0C890" />
        <stop offset="45%" stopColor="#D4A060" />
        <stop offset="100%" stopColor="#A07030" />
      </radialGradient>
      <radialGradient id="charSheen" cx="30%" cy="20%" r="55%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="mainRockSheen" cx="30%" cy="20%" r="55%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export const PhilosophyIllustration = ({ type = "explore", size = 100 }) => {
  if (type === "explore") return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" fill="#F2D58A" opacity="0.2" />
      {/* Magnifying glass pebble */}
      <circle cx="46" cy="46" r="22" stroke="#B9A17D" strokeWidth="4" fill="none" />
      <circle cx="46" cy="46" r="18" fill="#D8C9AD" opacity="0.5" />
      <line x1="62" y1="62" x2="76" y2="76" stroke="#B9A17D" strokeWidth="5" strokeLinecap="round" />
      {/* Tiny find inside */}
      <ellipse cx="42" cy="48" rx="8" ry="5" fill="#8BAD7A" opacity="0.8" />
      <circle cx="48" cy="42" r="4" fill="#E9A18A" opacity="0.7" />
    </svg>
  );
  if (type === "discover") return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" fill="#A8B99A" opacity="0.2" />
      {/* Sparkling star/gem stone */}
      <path d="M50 20 L56 38 L74 38 L60 50 L65 68 L50 57 L35 68 L40 50 L26 38 L44 38 Z" fill="#F2D58A" opacity="0.8" />
      <path d="M50 26 L54 36 L64 36 L56 43 L60 53 L50 47 L40 53 L44 43 L36 36 L46 36 Z" fill="#F2D58A" />
      <circle cx="50" cy="42" r="6" fill="white" opacity="0.5" />
    </svg>
  );
  if (type === "create") return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" fill="#E9A18A" opacity="0.2" />
      {/* Paint palette pebble shape */}
      <ellipse cx="50" cy="52" rx="30" ry="26" fill="#D8C9AD" />
      <circle cx="38" cy="42" r="7" fill="#E9A18A" />
      <circle cx="54" cy="38" r="7" fill="#F2D58A" />
      <circle cx="68" cy="46" r="7" fill="#A8B99A" />
      <circle cx="64" cy="62" r="5" fill="#E9A18A" opacity="0.6" />
      {/* Thumb hole */}
      <ellipse cx="38" cy="60" rx="8" ry="5" fill="white" opacity="0.5" />
    </svg>
  );
  if (type === "grow") return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" fill="#8BAD7A" opacity="0.2" />
      {/* Growing sprout from pebble */}
      <ellipse cx="50" cy="74" rx="24" ry="14" fill="#C8B898" />
      <path d="M50 74 Q50 52 50 35" stroke="#8BAD7A" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 55 Q36 44 28 34 Q40 38 50 50" fill="#A8B99A" />
      <path d="M50 55 Q64 44 72 34 Q60 38 50 50" fill="#8BAD7A" />
      <path d="M50 42 Q36 30 30 18 Q44 24 50 38" fill="#A8B99A" opacity="0.8" />
      <circle cx="50" cy="26" r="8" fill="#E9A18A" opacity="0.9" />
      <circle cx="50" cy="26" r="5" fill="#F2D58A" />
    </svg>
  );
  return null;
};

export const ParentScene = ({ className = "", width = 500, height = 300 }) => (
  <svg width={width} height={height} viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ground */}
    <ellipse cx="250" cy="285" rx="240" ry="25" fill="#D8C9AD" opacity="0.3" />
    {/* Stones */}
    <ellipse cx="250" cy="268" rx="130" ry="45" fill="#C8B898" opacity="0.7" />
    <ellipse cx="100" cy="275" rx="80" ry="38" fill="#D8C9AD" opacity="0.6" />
    <ellipse cx="400" cy="272" rx="90" ry="40" fill="#C8B898" opacity="0.6" />
    {/* Main happy pebble */}
    <ellipse cx="250" cy="218" rx="55" ry="60" fill="url(#pGrad)" />
    <ellipse cx="230" cy="204" rx="10" ry="12" fill="white" opacity="0.9" />
    <ellipse cx="270" cy="204" rx="10" ry="12" fill="white" opacity="0.9" />
    <circle cx="231" cy="206" r="6" fill="#3D2F1F" />
    <circle cx="271" cy="206" r="6" fill="#3D2F1F" />
    <circle cx="232.5" cy="204" r="2.5" fill="white" />
    <circle cx="272.5" cy="204" r="2.5" fill="white" />
    <ellipse cx="236" cy="215" rx="11" ry="6" fill="#E9A18A" opacity="0.5" />
    <ellipse cx="264" cy="215" rx="11" ry="6" fill="#E9A18A" opacity="0.5" />
    <path d="M236 224 Q250 238 264 224" stroke="#3D2F1F" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Little plant friends */}
    <path d="M155" cy="260" />
    <path d="M90 275 Q88 250 90 230" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M90 258 Q78 244 70 232 Q82 238 90 252" fill="#A8B99A" />
    <path d="M90 258 Q102 244 110 232 Q98 238 90 252" fill="#8BAD7A" />
    <circle cx="90" cy="224" r="7" fill="#E9A18A" opacity="0.9" />
    <circle cx="90" cy="224" r="4.5" fill="#F2D58A" />
    <path d="M408 272 Q406 248 408 226" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M408 256 Q396 240 386 228 Q398 234 408 250" fill="#A8B99A" />
    <path d="M408 256 Q420 240 430 228 Q418 234 408 250" fill="#8BAD7A" />
    <circle cx="408" cy="218" r="7" fill="#F2D58A" opacity="0.9" />
    <circle cx="408" cy="218" r="4.5" fill="#E9A18A" />
    {/* Floating flowers */}
    <circle cx="180" cy="170" r="8" fill="#E9A18A" opacity="0.7" />
    <circle cx="180" cy="170" r="5" fill="#F2D58A" />
    <circle cx="320" cy="160" r="8" fill="#F2D58A" opacity="0.7" />
    <circle cx="320" cy="160" r="5" fill="#E9A18A" />
    <defs>
      <radialGradient id="pGrad" cx="38%" cy="32%" r="66%">
        <stop offset="0%" stopColor="#E8C070" />
        <stop offset="55%" stopColor="#C09040" />
        <stop offset="100%" stopColor="#906810" />
      </radialGradient>
    </defs>
  </svg>
);

export const FinalCTAScene = ({ className = "", width = 600, height = 250 }) => (
  <svg width={width} height={height} viewBox="0 0 600 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ground stones */}
    <ellipse cx="300" cy="238" rx="280" ry="22" fill="#D8C9AD" opacity="0.4" />
    <ellipse cx="300" cy="228" rx="200" ry="40" fill="#C8B898" opacity="0.5" />
    <ellipse cx="90" cy="232" rx="80" ry="30" fill="#D8C9AD" opacity="0.55" />
    <ellipse cx="510" cy="230" rx="85" ry="32" fill="#C8B898" opacity="0.5" />
    {/* Group of characters */}
    {/* Left small pebble */}
    <ellipse cx="160" cy="196" rx="38" ry="42" fill="url(#ctaGrad1)" />
    <circle cx="150" cy="186" r="7" fill="white" opacity="0.9" />
    <circle cx="170" cy="186" r="7" fill="white" opacity="0.9" />
    <circle cx="151" cy="187" r="4.5" fill="#3D2F1F" />
    <circle cx="171" cy="187" r="4.5" fill="#3D2F1F" />
    <circle cx="152.5" cy="185" r="1.8" fill="white" />
    <circle cx="172.5" cy="185" r="1.8" fill="white" />
    <path d="M150 198 Q160 208 170 198" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Center big pebble */}
    <ellipse cx="300" cy="185" rx="55" ry="58" fill="url(#ctaGrad2)" />
    <ellipse cx="284" cy="171" rx="10" ry="11" fill="white" opacity="0.9" />
    <ellipse cx="316" cy="171" rx="10" ry="11" fill="white" opacity="0.9" />
    <circle cx="285" cy="173" r="7" fill="#3D2F1F" />
    <circle cx="317" cy="173" r="7" fill="#3D2F1F" />
    <circle cx="287" cy="170.5" r="2.8" fill="white" />
    <circle cx="319" cy="170.5" r="2.8" fill="white" />
    <ellipse cx="278" cy="183" rx="12" ry="7" fill="#E9A18A" opacity="0.5" />
    <ellipse cx="322" cy="183" rx="12" ry="7" fill="#E9A18A" opacity="0.5" />
    <path d="M283 194 Q300 210 317 194" stroke="#3D2F1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* Right small pebble */}
    <ellipse cx="440" cy="200" rx="38" ry="40" fill="url(#ctaGrad1)" />
    <circle cx="430" cy="190" r="7" fill="white" opacity="0.9" />
    <circle cx="450" cy="190" r="7" fill="white" opacity="0.9" />
    <circle cx="431" cy="191" r="4.5" fill="#3D2F1F" />
    <circle cx="451" cy="191" r="4.5" fill="#3D2F1F" />
    <circle cx="432.5" cy="189" r="1.8" fill="white" />
    <circle cx="452.5" cy="189" r="1.8" fill="white" />
    <path d="M430 202 Q440 212 450 202" stroke="#3D2F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Plant left */}
    <path d="M55 230 Q54 208 55 188" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M55 215 Q43 201 35 190 Q47 196 55 210" fill="#A8B99A" />
    <path d="M55 215 Q67 201 75 190 Q63 196 55 210" fill="#8BAD7A" />
    <circle cx="55" cy="182" r="7" fill="#E9A18A" opacity="0.9" />
    {/* Plant right */}
    <path d="M545 228 Q544 206 545 186" stroke="#8BAD7A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M545 212 Q533 198 525 186 Q537 192 545 206" fill="#A8B99A" />
    <path d="M545 212 Q557 198 565 186 Q553 192 545 206" fill="#8BAD7A" />
    <circle cx="545" cy="180" r="7" fill="#F2D58A" opacity="0.9" />
    {/* Butterfly */}
    <ellipse cx="232" cy="100" rx="18" ry="12" fill="#F2D58A" opacity="0.8" transform="rotate(-20 232 100)" />
    <ellipse cx="256" cy="100" rx="18" ry="12" fill="#F2D58A" opacity="0.8" transform="rotate(20 256 100)" />
    <ellipse cx="232" cy="114" rx="12" ry="9" fill="#E9A18A" opacity="0.75" transform="rotate(-30 232 114)" />
    <ellipse cx="256" cy="114" rx="12" ry="9" fill="#E9A18A" opacity="0.75" transform="rotate(30 256 114)" />
    <ellipse cx="244" cy="108" rx="3.5" ry="12" fill="#8BAD7A" />
    {/* Flowers scattered */}
    <circle cx="215" cy="222" r="5" fill="#E9A18A" opacity="0.8" />
    <circle cx="215" cy="222" r="3" fill="#F2D58A" />
    <circle cx="385" cy="220" r="5" fill="#F2D58A" opacity="0.8" />
    <circle cx="385" cy="220" r="3" fill="#E9A18A" />
    <defs>
      <radialGradient id="ctaGrad1" cx="38%" cy="30%" r="66%">
        <stop offset="0%" stopColor="#E8D4B0" />
        <stop offset="55%" stopColor="#C8A878" />
        <stop offset="100%" stopColor="#9A7A48" />
      </radialGradient>
      <radialGradient id="ctaGrad2" cx="38%" cy="30%" r="66%">
        <stop offset="0%" stopColor="#F0C888" />
        <stop offset="55%" stopColor="#D0A050" />
        <stop offset="100%" stopColor="#A07020" />
      </radialGradient>
    </defs>
  </svg>
);

