export default function OceanBackground() {
  return (
    <div aria-hidden="true" className="ocean-background">
      <div className="ocean-surface-light" />
      <div className="ocean-current ocean-current-one" />
      <div className="ocean-current ocean-current-two" />
      <svg className="ocean-noise" preserveAspectRatio="none" viewBox="0 0 100 100">
        <filter id="ocean-noise-filter" x="0" y="0" width="100%" height="100%">
          <feTurbulence baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" type="fractalNoise" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect filter="url(#ocean-noise-filter)" height="100" width="100" />
      </svg>
    </div>
  );
}
