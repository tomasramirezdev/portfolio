"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AvailabilityBadge() {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium"
      style={{
        background: "rgba(34,197,94,0.1)",
        border: "1px solid rgba(34,197,94,0.2)",
        color: "#4ade80",
      }}
    >
      <span
        className="pulse-dot h-1.5 w-1.5 rounded-full"
        style={{ background: "#4ade80" }}
      />
      Disponible para proyectos
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
  return (
    <section
      id="inicio"
      className="relative overflow-x-hidden pb-12 pt-[max(7.25rem,env(safe-area-inset-top)+5.25rem)] sm:pb-16 md:pb-24 md:pt-40"
      style={{ background: "var(--bg)" }}
    >
      {/* Radial glow behind the visual */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-5 md:grid-cols-[1fr_minmax(min(100%,380px),1.05fr)] md:items-center md:gap-8 md:px-5 lg:grid-cols-[1fr_1.12fr] lg:gap-12 lg:px-8">
        <div className="max-w-xl md:max-w-none">
          <AvailabilityBadge />

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-[clamp(2.25rem,8vw+0.5rem,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-shimmer text-balance"
          >
            Diseño interfaces<br />
            que convierten.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-[0.9375rem] leading-relaxed sm:text-base md:mt-7 md:text-lg"
            style={{ color: "var(--txt-muted)" }}
          >
            Soy <span style={{ color: "var(--txt)" }} className="font-medium">Tomas</span> — UX/UI designer y front-end developer desde{" "}
            <span style={{ color: "var(--txt)" }} className="font-medium">Córdoba, Argentina</span>. Construyo productos digitales que se ven bien y{" "}
            <span style={{ color: "var(--txt)" }} className="font-medium">funcionan mejor</span>.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <PillButton href="#trabajos">Ver proyectos</PillButton>
            <PillButton href="#contacto">Contactame</PillButton>
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
