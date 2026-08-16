const CITIES = [
  "Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Leduc",
  "Spruce Grove",
  "Fort Saskatchewan",
  "Nisku",
  "Beaumont",
  "Devon",
  "Stony Plain",
  "Acheson",
  "Morinville",
];

const FOCUS_AREAS = [
  {
    title: "Workplaces & industrial sites",
    body: "Offices, warehouses, factories, shops and logistics sites—especially where staff are on site for full shifts and the nearest store is a drive away.",
  },
  {
    title: "Public & residential buildings",
    body: "Apartments, hotels, gyms, schools, arenas, clinics and rec centres where residents, members or visitors want something quick on site.",
  },
];

const ZONES = [
  "Offices & business parks",
  "Warehouses, factories & shops",
  "Apartments & condo buildings",
  "Hotels & waiting areas",
  "Gyms, arenas & rec centres",
  "Schools, clinics & auto dealerships",
];

export function ServiceAreaD4() {
  return (
    <section id="d4" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.3fr_1fr] md:items-start md:py-24">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-ink/60">SERVICE AREA</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
            Serving Edmonton and the surrounding area.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
            We visit buildings across Edmonton and the towns around it, so service calls and
            restocking happen quickly. If your building is nearby but not on the list, ask—we&rsquo;ll
            tell you honestly whether we can look after it properly.
          </p>
          <div className="mt-8 grid gap-px border-2 border-ink/20 bg-ink/20 md:grid-cols-2">
            {FOCUS_AREAS.map((area) => (
              <article key={area.title} className="bg-paper p-5">
                <p className="font-mono text-xs tracking-[0.18em] text-amber uppercase">
                  {area.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{area.body}</p>
              </article>
            ))}
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-px border-2 border-ink/20 bg-ink/20 sm:grid-cols-3">
            {CITIES.map((city) => (
              <li
                key={city}
                className="bg-paper px-4 py-3 font-mono text-xs tracking-wide text-ink"
              >
                {city}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-mono text-xs tracking-[0.2em] text-ink/60">
            BUILDINGS WE WORK WITH
          </p>
          <ul className="mt-4 grid gap-1 sm:grid-cols-2">
            {ZONES.map((zone) => (
              <li key={zone} className="text-sm text-ink/80">
                <span className="text-amber">&#9632;</span> {zone}
              </li>
            ))}
          </ul>
        </div>
        <svg
          viewBox="0 0 200 300"
          role="img"
          aria-label="Outline map of Alberta showing the Edmonton service area"
          className="h-auto w-44 justify-self-center md:w-56"
        >
          <path
            d="M28 6 H172 L184 250 L150 294 H40 L20 250 Z"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
          />
          <circle cx="112" cy="112" r="7" fill="#FFB627" stroke="#1A1A1A" strokeWidth="2" />
          <text x="128" y="108" fontFamily="monospace" fontSize="12" fill="#1A1A1A">
            EDMONTON
          </text>
          <text x="128" y="124" fontFamily="monospace" fontSize="10" fill="#1A1A1A">
            + METRO
          </text>
        </svg>
      </div>
    </section>
  );
}
