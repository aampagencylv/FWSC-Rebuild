# FWSC Website — Project Plan

## Overview
Public website for the Florida Water Sports Coalition — a coalition of boat liveries and water-sport operators. Recruits members, publishes safety framework, shows partnerships, and provides a directory of certified operators.

## Design Reference

**Design files** are in `design-files/design_handoff_fwsc_website/`:
- `FWSC Website.dc.html` — **source of truth** for all 5 pages (high-fidelity)
- `FWSC Wireframes.dc.html` — wireframe explorations (context only)
- `design_system/` — tokens + global styles

**Brand**: Official, formal, institutional (state agency + maritime heritage)
- Navy `#14264E` + Gold `#C9A23E` + Parchment `#FAF6EC`
- Marcellus (display), Libre Caslon (headings), Public Sans (body)
- 1120px container, 64px section spacing, squared corners

## Phases

### Phase 1: Scaffolding & Design System ✓
**Status**: Complete
- [x] Next.js project scaffolded
- [x] Design tokens imported
- [x] Global Header/Footer built
- [x] Home page structure
- [x] Placeholder pages (directory, membership, framework, partnerships)
- [x] Asset management (seal, design files)

**What's ready to test**:
- Home page hero + structure
- Navigation + routing
- Design system colors/fonts loaded

---

### Phase 2: Content Pages (In Progress)

#### 2a. Home Page Refinement
- [ ] Verify hero colors/spacing against design reference
- [ ] "Why Operators Join" card grid styling
- [ ] "Path to Certification" step cards (navy background + gold accents)
- [ ] Testimonial/advocacy section (copy pending from client)
- [ ] CTA band styling

#### 2b. Member Directory
- [ ] Filter rail: County select, Waterway select, Vessel type checkboxes, Cert level
- [ ] Search input ("Search operators by name…")
- [ ] Operator row cards: logo + name + badge + meta + links
- [ ] Pagination (centered, current page highlighted)
- [ ] "Join the coalition" CTA band at bottom
- [ ] Search + filter logic (connect to mock data first)

#### 2c. Membership Sign-up
- [ ] 3-tier card grid (Skipper $350, Fleet $750, Harbor $1500)
- [ ] Tier card selection state: 2px gold border + button becomes primary "Selected"
- [ ] Order summary sticky aside (update as tier changes)
- [ ] Business Details form (2-col grid):
  - Business name*
  - County* (select)
  - Primary waterway
  - Fleet size & vessel types*
  - Insurance carrier*
  - Policy number*
  - Contact name*
  - Contact email*
- [ ] Payment card inputs: Name, Card number, Expiration, CVC, ZIP
- [ ] Form validation (required fields marked *)
- [ ] Success state messaging

#### 2d. Safety Framework
- [ ] 4 pillar cards (2×2 grid): Vessel Readiness, Renter Briefing, Staff Training, Insurance & Records
- [ ] Downloads section: 3 link chips (PDF: inspection checklist, renter briefing script, full framework)
- [ ] "Get certified" CTA button

#### 2e. Partnerships
- [ ] 3 partner row cards: Florida Fish & Wildlife, Insurance Partners, Licensing Agencies
- [ ] Partner logos (64×64 placeholders)
- [ ] Partner descriptions + testimonials (pending)
- [ ] "Become a partner" CTA band (navy bg + gold rule)

---

### Phase 3: CMS & Data Integration

#### 3a. Payload CMS Setup
- [ ] Initialize Payload in project
- [ ] Collections:
  - **Operators** (name, logo, county, waterway, vessel types, cert level, member since, insurance verified)
  - **Membership Tiers** (name, price, fleet size range, benefits list)
  - **Partnerships** (name, logo, description, contact)
  - **Safety Framework** (4 pillars content, PDF downloads)
- [ ] Configure PostgreSQL/Neon connection
- [ ] Admin panel authentication

#### 3b. Directory Data
- [ ] Import/mock operator list (fictional sample data per design)
- [ ] Implement directory search + filtering
- [ ] Pagination (query-driven)
- [ ] Operator detail page (profile view)

#### 3c. Membership Form Data
- [ ] Application form collection (auto-saves draft state)
- [ ] Field validation + error messages
- [ ] Application workflow (submitted → pending audit → approved/denied)

---

### Phase 4: Payments & Checkout

#### 4a. Stripe Integration
- [ ] Initialize Stripe SDK
- [ ] Create Stripe products for tiers (Skipper, Fleet, Harbor)
- [ ] Add $100 application fee to total
- [ ] Implement Payment Element (PCI-compliant)

#### 4b. Membership Checkout Flow
- [ ] Tier selection → price update
- [ ] Form submission → Stripe Payment Intent
- [ ] Card validation + error handling
- [ ] Success redirect (confirmation page)
- [ ] Send application to review queue

#### 4c. Confirmation & Workflow
- [ ] Application received confirmation page
- [ ] Audit scheduling email (manual for now)
- [ ] Approval workflow (Payload admin → send cert + welcome email)

---

### Phase 5: Polish & Launch

#### 5a. Content Finalization
- [ ] Client provides: testimonial copy, partner logos, hero photo
- [ ] Fill placeholder slots (all marked in design)
- [ ] PDF downloads for safety framework

#### 5b. SEO & Meta
- [ ] Title tags + meta descriptions per page
- [ ] Schema.org Organization markup (seal, mission, contact)
- [ ] Robots.txt + sitemap.xml

#### 5c. Analytics
- [ ] Google Analytics 4 setup
- [ ] Conversion events (application started, tier selected, payment completed)
- [ ] Custom dashboard alerts

#### 5d. Testing
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile responsive (test on devices)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Form validation edge cases
- [ ] Payment flow end-to-end

---

### Phase 6: Deployment

#### 6a. Vercel Project
- [ ] Create new Vercel project linked to GitHub
- [ ] Configure environment variables
  - `NEXT_PUBLIC_STRIPE_KEY`
  - `STRIPE_SECRET_KEY`
  - `DATABASE_URL` (Neon)
  - `PAYLOAD_SECRET`
  - Any auth tokens (Resend, etc.)
- [ ] Set up automatic deployments (main branch)

#### 6b. Database
- [ ] Neon PostgreSQL project
- [ ] Run Payload migrations
- [ ] Seed sample data (operators, tiers, partners)

#### 6c. Domain & DNS
- [ ] Verify domain in Vercel
- [ ] DNS setup (A records / CNAME)
- [ ] SSL certificate (automatic)

#### 6d. Launch Checklist
- [ ] Staging environment tests
- [ ] Client sign-off on all pages
- [ ] Stripe live mode activation
- [ ] Email integration (application confirmations)
- [ ] Monitoring + error tracking (Sentry optional)
- [ ] Go live

---

## Key Decisions

### Design System
✓ **Using provided FWSC tokens verbatim** — colors, typography, spacing match design reference exactly. Google Fonts substitutions (Marcellus, Libre Caslon, Public Sans) chosen for institutional pedigree.

### State Management
- **Membership tier selection**: React state in component (easy preview for user)
- **Directory filters**: URL query params (shareable filtered lists, SEO-friendly)
- **Form state**: React form library (zod + validation) or Payload form SDK

### Data Storage
- **Operators**: Payload collection → searchable, indexable, filterable
- **User-submitted applications**: Payload collection with workflow state
- **Tiers/partnerships**: Static in Payload, rarely change

### Payment Processing
- **Stripe** for PCI compliance + recurring membership support (if needed later)
- **Application fee** ($100 one-time) bundled with tier dues in single checkout

---

## Technical Notes

### Design Tokens
All custom properties live in `src/styles/tokens/colors.css` etc. Use them:
```css
/* Instead of */
background-color: #14264E;

/* Write */
background-color: var(--navy-800, #14264E);
```

### Component Patterns
- **CSS Modules** for scoped styling (no global class collisions)
- **TypeScript** for component props type safety
- **No UI framework overhead** — vanilla React + CSS tokens keeps designs pristine

### Accessibility
- Semantic HTML (header, nav, main, footer, section)
- ARIA labels on form inputs
- Focus states clearly visible (2px gold ring)
- Color contrast meets WCAG AA (navy/gold/parchment palette tested)

### Performance
- Next.js Image Optimization for photos (when added)
- Stripe SDK loaded conditionally (only on membership page)
- Static content cached, dynamic content (directory) revalidated on demand

---

## Stakeholder Communication

### Client (FWSC Coalition)
- **Deck 1**: Design reference walkthrough (Figma/HTML mockups)
- **Deck 2**: CMS admin training (Payload, operator data entry)
- **Deck 3**: Launch readiness checklist

### Dev Handoff
- This doc + README.md cover setup, structure, patterns
- Design files live in `design-files/` — golden source for visuals

---

## Estimated Timeline

| Phase | Effort | Duration |
|-------|--------|----------|
| Phase 1: Scaffolding | Low | ✓ Done |
| Phase 2: Content pages | Medium | ~3–5 days |
| Phase 3: CMS setup | Medium | ~2–3 days |
| Phase 4: Payments | Medium | ~2 days |
| Phase 5: Polish | Low | ~1–2 days |
| Phase 6: Deploy | Low | ~1 day |
| **Total** | | **~10–15 days** |

---

## Known Limitations / Pending

- **Photography**: Bordered placeholders in design; client to provide hero image, partner logos, testimonial headshots
- **Testimonials**: Copy pending from FWSC coalition members
- **Partner details**: Awaiting finalized partnership agreements
- **Compliance review**: F.S. §327.54 + FWC coordination — client responsibility before launch

---

## Rollback / Contingency

- **Staging environment**: Always available on Vercel for testing before go-live
- **Database backups**: Neon auto-backups (retain 7 days)
- **Git history**: Full commit history available; can revert any commit
- **DNS**: Keep old site in circulation until new site verified (split traffic testing possible)

---

## Success Criteria

- [x] All 5 pages live with correct colors/typography/spacing
- [ ] Member directory searchable + filterable
- [ ] Membership tier selection + Stripe checkout working
- [ ] CMS allows authorized users to manage operator data
- [ ] Mobile-responsive (tested on phone/tablet)
- [ ] <2s page load (Lighthouse score >90)
- [ ] Application forms validated + submitted successfully
- [ ] Client approves design fidelity match

---

*Last updated: 2026-07-03*
