# Seven Vending Alberta — vending-machine-panel marketing site

A single scrolling page at `/`, framed as the front panel of a vending machine. Keypad codes A1–E5 are the navigation and map to real sections.

## Look and feel

- Sharp corners (0–2px), 1–2px solid borders instead of shadows, flat fills, no gradients or glass.
- Palette locked to: Machine Navy `#14213D`, Paper White `#F7F5F0`, Warning Amber `#FFB627`, Coin Silver `#C7CDD6`, Snack Red `#D64550` (sparing), Ink `#1A1A1A`.
- Type: Archivo Black for uppercase headlines with tight tracking; IBM Plex Mono only for keypad codes, prices, and data labels; Work Sans for body copy.
- Motion limited to the keypad: amber glow + 1px press-in on hover/active. No scroll fade-ins.

## Page structure

```text
HEADER   wordmark left | keypad A1 B2 C3 D4 E5 | phone
A1       hero readout headline + one CTA + flat SVG machine panel
B2       how it works, 3 punch-card steps with mono numerals
C3       offer grid: snack / drink / combo / micro-market panels
D4       service area: statement + Alberta city list + SVG province outline
E5       contact: order-slip form + direct phone/email
FOOTER   wordmark, phone, email, service line, year
```

- Keypad buttons scroll to their section and stay lit while that section is in view (IntersectionObserver, no library).
- Mobile: keypad becomes a horizontal scroll strip of the same buttons.

## Form behaviour

The order-slip form (business name, city, email, approx. employee count) validates inline and shows a confirmation readout on submit. No backend is wired up in this pass — submissions are not stored or emailed yet. Say the word and I'll add Lovable Cloud so requests land in a database and hit your inbox.

## Technical notes

- Rewrite `src/routes/index.tsx` as the whole page; extract sections into `src/components/` (Header, HeroA1, HowItWorksB2, OfferC3, ServiceAreaD4, ContactE5, Footer, KeypadNav).
- Add the six palette colors, three font families, and a `--radius: 2px` scale as tokens in `src/styles.css`; components use tokens only, no hardcoded hex.
- Fonts loaded via a `<link>` in `src/routes/__root.tsx` head (not a CSS `@import`).
- Machine silhouette and Alberta outline are inline SVG, no images.
- Route `head()` on `/` with Alberta-vending-specific title, description, og/twitter tags; single `<h1>` in A1; semantic `<section id="a1">`… markers.
- Placeholder phone/email/city list included; swap in real details anytime.
