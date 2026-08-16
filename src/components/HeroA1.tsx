import { MachineSvg } from "./MachineSvg";

export function HeroA1({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section id="a1" className="scroll-mt-28 border-b-2 border-silver/30 bg-navy">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.25fr_1fr] md:items-center md:py-24">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-amber">
            ALBERTA / FREE VENDING FOR YOUR BUILDING
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper uppercase md:text-6xl">
            Most operators bring what they own. We help you choose what actually works.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver md:text-lg">
            Helping Alberta property owners, facility managers, and machine operators find the
            perfect vending match—completely free for locations.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onSelect("e5")}
              className="border-2 border-amber bg-amber px-7 py-4 font-display text-sm tracking-[0.12em] text-navy uppercase transition-colors hover:bg-navy hover:text-amber active:translate-y-px"
            >
              See What Fits My Space
            </button>
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <MachineSvg />
        </div>
      </div>
    </section>
  );
}
