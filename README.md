# LegalMatterOps — The Painted Ledger

Local React/Vite concept website based on the selected watercolor direction.

## Run

- `npm install`
- `npm run dev -- --host 127.0.0.1 --port 5173`
- Open `http://127.0.0.1:5173/`
- Artwork catalogue: `http://127.0.0.1:5173/art-direction.html`
- Synthetic workbench: `http://127.0.0.1:5173/demo`

## Build and verification

- `npm run build`
- `npm run test:sites`
- Production assets are written to `dist/client`. The starter also prepares a static worker under `dist/server`.
- This project has not been deployed or connected to a domain.

## Contents

The home narrative includes source evidence, a pinned five-module chapter, a role map, incumbent overlap, buyer roles, validation targets, audit hypothesis and FAQ. Dedicated product, role, platform, security, pricing, company, resources, contact, sign-in and legal routes are included.

`src/data.js` contains the original concept copy, five proposed modules, ten fictional matters, source metadata, research notes, schema, role matrix, audit worksheet and storyboard. `src/App.jsx` contains the responsive components and synthetic interactions. `src/styles.css` defines the shared color, type, spacing and breakpoint system.

Original transparent PNGs, optimized WebPs, the company mark and favicons are in `public/assets`. The rendered asset catalogue includes typography, spacing and motion specifications.

## Motion

Lenis synchronizes with GSAP's ticker. ScrollTrigger reveals content and pins the horizontal module rail only at widths of at least 1100px and heights of at least 720px. Narrow screens use native horizontal scrolling. System reduced-motion preferences disable motion initially; the footer offers a manual toggle. Buttons and keyboard focus can navigate the module chapter.

## Prototype boundary

All matters and source artifacts are fictional. No conflict algorithm, legal decisions, docket computation, data import, payment, real credentials or sensitive-data transfer exists. The inquiry form validates locally and clearly states that nothing is sent or saved. Analytics, CRM, booking, SSO and production access enforcement are not connected. Proposed audit pricing is a hypothesis, not an active offer. No deployment, security certification, partnership or customer outcome is claimed.

## QA

See `design-qa.md` and the browser captures in `qa/`. The real workbench screenshot is distinct from the generated watercolor artwork.

## Hostinger without a Web App slot

Use the `hostinger` branch with a Custom PHP/HTML website. It contains the compiled site and Apache/LiteSpeed route fallback. The `main` branch contains source; GitHub Actions updates the deployment branch after source changes. Full instructions: [HOSTINGER-DEPLOYMENT.md](HOSTINGER-DEPLOYMENT.md).
