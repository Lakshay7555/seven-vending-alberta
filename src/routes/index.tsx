import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroA1 } from "@/components/HeroA1";
import { WhoWeHelpB2 } from "@/components/WhoWeHelpB2";
import { ProcessC3 } from "@/components/ProcessC3";
import { ServiceAreaD4 } from "@/components/ServiceAreaD4";
import { ContactE5 } from "@/components/ContactE5";
import { FAQ } from "@/components/FAQ";
import { SiteFooter } from "@/components/SiteFooter";
import { SECTIONS } from "@/components/site-data";

const TITLE = "Seven Vending Alberta — Vending Machine Location Finding";
const DESC =
  "We find and secure high-traffic, approved vending machine locations across Alberta for operators. Scouting, site assessment and a placement-ready location report.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<string>("a1");

  function select(id: string) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader active={active} onSelect={select} />
      <main>
        <HeroA1 onSelect={select} />
        <WhoWeHelpB2 />
        <ProcessC3 />
        <ServiceAreaD4 />
        <FAQ />
        <ContactE5 />
      </main>
      <SiteFooter />
    </div>
  );
}
