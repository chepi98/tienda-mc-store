import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SiteBackground from "@/components/SiteBackground";
import { brand } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://macashopper.com";
const ogImage = "/logo.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Macashopper | Personal Shopper Premium en Cali y Jamundí",
    template: "%s | Macashopper",
  },
  description:
    "Personal Shopper premium para vitaminas, skincare, ropa y más. Productos 100% originales, atención personalizada y envíos seguros en Cali y Jamundí.",
  openGraph: {
    title: "Macashopper | Personal Shopper Premium",
    description:
      "Compra segura y personalizada de vitaminas, skincare, ropa y más. Atención premium en Cali y Jamundí.",
    url: siteUrl,
    siteName: "Macashopper",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Macashopper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Macashopper | Personal Shopper Premium",
    description:
      "Productos 100% originales, atención personalizada y envíos seguros en Cali y Jamundí.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-base text-ink antialiased">
        <SiteBackground />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: brand.name,
              description: brand.description,
              areaServed: ["Cali", "Jamundí"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cali",
                addressRegion: "Valle del Cauca",
                addressCountry: "CO",
              },
              sameAs: brand.socials.map((social) => social.href),
            }),
          }}
        />
      </body>
    </html>
  );
}
