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
      title: "Plato",
      description: "Menú digital para restaurantes",
      images: [
        "/projects/plato-1.webp",
        "/projects/plato-2.webp",
        "/projects/plato-3.webp",
      ],
      url: "https://github.com/FedericoLuna01/plato"
    },
    {
      id: 2,
      title: "YT Layout Customizer",
      description: "Extensión de Chrome para personalizar la interfaz de YouTube",
      images: [
        "/projects/yt-layout-customizer-1.webp",
        "/projects/yt-layout-customizer-2.webp",
        "/projects/yt-layout-customizer-3.webp",
      ],
      url: "https://github.com/FedericoLuna01/yt-layout-customizer"
    },
    {
      id: 3,
      title: "Tripzy",
      description: "Organizador/planeador de viajes",
      images: [
        "/projects/tripzy-1.webp",
        "/projects/tripzy-2.webp",
        "/projects/tripzy-3.webp",
        "/projects/tripzy-4.webp",
      ],
      url: "https://github.com/FedericoLuna01/tripzy"
    },
  ],
  landingProjects: [
    {
      id: 1,
      title: "Comuna de Zavalla",
      description: "Sitio web institucional de la Comuna de Zavalla",
      images: [
        "/projects/landing-comuna.webp",
      ],
      url: "https://www.comunadezavalla.com"
    },
    {
      id: 2,
      title: "Kuzacademy",
      description: "Plataforma de cursos en línea de criptomonedas y blockchain",
      images: [
        "/projects/landing-criptokuz.webp",
      ],
      url: "https://www.kuzacademy.com/"
    },
    {
      id: 3,
      title: "Maxitramit",
      description: "Sitio web institucional de Maxitramit",
      images: [
        "/projects/landing-maxitramit.webp",
      ],
      url: "https://www.gestoriamaxitramit.com.ar/"
    }
  ]
}
