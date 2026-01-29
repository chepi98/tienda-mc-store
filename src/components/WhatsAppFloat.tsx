"use client";

import { useMemo } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const href = useMemo(() => getWhatsAppUrl(), []);

  return (
    <a
      href={href}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_20px_50px_rgba(15,15,15,0.35)] shadow-glow/50 transition hover:-translate-y-1 hover:bg-ink/90"
      aria-label="Haz tu pedido aquí por WhatsApp"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-ivory">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M12.05 4a7.96 7.96 0 0 0-6.98 11.9L4 20l4.25-1.1A7.96 7.96 0 1 0 12.05 4zm0 1.7a6.26 6.26 0 0 1 5.44 9.37l-.34.56.57 1.87-1.97-.55-.53.31a6.26 6.26 0 1 1-2.12-11.56zm-2.4 3.9c-.18 0-.42.07-.6.27-.2.21-.77.75-.77 1.83 0 1.08.79 2.13.9 2.27.12.14 1.53 2.48 3.78 3.38 1.87.74 2.25.59 2.65.55.4-.05 1.3-.54 1.48-1.07.18-.53.18-.98.13-1.07-.05-.1-.18-.14-.38-.24-.2-.1-1.17-.58-1.35-.64-.18-.06-.31-.1-.44.1-.13.2-.5.63-.61.76-.11.13-.22.15-.42.05-.2-.1-.84-.31-1.6-.98-.6-.52-1-1.16-1.12-1.36-.12-.2-.01-.31.08-.41.09-.1.2-.24.3-.36.1-.12.13-.2.2-.33.07-.13.04-.24 0-.33-.04-.1-.4-1.02-.56-1.39-.15-.36-.3-.31-.41-.31h-.36z" />
        </svg>
      </span>
      <span>Haz tu pedido aquí</span>
    </a>
  );
}
