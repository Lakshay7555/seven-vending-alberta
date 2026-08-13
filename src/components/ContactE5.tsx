import { useState, type FormEvent } from "react";
import { EMAIL, PHONE, PHONE_HREF } from "./site-data";

const FIELDS = [
  { name: "business", label: "Business name", type: "text", placeholder: "Northside Fabrication" },
  { name: "city", label: "City / town", type: "text", placeholder: "Leduc" },
  { name: "email", label: "Email", type: "email", placeholder: "you@business.ca" },
  { name: "people", label: "Approx. people on site", type: "number", placeholder: "35" },
] as const;

export function ContactE5() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="e5" className="scroll-mt-28 bg-navy">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1fr_1fr] md:py-24">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-amber">E5 / CONTACT</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
            Ask for a machine
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-silver">
            Fill out the slip or just call. We'll tell you straight whether your
            site makes sense for a machine and what we'd put in it.
          </p>
          <dl className="mt-10 border-t border-silver/30 pt-6 font-mono text-sm">
            <div className="flex gap-4 py-1">
              <dt className="w-16 text-silver/70">PHONE</dt>
              <dd>
                <a href={PHONE_HREF} className="text-amber hover:underline">
                  {PHONE}
                </a>
              </dd>
            </div>
            <div className="flex gap-4 py-1">
              <dt className="w-16 text-silver/70">EMAIL</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className="text-amber hover:underline">
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-2 border-silver bg-paper p-6 md:p-8">
          <p className="border-b-2 border-dashed border-ink/30 pb-3 font-mono text-xs tracking-[0.2em] text-ink/70">
            ORDER SLIP &mdash; NO. 0007
          </p>
          {sent ? (
            <p className="py-10 font-mono text-sm leading-relaxed text-ink">
              <span className="text-amber">&#9632;</span> REQUEST LOGGED. We'll call
              you within one business day at the number on file.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {FIELDS.map((f) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="block font-mono text-xs tracking-wide text-ink/70 uppercase"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    min={f.type === "number" ? 1 : undefined}
                    placeholder={f.placeholder}
                    className="mt-2 w-full border border-ink/40 bg-paper px-3 py-2 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full border-2 border-ink bg-amber px-6 py-3 font-display text-sm tracking-[0.12em] text-navy uppercase transition-colors hover:bg-navy hover:text-amber active:translate-y-px"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}