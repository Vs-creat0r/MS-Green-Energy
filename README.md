# MS Green Solar - Website

A high-performance lead generation website for MS Green Solar built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Vercel + Cloudflare

## Quick Start

### 1. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. In the SQL Editor, run:

```sql
-- Create leads table
CREATE TABLE "Visitor_Leads" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  zip_code TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE "Visitor_Leads" ENABLE ROW LEVEL SECURITY;

-- Public can insert leads
CREATE POLICY "Public can insert leads"
  ON "Visitor_Leads"
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can read leads
CREATE POLICY "Authenticated users can read leads"
  ON "Visitor_Leads"
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create storage bucket for admin documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('Admin_Documents', 'Admin_Documents', false);

-- Storage policies - only authenticated users
CREATE POLICY "Authenticated can upload documents"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'Admin_Documents' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated can read documents"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'Admin_Documents' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated can delete documents"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'Admin_Documents' AND auth.role() = 'authenticated');
```

3. Go to **Authentication > Settings** and optionally disable "Confirm email" for admin users (since you'll create them manually).

4. Go to **Authentication > Users** and create an admin user (this is who logs into `/admin`).

5. Copy your **Project URL** and **anon public key** from **Project Settings > API**.

### 2. Environment Variables

Edit `.env.local` and replace the placeholder values:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage (all sections)
│   ├── actions.ts          # Server actions (lead form)
│   ├── globals.css         # Tailwind imports
│   ├── admin/
│   │   ├── layout.tsx     # Admin layout
│   │   ├── page.tsx       # Dashboard (leads + docs)
│   │   └── login/
│   │       └── page.tsx   # Admin login
│   ├── privacy/
│   │   └── page.tsx       # Privacy Policy
│   └── terms/
│       └── page.tsx        # Terms of Service
├── components/
│   ├── Header.tsx         # Sticky nav + quote CTA
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx     # Hero with stats
│   ├── AboutSection.tsx    # Company milestones
│   ├── ServicesSection.tsx # Service cards
│   ├── TrustSection.tsx    # Why us + ratings
│   ├── FAQSection.tsx      # Accordion FAQs
│   ├── LeadForm.tsx        # Lead capture form
│   ├── LeadsTable.tsx      # Admin leads table
│   └── DocumentManager.tsx  # Admin file uploads
├── utils/
│   └── supabase/
│       ├── client.ts       # Browser client
│       └── server.ts       # Server client
└── types/
    └── database.ts         # (Replace with generated types later)
```

## Deployment

1. Push code to GitHub.
2. Connect repo to [Vercel](https://vercel.com).
3. Add environment variables in Vercel project settings.
4. Deploy — Vercel auto-builds on every push.
5. Purchase domain `msgreensolar.com` and point DNS to Cloudflare.
6. Add Cloudflare proxy for SSL + DDoS protection.

## Features

- **Public Site**: Hero, About, Services, Trust/Why Us, FAQ, Lead Form
- **Lead Capture**: Validated form with Server Actions, writes to Supabase
- **Admin Portal**: Protected by Supabase Auth middleware
- **Leads Dashboard**: View/sort/export leads as CSV
- **Document Manager**: Upload/download/delete company docs (500MB+ storage)
- **Mobile Responsive**: Sticky header with hamburger menu
- **Type Safe**: Full TypeScript with Zod validation
