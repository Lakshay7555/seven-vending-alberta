const STEPS = [
  {
    n: "01",
    title: "Tell us about your space",
    body: "How many people are on site, when they're there, and who they are—staff, residents, members or visitors. A short call or form is enough. We'll also look at where a machine could physically go.",
    detail: "TAKES: ABOUT 10 MINUTES",
  },
  {
    n: "02",
    title: "We match the right machine",
    body: "We recommend the machine type and product mix that suits your people, and explain why. You see what's going in before anything is delivered, and you can change it.",
    detail: "YOU GET: A CLEAR RECOMMENDATION",
  },
  {
    n: "03",
    title: "You approve and run a trial",
    body: "Once you say yes, the machine is delivered, installed and stocked at no cost. You run it as a trial, we adjust the products to what actually sells, and if it isn't right we take it away.",
    detail: "YOU RISK: NOTHING",
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
          <span className="text-red">NOTE:</span> nothing is delivered until you approve it, and
          nothing stays if the trial doesn&rsquo;t work for your building.
        </p>
      </div>
    </section>
  );
}
