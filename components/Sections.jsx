"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Kinimatic",
    tag: "Producto & marca",
    tone: "from-zinc-800 to-zinc-950",
  },
  {
    title: "Heave",
    tag: "Sitio corporativo",
    tone: "from-neutral-800 to-black",
  },
  {
    title: "Essentia",
    tag: "E-commerce",
    tone: "from-stone-800 to-zinc-950",
  },
];

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-t border-white/[0.06] bg-black px-4 py-16 sm:px-5 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:gap-16 md:items-start">
        <h2 className="font-display text-[clamp(1.75rem,5vw,2.25rem)] font-bold tracking-tight text-white md:text-4xl">
          Tu socio digital
        </h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg md:mt-0">
          Diseño y desarrollo front-end con foco en rendimiento, accesibilidad
          y una estética que transmite confianza. Cada entrega se piensa para
          escalar: componentes claros, sistemas de diseño y bases técnicas
          sólidas en{" "}
          <span className="text-zinc-200">Next.js</span> y{" "}
          <span className="text-zinc-200">React</span>.
        </p>
      </div>
    </section>
  );
}

export function WorksSection() {
  return (
    <section id="trabajos" className="bg-black px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Proyectos destacados
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.25rem)] font-bold tracking-tight text-white md:text-4xl">
              Selección de trabajos
            </h2>
          </div>
          <Link
            href="#contacto"
            className="group inline-flex min-h-11 items-center gap-2 self-start text-sm font-medium text-zinc-300 active:text-white sm:hover:text-white"
          >
            Hablar de un proyecto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/50"
            >
              <div
                className={`flex aspect-[4/3] items-end bg-gradient-to-br p-6 ${p.tone}`}
              >
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-4">
                <h3 className="font-display text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <span className="text-zinc-500 transition-colors group-hover:text-zinc-300">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="border-t border-white/[0.06] bg-black px-4 py-20 sm:px-5 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(1.75rem,5vw,2.25rem)] font-bold tracking-tight text-white md:text-4xl">
          ¿Hacemos algo memorable?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          Escríbeme para una llamada introductoria o un brief. Respuesta en
          menos de 48 h.
        </p>
        <a
          href="mailto:hola@ejemplo.com"
          className="mx-auto mt-10 inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3.5 text-sm font-semibold text-black transition-transform active:scale-[0.98] sm:w-auto sm:max-w-none sm:px-6 sm:hover:scale-[1.02]"
        >
          hola@ejemplo.com
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <footer className="mx-auto mt-16 max-w-7xl border-t border-white/[0.06] px-2 pt-10 text-center text-xs text-zinc-500 sm:mt-20 sm:text-sm">
        © {new Date().getFullYear()} Portfolio. Hecho con Next.js y Tailwind.
      </footer>
    </section>
  );
}
