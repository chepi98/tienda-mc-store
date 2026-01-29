import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto y cotizaciones directas",
  description:
    "Habla con Macashopper por WhatsApp o redes. Atención personalizada en Cali y Jamundí.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
      <SectionHeading
        eyebrow="Contacto"
        title="Hablemos de tu próxima compra premium"
        subtitle="Atención cercana, confiable y rápida para cotizar tus productos."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <a
            href={getWhatsAppUrl()}
            className="flex items-center justify-between rounded-3xl border border-line/50 bg-ink px-8 py-6 text-ivory shadow-[0_30px_80px_rgba(15,15,15,0.2)] transition hover:-translate-y-0.5"
            aria-label="Haz tu pedido aquí por WhatsApp"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-ivory">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M12.05 4a7.96 7.96 0 0 0-6.98 11.9L4 20l4.25-1.1A7.96 7.96 0 1 0 12.05 4zm0 1.7a6.26 6.26 0 0 1 5.44 9.37l-.34.56.57 1.87-1.97-.55-.53.31a6.26 6.26 0 1 1-2.12-11.56zm-2.4 3.9c-.18 0-.42.07-.6.27-.2.21-.77.75-.77 1.83 0 1.08.79 2.13.9 2.27.12.14 1.53 2.48 3.78 3.38 1.87.74 2.25.59 2.65.55.4-.05 1.3-.54 1.48-1.07.18-.53.18-.98.13-1.07-.05-.1-.18-.14-.38-.24-.2-.1-1.17-.58-1.35-.64-.18-.06-.31-.1-.44.1-.13.2-.5.63-.61.76-.11.13-.22.15-.42.05-.2-.1-.84-.31-1.6-.98-.6-.52-1-1.16-1.12-1.36-.12-.2-.01-.31.08-.41.09-.1.2-.24.3-.36.1-.12.13-.2.2-.33.07-.13.04-.24 0-.33-.04-.1-.4-1.02-.56-1.39-.15-.36-.3-.31-.41-.31h-.36z" />
                </svg>
              </span>
              <span className="font-display text-2xl font-semibold md:text-3xl">
                Haz tu pedido aquí
              </span>
            </div>
            <span className="text-sm uppercase tracking-[0.3em] text-ivory/70">
              WhatsApp
            </span>
          </a>

          <div className="rounded-3xl border border-line/50 bg-white/80 p-8 shadow-[0_24px_70px_rgba(15,15,15,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Redes sociales
            </p>
            <p className="mt-4 text-sm text-ink-soft">
              Estamos disponibles con respuesta rápida en nuestras redes.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div className="rounded-3xl border border-line/50 bg-white/80 p-8 shadow-[0_24px_70px_rgba(15,15,15,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Información
            </p>
            <div className="mt-4 space-y-3 text-sm text-ink-soft">
              <p>
                Operamos en {brand.locations.join(" y ")}, con entregas seguras
                y acompañamiento personalizado.
              </p>
              <p>{brand.city}</p>
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{brand.hours}</p>
              <p>Rango de precios: {brand.priceRange}</p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}



