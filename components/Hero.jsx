"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AvailabilityBadge({ label }) {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em]"
      style={{
        background: "linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.04) 100%)",
        border: "1px solid rgba(34,197,94,0.18)",
        color: "rgba(134,239,172,0.9)",
        boxShadow: "0 0 16px rgba(34,197,94,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
        backdropFilter: "blur(8px)",
      }}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ background: "#4ade80", animationDuration: "2s" }}
        />
        <span className="relative h-1.5 w-1.5 rounded-full" style={{ background: "#4ade80" }} />
      </span>
      {label}
    </motion.div>
  );
}

function PillButton({ href, children }) {
  const base = {
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
    color: "#e4e4e7",
  };
  const hov = {
    background: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
    color: "#ffffff",
  };
  return (
    <Link
      href={href}
      className="group inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-95 sm:min-h-0 sm:w-auto sm:justify-start"
      ref={(el) => { if (el) Object.assign(el.style, base); }}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hov)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, base)}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
    </Link>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section
      id="inicio"
      className="relative overflow-x-hidden pb-12 pt-[max(7.25rem,env(safe-area-inset-top)+5.25rem)] sm:pb-16 md:pb-24 md:pt-40"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-5 md:grid-cols-[1fr_minmax(min(100%,380px),1.05fr)] md:items-center md:gap-8 md:px-5 lg:grid-cols-[1fr_1.12fr] lg:gap-12 lg:px-8">
        <div className="max-w-xl md:max-w-none">
          <AvailabilityBadge label={tr.available} />

          <motion.h1
            key={lang}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-[clamp(2.25rem,8vw+0.5rem,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-shimmer text-balance"
          >
            {tr.headline.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </motion.h1>

          <motion.p
            key={lang + "-bio"}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-[0.9375rem] leading-relaxed sm:text-base md:mt-7 md:text-lg"
            style={{ color: "var(--txt-muted)" }}
          >
            {tr.bio1}
            <span style={{ color: "var(--txt)" }} className="font-medium">{tr.bio2}</span>
            {tr.bio3}
            <span style={{ color: "var(--txt)" }} className="font-medium">{tr.bio4}</span>
            {tr.bio5}
            {tr.bio6 && <span style={{ color: "var(--txt)" }} className="font-medium">{tr.bio6}</span>}
            {tr.bio7}
          </motion.p>

          <motion.div
            key={lang + "-cta"}
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <PillButton href="#trabajos">{tr.cta1}</PillButton>
            <PillButton href="#contacto">{tr.cta2}</PillButton>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative w-full min-w-0 self-stretch md:min-h-[420px]"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
