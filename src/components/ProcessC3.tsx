const STEPS = [
  {
    n: "01",
    title: "Research & scout",
    body: "We build a target list from commercial density, employee counts, shift patterns and existing vending coverage, then physically drive and walk the shortlist. No desk-only guesses.",
    detail: "OUTPUT: TARGET LIST",
  },
  {
    n: "02",
    title: "Site assessment & approval",
    body: "On site we count traffic at peak hours, check the wall space, the outlet, delivery access and building rules, then speak to whoever actually signs off and get permission in writing.",
    detail: "OUTPUT: WRITTEN OK",
  },
  {
    n: "03",
    title: "Location report",
    body: "You get a report per location: address, contact name and number, traffic estimate, recommended machine type, commission expected, and access notes. Install-ready.",
    detail: "OUTPUT: PLACEMENT FILE",
  },
];

export function ProcessC3() {
  return (
    <section id="c3" className="scroll-mt-28 border-b-2 border-silver/30 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-amber">C3 / WHAT WE DO</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
          Three steps from blank map to signed spot
        </h2>
        <ol className="mt-12 grid gap-px border-2 border-silver/40 bg-silver/40 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-navy p-7 md:p-9">
              <div className="flex items-baseline gap-4 border-b border-silver/30 pb-4">
                <span className="font-mono text-3xl text-amber">{s.n}</span>
                <span className="font-display text-lg tracking-tight text-paper uppercase">
                  {s.title}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-silver">{s.body}</p>
              <p className="mt-6 font-mono text-xs tracking-[0.15em] text-silver/70">{s.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 border-l-4 border-red pl-4 font-mono text-xs tracking-wide text-silver">
          <span className="text-red">NOTE:</span> we don&rsquo;t sell, install or
          service machines. Location finding only.
        </p>
      </div>
    </section>
  );
}