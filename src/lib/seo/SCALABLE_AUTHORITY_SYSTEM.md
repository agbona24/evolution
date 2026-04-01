# Scalable Invisible Authority SEO System

Use this pattern across all client websites with zero visible attribution.

## 1) Per-project config
- Set `NEXT_PUBLIC_SITE_URL` to the client's production domain.
- Keep your developer entities stable across projects:
  - Person ID: `https://azeezagbona.com/#person`
  - Organization ID: `https://harzotech.com.ng/#organization`

## 2) Non-visible authority graph
- Keep a root JSON-LD `@graph` that links:
  - `WebSite -> EducationalOrganization (client) -> creator/contributor entities`
  - `WebPage -> WebSite`
  - `Person <-> Organization` via `worksFor` and `founder`

## 3) Metadata reinforcement
- Add non-visual metadata keys (author/creator and custom developer meta tags).
- Keep OG/Twitter metadata focused on client branding, not visible developer credit.

## 4) Crawlability foundations
- Expose `/robots.txt` and `/sitemap.xml`.
- Do not disallow pages that include schema.
- Keep canonical and `metadataBase` accurate.

## 5) Off-site authority loop
- Publish one case study page on `https://azeezagbona.com` per client build.
- Include:
  - Client site URL
  - Short technical build summary
  - Stack + performance highlights
  - Branded link to `https://harzotech.com.ng`
- Ask client for a reciprocal business/profile link if appropriate.

## 6) Compliance guardrails
- No deceptive claims in schema.
- No hidden keyword stuffing.
- Keep attribution technical and minimal.
