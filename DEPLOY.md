# Deploy guide

## Frontend (Vercel)
1) Push repo to GitHub.
2) Import in Vercel.
3) Set env vars:

NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_SANITY_PROJECT_ID=tuProjectId
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=tuTokenLectura
SANITY_API_WRITE_TOKEN=tuTokenEscritura
NEXT_PUBLIC_WHATSAPP_NUMBER=573001112233

4) Deploy.

## Sanity Studio
- Run `npm run sanity:deploy` in the project root.
- Set the same SANITY projectId/dataset in Sanity.

## DNS
- Point domain to Vercel.
- Update NEXT_PUBLIC_SITE_URL with your real domain.

## Post deploy checks
- Lighthouse (mobile) for Core Web Vitals.
- Validate sitemap: /sitemap.xml
- Validate robots: /robots.txt
- Test WhatsApp CTA and contact form.
- Test newsletter signup creates a record in Sanity.
