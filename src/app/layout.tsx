import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const figtree = Figtree({
  subsets: ["latin"],
})

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
      <body
        className={`${figtree.className} antialiased dark`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
