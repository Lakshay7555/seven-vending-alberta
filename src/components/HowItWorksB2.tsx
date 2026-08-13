const STEPS = [
  {
    n: "01",
    title: "You ask",
    body: "Tell us the address, how many people are on site, and what they actually eat. Takes five minutes on the phone.",
  },
  {
    n: "02",
    title: "We install free",
    body: "We deliver and set up the machine at no cost to you. No purchase, no lease, no monthly fee. You supply a standard outlet.",
  },
  {
    n: "03",
    title: "We stock and maintain",
    body: "We restock on a route schedule, handle refunds and repairs, and swap products your crew doesn't buy.",
  },
];

export function HowItWorksB2() {
  return (
    <section id="b2" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-ink/60">B2 / HOW IT WORKS</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
          Three steps, then you forget about it
        </h2>
        <ol className="mt-12 grid gap-px border-2 border-ink/20 bg-ink/20 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-paper p-7 md:p-9">
              <div className="flex items-baseline gap-4 border-b border-ink/20 pb-4">
                <span className="font-mono text-3xl text-amber">{s.n}</span>
                <span className="font-display text-lg tracking-tight text-ink uppercase">
                  {s.title}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink/80">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}