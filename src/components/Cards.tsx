import Image from "next/image";
import type { CSSProperties } from "react";

type CardProps = {
  title: string;
  description?: string;
  badge?: string;
  className?: string;
  style?: CSSProperties;
};

export function SoftCard({ title, description, badge, className, style }: CardProps) {
  return (
    <div
      className={`group rounded-3xl border border-line/40 bg-white/75 p-6 shadow-[0_16px_45px_rgba(15,15,15,0.08)] transition hover:-translate-y-1 hover:border-line/70 hover:shadow-[0_24px_70px_rgba(15,15,15,0.12)] ${className ?? ""}`}
      style={style}
    >
      {badge ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {badge}
        </p>
      ) : null}
      <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm text-ink-soft">{description}</p>
      ) : null}
    </div>
  );
}

type ProductCardProps = {
  name: string;
  category: string;
  description?: string;
  imageSrc?: string;
};

export function ProductCard({
  name,
  category,
  description,
  imageSrc,
}: ProductCardProps) {
  return (
    <div className="group rounded-2xl border border-line/40 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,15,15,0.08)] transition hover:-translate-y-1 hover:border-line/70 hover:shadow-[0_24px_70px_rgba(15,15,15,0.12)]">
      <div className="relative h-40 overflow-hidden rounded-2xl bg-base-strong/70">
        <Image
          src={imageSrc ?? "/product-placeholder.svg"}
          alt={name}
          width={420}
          height={240}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink">
          {category}
        </span>
      </div>
      <h4 className="mt-4 font-display text-lg font-semibold">{name}</h4>
      <p className="mt-2 text-sm text-ink-soft">
        {description ??
          "Producto original con entrega segura y asesoría personalizada."}
      </p>
    </div>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-line/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.7))] p-6 shadow-[0_18px_55px_rgba(15,15,15,0.08)]">
      <p className="text-sm text-ink-soft leading-relaxed">"{quote}"</p>
      <p className="mt-6 font-display text-base font-semibold">{name}</p>
      <p className="text-xs uppercase tracking-[0.3em] text-accent">{role}</p>
    </div>
  );
}

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="rounded-2xl border border-line/40 bg-white/75 p-5 shadow-[0_10px_30px_rgba(15,15,15,0.06)]">
      <p className="font-display text-base font-semibold leading-snug">{question}</p>
      <p className="mt-3 text-sm text-ink-soft">{answer}</p>
    </div>
  );
}
