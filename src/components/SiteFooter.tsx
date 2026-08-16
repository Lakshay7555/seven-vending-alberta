import { EMAIL, PHONE, PHONE_HREF } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-silver/30 bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <a
            href="#a1"
            aria-label="Seven Vending Alberta home"
            className="inline-flex items-center"
          >
            <img
              src="/brand/seven-vending-alberta-logo-full.webp"
              alt="Seven Vending Alberta"
              className="h-20 w-auto md:h-24"
            />
          </a>
          <p className="mt-4 max-w-sm text-sm text-silver">
            Field-verified, route-specific placement acquisition for vending operators across
            Edmonton and the surrounding corridor.
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
