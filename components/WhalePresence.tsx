export default function WhalePresence() {
  return (
    <svg aria-hidden="true" className="whale-presence" viewBox="0 0 1280 540" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="presence-skin" x1="80" x2="1080" y1="92" y2="398"><stop stopColor="#9AD9FF" stopOpacity="0.34" /><stop offset="0.5" stopColor="#0B2942" stopOpacity="0.17" /><stop offset="1" stopColor="#071B33" stopOpacity="0.02" /></linearGradient>
        <linearGradient id="presence-line" x1="230" x2="965" y1="150" y2="415"><stop stopColor="#D9F3FF" stopOpacity="0" /><stop offset="0.42" stopColor="#D9F3FF" stopOpacity="0.5" /><stop offset="1" stopColor="#6B1E32" stopOpacity="0" /></linearGradient>
        <filter id="presence-blur"><feGaussianBlur stdDeviation="1.4" /></filter>
      </defs>
      <g filter="url(#presence-blur)">
        <path d="M72 315c122-117 293-174 489-171 150 2 257 34 357 75 93 39 182 38 296-17-18 72-72 124-163 151-68 20-141 18-205 4-89 71-229 116-378 101-142-14-265-73-337-145-30 18-53 24-59 2Z" fill="url(#presence-skin)" />
        <path d="M484 450c31 28 48 52 51 79M678 199c54 10 96 26 136 49M243 314c105 38 252 52 387 20" stroke="url(#presence-line)" strokeWidth="3" />
        <path d="M528 231c52-26 129-31 179-4M575 284c90 13 188 4 263-34M587 321c80 18 188 9 276-25" stroke="#D9F3FF" strokeOpacity="0.18" strokeWidth="2" />
      </g>
    </svg>
  );
}
