export function PerfumeBottlesGroup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Three perfume bottles of different sizes */}

      {/* Bottle 1 - tall square */}
      <rect x="50" y="70" width="65" height="200" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="63" y="50" width="38" height="22" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="68" y="40" width="28" height="14" rx="4" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Label */}
      <rect x="60" y="100" width="45" height="80" rx="1" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <line x1="68" y1="118" x2="97" y2="118" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <line x1="68" y1="128" x2="95" y2="128" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="68" y1="138" x2="97" y2="138" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="68" y1="148" x2="93" y2="148" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="68" y1="158" x2="97" y2="158" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      {/* Base highlight */}
      <line x1="52" y1="268" x2="113" y2="268" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />

      {/* Bottle 2 - round/cylindrical center */}
      <path d="M148 80 Q148 68 182 65 Q216 68 216 80 L216 250 Q216 262 182 265 Q148 262 148 250Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Cap */}
      <path d="M160 80 Q160 62 182 60 Q204 62 204 80" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="168" y="44" width="28" height="18" rx="8" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Shoulder line */}
      <path d="M150 108 Q182 112 214 108" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      {/* Equator highlight */}
      <path d="M149 165 Q182 168 215 165" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.2" />
      {/* Label on round bottle */}
      <path d="M155 120 Q182 115 209 120 L209 200 Q182 206 155 200Z" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <path d="M162 142 Q182 139 202 142" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <path d="M162 152 Q182 149 202 152" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <path d="M162 162 Q182 159 202 162" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      {/* Shine */}
      <line x1="156" y1="90" x2="156" y2="240" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.12" />

      {/* Bottle 3 - faceted square bottle */}
      <path d="M250 100 L243 280 L315 280 L308 100 Q298 92 280 90 Q262 92 250 100Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Facet lines */}
      <line x1="268" y1="100" x2="262" y2="280" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="292" y1="100" x2="298" y2="280" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      {/* Neck */}
      <rect x="263" y="76" width="32" height="26" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Cap */}
      <rect x="255" y="60" width="48" height="18" rx="6" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Label */}
      <rect x="258" y="130" width="42" height="70" rx="1" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <line x1="265" y1="145" x2="293" y2="145" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.5" />
      <line x1="265" y1="155" x2="291" y2="155" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="265" y1="165" x2="293" y2="165" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="265" y1="175" x2="290" y2="175" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="265" y1="185" x2="293" y2="185" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />

      {/* Ground shadow lines */}
      <ellipse cx="82" cy="276" rx="34" ry="5" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.15" />
      <ellipse cx="182" cy="270" rx="36" ry="5" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.15" />
      <ellipse cx="279" cy="283" rx="38" ry="5" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.15" />
    </svg>
  );
}

export function HomeDecorSetup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Side table */}
      <rect x="80" y="200" width="200" height="12" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Table legs */}
      <line x1="96" y1="212" x2="92" y2="295" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <line x1="264" y1="212" x2="268" y2="295" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      <line x1="108" y1="212" x2="105" y2="295" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="252" y1="212" x2="255" y2="295" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bottom shelf */}
      <line x1="90" y1="270" x2="270" y2="270" stroke="#0a0a0a" strokeWidth="1.2" opacity="0.5" />

      {/* Diffuser/Reed diffuser */}
      <rect x="248" y="148" width="30" height="54" rx="4" stroke="#0a0a0a" strokeWidth="1.5" />
      <ellipse cx="263" cy="148" rx="15" ry="5" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Reed sticks */}
      <line x1="255" y1="148" x2="248" y2="95" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="259" y1="148" x2="255" y2="88" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="263" y1="148" x2="262" y2="82" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="267" y1="148" x2="270" y2="86" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="271" y1="148" x2="278" y2="92" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
      {/* Diffuser liquid */}
      <line x1="249" y1="175" x2="277" y2="175" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" strokeDasharray="2,2" />

      {/* Candle */}
      <rect x="155" y="158" width="42" height="44" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Wax texture lines */}
      <line x1="157" y1="168" x2="195" y2="168" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="157" y1="178" x2="195" y2="178" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.2" />
      <line x1="157" y1="188" x2="195" y2="188" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.2" />
      {/* Candle top */}
      <ellipse cx="176" cy="158" rx="21" ry="5" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Wick */}
      <line x1="176" y1="153" x2="176" y2="148" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
      {/* Flame */}
      <path d="M176 148 Q172 140 174 132 Q178 124 176 116 Q182 126 180 134 Q184 128 183 122 Q186 130 183 136 Q185 130 182 148Z" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" fill="#0a0a0a" fillOpacity="0.04" />
      {/* Flame glow dots */}
      <circle cx="176" cy="130" r="3" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.2" />

      {/* Small vase */}
      <path d="M105 158 Q95 165 93 185 Q91 205 100 210 L125 210 Q134 205 132 185 Q130 165 120 158Z" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Vase neck */}
      <path d="M108 158 Q112 150 118 150 Q124 150 118 158" stroke="#0a0a0a" strokeWidth="1.2" />
      <ellipse cx="113" cy="158" rx="8" ry="4" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      {/* Vase pattern */}
      <path d="M95 185 Q113 180 131 185" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" strokeDasharray="3,2" />
      {/* Stem/flower in vase */}
      <line x1="113" y1="154" x2="108" y2="125" stroke="#0a0a0a" strokeWidth="1" />
      <line x1="113" y1="154" x2="118" y2="118" stroke="#0a0a0a" strokeWidth="1" />
      <line x1="113" y1="154" x2="113" y2="110" stroke="#0a0a0a" strokeWidth="1" />
      {/* Flower heads */}
      <circle cx="108" cy="122" r="7" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="118" cy="115" r="7" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="113" cy="107" r="7" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="108" cy="122" r="3" fill="#0a0a0a" opacity="0.1" />
      <circle cx="118" cy="115" r="3" fill="#0a0a0a" opacity="0.1" />
      <circle cx="113" cy="107" r="3" fill="#0a0a0a" opacity="0.1" />

      {/* Coffee mug / tea cup */}
      <path d="M300 172 L295 210 Q294 218 305 220 L330 220 Q340 218 338 210 L333 172Z" stroke="#0a0a0a" strokeWidth="1.5" />
      <ellipse cx="315" cy="172" rx="18" ry="6" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Handle */}
      <path d="M333 185 Q350 185 350 200 Q350 215 333 215" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Saucer */}
      <ellipse cx="316" cy="220" rx="30" ry="7" stroke="#0a0a0a" strokeWidth="1.2" />
      {/* Steam */}
      <path d="M306 168 Q304 158 308 150 Q312 142 310 134" stroke="#0a0a0a" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      <path d="M315 166 Q313 156 317 148 Q321 140 319 132" stroke="#0a0a0a" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

      {/* Books stacked on bottom shelf */}
      <rect x="100" y="252" width="35" height="18" rx="1" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <rect x="103" y="246" width="30" height="8" rx="1" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      <rect x="105" y="240" width="26" height="8" rx="1" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Floor line */}
      <line x1="30" y1="298" x2="330" y2="298" stroke="#0a0a0a" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function CustomBottlesRow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Four different custom bottle silhouettes */}

      {/* Bottle 1 - classic oval */}
      <path d="M28 80 Q28 68 52 65 Q76 68 76 80 L76 238 Q76 252 52 255 Q28 252 28 238Z" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="38" y="50" width="28" height="18" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="42" y="38" width="20" height="14" rx="5" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="30" y1="140" x2="74" y2="140" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <rect x="34" y="100" width="36" height="60" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="30" y1="248" x2="74" y2="248" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />

      {/* Bottle 2 - wide flat */}
      <path d="M100 100 Q100 85 140 82 Q180 85 180 100 L180 240 Q180 255 140 258 Q100 255 100 240Z" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="120" y="68" width="40" height="16" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <path d="M125 84 Q140 78 155 84" stroke="#0a0a0a" strokeWidth="1.2" />
      <rect x="127" y="56" width="26" height="14" rx="6" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Label */}
      <rect x="110" y="115" width="60" height="80" rx="2" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="118" y1="133" x2="162" y2="133" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="118" y1="145" x2="158" y2="145" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="118" y1="157" x2="162" y2="157" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="118" y1="169" x2="156" y2="169" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="118" y1="181" x2="162" y2="181" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      {/* Facet lines */}
      <line x1="124" y1="100" x2="120" y2="240" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.18" />
      <line x1="156" y1="100" x2="160" y2="240" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.18" />

      {/* Bottle 3 - hexagonal */}
      <path d="M205 90 L195 100 L192 250 L245 255 L265 245 L265 100 L255 90 Z" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="210" y="66" width="38" height="26" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
      <rect x="215" y="52" width="28" height="16" rx="6" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Facets */}
      <line x1="207" y1="105" x2="200" y2="248" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.2" />
      <line x1="251" y1="105" x2="258" y2="248" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.2" />
      {/* Label */}
      <rect x="204" y="118" width="50" height="75" rx="1" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      <line x1="212" y1="134" x2="246" y2="134" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="212" y1="146" x2="244" y2="146" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="212" y1="158" x2="246" y2="158" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="212" y1="170" x2="242" y2="170" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />

      {/* Bottle 4 - roll-on/slim */}
      <rect x="295" y="72" width="40" height="190" rx="20" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* Roll-on ball */}
      <ellipse cx="315" cy="68" rx="18" ry="8" stroke="#0a0a0a" strokeWidth="1.2" />
      <circle cx="315" cy="60" r="14" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="315" cy="60" r="6" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />
      {/* Label */}
      <rect x="302" y="110" width="26" height="80" rx="1" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="307" y1="124" x2="323" y2="124" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.4" />
      <line x1="307" y1="136" x2="323" y2="136" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="307" y1="148" x2="323" y2="148" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="307" y1="160" x2="323" y2="160" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.3" />
      <line x1="307" y1="172" x2="323" y2="172" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.25" />
      {/* Shine */}
      <line x1="300" y1="85" x2="300" y2="250" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.1" />

      {/* Ground shadows */}
      <ellipse cx="52" cy="258" rx="26" ry="4" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.12" />
      <ellipse cx="140" cy="261" rx="42" ry="5" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.12" />
      <ellipse cx="228" cy="258" rx="38" ry="5" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.12" />
      <ellipse cx="315" cy="264" rx="22" ry="4" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.12" />
    </svg>
  );
}
