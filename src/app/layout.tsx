import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { figtree } from "@/styles/fonts";
import { ReactLenis } from "@/utils/lenis"

export const metadata: Metadata = {
  title: "Federico Luna | Desarrollador web",
  description: "Desarrollador web especializado en React, Next.js y Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <ReactLenis root>
        <body
          className={`${figtree.className} antialiased dark`}
        >
          <Navbar />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
