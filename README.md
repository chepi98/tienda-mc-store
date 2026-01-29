# tienda-mc-store
Tienda web para MC Store con Next.js y Sanity

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Estado del proyecto (Enero 2026)

### Avances principales
- Home con hero, galeria, categorias, testimonios, FAQs y CTA.
- Slideshow en hero (cambia imagen cada 10s con fade suave).
- Botones de WhatsApp con link actualizado y estilo premium.
- Redes sociales con iconos (Instagram, Facebook, TikTok).
- Paginas de categorias con contenido premium de ejemplo.
- Imagenes renombradas y organizadas por categoria.
- SEO basico configurado (Open Graph, Twitter, robots, icono).

### Pendientes
- Cargar contenido real (productos, textos finales).
- Revisar detalles visuales finales si el cliente desea cambios.
- Hosting y deploy final (Vercel u otro).

### Progreso estimado
- Diseno/UI: ~90%
- Contenido real: ~50%
- SEO basico: ~70%
- Deploy: ~0-20%

## Tecnologia y sistemas

- Framework: Next.js 16 (App Router)
- Lenguaje: TypeScript + React
- Estilos: Tailwind CSS
- CMS (opcional): Sanity (si se activa mas adelante)
- Hosting recomendado: Vercel

## Como cambiar imagenes rapido

Las imagenes de ejemplo estan en `public/imagenes` con nombres claros:

- Home: `home-hero.jpg`, `home-gallery-1..6.jpg`
- Vitaminas: `vitaminas-1..6.jpg`
- Skincare: `skincare-1..6.jpg`
- Ropa: `ropa-1..6.jpg`
- Pedidos especiales: `especiales-1..6.jpg`
- Gamer (opcional): `gamer-1..6.jpg`

Solo reemplaza el archivo con el mismo nombre y se actualiza en la web.
Los originales estan guardados en `public/imagenes/_original`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
