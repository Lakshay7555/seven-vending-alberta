const GROUPS = [
  {
    tag: "BEST FIT",
    title: "The right machine, not the leftover one",
    body: "Snack, drinks, coffee or specialty—we document who is actually in your building and what they need, then pass that location brief to an operator whose machine mix fits. If vending isn't a good fit for your space, we'll tell you that too.",
    points: [
      "Location brief matched to your people",
      "Operator fit by machine type",
      "Honest advice if it won't work",
    ],
  },
  {
    tag: "NO COST",
    title: "Free location matching",
    body: "There is no charge to submit your location need through Seven Vending Alberta. We connect you with a suitable vending operator; any equipment, service and product arrangements are handled directly with that operator.",
    points: [
      "No charge to submit your need",
      "Direct operator conversation",
      "Clear handoff of responsibilities",
    ],
  },
];

export function WhoWeHelpB2() {
  return (
    <section id="b2" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-ink/60">WHY LOCATIONS CHOOSE US</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
          What your building gets out of it.
        </h2>
        <div className="mt-12 grid gap-px border-2 border-ink/20 bg-ink/20 md:grid-cols-2">
          {GROUPS.map((g) => (
            <article key={g.tag} className="bg-paper p-7 md:p-10">
              <p className="font-mono text-xs tracking-[0.2em] text-amber">{g.tag}</p>
              <h3 className="mt-3 font-display text-xl tracking-tight text-ink uppercase">
                {g.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-ink/80">{g.body}</p>
              <ul className="mt-6 border-t border-ink/20 pt-4 font-mono text-xs text-ink/70">
                {g.points.map((p) => (
                  <li key={p} className="py-1">
                    <span className="text-amber">&#9632;</span> {p}
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
