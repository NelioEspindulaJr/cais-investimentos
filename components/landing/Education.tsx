"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { analytics } from "@/lib/analytics";

export default function Education() {
  const t = useTranslations("education");
  const options = t.raw("options") as Array<{
    name: string;
    rate: string;
    result: string;
    highlight: boolean;
    tag: string;
  }>;

  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--section-bg-secondary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-4 leading-tight">
            {t("title")}
          </h2>
          <p className="text-gray-900/50 dark:text-white/50 text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-gray-900/40 dark:text-white/40 uppercase tracking-wider mb-5">
              {t("example")}
            </p>

            <div className="space-y-3">
              {options.map((option, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-5 rounded-xl border transition-all duration-300 ${
                    option.highlight
                      ? "border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)]"
                      : "border-black/5 dark:border-[rgba(255,255,255,0.06)] bg-black/[0.02] dark:bg-[rgba(255,255,255,0.02)]"
                  }`}
                >
                  {option.tag && (
                    <span className="absolute -top-2.5 right-4 px-3 py-0.5 rounded-full bg-[#c9a84c] text-black text-xs font-semibold">
                      {option.tag}
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-medium mb-1 ${option.highlight ? "text-gray-900 dark:text-white" : "text-gray-900/80 dark:text-white/80"}`}>
                        {option.name}
                      </div>
                      <div className="text-xs text-gray-900/40 dark:text-white/40">
                        {option.rate}
                      </div>
                    </div>
                    <div className={`text-xl font-bold ${option.highlight ? "gradient-text" : "text-gray-900/70 dark:text-white/70"}`}>
                      {option.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-gray-900/30 dark:text-white/30 mt-4 leading-relaxed">
              * {t("disclaimer")}
            </p>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 rounded-2xl border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.03)]">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t("whatIsTitle")}
              </h3>
              <p className="text-gray-900/60 dark:text-white/60 leading-relaxed text-base">
                {t("whatIsBody")}
              </p>
            </div>

            {/* Simple steps breakdown */}
            <div className="space-y-3">
              {[
                { icon: "🎯", text: "Mapeamos seus objetivos de vida" },
                { icon: "📊", text: "Escolhemos os melhores produtos para você" },
                { icon: "🔄", text: "Ajustamos sua carteira conforme o mercado" },
                { icon: "📈", text: "Seu patrimônio cresce de forma consistente" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-900/60 dark:text-white/60">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => analytics.ctaClick("education_cta")}
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 w-full sm:w-auto"
            >
              {t("cta")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
