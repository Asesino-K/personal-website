export default function WhalePresence() {
  return (
    <svg aria-hidden="true" className="whale-presence" viewBox="0 0 1280 540" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="presence-skin" x1="80" x2="1080" y1="92" y2="398"><stop stopColor="#BEE9FF" stopOpacity="0.78" /><stop offset="0.46" stopColor="#1B5C86" stopOpacity="0.54" /><stop offset="1" stopColor="#071B33" stopOpacity="0.04" /></linearGradient>
        <linearGradient id="presence-line" x1="230" x2="965" y1="150" y2="415"><stop stopColor="#D9F3FF" stopOpacity="0" /><stop offset="0.42" stopColor="#D9F3FF" stopOpacity="0.92" /><stop offset="0.72" stopColor="#8FD3FF" stopOpacity="0.54" /><stop offset="1" stopColor="#6B1E32" stopOpacity="0" /></linearGradient>
        <radialGradient id="presence-eye"><stop stopColor="#D9F3FF" stopOpacity="1" /><stop offset="0.25" stopColor="#8FD3FF" stopOpacity="0.58" /><stop offset="1" stopColor="#8FD3FF" stopOpacity="0" /></radialGradient>
        <filter id="presence-blur"><feGaussianBlur stdDeviation="0.65" /></filter>
      </defs>
      <g filter="url(#presence-blur)">
        <path d="M44 326C157 179 344 96 557 103c161 5 273 42 372 84 101 43 201 41 307-20-13 85-72 145-173 173-73 21-151 17-220-1-93 91-248 148-411 127-150-19-280-83-360-163-30 18-47 27-22 23Z" fill="url(#presence-skin)" />
        <path d="M47 326C198 227 350 191 550 204c135 8 260 44 381 91 91 35 188 29 296-22" stroke="url(#presence-line)" strokeWidth="7" />
        <path d="M466 462c35 28 57 54 64 83M615 153c74-8 141 4 206 39M256 313c124 58 270 68 423 26" stroke="url(#presence-line)" strokeWidth="4" />
        <path d="M480 226c58-34 158-39 225-5M510 272c92 25 220 18 311-28M536 320c100 26 236 13 326-31M566 365c92 19 203 6 295-29" stroke="#D9F3FF" strokeOpacity="0.48" strokeWidth="2.5" />
        <path d="M114 286c154-130 326-158 492-137M150 348c139 91 292 111 437 77" stroke="#8FD3FF" strokeOpacity="0.24" strokeWidth="2" />
        <circle cx="876" cy="240" r="34" fill="url(#presence-eye)" />
        <circle cx="876" cy="240" r="3" fill="#D9F3FF" />
      </g>
    </svg>
  );
}
