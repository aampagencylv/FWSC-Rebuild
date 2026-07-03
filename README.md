# Florida Water Sports Coalition — Website

Public website for the **Florida Water Sports Coalition (FWSC)** — a coalition of Florida boat liveries and water-sport operators committed to waterway safety. The site recruits operators as members, publishes safety standards, showcases partnerships, and provides a directory of certified operators.

## Project Status

**Phase 1: Scaffolding & Design System** ✓
- Next.js project initialized
- Design system tokens imported (colors, typography, spacing)
- Global header/footer components built
- Home page structure complete
- Placeholder pages for all 5 routes

**Phase 2: Content Pages** (Next)
- Member Directory with filtering + pagination
- Membership sign-up with tier selection
- Stripe checkout integration
- Safety Framework documentation
- Partnerships showcase

**Phase 3: CMS & Data**
- Payload CMS setup for operators, tiers, content
- PostgreSQL/Neon database
- Operator CRUD + directory search
- Membership form validation

**Phase 4: Deployment**
- Vercel setup
- Environment variables + secrets
- CI/CD pipeline

## Stack

- **Frontend**: Next.js 15 + React 19 (TypeScript)
- **Styling**: CSS Modules + design-system tokens
- **CMS**: Payload CMS (to be added)
- **Database**: PostgreSQL via Neon (to be added)
- **Payments**: Stripe (to be added)
- **Deployment**: Vercel
- **Design System**: FWSC custom tokens (navy, gold, parchment palette)

## Project Structure

```
FWSC-Rebuild/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout + Header/Footer
│   │   ├── page.tsx            # Home page
│   │   ├── page.module.css     # Home styles
│   │   ├── directory/          # Member Directory route
│   │   ├── membership/         # Membership sign-up route
│   │   ├── safety-framework/   # Safety Framework route
│   │   └── partnerships/       # Partnerships route
│   ├── components/
│   │   ├── Header.tsx          # Global header
│   │   ├── Header.module.css
│   │   ├── Footer.tsx          # Global footer
│   │   └── Footer.module.css
│   └── styles/
│       ├── styles.css          # Global entry + imports
│       └── tokens/
│           ├── colors.css      # FWSC color tokens
│           ├── typography.css  # Font scale + tracking
│           ├── spacing.css     # Space tokens
│           └── fonts.css       # Google Fonts imports
├── public/
│   └── assets/
│       └── fwsc-seal.png       # Coalition seal (brand mark)
├── design-files/               # Design system reference + mockups
├── next.config.ts
├── tsconfig.json
└── .gitignore
```

## Design System

The FWSC brand is **official, formal, institutional** — think state agency + maritime heritage.

### Color Palette
- **Primary**: Navy `#14264E` (buttons, text)
- **Accent**: Gold `#C9A23E` (highlights, rules)
- **Background**: Parchment `#FAF6EC` (page, cards)
- **Text**: Ink `#1A2030` (navy-900 for headings, ink-600 for body)
- **Status**: Danger `#A6321F`, Caution `#9A6B10`, Clear `#1F6B3E`, Info `#2A5C9E`

### Typography
- **Display**: Marcellus (Google Fonts) — 400 weight, used for masthead + step numerals
- **Headings**: Libre Caslon Text (Google Fonts) — serif, American-pedigree, formal
- **Body/UI**: Public Sans (Google Fonts) — clean, accessible, institutional

**Scale**: 12 / 13.5 / 15.5 / 17 / 21 / 26 / 34 / 44px
**Tracked labels**: 12px, 700, 0.14em letter-spacing, all-caps

### Layout
- **Container**: Max 1120px, centered, 24px side padding
- **Spacing**: 48–96px between sections (64px typical)
- **Cards**: 20–28px padding, 1px borders, 3–4px radius (squared)
- **Shadows**: Faint, paper-like (`--shadow-card`); no glows
- **Animation**: 120–160ms ease-out fades/color transitions only

### Signature Elements
- **Certificate rule**: 2px gold top border + 1px hairline below
- **Hover**: Darken one step (`--navy-700` for primary)
- **Focus**: 2px gold ring, 2px offset
- **Imagery**: Bordered placeholders; documentary daylight + blue water (not lifestyle)

## Running Locally

### Install dependencies
```bash
npm install
```

### Start dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

### Home (`/`)
Hero intro + membership pitch, 4 benefit cards, 4-step path to certification, testimonial pending, final CTA band.

### Member Directory (`/directory`)
Filter rail (county, waterway, vessel type, cert level) + searchable list of certified operators with logos, member since year, insurance verification status.

### Membership Sign-up (`/membership`)
3 tier cards (Skipper $350, Fleet $750, Harbor $1500) with benefits, business details form, Stripe payment card, sticky order summary.

### Safety Framework (`/safety-framework`)
4 pillar cards (Vessel Readiness, Renter Briefing, Staff Training, Insurance & Records), PDF download links, final get-certified CTA.

### Partnerships (`/partnerships`)
3 partner rows (FWC, Insurance, Licensing), testimonials (pending), become-a-partner CTA.

## Content Placeholders

Images, partner logos, and testimonial copy are marked as bordered placeholders in the design. Replace with real content before launch:
- Hero photo (380×300, daylight water scene)
- Partner logos (64×64)
- Testimonial copy + operator headshots (pending)

## Design Reference

The high-fidelity design (FWSC Website.dc.html) is in `design-files/design_handoff_fwsc_website/`. Use this as the single source of truth for:
- Copy (formal public-service voice)
- Colors + spacing (use token values verbatim)
- Component layouts + states
- Interaction details (hover, focus, active states)

## Next Steps

1. **Verify design locally** — run dev server, check hero + header styles against design reference
2. **Implement remaining pages** — directory filters, membership tier selector, checkout
3. **Add Payload CMS** — operators collection, partnership data, content management
4. **Set up Stripe** — tier selection → payment intent → application workflow
5. **Create Vercel project** — environment variables, database setup, deploy

## Vercel Setup (When Ready)

Create a new Vercel project linked to this repo:
```bash
vercel link
```

Set environment variables in Vercel dashboard:
```
NEXT_PUBLIC_STRIPE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
DATABASE_URL=postgresql://...
```

Deploy:
```bash
npm run build
npm start
```

## Contributing

- **Design tokens live in `src/styles/tokens/`** — use CSS custom properties (e.g., `var(--navy-800)`)
- **New components**: CSS Modules in `src/components/` (e.g., `ComponentName.tsx` + `ComponentName.module.css`)
- **Pages**: Next.js app router in `src/app/`; segment directories match routes
- **Copy**: Formal, plain-spoken public service tone; Title Case for headers, sentence case for UI

## License

© 2026 Florida Water Sports Coalition. All rights reserved.
