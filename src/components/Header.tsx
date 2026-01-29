import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/40 bg-base/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Macashopper"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-line/50 object-cover"
            priority
          />
          <span className="font-display text-lg font-semibold">Macashopper</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm text-ink-soft lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks variant="compact" />
          <a
            href={getWhatsAppUrl()}
            className="rounded-full border border-ink/10 bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_30px_rgba(15,15,15,0.2)] transition hover:-translate-y-0.5 hover:bg-ink/90"
            aria-label="Haz tu pedido aquí"
          >
            Haz tu pedido aquí
          </a>
        </div>
        <a
          href={getWhatsAppUrl()}
          className="rounded-full border border-ink/10 bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_12px_30px_rgba(15,15,15,0.2)] transition hover:-translate-y-0.5 hover:bg-ink/90 lg:hidden"
          aria-label="Haz tu pedido aquí"
        >
          Haz tu pedido aquí
        </a>
      </div>
      <div className="border-t border-line/40 px-6 py-3 lg:hidden">
        <div className="flex items-center gap-4 overflow-x-auto text-xs uppercase tracking-[0.2em] text-ink-soft">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
