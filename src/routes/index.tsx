import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroA1 } from "@/components/HeroA1";
import { HowItWorksB2 } from "@/components/HowItWorksB2";
import { OfferC3 } from "@/components/OfferC3";
import { ServiceAreaD4 } from "@/components/ServiceAreaD4";
import { ContactE5 } from "@/components/ContactE5";
import { SiteFooter } from "@/components/SiteFooter";
import { SECTIONS } from "@/components/site-data";

const TITLE = "Seven Vending Alberta — Free Vending Machines for Workplaces";
const DESC =
  "Free vending machine placement, stocking and service for offices, warehouses, gyms and apartments across Alberta. No cost, no lease.";

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
        <HowItWorksB2 />
        <OfferC3 />
        <ServiceAreaD4 />
        <ContactE5 />
      </main>
      <SiteFooter />
    </div>
  );
}
