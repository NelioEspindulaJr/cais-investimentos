"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const items = t.raw("items") as Array<{
    name: string;
    role: string;
    text: string;
    company: string;
  }>;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

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

        {/* Testimonial slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full p-8 md:p-10 rounded-2xl border border-[rgba(201,168,76,0.1)] bg-[rgba(255,255,255,0.02)]">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-[#c9a84c]/30 mb-6" />

                  {/* Text */}
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-8">
                    &quot;{items[current].text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center">
                      <span className="text-[#c9a84c] font-semibold text-sm">
                        {items[current].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {items[current].name}
                      </div>
                      <div className="text-white/40 text-xs">
                        {items[current].role} · {items[current].company}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="px-3 py-1 rounded-full border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.05)] text-[#c9a84c] text-xs">
                        {t("verifiedClient")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[rgba(201,168,76,0.3)] flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-6 h-2 bg-[#c9a84c]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[rgba(201,168,76,0.3)] flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Logo placeholders */}
        {/* <div className="mt-16">
          <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-8">
            {t("clientsTitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {(t.raw("companies") as string[]).map((company, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-white/30 text-sm hover:border-[rgba(201,168,76,0.15)] hover:text-white/50 transition-all duration-300"
                >
                  {company}
                </motion.div>
              )
            )}
          </div>
        </div> */}
      </div>
    </section>
  );
}
