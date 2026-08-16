import { useState, type FormEvent } from "react";
import { EMAIL, PHONE, PHONE_HREF } from "./site-data";

const MACHINE_FORMATS = [
  "Snack machines",
  "Cold beverage machines",
  "Coffee / hot beverage machines",
  "Combo machines",
  "Water coolers / bottle dispensers",
  "Healthy or specialty machines",
  "Micro-markets / smart lockers",
];

export function ContactE5() {
  const [formats, setFormats] = useState<string[]>([]);
  const [emailPrepared, setEmailPrepared] = useState(false);
  const [formatError, setFormatError] = useState(false);

  function toggleFormat(format: string) {
    setFormats((current) =>
      current.includes(format) ? current.filter((item) => item !== format) : [...current, format],
    );
    setFormatError(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formats.length === 0) {
      setFormatError(true);
      return;
    }

    setEmailPrepared(true);
  }

  return (
    <section id="e5" className="scroll-mt-28 bg-navy">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1fr_1.15fr] md:py-24">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-amber">FOR VENDING OPERATORS</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
            Receive location opportunities that fit your route.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-silver">
            Seven Vending Alberta screens building needs and connects suitable requests with
            independent vending operators. Share where you operate, what formats you support and
            your current capacity so we can identify location opportunities that may fit your
            operation.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-silver/80">
            We do not own, supply or service machines. We create a clear handoff between the
            property contact and the operator best positioned to assess the opportunity.
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
            OPERATOR INTEREST &mdash; ROUTE PROFILE
          </p>

          {emailPrepared ? (
            <div className="py-10 font-mono text-sm leading-relaxed text-ink">
              <span className="text-amber">&#9632;</span> RESPONSE RECEIVED. We will get back to you
              in 1–3 business days.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Operating company
                </span>
                <input
                  name="company"
                  required
                  placeholder="Prairie Route Vending"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Primary contact
                </span>
                <input
                  name="contactName"
                  required
                  placeholder="Jordan Lee"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Role / title
                </span>
                <input
                  name="role"
                  required
                  placeholder="Route manager"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Work email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@operator.ca"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="(780) 555-0123"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Primary service area
                </span>
                <input
                  name="serviceArea"
                  required
                  placeholder="Edmonton and surrounding area"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <label className="block">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Secondary service area
                </span>
                <input
                  name="secondaryArea"
                  placeholder="Optional"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>

              <fieldset className="sm:col-span-2">
                <legend className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Machine formats you operate
                </legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {MACHINE_FORMATS.map((format) => {
                    const checked = formats.includes(format);
                    return (
                      <label
                        key={format}
                        className={`flex cursor-pointer items-center gap-3 border px-3 py-3 text-sm ${checked ? "border-ink bg-amber/15" : "border-ink/30 bg-paper"}`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleFormat(format)}
                          className="h-4 w-4 accent-amber"
                        />
                        <span>{format}</span>
                      </label>
                    );
                  })}
                </div>
                {formatError && (
                  <p className="mt-2 font-mono text-xs text-red">
                    SELECT AT LEAST ONE MACHINE FORMAT.
                  </p>
                )}
              </fieldset>

              <label className="block sm:col-span-2">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Current route / onboarding capacity
                </span>
                <select
                  name="capacity"
                  required
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none focus:border-amber focus:ring-2 focus:ring-amber/40"
                >
                  <option value="">Select current capacity</option>
                  <option>Ready to review new locations now</option>
                  <option>Capacity for one to two additional locations</option>
                  <option>Capacity for several additional locations</option>
                  <option>Interested in future opportunities only</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Preferred location types (optional)
                </span>
                <input
                  name="locationTypes"
                  placeholder="For example: offices, warehouses, gyms, schools"
                  className="mt-2 w-full border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="font-mono text-xs tracking-wide text-ink/70 uppercase">
                  Notes for location matching (optional)
                </span>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Share route constraints, service requirements, minimum traffic thresholds or preferred building types."
                  className="mt-2 w-full resize-y border border-ink/40 bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-ink/35 focus:border-amber focus:ring-2 focus:ring-amber/40"
                />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 w-full border-2 border-ink bg-amber px-6 py-4 font-display text-sm tracking-[0.12em] text-navy uppercase transition-colors hover:bg-navy hover:text-amber active:translate-y-px"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
