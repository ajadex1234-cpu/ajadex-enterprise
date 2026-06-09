# AJADEX Website Content Map

Use this file when replacing placeholders with real proof before launch.

## Real Website Screenshots

Add tall full-page screenshots here:

- `public/portfolio/prosupps/fullpage.webp`
- `public/portfolio/prosupps/mobile.webp`
- `public/portfolio/gymshark/fullpage.webp`

The website currently uses existing local placeholder images for the ProSupps
and Gymshark reference cards so the live site does not show broken images.
After adding real screenshots, update those paths in:

- `src/data/portfolio/shopify-stores.ts`

If those brands are not AJADEX client projects, keep them as `kind: "concept"`
or replace them with your own client/demo project folders.

## Real Case Studies

Current real case studies live in:

- `src/data/case-studies/items.ts`

Add each new project with:

- client name
- industry
- challenge
- solution
- results
- deliverables
- live link
- image path

## Testimonials

Testimonials should be edited in:

- `src/data/testimonials.ts`

Recommended proof to add:

- client name
- what AJADEX did
- client quote
- client business link
- screenshot or logo if available

## Home Page Highlights

Homepage featured work is controlled here:

- `src/data/home.ts`

Replace any demo/reference item with real project proof once you have:

- project screenshot
- project title
- project category
- short result sentence

## Work Page Portfolio

Portfolio cards are controlled here:

- `src/data/portfolio/shopify-stores.ts`
- `src/data/portfolio/items.ts`

Use `kind: "client"` for real AJADEX work.
Use `kind: "concept"` for references, demos, or practice work.

## Proof Images

Current proof images live here:

- `public/testimonials/google-ads-dashboard.png`
- `public/testimonials/humidifier-landing-page.png`

Add future proof images under:

- `public/testimonials/`

Use clear names like:

- `client-name-website-fullpage.webp`
- `client-name-ads-dashboard.png`
- `client-name-landing-page.webp`
