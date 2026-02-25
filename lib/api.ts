// Marketplace API layer
// Currently uses mock data for static export.
// When ready, switch to real API calls and remove `output: 'export'` from next.config.ts for ISR.

const API_URL = process.env.NEXT_PUBLIC_KNOBASE_API_URL ?? "https://app.knobase.com";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.knobase.com";

// ─── Types ───────────────────────────────────────────────────────────

export interface TemplateCreator {
  name: string;
  avatar_url: string;
}

export interface TemplateReview {
  id: string;
  author: string;
  rating: number;
  body: string;
  date: string;
}

export interface Template {
  slug: string;
  name: string;
  short_description: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  rating: number;
  review_count: number;
  thumbnail_url: string;
  screenshots: string[];
  creator: TemplateCreator;
  agents_count: number;
  docs_count: number;
  workflows_count: number;
  featured: boolean;
  trending: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

// ─── Mock Data ───────────────────────────────────────────────────────

const MOCK_CATEGORIES: Category[] = [
  { slug: "marketing", name: "Marketing", description: "Content, SEO, and social media templates", icon: "📣", count: 24 },
  { slug: "development", name: "Development", description: "Code review, DevOps, and engineering templates", icon: "💻", count: 18 },
  { slug: "data", name: "Data & Analytics", description: "Data analysis, reporting, and visualization", icon: "📊", count: 15 },
  { slug: "design", name: "Design", description: "Design systems, UI kits, and brand guides", icon: "🎨", count: 12 },
  { slug: "sales", name: "Sales", description: "Lead gen, CRM, and outreach templates", icon: "💼", count: 20 },
  { slug: "legal", name: "Legal", description: "Contract review, compliance, and policy templates", icon: "⚖️", count: 9 },
  { slug: "hr", name: "HR & People", description: "Hiring, onboarding, and team management", icon: "👥", count: 11 },
  { slug: "productivity", name: "Productivity", description: "Task management, note-taking, and planning", icon: "⚡", count: 22 },
];

const MOCK_TEMPLATES: Template[] = [
  {
    slug: "seo-content-agent",
    name: "SEO Content Agent Team",
    short_description: "Automate your entire content pipeline — from keyword research to published articles.",
    description: `A complete SEO content system powered by AI agents that work together to produce high-quality, search-optimized content at scale.\n\n## What's included\n\n- **Keyword Research Agent** — Identifies high-value keywords with traffic potential and low competition.\n- **Content Writer Agent** — Drafts long-form articles using your brand voice and SEO best practices.\n- **Editor Agent** — Reviews, fact-checks, and polishes drafts before publishing.\n- **15 document templates** — Briefs, outlines, style guides, and editorial calendars.\n- **2 automated workflows** — End-to-end content pipeline and weekly content audits.\n\n## Who it's for\n\nContent teams, SEO agencies, and solo marketers who want to scale output without sacrificing quality.`,
    category: "marketing",
    price: 49,
    currency: "USD",
    rating: 4.9,
    review_count: 234,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Sarah Chen", avatar_url: "" },
    agents_count: 3,
    docs_count: 15,
    workflows_count: 2,
    featured: true,
    trending: true,
    tags: ["seo", "content", "marketing", "automation"],
    created_at: "2025-11-15",
    updated_at: "2026-02-10",
  },
  {
    slug: "legal-contract-reviewer",
    name: "Legal Contract Reviewer",
    short_description: "AI-powered contract analysis with clause extraction, risk scoring, and redline suggestions.",
    description: `Streamline contract review with an agent that reads, analyses, and flags issues in legal documents.\n\n## What's included\n\n- **Contract Analyzer Agent** — Parses contracts and extracts key clauses, dates, and obligations.\n- **Risk Scorer Agent** — Evaluates risk levels for non-standard or missing clauses.\n- **Redline Suggestion Agent** — Proposes alternative language aligned with your standards.\n- **8 document templates** — Playbooks, clause libraries, and approval checklists.\n- **1 workflow** — Automated intake-to-review pipeline.\n\n## Who it's for\n\nLegal teams, startup founders, and procurement professionals.`,
    category: "legal",
    price: 99,
    currency: "USD",
    rating: 4.8,
    review_count: 89,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Marcus Rivera", avatar_url: "" },
    agents_count: 3,
    docs_count: 8,
    workflows_count: 1,
    featured: true,
    trending: true,
    tags: ["legal", "contracts", "compliance"],
    created_at: "2025-12-01",
    updated_at: "2026-01-28",
  },
  {
    slug: "social-media-manager",
    name: "Social Media Manager",
    short_description: "Plan, create, and schedule social content across platforms with AI assistance.",
    description: `A social media command center that helps you maintain a consistent presence across all channels.\n\n## What's included\n\n- **Content Planner Agent** — Generates weekly content calendars based on trends and your brand.\n- **Copywriter Agent** — Writes platform-specific posts tailored for engagement.\n- **10 document templates** — Content calendars, brand voice guides, and analytics reports.\n- **2 workflows** — Weekly planning cycle and engagement monitoring.\n\n## Who it's for\n\nSocial media managers, brand marketers, and agency teams.`,
    category: "marketing",
    price: 29,
    currency: "USD",
    rating: 4.7,
    review_count: 156,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Jamie Nguyen", avatar_url: "" },
    agents_count: 2,
    docs_count: 10,
    workflows_count: 2,
    featured: false,
    trending: true,
    tags: ["social-media", "content", "marketing"],
    created_at: "2025-10-20",
    updated_at: "2026-02-01",
  },
  {
    slug: "data-analyst-toolkit",
    name: "Data Analyst Toolkit",
    short_description: "Transform raw data into insights with automated analysis, visualization, and reporting.",
    description: `Everything a data analyst needs to go from raw data to executive-ready reports.\n\n## What's included\n\n- **Data Explorer Agent** — Profiles datasets, finds anomalies, and suggests analyses.\n- **Visualization Agent** — Creates charts and dashboards from your data.\n- **Report Writer Agent** — Generates narrative reports with key findings.\n- **12 document templates** — Analysis frameworks, report templates, and data dictionaries.\n- **2 workflows** — Automated weekly reports and ad-hoc analysis pipeline.\n\n## Who it's for\n\nData analysts, business intelligence teams, and data-driven managers.`,
    category: "data",
    price: 39,
    currency: "USD",
    rating: 4.8,
    review_count: 112,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Alex Park", avatar_url: "" },
    agents_count: 3,
    docs_count: 12,
    workflows_count: 2,
    featured: true,
    trending: false,
    tags: ["data", "analytics", "visualization", "reporting"],
    created_at: "2025-09-10",
    updated_at: "2026-01-15",
  },
  {
    slug: "code-review-assistant",
    name: "Code Review Assistant",
    short_description: "Automated code reviews with best-practice enforcement, security scanning, and improvement suggestions.",
    description: `Speed up code reviews without sacrificing quality or security.\n\n## What's included\n\n- **Code Reviewer Agent** — Analyses PRs for bugs, performance issues, and style violations.\n- **Security Scanner Agent** — Identifies vulnerabilities and suggests fixes.\n- **6 document templates** — Review checklists, coding standards, and architecture decision records.\n- **1 workflow** — Automated PR review pipeline.\n\n## Who it's for\n\nEngineering teams, tech leads, and solo developers.`,
    category: "development",
    price: 29,
    currency: "USD",
    rating: 4.7,
    review_count: 198,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Jordan Mills", avatar_url: "" },
    agents_count: 2,
    docs_count: 6,
    workflows_count: 1,
    featured: true,
    trending: false,
    tags: ["code-review", "development", "security"],
    created_at: "2025-08-25",
    updated_at: "2026-02-05",
  },
  {
    slug: "design-system-builder",
    name: "Design System Builder",
    short_description: "Create and maintain a living design system with token generation and component documentation.",
    description: `Build a cohesive design system that stays in sync across design and engineering.\n\n## What's included\n\n- **Token Generator Agent** — Generates design tokens from your brand guidelines.\n- **Component Documenter Agent** — Creates living documentation for UI components.\n- **Documentation Writer Agent** — Maintains usage guidelines and best-practice docs.\n- **14 document templates** — Color palettes, typography scales, spacing systems, and component specs.\n- **1 workflow** — Automated design audit and token sync.\n\n## Who it's for\n\nDesign teams, design engineers, and product teams.`,
    category: "design",
    price: 49,
    currency: "USD",
    rating: 4.9,
    review_count: 87,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Mia Thompson", avatar_url: "" },
    agents_count: 3,
    docs_count: 14,
    workflows_count: 1,
    featured: true,
    trending: false,
    tags: ["design", "design-system", "tokens", "documentation"],
    created_at: "2025-11-01",
    updated_at: "2026-01-20",
  },
  {
    slug: "sales-outreach-engine",
    name: "Sales Outreach Engine",
    short_description: "Personalised outreach at scale — research prospects, craft messages, and track engagement.",
    description: `Turn cold outreach into warm conversations with AI-powered personalisation.\n\n## What's included\n\n- **Prospect Researcher Agent** — Gathers intel on leads from public sources.\n- **Message Crafter Agent** — Writes personalised emails and LinkedIn messages.\n- **8 document templates** — Email sequences, objection handlers, and CRM playbooks.\n- **2 workflows** — Outreach cadence automation and lead scoring.\n\n## Who it's for\n\nSDRs, account executives, and sales teams.`,
    category: "sales",
    price: 59,
    currency: "USD",
    rating: 4.6,
    review_count: 143,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "David Kim", avatar_url: "" },
    agents_count: 2,
    docs_count: 8,
    workflows_count: 2,
    featured: false,
    trending: false,
    tags: ["sales", "outreach", "crm", "lead-gen"],
    created_at: "2025-10-05",
    updated_at: "2026-02-15",
  },
  {
    slug: "hiring-pipeline",
    name: "Hiring Pipeline Manager",
    short_description: "Streamline your hiring process from job posting to offer letter with AI assistance.",
    description: `A complete hiring toolkit that helps you find, evaluate, and close candidates faster.\n\n## What's included\n\n- **Job Description Writer Agent** — Creates compelling, inclusive job postings.\n- **Resume Screener Agent** — Evaluates applications against your requirements.\n- **10 document templates** — Scorecards, interview guides, and offer templates.\n- **1 workflow** — End-to-end candidate pipeline automation.\n\n## Who it's for\n\nHR teams, hiring managers, and recruiters.`,
    category: "hr",
    price: 39,
    currency: "USD",
    rating: 4.5,
    review_count: 67,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Priya Patel", avatar_url: "" },
    agents_count: 2,
    docs_count: 10,
    workflows_count: 1,
    featured: false,
    trending: false,
    tags: ["hr", "hiring", "recruiting"],
    created_at: "2025-12-10",
    updated_at: "2026-02-20",
  },
  {
    slug: "meeting-notes-automator",
    name: "Meeting Notes Automator",
    short_description: "Automatically capture, summarise, and distribute meeting notes with action items.",
    description: `Never miss an action item again. This template automates your entire meeting documentation workflow.\n\n## What's included\n\n- **Note Taker Agent** — Captures and organises meeting discussions in real-time.\n- **Action Tracker Agent** — Extracts and assigns action items with deadlines.\n- **7 document templates** — Meeting agendas, minutes, and weekly summaries.\n- **1 workflow** — Post-meeting distribution and follow-up automation.\n\n## Who it's for\n\nProject managers, team leads, and anyone drowning in meetings.`,
    category: "productivity",
    price: 19,
    currency: "USD",
    rating: 4.8,
    review_count: 312,
    thumbnail_url: "",
    screenshots: [],
    creator: { name: "Chris Lee", avatar_url: "" },
    agents_count: 2,
    docs_count: 7,
    workflows_count: 1,
    featured: false,
    trending: true,
    tags: ["meetings", "productivity", "notes", "automation"],
    created_at: "2025-07-15",
    updated_at: "2026-02-22",
  },
];

const MOCK_REVIEWS: Record<string, TemplateReview[]> = {
  "seo-content-agent": [
    { id: "r1", author: "Lisa M.", rating: 5, body: "Saved me 10 hours a week. The content pipeline just works.", date: "2026-01-15" },
    { id: "r2", author: "Tom B.", rating: 5, body: "Best workflow I've found for scaling content. The agents collaborate beautifully.", date: "2026-01-02" },
    { id: "r3", author: "Nadia K.", rating: 5, body: "Our organic traffic doubled in 3 months after setting this up.", date: "2025-12-20" },
    { id: "r4", author: "Ryan P.", rating: 4, body: "Great foundation — customised the writer agent's voice and it's perfect now.", date: "2025-12-05" },
  ],
  "legal-contract-reviewer": [
    { id: "r5", author: "Amy L.", rating: 5, body: "Caught a liability clause our team missed. Already paid for itself.", date: "2026-02-01" },
    { id: "r6", author: "Daniel S.", rating: 5, body: "Reduced our contract review time from days to hours.", date: "2026-01-18" },
  ],
  "social-media-manager": [
    { id: "r7", author: "Kara J.", rating: 5, body: "Finally, a tool that understands platform-specific content.", date: "2026-01-25" },
    { id: "r8", author: "Ben C.", rating: 4, body: "The content calendar alone is worth the price.", date: "2026-01-10" },
  ],
};

// ─── Fetchers ────────────────────────────────────────────────────────

/**
 * Fetch all published templates.
 * Switch the body to a real fetch when the API is available.
 */
export async function getTemplates(options?: {
  category?: string;
  sort?: string;
  search?: string;
  limit?: number;
}): Promise<Template[]> {
  // TODO: Replace with real API call:
  // const res = await fetch(`${API_URL}/api/marketplace/public/packs`, { next: { revalidate: 60 } });
  // return res.json();

  let results = [...MOCK_TEMPLATES];

  if (options?.category) {
    results = results.filter((t) => t.category === options.category);
  }

  if (options?.search) {
    const q = options.search.toLowerCase();
    results = results.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.short_description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.includes(q))
    );
  }

  if (options?.sort) {
    switch (options.sort) {
      case "newest":
        results.sort((a, b) => b.created_at.localeCompare(a.created_at));
        break;
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      default: // popular
        results.sort((a, b) => b.review_count - a.review_count);
    }
  }

  if (options?.limit) {
    results = results.slice(0, options.limit);
  }

  return results;
}

/**
 * Fetch a single template by slug.
 */
export async function getTemplate(slug: string): Promise<Template | null> {
  // TODO: Replace with real API call:
  // const res = await fetch(`${API_URL}/api/marketplace/public/packs/${slug}`, { next: { revalidate: 60 } });
  // return res.json();

  return MOCK_TEMPLATES.find((t) => t.slug === slug) ?? null;
}

/**
 * Fetch reviews for a template.
 */
export async function getTemplateReviews(slug: string): Promise<TemplateReview[]> {
  return MOCK_REVIEWS[slug] ?? [];
}

/**
 * Fetch all categories.
 */
export async function getCategories(): Promise<Category[]> {
  // TODO: Replace with real API call
  return MOCK_CATEGORIES;
}

/**
 * Fetch templates for a given category slug.
 */
export async function getTemplatesByCategory(categorySlug: string): Promise<Template[]> {
  return getTemplates({ category: categorySlug });
}

/**
 * Build the CTA URL that redirects to the app import flow.
 */
export function getImportUrl(slug: string): string {
  return `${APP_URL}/import/${slug}`;
}
