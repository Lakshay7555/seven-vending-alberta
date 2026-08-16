const TYPES = [
  {
    tag: "SNACKS",
    title: "Snack machines",
    body: "Chips, bars, candy and better-for-you options. Best where people are on site all day and want something quick between meals.",
    fit: ["Offices", "Factories & warehouses", "Schools"],
  },
  {
    tag: "DRINKS",
    title: "Beverage machines",
    body: "Cold drinks, water, sports drinks and energy. Best where people are active, working hard, or passing through in a hurry.",
    fit: ["Gyms", "Warehouses", "Retail & lobbies"],
  },
  {
    tag: "COFFEE",
    title: "Coffee machines",
    body: "Fresh-brew and specialty coffee on demand. Best for early starts, long shifts and places where guests expect a hot drink.",
    fit: ["Offices", "Hotels", "Waiting areas"],
  },
  {
    tag: "SPECIALTY",
    title: "Specialty machines",
    body: "Fresh food, frozen, PPE, essentials or micro-market setups. Best when your people need something a standard machine can't cover.",
    fit: ["Unique demographics", "24/7 sites", "Residential buildings"],
  },
];

export function MachineTypes() {
  return (
    <section id="mt" className="scroll-mt-28 border-b-2 border-silver/30 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-amber">MACHINE TYPES</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
          Four options. One that actually suits your space.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver">
          You don&rsquo;t have to know which one you need. Tell us who&rsquo;s in the building and
          we&rsquo;ll tell you what tends to work—and what doesn&rsquo;t.
        </p>
        <div className="mt-12 grid gap-px border-2 border-silver/40 bg-silver/40 md:grid-cols-2">
          {TYPES.map((t) => (
            <article key={t.tag} className="bg-navy p-7 md:p-9">
              <p className="font-mono text-xs tracking-[0.2em] text-amber">{t.tag}</p>
              <h3 className="mt-3 font-display text-xl tracking-tight text-paper uppercase">
                {t.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-silver">{t.body}</p>
              <ul className="mt-6 border-t border-silver/30 pt-4 font-mono text-xs text-silver/80">
                {t.fit.map((f) => (
                  <li key={f} className="py-1">
                    <span className="text-amber">&#9632;</span> BEST FOR: {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}