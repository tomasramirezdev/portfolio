"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

// ─── Projects data ─────────────────────────────────────────────────────────
const projects = [
  {
    title: "FORMA",
    tag:   { es: "Ver proyecto", en: "View project" },
    year: "2024",
    stack: "Design System · UX/UI · Next.js",
    description: {
      es: "Sistema de catálogo para mueblerias de Córdoba — powered by Google Sheets. No es un e-commerce, es una plataforma de fidelización.",
      en: "White-label catalog system for furniture stores in Córdoba — powered by Google Sheets. Not an e-commerce, a loyalty platform.",
    },
    accent: "rgba(200,169,107,0.12)",
    accentBorder: "rgba(200,169,107,0.30)",
    href: "/projects/forma",
    image: "/forma.png",
  },
  {
    title: "DRIVE THE RING",
    tag:   { es: "Ver proyecto", en: "View project" },
    year: "2024",
    stack: "Front-end · UI/UX",
    description: {
      es: "Plataforma premium de alquiler de autos de carrera. UX/UI completo orientado a conversión — +40% en reservas.",
      en: "Premium racing car rental platform. Full UX/UI focused on conversion — +40% in bookings.",
    },
    accent: "rgba(255,107,26,0.12)",
    accentBorder: "rgba(255,107,26,0.30)",
    href: "/projects/drivethering",
    image: "/drivethering-car.png",
  },
  {
    title: "XOP",
    tag:   { es: "Ver proyecto", en: "View project" },
    year: "2025 →",
    stack: "UX/UI · Dashboard · Design System",
    description: {
      es: "ERP con ecommerce integrado para retail. Diseño del dashboard y tienda online con personalizaciones por rubro — ropa, motos, construcción y cosmética.",
      en: "ERP with integrated ecommerce for retail. Dashboard and online store design with industry-specific customizations — fashion, motorcycles, construction, and cosmetics.",
    },
    accent: "rgba(45,140,255,0.12)",
    accentBorder: "rgba(45,140,255,0.30)",
    href: "/projects/xop",
    image: "/xop.png",
  },
  {
    title: "PREVENCIÓN",
    tag:   { es: "Ver proyecto", en: "View project" },
    year: "2024",
    stack: { es: "Front-end · UI/UX · Desarrollo", en: "Front-end · UI/UX · Development" },
    description: {
      es: "Landing page de generación de leads para planes de salud. Diseño UX/UI + desarrollo completo — +30% conversión.",
      en: "Lead generation landing page for health insurance plans. Full UX/UI design + development — +30% conversion.",
    },
    accent: "rgba(240,21,123,0.12)",
    accentBorder: "rgba(240,21,123,0.30)",
    href: "/projects/prevencion",
    image: "/saludplus.png",
  },
  {
    title: "HANS GUIA",
    tag:   { es: "Ver proyecto", en: "View project" },
    year: "2024",
    stack: "UX/UI · i18n · SEO · Next.js",
    description: {
      es: "Web en 5 idiomas para un guía de turismo en Ilha Grande. Precios dinámicos, blog SEO y reviews reales de TripAdvisor.",
      en: "Website in 5 languages for a tour guide in Ilha Grande. Dynamic pricing, SEO blog, and real TripAdvisor reviews.",
    },
    accent: "rgba(212,144,10,0.12)",
    accentBorder: "rgba(212,144,10,0.30)",
    href: "/projects/hansguia",
    image: "/hansguia.jpg",
  },
  {
    title: "BORA",
    tag:   { es: "Ver proyecto", en: "View project" },
    year: "2024",
    stack: { es: "Branding · UX/UI · Desarrollo", en: "Branding · UX/UI · Development" },
    description: {
      es: "Plataforma de booking de paseos en Ilha Grande. Proyecto personal — logo, UX/UI y desarrollo completo desde cero.",
      en: "Tour booking platform for Ilha Grande. Personal project — logo, UX/UI, and full development from scratch.",
    },
    accent: "rgba(0,201,167,0.12)",
    accentBorder: "rgba(0,201,167,0.30)",
    href: "/projects/bora",
    image: "/bora.jpg",
  },
];

// ─── Stats data ────────────────────────────────────────────────────────────
const statsValues = ["3+", "20+", "10+"];

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
  const { lang } = useLang();
  const tr = t[lang].about;

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
          {tr.label}
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-5">
            <h2
              className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight tracking-tight"
              style={{ color: "var(--txt)" }}
            >
              {tr.headline}
            </h2>
            <p
              className="mt-5 text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--txt-muted)" }}
            >
              {tr.p1}
            </p>
            <p
              className="mt-4 text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--txt-muted)" }}
            >
              {tr.p2}
            </p>
          </div>

          {/* Stats + Image */}
          <div className="grid gap-8 md:grid-cols-2 lg:col-span-7 lg:gap-10">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-6">
              {statsValues.map((val, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 md:flex md:items-center md:gap-6"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span
                    className="block font-display text-3xl font-bold md:text-4xl"
                    style={{ color: "var(--accent)" }}
                  >
                    {val}
                  </span>
                  <span
                    className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.18em] md:mt-0"
                    style={{ color: "var(--txt)" }}
                  >
                    {tr.stats[i]}
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
  const { lang } = useLang();
  const tr = t[lang].works;

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
              {tr.label}
            </p>
            <h2
              className="mt-2 font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold tracking-tight"
              style={{ color: "var(--txt)" }}
            >
              {tr.headline}
            </h2>
          </div>
          <Link
            href="#contacto"
            className="group inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold transition-colors"
            style={{ color: "var(--accent)" }}
          >
            {tr.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3 md:items-stretch">
          {projects.map((p, i) => {
            const CardInner = (
              <>
                {/* Color stripe / visual */}
                <div
                  className="relative flex h-44 items-end p-5 overflow-hidden"
                  style={{
                    background: p.accent,
                    borderBottom: `1px solid ${p.accentBorder}`,
                  }}
                >
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {/* Gradient overlay so text stays legible */}
                  {p.image && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgba(7,6,10,0.85) 0%, rgba(7,6,10,0.2) 60%, transparent 100%)",
                      }}
                    />
                  )}
                  <div className="relative z-10 flex flex-col gap-2">
                    <span
                      className="inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest"
                      style={{ background: p.accentBorder, color: "var(--txt)" }}
                    >
                      {typeof p.tag === "object" ? p.tag[lang] : p.tag}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: p.image ? "rgba(241,240,255,0.7)" : "var(--txt-muted)" }}
                    >
                      {p.year}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="font-display text-lg font-bold tracking-tight"
                      style={{ color: "var(--txt)" }}
                    >
                      {p.title}
                    </h3>
                    <ArrowUpRight
                      className="mt-0.5 h-5 w-5 shrink-0 transition-colors group-hover:text-[var(--accent)]"
                      style={{ color: "var(--txt-subtle)" }}
                    />
                  </div>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--txt-muted)" }}
                  >
                    {typeof p.description === "object" ? p.description[lang] : p.description}
                  </p>
                  <p
                    className="mt-3 text-xs font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {typeof p.stack === "object" ? p.stack[lang] : p.stack}
                  </p>
                </div>
              </>
            );

            return p.href ? (
              <Link key={p.title} href={p.href} className="block h-full">
                <motion.article
                  custom={i}
                  variants={cardReveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 h-full"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  {CardInner}
                </motion.article>
              </Link>
            ) : (
              <motion.article
                key={p.title}
                custom={i}
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="group flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 h-full"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {CardInner}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────
export function ContactSection() {
  const { lang } = useLang();
  const tr = t[lang].contact;
  const footer = t[lang].footer;

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
          {tr.label}
        </p>

        <h2
          className="mt-4 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-tight tracking-tight"
          style={{ color: "var(--txt)" }}
        >
          {tr.headline1}{" "}
          <span className="text-gradient-hero">{tr.headline2}</span>
        </h2>

        <p
          className="mx-auto mt-5 max-w-md text-base leading-relaxed"
          style={{ color: "var(--txt-muted)" }}
        >
          {tr.desc}
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
        © {new Date().getFullYear()} Tomas Ramirez. {footer}
      </footer>
    </section>
  );
}
