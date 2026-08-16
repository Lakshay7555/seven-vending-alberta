# Alberta Vending Console

Build a single-page marketing website for Seven Vending Alberta, a vending 
machine company that places and services free vending machines (snacks, 
drinks, and micro-markets) for offices, warehouses, gyms, and apartment 
buildings across Alberta, Canada.

## Critical style direction
This must NOT look like a typical AI-generated React site. Avoid: rounded 
Tailwind cards with soft drop shadows, floating gradient blobs, generic 
"SaaS landing page" hero with centered headline + two pill buttons, 
Inter-everywhere typography, and glassy translucent panels. 

Instead, build it to feel like a real, hand-coded HTML/CSS site: mostly 
sharp corners (0–4px radius max), real 1–2px solid borders instead of 
shadows to separate elements, flat colors, deliberate whitespace instead 
of padding-via-card, and system-feeling layout rather than a component 
library aesthetic. Think early-2010s well-crafted small-business site 
redone with modern spacing and type discipline — not a startup template.

## Concept
The whole page is framed as the front panel of a vending machine. The 
main navigation is a lit selection keypad: A1, B2, C3, D4, E5 — each 
code maps to a real section (this mirrors how actual vending machines 
work, so it's functional, not decorative). Clicking a code jumps to 
that section and the button "lights up" (glow/color change), like 
you've made a selection.

## Color palette (use these exact hex values, no other accents)
- Machine Navy: #14213D (primary background, header/footer, panel body)
- Paper White: #F7F5F0 (light section backgrounds)
- Warning Amber: #FFB627 (primary accent — buttons, active keypad glow, links)
- Coin Silver: #C7CDD6 (borders, dividers, secondary text on dark)
- Snack Red: #D64550 (sparing use only — "out of stock"/urgency moments, 
  e.g. limited-time offer note)
- Ink: #1A1A1A (body text on light backgrounds)

## Typography
- Display face: a bold condensed industrial sans (e.g. "Archivo Black" 
  or "Oswald" 700) for headlines — set in uppercase with tight tracking, 
  like machine panel signage
- Utility/code face: a monospace (e.g. "IBM Plex Mono" or "JetBrains 
  Mono") used ONLY for the keypad codes, prices, and small data labels — 
  this is what sells the "LED readout" feeling
- Body face: a plain, restrained humanist sans (e.g. "Work Sans" or 
  "Source Sans 3") for paragraph copy — no personality competition with 
  the display face

## Sections (in order)

**Header** — Small "SEVEN VENDING ALBERTA" wordmark top-left, keypad nav 
(A1–E5 codes) top-right, phone number visible.

**A1 — Hero**: Headline framed as a machine readout, e.g. "SELECT A1 → 
FREE VENDING FOR YOUR WORKPLACE". Subhead: one sentence on free 
placement + full service across Alberta. Single primary CTA button 
styled like a physical vending button ("Request A Machine"). Consider 
a simple flat illustration or geometric SVG panel of a vending machine 
silhouette on the right, not a stock photo.

**B2 — How it works**: 3-step process (Request → Free install → We 
stock & maintain), laid out like punch-card steps with the mono font 
for step numbers, not generic numbered circles.

**C3 — What we offer**: Grid of machine types — snack, drink/cold 
beverage, combo, and micro-market — each in a bordered panel (flat, 
no shadow) with a short description and what it fits (break room size, 
foot traffic).

**D4 — Service area**: Simple statement + list of Alberta 
cities/regions served (Edmonton, Calgary, Red Deer, etc. — placeholder, 
adjust to real coverage). A minimal line-art map silhouette of Alberta 
is a nice touch if feasible in SVG.

**E5 — Contact / CTA**: Short form (business name, city, email, 
approx. employee count) styled like a paper order slip with visible 
input borders (not floating labels), plus direct phone/email. Button 
text: "Submit Request" — not "Submit."

**Footer**: Wordmark, phone, email, service area line, year.

## Interaction notes
- Keypad nav buttons should visually "press in" or glow amber on 
  hover/click (subtle, not bouncy)
- Keep animation minimal — a soft glow/state change on the keypad is 
  the one signature motion moment. No scroll-triggered fade-ins on 
  every element.
- Fully responsive; on mobile, the keypad nav can collapse to a 
  horizontal scroll strip of the same buttons

## Copy tone
Plain, direct, benefit-first. No corporate filler ("elevate," 
"synergy," "seamless"). Write like a local Alberta business owner 
talking to another business owner about a free, low-hassle break room 
upgrade.


A few things worth deciding before you paste this in:

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://seven-vending-alberta.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8ef71cfa-834d-4ca9-aacc-78b3f4b707dd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
