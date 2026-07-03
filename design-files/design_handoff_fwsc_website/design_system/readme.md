# Florida Water Sports Coalition — Design System

**FWSC** is a coalition of Florida boat liveries and water-sport operators working to make boating and Florida's waterways safer for passengers and the public. The brand must feel **official, formal, and institutional** — reflective of a state organization — while staying warm enough for public-facing safety education.

## Sources provided
- `uploads/Florida Water Sports Coalition logo.png` — the coalition seal (navy field, gold rope ring, anchors, compass rose, Great Seal of Florida interior). Copied to `assets/fwsc-seal.png`.
- No codebase, Figma, fonts, or existing product UI were provided. All components and screens here are **authored from scratch** against the brand direction; the standard component set was used per design-system convention.

## Brand direction
Civic maritime authority. Think state agency + nautical heritage: navy and gold, parchment backgrounds, engraved serif caps, certificate-style gold rules, squared corners, restrained shadows. Safety signaling (danger/caution/clear) borrows marine-flag clarity.

## CONTENT FUNDAMENTALS
- **Tone:** formal, plain-spoken public service. Authoritative but helpful — a harbormaster, not a marketer. No hype, no exclamation points, no emoji.
- **Person:** the coalition speaks as "the Coalition" or "we" institutionally; addresses the reader as "you" in guidance ("Before you depart, file a float plan.").
- **Casing:** Title Case for page titles and section heads; sentence case for body and UI controls ("File a report", not "FILE A REPORT" — all-caps is reserved for small tracked *labels* like `OFFICIAL NOTICE`).
- **Vocabulary:** proper maritime/regulatory terms — vessel, livery, operator, waterway, advisory, ordinance, certification. Numbers and statutes cited precisely ("F.S. §327.54").
- **Copy examples:**
  - Hero: "Safer vessels. Safer waters. A coalition of Florida liveries and operators committed to passenger safety."
  - Button: "Find a certified operator" / "View safety advisories"
  - Advisory: "CAUTION — Small craft advisory in effect for Tampa Bay through 6 PM EDT."

## VISUAL FOUNDATIONS
- **Colors:** primary navy `--navy-800 #14264E` + gold `--gold-500 #C9A23E` on parchment `#FAF6EC`. Seal-interior accents (water blue, palm green, brick red) used sparingly for illustration/status. Status colors are dedicated tokens (danger/caution/clear/info) — never reuse brand gold for warnings.
- **Type:** `--font-display` Marcellus (Roman-inscription caps — mastheads, seal lockups, section eyebrows; single 400 weight, never faux-bold); `--font-serif` Libre Caslon Text (headings, long-form — Caslon, the typeface of American founding documents); `--font-sans` Public Sans (body, UI controls, tables). Tracked uppercase labels (0.14em) are a signature.
- **Backgrounds:** flat parchment or flat navy bands. No gradients, no photography textures by default; imagery (when provided) sits in bordered frames like plates in a report.
- **Rules & borders:** the certificate double-rule (thick gold over hairline) marks section starts. Cards: white, 1px `--line-300` border, 2–4px radius, `--shadow-card`. Navy surfaces get a single inner gold rule.
- **Corners:** squared (2–6px). Pills only for badges/tags.
- **Shadows:** paper-like and faint; overlays get `--shadow-overlay`. No glows.
- **Animation:** minimal — 120–160ms ease-out fades/color transitions only. No bounces, no parallax.
- **Hover:** darken one step (navy-800→700 is *lighter* directionally: primary hover uses `--navy-700`; gold hover darkens to `--gold-600`). Links underline on hover.
- **Press:** darken further (`--navy-900`); no scale transforms.
- **Focus:** 2px gold ring (`--focus-ring`), offset 2px — visible on navy and parchment alike.
- **Transparency/blur:** none, except a dim navy scrim (rgba(14,26,52,.55)) behind dialogs.
- **Layout:** centered 1120px container; generous vertical rhythm (48–96px between sections); navy header band fixed content, not sticky by default.
- **Imagery color vibe:** if photography is added, warm daylight, blue water, documentary rather than lifestyle. Not provided yet — use bordered placeholders.

## ICONOGRAPHY
- No icon set was provided. **Substitution:** [Lucide](https://lucide.dev) via CDN — 1.5px stroke, squared caps, quiet and institutional. Load `lucide` from CDN in kits/cards. Recommended glyphs: `anchor`, `life-buoy`, `waves`, `ship`, `alert-triangle`, `shield-check`, `map-pin`, `file-text`.
- No emoji, ever. Unicode is limited to typographic marks (§, —, •).
- The seal (`assets/fwsc-seal.png`) is the only brand mark. Never redraw it; never place it smaller than 48px; keep it on white, parchment, or navy only.

## Index
- `styles.css` — global entry; imports everything in `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (Google Fonts — **substitutions, see Caveats**).
- `assets/fwsc-seal.png` — coalition seal.
- `guidelines/` — foundation specimen cards (Design System tab).
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch.
- `components/display/` — Card, Badge, Tag, Alert, Tabs, Dialog.
- `ui_kits/website/` — coalition public website: home, advisories, operator directory (interactive `index.html`).
- `SKILL.md` — agent skill entry point.

## Intentional additions
- `Alert` — safety advisories are core to the mission; needed a first-class advisory banner.

## Caveats
- **Fonts are substitutions** (Marcellus / Libre Caslon Text / Public Sans from Google Fonts — chosen for institutional pedigree and to avoid overused "AI-default" faces). If FWSC licenses brand fonts, replace `tokens/fonts.css` with real `@font-face` binaries.
- Icons are Lucide (CDN) pending a brand icon set.
- No photography was provided; kits use bordered placeholders.
