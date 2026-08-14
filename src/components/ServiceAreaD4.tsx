const CITIES = [
  "Edmonton",
  "Calgary",
  "Red Deer",
  "Sherwood Park",
  "St. Albert",
  "Leduc",
  "Spruce Grove",
  "Airdrie",
  "Fort Saskatchewan",
  "Nisku",
  "Lethbridge",
  "Grande Prairie",
];

const ZONES = [
  "Industrial parks & fabrication shops",
  "Multi-tenant office towers",
  "Warehouses & distribution centres",
  "Gyms, arenas & rec centres",
  "Apartment & condo lobbies",
  "Auto dealerships & service bays",
];

export function ServiceAreaD4() {
  return (
    <section id="d4" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:items-start md:py-24">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-ink/60">D4 / SERVICE AREA</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
            Where we scout
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
            We scout the Edmonton and Calgary corridors weekly and cover the
            industrial towns in between. If your route runs somewhere not on the
            list, call us &mdash; if there's enough commercial density, we'll go
            look at it.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-px border-2 border-ink/20 bg-ink/20 sm:grid-cols-3">
            {CITIES.map((c) => (
              <li key={c} className="bg-paper px-4 py-3 font-mono text-xs tracking-wide text-ink">
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-mono text-xs tracking-[0.2em] text-ink/60">
            SITE TYPES WE TARGET
          </p>
          <ul className="mt-4 grid gap-1 sm:grid-cols-2">
            {ZONES.map((z) => (
              <li key={z} className="text-sm text-ink/80">
                <span className="text-amber">&#9632;</span> {z}
              </li>
            ))}
          </ul>
        </div>
        <svg
          viewBox="0 0 200 300"
          role="img"
          aria-label="Outline map of Alberta"
          className="h-auto w-44 justify-self-center md:w-56"
        >
          <path
            d="M28 6 H172 L184 250 L150 294 H40 L20 250 Z"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
          />
          <circle cx="112" cy="112" r="5" fill="#FFB627" stroke="#1A1A1A" strokeWidth="2" />
          <text x="124" y="116" fontFamily="monospace" fontSize="12" fill="#1A1A1A">
            EDMONTON
          </text>
          <circle cx="96" cy="196" r="5" fill="#FFB627" stroke="#1A1A1A" strokeWidth="2" />
          <text x="108" y="200" fontFamily="monospace" fontSize="12" fill="#1A1A1A">
            CALGARY
          </text>
          <line x1="112" y1="112" x2="96" y2="196" stroke="#FFB627" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
}