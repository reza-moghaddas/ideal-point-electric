# Ideal Point Electric — Next.js starter

Responsive, mobile-first App Router site based on the supplied wireframe, with English/French routing, SEO metadata, canonical URLs, JSON-LD LocalBusiness/Electrician schema, and Vancouver-area service targeting.

## Run

```bash
npm install
npm run dev
```

## Replace placeholder images

Put the final photography in `public/images/` using these names:
`hero.jpg`, `residential.jpg`, `commercial.jpg`, `multifamily.jpg`, `rolex.jpg`, `tudor.jpg`, `west-vancouver.jpg`, `coquitlam.jpg`, `vancouver.jpg`.

## Production SEO/GEO checklist

- Set `metadataBase` and canonical URLs to the real domain.
- Add `app/sitemap.ts` and `app/robots.ts` for production crawling.
- Add Google Business Profile, Bing Places, and Apple Business Connect.
- Add real NAP data (name/address/phone) consistently across site and directories.
- Create individual service/project/location pages with unique copy, internal links and structured data.
- Add real testimonials, licenses, project details and organization credentials.
- Connect the quote form to an API/email provider instead of `mailto:`.
