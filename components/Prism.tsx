export default function Prism() {
  return (
    <svg
      aria-hidden="true"
      className="prism-element"
      fill="none"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="prism-face-one" x1="70" x2="322" y1="48" y2="360">
          <stop stopColor="#DCE7F0" stopOpacity="0.34" />
          <stop offset="0.48" stopColor="#4A7796" stopOpacity="0.12" />
          <stop offset="1" stopColor="#8B7AA8" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="prism-face-two" x1="102" x2="330" y1="84" y2="320">
          <stop stopColor="#B7D2E4" stopOpacity="0.18" />
          <stop offset="1" stopColor="#102C44" stopOpacity="0.04" />
        </linearGradient>
        <filter id="prism-soften" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      <g filter="url(#prism-soften)">
        <path d="M210 36 366 314 54 314 210 36Z" fill="url(#prism-face-one)" />
        <path d="m210 36 156 278-156-76V36Z" fill="url(#prism-face-two)" />
        <path d="m210 36-156 278 156-76V36Z" fill="#D7E4EE" fillOpacity="0.06" />
        <path d="m54 314 156-76 156 76" stroke="#D7E4EE" strokeOpacity="0.2" />
        <path d="M210 36v202" stroke="#D7E4EE" strokeOpacity="0.17" />
      </g>
    </svg>
  );
}
