const GROUPS = [
  {
    tag: "BEST FIT",
    title: "The right machine, not the leftover one",
    body: "Snack, drinks, coffee or specialty—we start with who is actually in your building and what they buy, then recommend the machine type that suits it. If vending isn't a good fit for your space, we'll tell you that too.",
    points: ["Matched to your people", "Product mix you approve", "Honest advice if it won't work"],
  },
  {
    tag: "NO COST",
    title: "Nothing to pay, ever",
    body: "You don't buy or lease the machine, and you don't pay for delivery, installation, stocking or repairs. The machine arrives ready to use and stays maintained at no charge to you.",
    points: ["Zero upfront cost", "No service or repair bills", "Restocking handled for you"],
  },
  {
    tag: "REVENUE SHARE",
    title: "You earn only when it sells",
    body: "You receive a share of the sales. There are no minimums, no monthly fees and nothing owing in a slow month—if the machine doesn't sell, it costs you nothing.",
    points: ["Share of every sale", "No minimums or fees", "Clear, simple statements"],
  },
  {
    tag: "TRIAL",
    title: "Try it before you commit",
    body: "Start with a trial period. We watch what sells, adjust the products, and if it isn't working for your building we remove the machine—no cost, no argument, no paperwork trail.",
    points: ["Zero-risk trial", "Product mix tuned to results", "Free removal if it's not right"],
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
