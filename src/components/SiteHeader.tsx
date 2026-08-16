import { KeypadNav } from "./KeypadNav";
import { PHONE, PHONE_HREF } from "./site-data";

export function SiteHeader({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-silver/30 bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-6 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#a1"
            aria-label="Seven Vending Alberta home"
            className="inline-flex shrink-0 items-center"
          >
            <img
              src="/brand/seven-vending-alberta-logo.png"
              alt="Seven Vending Alberta"
              className="w-48 h-auto md:w-56"
            />
          </a>
          <a href={PHONE_HREF} className="font-mono text-xs text-amber md:hidden">
            {PHONE}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <KeypadNav active={active} onSelect={onSelect} />
          <a
            href={PHONE_HREF}
            className="hidden font-mono text-xs tracking-wide text-amber md:block"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
