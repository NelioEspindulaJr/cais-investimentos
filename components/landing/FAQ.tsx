"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section
      id="faq"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--section-bg-secondary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
              {t("label")}
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
              {t("title")}
            </h2>
            <p className="text-gray-900/50 dark:text-white/50 text-lg leading-relaxed mb-8">
              {t("subtitle")}
            </p>
            <div className="p-6 rounded-xl border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.04)]">
              <p className="text-gray-900/60 dark:text-white/60 text-sm leading-relaxed">
                {t("helpText")}{" "}
                <a
                  href="#contact"
                  className="text-[#c9a84c] hover:text-[#e2c06a] transition-colors font-medium"
                >
                  {t("helpLink")}
                </a>{" "}
                {t("helpSuffix")}
              </p>
            </div>
          </motion.div>

          {/* Right column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion className="space-y-3">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <AccordionItem
                    value={i}
                    className="border border-black/5 dark:border-[rgba(255,255,255,0.06)] rounded-xl bg-black/[0.02] dark:bg-[rgba(255,255,255,0.02)] px-6 overflow-hidden data-open:border-[rgba(201,168,76,0.2)] data-open:bg-[rgba(201,168,76,0.03)] transition-all duration-300"
                  >
                    <AccordionTrigger className="text-gray-900/80 dark:text-white/80 hover:text-gray-900 dark:hover:text-white text-sm text-left py-5 hover:no-underline aria-expanded:text-[#c9a84c] transition-colors">
                      <span className="flex items-start gap-3">
                        <span className="text-[#c9a84c]/30 text-xs font-mono mt-0.5 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-900/50 dark:text-white/50 text-sm leading-relaxed pb-5 pl-7">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
