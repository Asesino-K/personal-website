export default function CinematicBackground() {
  return (
    <div aria-hidden="true" className="cinematic-background">
      <div className="cinematic-depth" />
      <div className="cinematic-ray cinematic-ray-one" />
      <div className="cinematic-ray cinematic-ray-two" />
      <div className="cinematic-fog cinematic-fog-one" />
      <div className="cinematic-fog cinematic-fog-two" />
      <svg className="cinematic-grain" preserveAspectRatio="none" viewBox="0 0 100 100">
        <filter id="cinematic-noise"><feTurbulence baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" type="fractalNoise" /></filter>
        <rect filter="url(#cinematic-noise)" height="100" width="100" />
      </svg>
    </div>
  );
}
