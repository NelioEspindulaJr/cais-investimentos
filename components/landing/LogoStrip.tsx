"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "BTG Pactual", abbr: "BTG", logo: "/btg-logo.svg" },
  { name: "B3", abbr: "B3", logo: "/b3-logo.png" },
  { name: "Necton", abbr: "NCT", logo: "/necton.svg" },
  { name: "Anbima", abbr: "ANBIMA", logo: "/anbima-logo.svg" },
  { name: "CVM", abbr: "CVM", logo: "/cvm-logo.png" },
  { name: "Banco Central", abbr: "BACEN", logo: "/banco-central-logo.png" },
];

export default function LogoStrip() {
  const t = useTranslations("logoStrip");
  return (
    <section className="py-16 border-y border-[rgba(201,168,76,0.08)] bg-[#0a0a0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-white/30 text-xs tracking-widest uppercase">
          {t("label")}
        </p>
      </div>

      {/* Infinite scroll strip */}
      <Ticker />

      {/* Trust badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <TrustBadge icon="🏆" label={t("badge1Label")} sub={t("badge1Sub")} />
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <TrustBadge icon="✓" label={t("badge2Label")} sub={t("badge2Sub")} />
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <TrustBadge icon="📋" label={t("badge3Label")} sub={t("badge3Sub")} />
          <div className="w-px h-8 bg-white/10 hidden sm:block" />
          <TrustBadge icon="🎓" label={t("badge4Label")} sub={t("badge4Sub")} />
        </div>
      </div>
    </section>
  );
}

const COPIES = 4;
const GAP = 80; // px — must match the gap class below (gap-20 = 80px)
const SPEED = 60; // px/s

function Ticker() {
  const copyRef = useRef<HTMLDivElement>(null);
  const [copyWidth, setCopyWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (copyRef.current) setCopyWidth(copyRef.current.offsetWidth + GAP);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!copyWidth) return;
    let next = x.get() - (delta / 1000) * SPEED;
    if (next <= -copyWidth) next += copyWidth;
    x.set(next);
  });

  return (
    <div className="w-full overflow-hidden">
      <motion.div style={{ x }} className="flex items-center">
        {Array.from({ length: COPIES }).map((_, copyIdx) => (
          <div
            key={copyIdx}
            ref={copyIdx === 0 ? copyRef : undefined}
            className="flex items-center gap-20 shrink-0 mr-20"
          >
            {partners.map((partner) => (
              <Image
                key={partner.abbr}
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TrustBadge({
  icon,
  label,
  sub,
}: {
  icon: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-white/70 text-sm font-medium">{label}</div>
        <div className="text-white/30 text-xs">{sub}</div>
      </div>
    </div>
  );
}
