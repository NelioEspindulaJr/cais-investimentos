"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, MapPin } from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function Contact() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    analytics.leadFormSubmit(form);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    analytics.leadFormSuccess();
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl border border-[rgba(201,168,76,0.12)] bg-[rgba(255,255,255,0.02)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#2a7c4f] mb-4" />
                  </motion.div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {t("successTitle")}
                  </h3>
                  <p className="text-white/50 text-sm">{t("success")}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#c9a84c] hover:text-[#e2c06a] text-sm transition-colors"
                  >
                    {t("sendAnother")}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                        {tf("name")}
                      </label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder={tf("namePlaceholder")}
                        className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-white placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                        {tf("phone")}
                      </label>
                      <Input
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder={tf("phonePlaceholder")}
                        className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-white placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl h-11"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                      {tf("email")}
                    </label>
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder={tf("emailPlaceholder")}
                      className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-white placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                      {tf("message")}
                    </label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder={tf("messagePlaceholder")}
                      rows={4}
                      className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-white placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c9a84c] hover:bg-[#e2c06a] text-black font-semibold h-12 rounded-xl transition-all duration-300"
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {tf("submit")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Offices */}
            <div className="p-6 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c9a84c]" />
                {t("officesTitle")}
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-white/70 text-sm">
                    {t("office1Name")}
                  </div>
                  <div className="text-white/30 text-xs">
                    {t("office1State")}
                  </div>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div>
                  <div className="text-white/70 text-sm">
                    {t("office2Name")}
                  </div>
                  <div className="text-white/30 text-xs">
                    {t("office2State")}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="p-6 rounded-xl border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.15)] flex items-center justify-center">
                  <span className="text-[#c9a84c] text-xs font-bold">BTG</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">
                    {t("btgPartner")}
                  </div>
                  <div className="text-white/40 text-xs">
                    {t("btgAccredited")}
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                {t("btgDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
