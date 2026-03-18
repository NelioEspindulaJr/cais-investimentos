"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-[rgba(201,168,76,0.08)] overflow-hidden"
      style={{ background: "var(--footer-bg)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(201,168,76,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <Image
                  src="cais-logo-big.svg"
                  alt="cais-logo"
                  width={150}
                  height={100}
                  className="brightness-0 dark:brightness-100"
                />
              </div>
            </div>
            <p className="text-gray-900/40 dark:text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              {t("tagline")}. {t("description")}
            </p>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.04)] w-fit">
              <span className="text-[#c9a84c] text-xs font-bold">BTG</span>
              <div className="w-px h-3 bg-black/10 dark:bg-white/10" />
              <span className="text-gray-900/40 dark:text-white/40 text-xs">{t("partner")}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900/60 dark:text-white/60 text-xs tracking-widest uppercase mb-5">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-3">
              {(t.raw("serviceLinks") as string[]).map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-gray-900/40 dark:text-white/40 hover:text-gray-900/70 dark:hover:text-white/70 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900/60 dark:text-white/60 text-xs tracking-widest uppercase mb-5">
              {t("companyTitle")}
            </h4>
            <ul className="space-y-3">
              {[
                { label: t("companyContact"), href: "#contact" },
                { label: t("offices"), href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-900/40 dark:text-white/40 hover:text-gray-900/70 dark:hover:text-white/70 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="py-6 border-t border-black/5 dark:border-[rgba(255,255,255,0.05)]">
          <p className="text-gray-900/20 dark:text-white/20 text-[11px] leading-relaxed">
            {t.rich("disclaimer", {
              ancordLink: (chunks) => (
                <a
                  href="https://www.ancord.org.br/certificacao-e-credenciamento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-gray-900/40 dark:hover:text-white/40 transition-colors"
                >
                  {chunks}
                </a>
              ),
              nectonLink: (chunks) => (
                <a
                  href="https://www.necton.com.br/seja-parceiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-gray-900/40 dark:hover:text-white/40 transition-colors"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-black/5 dark:border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-900/25 dark:text-white/25 text-xs">
            © {currentYear} Cais Investimentos. {t("rights")}.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: t("links.privacy"), href: "#" },
              { label: t("links.terms"), href: "#" },
              { label: t("links.cookies"), href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-900/25 dark:text-white/25 hover:text-gray-900/50 dark:hover:text-white/50 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
