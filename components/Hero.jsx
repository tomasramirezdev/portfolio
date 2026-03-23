"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

function PillButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-full border border-white/18 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition-colors active:bg-white/[0.08] sm:min-h-0 sm:w-auto sm:justify-start sm:hover:border-white/28 sm:hover:bg-white/[0.09] ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="h-4 w-4 text-zinc-200" strokeWidth={2} />
      </span>
    </Link>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-x-hidden bg-black pb-12 pt-[max(7.25rem,env(safe-area-inset-top)+5.25rem)] sm:pb-16 md:pb-24 md:pt-40"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-5 md:grid-cols-[1fr_minmax(min(100%,380px),1.05fr)] md:items-center md:gap-8 md:px-5 lg:grid-cols-[1fr_1.12fr] lg:gap-12 lg:px-8">
        <div className="max-w-xl md:max-w-none">
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(2rem,8vw+0.5rem,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-gradient-hero text-balance"
          >
            Creando obras maestras digitales
          </motion.h1>
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-zinc-400 sm:text-base md:mt-6 md:text-lg"
          >
            Acompaño a marcas y negocios a construir identidades digitales
            contundentes, acelerar crecimiento y diseñar experiencias online
            memorables.
          </motion.p>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <PillButton href="#trabajos">Ver más</PillButton>
            <PillButton href="#contacto">Contacto</PillButton>
          </motion.div>
        </div>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative min-h-[280px] w-full min-w-0 sm:min-h-[360px] md:min-h-[min(72vh,720px)] md:justify-self-stretch"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
