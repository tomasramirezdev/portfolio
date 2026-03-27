"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

// ─── DriveTheRing colour palette ────────────────────────────────────────────
const C = {
  orange:      "#ff6b1a",
  orangeLight: "#ff8c42",
  orangeDim:   "rgba(255,107,26,0.10)",
  orangeMid:   "rgba(255,107,26,0.22)",
  orangeGlow:  "rgba(255,107,26,0.38)",
  bg:          "#07060a",
  surface:     "#0d0b10",
  surface2:    "#131018",
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
    heroLabel: "Proyecto 01 \u00a0·\u00a0 UX/UI Design \u00a0·\u00a0 2024",
    tagline: "Plataforma premium de alquiler de autos de carrera. Proceso UX/UI completo orientado a maximizar conversión y simplificar la reserva de experiencias en pista.",
    scrollCue: "Scroll para explorar",
    stats: [
      { value: "3",    unit: "meses", label: "Duración del proyecto" },
      { value: "+40%", unit: "",      label: "Tasa de conversión" },
      { value: "15+",  unit: "",      label: "Entrevistas de usuario" },
      { value: "8",    unit: "",      label: "Iteraciones de diseño" },
    ],
    toolsLabel: "Herramientas & metodologías",
    galleryLabel: "Galería de diseños",
    gallerySub: "Pantallas principales del proyecto — mockups e interfaces finales",
    galleryItems: [
      { label: "Hero & Search — Pantalla principal",        span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Detalle de vehículo",                       span: "",                            ratio: "aspect-[4/5]" },
      { label: "Flujo de reserva — Step 1",                 span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile checkout — Paso final",              span: "",                            ratio: "aspect-[4/3]" },
      { label: "Design system — Componentes & tokens",      span: "",                            ratio: "aspect-[4/3]" },
    ],
    meta: [
      { label: "Rol",      value: "UX/UI Designer — Lead" },
      { label: "Año",      value: "2024" },
      { label: "Duración", value: "3 meses" },
      { label: "Tipo",     value: "Producto digital · B2C" },
      { label: "Stack",    value: "Figma · FigJam · Maze" },
    ],
    overviewLabel: "Descripción del proyecto",
    overviewHeading: "Un flujo de reserva tan afinado como un motor de F1.",
    overviewP1: "Drive The Ring es una plataforma digital para amantes del automovilismo que quieren vivir la experiencia de manejar autos de carrera en circuitos reales. El desafío fue diseñar un sistema de reserva que se sintiera tan premium como el producto que vendía.",
    overviewP2Part1: "Lideré el proceso UX/UI completo: desde research y wireframes hasta el design system y los assets listos para desarrollo. El resultado fue un",
    overviewStrong: "aumento del 40% en la tasa de conversión",
    overviewP2Part2: "y una reducción significativa del drop-off en el flujo de checkout.",
    quote: "\u201cDiseñar para adrenalina requiere decisiones rápidas y cero fricción. Cada interacción fue pensada para que el usuario sienta velocidad antes de pisar el acelerador.\u201d",
    processLabel: "Proceso de diseño",
    processHeading: "De la investigación al producto final.",
    designProcess: [
      {
        number: "01",
        title: "Investigación de usuarios",
        description: "Realicé 15+ entrevistas en profundidad con entusiastas del automovilismo. Mapeé sus frustraciones, expectativas y el contexto en el que reservan experiencias de conducción de alto rendimiento.",
      },
      {
        number: "02",
        title: "Análisis competitivo",
        description: "Estudié plataformas de alquiler de lujo y experiencias en pista a nivel global. Identifiqué oportunidades de diferenciación en confianza, velocidad de reserva y narrativa visual premium.",
      },
      {
        number: "03",
        title: "Wireframes de baja fidelidad",
        description: "Estructuré los flujos clave: búsqueda de autos, selección de circuito y checkout. La prioridad fue reducir la fricción cognitiva en cada paso del embudo de conversión.",
      },
      {
        number: "04",
        title: "Prototipado interactivo",
        description: "Construí prototipos de alta interactividad en Figma con flujos completos de reserva. Usados directamente en las sesiones de usability testing con usuarios reales.",
      },
      {
        number: "05",
        title: "Diseño UI de alta fidelidad",
        description: "Desarrollé el sistema de diseño completo: tipografía agresiva, paleta dark con acentos naranjas, componentes de confianza y microinteracciones que refuerzan velocidad y adrenalina.",
      },
      {
        number: "06",
        title: "Testing de usabilidad",
        description: "8 rondas de testing iterativo. Cada ciclo identificó puntos de fricción específicos que se resolvieron antes de la siguiente iteración, logrando un flujo de reserva 60% más rápido.",
      },
    ],
    challengesLabel: "Desafíos & soluciones",
    challengesHeading: "Los problemas reales requieren soluciones reales.",
    challengePrefix: "Desafío",
    solutionLabel: "Solución implementada",
    challenges: [
      {
        number: "01",
        challenge: "Flujo de reserva multi-variable",
        description: "El usuario debía seleccionar auto, circuito, fecha, duración y add-ons de forma simultánea. Demasiadas variables en un solo paso generaban abandono masivo antes del pago.",
        solution: "Diseñé un wizard step-by-step con estado persistente y resumen lateral en tiempo real. Cada paso tiene una única decisión. La tasa de completion del checkout aumentó un 73%.",
      },
      {
        number: "02",
        challenge: "Confianza en transacciones de alto valor",
        description: "Reservar un día en pista puede costar miles de dólares. El usuario necesitaba absoluta seguridad antes de ingresar su tarjeta — y el diseño original no la transmitía.",
        solution: "Implementé social proof contextual (reviews con foto y nombre real), badges de garantía visibles en cada paso, y una sección 'Qué incluye' con iconografía clara. El drop-off en checkout bajó un 45%.",
      },
      {
        number: "03",
        challenge: "Experiencia mobile-first en contexto desktop-dominado",
        description: "El 68% del tráfico era mobile, pero el flujo original estaba pensado para escritorio. Imágenes cortadas, botones pequeños y un checkout imposible en pantallas chicas.",
        solution: "Rediseñé la arquitectura desde mobile hacia arriba: carousels fullscreen, áreas de toque generosas y checkout en 3 pasos concretos. El bounce rate mobile cayó un 38%.",
      },
    ],
    resultsLabel: "Resultados clave",
    results: [
      { metric: "+73%",  detail: "Completion rate en el flujo de checkout" },
      { metric: "−45%",  detail: "Drop-off en la página de pago" },
      { metric: "−38%",  detail: "Bounce rate en mobile" },
    ],
    ctaLabel: "¿Te gustó el trabajo?",
    ctaHeading: "Trabajemos juntos en tu próximo proyecto.",
    ctaBody: "Diseño y código que convierte. Hablemos de tu idea y construyamos algo que destaque.",
    viewMore: "Ver más proyectos",
    footerText: "FORMA — Sistema para mueblerias · Córdoba, Argentina",
  },
  en: {
    back: "Back to portfolio",
    heroLabel: "Project 01 \u00a0·\u00a0 UX/UI Design \u00a0·\u00a0 2024",
    tagline: "Premium race car rental platform. Full UX/UI process focused on maximizing conversion and simplifying track experience bookings.",
    scrollCue: "Scroll to explore",
    stats: [
      { value: "3",    unit: "months", label: "Project duration" },
      { value: "+40%", unit: "",       label: "Conversion rate" },
      { value: "15+",  unit: "",       label: "User interviews" },
      { value: "8",    unit: "",       label: "Design iterations" },
    ],
    toolsLabel: "Tools & methodologies",
    galleryLabel: "Design gallery",
    gallerySub: "Key screens from the project — mockups and final interfaces",
    galleryItems: [
      { label: "Hero & Search — Main screen",               span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Vehicle detail",                            span: "",                            ratio: "aspect-[4/5]" },
      { label: "Booking flow — Step 1",                     span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile checkout — Final step",              span: "",                            ratio: "aspect-[4/3]" },
      { label: "Design system — Components & tokens",       span: "",                            ratio: "aspect-[4/3]" },
    ],
    meta: [
      { label: "Role",     value: "UX/UI Designer — Lead" },
      { label: "Year",     value: "2024" },
      { label: "Duration", value: "3 months" },
      { label: "Type",     value: "Digital product · B2C" },
      { label: "Stack",    value: "Figma · FigJam · Maze" },
    ],
    overviewLabel: "Project overview",
    overviewHeading: "A booking flow as finely tuned as an F1 engine.",
    overviewP1: "Drive The Ring is a digital platform for motorsport enthusiasts who want to experience driving race cars on real circuits. The challenge was designing a booking system that felt as premium as the product it was selling.",
    overviewP2Part1: "I led the full UX/UI process — from research and wireframes through to the design system and developer-ready assets. The result was a",
    overviewStrong: "40% increase in conversion rate",
    overviewP2Part2: "and a significant reduction in drop-off throughout the checkout flow.",
    quote: "\u201cDesigning for adrenaline means fast decisions and zero friction. Every interaction was crafted so users feel the speed before they ever hit the throttle.\u201d",
    processLabel: "Design process",
    processHeading: "From research to final product.",
    designProcess: [
      {
        number: "01",
        title: "User research",
        description: "I conducted 15+ in-depth interviews with motorsport enthusiasts. I mapped their frustrations, expectations, and the context in which they book high-performance driving experiences.",
      },
      {
        number: "02",
        title: "Competitive analysis",
        description: "I studied luxury rental platforms and track experiences globally. I identified differentiation opportunities in trust, booking speed, and premium visual storytelling.",
      },
      {
        number: "03",
        title: "Low-fidelity wireframes",
        description: "I structured the key flows: car search, circuit selection, and checkout. The priority was reducing cognitive friction at every step of the conversion funnel.",
      },
      {
        number: "04",
        title: "Interactive prototyping",
        description: "I built highly interactive Figma prototypes with full booking flows, used directly in usability testing sessions with real users.",
      },
      {
        number: "05",
        title: "High-fidelity UI design",
        description: "I developed the complete design system: aggressive typography, dark palette with orange accents, trust-building components, and micro-interactions that reinforce speed and adrenaline.",
      },
      {
        number: "06",
        title: "Usability testing",
        description: "8 rounds of iterative testing. Each cycle surfaced specific friction points that were resolved before the next iteration, resulting in a booking flow that was 60% faster.",
      },
    ],
    challengesLabel: "Challenges & solutions",
    challengesHeading: "Real problems require real solutions.",
    challengePrefix: "Challenge",
    solutionLabel: "Solution",
    challenges: [
      {
        number: "01",
        challenge: "Multi-variable booking flow",
        description: "Users had to select a car, circuit, date, duration, and add-ons all at once. Too many decisions in a single step led to massive drop-off before payment.",
        solution: "I designed a step-by-step wizard with persistent state and a live summary panel. Each step presents a single decision. Checkout completion rate increased by 73%.",
      },
      {
        number: "02",
        challenge: "Building trust for high-value transactions",
        description: "A day on the track can cost thousands of dollars. Users needed absolute confidence before entering their card — and the original design wasn't delivering that.",
        solution: "I implemented contextual social proof (reviews with real photos and names), visible guarantee badges at every step, and a clear 'What's included' section with clean iconography. Checkout drop-off fell by 45%.",
      },
      {
        number: "03",
        challenge: "Mobile-first experience in a desktop-dominated context",
        description: "68% of traffic was mobile, but the original flow was built for desktop. Cropped images, small buttons, and a checkout that was nearly impossible on small screens.",
        solution: "I redesigned the architecture from mobile up: fullscreen carousels, generous touch targets, and a concrete 3-step checkout. Mobile bounce rate dropped by 38%.",
      },
    ],
    resultsLabel: "Key results",
    results: [
      { metric: "+73%",  detail: "Checkout flow completion rate" },
      { metric: "−45%",  detail: "Drop-off on the payment page" },
      { metric: "−38%",  detail: "Mobile bounce rate" },
    ],
    ctaLabel: "Like what you see?",
    ctaHeading: "Let's work together on your next project.",
    ctaBody: "Design and code that converts. Tell me about your idea and let's build something that stands out.",
    viewMore: "View more projects",
    footerText: "Drive The Ring — UX/UI Project",
  },
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function DriveTheRingPage() {
  const { lang } = useLang();
  const d = content[lang];

  return (
    <>
      {/* Page-scoped CSS */}
      <style>{`
        @keyframes speedlines {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .dtr-speedlines {
          animation: speedlines 6s linear infinite;
        }
        @keyframes dtr-pulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        .dtr-pulse { animation: dtr-pulse 3s ease-in-out infinite; }
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
              border: `1px solid ${C.orangeMid}`,
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

          {/* Vertical grid lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 119px,
                rgba(255,107,26,0.05) 119px,
                rgba(255,107,26,0.05) 120px
              )`,
            }}
          />

          {/* Radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 55% at 50% 65%, rgba(255,107,26,0.09) 0%, transparent 70%)`,
            }}
          />

          {/* Speed-lines moving strip — decorative */}
          <div aria-hidden="true" className="pointer-events-none absolute bottom-16 left-0 right-0 h-px overflow-hidden">
            <div
              className="dtr-speedlines flex"
              style={{ width: "200%", height: "1px", background: `linear-gradient(90deg, transparent 0%, ${C.orange} 25%, transparent 50%, ${C.orange} 75%, transparent 100%)` }}
            />
          </div>

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
              style={{ color: C.orange }}
            >
              {d.heroLabel}
            </motion.p>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 14vw, 9rem)",
                background: `linear-gradient(135deg, #ffffff 0%, ${C.orangeLight} 45%, ${C.orange} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              DRIVE<br />THE RING
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(241,240,255,0.55)" }}
            >
              {d.tagline}
            </motion.p>

            {/* Scroll cue */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center justify-center gap-4"
            >
              <div style={{ width: 48, height: 1, background: C.orangeMid }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(241,240,255,0.25)" }}>
                {d.scrollCue}
              </span>
              <div style={{ width: 48, height: 1, background: C.orangeMid }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{
            background: C.surface,
            borderTop:    `1px solid ${C.orangeDim}`,
            borderBottom: `1px solid ${C.orangeDim}`,
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
                  style={{ fontSize: "clamp(2rem,5vw,3rem)", color: C.orange }}
                >
                  {s.value}
                  {s.unit && (
                    <span className="ml-1.5 text-lg font-bold" style={{ color: C.orangeLight }}>
                      {s.unit}
                    </span>
                  )}
                </p>
                <p
                  className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em]"
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.orange }}>
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
                {d.overviewP2Part2}
              </p>

              {/* Highlight strip */}
              <div
                className="mt-8 rounded-xl px-5 py-4 flex items-center gap-4"
                style={{ background: C.orangeDim, border: `1px solid ${C.orangeMid}` }}
              >
                <div style={{ width: 3, minWidth: 3, height: 36, borderRadius: 2, background: C.orange }} />
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
                  style={{ background: C.surface, border: `1px solid ${C.orangeDim}` }}
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
            </motion.div>
          </div>
        </section>

        {/* ── TOOLS ────────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{
            background:   C.surface,
            borderTop:    `1px solid ${C.orangeDim}`,
            borderBottom: `1px solid ${C.orangeDim}`,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.orange }}>
              {d.toolsLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Figma", "Prototyping", "User Research", "Usability Testing",
                "Design Systems", "Responsive Design", "Competitive Analysis",
                "Information Architecture", "Wireframing",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: C.orangeDim,
                    border:     `1px solid ${C.orangeMid}`,
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.orange }}>
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
                  style={{ background: C.surface, border: `1px solid ${C.orangeMid}` }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
                    style={{
                      background: `linear-gradient(135deg, ${C.surface} 0%, rgba(255,107,26,0.05) 100%)`,
                    }}
                  >
                    {/* Placeholder racing icon */}
                    <div
                      className="dtr-pulse rounded-full flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        background: C.orangeDim,
                        border: `1px solid ${C.orangeMid}`,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.orange }}>
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
                  className="rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1"
                  style={{ background: C.surface2, border: `1px solid ${C.orangeDim}` }}
                >
                  <span
                    className="font-display text-5xl font-extrabold"
                    style={{ color: "rgba(255,107,26,0.18)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="mt-3 font-display text-base font-bold"
                    style={{ color: "#f1f0ff" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "rgba(241,240,255,0.48)" }}
                  >
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.orange }}>
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
                  style={{ border: `1px solid ${C.orangeDim}` }}
                >
                  {/* Challenge */}
                  <div
                    className="px-6 pt-6 pb-5"
                    style={{ background: `rgba(255,107,26,0.06)` }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: C.orange }}>
                      {d.challengePrefix} {c.number}
                    </p>
                    <h3 className="font-display text-lg font-bold" style={{ color: "#f1f0ff" }}>
                      {c.challenge}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.5)" }}>
                      {c.description}
                    </p>
                  </div>

                  {/* Solution */}
                  <div
                    className="px-6 pt-5 pb-6"
                    style={{ background: C.surface, borderTop: `1px solid ${C.orangeDim}` }}
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

        {/* ── RESULTS HIGHLIGHT ────────────────────────────────────────── */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.orangeDim}`, borderBottom: `1px solid ${C.orangeDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.orange }}
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
                  style={{ background: C.surface2, border: `1px solid ${C.orangeMid}` }}
                >
                  <p
                    className="font-display text-4xl font-extrabold"
                    style={{ color: C.orange }}
                  >
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
          {/* BG glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,107,26,0.07) 0%, transparent 70%)`,
            }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.orange }}>
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
                  style={{
                    background:  C.orange,
                    boxShadow:   `0 0 28px ${C.orangeGlow}`,
                  }}
                >
                  rtomassebastian@gmail.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </a>
                <Link
                  href="/#trabajos"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{
                    border:  `1px solid ${C.orangeMid}`,
                    color:   "#f1f0ff",
                  }}
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
          style={{ borderTop: `1px solid ${C.orangeDim}`, color: "rgba(241,240,255,0.2)" }}
        >
          © {new Date().getFullYear()} Tomas Ramirez &nbsp;·&nbsp; Drive The Ring — UX/UI Project
        </footer>
      </div>
    </>
  );
}
