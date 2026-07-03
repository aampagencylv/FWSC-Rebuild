# Handoff: Florida Water Sports Coalition Website

## Overview
Public website for the Florida Water Sports Coalition (FWSC) — a coalition of Florida boat liveries and water-sport operators focused on waterway safety. The site recruits operators as members, publishes the coalition's safety framework, showcases partnerships (FWC, insurance, licensing), and provides a public directory of certified operators plus a membership sign-up with tiered dues and checkout.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, **not production code to copy directly**. Recreate these designs in your target codebase's environment (Next.js, React, Astro, etc.) using its established patterns. If no environment exists yet, choose the most appropriate stack for a content-forward marketing site with one payment flow (e.g. Next.js + Stripe).

- `FWSC Website.dc.html` — **high-fidelity design, the source of truth.** Contains all five pages behind an in-page nav (the `Component` class at the bottom switches `state.page`). Read the markup per `data-screen-label` section.
- `FWSC Wireframes.dc.html` — earlier wireframe explorations, for context only. Chosen directions: homepage 1b (membership-first), directory 2a (filter rail + list), sign-up 2c (single-page tiers + checkout).
- `design_system/` — FWSC design tokens (colors, typography, spacing, fonts) and global styles. **Use these token values verbatim.**
- `assets/fwsc-seal.png` — coalition seal. The only brand mark; never redraw it, never render below 48px, only on white/parchment/navy.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final design intent. Recreate pixel-perfectly using the token values below. Exceptions (placeholders to be replaced by the client):
- Tier prices ($350 / $750 / $1,500) and the $100 application fee are **example values** — confirm real dues.
- Directory operators are **fictional sample data**.
- Photography and partner logos are bordered placeholders; testimonial copy is pending.

## Screens / Views
All pages share: parchment page background `#FAF6EC`, centered **1120px** container with 24px side padding, header + footer below.

### Global header
1. **Notice band** — navy-900 `#0E1A34` bar; centered text 12px/700, letter-spacing 0.14em, uppercase, color gold-400 `#E3BE6A`; padding 7px 16px. Copy: "An official coalition of Florida boat liveries and water-sport operators".
2. **Masthead** — navy-800 `#14264E`, bottom border 3px solid gold-500 `#C9A23E`. Row (flex, gap 16, padding 16px 24px): seal image 56×56 (border-radius 50%) · title block · nav.
   - Title: Marcellus 19px, letter-spacing 0.06em, color `#F5EFDF`, "FLORIDA WATER SPORTS COALITION"; subtitle 11px/700 tracked caps gold-400 "Safer Vessels · Safer Waters".
   - Nav items (Home, Safety Framework, Partnerships, Member Directory): Public Sans 14px; inactive color `#C8D2E4` weight 500; active: background navy-700 `#1D3463`, white, weight 600, bottom border 2px gold-500. Padding 10px 14px, radius 3px.
   - CTA: accent (gold) button, sm, "Become a member" → membership page.

### Global footer
Navy-900 background, text `#8FA0C2` 13px/1.7. Seal 72×72 · mission paragraph (max 380px) + © line (`#5F719A`) · two link columns (Coalition / Safety) with tracked-caps gold-400 headers and links `#C8D2E4`.

### Page 1 — Home (membership-first)
1. **Hero** (parchment, padding 72/64): left column — eyebrow "For livery and rental operators" (12px/700 tracked caps, gold-700 `#8A6A1F`); H1 Libre Caslon Text 44px/1.15 navy-800 "Stronger Together on Florida's Waterways"; body 17px/1.6 ink-600 `#4A5265` (max 520px); buttons: primary lg "Join the coalition" (→ membership), secondary lg "View the safety framework" (→ framework). Right: 380×300 photo placeholder (water-100 `#E3ECF7` bg, 1px line-300 border, radius 4).
2. **Why Operators Join** — section rule header (eyebrow + Caslon 26px title + certificate double-rule: 2px gold over 1px line-300). 2×2 grid, gap 20, of certificate cards (white, 1px line-300, 3px gold top border, radius 4–6, faint shadow): Insurance Partnerships / FWC Coordination / A Mark the Public Trusts / One Voice in Tallahassee (copy in HTML).
3. **Path to Certification** (navy-800 full-bleed band, inner 1px gold top rule, padding 56): gold-400 eyebrow, white Caslon 26px title, 4-across step cards (navy-700 bg, 1px navy-600 border, 2px gold top, radius 4, padding 20): Apply / Safety audit / Staff training / Certified. Step numeral: Marcellus 26px gold-400.
4. **Advocacy + testimonial** — 1.4fr/1fr grid: "2026 Session Priorities" card; "Member voices" card (quote pending).
5. **Join CTA band** — parchment-200 `#F3ECDB` panel, 1px line-300 border + 3px gold top, centered; Caslon 26px "Ready to Join?", sub "Dues scale by fleet size. Applications are reviewed monthly.", primary lg button "Start your application".

### Page 2 — Member Directory
1. **Page header** (parchment band, 1px line-300 bottom): eyebrow "Member directory", H1 Caslon 34px "Certified Operators of the Coalition", sub 15.5px ink-600.
2. **Body** — flex: 250px filter rail (white card, padding 20): "Filter listings" caps label; County select; Waterway select; Vessel type checkbox group (Pontoon, Jet ski / PWC, Kayak / SUP, Charter); Certification level select. Main column (gap 14): search input ("Search operators by name…"), then operator row cards.
3. **Operator row card** — white, 1px line-300, radius 4, padding 20, flex gap 16: 56×56 logo placeholder (navy-050 `#EEF2F8`) · name (Caslon 17px/700 navy-800) + certification badge (gold pill badge "Certified · Level II"; neutral pill for "Member · Certification pending") · meta line 13.5px ink-600 (County · Waterway · vessel types) · link line ("View profile" water-500 `#4E7FBE` · "Member since YYYY · Insurance verified" ink-400).
4. **Pagination** — centered ‹ 1 2 3 … 12 ›; current page: navy-800 chip, white text.
5. **Join band** — parchment-200 panel with gold top rule: "Operate a livery?" + primary button "Join the coalition".

### Page 3 — Membership Sign-up + Checkout
1. **Page header**: eyebrow "Membership", H1 "Choose Your Membership", sub "Annual dues scale by fleet size. All tiers include the certification path, framework access, and a directory listing."
2. **Tier cards** — 3-across grid, gap 20. Each: white card padding 28, tracked-caps gold-700 tier name, price Caslon 34px/700 navy-800 with "/ year" 15.5px ink-600, fleet-size line, bulleted benefits (14.5px/1.8), full-width select button at bottom. **Selected state:** 2px gold-500 border (vs 1px line-300), button becomes primary "Selected"; unselected buttons are secondary "Select {Tier}". Fleet carries a gold "Most common" badge and is selected by default. Tiers: Skipper $350 (1–5 vessels): directory listing, framework access, advocacy. Fleet $750 (6–25): + insurance partner rates, staff training seats (4). Harbor $1,500 (26+/multi-site): + FWC liaison priority, board eligibility.
3. **Business Details card** (white, 3px gold top rule, padding 28) — 2-col field grid, gap 18: Business name*, County* (select), Primary waterway, Fleet size and vessel types* (hint: "Example: 12 vessels — pontoon, jet ski"), Insurance carrier*, Policy number*, Contact name*, Contact email*.
4. **Payment card** — Name on card*, Card number* (placeholder 0000 0000 0000 0000), then 3-col: Expiration (MM / YY), CVC, Billing ZIP.
5. **Order summary** (320px sticky aside, white, gold top rule, padding 24): tracked-caps "Order summary"; line items — "{Tier} membership {price}" and "Application fee (one-time) $100"; certificate double-rule; "Due today {total}" 17px/700 navy-800; full-width primary lg "Pay and submit application"; fine print: "Membership is pending your safety audit. If your application is not approved, dues are refunded in full."

### Page 4 — Safety Framework
Header: eyebrow "Safety framework", H1 "The FWSC Standard for Livery Operations", sub "Aligned with F.S. §327.54 and FWC guidance. Adopted by every certified member of the Coalition."
- **Four pillar certificate cards** (2×2 grid): 1 Vessel Readiness, 2 Renter Briefing, 3 Staff Training, 4 Insurance and Records (full copy in HTML).
- **Downloads** — section rule + three bordered link chips: Vessel inspection checklist (PDF), Renter briefing script (PDF), Full safety framework (PDF).
- **CTA band** — "Adopt the framework" + primary button "Get certified" → membership.

### Page 5 — Partnerships
Header: eyebrow "Partnerships", H1 "Working With the Agencies That Keep Florida Boating Safe".
- **Three partner row cards** (white, padding 24, 64×64 logo placeholder): Florida Fish and Wildlife Conservation Commission / Insurance Partners / Licensing Agencies — titles Caslon 19px/700, body 15.5px/1.6 (copy in HTML).
- **Become a partner band** — navy-800 full-bleed with inner gold top rule: gold-400 eyebrow "Become a partner", white Caslon 21px line, accent button "Contact the coalition".

## Interactions & Behavior
- **Navigation**: header items + all CTA buttons route between the five pages; scroll to top on navigation. In production these become real routes: `/`, `/directory`, `/membership`, `/safety-framework`, `/partnerships`.
- **Tier selection**: clicking a tier's Select button highlights the card (2px gold border), swaps its button to primary "Selected", and updates the order summary (tier line + total = dues + $100 fee). Default: Fleet.
- **Buttons** (from design system): 140ms ease-out color transitions. Primary: navy-800 → hover navy-700 → active navy-900. Accent: gold-500, navy-900 text → hover gold-600 → active gold-700 w/ white text. Secondary: transparent, 1px navy-800 border → hover navy-050 bg. No scale transforms, no glows.
- **Links**: water-500 color, underline on hover only.
- **Inputs/selects**: 40px min-height, 1px line-300 border; focus = navy-800 border + 2px gold focus ring, offset 1px. Error = status-danger border + 13.5px danger message below.
- **Animation policy**: 120–160ms ease-out fades/color transitions only. No parallax, no bounces.
- **Checkout**: prototype is visual only. Implement with a real payment provider (e.g. Stripe); validate required fields (marked *) before submit; success state should confirm application received and state that safety-audit scheduling follows by email.
- **Directory filters/search**: non-functional in the prototype; implement as query-driven filtering (county, waterway, vessel type multi-select, cert level) + name search with pagination.

## State Management
- `page` — current route (becomes real routing).
- `tier` — selected membership tier ('skipper' | 'fleet' | 'harbor'), drives card highlight + order summary.
- Directory: filter state (county, waterway, vesselTypes[], certLevel, searchQuery, page) + fetched operator list.
- Membership form: field values + validation errors; payment handled by provider SDK.
- Data needs: operators collection (name, logo, county, waterway, vessel types, cert level, member-since year, insurance-verified flag); membership tiers (name, price, fleet range, benefits).

## Design Tokens
Full token files in `design_system/tokens/` — use them as CSS custom properties or map to your theme. Key values:

**Colors** — navy-900 `#0E1A34`, navy-800 `#14264E` (primary), navy-700 `#1D3463`, navy-050 `#EEF2F8`; gold-700 `#8A6A1F`, gold-500 `#C9A23E` (accent), gold-400 `#E3BE6A`; parchment-100 `#FAF6EC` (page bg), parchment-200 `#F3ECDB`; ink-900 `#1A2030` (body), ink-600 `#4A5265` (muted), ink-400 `#7C8496`; line-300 `#D8D3C4` (borders); water-500 `#4E7FBE` (links), water-100 `#E3ECF7`; status danger `#A6321F` / caution `#9A6B10` / clear `#1F6B3E` / info `#2A5C9E` with matching bg tints (see colors.css). Never use gold for warnings.

**Typography** — Marcellus (display; 400 only — masthead, step numerals), Libre Caslon Text (headings), Public Sans (body/UI). Scale: 12 / 13.5 / 15.5 / 17 / 21 / 26 / 34 / 44px. Tracked caps labels: 12px (or 11px in chrome), 700, letter-spacing 0.14em, uppercase. Line-heights: 1.15 headings, 1.3 snug, 1.6 body. Fonts are Google Fonts substitutions — swap in licensed brand fonts if/when provided.

**Spacing & shape** — 1120px container; 48–96px between sections (64px typical); card padding 20–28px; grid gaps 16–20px. Radius: 3–4px (squared; pills only for badges). Shadows: faint paper-like card shadow (see styles.css `--shadow-card`); no glows. Signature "certificate rule": 2px gold-500 line directly above a 1px line-300 hairline.

## Content & Tone Rules
Formal public-service voice — "the Coalition"/"we"; reader addressed as "you". Title Case for page titles/section heads; sentence case for UI controls. No exclamation points, no emoji, no hype. Cite statutes precisely ("F.S. §327.54"). All-caps only for small tracked labels.

## Assets
- `assets/fwsc-seal.png` — coalition seal (provided brand mark). Usage rules above.
- Icons: none used in the hi-fi design. If icons are added, use Lucide (1.5px stroke) per the design system.
- Photography/partner logos/testimonial: **not provided** — bordered placeholders in the design mark their slots and aspect ratios.

## Files
- `FWSC Website.dc.html` — hi-fi design, all 5 pages (source of truth)
- `FWSC Wireframes.dc.html` — wireframe explorations (context)
- `design_system/tokens/{colors,typography,spacing,fonts}.css` + `design_system/styles.css` — tokens
- `design_system/readme.md` — full design-system guide
- `assets/fwsc-seal.png` — brand seal
