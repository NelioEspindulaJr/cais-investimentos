import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-br", "en", "es", "fr", "zh"],
  defaultLocale: "pt-br",
});
