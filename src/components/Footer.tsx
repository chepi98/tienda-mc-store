import Link from "next/link";
import Image from "next/image";
import { brand, navigation } from "@/lib/constants";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line/40 bg-base/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Macashopper"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-line/50 object-cover"
            />
            <p className="font-display text-2xl font-semibold">Macashopper</p>
          </div>
          <p className="text-sm text-ink-soft">{brand.description}</p>
          <p className="text-sm text-ink-soft">
            Cobertura: {brand.locations.join(" y ")}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
            Navegación
          </p>
          <div className="grid gap-2 text-sm text-ink-soft">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
            Redes
          </p>
          <SocialLinks variant="compact" />
          <p className="text-xs text-ink-soft">
            Atención personalizada por WhatsApp y redes sociales.
          </p>
        </div>
      </div>
      <div className="border-t border-line/30 py-4">
        <p className="text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} Macashopper. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}



