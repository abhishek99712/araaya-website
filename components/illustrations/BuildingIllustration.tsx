export function ArchitecturalSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Industrial building facade */}
      {/* Main structure */}
      <rect x="40" y="80" width="280" height="240" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Roof detail */}
      <rect x="40" y="60" width="280" height="22" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="40" y1="70" x2="320" y2="70" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />

      {/* Chimneys */}
      <rect x="80" y="20" width="20" height="42" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="77" y="16" width="26" height="8" rx="1" stroke="#0a0a0a" strokeWidth="1.2" />
      <rect x="160" y="10" width="22" height="52" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="157" y="6" width="28" height="8" rx="1" stroke="#0a0a0a" strokeWidth="1.2" />
      <rect x="250" y="25" width="18" height="37" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="247" y="21" width="24" height="8" rx="1" stroke="#0a0a0a" strokeWidth="1.2" />

      {/* Smoke from chimneys */}
      <path d="M90 18 Q88 10 92 4 Q96 -2 93 -8" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M171 8 Q169 0 173 -6 Q177 -12 174 -18" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M259 22 Q257 14 261 8" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

      {/* Horizontal divisions */}
      <line x1="40" y1="160" x2="320" y2="160" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="240" x2="320" y2="240" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Vertical divisions */}
      <line x1="130" y1="80" x2="130" y2="320" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="220" y1="80" x2="220" y2="320" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Windows - row 1 */}
      <rect x="58" y="98" width="36" height="40" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="76" y1="98" x2="76" y2="138" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="58" y1="118" x2="94" y2="118" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />

      <rect x="148" y="98" width="36" height="40" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="166" y1="98" x2="166" y2="138" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="148" y1="118" x2="184" y2="118" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />

      <rect x="238" y="98" width="36" height="40" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="256" y1="98" x2="256" y2="138" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="238" y1="118" x2="274" y2="118" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />

      {/* Windows - row 2 */}
      <rect x="58" y="178" width="36" height="40" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="76" y1="178" x2="76" y2="218" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="58" y1="198" x2="94" y2="198" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />

      <rect x="148" y="178" width="36" height="40" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="166" y1="178" x2="166" y2="218" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="148" y1="198" x2="184" y2="198" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />

      <rect x="238" y="178" width="36" height="40" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="256" y1="178" x2="256" y2="218" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="238" y1="198" x2="274" y2="198" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />

      {/* Main entrance */}
      <rect x="155" y="258" width="50" height="62" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M155 258 Q180 245 205 258" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="180" y1="258" x2="180" y2="320" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      {/* Door handle */}
      <circle cx="191" cy="290" r="3" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="169" cy="290" r="3" stroke="#0a0a0a" strokeWidth="1" />

      {/* Side doors */}
      <rect x="65" y="278" width="30" height="42" rx="1" stroke="#0a0a0a" strokeWidth="1.2" />
      <rect x="265" y="278" width="30" height="42" rx="1" stroke="#0a0a0a" strokeWidth="1.2" />

      {/* Dimension lines */}
      <line x1="22" y1="80" x2="22" y2="320" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" strokeDasharray="3,3" />
      <line x1="18" y1="80" x2="26" y2="80" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="18" y1="320" x2="26" y2="320" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />

      {/* Ground line */}
      <line x1="20" y1="322" x2="340" y2="322" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="20" y1="328" x2="340" y2="328" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export function OfficeSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Office/workspace interior */}
      {/* Room floor and walls */}
      <path d="M40 320 L40 60 L320 60 L320 320" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="40" y1="320" x2="320" y2="320" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Perspective floor line */}
      <path d="M40 320 L180 260 L320 320" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" strokeDasharray="4,3" />

      {/* Large window */}
      <rect x="100" y="80" width="160" height="120" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="100" y1="130" x2="260" y2="130" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <line x1="180" y1="80" x2="180" y2="200" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      {/* Window cross panes */}
      <line x1="140" y1="80" x2="140" y2="200" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="220" y1="80" x2="220" y2="200" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="100" y1="100" x2="260" y2="100" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="100" y1="150" x2="260" y2="150" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="100" y1="175" x2="260" y2="175" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />

      {/* Desk */}
      <rect x="60" y="248" width="200" height="14" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Desk legs */}
      <line x1="72" y1="262" x2="72" y2="318" stroke="#0a0a0a" strokeWidth="2" />
      <line x1="248" y1="262" x2="248" y2="318" stroke="#0a0a0a" strokeWidth="2" />
      <line x1="105" y1="262" x2="105" y2="318" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="215" y1="262" x2="215" y2="318" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Monitor on desk */}
      <rect x="135" y="205" width="60" height="40" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Screen content lines */}
      <line x1="142" y1="214" x2="188" y2="214" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="142" y1="222" x2="180" y2="222" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="142" y1="230" x2="185" y2="230" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="142" y1="238" x2="175" y2="238" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      {/* Monitor stand */}
      <line x1="165" y1="245" x2="165" y2="250" stroke="#0a0a0a" strokeWidth="2" />
      <line x1="155" y1="250" x2="175" y2="250" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Keyboard */}
      <rect x="120" y="250" width="90" height="10" rx="2" stroke="#0a0a0a" strokeWidth="1" opacity="0.6" />
      {/* Key rows */}
      <line x1="122" y1="254" x2="208" y2="254" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="122" y1="258" x2="208" y2="258" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />

      {/* Notebook/papers on desk */}
      <rect x="75" y="235" width="40" height="52" rx="1" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="80" y1="245" x2="110" y2="245" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="80" y1="253" x2="108" y2="253" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="80" y1="261" x2="110" y2="261" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="80" y1="269" x2="106" y2="269" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <rect x="224" y="240" width="28" height="22" rx="1" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />

      {/* Chair */}
      <path d="M140 290 Q180 286 220 290" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M140 290 L135 320" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M220 290 L225 320" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="135" y1="320" x2="145" y2="320" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="225" y1="320" x2="215" y2="320" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Chair back */}
      <path d="M155 290 L150 250 Q155 240 165 238" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M205 290 L210 250 Q205 240 195 238" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M150 260 Q180 256 210 260" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <path d="M151 244 Q180 240 209 244" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Bookshelf on wall */}
      <rect x="40" y="115" width="40" height="140" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Shelf lines */}
      <line x1="40" y1="150" x2="80" y2="150" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <line x1="40" y1="185" x2="80" y2="185" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <line x1="40" y1="220" x2="80" y2="220" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      {/* Books */}
      <rect x="44" y="125" width="8" height="25" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <rect x="53" y="122" width="10" height="28" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <rect x="64" y="127" width="7" height="23" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <rect x="72" y="120" width="6" height="30" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <rect x="44" y="158" width="10" height="27" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <rect x="55" y="160" width="8" height="25" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <rect x="64" y="156" width="7" height="29" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />

      {/* Plant in corner */}
      <rect x="290" y="278" width="24" height="30" rx="3" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M302 278 Q295 255 285 245" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M302 278 Q308 255 318 245" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M302 278 Q296 260 292 250" stroke="#0a0a0a" strokeWidth="1" opacity="0.6" />
      <path d="M302 278 Q305 262 312 252" stroke="#0a0a0a" strokeWidth="1" opacity="0.6" />
      <path d="M285 245 Q282 238 287 234 Q290 242 285 245Z" stroke="#0a0a0a" strokeWidth="1" fill="#0a0a0a" fillOpacity="0.06" />
      <path d="M318 245 Q322 238 317 234 Q314 242 318 245Z" stroke="#0a0a0a" strokeWidth="1" fill="#0a0a0a" fillOpacity="0.06" />
    </svg>
  );
}
