import { useState } from "react";

const FAQS = [
  {
    q: "What does Seven Vending Alberta do?",
    a: "We collect the details of your location need—who is on site, traffic, location type and amenities already present—then pass that brief to an independent vending operator whose offering fits the space.",
  },
  {
    q: "Does Seven Vending provide or maintain vending machines?",
    a: "No. Seven Vending Alberta does not own, deliver, install, stock, service or repair vending machines. The independent operator matched to your location handles equipment and service discussions directly with you.",
  },
  {
    q: "What does it cost us to share a location need?",
    a: "There is no charge to submit your location need through Seven Vending Alberta. If an operator is a fit, that operator will discuss any equipment, product and service arrangement directly with you.",
  },
  {
    q: "How do you decide which operator to contact?",
    a: "We look at your site type, estimated daily traffic, who is on site and what is already available in the building. That helps us pass your request to an operator whose machine types and service model are appropriate for the location.",
  },
  {
    q: "What if vending isn't a good fit for our building?",
    a: "We'll say so. If the foot traffic, site rules or space do not support a realistic vending opportunity, we would rather tell you up front than pass a poor-fit request to an operator.",
  },
  {
    q: "Who keeps the machine stocked and fixes it?",
    a: "The operator that takes on the location handles stocking, cleaning, payment systems, service calls and repairs. Seven Vending Alberta is not the equipment or maintenance provider.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Roughly how many people are on site and when, what kind of people they are (staff, residents, members or visitors), what is already available, where a machine could go, whether there is a power outlet nearby and who signs off. That's usually a ten-minute conversation.",
  },
  {
    q: "When will an operator contact us?",
    a: "Timing depends on the location details and operator availability. We will pass a suitable location brief to an appropriate operator, who can then discuss next steps directly with you.",
  },
  {
    q: "Can we choose or change the products?",
    a: "Product options and changes are arranged directly with the operator responsible for the machine. Share your preferences in the location brief so the operator has useful context from the start.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-ink/60">FAQ / STRAIGHT ANSWERS</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
          Questions before you share a location need
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/80">
          How Seven Vending Alberta gathers your request and connects it with the right independent
          vending operator.
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
