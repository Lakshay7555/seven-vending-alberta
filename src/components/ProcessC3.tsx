const STEPS = [
  {
    n: "01",
    title: "Tell us about your space",
    body: "How many people are on site, when they're there, and who they are—staff, residents, members or visitors. A short call or form is enough. We'll also look at where a machine could physically go.",
    detail: "TAKES: ABOUT 10 MINUTES",
  },
  {
    n: "02",
    title: "We match the right operator",
    body: "We turn your location need into a clear brief: site type, daily traffic, amenities already present and the format likely to fit. Then we pass it to an independent vending operator whose offering matches the need.",
    detail: "YOU GET: A CLEAR OPERATOR MATCH",
  },
  {
    n: "03",
    title: "You work with the operator",
    body: "The matched operator contacts you to discuss equipment, product mix, service and any site requirements. Seven Vending does not supply, install, stock or repair machines.",
    detail: "OPERATOR HANDLES EQUIPMENT & SERVICE",
  },
];

export function ProcessC3() {
  return (
    <section id="c3" className="scroll-mt-28 border-b-2 border-silver/30 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-amber">HOW IT WORKS</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
          Three steps, and you can stop at any of them
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
          <span className="text-red">NOTE:</span> Seven Vending Alberta only matches location needs
          with operators; the matched operator handles all equipment and service decisions.
        </p>
      </div>
    </section>
  );
}
