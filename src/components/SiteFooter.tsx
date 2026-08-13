import { EMAIL, PHONE, PHONE_HREF } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-silver/30 bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.14em] text-paper uppercase">
            Seven Vending <span className="text-amber">Alberta</span>
          </p>
          <p className="mt-3 text-sm text-silver">
            Free machine placement and full service across Alberta.
          </p>
        </div>
        <div className="font-mono text-xs text-silver">
          <p>
            <a href={PHONE_HREF} className="text-amber hover:underline">
              {PHONE}
            </a>{" "}
            &middot;{" "}
            <a href={`mailto:${EMAIL}`} className="text-amber hover:underline">
              {EMAIL}
            </a>
          </p>
          <p className="mt-2 text-silver/70">
            &copy; {new Date().getFullYear()} Seven Vending Alberta
          </p>
        </div>
      </div>
    </footer>
  );
}