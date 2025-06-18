import { GithubIcon, LinkedInIcon, XIcon, GmailIcon } from "@/components/ui/icons";

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  url?: string;
}

export const data = {
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/federicoluna01",
      icon: GithubIcon
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/federico-luna-dev",
      icon: LinkedInIcon
    },
    {
      name: "X",
      url: "https://x.com/FedericoLunaDev",
      icon: XIcon
    },
    {
      name: "Gmail",
      url: "mailto:fede29833@gmail.com",
      icon: GmailIcon
    }
  ],
  projects: [
    {
      id: 1,
      title: "Cuppy",
      description: "Es mi agencia de diseño y desarrollo web",
      images: [
        "/cuppy.webp",
      ],
      url: "https://cuppyagenciaweb.com"
    },
    {
      id: 2,
      title: "Vesper x Fede",
      description: "Tema personalizado en base a Vesper",
      images: [
        "/vesperxfede.webp"
      ],
      url: "https://github.com/FedericoLuna01/vesper-fede"
    },
    {
      id: 3,
      title: "YT Layout Customizer",
      description: "Extensión de Chrome para personalizar la interfaz de YouTube",
      images: [
        "/yt-layout-customizer-1.webp",
        "/yt-layout-customizer-2.webp",
        "/yt-layout-customizer-3.webp",
      ],
      url: "https://github.com/FedericoLuna01/yt-layout-customizer"
    },
    {
      id: 4,
      title: "Plato",
      description: "Menú digital para restaurantes",
      images: [
        "/plato-1.webp",
        "/plato-2.webp",
        "/plato-3.webp",
      ],
    },
    {
      id: 5,
      title: "E-commerce CMS",
      description: "CMS para e-commerce",
      images: [
        "/ecommerce-cms-1.webp",
        "/ecommerce-cms-2.webp",
      ],
    },
  ]
}
