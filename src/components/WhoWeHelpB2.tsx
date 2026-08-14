const GROUPS = [
  {
    tag: "NEW OPERATORS",
    title: "For new operators",
    body: "You bought a machine, or you're about to, and you have no idea who to call or what a good spot even looks like. We map out your first locations \u2014 real addresses, real foot traffic, a named contact who has already said yes. You start earning instead of cold-calling strip malls.",
    points: ["First 1\u20133 placements", "Owner intro handled", "No prior contacts needed"],
  },
  {
    tag: "ESTABLISHED",
    title: "For established operators",
    body: "You're expanding across Alberta and your route is already full. We're the boots on the ground: we scout, walk the sites, check permission and power, and hand you a vetted shortlist. You stock and maintain \u2014 the part that actually pays.",
    points: ["Route-adjacent scouting", "Vetted before you drive", "Volume placements"],
  },
];

export function WhoWeHelpB2() {
  return (
    <section id="b2" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-ink/60">B2 / WHO WE HELP</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
          We find the spots. You run the machines.
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