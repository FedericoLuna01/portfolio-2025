import { Figtree, Poppins } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
})

const accent = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-accent"
})

export { figtree, accent }