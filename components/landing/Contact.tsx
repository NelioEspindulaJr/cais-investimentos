"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, MapPin } from "lucide-react";
import { analytics } from "@/lib/analytics";

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    analytics.leadFormSuccess();
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--section-bg-primary)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-900/50 dark:text-white/50 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* WhatsApp highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)]"
        >
          <h3 className="text-gray-900 dark:text-white font-semibold mb-1 text-center">
            {t("whatsappTitle")}
          </h3>
          <p className="text-gray-900/50 dark:text-white/50 text-sm text-center mb-5">
            {t("whatsappSubtitle")}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={t("whatsapp1Link")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.ctaClick("contact_whatsapp_es")}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white transition-colors"
            >
              <WhatsAppIcon />
              <div>
                <div className="text-xs opacity-80">{t("whatsapp1Label")}</div>
                <div className="font-semibold text-sm">{t("whatsapp1")}</div>
              </div>
            </a>
            <a
              href={t("whatsapp2Link")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.ctaClick("contact_whatsapp_pe")}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white transition-colors"
            >
              <WhatsAppIcon />
              <div>
                <div className="text-xs opacity-80">{t("whatsapp2Label")}</div>
                <div className="font-semibold text-sm">{t("whatsapp2")}</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto mb-8">
          <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          <span className="text-xs text-gray-900/40 dark:text-white/40 uppercase tracking-wider">
            {t("orDivider")}
          </span>
          <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl border border-[rgba(201,168,76,0.12)] bg-white/80 dark:bg-[rgba(255,255,255,0.02)] backdrop-blur-sm">
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
                  <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-2">
                    {t("successTitle")}
                  </h3>
                  <p className="text-gray-900/50 dark:text-white/50 text-sm">{t("success")}</p>
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
                      <label className="block text-gray-900/50 dark:text-white/50 text-xs uppercase tracking-wider mb-2">
                        {tf("name")}
                      </label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={tf("namePlaceholder")}
                        className="bg-black/[0.04] dark:bg-[rgba(255,255,255,0.04)] border-black/10 dark:border-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white placeholder:text-gray-900/20 dark:placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900/50 dark:text-white/50 text-xs uppercase tracking-wider mb-2">
                        {tf("phone")}
                      </label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={tf("phonePlaceholder")}
                        className="bg-black/[0.04] dark:bg-[rgba(255,255,255,0.04)] border-black/10 dark:border-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white placeholder:text-gray-900/20 dark:placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl h-11"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-900/50 dark:text-white/50 text-xs uppercase tracking-wider mb-2">
                      {tf("email")}
                    </label>
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={tf("emailPlaceholder")}
                      className="bg-black/[0.04] dark:bg-[rgba(255,255,255,0.04)] border-black/10 dark:border-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white placeholder:text-gray-900/20 dark:placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900/50 dark:text-white/50 text-xs uppercase tracking-wider mb-2">
                      {tf("message")}
                    </label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={tf("messagePlaceholder")}
                      rows={4}
                      className="bg-black/[0.04] dark:bg-[rgba(255,255,255,0.04)] border-black/10 dark:border-[rgba(255,255,255,0.08)] text-gray-900 dark:text-white placeholder:text-gray-900/20 dark:placeholder:text-white/20 focus-visible:border-[rgba(201,168,76,0.4)] focus-visible:ring-0 rounded-xl resize-none"
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
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
            className="flex flex-col gap-5"
          >
            {/* Offices */}
            <div className="p-6 rounded-xl border border-black/[0.06] dark:border-[rgba(255,255,255,0.06)] bg-black/[0.02] dark:bg-[rgba(255,255,255,0.02)]">
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c9a84c]" />
                {t("officesTitle")}
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-gray-900/70 dark:text-white/70 text-sm font-medium">
                    {t("office1Name")}
                  </div>
                  <div className="text-gray-900/40 dark:text-white/40 text-xs">
                    {t("office1State")}
                  </div>
                </div>
                <div className="w-full h-px bg-black/5 dark:bg-white/5" />
                <div>
                  <div className="text-gray-900/70 dark:text-white/70 text-sm font-medium">
                    {t("office2Name")}
                  </div>
                  <div className="text-gray-900/40 dark:text-white/40 text-xs">
                    {t("office2State")}
                  </div>
                </div>
              </div>
            </div>

            {/* BTG Partner */}
            <div className="p-6 rounded-xl border border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.04)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.15)] flex items-center justify-center">
                  <span className="text-[#c9a84c] text-xs font-bold">BTG</span>
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white text-sm font-medium">
                    {t("btgPartner")}
                  </div>
                  <div className="text-gray-900/40 dark:text-white/40 text-xs">
                    {t("btgAccredited")}
                  </div>
                </div>
              </div>
              <p className="text-gray-900/50 dark:text-white/50 text-xs leading-relaxed">
                {t("btgDesc")}
              </p>
            </div>

            {/* Quick response promise */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[rgba(42,124,79,0.2)] bg-[rgba(42,124,79,0.04)]">
              <div className="w-2 h-2 rounded-full bg-[#2a7c4f] animate-pulse shrink-0" />
              <p className="text-gray-900/60 dark:text-white/60 text-sm">
                Respondemos em até 24 horas — geralmente muito menos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
