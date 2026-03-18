"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Award, HeartHandshake } from "lucide-react";
import { analytics } from "@/lib/analytics";

const pillarIcons = [Award, Shield, HeartHandshake];

export default function About() {
  const t = useTranslations("about");
  const pillars = t.raw("pillars") as Array<{ title: string; description: string }>;

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--section-bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-900/60 dark:text-white/60 leading-relaxed mb-6">
            {t("subtitle")}
          </p>
          {/* Differentiator callout */}
          <div className="inline-flex items-start gap-3 px-6 py-4 rounded-xl border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] text-left">
            <span className="text-[#c9a84c] mt-0.5 shrink-0">✦</span>
            <p className="text-sm text-gray-900/70 dark:text-white/70 leading-relaxed italic">
              {t("differentiator")}
            </p>
          </div>
        </motion.div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-gray-900/50 dark:text-white/50 leading-relaxed">
            {t("body")}
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-black/5 dark:border-[rgba(255,255,255,0.06)] bg-black/[0.02] dark:bg-[rgba(255,255,255,0.02)] hover:border-[rgba(201,168,76,0.15)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.08)] group-hover:bg-[rgba(201,168,76,0.12)] flex items-center justify-center text-[#c9a84c] mb-4 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">{pillar.title}</h3>
                <p className="text-gray-900/50 dark:text-white/50 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5527997149473"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.ctaClick("about_whatsapp")}
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-semibold px-8 py-3 rounded-full text-sm transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("whatsapp")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.3)] text-[#c9a84c] hover:bg-[rgba(201,168,76,0.06)] font-medium px-8 py-3 rounded-full text-sm transition-all duration-300"
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
