"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

// ─── Projects data ─────────────────────────────────────────────────────────
const projects = [
  {
    title: "FORMA",
    tag: "Próximamente",
    year: "2024",
    stack: "Front-end · UI/UX",
    description: "Cargando descripción del proyecto...",
    accent: "rgba(124,92,252,0.15)",
    accentBorder: "rgba(124,92,252,0.35)",
  },
  {
    title: "DRIVE THE RING",
    tag: "Próximamente",
    year: "2024",
    stack: "Front-end · UI/UX",
    description: "Cargando descripción del proyecto...",
    accent: "rgba(255,255,255,0.15)",
    accentBorder: "rgba(255,255,255,0.35)",
  },
  {
    title: "XOP",
    tag: "Próximamente",
    year: "2024",
    stack: "Front-end · UI/UX",
    description: "Cargando descripción del proyecto...",
    accent: "rgba(124,92,252,0.15)",
    accentBorder: "rgba(124,92,252,0.35)",
  },
  {
    title: "PREVENCION",
    tag: "Próximamente",
    year: "2024",
    stack: "Front-end · UI/UX",
    description: "Cargando descripción del proyecto...",
    accent: "rgba(255,255,255,0.15)",
    accentBorder: "rgba(255,255,255,0.35)",
  },
  {
    title: "HANS GUIA",
    tag: "Próximamente",
    year: "2024",
    stack: "Front-end · UI/UX",
    description: "Cargando descripción del proyecto...",
    accent: "rgba(124,92,252,0.15)",
    accentBorder: "rgba(124,92,252,0.35)",
  },
  {
    title: "BORA",
    tag: "Próximamente",
    year: "2024",
    stack: "Front-end · UI/UX",
    description: "Cargando descripción del proyecto...",
    accent: "rgba(255,255,255,0.15)",
    accentBorder: "rgba(255,255,255,0.35)",
  },
];

// ─── Stats data ────────────────────────────────────────────────────────────
const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos entregados" },
  { value: "10+",   label: "features diseñadas" },
];

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── About ─────────────────────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section
      id="sobre"
      className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--txt)" }}
        >
          Sobre mí
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-5">
            <h2
              className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight tracking-tight"
              style={{ color: "var(--txt)" }}
            >
              Diseño y código que trabajan juntos.
            </h2>
            <p
              className="mt-5 text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--txt-muted)" }}
            >
              Soy diseñador UX/UI y desarrollador front-end con base en <span style={{ color: "var(--txt)" }} className="font-medium">Córdoba, Argentina</span>. Me especializo en construir interfaces que no solo se ven premium, sino que convierten — con{" "}
              <span style={{ color: "var(--txt)" }} className="font-medium">Next.js</span>,{" "}
              <span style={{ color: "var(--txt)" }} className="font-medium">React</span> y sistemas de diseño en{" "}
              <span style={{ color: "var(--txt)" }} className="font-medium">Figma</span>.
            </p>
            <p
              className="mt-4 text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--txt-muted)" }}
            >
              Trabajo con startups y negocios que quieren presencia digital con identidad propia, entrega rápida y código que escala.
            </p>
          </div>

          {/* Stats + Image */}
          <div className="grid gap-8 md:grid-cols-2 lg:col-span-7 lg:gap-10">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-5 md:flex md:items-center md:gap-6"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span
                    className="block font-display text-3xl font-bold md:text-4xl"
                    style={{ color: "var(--accent)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.18em] md:mt-0"
                    style={{ color: "var(--txt)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Image (hidden on mobile, shown on tablet/desktop to the right) */}
            <div className="relative hidden w-full overflow-hidden rounded-2xl md:block bg-[var(--bg)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt="Tomás Ramírez"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Works ─────────────────────────────────────────────────────────────────
export function WorksSection() {
  return (
    <section
      id="trabajos"
      className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--txt)" }}
            >
              Proyectos destacados
            </p>
            <h2
              className="mt-2 font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold tracking-tight"
              style={{ color: "var(--txt)" }}
            >
              Selección de trabajos
            </h2>
          </div>
          <Link
            href="#contacto"
            className="group inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold transition-colors"
            style={{ color: "var(--accent)" }}
          >
            Hablemos de tu proyecto
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
              className="group overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Color stripe / visual */}
              <div
                className="flex h-44 items-end p-5"
                style={{ background: p.accent, borderBottom: `1px solid ${p.accentBorder}` }}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest"
                    style={{ background: p.accentBorder, color: "var(--txt)" }}
                  >
                    {p.tag}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--txt-muted)" }}
                  >
                    {p.year}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="font-display text-lg font-bold tracking-tight"
                    style={{ color: "var(--txt)" }}
                  >
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    className="mt-0.5 h-5 w-5 shrink-0 transition-colors"
                    style={{ color: "var(--txt-subtle)" }}
                  />
                </div>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--txt-muted)" }}
                >
                  {p.description}
                </p>
                <p
                  className="mt-3 text-xs font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {p.stack}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────
export function ContactSection() {
  return (
    <section
      id="contacto"
      className="px-4 py-20 sm:px-5 sm:py-28 lg:px-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--txt)" }}
        >
          Contacto
        </p>

        <h2
          className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-tight tracking-tight"
          style={{ color: "var(--txt)" }}
        >
          ¿Tenés un proyecto?{" "}
          <span className="text-gradient-hero">Escribime.</span>
        </h2>

        <p
          className="mx-auto mt-5 max-w-md text-base leading-relaxed"
          style={{ color: "var(--txt-muted)" }}
        >
          Respondo en menos de 48 h. Contame de qué se trata y coordinamos una llamada sin compromiso.
        </p>

        <a
          href="mailto:rtomassebastian@gmail.com"
          className="group mx-auto mt-10 inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 active:scale-95 sm:w-auto"
          style={{ background: "var(--accent)", boxShadow: "0 0 28px var(--glow)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#9070ff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; }}
        >
          rtomassebastian@gmail.com
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
        </a>

        {/* Social links */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/tomas-ramirez-ok/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--txt-muted)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--txt)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--txt-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/tomasramirezdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--txt-muted)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--txt)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--txt-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:rtomassebastian@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--txt-muted)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--txt)"; e.currentTarget.style.borderColor = "var(--border-strong)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--txt-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <footer
        className="mx-auto mt-20 max-w-7xl border-t px-2 pt-8 text-center text-xs"
        style={{ borderColor: "var(--border)", color: "var(--txt-subtle)" }}
      >
        © {new Date().getFullYear()} Tomas Ramirez. Hecho con Next.js & Tailwind.
      </footer>
    </section>
  );
}
