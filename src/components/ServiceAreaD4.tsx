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

export function ServiceAreaD4() {
  return (
    <section id="d4" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:items-start md:py-24">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-ink/60">D4 / SERVICE AREA</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
            We run routes across Alberta
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
            Our trucks cover the Edmonton and Calgary corridors weekly, with
            regular runs through the industrial parks in between. If you're
            outside the list, call us anyway &mdash; if there's a route near you,
            we'll add the stop.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-px border-2 border-ink/20 bg-ink/20 sm:grid-cols-3">
            {CITIES.map((c) => (
              <li key={c} className="bg-paper px-4 py-3 font-mono text-xs tracking-wide text-ink">
                {c}
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