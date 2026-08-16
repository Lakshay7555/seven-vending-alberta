import { SECTIONS } from "./site-data";

export function KeypadNav({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav
      aria-label="Section keypad"
      className="-mx-4 flex gap-px overflow-x-auto px-4 md:mx-0 md:px-0"
    >
      {SECTIONS.map((s) => (
        <button
          key={s.code}
          type="button"
          onClick={() => onSelect(s.id)}
          aria-current={active === s.id ? "true" : undefined}
          title={s.label}
          className={`keypad-btn shrink-0 px-3 py-2 text-xs tracking-[0.18em] ${
            active === s.id ? "keypad-btn-lit" : ""
          }`}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}