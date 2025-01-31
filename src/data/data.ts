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
      url: "https://www.linkedin.com/in/federico-luna-7b2b3b1b6/",
      icon: LinkedInIcon
    },
    {
      name: "X",
      url: "#",
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
        "/plato-1.webp",
        "/plato-2.webp",
        "/plato-3.webp",
      ],
      url: "https://platomenu.com"
    },
    {
      id: 2,
      title: "Cuppy",
      description: "Es mi agencia de diseño y desarrollo web",
      images: [
        "/cuppy.webp",
      ],
      url: "https://cuppyagenciaweb.com"
    },
    {
      id: 3,
      title: "E-commerce CMS",
      description: "CMS para e-commerce",
      images: [
        "/ecommerce-cms-1.webp",
        "/ecommerce-cms-2.webp",
      ],
    },
  ]
}
