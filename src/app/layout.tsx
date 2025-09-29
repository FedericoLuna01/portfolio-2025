import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { figtree } from "@/styles/fonts";
import { ReactLenis } from "@/utils/lenis"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Federico Luna | Desarrollador web",
  description: "Desarrollador Full Stack con dominio de Next.js, TypeScript y PostgresSQL. Especializado en soluciones web modernas.",
  openGraph: {
    title: "Federico Luna | Desarrollador web",
    description: "Desarrollador Full Stack con dominio de Next.js, TypeScript y PostgresSQL. Especializado en soluciones web modernas.",
    url: "https://federicoluna.me",
    siteName: "Federico Luna Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Federico Luna - Desarrollador Full Stack",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Luna | Desarrollador web",
    description: "Desarrollador Full Stack con dominio de Next.js, TypeScript y PostgresSQL. Especializado en soluciones web modernas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-KJ86QSC6" />
      <GoogleAnalytics gaId="G-ZCDWPHCDKN" />
      <ReactLenis root>
        <body
          className={`${figtree.className} antialiased dark selection:bg-zinc-600 selection:text-white`}
        >
          <Navbar />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
