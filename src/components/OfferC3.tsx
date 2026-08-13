const MACHINES = [
  {
    code: "SNK-01",
    name: "Snack machine",
    body: "Chips, bars, candy, jerky and gum. The workhorse for a standard break room.",
    fits: "10-60 people · small break room",
  },
  {
    code: "BEV-02",
    name: "Cold beverage",
    body: "Pop, water, energy drinks, iced coffee and sports drinks, held cold year round.",
    fits: "25+ people · warm shops and gyms",
  },
  {
    code: "CMB-03",
    name: "Combo unit",
    body: "Snacks and cold drinks in one cabinet when you only have wall space for one machine.",
    fits: "10-40 people · tight footprint",
  },
  {
    code: "MKT-04",
    name: "Micro-market",
    body: "Open shelving, cooler and a self-checkout kiosk. Fresh food, bigger selection, no coils.",
    fits: "75+ people · dedicated lunch room",
  },
];

export function OfferC3() {
  return (
    <section id="c3" className="scroll-mt-28 border-b-2 border-silver/30 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-amber">C3 / WHAT WE OFFER</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
          Pick the machine that fits the room
        </h2>
        <div className="mt-12 grid gap-px border-2 border-silver/40 bg-silver/40 md:grid-cols-2">
          {MACHINES.map((m) => (
            <article key={m.code} className="bg-navy p-7 md:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl tracking-tight text-paper uppercase">
                  {m.name}
                </h3>
                <span className="font-mono text-xs text-amber">{m.code}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-silver">{m.body}</p>
              <p className="mt-6 border-t border-silver/30 pt-4 font-mono text-xs tracking-wide text-silver/80 uppercase">
                {m.fits}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 border-l-4 border-red pl-4 font-mono text-xs tracking-wide text-silver">
          <span className="text-red">LIMITED:</span> only a handful of micro-market
          kiosks left for install this quarter.
        </p>
      </div>
    </section>
  );
}