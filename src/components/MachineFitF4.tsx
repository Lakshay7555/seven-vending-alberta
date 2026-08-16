import { useMemo, useState } from "react";

type LocationType =
  "office" | "industrial" | "gym" | "retail" | "school" | "hospitality" | "institution" | "mixed";
type FootTraffic = "low" | "medium" | "high" | "veryHigh";
type ExistingOffer = "none" | "coffee" | "water" | "snack" | "beverage" | "combo" | "microMarket";
type OperatingHours = "weekday" | "extended" | "aroundClock" | "seasonal";
type Audience =
  "officeStaff" | "shiftWorkers" | "activeWellness" | "students" | "visitors" | "residents";
type Utilities = "standard" | "waterLine" | "limitedPower" | "unknown";
type Access = "easy" | "managed" | "restricted";
type Payments = "cashless" | "mixed" | "cashFriendly";
type Space = "single" | "multiple" | "microMarket";

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

type ScoreMap = Partial<Record<MachineKey, number>>;
type RecommendationInputs = {
  location: LocationType;
  traffic: FootTraffic;
  existing: ExistingOffer;
  hours: OperatingHours;
  audience: Audience;
  utilities: Utilities;
  access: Access;
  payments: Payments;
  space: Space;
};

type SelectOption<T extends string> = {
  value: T;
  label: string;
  detail?: string;
};

const LOCATIONS: SelectOption<LocationType>[] = [
  { value: "office", label: "Office / corporate break room" },
  { value: "industrial", label: "Factory, warehouse or shift-work site" },
  { value: "gym", label: "Gym, wellness centre or fitness studio" },
  { value: "retail", label: "Retail store, arena or recreation venue" },
  { value: "school", label: "School or student-focused site" },
  { value: "hospitality", label: "Hotel or hospitality property" },
  { value: "institution", label: "Hospital, university or large institution" },
  { value: "mixed", label: "Mixed-use commercial location" },
];

const TRAFFIC: SelectOption<FootTraffic>[] = [
  { value: "low", label: "Under 50 people / day", detail: "Lower daily traffic" },
  { value: "medium", label: "50–149 people / day", detail: "Steady daily traffic" },
  { value: "high", label: "150–299 people / day", detail: "High daily traffic" },
  { value: "veryHigh", label: "300+ people / day", detail: "Very high daily traffic" },
];

const EXISTING_OFFERS: SelectOption<ExistingOffer>[] = [
  { value: "none", label: "Nothing currently in place" },
  { value: "coffee", label: "Coffee station or hot beverage service" },
  { value: "water", label: "Water cooler or bottle dispenser" },
  { value: "snack", label: "Snack machine" },
  { value: "beverage", label: "Cold beverage machine" },
  { value: "combo", label: "Combo snack + beverage machine" },
  { value: "microMarket", label: "Micro-market, café or full pantry" },
];

const OPERATING_HOURS: SelectOption<OperatingHours>[] = [
  { value: "weekday", label: "Weekdays / standard daytime" },
  { value: "extended", label: "Early, late or weekend coverage" },
  { value: "aroundClock", label: "24 / 7 or overnight shifts" },
  { value: "seasonal", label: "Seasonal or event-led traffic" },
];

const AUDIENCES: SelectOption<Audience>[] = [
  { value: "officeStaff", label: "Office staff / professional teams" },
  { value: "shiftWorkers", label: "Shift workers / production teams" },
  { value: "activeWellness", label: "Active, fitness or wellness audience" },
  { value: "students", label: "Students / younger audience" },
  { value: "visitors", label: "Guests, patients or passing visitors" },
  { value: "residents", label: "Residents / tenants / long-stay users" },
];

const UTILITIES: SelectOption<Utilities>[] = [
  { value: "standard", label: "Standard power available" },
  { value: "waterLine", label: "Power plus nearby water line" },
  { value: "limitedPower", label: "Limited power or utility constraints" },
  { value: "unknown", label: "Utilities still need to be confirmed" },
];

const ACCESS_OPTIONS: SelectOption<Access>[] = [
  { value: "easy", label: "Easy delivery and service access" },
  { value: "managed", label: "Managed access / booked loading area" },
  { value: "restricted", label: "Restricted, secure or complex access" },
];

const PAYMENT_OPTIONS: SelectOption<Payments>[] = [
  { value: "cashless", label: "Cashless-first audience" },
  { value: "mixed", label: "Mixed card, mobile and cash preference" },
  { value: "cashFriendly", label: "Cash remains important" },
];

const SPACE_OPTIONS: SelectOption<Space>[] = [
  { value: "single", label: "Room for one compact machine" },
  { value: "multiple", label: "Room for multiple machines" },
  { value: "microMarket", label: "Room for a larger micro-market area" },
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
      "Often suits high-volume settings; the operator should confirm refill frequency and delivery access.",
  },
  coffee: {
    title: "Coffee machine",
    category: "Primary product category",
    description: "Fresh brewed, instant or espresso-based hot beverages.",
    bestFor: "Offices, hotels, corporate locations and break rooms.",
    routeNote:
      "Best where staff or visitors have regular dwell time and no comparable coffee service is already available.",
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
      "The operator should confirm delivery or plumbing requirements and the preferred water-service arrangement.",
  },
  healthy: {
    title: "Healthy snack machine",
    category: "Specialty / niche machine",
    description: "Nuts, protein bars, organic snacks and fresh-focused choices.",
    bestFor: "Gyms, wellness centres and health-conscious offices.",
    routeNote:
      "Premium pricing can work when the location has clear wellness demand and the operator can support the product mix.",
  },
  frozen: {
    title: "Frozen treat machine",
    category: "Specialty / niche machine",
    description: "Ice cream, popsicles or frozen-yogurt products.",
    bestFor: "Retail, entertainment venues and high-traffic seasonal locations.",
    routeNote:
      "The operator should confirm seasonal demand, electrical capacity and freezer-service capability.",
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
      "Use only after the operator validates population, operating hours, cashless adoption, security and the host's available footprint.",
  },
};

const LOCATION_SCORES: Record<LocationType, ScoreMap> = {
  office: { coffee: 5, combo: 4, water: 3, snack: 2, beverage: 1 },
  industrial: { beverage: 5, combo: 4, snack: 3, coffee: 1 },
  gym: { healthy: 6, specialtyBeverage: 5, beverage: 4, water: 3, snack: 1 },
  retail: { beverage: 5, frozen: 4, snack: 4, combo: 2 },
  school: { snack: 5, beverage: 4, healthy: 3, combo: 2 },
  hospitality: { coffee: 6, beverage: 4, combo: 3, water: 2 },
  institution: { microMarket: 6, coffee: 4, healthy: 3, beverage: 3, combo: 2 },
  mixed: { combo: 5, snack: 3, beverage: 3, coffee: 2, healthy: 1 },
};

const TRAFFIC_SCORES: Record<FootTraffic, ScoreMap> = {
  low: { combo: 3, coffee: 1, snack: 1 },
  medium: { combo: 2, snack: 2, beverage: 2, coffee: 2, healthy: 1 },
  high: { beverage: 3, combo: 3, snack: 2, coffee: 2, frozen: 1, microMarket: 1 },
  veryHigh: { microMarket: 5, beverage: 4, combo: 3, snack: 3, frozen: 3, coffee: 2 },
};

const EXISTING_SCORES: Record<ExistingOffer, ScoreMap> = {
  none: {},
  coffee: { coffee: -7, combo: 2, snack: 2, beverage: 2, water: 1 },
  water: { water: -7, snack: 2, coffee: 2, combo: 1, beverage: 1 },
  snack: { snack: -7, beverage: 3, coffee: 2, water: 1, specialtyBeverage: 1 },
  beverage: { beverage: -7, snack: 3, coffee: 2, healthy: 1, water: 1 },
  combo: { combo: -8, healthy: 3, specialtyBeverage: 2, coffee: 2, water: 1 },
  microMarket: { microMarket: -9, coffee: 2, water: 2, healthy: 1 },
};

const HOURS_SCORES: Record<OperatingHours, ScoreMap> = {
  weekday: { coffee: 3, combo: 2, snack: 1, water: 1 },
  extended: { beverage: 3, combo: 3, snack: 2, coffee: 1 },
  aroundClock: { microMarket: 5, beverage: 4, combo: 3, snack: 2 },
  seasonal: { frozen: 5, beverage: 3, snack: 2 },
};

const AUDIENCE_SCORES: Record<Audience, ScoreMap> = {
  officeStaff: { coffee: 5, combo: 3, water: 2 },
  shiftWorkers: { beverage: 4, combo: 4, snack: 3, coffee: 1 },
  activeWellness: { healthy: 5, specialtyBeverage: 5, beverage: 3, water: 3 },
  students: { snack: 4, beverage: 4, healthy: 2, combo: 2 },
  visitors: { coffee: 3, beverage: 3, combo: 2, snack: 2 },
  residents: { combo: 4, snack: 3, beverage: 3, water: 2, microMarket: 1 },
};

const UTILITY_SCORES: Record<Utilities, ScoreMap> = {
  standard: {},
  waterLine: { coffee: 3, water: 4, specialtyBeverage: 1 },
  limitedPower: {
    snack: 2,
    beverage: 1,
    combo: 1,
    frozen: -5,
    microMarket: -5,
    specialtyBeverage: -3,
    coffee: -1,
  },
  unknown: { snack: 1, beverage: 1 },
};

const ACCESS_SCORES: Record<Access, ScoreMap> = {
  easy: { microMarket: 2, frozen: 1 },
  managed: { combo: 1, snack: 1, beverage: 1 },
  restricted: { microMarket: -5, frozen: -2, specialtyBeverage: -1 },
};

const PAYMENT_SCORES: Record<Payments, ScoreMap> = {
  cashless: { microMarket: 5, specialtyBeverage: 1 },
  mixed: { combo: 1, snack: 1, beverage: 1 },
  cashFriendly: { snack: 2, beverage: 1, combo: 1 },
};

const SPACE_SCORES: Record<Space, ScoreMap> = {
  single: { combo: 3, snack: 2, beverage: 2, coffee: 1, water: 1 },
  multiple: { microMarket: 4, beverage: 2, snack: 2, coffee: 2 },
  microMarket: { microMarket: 7, beverage: 2, healthy: 1 },
};

function addScores(scores: Record<MachineKey, number>, factors: ScoreMap) {
  for (const [machine, score] of Object.entries(factors)) {
    scores[machine as MachineKey] += score ?? 0;
  }
}

function recommendMachine(inputs: RecommendationInputs) {
  const scores = Object.fromEntries(
    (Object.keys(MACHINES) as MachineKey[]).map((machine) => [machine, 0]),
  ) as Record<MachineKey, number>;

  addScores(scores, LOCATION_SCORES[inputs.location]);
  addScores(scores, TRAFFIC_SCORES[inputs.traffic]);
  addScores(scores, EXISTING_SCORES[inputs.existing]);
  addScores(scores, HOURS_SCORES[inputs.hours]);
  addScores(scores, AUDIENCE_SCORES[inputs.audience]);
  addScores(scores, UTILITY_SCORES[inputs.utilities]);
  addScores(scores, ACCESS_SCORES[inputs.access]);
  addScores(scores, PAYMENT_SCORES[inputs.payments]);
  addScores(scores, SPACE_SCORES[inputs.space]);

  const ranked = (Object.keys(MACHINES) as MachineKey[])
    .sort((a, b) => scores[b] - scores[a])
    .filter((machine) => scores[machine] > 0);

  return {
    primary: ranked[0] ?? "combo",
    secondary: ranked.find((machine) => machine !== ranked[0]) ?? "snack",
  };
}

function labelFor<T extends string>(options: SelectOption<T>[], value: T) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function MachineFitF4() {
  const [location, setLocation] = useState<LocationType>("office");
  const [traffic, setTraffic] = useState<FootTraffic>("medium");
  const [existing, setExisting] = useState<ExistingOffer>("none");
  const [hours, setHours] = useState<OperatingHours>("weekday");
  const [audience, setAudience] = useState<Audience>("officeStaff");
  const [utilities, setUtilities] = useState<Utilities>("standard");
  const [access, setAccess] = useState<Access>("easy");
  const [payments, setPayments] = useState<Payments>("mixed");
  const [space, setSpace] = useState<Space>("single");
  const [submitted, setSubmitted] = useState(false);

  const recommendation = useMemo(
    () =>
      recommendMachine({
        location,
        traffic,
        existing,
        hours,
        audience,
        utilities,
        access,
        payments,
        space,
      }),
    [access, audience, existing, hours, location, payments, space, traffic, utilities],
  );

  const operatorNotes = useMemo(() => {
    const notes = [
      "Pass the complete location brief to an operator for equipment, product and service review.",
    ];

    if (traffic === "low") {
      notes.push("Lower traffic may favour a compact format or a limited-SKU starting point.");
    }
    if (existing !== "none") {
      notes.push(
        "The operator should avoid duplicating the amenity already available in the building.",
      );
    }
    if (utilities === "limitedPower" || utilities === "unknown") {
      notes.push(
        "Confirm power, utilities and placement requirements before an operator proposes equipment.",
      );
    }
    if (access === "managed" || access === "restricted") {
      notes.push(
        "Share delivery, loading and service-access rules with the operator before a site visit.",
      );
    }
    if (space === "microMarket") {
      notes.push(
        "A larger footprint warrants an operator review of security, cashless adoption and host responsibilities.",
      );
    }

    return notes;
  }, [access, existing, space, traffic, utilities]);

  const screeningSummary = [
    { label: "Traffic", value: labelFor(TRAFFIC, traffic) },
    { label: "Hours", value: labelFor(OPERATING_HOURS, hours) },
    { label: "Audience", value: labelFor(AUDIENCES, audience) },
    { label: "Utilities", value: labelFor(UTILITIES, utilities) },
    { label: "Access", value: labelFor(ACCESS_OPTIONS, access) },
    { label: "Space", value: labelFor(SPACE_OPTIONS, space) },
  ];

  return (
    <section id="f4" className="scroll-mt-28 border-b-2 border-ink/15 bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-paper/60">F4 / MACHINE FIT</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl tracking-tight uppercase md:text-4xl">
              Build a stronger location brief.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/80">
              Screen nine site conditions before your location need is passed to an independent
              vending operator. More detail helps identify a plausible format and gives the operator
              the context needed for an informed follow-up.
            </p>
            <p className="mt-10 font-mono text-xs tracking-[0.2em] text-amber uppercase">
              Expanded screening factors
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-paper/80 sm:grid-cols-2">
              <li>
                <span className="text-amber">&#9632;</span> Site and customer fit
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Daily traffic and operating hours
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Existing amenities and audience
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Utilities and service access
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Payment preference and space
              </li>
              <li>
                <span className="text-amber">&#9632;</span> Operator handoff considerations
              </li>
            </ul>
          </div>

          <div className="border-2 border-paper/30 bg-paper p-5 text-ink md:p-7">
            <div className="flex items-center justify-between border-b-2 border-ink/15 pb-4">
              <p className="font-mono text-xs tracking-[0.18em] text-ink/60 uppercase">
                Location screening inputs
              </p>
              <p className="font-mono text-xs text-amber">09 FACTORS</p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
                  Operating hours
                </span>
                <select
                  value={hours}
                  onChange={(event) => setHours(event.target.value as OperatingHours)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {OPERATING_HOURS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Primary audience
                </span>
                <select
                  value={audience}
                  onChange={(event) => setAudience(event.target.value as Audience)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {AUDIENCES.map((option) => (
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

              <label className="block">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Utilities at the proposed area
                </span>
                <select
                  value={utilities}
                  onChange={(event) => setUtilities(event.target.value as Utilities)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {UTILITIES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Delivery and service access
                </span>
                <select
                  value={access}
                  onChange={(event) => setAccess(event.target.value as Access)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {ACCESS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Payment preference
                </span>
                <select
                  value={payments}
                  onChange={(event) => setPayments(event.target.value as Payments)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {PAYMENT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="font-mono text-xs tracking-[0.16em] text-ink/60 uppercase">
                  Available space
                </span>
                <select
                  value={space}
                  onChange={(event) => setSpace(event.target.value as Space)}
                  className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-amber"
                >
                  {SPACE_OPTIONS.map((option) => (
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
              Build operator-ready brief
            </button>

            {submitted && (
              <div className="mt-6 border-t-2 border-ink/15 pt-6" aria-live="polite">
                <p className="font-mono text-xs tracking-[0.18em] text-ink/60 uppercase">
                  Suggested operator brief
                </p>

                <dl className="mt-4 grid gap-px border-2 border-ink/15 bg-ink/15 sm:grid-cols-2">
                  {screeningSummary.map((item) => (
                    <div key={item.label} className="bg-paper px-4 py-3">
                      <dt className="font-mono text-[10px] tracking-[0.15em] text-ink/55 uppercase">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-snug text-ink">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 border-2 border-ink bg-navy p-5 text-paper">
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
                      Why it fits ·{" "}
                    </span>
                    {MACHINES[recommendation.primary].bestFor}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/80">
                    <span className="font-mono text-xs tracking-[0.14em] text-amber uppercase">
                      Operator check ·{" "}
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

                <div className="mt-4 border-l-4 border-amber bg-amber/10 px-4 py-4">
                  <p className="font-mono text-xs tracking-[0.16em] text-ink/65 uppercase">
                    Operator handoff notes
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
                    {operatorNotes.map((note) => (
                      <li key={note}>
                        <span className="text-amber">&#9632;</span> {note}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-ink/60">
                  This is a location-screening and operator-matching tool, not an equipment offer or
                  revenue guarantee. Seven Vending does not provide or maintain machines; a matched
                  operator confirms the final equipment, service and site requirements.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
