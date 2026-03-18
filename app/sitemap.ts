import type { MetadataRoute } from "next";

const BASE_URL = "https://caisinvestimentos.com.br";
const LOCALES = ["pt-br", "en", "es", "fr", "zh"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "pt-br" ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((loc) => [loc, `${BASE_URL}/${loc}`])
      ),
    },
  }));
}
