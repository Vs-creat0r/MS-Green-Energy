# MS Green Solar - Project Context for Claude Code

## MODE: Swarm Mode is DEFAULT
For ANY non-trivial task (2+ files, new feature, refactor), automatically decompose into parallel agents.
See `.claude/swarm.md` for patterns and rules.

## Design System: "The Living Canvas"

**Philosophy**: Organic, editorial layouts. No rigid grids. Asymmetric, breathing whitespace.

### Color Palette (use these hex values in Tailwind classes via tailwind.config)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#4d6546` | Sage green - headings, CTAs, icons |
| `primary-container` | `#839d7a` | Light sage - hover states, gradients |
| `secondary` | `#ffdd67` | Sunlit yellow - CTAs, accents |
| `secondary-container` | `#ffe17a` | Bright yellow - badges, highlights |
| `surface` | `#faf9f5` | Warm off-white - page backgrounds |
| `surface-container-lowest` | `#ffffff` | Pure white - cards that pop |
| `surface-container-low` | `#f4f4f0` | Light warm gray - section alternation |
| `surface-container` | `#efeeea` | Warm gray - nested containers |
| `surface-container-high` | `#e9e8e4` | Medium gray - input backgrounds |
| `surface-container-highest` | `#e3e2df` | Dark warm gray - alternate rows |
| `on-surface` | `#1b1c1a` | Near-black text (NEVER use #000) |
| `on-primary` | `#ffffff` | White text on primary |
| `on-secondary` | `#ffffff` | White text on secondary |
| `outline-variant` | `#c4c8bd` | Ghost borders at 15% opacity |
| `error` | `#ba1a1a` | Error states |
| `error-container` | `#ffdad6` | Error backgrounds |

### Typography
- **Headlines/Display**: Plus Jakarta Sans (`font-headline` class)
- **Body/Labels**: Manrope (`font-body`, `font-label` classes)
- Hero: `text-display-lg` (3.5rem) tight tracking
- Body: `text-body-lg` (1.125rem) for long-form

### The "No-Line Rule"
- **NEVER use borders** for sectioning (no `border`, `border-b`, etc.)
- Use **tonal shifts**: `surface` → `surface-container-low` → `surface-container`
- Use **vertical whitespace**: 80px-120px `py-20` to `py-32` between sections
- Use **soft geometry**: `rounded-[2rem]` for cards, `rounded-full` for buttons

### Border Radius Tokens
- Cards/Sections: `rounded-[2rem]` (xl=1.5rem in Tailwind)
- Buttons: `rounded-full` (pill-shaped)
- Inputs: `rounded-xl` (0.75rem)

### Elevation
- Shadows tinted with `on-surface` at 5% opacity: `shadow-[0_8px_32px_-4px_rgba(27,28,26,0.05)]`
- Floating elements: `backdrop-blur-md` with 70% opacity backgrounds

## Project Architecture

### Directory Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout - fonts, metadata
│   ├── page.tsx            # Homepage (composes all sections)
│   ├── globals.css         # Tailwind imports
│   ├── actions.ts          # Server Actions (lead form)
│   ├── middleware.ts       # Auth protection for /admin
│   ├── admin/
│   │   ├── layout.tsx     # Admin layout (no Header/Footer)
│   │   ├── page.tsx       # Dashboard (leads + docs)
│   │   └── login/
│   │       └── page.tsx   # Admin login
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Header.tsx         # Sticky nav + glass morphism
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx     # Full-screen hero with image
│   ├── AboutSection.tsx    # Milestones + mission
│   ├── ServicesSection.tsx # Bento grid of service cards
│   ├── ServiceCard.tsx     # Individual service card
│   ├── TrustSection.tsx    # Why us + ratings
│   ├── ImageDivider.tsx    # CTA divider with background
│   ├── FAQSection.tsx      # Accordion FAQs
│   ├── LeadForm.tsx        # Lead capture form
│   ├── LeadsTable.tsx     # Admin leads table
│   └── DocumentManager.tsx # Admin file uploads
├── utils/supabase/
│   ├── client.ts           # Browser client (use in "use client" components)
│   └── server.ts           # Server client (use in Server Actions)
└── types/
    └── database.ts         # Supabase types (regenerate with CLI)
```

### Component Hierarchy
```
layout.tsx (RootLayout)
└── page.tsx (HomePage)
    ├── Header (sticky, glass morphism)
    ├── main
    │   ├── HeroSection (full-screen, image bg)
    │   ├── AboutSection (milestones, mission)
    │   ├── ServicesSection (bento grid)
    │   │   └── ServiceCard (image, icon, text)
    │   ├── TrustSection (why us, ratings)
    │   ├── ImageDivider (CTA with bg)
    │   ├── FAQSection (accordion)
    │   └── LeadForm (form with Supabase action)
    └── Footer
```

### Data Flow
- **Public form**: `LeadForm.tsx` → `actions.ts` (server action) → Supabase `Visitor_Leads` table
- **Admin auth**: `login/page.tsx` → Supabase Auth → middleware.ts checks session
- **Admin leads**: `LeadsTable.tsx` (client) → Supabase browser client → `Visitor_Leads` SELECT
- **Admin docs**: `DocumentManager.tsx` (client) → Supabase storage `Admin_Documents` bucket

### Image Pattern
- Use `next/image` with `fill` + `object-cover` for section backgrounds
- Unsplash URLs for stock photos (configured in `next.config.js`)
- Quality: 70-85 for hero, 60-75 for cards
- Always add `alt` text for accessibility

### Mobile Responsiveness Rules
- **Navigation**: Hamburger menu on mobile (`md:` breakpoint = 768px)
- **Grids**: `grid-cols-1` → `md:grid-cols-2` or `lg:grid-cols-3`
- **Text**: `text-3xl md:text-4xl lg:text-5xl` (fluid scaling)
- **Padding**: `px-4 sm:px-6 lg:px-8` (fluid horizontal)
- **Touch targets**: Minimum 44x44px (use `px-4 py-3` or larger)
- **Forms**: Stack vertically on mobile, side-by-side on desktop

## Quick Component Reference

| Component | File | Client/Server | Key Patterns |
|-----------|------|----------------|----------------|
| Header | `src/components/Header.tsx` | "use client" | Sticky, glass, mobile menu |
| HeroSection | `src/components/HeroSection.tsx` | "use client" | Image fill, gradient overlay |
| ServiceCard | `src/components/ServiceCard.tsx` | "use client" | Group hover, image zoom |
| FAQSection | `src/components/FAQSection.tsx` | "use client" | useState accordion |
| LeadForm | `src/components/LeadForm.tsx` | "use client" | useActionState, Zod validation |
| LeadsTable | `src/components/LeadsTable.tsx` | "use client" | useEffect, Supabase SELECT |
| DocumentManager | `src/components/DocumentManager.tsx` | "use client" | File upload, storage API |

## Environment Variables (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Supabase Setup SQL
```sql
CREATE TABLE "Visitor_Leads" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  zip_code TEXT NOT NULL
);
ALTER TABLE "Visitor_Leads" ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can insert leads" ON "Visitor_Leads" FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated can read leads" ON "Visitor_Leads" FOR SELECT USING (auth.role() = 'authenticated');
INSERT INTO storage.buckets (id, name, public) VALUES ('Admin_Documents', 'Admin_Documents', false);
```
