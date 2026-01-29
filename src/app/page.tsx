import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { SoftCard, TestimonialCard, FaqItem } from "@/components/Cards";
import SocialLinks from "@/components/SocialLinks";
import NewsletterForm from "@/components/NewsletterForm";
import HeroSlideshow from "@/components/HeroSlideshow";
import {
  brand,
  ctaContent,
  faqs,
  heroBadges,
  howItWorksSteps,
  testimonials,
  trustPoints,
  categoryHighlights,
} from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { sanityFetch } from "@/lib/sanity";

type Settings = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroBadges?: string[];
  trustPoints?: { title?: string; description?: string }[];
  howItWorks?: { title?: string; description?: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
};

type CategoryRecord = {
  title?: string;
  description?: string;
  slug?: string;
  featured?: boolean;
  order?: number;
};

type TestimonialRecord = {
  name: string;
  role: string;
  quote: string;
};

type FaqRecord = {
  question: string;
  answer: string;
};

export default async function Home() {
  const settings = await sanityFetch<Settings>(
    "*[_type == 'settings'][0]{heroTitle, heroSubtitle, heroBadges, trustPoints[]{title, description}, howItWorks[]{title, description}, ctaTitle, ctaSubtitle}",
  );
  const categories = await sanityFetch<CategoryRecord[]>(
    "*[_type == 'category']|order(order asc, title asc){title, description, featured, order, 'slug': slug.current}",
  );
  const testimonialsData = await sanityFetch<TestimonialRecord[]>(
    "*[_type == 'testimonial']|order(_createdAt desc)[0..2]{name, role, quote}",
  );
  const faqsData = await sanityFetch<FaqRecord[]>(
    "*[_type == 'faq']|order(_createdAt desc)[0..5]{question, answer}",
  );

  const heroTitle =
    settings?.heroTitle ??
    "Macashopper: tu personal shopper de confianza.";
  const heroSubtitle =
    settings?.heroSubtitle ??
    "Vitaminas, skincare, ropa y más con productos 100% originales, atención personalizada y envíos seguros en Cali y Jamundí.";
  const badgeList =
    settings?.heroBadges && settings.heroBadges.length
      ? settings.heroBadges
      : heroBadges;
  const trustList =
    settings?.trustPoints && settings.trustPoints.length
      ? settings.trustPoints.map((point) => ({
          title: point.title ?? "",
          description: point.description ?? "",
        }))
      : trustPoints;
  const steps =
    settings?.howItWorks && settings.howItWorks.length
      ? settings.howItWorks.map((step) => ({
          title: step.title ?? "",
          description: step.description ?? "",
        }))
      : howItWorksSteps;
  const ctaTitle = settings?.ctaTitle ?? ctaContent.title;
  const ctaSubtitle = settings?.ctaSubtitle ?? ctaContent.subtitle;

  const featuredCategories = categories?.filter((item) => item.featured);
  const categoryList =
    featuredCategories && featuredCategories.length
      ? featuredCategories
      : categories && categories.length
        ? categories
        : categoryHighlights;

  const homepageTestimonials =
    testimonialsData && testimonialsData.length ? testimonialsData : testimonials;
  const homepageFaqs = faqsData && faqsData.length ? faqsData : faqs;
  const galleryImages = [
    "/imagenes/home-gallery-1.jpg",
    "/imagenes/home-gallery-2.jpg",
    "/imagenes/home-gallery-3.jpg",
    "/imagenes/home-gallery-4.jpg",
    "/imagenes/home-gallery-5.jpg",
    "/imagenes/home-gallery-6.jpg",
  ];

  return (
    <div className="pb-24">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-12 pt-20 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6 fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-accent">
            Personal Shopper Premium
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="max-w-2xl text-base text-ink-soft md:text-lg leading-relaxed">
            {heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            {badgeList.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-line/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 fade-up fade-up-2">
            <Link
              href={getWhatsAppUrl()}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_16px_40px_rgba(15,15,15,0.22)] transition hover:-translate-y-0.5 hover:bg-ink/90"
            >
              Pedir por WhatsApp
            </Link>
            <Link
              href="#redes"
              className="rounded-full border border-line/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-accent"
            >
              Ver redes sociales
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-5 fade-up fade-up-1">
          <div className="relative overflow-hidden rounded-3xl border border-line/50 bg-white/80 shadow-[0_30px_80px_rgba(15,15,15,0.08)] float-slow">
            <HeroSlideshow
              images={["/imagenes/home-hero.jpg", ...galleryImages]}
              alt="Productos Macashopper"
            />
            <div className="hero-sheen" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,15,15,0.05),rgba(15,15,15,0))]" />
            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-white/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                Curaduría premium
              </p>
              <p className="mt-3 font-display text-lg font-semibold leading-snug">
                Selecciones pensadas para tu estilo de vida.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SoftCard
              badge="Cercania"
              title="Atención real"
              description="Resolvemos tus dudas y recomendaciones en tiempo real."
            />
            <SoftCard
              badge="Seguridad"
              title="Compra protegida"
              description="Cada pedido se verifica antes de la entrega."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up fade-up-1">
        <SectionHeading
          eyebrow="Categorías"
          title="Explora nuestras selecciones boutique"
          subtitle="Vitaminas, skincare, ropa y pedidos especiales con una experiencia de compra premium."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categoryList.map((item, index) => {
            const href = "href" in item ? item.href : `/${item.slug ?? ""}`;
            return (
              <Link
                key={`${item.title}-${href}`}
                href={href}
                className="group rounded-3xl border border-line/40 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(255,255,255,0.65))] p-6 shadow-[0_20px_60px_rgba(15,15,15,0.08)] transition hover:-translate-y-1 hover:border-line/70 hover:shadow-[0_26px_70px_rgba(15,15,15,0.12)] fade-up"
                style={{ animationDelay: `${0.08 * (index + 1)}s` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {item.title}
                </p>
                <p className="mt-4 font-display text-xl font-semibold">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                  Ver más
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up fade-up-1">
        <SectionHeading
          eyebrow="Galería"
          title="Inspiracion real de nuestras selecciones"
          subtitle="Una muestra de productos y estilos disponibles."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-3xl border border-line/50 bg-white/80 shadow-[0_20px_60px_rgba(15,15,15,0.08)] fade-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <Image
                src={src}
                alt={`Producto Macashopper ${index + 1}`}
                width={520}
                height={640}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,15,15,0.08),rgba(15,15,15,0))]" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up fade-up-1">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Un proceso simple, seguro y personalizado"
          subtitle="Te guiamos desde la cotización hasta la entrega final."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-line/50 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,15,15,0.06)] fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Paso 0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ink-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up fade-up-1">
        <SectionHeading
          eyebrow="Confianza"
          title="Lo que nos hace diferentes"
          subtitle="Compra con la seguridad de una asesoría premium."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustList.map((point, index) => (
            <SoftCard
              key={point.title}
              badge={point.title}
              title={point.title}
              description={point.description}
              className="fade-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up fade-up-1">
        <SectionHeading
          eyebrow="Opiniones"
          title="Clientes que confían en Macashopper"
          subtitle="Experiencias reales con asesoría y productos originales."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homepageTestimonials.map((item, index) => (
            <div
              key={item.name}
              className="fade-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up fade-up-1">
        <SectionHeading
          eyebrow="FAQs"
          title="Resolvemos tus dudas"
          subtitle="Información clara antes de cotizar."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homepageFaqs.map((item, index) => (
            <div
              key={item.question}
              className="fade-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <FaqItem {...item} />
            </div>
          ))}
        </div>
      </section>

      <section id="redes" className="mx-auto w-full max-w-6xl px-6 py-20 fade-up">
        <div className="rounded-3xl border border-line/50 bg-white/80 p-10 shadow-[0_24px_70px_rgba(15,15,15,0.06)]">
          <SectionHeading
            eyebrow="Redes"
          title="Síguenos para novedades y lanzamientos"
            subtitle="Visita nuestras redes y recibe inspiración diaria."
          />
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <SocialLinks />
            <div className="text-sm text-ink-soft">
              Atención cercana y respuestas rápidas.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up">
        <div className="rounded-3xl border border-line/50 bg-white/80 p-10 shadow-[0_24px_70px_rgba(15,15,15,0.06)]">
          <SectionHeading
            eyebrow="Newsletter"
            title="Recibe novedades exclusivas y preventas"
            subtitle="Actualizaciones cuidadas y sin spam. Solo lo mejor para tu estilo de vida."
          />
          <NewsletterForm />
          <p className="mt-3 text-xs text-ink-soft">
            Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 fade-up">
        <div className="rounded-3xl border border-line/50 bg-ink p-10 text-ivory shadow-[0_30px_80px_rgba(15,15,15,0.2)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                CTA final
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ivory md:text-4xl">
                {ctaTitle}
              </h2>
              <p className="mt-3 text-sm text-ivory/80">{ctaSubtitle}</p>
            </div>
            <Link
              href={getWhatsAppUrl()}
              className="rounded-full border border-ivory/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory transition hover:-translate-y-0.5 hover:border-accent"
            >
              Cotizar por WhatsApp
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-ink-soft">
          {brand.name} opera con atención personalizada y logística segura en Cali
          y Jamundí.
        </p>
      </section>
    </div>
  );
}

