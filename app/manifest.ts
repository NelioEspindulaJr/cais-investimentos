import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cais Investimentos",
    short_name: "Cais",
    description:
      "Sua casa de investimentos. Assessoria de investimentos personalizada com parceria BTG Pactual.",
    start_url: "/pt-br",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#c9a84c",
    orientation: "portrait-primary",
    lang: "pt-BR",
    icons: [
      {
        src: "/cais-small.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["finance", "business"],
  };
}
