const GROUPS = [
  {
    tag: "NEW OPERATORS",
    title: "For new operators",
    body: "You have a machine—or a plan for one—but no reliable route yet. We start with the machine type, service radius and target customer, then scout for places with repeat demand, workable access and a decision-maker path. You get an approval-ready starting point instead of a generic directory list.",
    points: ["First 1–3 placements", "Machine and route brief", "Written approval path"],
  },
  {
    tag: "ESTABLISHED",
    title: "For established operators",
    body: "You need expansion that fits the route you already run. We scout route-density clusters, validate shift patterns and food access, and check whether a host already has vending, a micro-market or a restrictive service arrangement. You receive a shortlist built for your machines—not a host list to chase blind.",
    points: ["Route-adjacent scouting", "Incumbent-format check", "Field-verified placement files"],
  },
];

export function WhoWeHelpB2() {
  return (
    <section id="b2" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-ink/60">B2 / WHO WE HELP</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
          Your field team for route-ready placements.
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
