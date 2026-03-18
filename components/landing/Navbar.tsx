"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Menu,
  Globe,
  ChevronDown,
  TrendingUp,
  Users,
  BarChart3,
  X,
} from "lucide-react";
import Image from "next/image";
import { analytics } from "@/lib/analytics";

const localeNames: Record<string, string> = {
  "pt-br": "PT",
  en: "EN",
  es: "ES",
  fr: "FR",
  zh: "中文",
};

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-[rgba(201,168,76,0.12)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "var(--nav-scrolled-bg)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="cais-logo-big.svg"
              alt="cais-logo"
              width={150}
              height={100}
              className="brightness-0 dark:brightness-100"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-900/70 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 data-[state=open]:bg-black/5 dark:data-[state=open]:bg-white/5 text-sm">
                    {t("product")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      className="w-[420px] p-4 border border-[rgba(201,168,76,0.12)] rounded-xl"
                      style={{ background: "var(--nav-dropdown-bg)" }}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <NavItem
                          icon={
                            <TrendingUp className="w-4 h-4 text-[#c9a84c]" />
                          }
                          title={t("features")}
                          href="/#features"
                          description={t("featuresDesc")}
                        />
                        <NavItem
                          icon={
                            <BarChart3 className="w-4 h-4 text-[#c9a84c]" />
                          }
                          title={t("solutions")}
                          href="/#services"
                          description={t("solutionsDesc")}
                        />
                        <NavItem
                          icon={<Users className="w-4 h-4 text-[#c9a84c]" />}
                          title={t("personal")}
                          href="/#services"
                          description={t("personalDesc")}
                        />
                        <NavItem
                          icon={
                            <BarChart3 className="w-4 h-4 text-[#c9a84c]" />
                          }
                          title={t("corporate")}
                          href="/#services"
                          description={t("corporateDesc")}
                        />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#how-it-works"
                    className="bg-transparent text-gray-900/70 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors inline-flex items-center"
                  >
                    {t("resources")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="bg-transparent text-gray-900/70 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors inline-flex items-center"
                  >
                    {t("about")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="bg-transparent text-gray-900/70 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors inline-flex items-center"
                  >
                    {t("contact")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-gray-900/60 dark:text-white/60 hover:text-gray-900 dark:hover:text-white text-sm transition-colors px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{localeNames[locale]}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 border border-[rgba(201,168,76,0.12)] rounded-lg overflow-hidden min-w-[120px] shadow-2xl"
                    style={{ background: "var(--nav-dropdown-bg)" }}
                  >
                    {routing.locales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc as never}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${
                          locale === loc ? "text-[#c9a84c]" : "text-gray-900/70 dark:text-white/70"
                        }`}
                      >
                        <span className="w-6 text-xs text-gray-900/40 dark:text-white/40">
                          {localeNames[loc]}
                        </span>
                        <span className="capitalize">
                          {loc === "pt-br"
                            ? "Português"
                            : loc === "en"
                              ? "English"
                              : loc === "es"
                                ? "Español"
                                : loc === "fr"
                                  ? "Français"
                                  : "中文"}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <ThemeToggle />

            <a
              href="https://wa.me/5527997149473"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.ctaClick("navbar_desktop")}
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-medium text-sm px-5 h-9 rounded-full transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("getStarted")}
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-[rgba(201,168,76,0.12)] w-full max-w-sm"
              style={{ background: "var(--mobile-menu-bg)" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[#c9a84c] font-semibold tracking-wider">
                    CAIS
                  </span>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-900/60 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <nav className="flex flex-col gap-1">
                  {[
                    { label: t("features"), href: "#features" },
                    { label: t("solutions"), href: "#services" },
                    { label: t("resources"), href: "#resources" },
                    { label: t("about"), href: "#about" },
                    { label: t("contact"), href: "#contact" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-900/70 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-4 py-3 rounded-lg text-base transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pt-8 border-t border-black/[0.06] dark:border-[rgba(255,255,255,0.06)]">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {routing.locales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc as never}
                        onClick={() => setMobileOpen(false)}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          locale === loc
                            ? "border-[#c9a84c] text-[#c9a84c]"
                            : "border-black/10 dark:border-white/10 text-gray-900/50 dark:text-white/50 hover:border-black/20 dark:hover:border-white/20"
                        }`}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5527997149473"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setMobileOpen(false);
                      analytics.ctaClick("navbar_mobile");
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-medium rounded-full py-2.5 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t("getStarted")}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

function NavItem({
  icon,
  title,
  href,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
    >
      <div className="mt-0.5 p-1.5 rounded-md bg-[rgba(201,168,76,0.1)] group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-gray-900 dark:text-white text-sm font-medium">{title}</div>
        <div className="text-gray-900/40 dark:text-white/40 text-xs mt-0.5">{description}</div>
      </div>
    </a>
  );
}
