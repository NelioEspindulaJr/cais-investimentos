"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Users, Building2, ArrowUpRight } from "lucide-react";

export default function Services() {
  const t = useTranslations("services");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const personalFeatures = t.raw("personal.features") as string[];
  const corporateFeatures = t.raw("corporate.features") as string[];

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute left-0 top-0 w-1/2 h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(42,124,79,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title={t("personal.title")}
              description={t("personal.description")}
              features={personalFeatures}
              color="green"
              href="#contact"
              learnMore={t("learnMore")}
            />
          </motion.div>

          {/* Corporate */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <ServiceCard
              icon={<Building2 className="w-6 h-6" />}
              title={t("corporate.title")}
              description={t("corporate.description")}
              features={corporateFeatures}
              color="gold"
              href="#contact"
              learnMore={t("learnMore")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  color,
  href,
  learnMore,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: "green" | "gold";
  href: string;
  learnMore: string;
}) {
  const isGold = color === "gold";
  const accent = isGold ? "#c9a84c" : "#2a7c4f";
  const accentLight = isGold ? "rgba(201,168,76," : "rgba(42,124,79,";

  return (
    <div
      className="relative h-full p-8 rounded-2xl border overflow-hidden group transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, rgba(19,19,30,0.9) 0%, rgba(13,13,22,0.95) 100%)`,
        borderColor: `${accentLight}0.15)`,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at 30% 30%, ${accentLight}0.06) 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${accentLight}0.1)`,
          color: accent,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-white/70">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
              style={{ background: `${accentLight}0.15)` }}
            >
              <Check className="w-2.5 h-2.5" style={{ color: accent }} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={href}
        className="group/link inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
        style={{ color: accent }}
      >
        {learnMore}
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </a>

      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />
    </div>
  );
}
