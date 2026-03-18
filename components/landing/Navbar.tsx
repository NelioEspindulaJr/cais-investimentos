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
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <circle cx="20" cy="20" r="3" fill="#c9a84c" />
             
                <path d="M20 2 L22 18 L20 20 L18 18 Z" fill="#c9a84c" opacity="0.9" />
                <path d="M20 38 L22 22 L20 20 L18 22 Z" fill="#c9a84c" opacity="0.5" />
                <path d="M2 20 L18 22 L20 20 L18 18 Z" fill="#c9a84c" opacity="0.5" />
                <path d="M38 20 L22 22 L20 20 L22 18 Z" fill="#c9a84c" opacity="0.9" />
     
                <path d="M7.1 7.1 L17.2 17.2" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" />
                <path d="M32.9 32.9 L22.8 22.8" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" />
                <path d="M32.9 7.1 L22.8 17.2" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" />
                <path d="M7.1 32.9 L17.2 22.8" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#c9a84c] font-semibold text-sm tracking-wider uppercase leading-none">
                Cais
              </span>
              <span className="text-white/50 text-[10px] tracking-widest uppercase leading-none">
                Investimentos
              </span>
            </div>
          </Link> */}

          <Link href="/">
            <Image
              src="cais-logo-big.svg"
              alt="cais-logo"
              width={150}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white hover:bg-white/5 data-[state=open]:bg-white/5 text-sm">
                    {t("product")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[420px] p-4 bg-[#13131e] border border-[rgba(201,168,76,0.12)] rounded-xl">
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
                    href="#resources"
                    className="bg-transparent text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors inline-flex items-center"
                  >
                    {t("resources")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="bg-transparent text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors inline-flex items-center"
                  >
                    {t("about")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="bg-transparent text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors inline-flex items-center"
                  >
                    {t("contact")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors px-2 py-1 rounded-md hover:bg-white/5"
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
                    className="absolute right-0 top-full mt-1 bg-[#13131e] border border-[rgba(201,168,76,0.12)] rounded-lg overflow-hidden min-w-[120px] shadow-2xl"
                  >
                    {routing.locales.map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc as never}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5 transition-colors ${
                          locale === loc ? "text-[#c9a84c]" : "text-white/70"
                        }`}
                      >
                        <span className="w-6 text-xs text-white/40">
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

            <a
              href="#contact"
              onClick={() => analytics.ctaClick("navbar_desktop")}
              className="inline-flex items-center bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-medium text-sm px-5 h-9 rounded-full transition-all duration-300"
            >
              {t("getStarted")}
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-white hover:bg-white/5 transition-colors">
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#0f0f18] border-[rgba(201,168,76,0.12)] w-full max-w-sm"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[#c9a84c] font-semibold tracking-wider">
                    CAIS
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileOpen(false)}
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
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
                      className="text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-base transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pt-8 border-t border-[rgba(255,255,255,0.06)]">
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
                            : "border-white/10 text-white/50 hover:border-white/20"
                        }`}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    onClick={() => {
                      setMobileOpen(false);
                      analytics.ctaClick("navbar_mobile");
                    }}
                    className="flex items-center justify-center w-full bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-medium rounded-full py-2.5 transition-colors"
                  >
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
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
    >
      <div className="mt-0.5 p-1.5 rounded-md bg-[rgba(201,168,76,0.1)] group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-white text-sm font-medium">{title}</div>
        <div className="text-white/40 text-xs mt-0.5">{description}</div>
      </div>
    </a>
  );
}
