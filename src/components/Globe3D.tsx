// CSS-only 3D globe: a spinning wireframe sphere (meridians + parallels) with a
// glowing forest core and a ring of billboarded country flags orbiting in true 3D.
// Pure transforms/opacity — no WebGL, no JS. Honors prefers-reduced-motion via CSS.

const MERIDIANS = 9 // vertical rings around the Y axis
const SIZE = 300 // px — globe diameter
const RADIUS = 188 // px — orbit radius for flags

const ORBIT_FLAGS = [
  { flag: '🇳🇬', name: 'Nigeria' },
  { flag: '🇰🇪', name: 'Kenya' },
  { flag: '🇬🇭', name: 'Ghana' },
  { flag: '🇿🇦', name: 'South Africa' },
  { flag: '🇪🇬', name: 'Egypt' },
  { flag: '🇹🇿', name: 'Tanzania' },
  { flag: '🇺🇬', name: 'Uganda' },
  { flag: '🇸🇳', name: 'Senegal' },
]

export default function Globe3D() {
  return (
    <div
      className="relative mx-auto globe-float"
      style={{ width: SIZE, height: SIZE, perspective: 1100 }}
      aria-hidden="true"
    >
      {/* Ambient glow behind the sphere */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-green/25 blur-3xl"
        style={{ width: SIZE * 1.15, height: SIZE * 1.15 }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/15 blur-2xl"
        style={{ width: SIZE * 0.7, height: SIZE * 0.7 }}
      />

      {/* Tilted 3D stage */}
      <div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-16deg)' }}
      >
        {/* Solid shaded core — stationary so the sphere keeps its shape;
            only the wireframe cage spins over it */}
        <div
          className="absolute inset-[12%] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 32% 26%, #5A7D42 0%, #2D5016 44%, #14260A 100%)',
            boxShadow: 'inset -24px -30px 64px rgba(0,0,0,0.6), inset 16px 18px 44px rgba(212,175,55,0.2)',
          }}
        />

        {/* ── Spinning wireframe cage ── */}
        <div
          className="absolute inset-0 globe-spin"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Meridians (vertical rings) */}
          {Array.from({ length: MERIDIANS }).map((_, i) => (
            <div
              key={`m${i}`}
              className="absolute inset-0 rounded-full border border-luxury-gold/40"
              style={{ transform: `rotateY(${(180 / MERIDIANS) * i}deg)` }}
            />
          ))}
          {/* Equator + parallels (horizontal rings) */}
          <div
            className="absolute inset-0 rounded-full border-2 border-luxury-gold/50"
            style={{ transform: 'rotateX(90deg)' }}
          />
          {[0.62, 0.62].map((s, i) => (
            <div
              key={`p${i}`}
              className="absolute inset-0 rounded-full border border-luxury-gold/30"
              style={{
                transform: `translateY(${i === 0 ? -SIZE * 0.22 : SIZE * 0.22}px) rotateX(90deg) scale(${s})`,
              }}
            />
          ))}
        </div>

        {/* ── Orbiting billboarded flags ── */}
        <div
          className="absolute inset-0 globe-spin"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {ORBIT_FLAGS.map((c, i) => {
            const theta = (360 / ORBIT_FLAGS.length) * i
            return (
              <div
                key={c.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${theta}deg) translateZ(${RADIUS}px)`,
                }}
              >
                {/* counter-spin cancels the orbit rotation */}
                <div className="globe-spin-rev" style={{ transformStyle: 'preserve-3d' }}>
                  {/* static cancel of the slot's theta → badge always faces camera */}
                  <div style={{ transform: `rotateY(${-theta}deg) translate(-50%, -50%)` }}>
                    <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm border border-charcoal/5 pl-1.5 pr-3 py-1.5 shadow-[0_8px_24px_-8px_rgba(45,80,22,0.4)] whitespace-nowrap">
                      <span className="text-lg leading-none">{c.flag}</span>
                      <span className="text-xs font-semibold text-charcoal">{c.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
