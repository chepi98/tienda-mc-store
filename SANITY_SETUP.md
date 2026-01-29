# Sanity CMS Setup (Macashopper)

## 1) Crear proyecto en Sanity
- Crea un proyecto en https://www.sanity.io/
- Guarda el projectId y dataset (por ejemplo production)

## 2) Variables de entorno (Next.js)
Crea un archivo .env.local en la raiz:

NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_SANITY_PROJECT_ID=tuProjectId
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=tuTokenLectura
SANITY_API_WRITE_TOKEN=tuTokenEscritura
NEXT_PUBLIC_WHATSAPP_NUMBER=573001112233

## 3) Levantar el Studio

npm install
npm run sanity

El Studio abre en http://localhost:3333/studio

## 4) Contenido editable
- Settings (hero, badges, trust points, how it works, CTA, WhatsApp, redes)
- Categorias (featured y orden)
- Productos
- Testimonios
- FAQs
- Paginas
- Newsletter (emails suscritos)

## 5) Deploy
- Frontend: Vercel o Cloudflare
- Sanity: npm run sanity:deploy

Conecta las variables de entorno en tu hosting.
