import { useState } from "react";

const FAQS = [
  {
    q: "What exactly is the scouting process?",
    a: "Three steps. We build a target list from traffic and density data, drive and walk the shortlist on site, then get written sign-off from whoever controls each location. You receive one placement-ready report per approved site \u2014 address, contact, traffic estimate, recommended machine type, expected commission and access notes.",
  },
  {
    q: "What approval checks do you run?",
    a: "On site we confirm building ownership or leasing authority, check that the outlet, wall space and delivery route work, and verify any insurance, accessibility or vendor-registration rules the landlord requires. We do not move a location into your report until the sign-off party has agreed in writing.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "A single-location targeted search runs roughly 5\u201310 business days from kickoff to delivered report. A multi-site route (5+ spots across a corridor like Edmonton\u2013Calgary) usually runs 2\u20134 weeks. Timeline depends on how picky your spec is and how fast landlords respond.",
  },
  {
    q: "What information do you need from me before you start?",
    a: "Five things: (1) the cities or zones you want covered, (2) the machine types you run \u2014 snacks, drinks, micro-market or combo, (3) your target site type \u2014 warehouse, office, gym, residential lobby, (4) your ideal traffic floor and any commission split you can offer, and (5) how many spots you want in this batch.",
  },
  {
    q: "Do you guarantee a location will perform?",
    a: "No. We find and secure locations and hand you honest traffic and access data. Sales performance depends on your product mix, pricing and restock cadence \u2014 that part is yours. We tell you up front when a site looks weak so you don't waste a machine on it.",
  },
  {
    q: "What if a location falls through after the report?",
    a: "If a landlord backs out within 30 days of delivery for reasons outside your control, we re-scout a replacement of the same type in the same zone at no extra charge. After 30 days the spot is yours to manage.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-ink/60">FAQ / OPERATOR BRIEF</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
          Questions before you order
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/80">
          The short version of how a scouting run works, what we check, how long
          it takes, and what we need from you on day one.
        </p>
        <ul className="mt-10 border-2 border-ink/20">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-ink/15 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-amber/10"
                >
                  <span className="mt-0.5 font-mono text-sm text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base tracking-tight text-ink uppercase">
                    {f.q}
                  </span>
                  <span
                    className={`mt-0.5 font-mono text-lg text-ink transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="border-t border-ink/15 bg-navy px-5 py-5 pl-12 text-sm leading-relaxed text-silver">
                    {f.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
