"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

// ─── Prevención colour palette ───────────────────────────────────────────────
const C = {
  pink:      "#f0157b",
  pinkLight: "#ff4da6",
  pinkDim:   "rgba(240,21,123,0.10)",
  pinkMid:   "rgba(240,21,123,0.22)",
  pinkGlow:  "rgba(240,21,123,0.38)",
  bg:        "#07060a",
  surface:   "#0d0b10",
  surface2:  "#131018",
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

// ─── Bilingual content ───────────────────────────────────────────────────────
const content = {
  es: {
    back: "Volver al portfolio",
    heroLabel: "Proyecto 05 \u00a0·\u00a0 UX/UI Design + Desarrollo \u00a0·\u00a0 2024",
    badge: "Diseño & desarrollo completo",
    tagline: "Landing page de generación de leads para una empresa de planes de salud. Diseño UX/UI y desarrollo front-end completo orientado a convertir visitantes en clientes.",
    liveSiteBtn: "Ver sitio en vivo",
    scrollCue: "Scroll para explorar",
    stats: [
      { value: "+30%", label: "Tasa de conversión de leads" },
      { value: "10+",  label: "Planes de salud desarrollados" },
      { value: "100%", label: "Responsive — mobile, tablet, desktop" },
      { value: "3x",   label: "CTAs estratégicos en el funnel" },
    ],
    meta: [
      { label: "Rol",      value: "UX/UI Designer + Developer" },
      { label: "Cliente",  value: "SaludPlus — comercializadora de Prevención" },
      { label: "Año",      value: "2024" },
      { label: "Tipo",     value: "Landing page · Lead generation" },
      { label: "Stack",    value: "HTML · CSS · JavaScript · Figma" },
    ],
    liveSiteCard: "Ver sitio en producción",
    toolsLabel: "Tecnologías & metodologías",
    galleryLabel: "Capturas del sitio",
    gallerySub: "Pantallas finales del sitio en producción",
    galleryItems: [
      { label: "Hero section — Propuesta de valor",        span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Cards de planes — Comparativa",            span: "",                            ratio: "aspect-[4/5]" },
      { label: "Formulario de captación de leads",         span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Experiencia responsive",          span: "",                            ratio: "aspect-[4/3]" },
      { label: "Social proof & logos de prestadores",      span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "Descripción del proyecto",
    overviewHeading: "Cuando el diseño salva vidas — y también genera leads.",
    overviewP1: "SaludPlus es una empresa comercializadora de los planes de salud de Prevención en Argentina. El objetivo era claro: construir una landing page que convirtiera visitantes en leads calificados para sus planes de cobertura médica.",
    overviewP2Part1: "A diferencia de otros proyectos donde solo entrego diseño, acá hice el proceso completo:",
    overviewStrong: "investigación, UX/UI en Figma y desarrollo front-end desde cero",
    overviewP2Part2: "con HTML, CSS y JavaScript. El resultado: un sitio rápido, accesible y con un",
    overviewStrong2: "+30% de tasa de conversión",
    overviewP2Part3: "medida en testing.",
    quote: "\u201cLa salud es la categoría donde el usuario más necesita confiar antes de actuar. Cada decisión de diseño apuntó a reducir la fricción emocional y acelerar la decisión de contacto.\u201d",
    processLabel: "Proceso de trabajo",
    processHeading: "Del brief al deploy en producción.",
    designProcess: [
      {
        number: "01",
        title: "Research & estrategia de contenido",
        description: "Analicé el mercado de salud prepaga en Argentina y estudié el comportamiento de usuarios que buscan planes de cobertura online. Identifiqué los puntos de fricción que impiden la conversión: desconfianza, información compleja y CTAs poco claros.",
      },
      {
        number: "02",
        title: "Wireframing & arquitectura del funnel",
        description: "Diseñé la estructura del funnel de captación: hero con propuesta de valor clara → planes con comparativa → social proof → formulario de contacto. Cada sección fue pensada para mover al usuario hacia la acción.",
      },
      {
        number: "03",
        title: "Diseño UI de alta fidelidad",
        description: "Desarrollé el sistema visual en Figma: paleta rosa/magenta que transmite energía y cuidado, tipografía bold para jerarquía, cards de planes con diferenciación clara, y elementos de confianza (logos de prestadores, garantías).",
      },
      {
        number: "04",
        title: "Desarrollo full-stack del sitio",
        description: "Implementé el diseño desde cero con HTML5, CSS3 y JavaScript vanilla. Sin frameworks — código limpio, performático y 100% personalizado. Incluí animaciones de scroll, validación de formulario en tiempo real y optimización de carga.",
      },
      {
        number: "05",
        title: "Testing & optimización",
        description: "Validé en múltiples dispositivos y navegadores. Refiné el copy de los CTAs, ajusté el contraste para accesibilidad y optimicé el formulario de captura de leads para maximizar la tasa de completitud.",
      },
    ],
    challengesLabel: "Desafíos & soluciones",
    challengesHeading: "Convertir visitantes en leads no es magia — es diseño.",
    challengePrefix: "Desafío",
    solutionLabel: "Solución implementada",
    challenges: [
      {
        number: "01",
        challenge: "Simplificar planes complejos para el usuario final",
        description: "Los planes de salud tienen decenas de variables: cobertura, red de prestadores, precio, modalidad. Presentar todo sin abrumar al usuario era el principal desafío de arquitectura de información.",
        solution: "Diseñé tarjetas de plan con jerarquía visual clara: el nombre, el precio y los 3 beneficios clave al frente. Un comparador secundario disponible solo para quienes quieren profundizar. Esto redujo el tiempo de decisión sin sacrificar información.",
      },
      {
        number: "02",
        challenge: "Generar confianza en una industria sensible",
        description: "La salud es una de las categorías de mayor resistencia al cambio. El usuario tiene miedo de elegir mal y dudar de una marca nueva o poco conocida. La confianza no se declara — se construye con evidencia.",
        solution: "Incorporé logos de prestadores reconocidos, testimonios reales con nombre y foto, una sección de garantías visibles y un diseño clínico-profesional que no deja espacio para la duda. El bounce rate bajó un 35% en mobile.",
      },
      {
        number: "03",
        challenge: "Optimizar el funnel de captura de leads",
        description: "El objetivo de negocio era claro: que el usuario deje sus datos. Pero los formularios largos generan abandono, y los cortos pueden capturar leads de baja calidad.",
        solution: "Diseñé un formulario de 3 campos (nombre, teléfono, plan de interés) con validación visual en tiempo real y un CTA que promete una respuesta en menos de 24 horas. La tasa de completitud del formulario aumentó un 30% respecto al benchmark del sector.",
      },
    ],
    resultsLabel: "Resultados medibles",
    results: [
      { metric: "+30%",  detail: "Conversión de visitantes en leads calificados" },
      { metric: "−35%",  detail: "Bounce rate en mobile tras optimización" },
      { metric: "+48%",  detail: "Clicks en el CTA principal vs. versión sin diseño" },
    ],
    ctaLabel: "¿Te gustó el trabajo?",
    ctaHeading: "Trabajemos juntos en tu próximo proyecto.",
    ctaBody: "Diseño y código que convierte. Hablemos de tu idea y construyamos algo que destaque.",
    viewMore: "Ver más proyectos",
  },
  en: {
    back: "Back to portfolio",
    heroLabel: "Project 05 \u00a0·\u00a0 UX/UI Design + Development \u00a0·\u00a0 2024",
    badge: "Full design & development",
    tagline: "Lead generation landing page for a health insurance company. Full UX/UI design and front-end development focused on converting visitors into customers.",
    liveSiteBtn: "View live site",
    scrollCue: "Scroll to explore",
    stats: [
      { value: "+30%", label: "Lead conversion rate" },
      { value: "10+",  label: "Health plans designed" },
      { value: "100%", label: "Responsive — mobile, tablet, desktop" },
      { value: "3x",   label: "Strategic CTAs in the funnel" },
    ],
    meta: [
      { label: "Role",   value: "UX/UI Designer + Developer" },
      { label: "Client", value: "SaludPlus — Prevención reseller" },
      { label: "Year",   value: "2024" },
      { label: "Type",   value: "Landing page · Lead generation" },
      { label: "Stack",  value: "HTML · CSS · JavaScript · Figma" },
    ],
    liveSiteCard: "View live site",
    toolsLabel: "Technologies & methodologies",
    galleryLabel: "Site screenshots",
    gallerySub: "Final screens from the live production site",
    galleryItems: [
      { label: "Hero section — Value proposition",        span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Plan cards — Comparison view",           span: "",                            ratio: "aspect-[4/5]" },
      { label: "Lead capture form",                      span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Responsive experience",         span: "",                            ratio: "aspect-[4/3]" },
      { label: "Social proof & provider logos",          span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "Project overview",
    overviewHeading: "When design saves lives — and generates leads too.",
    overviewP1: "SaludPlus is a reseller of Prevención health plans in Argentina. The goal was clear: build a landing page that converted visitors into qualified leads for their medical coverage plans.",
    overviewP2Part1: "Unlike projects where I only deliver design, here I handled the full process:",
    overviewStrong: "research, UX/UI in Figma, and front-end development from scratch",
    overviewP2Part2: "using HTML, CSS, and JavaScript. The result: a fast, accessible site with a",
    overviewStrong2: "+30% conversion rate",
    overviewP2Part3: "measured during testing.",
    quote: "\u201cHealth is the category where users need to trust before they act. Every design decision was aimed at reducing emotional friction and accelerating the decision to get in touch.\u201d",
    processLabel: "Work process",
    processHeading: "From brief to production deploy.",
    designProcess: [
      {
        number: "01",
        title: "Research & content strategy",
        description: "I analyzed the private health insurance market in Argentina and studied how users search for coverage plans online. I identified the friction points blocking conversion: distrust, complex information, and unclear CTAs.",
      },
      {
        number: "02",
        title: "Wireframing & funnel architecture",
        description: "I designed the lead capture funnel: hero with a clear value proposition → plans with comparison → social proof → contact form. Every section was built to move the user toward action.",
      },
      {
        number: "03",
        title: "High-fidelity UI design",
        description: "I built the visual system in Figma: a pink/magenta palette conveying energy and care, bold typography for hierarchy, clearly differentiated plan cards, and trust elements (provider logos, guarantees).",
      },
      {
        number: "04",
        title: "Full-stack site development",
        description: "I implemented the design from scratch using HTML5, CSS3, and vanilla JavaScript. No frameworks — clean, performant, fully custom code. Includes scroll animations, real-time form validation, and load optimization.",
      },
      {
        number: "05",
        title: "Testing & optimization",
        description: "Validated across multiple devices and browsers. Refined CTA copy, adjusted contrast for accessibility, and optimized the lead capture form to maximize completion rates.",
      },
    ],
    challengesLabel: "Challenges & solutions",
    challengesHeading: "Converting visitors into leads isn't magic — it's design.",
    challengePrefix: "Challenge",
    solutionLabel: "Solution",
    challenges: [
      {
        number: "01",
        challenge: "Simplifying complex plans for the end user",
        description: "Health plans come with dozens of variables: coverage, provider network, price, modality. Presenting all of this without overwhelming the user was the main information architecture challenge.",
        solution: "I designed plan cards with clear visual hierarchy: name, price, and the 3 key benefits front and center. A secondary comparison tool available only for those who want to dig deeper. This reduced decision time without sacrificing information.",
      },
      {
        number: "02",
        challenge: "Building trust in a sensitive industry",
        description: "Healthcare is one of the categories with the highest resistance to change. Users fear making the wrong choice and distrust unfamiliar brands. Trust isn't claimed — it's built with evidence.",
        solution: "I incorporated recognized provider logos, real testimonials with names and photos, a visible guarantees section, and a clinical-professional design that leaves no room for doubt. Mobile bounce rate dropped 35%.",
      },
      {
        number: "03",
        challenge: "Optimizing the lead capture funnel",
        description: "The business objective was clear: get the user to submit their details. But long forms cause abandonment, and short ones can capture low-quality leads.",
        solution: "I designed a 3-field form (name, phone, plan of interest) with real-time visual validation and a CTA promising a response within 24 hours. Form completion rate increased 30% over the industry benchmark.",
      },
    ],
    resultsLabel: "Measurable results",
    results: [
      { metric: "+30%",  detail: "Visitors converted into qualified leads" },
      { metric: "−35%",  detail: "Mobile bounce rate after optimization" },
      { metric: "+48%",  detail: "Clicks on the main CTA vs. undesigned version" },
    ],
    ctaLabel: "Like what you see?",
    ctaHeading: "Let's work together on your next project.",
    ctaBody: "Design and code that converts. Tell me about your idea and let's build something that stands out.",
    viewMore: "View more projects",
  },
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function PrevencionPage() {
  const { lang } = useLang();
  const d = content[lang];

  return (
    <>
      <style>{`
        @keyframes prv-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .prv-pulse { animation: prv-pulse 3s ease-in-out infinite; }

        @keyframes prv-cross {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
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
              background: "rgba(13,11,16,0.85)",
              border: `1px solid ${C.pinkMid}`,
              color: "#f1f0ff",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.2} />
            {d.back}
          </Link>
        </div>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-28 text-center">

          {/* Grid de fondo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(240,21,123,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(240,21,123,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 75% 55% at 50% 60%, rgba(240,21,123,0.1) 0%, transparent 70%)`,
            }}
          />

          {/* Línea inferior animada */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-16 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${C.pink} 30%, ${C.pinkLight} 50%, ${C.pink} 70%, transparent 100%)`,
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
              style={{ color: C.pink }}
            >
              {d.heroLabel}
            </motion.p>

            {/* Badge de desarrollo full */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.pinkDim, border: `1px solid ${C.pinkMid}`, color: C.pinkLight }}
              >
                <span
                  className="prv-pulse inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: C.pink }}
                />
                {d.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 13vw, 8.5rem)",
                background: `linear-gradient(135deg, #ffffff 0%, ${C.pinkLight} 45%, ${C.pink} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              PREV<span style={{ letterSpacing: "-0.02em" }}>EN</span>CIÓN
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(241,240,255,0.55)" }}
            >
              {d.tagline}
            </motion.p>

            {/* CTA to live site */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-3">
              <a
                href="https://prevencion-salud.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                style={{
                  background: C.pinkDim,
                  border: `1px solid ${C.pinkMid}`,
                  color: "#f1f0ff",
                }}
              >
                {d.liveSiteBtn}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
              </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center justify-center gap-4"
            >
              <div style={{ width: 48, height: 1, background: C.pinkMid }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(241,240,255,0.25)" }}>
                {d.scrollCue}
              </span>
              <div style={{ width: 48, height: 1, background: C.pinkMid }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{
            background:   C.surface,
            borderTop:    `1px solid ${C.pinkDim}`,
            borderBottom: `1px solid ${C.pinkDim}`,
          }}
        >
          <div className="mx-auto max-w-5xl grid grid-cols-2 gap-8 sm:grid-cols-4">
            {d.stats.map((s, i) => (
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
                  style={{ fontSize: "clamp(2rem,5vw,3rem)", color: C.pink }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] max-w-[120px]"
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

            {/* Description */}
            <motion.div
              className="lg:col-span-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.pink }}>
                {d.overviewLabel}
              </p>
              <h2
                className="mt-4 font-display font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#f1f0ff" }}
              >
                {d.overviewHeading}
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(241,240,255,0.52)" }}>
                {d.overviewP1}
              </p>
              <p className="mt-4 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(241,240,255,0.52)" }}>
                {d.overviewP2Part1}{" "}
                <strong style={{ color: "#f1f0ff" }}>{d.overviewStrong}</strong>{" "}
                {d.overviewP2Part2}{" "}
                <strong style={{ color: "#f1f0ff" }}>{d.overviewStrong2}</strong>{" "}
                {d.overviewP2Part3}
              </p>

              {/* Highlight strip */}
              <div
                className="mt-8 rounded-xl px-5 py-4 flex items-start gap-4"
                style={{ background: C.pinkDim, border: `1px solid ${C.pinkMid}` }}
              >
                <div style={{ width: 3, minWidth: 3, height: 40, borderRadius: 2, background: C.pink, marginTop: 2 }} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.7)" }}>
                  {d.quote}
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
              {d.meta.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between rounded-xl px-5 py-3.5"
                  style={{ background: C.surface, border: `1px solid ${C.pinkDim}` }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: "rgba(241,240,255,0.35)" }}
                  >
                    {m.label}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#f1f0ff" }}>
                    {m.value}
                  </span>
                </div>
              ))}

              {/* Live site link card */}
              <a
                href="https://prevencion-salud.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-200 hover:scale-[1.02]"
                style={{ background: C.pinkDim, border: `1px solid ${C.pinkMid}` }}
              >
                <span className="text-sm font-semibold" style={{ color: "#f1f0ff" }}>
                  {d.liveSiteCard}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: C.pink }}
                  strokeWidth={2.2}
                />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── TOOLS ────────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{
            background:   C.surface,
            borderTop:    `1px solid ${C.pinkDim}`,
            borderBottom: `1px solid ${C.pinkDim}`,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.pink }}>
              {d.toolsLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML5", "CSS3", "JavaScript", "Figma", "Responsive Design",
                "UX/UI Design", "Copywriting", "Wireframing",
                "Landing Page Optimization", "Lead Generation",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: C.pinkDim,
                    border:     `1px solid ${C.pinkMid}`,
                    color:      "#f1f0ff",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────────────────── */}
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.pink }}>
                {d.galleryLabel}
              </p>
              <p className="mt-1 text-sm" style={{ color: "rgba(241,240,255,0.35)" }}>
                {d.gallerySub}
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {d.galleryItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className={`overflow-hidden rounded-2xl ${item.span} ${item.ratio}`}
                  style={{ background: C.surface, border: `1px solid ${C.pinkMid}` }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
                    style={{
                      background: `linear-gradient(135deg, ${C.surface} 0%, rgba(240,21,123,0.05) 100%)`,
                    }}
                  >
                    <div
                      className="prv-pulse rounded-full flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        background: C.pinkDim,
                        border: `1px solid ${C.pinkMid}`,
                      }}
                    >
                      {/* Heart icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.pink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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
        <section
          className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
          style={{ background: C.surface }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.pink }}>
                {d.processLabel}
              </p>
              <h2
                className="mt-4 font-display font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.25rem)", color: "#f1f0ff" }}
              >
                {d.processHeading}
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {d.designProcess.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: C.surface2, border: `1px solid ${C.pinkDim}` }}
                >
                  <span
                    className="font-display text-5xl font-extrabold"
                    style={{ color: "rgba(240,21,123,0.18)" }}
                  >
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
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.pink }}>
                {d.challengesLabel}
              </p>
              <h2
                className="mt-4 font-display font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.25rem)", color: "#f1f0ff" }}
              >
                {d.challengesHeading}
              </h2>
            </motion.div>

            <div className="flex flex-col gap-5">
              {d.challenges.map((c, i) => (
                <motion.div
                  key={c.number}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className="overflow-hidden rounded-2xl"
                  style={{ border: `1px solid ${C.pinkDim}` }}
                >
                  <div className="px-6 pt-6 pb-5" style={{ background: "rgba(240,21,123,0.06)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: C.pink }}>
                      {d.challengePrefix} {c.number}
                    </p>
                    <h3 className="font-display text-lg font-bold" style={{ color: "#f1f0ff" }}>
                      {c.challenge}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.5)" }}>
                      {c.description}
                    </p>
                  </div>
                  <div
                    className="px-6 pt-5 pb-6"
                    style={{ background: C.surface, borderTop: `1px solid ${C.pinkDim}` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#4ade80" }}>
                        {d.solutionLabel}
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
          style={{ background: C.surface, borderTop: `1px solid ${C.pinkDim}`, borderBottom: `1px solid ${C.pinkDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.pink }}
            >
              {d.resultsLabel}
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-3">
              {d.results.map((r, i) => (
                <motion.div
                  key={r.metric}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: C.surface2, border: `1px solid ${C.pinkMid}` }}
                >
                  <p className="font-display text-4xl font-extrabold" style={{ color: C.pink }}>
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
            style={{
              background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(240,21,123,0.07) 0%, transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.pink }}>
                {d.ctaLabel}
              </p>
              <h2
                className="mt-4 font-display font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem,5vw,3rem)", color: "#f1f0ff" }}
              >
                {d.ctaHeading}
              </h2>
              <p
                className="mx-auto mt-5 max-w-md text-base leading-relaxed"
                style={{ color: "rgba(241,240,255,0.5)" }}
              >
                {d.ctaBody}
              </p>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="mailto:rtomassebastian@gmail.com"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ background: C.pink, boxShadow: `0 0 28px ${C.pinkGlow}` }}
                >
                  rtomassebastian@gmail.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </a>
                <Link
                  href="/#trabajos"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ border: `1px solid ${C.pinkMid}`, color: "#f1f0ff" }}
                >
                  {d.viewMore}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          className="px-4 py-8 text-center text-xs sm:px-6 lg:px-8"
          style={{ borderTop: `1px solid ${C.pinkDim}`, color: "rgba(241,240,255,0.2)" }}
        >
          © {new Date().getFullYear()} Tomas Ramirez &nbsp;·&nbsp; Prevención — UX/UI + Development Project
        </footer>
      </div>
    </>
  );
}
