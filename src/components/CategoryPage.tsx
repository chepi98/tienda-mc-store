import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ProductCard, SoftCard } from "./Cards";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { categoryImageSets, categoryProductSamples } from "@/lib/constants";

type Product = {
  name: string;
  description?: string;
};

type CategoryPageProps = {
  title: string;
  description: string;
  slug: string;
  products?: Product[] | null;
};

const productPlaceholders: Product[] = [
  { name: "Seleccion premium" },
  { name: "Best seller original" },
  { name: "Curaduria boutique" },
  { name: "Recomendado por expertas" },
  { name: "Exclusivo Macashopper" },
  { name: "Edicion limitada" },
];

export default function CategoryPage({
  title,
  description,
  slug,
  products,
}: CategoryPageProps) {
  const productList =
    products && products.length
      ? products
      : categoryProductSamples[slug] ?? productPlaceholders;
  const imageSet = categoryImageSets[slug] ?? [];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
      <SectionHeading
        eyebrow="Categoria"
        title={title}
        subtitle={description}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productList.map((item, index) => (
          <ProductCard
            key={`${slug}-${item.name}`}
            name={item.name}
            category={title}
            description={item.description}
            imageSrc={imageSet.length ? imageSet[index % imageSet.length] : undefined}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-line/50 bg-white/80 p-8 shadow-[0_24px_70px_rgba(15,15,15,0.06)] md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Cotización directa
          </p>
          <p className="font-display text-2xl font-semibold leading-tight md:text-3xl">
            Lista para comprar con asesoría premium?
          </p>
          <p className="text-sm text-ink-soft">
            Te ayudamos a elegir productos originales con respaldo total.
          </p>
        </div>
        <Link
          href={getWhatsAppUrl()}
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_16px_40px_rgba(15,15,15,0.22)] transition hover:-translate-y-0.5 hover:bg-ink/90"
        >
          Cotizar por WhatsApp
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <SoftCard
          badge="Confianza"
          title="Origen verificado"
          description="Trabajamos con cadenas confiables y validamos cada compra."
        />
        <SoftCard
          badge="Acompañamiento"
          title="Asesoria personalizada"
          description="Respondemos dudas, recomendaciones y alternativas de compra."
        />
        <SoftCard
          badge="Entrega"
          title="Envíos seguros"
          description="Logistica protegida, con tiempos claros y seguimiento."
        />
      </div>
    </div>
  );
}
