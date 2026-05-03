export function BeakerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lab person - scientist */}
      {/* Head */}
      <circle cx="160" cy="60" r="28" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Hair */}
      <path d="M132 55 Q135 30 160 28 Q185 30 188 55" stroke="#0a0a0a" strokeWidth="1.5" fill="none" />
      {/* Glasses */}
      <circle cx="150" cy="60" r="10" stroke="#0a0a0a" strokeWidth="1.2" />
      <circle cx="170" cy="60" r="10" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="140" y1="60" x2="136" y2="60" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="160" y1="60" x2="160" y2="60" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="180" y1="60" x2="184" y2="60" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Body - lab coat */}
      <path d="M132 88 L125 180 L195 180 L188 88 Q175 96 160 96 Q145 96 132 88Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Lab coat buttons */}
      <line x1="160" y1="100" x2="160" y2="175" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <circle cx="160" cy="115" r="2.5" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="160" cy="135" r="2.5" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="160" cy="155" r="2.5" stroke="#0a0a0a" strokeWidth="1" />
      {/* Arms */}
      <path d="M125 100 L100 150 L115 155 L130 115" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M195 100 L215 145 L200 155 L190 115" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Hand holding beaker */}
      <path d="M100 150 Q96 160 102 168 Q108 175 115 155" stroke="#0a0a0a" strokeWidth="1.2" />

      {/* Large beaker in hand */}
      <path d="M85 175 L78 240 Q77 250 87 252 L115 252 Q125 250 124 240 L117 175Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Beaker liquid level */}
      <path d="M80 220 Q100 216 122 220" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" strokeDasharray="3,2" />
      {/* Liquid fill indication */}
      <path d="M80 220 L79 240 Q79 246 87 248 L115 248 Q121 246 121 240 L120 220Z" stroke="none" fill="#0a0a0a" opacity="0.05" />
      {/* Beaker graduation lines */}
      <line x1="90" y1="230" x2="95" y2="230" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="89" y1="215" x2="94" y2="215" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="88" y1="200" x2="93" y2="200" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      {/* Beaker bubbles */}
      <circle cx="98" cy="235" r="3" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <circle cx="106" cy="228" r="2" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <circle cx="112" cy="237" r="2.5" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />

      {/* Legs */}
      <rect x="140" y="178" width="18" height="70" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="162" y="178" width="18" height="70" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Shoes */}
      <path d="M138 248 Q130 250 128 258 L148 258 L148 248Z" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M162 248 Q154 250 152 258 L172 258 L172 248Z" stroke="#0a0a0a" strokeWidth="1.2" />

      {/* Steam from beaker */}
      <path d="M96 172 Q94 164 97 158 Q100 152 98 146" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M102 170 Q100 162 103 156 Q106 150 104 144" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M108 171 Q107 163 110 157 Q113 151 111 145" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

      {/* Floor line */}
      <line x1="60" y1="262" x2="260" y2="262" stroke="#0a0a0a" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function ManufacturingMachine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Large industrial mixing vessel */}
      <ellipse cx="180" cy="80" rx="70" ry="20" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M110 80 L110 240 Q110 270 180 275 Q250 270 250 240 L250 80" stroke="#0a0a0a" strokeWidth="1.5" />
      <ellipse cx="180" cy="275" rx="70" ry="15" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />

      {/* Vessel band */}
      <path d="M112 160 Q180 168 248 160" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" strokeDasharray="4,2" />

      {/* Agitator shaft */}
      <line x1="180" y1="30" x2="180" y2="275" stroke="#0a0a0a" strokeWidth="2" />
      {/* Motor on top */}
      <rect x="162" y="10" width="36" height="30" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="180" cy="25" r="8" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Motor bolts */}
      <circle cx="167" cy="15" r="2" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="193" cy="15" r="2" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="167" cy="35" r="2" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="193" cy="35" r="2" stroke="#0a0a0a" strokeWidth="1" />

      {/* Agitator paddles */}
      <path d="M180 150 L140 165 Q135 175 142 178 L180 165" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M180 150 L220 165 Q225 175 218 178 L180 165" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M180 200 L145 215 Q140 225 147 228 L180 215" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M180 200 L215 215 Q220 225 213 228 L180 215" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Pipe left */}
      <path d="M110 120 L70 120 L70 300" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <rect x="62" y="290" width="16" height="25" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Valve */}
      <circle cx="70" cy="180" r="12" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="70" y1="168" x2="70" y2="192" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="58" y1="180" x2="82" y2="180" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="62" y1="172" x2="78" y2="188" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Pipe right */}
      <path d="M250 120 L290 120 L290 300" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <rect x="282" y="290" width="16" height="25" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Valve right */}
      <circle cx="290" cy="200" r="12" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="290" y1="188" x2="290" y2="212" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="278" y1="200" x2="302" y2="200" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Pressure gauge */}
      <circle cx="180" cy="90" r="16" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M168 96 A12 12 0 0 1 192 96" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" />
      <line x1="180" y1="90" x2="187" y2="82" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />

      {/* Legs/support */}
      <line x1="140" y1="275" x2="135" y2="340" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <line x1="220" y1="275" x2="225" y2="340" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <line x1="130" y1="340" x2="160" y2="340" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="220" y1="340" x2="250" y2="340" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Floor line */}
      <line x1="50" y1="345" x2="310" y2="345" stroke="#0a0a0a" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function PackagingMachine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lab apparatus - distillation setup */}
      {/* Main flask */}
      <path d="M120 200 Q80 230 85 265 Q88 295 130 300 L210 300 Q252 295 255 265 Q260 230 220 200 L200 140 L200 100 L140 100 L140 140Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Flask neck detail */}
      <rect x="140" y="88" width="60" height="20" rx="3" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Stopper */}
      <rect x="150" y="78" width="40" height="14" rx="4" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Liquid level in flask */}
      <path d="M90 255 Q170 248 250 255" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" strokeDasharray="3,2" />
      <path d="M90 255 Q89 270 95 282 Q100 295 130 298 L210 298 Q240 295 245 282 Q251 270 250 255Z" fill="#0a0a0a" opacity="0.04" />

      {/* Bubbles */}
      <circle cx="150" cy="270" r="5" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />
      <circle cx="170" cy="260" r="3.5" stroke="#0a0a0a" strokeWidth="1" opacity="0.25" />
      <circle cx="190" cy="272" r="4" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />
      <circle cx="165" cy="280" r="3" stroke="#0a0a0a" strokeWidth="1" opacity="0.2" />

      {/* Condenser tube going up and right */}
      <path d="M170 88 L170 50" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M170 50 Q170 30 200 30 L280 30" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M280 30 Q300 30 300 50 L300 120" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Outer condenser jacket */}
      <path d="M163 50 Q163 22 200 22 L280 22" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <path d="M280 22 Q308 22 308 50 L308 120" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      {/* Water inlet/outlet lines */}
      <line x1="308" y1="70" x2="320" y2="70" stroke="#0a0a0a" strokeWidth="1" />
      <line x1="308" y1="100" x2="320" y2="100" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="322" cy="70" r="3" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="322" cy="100" r="3" stroke="#0a0a0a" strokeWidth="1" />

      {/* Receiving flask */}
      <path d="M280 120 L275 155 Q272 172 285 178 L315 178 Q328 172 325 155 L320 120" stroke="#0a0a0a" strokeWidth="1.5" />
      <ellipse cx="300" cy="178" rx="15" ry="5" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Bunsen burner / heat source */}
      <rect x="155" y="300" width="50" height="12" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="165" y="312" width="30" height="20" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Flame */}
      <path d="M172 300 Q170 290 175 282 Q178 276 174 268 Q179 278 180 285 Q185 275 184 265 Q188 278 186 285 Q192 275 190 265 Q195 278 192 285 Q196 279 188 300Z" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />

      {/* Support stand */}
      <line x1="50" y1="90" x2="50" y2="315" stroke="#0a0a0a" strokeWidth="2" />
      <line x1="40" y1="315" x2="120" y2="315" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="50" y1="140" x2="110" y2="140" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="50" y1="200" x2="90" y2="200" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="90" cy="200" r="4" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Clamp */}
      <path d="M90 200 Q110 200 115 190 L125 195 Q120 210 100 208Z" stroke="#0a0a0a" strokeWidth="1" opacity="0.6" />

      {/* Floor */}
      <line x1="30" y1="320" x2="330" y2="320" stroke="#0a0a0a" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function PersonWithClipboard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Person - quality inspector */}
      {/* Head */}
      <circle cx="150" cy="65" r="30" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Hair */}
      <path d="M120 58 Q122 35 150 32 Q178 35 180 58" stroke="#0a0a0a" strokeWidth="1.5" fill="none" />
      {/* Face features */}
      <line x1="140" y1="65" x2="160" y2="65" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      {/* Neck */}
      <line x1="143" y1="95" x2="143" y2="105" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" />

      {/* Body */}
      <path d="M115 110 L108 220 L192 220 L185 110 Q170 120 150 120 Q130 120 115 110Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Shirt detail */}
      <line x1="150" y1="122" x2="150" y2="218" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <path d="M135 130 L150 122 L165 130" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Left arm extended holding clipboard */}
      <path d="M108 130 L65 150 L65 200" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hand */}
      <circle cx="65" cy="205" r="10" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Clipboard */}
      <rect x="35" y="195" width="65" height="85" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Clipboard clip */}
      <rect x="52" y="190" width="30" height="12" rx="3" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Lines on clipboard */}
      <line x1="44" y1="215" x2="92" y2="215" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <line x1="44" y1="228" x2="88" y2="228" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="44" y1="241" x2="90" y2="241" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="44" y1="254" x2="80" y2="254" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />
      <line x1="44" y1="267" x2="85" y2="267" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />
      {/* Checkmarks */}
      <path d="M44 213 L47 216 L52 210" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M44 226 L47 229 L52 223" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />

      {/* Right arm down */}
      <path d="M192 130 L215 185 L210 190" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" />

      {/* Pen/pencil in right hand */}
      <line x1="210" y1="190" x2="230" y2="170" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M230 170 L234 164 L226 166Z" stroke="#0a0a0a" strokeWidth="1" fill="#0a0a0a" fillOpacity="0.5" />

      {/* Hard hat */}
      <path d="M118 60 Q120 35 150 32 Q180 35 182 60 L186 60 Q188 50 184 40 Q175 20 150 18 Q125 20 116 40 Q112 50 114 60Z" stroke="#0a0a0a" strokeWidth="1.2" fill="#0a0a0a" fillOpacity="0.05" />

      {/* Legs */}
      <rect x="130" y="218" width="18" height="80" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="152" y="218" width="18" height="80" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Shoes */}
      <path d="M128 298 Q118 300 116 312 L138 312 L138 298Z" stroke="#0a0a0a" strokeWidth="1.2" />
      <path d="M152 298 Q142 300 140 312 L162 312 L162 298Z" stroke="#0a0a0a" strokeWidth="1.2" />

      {/* Floor line */}
      <line x1="40" y1="318" x2="260" y2="318" stroke="#0a0a0a" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function PersonReadingDoc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Person reviewing document - professional woman */}
      {/* Head */}
      <circle cx="155" cy="65" r="28" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Hair - styled */}
      <path d="M127 58 Q128 32 155 30 Q182 32 183 58" stroke="#0a0a0a" strokeWidth="1.5" fill="none" />
      <path d="M127 58 Q122 70 125 82" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M183 58 Q188 70 185 82" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Glasses - rectangular */}
      <rect x="137" y="58" width="18" height="12" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <rect x="158" y="58" width="18" height="12" rx="2" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="155" y1="64" x2="158" y2="64" stroke="#0a0a0a" strokeWidth="1" />
      <line x1="127" y1="64" x2="137" y2="64" stroke="#0a0a0a" strokeWidth="1" />
      <line x1="176" y1="64" x2="184" y2="64" stroke="#0a0a0a" strokeWidth="1" />

      {/* Neck */}
      <line x1="148" y1="93" x2="148" y2="105" stroke="#0a0a0a" strokeWidth="7" strokeLinecap="round" />

      {/* Body - blazer */}
      <path d="M120 108 L112 215 L195 215 L187 108 Q173 118 155 118 Q137 118 120 108Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Blazer lapels */}
      <path d="M137 118 L148 108 L155 130" stroke="#0a0a0a" strokeWidth="1.2" opacity="0.6" />
      <path d="M173 118 L162 108 L155 130" stroke="#0a0a0a" strokeWidth="1.2" opacity="0.6" />

      {/* Both arms forward holding document */}
      <path d="M112 125 L75 145 L72 200" stroke="#0a0a0a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M187 125 L225 145 L228 200" stroke="#0a0a0a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

      {/* Hands */}
      <ellipse cx="72" cy="205" rx="10" ry="8" stroke="#0a0a0a" strokeWidth="1.5" />
      <ellipse cx="228" cy="205" rx="10" ry="8" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Document/report being held */}
      <rect x="82" y="180" width="146" height="100" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Document lines */}
      <line x1="96" y1="200" x2="214" y2="200" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <line x1="96" y1="213" x2="200" y2="213" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="96" y1="226" x2="210" y2="226" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="96" y1="239" x2="195" y2="239" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />
      <line x1="96" y1="252" x2="205" y2="252" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />
      <line x1="96" y1="265" x2="190" y2="265" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />
      {/* Document header */}
      <rect x="96" y="190" width="50" height="6" rx="1" fill="#0a0a0a" opacity="0.15" />

      {/* Legs */}
      <rect x="135" y="213" width="17" height="78" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="157" y="213" width="17" height="78" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Heeled shoes */}
      <path d="M133 291 Q125 292 120 302 Q125 308 140 306 L140 291Z" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="128" y1="302" x2="128" y2="310" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M157 291 Q149 292 144 302 Q149 308 164 306 L164 291Z" stroke="#0a0a0a" strokeWidth="1.2" />
      <line x1="152" y1="302" x2="152" y2="310" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />

      {/* Floor line */}
      <line x1="50" y1="316" x2="260" y2="316" stroke="#0a0a0a" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
