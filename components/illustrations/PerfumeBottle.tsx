export default function PerfumeBottle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Spray nozzle tube */}
      <line x1="180" y1="60" x2="220" y2="60" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="220" y1="55" x2="220" y2="75" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Small spray dots */}
      <circle cx="232" cy="58" r="1.5" fill="#0a0a0a" opacity="0.4" />
      <circle cx="240" cy="54" r="1" fill="#0a0a0a" opacity="0.3" />
      <circle cx="238" cy="62" r="1.2" fill="#0a0a0a" opacity="0.25" />

      {/* Cap */}
      <rect x="155" y="50" width="50" height="30" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="155" y1="68" x2="205" y2="68" stroke="#0a0a0a" strokeWidth="1" opacity="0.4" />

      {/* Neck */}
      <rect x="167" y="80" width="26" height="25" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Shoulder curve */}
      <path d="M140 105 Q155 102 167 105 L205 105 Q218 102 220 105" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />

      {/* Main bottle body */}
      <rect x="140" y="105" width="80" height="200" rx="4" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* Label area */}
      <rect x="152" y="135" width="56" height="90" rx="2" stroke="#0a0a0a" strokeWidth="1" opacity="0.5" />
      {/* Label lines */}
      <line x1="162" y1="158" x2="200" y2="158" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="165" y1="168" x2="197" y2="168" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="168" y1="178" x2="194" y2="178" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />
      <line x1="162" y1="188" x2="200" y2="188" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.4" />
      <line x1="165" y1="198" x2="197" y2="198" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.3" />

      {/* Bottle base */}
      <path d="M140 305 Q140 315 144 318 L216 318 Q220 315 220 305" stroke="#0a0a0a" strokeWidth="1.5" />
      <ellipse cx="180" cy="318" rx="36" ry="6" stroke="#0a0a0a" strokeWidth="1" opacity="0.3" />

      {/* Shine lines */}
      <line x1="148" y1="115" x2="148" y2="290" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.15" />
      <line x1="154" y1="112" x2="154" y2="292" stroke="#0a0a0a" strokeWidth="0.4" opacity="0.1" />
    </svg>
  );
}
