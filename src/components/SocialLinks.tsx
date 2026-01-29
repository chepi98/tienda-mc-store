import { brand } from "@/lib/constants";

type SocialLinksProps = {
  variant?: "default" | "compact";
};

function getSocialIcon(label: string, sizeClass: string) {
  const key = label.toLowerCase();

  if (key.includes("instagram")) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={sizeClass}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (key.includes("facebook")) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={sizeClass}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v5h3v-5h3l1-3h-4V9c0-.6.4-1 1-1z" />
      </svg>
    );
  }

  if (key.includes("tiktok")) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={sizeClass}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M14 4c1.2 1.9 2.7 2.9 5 3v3c-2 0-3.7-.6-5-1.8V16a5 5 0 1 1-4-4.9v3.1a2 2 0 1 0 1 1.8V4h3z" />
      </svg>
    );
  }

  return null;
}

export default function SocialLinks({ variant = "default" }: SocialLinksProps) {
  const iconSize = variant === "compact" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div
      className={
        variant === "compact"
          ? "flex flex-wrap gap-3"
          : "flex flex-wrap gap-4"
      }
    >
      {brand.socials.map((social) => {
        const icon = getSocialIcon(social.label, iconSize);
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className={
              variant === "compact"
                ? "inline-flex items-center justify-center rounded-full border border-line/60 p-2 text-ink-soft transition hover:border-accent hover:text-ink"
                : "inline-flex items-center justify-center rounded-full border border-line/60 p-3 text-ink-soft transition hover:border-accent hover:text-ink"
            }
          >
            {icon ?? <span className="text-xs font-semibold">{social.label}</span>}
            <span className="sr-only">{social.label}</span>
          </a>
        );
      })}
    </div>
  );
}
