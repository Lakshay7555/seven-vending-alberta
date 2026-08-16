const STEPS = [
  {
    n: "01",
    title: "Research & route screen",
    body: "We build a target list around commercial density, workforce or visitor patterns, shift schedules, food access and your service radius. Then we screen for existing vending, micro-market or pantry coverage before we spend time on site.",
    detail: "OUTPUT: TARGET + COMPETITION SCREEN",
  },
  {
    n: "02",
    title: "Format fit & approval",
    body: "On site we assess demand, machine footprint, power, delivery access and building rules. We confirm whether conventional vending is the right fit, speak to the decision-maker and document the approval path in writing.",
    detail: "OUTPUT: FORMAT + WRITTEN OK",
  },
  {
    n: "03",
    title: "Placement file",
    body: "You get the facts your operator needs: address, contact, demand observations, recommended machine or format, incumbent-service status, access notes and route considerations. Clear next steps—not a raw lead list.",
    detail: "OUTPUT: OPERATOR-READY PLACEMENT FILE",
  },
];

export function ProcessC3() {
  return (
    <section id="c3" className="scroll-mt-28 border-b-2 border-silver/30 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-amber">C3 / WHAT WE DO</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
          From prospect list to operator-ready placement file
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
          <span className="text-red">NOTE:</span> we don&rsquo;t sell, install or service machines.
          We work for the operator&rsquo;s route—not as another host-facing vending supplier.
        </p>
      </div>
    </section>
  );
}
