import { useMemo, useState } from "react";

type LocationType =
  "office" | "industrial" | "gym" | "retail" | "school" | "hospitality" | "institution" | "mixed";

type FootTraffic = "low" | "medium" | "high" | "veryHigh";
type ExistingOffer = "none" | "coffee" | "water" | "snack" | "beverage" | "combo" | "microMarket";

type MachineKey =
  | "snack"
  | "beverage"
  | "coffee"
  | "combo"
  | "water"
  | "healthy"
  | "frozen"
  | "specialtyBeverage"
  | "microMarket";

type Machine = {
  title: string;
  category: string;
  description: string;
  bestFor: string;
  routeNote: string;
};

const LOCATIONS: { value: LocationType; label: string }[] = [
  { value: "office", label: "Office / corporate break room" },
  { value: "industrial", label: "Factory, warehouse or shift-work site" },
  { value: "gym", label: "Gym, wellness centre or fitness studio" },
  { value: "retail", label: "Retail store, arena or recreation venue" },
  { value: "school", label: "School or student-focused site" },
  { value: "hospitality", label: "Hotel or hospitality property" },
  { value: "institution", label: "Hospital, university or large institution" },
  { value: "mixed", label: "Mixed-use commercial location" },
];

const TRAFFIC: { value: FootTraffic; label: string; detail: string }[] = [
  { value: "low", label: "Under 50 people / day", detail: "Lower daily traffic" },
  { value: "medium", label: "50–149 people / day", detail: "Steady daily traffic" },
  { value: "high", label: "150–299 people / day", detail: "High daily traffic" },
  { value: "veryHigh", label: "300+ people / day", detail: "Very high daily traffic" },
];

const EXISTING_OFFERS: { value: ExistingOffer; label: string }[] = [
  { value: "none", label: "Nothing currently in place" },
  { value: "coffee", label: "Coffee station or hot beverage service" },
  { value: "water", label: "Water cooler or bottle dispenser" },
  { value: "snack", label: "Snack machine" },
  { value: "beverage", label: "Cold beverage machine" },
  { value: "combo", label: "Combo snack + beverage machine" },
  { value: "microMarket", label: "Micro-market, café or full pantry" },
];

const MACHINES: Record<MachineKey, Machine> = {
  snack: {
    title: "Snack machine",
    category: "Primary product category",
    description: "Candy, chips, cookies, crackers and everyday snack choices.",
    bestFor: "Offices, factories, schools and warehouses.",
    routeNote:
      "A dependable base format when a food-access gap is clear and a beverage option is already covered.",
  },
  beverage: {
    title: "Cold beverage machine",
    category: "Primary product category",
    description: "Soda, energy drinks, water and juice for frequent, quick-turn purchases.",
    bestFor: "Gyms, warehouses, retail stores and recreation sites.",
    routeNote:
      "Often suits high-volume settings; confirm refill frequency and delivery access before placement.",
  },
  coffee: {
    title: "Coffee machine",
    category: "Primary product category",
    description: "Fresh brewed, instant or espresso-based hot beverages.",
    bestFor: "Offices, hotels, corporate locations and break rooms.",
    routeNote:
      "Best where staff or visitors have regular dwell time and no comparable coffee service is already supplied.",
  },
  combo: {
    title: "Combo machine",
    category: "Primary product category",
    description: "Snacks and cold beverages in one compact unit.",
    bestFor: "Mixed-use spaces and offices with solid daily traffic.",
    routeNote:
      "A practical first-format choice when demand supports variety but the site does not justify multiple machines.",
  },
  water: {
    title: "Water cooler + bottle dispenser",
    category: "Primary product category",
    description: "Purified drinking water or bottled-water refill service.",
    bestFor: "Offices, gyms and wellness-oriented locations.",
    routeNote:
      "Confirm delivery or plumbing requirements and whether the host prefers a recurring bottle-exchange model.",
  },
  healthy: {
    title: "Healthy snack machine",
    category: "Specialty / niche machine",
    description: "Nuts, protein bars, organic snacks and fresh-focused choices.",
    bestFor: "Gyms, wellness centres and health-conscious offices.",
    routeNote:
      "Premium pricing can work when the location has clear wellness demand and the product mix is maintained consistently.",
  },
  frozen: {
    title: "Frozen treat machine",
    category: "Specialty / niche machine",
    description: "Ice cream, popsicles or frozen-yogurt products.",
    bestFor: "Retail, entertainment venues and high-traffic seasonal locations.",
    routeNote:
      "Confirm seasonal demand, electrical capacity and the operator’s freezer-service capability before recommending this format.",
  },
  specialtyBeverage: {
    title: "Specialty beverage machine",
    category: "Specialty / niche machine",
    description: "Smoothies, cold brew coffee or fresh-juice focused formats.",
    bestFor: "Gyms, wellness centres and health-focused locations.",
    routeNote:
      "Higher operating complexity makes this strongest where an operator can support frequent restocking and sanitation needs.",
  },
  microMarket: {
    title: "Micro-market / smart locker setup",
    category: "Specialty / niche machine",
    description: "Refrigerated, multi-SKU self-service with cashless or app-based ordering.",
    bestFor: "Large corporate offices, hospitals and universities.",
    routeNote:
      "Use only after validating population, operating hours, cashless adoption, security and the host’s willingness to support a larger footprint.",
  },
};

const LOCATION_SCORES: Record<LocationType, Partial<Record<MachineKey, number>>> = {
  office: { coffee: 5, combo: 4, water: 3, snack: 2, beverage: 1 },
  industrial: { beverage: 5, combo: 4, snack: 3, coffee: 1 },
  gym: { healthy: 6, specialtyBeverage: 5, beverage: 4, water: 3, snack: 1 },
  retail: { beverage: 5, frozen: 4, snack: 4, combo: 2 },
  school: { snack: 5, beverage: 4, healthy: 3, combo: 2 },
  hospitality: { coffee: 6, beverage: 4, combo: 3, water: 2 },
  institution: { microMarket: 6, coffee: 4, healthy: 3, beverage: 3, combo: 2 },
  mixed: { combo: 5, snack: 3, beverage: 3, coffee: 2, healthy: 1 },
};

const TRAFFIC_SCORES: Record<FootTraffic, Partial<Record<MachineKey, number>>> = {
  low: { combo: 3, coffee: 1, snack: 1 },
  medium: { combo: 2, snack: 2, beverage: 2, coffee: 2, healthy: 1 },
  high: { beverage: 3, combo: 3, snack: 2, coffee: 2, frozen: 1, microMarket: 1 },
  veryHigh: { microMarket: 5, beverage: 4, combo: 3, snack: 3, frozen: 3, coffee: 2 },
};

const EXISTING_SCORES: Record<ExistingOffer, Partial<Record<MachineKey, number>>> = {
  none: {},
  coffee: { coffee: -7, combo: 2, snack: 2, beverage: 2, water: 1 },
  water: { water: -7, snack: 2, coffee: 2, combo: 1, beverage: 1 },
  snack: { snack: -7, beverage: 3, coffee: 2, water: 1, specialtyBeverage: 1 },
  beverage: { beverage: -7, snack: 3, coffee: 2, healthy: 1, water: 1 },
  combo: { combo: -8, healthy: 3, specialtyBeverage: 2, coffee: 2, water: 1 },
  microMarket: { microMarket: -9, coffee: 2, water: 2, healthy: 1 },
};

function recommendMachine(location: LocationType, traffic: FootTraffic, existing: ExistingOffer) {
  const scores = Object.fromEntries(
    (Object.keys(MACHINES) as MachineKey[]).map((machine) => [machine, 0]),
  ) as Record<MachineKey, number>;

  for (const [machine, score] of Object.entries(LOCATION_SCORES[location])) {
    scores[machine as MachineKey] += score ?? 0;
  }
  for (const [machine, score] of Object.entries(TRAFFIC_SCORES[traffic])) {
    scores[machine as MachineKey] += score ?? 0;
  }
  for (const [machine, score] of Object.entries(EXISTING_SCORES[existing])) {
    scores[machine as MachineKey] += score ?? 0;
  }

  const ranked = (Object.keys(MACHINES) as MachineKey[])
    .sort((a, b) => scores[b] - scores[a])
    .filter((machine) => scores[machine] > 0);

  return {
    primary: ranked[0] ?? "combo",
    secondary: ranked.find((machine) => machine !== ranked[0]) ?? "snack",
  };
}

export function MachineFitF4() {
  const [location, setLocation] = useState<LocationType>("office");
  const [traffic, setTraffic] = useState<FootTraffic>("medium");
  const [existing, setExisting] = useState<ExistingOffer>("none");
  const [submitted, setSubmitted] = useState(false);

  const recommendation = useMemo(
    () => recommendMachine(location, traffic, existing),
    [existing, location, traffic],
  );
  const selectedLocation = LOCATIONS.find((option) => option.value === location)?.label;
  const selectedTraffic = TRAFFIC.find((option) => option.value === traffic)?.detail;

  return (
    <section id="f4" className="scroll-mt-28 border-b-2 border-ink/15 bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-paper/60">F4 / MACHINE FIT</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl tracking-tight uppercase md:text-4xl">
              Find the format that fits the location.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/80">
              Use the site conditions to identify a sensible starting format before your location
              need is passed to an independent vending operator. The tool weighs location type,
              expected daily traffic and what is already provided in the building so you can avoid
              duplicating an existing amenity.
            </p>
            <p className="mt-10 font-mono text-xs tracking-[0.2em] text-amber uppercase">
              What this screens for
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-paper/80 sm:grid-cols-2">
              <li>
                <span className="text-amber">&#9632;</span> Site and customer fit
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Daily traffic band
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Existing host amenities
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Format complexity
              </li>
            </ul>
          </div>

          <div className="border-2 border-paper/30 bg-paper p-5 text-ink md:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Location type
                </span>
                <select
                  value={location}
                  onChange={(event) => setLocation(event.target.value as LocationType)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {LOCATIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Expected daily foot traffic
                </span>
                <select
                  value={traffic}
                  onChange={(event) => setTraffic(event.target.value as FootTraffic)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {TRAFFIC.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Already present in the building
                </span>
                <select
                  value={existing}
                  onChange={(event) => setExisting(event.target.value as ExistingOffer)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {EXISTING_OFFERS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="mt-6 w-full bg-amber px-5 py-4 font-display text-sm tracking-[0.13em] text-ink uppercase hover:bg-amber/85 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
            >
              Recommend a machine format
            </button>

            {submitted && (
              <div className="mt-6 border-t-2 border-ink/15 pt-6" aria-live="polite">
                <p className="font-mono text-xs tracking-[0.18em] text-ink/60 uppercase">
                  Recommendation for {selectedLocation} · {selectedTraffic}
                </p>
                <div className="mt-4 border-2 border-ink bg-navy p-5 text-paper">
                  <p className="font-mono text-xs tracking-[0.18em] text-amber uppercase">
                    Best starting format · {MACHINES[recommendation.primary].category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight uppercase">
                    {MACHINES[recommendation.primary].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/80">
                    {MACHINES[recommendation.primary].description}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/80">
                    <span className="font-mono text-xs tracking-[0.14em] text-amber uppercase">
                      Why it fits ·
                    </span>
                    {MACHINES[recommendation.primary].bestFor}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/80">
                    <span className="font-mono text-xs tracking-[0.14em] text-amber uppercase">
                      Route check ·
                    </span>
                    {MACHINES[recommendation.primary].routeNote}
                  </p>
                </div>

                <div className="mt-4 border-2 border-ink/20 p-4">
                  <p className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                    Also consider
                  </p>
                  <p className="mt-2 font-display text-lg tracking-tight uppercase text-ink">
                    {MACHINES[recommendation.secondary].title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {MACHINES[recommendation.secondary].description}
                  </p>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-ink/60">
                  This is a format-screening and operator-matching tool, not an equipment offer or
                  revenue guarantee. Seven Vending does not provide or maintain machines; the
                  matched operator confirms demand, site rules, equipment, service and approval
                  requirements.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
