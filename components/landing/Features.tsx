"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Handshake, UserCheck, Eye, Cpu, MapPin } from "lucide-react";
import { analytics } from "@/lib/analytics";

const icons = [Award, Handshake, UserCheck, Eye, Cpu, MapPin];

export default function Features() {
  const t = useTranslations("features");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section
      ref={ref}
      id="features"
      className="relative py-28 bg-[#0d0d16] overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        style={{
          y: y1,
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(42,124,79,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
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

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <FeatureCard
                  icon={<Icon className="w-5 h-5" />}
                  title={item.title}
                  description={item.description}
                  index={i}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.03)] text-center"
        >
          <p className="text-white/70 text-lg mb-4">{t("ctaText")}</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => analytics.ctaClick("features_specialist")}
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-semibold px-8 py-3 rounded-full text-sm transition-all duration-300"
          >
            {t("ctaButton")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="relative p-6 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-300 group h-52">
      {/* Index number */}
      <div className="absolute top-4 right-4 text-white/5 text-5xl font-bold leading-none select-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-[rgba(201,168,76,0.08)] group-hover:bg-[rgba(201,168,76,0.12)] flex items-center justify-center text-[#c9a84c] mb-4 transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold mb-2 text-base">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
