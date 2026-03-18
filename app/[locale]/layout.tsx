import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Analytics from "@/components/analytics/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../globals.css";

const BASE_URL = "https://caisinvestimentos.com.br";

const lato = Lato({
  preload: true,
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const tf = await getTranslations({ locale, namespace: "footer" });

  const localeUrl = `${BASE_URL}/${locale}`;
  const description = t("subtitle");

  const ogLocaleMap: Record<string, string> = {
    "pt-br": "pt_BR",
    en: "en_US",
    es: "es_ES",
    fr: "fr_FR",
    zh: "zh_CN",
  };

  const ogLocale = ogLocaleMap[locale] ?? "pt_BR";
  const alternateOgLocales = Object.entries(ogLocaleMap)
    .filter(([loc]) => loc !== locale)
    .map(([, ogLoc]) => ogLoc);

  return {
    metadataBase: new URL(BASE_URL),

    title: {
      default: "Cais Investimentos",
      template: "%s | Cais Investimentos",
    },
    description,
    keywords: [
      "cais investimentos",
      "assessoria de investimentos",
      "btg pactual",
      "investimentos",
      "renda fixa",
      "renda variável",
      "planejamento financeiro",
      "gestão de portfólio",
      "parceiro btg pactual",
      "assessor de investimentos",
      "cvm",
    ],
    authors: [{ name: "Cais Investimentos", url: BASE_URL }],
    creator: "Cais Investimentos",
    publisher: "Cais Investimentos",
    category: "finance",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: localeUrl,
      languages: {
        "pt-BR": `${BASE_URL}/pt-br`,
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
        fr: `${BASE_URL}/fr`,
        zh: `${BASE_URL}/zh`,
        "x-default": `${BASE_URL}/pt-br`,
      },
    },

    openGraph: {
      title: "Cais Investimentos",
      description,
      url: localeUrl,
      siteName: "Cais Investimentos",
      type: "website",
      locale: ogLocale,
      alternateLocale: alternateOgLocales,
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `Cais Investimentos — ${tf("tagline")}`,
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Cais Investimentos",
      description,
      images: [`/${locale}/opengraph-image`],
      creator: "@caisinvestimentos",
      site: "@caisinvestimentos",
    },

    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },

    other: {
      "theme-color": "#c9a84c",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${lato.className} antialiased`}>
        <ThemeProvider>
          <Analytics />
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
