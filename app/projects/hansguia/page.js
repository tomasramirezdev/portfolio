"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// ─── Hans Guia colour palette — warm amber / adventure ──────────────────────
const C = {
  amber:      "#d4900a",
  amberLight: "#f0b429",
  amberDim:   "rgba(212,144,10,0.10)",
  amberMid:   "rgba(212,144,10,0.22)",
  amberGlow:  "rgba(212,144,10,0.40)",
  bg:         "#09080a",
  surface:    "#0f0d0b",
  surface2:   "#151210",
};

// ─── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Data ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "5",    label: "Idiomas — PT · ES · EN · FR · DE" },
  { value: "100%", label: "Responsive — mobile first" },
  { value: "Blog", label: "SEO orgánico sobre Ilha Grande" },
  { value: "⭐",   label: "Reviews reales de TripAdvisor integradas" },
];

const languages = [
  { code: "PT", name: "Português" },
  { code: "ES", name: "Español" },
  { code: "EN", name: "English" },
  { code: "FR", name: "Français" },
  { code: "DE", name: "Deutsch" },
];

const tools = [
  "Next.js",
  "Tailwind CSS",
  "i18n / Internacionalización",
  "Figma",
  "UX/UI Design",
  "SEO On-page",
  "Blog Strategy",
  "WhatsApp API",
  "Responsive Design",
  "TripAdvisor Integration",
  "Dynamic Pricing UX",
  "Copywriting × 5 idiomas",
];

const meta = [
  { label: "Cliente",   value: "Hans — Guía de turismo" },
  { label: "Rol",       value: "UX/UI Designer + Developer" },
  { label: "Año",       value: "2024" },
  { label: "Idiomas",   value: "5 — PT, ES, EN, FR, DE" },
  { label: "Ubicación", value: "Ilha Grande, Brasil" },
  { label: "Stack",     value: "Next.js · Tailwind · i18n" },
];

const designProcess = [
  {
    number: "01",
    title: "Brief & research del cliente",
    description:
      "Hans es un guía con años de experiencia, reputación ganada en TripAdvisor y clientes de todo el mundo. El brief fue claro: necesitaba una presencia digital que lo representara como el profesional que es, en el idioma de cada turista.",
  },
  {
    number: "02",
    title: "Arquitectura de contenido multilingüe",
    description:
      "Diseñé la estructura del sitio pensando en 5 audiencias distintas simultáneamente. Cada idioma no es solo una traducción — el tono, las referencias culturales y los CTAs se adaptan a cada mercado. El selector de idioma es parte central de la navegación.",
  },
  {
    number: "03",
    title: "Sistema de precios dinámico",
    description:
      "Los tours de Hans cambian de precio por temporada, por modalidad (grupo o privado) y por demanda. Diseñé un sistema de cards que muestra rangos de precio y envía al usuario a consultar por WhatsApp — sin comprometer la transparencia ni generar falsas expectativas.",
  },
  {
    number: "04",
    title: "UX/UI Design en Figma",
    description:
      "Diseño limpio y aventurero. Cards de tours con fotos de Ilha Grande, indicadores de dificultad, duración y modalidad. Hero con fuerte identidad personal de Hans. Sistema de colores cálido que evoca selva, playa y atardecer tropical.",
  },
  {
    number: "05",
    title: "Blog estratégico para SEO",
    description:
      "Desarrollé un blog con artículos orientados a keywords de cola larga: 'cómo llegar a Ilha Grande', 'mejores playas de Ilha Grande', 'qué hacer en Ilha Grande en familia'. Contenido que atrae tráfico orgánico calificado — turistas que ya están planeando el viaje.",
  },
  {
    number: "06",
    title: "Reviews reales & credibilidad",
    description:
      "Integré reviews reales de TripAdvisor y Google en el sitio. No son testimonios inventados — son opiniones verificadas con nombre, foto y puntuación. Esto traslada la reputación que Hans ya tiene en plataformas externas a su propio canal digital.",
  },
];

const challenges = [
  {
    number: "01",
    challenge: "5 idiomas sin multiplicar el esfuerzo de mantenimiento",
    description:
      "Tener 5 versiones del sitio suena a 5 veces el trabajo de actualización. Si Hans cambia el precio de un tour, ¿lo tiene que cambiar 5 veces? Eso no es viable para un freelancer que está guiando turistas todo el día.",
    solution:
      "Implementé un sistema de internacionalización con un único archivo de configuración por idioma. El contenido que cambia frecuentemente (precios, disponibilidad) vive separado de las traducciones estáticas. Hans actualiza en un solo lugar y el cambio se propaga a los 5 idiomas automáticamente.",
  },
  {
    number: "02",
    challenge: "Precios que cambian sin generar desconfianza",
    description:
      "Publicar un precio fijo cuando ese precio cambia por temporada, modalidad y tamaño de grupo es una trampa. El usuario llega esperando pagar X, le dicen Y, y abandona. Pero no publicar nada tampoco funciona — la gente quiere tener una idea antes de consultar.",
    solution:
      "Diseñé cards de tours con precio 'desde' y etiquetas claras de 'precio por temporada' y 'grupo / privado'. El CTA no dice 'Comprar' sino 'Consultar disponibilidad' — abre WhatsApp con un mensaje pre-armado que incluye el tour de interés. La conversación comienza con contexto, no desde cero.",
  },
  {
    number: "03",
    challenge: "SEO en un destino competido con poca autoridad de dominio",
    description:
      "Ilha Grande tiene miles de resultados en Google. Un sitio nuevo sin backlinks no puede competir con TripAdvisor o Booking en keywords genéricas. La estrategia tenía que ser más inteligente.",
    solution:
      "Aposté a keywords de intención alta y cola larga: 'como chegar a Ilha Grande de barco', 'trilhas com guia em Ilha Grande', 'tours privados Ilha Grande'. Artículos de blog optimizados con estructura semántica, meta tags por idioma y schema markup. El tráfico orgánico comenzó a crecer en las primeras semanas post-lanzamiento.",
  },
  {
    number: "04",
    challenge: "Trasladar la reputación de TripAdvisor al sitio propio",
    description:
      "Hans tiene excelentes reviews en plataformas externas, pero su sitio propio no lo reflejaba. El usuario que llegaba al sitio no tenía evidencia directa de que era un guía confiable.",
    solution:
      "Integré reviews reales con nombre, foto, rating y plataforma de origen. Una sección de testimonios con el promedio de calificación, el número de reviews y un link directo al perfil verificado. La confianza que Hans construyó en años se hace visible en segundos.",
  },
];

const results = [
  { metric: "5",     detail: "Idiomas — PT · ES · EN · FR · DE. El sitio habla el idioma de cada turista" },
  { metric: "Blog",  detail: "Tráfico orgánico creciente desde keywords de Ilha Grande" },
  { metric: "⭐⭐⭐⭐⭐", detail: "Reviews reales de TripAdvisor integradas en el sitio propio" },
];

const galleryItems = [
  { label: "Hero — Identidad personal de Hans",         span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
  { label: "Selector de idioma & navegación",           span: "",                            ratio: "aspect-[4/5]" },
  { label: "Cards de tours con precios dinámicos",      span: "",                            ratio: "aspect-[4/3]" },
  { label: "Blog — SEO Ilha Grande",                    span: "",                            ratio: "aspect-[4/3]" },
  { label: "Reviews de TripAdvisor integradas",         span: "",                            ratio: "aspect-[4/3]" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function HansGuiaPage() {
  return (
    <>
      <style>{`
        @keyframes hans-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .hans-pulse { animation: hans-pulse 3s ease-in-out infinite; }

        @keyframes hans-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .hans-float { animation: hans-float 4s ease-in-out infinite; }
      `}</style>

      <div
        style={{ background: C.bg, color: "#f1f0ff", minHeight: "100dvh" }}
        className="font-sans overflow-x-hidden"
      >

        {/* ── BACK BUTTON ──────────────────────────────────────────────── */}
        <div className="fixed top-5 left-5 z-50">
          <Link
            href="/#trabajos"
            className="group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
            style={{
              background: "rgba(15,13,11,0.85)",
              border: `1px solid ${C.amberMid}`,
              color: "#f1f0ff",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.2} />
            Volver al portfolio
          </Link>
        </div>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-28 text-center">

          {/* Mapa punteado de fondo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(rgba(212,144,10,0.15) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Radial glow cálido */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 75% 55% at 50% 60%, rgba(212,144,10,0.10) 0%, transparent 70%)`,
            }}
          />

          {/* Línea inferior */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-16 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${C.amber}, transparent)`,
              opacity: 0.4,
            }}
          />

          <motion.div
            className="relative z-10 mx-auto max-w-5xl"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              className="mb-5 text-xs font-bold uppercase tracking-[0.35em]"
              style={{ color: C.amber }}
            >
              Proyecto 04 &nbsp;·&nbsp; Cliente real &nbsp;·&nbsp; Ilha Grande, Brasil
            </motion.p>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.amberDim, border: `1px solid ${C.amberMid}`, color: C.amberLight }}
              >
                <span className="hans-pulse inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.amber }} />
                5 idiomas · Precios dinámicos · SEO · Reviews reales
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(3rem,12vw,8rem)",
                background: `linear-gradient(135deg, #ffffff 0%, ${C.amberLight} 45%, ${C.amber} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              HANS<br />GUIA
            </motion.h1>

            {/* Language pills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {languages.map((l) => (
                <span
                  key={l.code}
                  className="rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{ background: C.amberDim, border: `1px solid ${C.amberMid}`, color: C.amberLight }}
                >
                  {l.code} · {l.name}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(241,240,255,0.55)" }}
            >
              Sitio web para un guía de turismo multilingüe en Ilha Grande. 5 idiomas, precios dinámicos por temporada y modalidad, blog SEO y reviews reales de TripAdvisor.
            </motion.p>

            {/* Scroll cue */}
            <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center gap-4">
              <div style={{ width: 48, height: 1, background: C.amberMid }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(241,240,255,0.25)" }}>
                Scroll para explorar
              </span>
              <div style={{ width: 48, height: 1, background: C.amberMid }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.amberDim}`, borderBottom: `1px solid ${C.amberDim}` }}
        >
          <div className="mx-auto max-w-5xl grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <p
                  className="font-display font-extrabold leading-none"
                  style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", color: C.amber }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] max-w-[130px]"
                  style={{ color: "rgba(241,240,255,0.38)" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROJECT OVERVIEW ─────────────────────────────────────────── */}
        <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-12 lg:gap-16">

            <motion.div
              className="lg:col-span-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
                El proyecto
              </p>
              <h2
                className="mt-4 font-display font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#f1f0ff" }}
              >
                El sitio web que habla el idioma de cada turista.
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(241,240,255,0.52)" }}>
                Hans es un guía de turismo con años de experiencia en Ilha Grande que habla 5 idiomas. Sus clientes vienen de todo el mundo — Brasil, Argentina, Estados Unidos, Francia y Alemania. El desafío fue construir una presencia digital que lo represente a la altura de su reputación, en el idioma de cada visitante.
              </p>
              <p className="mt-4 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(241,240,255,0.52)" }}>
                El sitio combina tres pilares: un{" "}
                <strong style={{ color: "#f1f0ff" }}>catálogo de tours con precios dinámicos</strong>{" "}
                que derivan al usuario a WhatsApp, un{" "}
                <strong style={{ color: "#f1f0ff" }}>blog SEO</strong>{" "}
                orientado a captar turistas que están planeando visitar Ilha Grande, y{" "}
                <strong style={{ color: "#f1f0ff" }}>reviews reales de TripAdvisor</strong>{" "}
                que trasladan su reputación ganada al canal propio.
              </p>

              {/* Highlight strip */}
              <div
                className="mt-8 rounded-xl px-5 py-4 flex items-start gap-4"
                style={{ background: C.amberDim, border: `1px solid ${C.amberMid}` }}
              >
                <div style={{ width: 3, minWidth: 3, height: 40, borderRadius: 2, background: C.amber, marginTop: 2 }} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.7)" }}>
                  &ldquo;Un turista alemán y uno brasileño no navegan igual ni esperan lo mismo. El mismo sitio tiene que hablarle a los dos — en su idioma, con sus referencias culturales, con su CTA.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Meta */}
            <motion.div
              className="lg:col-span-5 flex flex-col gap-3"
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {meta.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between rounded-xl px-5 py-3.5"
                  style={{ background: C.surface, border: `1px solid ${C.amberDim}` }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(241,240,255,0.35)" }}>
                    {m.label}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#f1f0ff" }}>
                    {m.value}
                  </span>
                </div>
              ))}

              <a
                href="https://hansguia-etsnjnlv4-rtomassebastian-gmailcoms-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-200 hover:scale-[1.02]"
                style={{ background: C.amberDim, border: `1px solid ${C.amberMid}` }}
              >
                <span className="text-sm font-semibold" style={{ color: "#f1f0ff" }}>
                  Ver sitio en producción
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: C.amber }}
                  strokeWidth={2.2}
                />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── 3 PILARES ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.amberDim}`, borderBottom: `1px solid ${C.amberDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-10 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.amber }}
            >
              Los tres pilares del sitio
            </motion.p>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                  title: "5 idiomas, 1 experiencia",
                  description: "PT · ES · EN · FR · IT. Cada versión adapta no solo el texto, sino el tono, las referencias culturales y los CTAs al mercado de cada turista.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                  title: "Precios dinámicos sin fricción",
                  description: "Precios 'desde' con indicadores de temporada, grupo y privado. El CTA envía al turista a WhatsApp con el tour preseleccionado — la conversación arranca con contexto.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  ),
                  title: "Blog SEO + reviews reales",
                  description: "Artículos sobre cómo llegar a Ilha Grande para captar tráfico orgánico. Reviews verificadas de TripAdvisor para traer credibilidad al canal propio.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-2xl p-6"
                  style={{ background: C.surface2, border: `1px solid ${C.amberDim}` }}
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: C.amberDim, border: `1px solid ${C.amberMid}` }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-display text-base font-bold" style={{ color: "#f1f0ff" }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.48)" }}>
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS ────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
              Tecnologías &amp; disciplinas
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{ background: C.amberDim, border: `1px solid ${C.amberMid}`, color: "#f1f0ff" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────────────────── */}
        <section
          className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.amberDim}`, borderBottom: `1px solid ${C.amberDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
                Capturas del sitio
              </p>
              <p className="mt-1 text-sm" style={{ color: "rgba(241,240,255,0.35)" }}>
                Pantallas principales en producción
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-3">
              {galleryItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className={`overflow-hidden rounded-2xl ${item.span} ${item.ratio}`}
                  style={{ background: C.surface2, border: `1px solid ${C.amberMid}` }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
                    style={{ background: `linear-gradient(135deg, ${C.surface2} 0%, rgba(212,144,10,0.05) 100%)` }}
                  >
                    <div
                      className="hans-float rounded-full flex items-center justify-center"
                      style={{ width: 40, height: 40, background: C.amberDim, border: `1px solid ${C.amberMid}` }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <p className="text-xs text-center leading-relaxed" style={{ color: "rgba(241,240,255,0.22)" }}>
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────── */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
                Proceso de trabajo
              </p>
              <h2
                className="mt-4 font-display font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.25rem)", color: "#f1f0ff" }}
              >
                Un sitio que trabaja mientras Hans guía turistas.
              </h2>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {designProcess.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: C.surface, border: `1px solid ${C.amberDim}` }}
                >
                  <span className="font-display text-5xl font-extrabold" style={{ color: "rgba(212,144,10,0.18)" }}>
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold" style={{ color: "#f1f0ff" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.48)" }}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHALLENGES & SOLUTIONS ───────────────────────────────────── */}
        <section
          className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
          style={{ background: C.surface }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
                Desafíos &amp; soluciones
              </p>
              <h2
                className="mt-4 font-display font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.25rem)", color: "#f1f0ff" }}
              >
                Multilingüe, dinámico y con autoridad real.
              </h2>
            </motion.div>
            <div className="flex flex-col gap-5">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.number}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className="overflow-hidden rounded-2xl"
                  style={{ border: `1px solid ${C.amberDim}` }}
                >
                  <div className="px-6 pt-6 pb-5" style={{ background: "rgba(212,144,10,0.06)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: C.amber }}>
                      Desafío {c.number}
                    </p>
                    <h3 className="font-display text-lg font-bold" style={{ color: "#f1f0ff" }}>
                      {c.challenge}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.5)" }}>
                      {c.description}
                    </p>
                  </div>
                  <div className="px-6 pt-5 pb-6" style={{ background: C.surface2, borderTop: `1px solid ${C.amberDim}` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#4ade80" }}>
                        Solución implementada
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.62)" }}>
                      {c.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS ──────────────────────────────────────────────────── */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ borderTop: `1px solid ${C.amberDim}`, borderBottom: `1px solid ${C.amberDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
              Lo que el sitio entrega
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-3">
              {results.map((r, i) => (
                <motion.div
                  key={r.metric}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: C.surface, border: `1px solid ${C.amberMid}` }}
                >
                  <p className="font-display text-2xl font-extrabold" style={{ color: C.amber }}>
                    {r.metric}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.5)" }}>
                    {r.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(212,144,10,0.07) 0%, transparent 70%)` }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.amber }}>
                ¿Te gustó el trabajo?
              </p>
              <h2
                className="mt-4 font-display font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem,5vw,3rem)", color: "#f1f0ff" }}
              >
                Trabajemos juntos en tu próximo proyecto.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(241,240,255,0.5)" }}>
                Diseño y código que convierte. Hablemos de tu idea y construyamos algo que destaque.
              </p>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="mailto:rtomassebastian@gmail.com"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ background: C.amber, boxShadow: `0 0 28px ${C.amberGlow}`, color: "#09080a" }}
                >
                  rtomassebastian@gmail.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </a>
                <Link
                  href="/#trabajos"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ border: `1px solid ${C.amberMid}`, color: "#f1f0ff" }}
                >
                  Ver más proyectos
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          className="px-4 py-8 text-center text-xs sm:px-6 lg:px-8"
          style={{ borderTop: `1px solid ${C.amberDim}`, color: "rgba(241,240,255,0.2)" }}
        >
          © {new Date().getFullYear()} Tomas Ramirez &nbsp;·&nbsp; Hans Guia — Sitio multilingüe · Ilha Grande, Brasil
        </footer>
      </div>
    </>
  );
}
