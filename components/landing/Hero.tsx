"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { analytics } from "@/lib/analytics";

export default function Hero() {
  const t = useTranslations("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const compassY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const compassScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const compassOpacity = useTransform(scrollYProgress, [0, 0.8], [0.15, 0]);
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.08],
    [1, 0],
  );

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
      style={{ background: "var(--section-bg-primary)" }}
    >
      <motion.div
        style={{ y: compassY, scale: compassScale, opacity: compassOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Image
          alt="cais-logo-small"
          src="cais-small.svg"
          width={850}
          height={700}
          className="brightness-0 dark:brightness-100 dark:opacity-100 opacity-60"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -20, 30, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{
          x: [0, -40, 20, 10, 0],
          y: [0, 30, -20, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(42,124,79,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        style={{ y: springY, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.06)] text-[#c9a84c] text-xs tracking-wider uppercase">
            <span className="hidden md:flex w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            {t("badge")}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-6 text-gray-900/90 dark:text-white/90"
        >
          <span className="block">{t("title")}</span>
          <span className="block gradient-text font-semibold">
            {t("titleAccent")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-900/50 dark:text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/5527997149473"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => analytics.ctaClick("hero_whatsapp")}
            className="group flex items-center gap-2.5 bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 glow-gold"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("cta")}
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 border border-[rgba(201,168,76,0.3)] text-[#c9a84c] hover:bg-[rgba(201,168,76,0.06)] font-medium px-8 py-3.5 rounded-full text-sm transition-all duration-300"
          >
            {t("ctaSecondary")}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-black/5 dark:border-white/5"
        >
          {(t.raw("stats") as Array<{ value: string; label: string }>).map(
            (stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-2xl font-semibold text-[#c9a84c]">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-900/40 dark:text-white/40 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ),
          )}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-900/30 dark:text-white/30 text-xs tracking-widest uppercase">
            {t("scrollIndicator")}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-gray-900/30 dark:text-white/30" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
