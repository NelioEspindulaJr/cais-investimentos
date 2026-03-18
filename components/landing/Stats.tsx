"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Stats() {
  const t = useTranslations("stats");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const stats = [
    { value: "500+", label: t("clients"), sublabel: t("clientsValue") },
    { value: "Top 10", label: t("awards"), sublabel: "Necton 2024" },
    { value: "R$1B+", label: t("aum"), sublabel: t("aumValue") },
  ];

  return (
    <section
      ref={ref}
      id="stats"
      className="relative py-28 overflow-hidden bg-[#0d0d16]"
    >
      {/* Background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
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
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t("title")}
          </h2>
          <div className="w-16 h-px bg-linear-to-r from-transparent via-[#c9a84c] to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <StatCard stat={stat} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
}: {
  stat: { value: string; label: string; sublabel: string };
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group p-8 rounded-2xl border border-[rgba(201,168,76,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(201,168,76,0.2)] hover:bg-[rgba(201,168,76,0.03)] transition-all duration-300 overflow-hidden text-center"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            background:
              "linear-gradient(225deg, rgba(201,168,76,0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Number */}
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {stat.value}
      </div>

      {/* Label */}
      <div className="text-white/60 text-sm mt-2">{stat.label}</div>
    </motion.div>
  );
}
