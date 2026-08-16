import { useState } from "react";

const FAQS = [
  {
    q: "What does it cost us?",
    a: "Nothing. You don't buy or lease the machine, and you don't pay for delivery, installation, stocking, power-efficient equipment upgrades or repairs.",
  },
  {
    q: "How do you decide which machine type we get?",
    a: "We look at how many people are on site, when they're there, who they are and what's nearby. A warehouse on rotating shifts usually needs drinks and filling snacks; an office often does better with coffee; a gym leans toward cold drinks. We recommend the type that fits, and we explain the reasoning.",
  },
  {
    q: "What if vending isn't a good fit for our building?",
    a: "We'll say so. If the foot traffic isn't there or the space doesn't work, putting a machine in only creates a half-empty box in your lobby. We'd rather tell you up front than install something that disappoints everyone.",
  },
  {
    q: "Who keeps it stocked and fixes it?",
    a: "We do. Restocking, cleaning, cash and card handling, and any repairs are all handled for you. If something goes wrong, you call us—not a service company, and not your maintenance staff.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Roughly how many people are on site and when, what kind of people they are (staff, residents, members, visitors), where a machine could go, whether there's a power outlet nearby, and who signs off. That's usually a ten-minute conversation.",
  },
  {
    q: "How long until the machine is in?",
    a: "Usually one to three weeks from your approval, depending on the machine type and how quickly access can be arranged for delivery.",
  },
  {
    q: "Can we choose or change the products?",
    a: "Yes. You see the planned product list before delivery and can add, remove or swap items at any time—healthier options, allergy considerations, local favourites or price points that suit your people.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-28 border-b-2 border-ink/15 bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="font-mono text-xs tracking-[0.3em] text-ink/60">FAQ / STRAIGHT ANSWERS</p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-ink uppercase md:text-4xl">
          Questions before you say yes
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/80">
          Cost, machine choice and who looks after the machine once it&rsquo;s in.
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
