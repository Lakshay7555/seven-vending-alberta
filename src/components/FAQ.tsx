import { useState } from "react";

const FAQS = [
  {
    q: "What makes a location operator-ready?",
    a: "It is more than an address. We document the demand signal, food-access context, machine or format fit, space and power, delivery access, the person who can approve the placement, and the route considerations for your operation. Every open item is clearly flagged before you decide whether to place a machine.",
  },
  {
    q: "How do you account for existing vending or smart-market providers?",
    a: "We ask whether the site already has vending, a micro-market, a pantry program or another hosted service, and whether the host identifies any restrictions or renewal timing. A site with an incumbent is not automatically a bad lead, but we do not present it as an open opportunity without recording the competitive situation.",
  },
  {
    q: "Why is Edmonton your primary market and Calgary selective?",
    a: "Edmonton is our first focus for industrial, warehouse, fabrication, logistics and shift-work clusters where route density can support repeat service. In Calgary, we selectively evaluate small and mid-bay workplaces and managed properties such as apartments, hotels, institutions and arenas. Each city requires a different location screen.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "A single-location targeted search runs roughly 5–10 business days from kickoff to delivered report. A multi-site route typically runs 2–4 weeks. Timing depends on your machine format, the decision-makers involved and how quickly the host responds.",
  },
  {
    q: "What information do you need from me before you start?",
    a: "Five things: (1) the cities or zones you want covered, (2) the machines or formats you run—snacks, drinks, combo, coffee or micro-market, (3) the site types you want, (4) your target demand floor and commission range, and (5) your service radius and desired number of placements.",
  },
  {
    q: "Do you guarantee a location will perform?",
    a: "No. We provide honest demand, access and approval information; we do not guarantee sales. Performance still depends on your product mix, pricing, machine uptime, restock cadence and route execution. We flag weak fit before you commit a machine.",
  },
  {
    q: "What if a location falls through after the report?",
    a: "If a landlord or authorized host backs out within 30 days of delivery for reasons outside your control, we re-scout a replacement of the same type in the same zone at no extra charge. After 30 days, the placement is yours to manage.",
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
          How we screen demand, fit, approval and competitive conditions before we hand a location
          to your route.
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
