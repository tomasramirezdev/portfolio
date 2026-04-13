"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

// ─── Genki colour palette — celeste ─────────────────────────────────────────
const C = {
  amber:      "#38bdf8",
  amberLight: "#7dd3fc",
  amberDim:   "rgba(56,189,248,0.10)",
  amberMid:   "rgba(56,189,248,0.22)",
  amberGlow:  "rgba(56,189,248,0.40)",
  bg:         "#00080e",
  surface:    "#000d14",
  surface2:   "#001018",
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
    heroLabel: "Proyecto 03 \u00a0·\u00a0 Cliente \u00a0·\u00a0 Córdoba, Argentina",
    badge: "UX/UI · Desarrollo front-end · Next.js",
    tagline: "Sitio institucional para empresa de energía solar en Córdoba. De una presencia digital básica a una web que transmite confianza y convierte visitas en leads.",
    scrollCue: "Scroll para explorar",
    stats: [
      { value: "500+", label: "Instalaciones realizadas" },
      { value: "10",   unit: "años", label: "En el mercado solar" },
      { value: "98%",  label: "Satisfacción de clientes" },
      { value: "90%",  label: "Ahorro máximo en facturas" },
    ],
    meta: [
      { label: "Rol",      value: "UX/UI Designer + Developer" },
      { label: "Tipo",     value: "Proyecto de cliente" },
      { label: "Año",      value: "2024" },
      { label: "Stack",    value: "Next.js · React · Tailwind CSS" },
      { label: "Deploy",   value: "Vercel" },
      { label: "Lugar",    value: "Córdoba, Argentina" },
    ],
    toolsLabel: "Herramientas & disciplinas",
    galleryLabel: "Galería del proyecto",
    gallerySub: "Pantallas UI y experiencia final",
    galleryItems: [
      { label: "Hero — Propuesta de valor",            span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Sección de servicios",                 span: "",                            ratio: "aspect-[4/5]" },
      { label: "Proyectos destacados",                 span: "",                            ratio: "aspect-[4/3]" },
      { label: "Formulario de cotización",             span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Optimización responsive",     span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "El proyecto",
    overviewHeading: "Una empresa con 10 años de trayectoria que merecía una web a su altura.",
    overviewP1: "Genki lleva más de una década instalando paneles solares en Córdoba. Tienen 500+ instalaciones, un 98% de satisfacción y una acreditación EPEC que los pone en el top del mercado. El problema: su presencia digital no reflejaba nada de eso.",
    overviewP2Part1: "Me encargué del diseño completo y el desarrollo:",
    overviewStrong: "arquitectura de la información, UX/UI, desarrollo en Next.js y deploy en Vercel",
    overviewP2Part2: ". El objetivo era simple — que alguien que llega a la web en 10 segundos entienda por qué Genki y no otro.",
    quote: "\u201cEl sector solar en Argentina está lleno de competencia. Si tu web no transmite confianza en los primeros segundos, el usuario se va. El diseño tenía que hacer ese trabajo solo.\u201d",
    processLabel: "Proceso de trabajo",
    processHeading: "De la propuesta al deploy.",
    designProcess: [
      {
        number: "01",
        title: "Relevamiento & brief",
        description: "Reuniones con el cliente para entender el negocio, los servicios, los diferenciadores y el público objetivo. Genki tiene tres segmentos claros — residencial, industrial y campo — cada uno con necesidades distintas.",
      },
      {
        number: "02",
        title: "Arquitectura de la información",
        description: "Definí la estructura del sitio priorizando la conversión: hero con propuesta de valor clara, servicios segmentados, casos reales con KPIs y formulario de cotización sin fricción.",
      },
      {
        number: "03",
        title: "UX/UI Design",
        description: "Diseño en blanco y negro de alto contraste para comunicar seriedad y modernidad. Sin distracciones de color — el foco está en los datos y los resultados. El CTA principal siempre visible.",
      },
      {
        number: "04",
        title: "Desarrollo en Next.js",
        description: "Implementación con Next.js 14, Tailwind CSS y Geist font. SSR para SEO, optimización de imágenes con next/image y animaciones suaves para mejorar la percepción de velocidad.",
      },
      {
        number: "05",
        title: "Optimización & performance",
        description: "Auditoría de performance con Lighthouse. Optimización de imágenes, lazy loading y minimización del bundle para asegurar carga rápida en cualquier dispositivo.",
      },
      {
        number: "06",
        title: "Deploy & entrega",
        description: "Deploy en Vercel con dominio personalizado. Entrega con guía de uso básico para que el cliente pueda actualizar contenido sin tocar código.",
      },
    ],
    challengesLabel: "Desafíos & soluciones",
    challengesHeading: "Vender energía solar en un mercado saturado.",
    challengePrefix: "Desafío",
    solutionLabel: "Solución implementada",
    challenges: [
      {
        number: "01",
        challenge: "Transmitir confianza en un sector con mucha competencia",
        description: "El mercado solar en Córdoba tiene decenas de instaladores. El usuario llega con desconfianza — precios variables, empresas que aparecen y desaparecen. Sin confianza, no hay consulta.",
        solution: "Puse los datos de Genki al frente: 500+ instalaciones, 10 años, 98% de satisfacción, acreditación EPEC. Números reales que hablan solos. Además, incluí casos de proyectos reales con potencia instalada y ahorro estimado — sin prometer mágico, con datos concretos.",
      },
      {
        number: "02",
        challenge: "Generar leads sin formularios que asustan",
        description: "Los formularios de cotización típicos piden demasiado: superficie del techo, consumo mensual, tipo de instalación. El usuario se cansa antes de terminar y se va.",
        solution: "Reduje el formulario a tres campos: nombre, teléfono y un mensaje libre. El CTA dice 'Cotizá gratis' — sin compromiso. El primer contacto es para calificar al lead, no para resolver toda la venta. La tasa de envíos mejoró notablemente.",
      },
      {
        number: "03",
        challenge: "Performance en mobile con imágenes pesadas",
        description: "El sitio tiene fotos de instalaciones reales — paneles en techos, campos, galpones. Sin optimización, la carga en mobile con 4G era lenta y eso mata la conversión.",
        solution: "Usé next/image para optimización automática, formatos WebP, lazy loading y srcset responsive. El tiempo de carga en mobile bajó significativamente sin comprometer la calidad visual.",
      },
    ],
    resultsLabel: "Resultados del proyecto",
    results: [
      { metric: "500+", detail: "Instalaciones destacadas con datos reales de cada proyecto" },
      { metric: "3",    detail: "Campos en el formulario de cotización — sin fricción innecesaria" },
      { metric: "100%", detail: "Responsive — optimizado para mobile, tablet y desktop" },
    ],
    ctaLabel: "¿Te gustó el trabajo?",
    ctaHeading: "Trabajemos juntos en tu próximo proyecto.",
    ctaBody: "Diseño y código que convierte. Hablemos de tu idea y construyamos algo que destaque.",
    viewMore: "Ver más proyectos",
    viewLive: "Ver sitio en vivo",
  },
  en: {
    back: "Back to portfolio",
    heroLabel: "Project 03 \u00a0·\u00a0 Client \u00a0·\u00a0 Córdoba, Argentina",
    badge: "UX/UI · Front-end development · Next.js",
    tagline: "Institutional website for a solar energy company in Córdoba. From a basic digital presence to a site that builds trust and turns visits into leads.",
    scrollCue: "Scroll to explore",
    stats: [
      { value: "500+", label: "Installations completed" },
      { value: "10",   unit: "yrs", label: "In the solar market" },
      { value: "98%",  label: "Client satisfaction" },
      { value: "90%",  label: "Max savings on electricity bills" },
    ],
    meta: [
      { label: "Role",    value: "UX/UI Designer + Developer" },
      { label: "Type",    value: "Client project" },
      { label: "Year",    value: "2024" },
      { label: "Stack",   value: "Next.js · React · Tailwind CSS" },
      { label: "Deploy",  value: "Vercel" },
      { label: "Location", value: "Córdoba, Argentina" },
    ],
    toolsLabel: "Tools & disciplines",
    galleryLabel: "Project gallery",
    gallerySub: "UI screens and final experience",
    galleryItems: [
      { label: "Hero — Value proposition",             span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Services section",                     span: "",                            ratio: "aspect-[4/5]" },
      { label: "Featured projects",                    span: "",                            ratio: "aspect-[4/3]" },
      { label: "Quote request form",                   span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Responsive optimization",     span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "The project",
    overviewHeading: "A 10-year-old company that deserved a website to match.",
    overviewP1: "Genki has been installing solar panels in Córdoba for over a decade. They have 500+ installations, 98% satisfaction, and EPEC certification — putting them at the top of the market. The problem: their digital presence reflected none of that.",
    overviewP2Part1: "I handled the full design and development:",
    overviewStrong: "information architecture, UX/UI, Next.js development, and Vercel deployment",
    overviewP2Part2: ". The goal was simple — someone landing on the site should understand why Genki in under 10 seconds.",
    quote: "\u201cThe solar market in Argentina is crowded. If your website doesn't build trust in the first few seconds, users leave. The design had to do that work on its own.\u201d",
    processLabel: "Work process",
    processHeading: "From proposal to deployment.",
    designProcess: [
      {
        number: "01",
        title: "Discovery & brief",
        description: "Meetings with the client to understand the business, services, differentiators, and target audience. Genki has three clear segments — residential, industrial, and agricultural — each with different needs.",
      },
      {
        number: "02",
        title: "Information architecture",
        description: "Defined the site structure prioritizing conversion: a hero with a clear value proposition, segmented services, real case studies with KPIs, and a frictionless quote form.",
      },
      {
        number: "03",
        title: "UX/UI Design",
        description: "High-contrast black and white design to communicate seriousness and modernity. No color distractions — the focus is on data and results. The primary CTA is always visible.",
      },
      {
        number: "04",
        title: "Next.js development",
        description: "Implementation with Next.js 14, Tailwind CSS, and Geist font. SSR for SEO, image optimization with next/image, and smooth animations to improve perceived performance.",
      },
      {
        number: "05",
        title: "Optimization & performance",
        description: "Lighthouse performance audit. Image optimization, lazy loading, and bundle minimization to ensure fast load times on any device.",
      },
      {
        number: "06",
        title: "Deploy & handoff",
        description: "Deployed on Vercel with a custom domain. Delivered with a basic usage guide so the client can update content without touching the code.",
      },
    ],
    challengesLabel: "Challenges & solutions",
    challengesHeading: "Selling solar energy in a saturated market.",
    challengePrefix: "Challenge",
    solutionLabel: "Solution",
    challenges: [
      {
        number: "01",
        challenge: "Building trust in a highly competitive sector",
        description: "The solar market in Córdoba has dozens of installers. Users arrive skeptical — variable prices, companies that come and go. Without trust, there's no inquiry.",
        solution: "I put Genki's credentials front and center: 500+ installations, 10 years, 98% satisfaction, EPEC certification. Real numbers that speak for themselves. I also included real project case studies with installed capacity and estimated savings — no magic promises, just concrete data.",
      },
      {
        number: "02",
        challenge: "Generating leads without intimidating forms",
        description: "Typical solar quote forms ask for too much: roof area, monthly consumption, installation type. Users give up before finishing and leave.",
        solution: "I reduced the form to three fields: name, phone number, and a free-text message. The CTA says 'Get a free quote' — no commitment. The first contact is to qualify the lead, not close the sale. Form submission rates improved significantly.",
      },
      {
        number: "03",
        challenge: "Performance on mobile with heavy images",
        description: "The site features real installation photos — panels on rooftops, fields, warehouses. Without optimization, load times on 4G mobile were slow, killing conversion.",
        solution: "Used next/image for automatic optimization, WebP formats, lazy loading, and responsive srcset. Mobile load times dropped significantly without compromising visual quality.",
      },
    ],
    resultsLabel: "Project results",
    results: [
      { metric: "500+", detail: "Installations showcased with real data from each project" },
      { metric: "3",    detail: "Fields in the quote form — no unnecessary friction" },
      { metric: "100%", detail: "Responsive — optimized for mobile, tablet, and desktop" },
    ],
    ctaLabel: "Like what you see?",
    ctaHeading: "Let's work together on your next project.",
    ctaBody: "Design and code that converts. Tell me about your idea and let's build something that stands out.",
    viewMore: "View more projects",
    viewLive: "View live site",
  },
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function GenkiPage() {
  const { lang } = useLang();
  const d = content[lang];

  return (
    <>
      <style>{`
        @keyframes genki-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .genki-float { animation: genki-float 4s ease-in-out infinite; }

        @keyframes genki-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .genki-pulse { animation: genki-pulse 3s ease-in-out infinite; }
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
              background: "rgba(14,12,0,0.85)",
              border: `1px solid ${C.amberMid}`,
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

          {/* Diagonal stripes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(245,158,11,0.025) 40px,
                rgba(245,158,11,0.025) 41px
              )`,
            }}
          />

          {/* Radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 65%, rgba(245,158,11,0.09) 0%, transparent 70%)`,
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
              {d.heroLabel}
            </motion.p>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.amberDim, border: `1px solid ${C.amberMid}`, color: C.amberLight }}
              >
                <span
                  className="genki-pulse inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: C.amber }}
                />
                {d.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(5rem, 22vw, 14rem)",
                background: `linear-gradient(135deg, #ffffff 0%, ${C.amberLight} 45%, ${C.amber} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              GENKI
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(241,240,255,0.55)" }}
            >
              {d.tagline}
            </motion.p>

            {/* View live */}
            <motion.div variants={fadeUp} className="mt-8 flex justify-center">
              <a
                href="https://genki-henna.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                style={{ background: C.amberDim, border: `1px solid ${C.amberMid}`, color: C.amberLight }}
              >
                {d.viewLive}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
              </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <div style={{ width: 48, height: 1, background: C.amberMid }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(241,240,255,0.25)" }}>
                {d.scrollCue}
              </span>
              <div style={{ width: 48, height: 1, background: C.amberMid }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{
            background:   C.surface,
            borderTop:    `1px solid ${C.amberDim}`,
            borderBottom: `1px solid ${C.amberDim}`,
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
                  style={{ fontSize: "clamp(2rem,5vw,3rem)", color: C.amber }}
                >
                  {s.value}
                  {s.unit && <span className="ml-1 text-lg font-bold" style={{ color: C.amberLight }}>{s.unit}</span>}
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
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
                <strong style={{ color: "#f1f0ff" }}>{d.overviewStrong}</strong>
                {d.overviewP2Part2}
              </p>

              {/* Highlight strip */}
              <div
                className="mt-8 rounded-xl px-5 py-4 flex items-start gap-4"
                style={{ background: C.amberDim, border: `1px solid ${C.amberMid}` }}
              >
                <div style={{ width: 3, minWidth: 3, height: 40, borderRadius: 2, background: C.amber, marginTop: 2 }} />
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
                  style={{ background: C.surface, border: `1px solid ${C.amberDim}` }}
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
            borderTop:    `1px solid ${C.amberDim}`,
            borderBottom: `1px solid ${C.amberDim}`,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
              {d.toolsLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js", "React", "Tailwind CSS", "Figma", "Vercel",
                "UX/UI Design", "Responsive Design", "Performance Optimization",
                "SEO", "Information Architecture", "Wireframing",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: C.amberDim,
                    border:     `1px solid ${C.amberMid}`,
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
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
                  style={{ background: C.surface, border: `1px solid ${C.amberMid}` }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
                    style={{
                      background: `linear-gradient(135deg, ${C.surface} 0%, rgba(245,158,11,0.04) 100%)`,
                    }}
                  >
                    <div
                      className="genki-float rounded-full flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        background: C.amberDim,
                        border: `1px solid ${C.amberMid}`,
                      }}
                    >
                      {/* Sun icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
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
                  style={{ background: C.surface2, border: `1px solid ${C.amberDim}` }}
                >
                  <span
                    className="font-display text-5xl font-extrabold"
                    style={{ color: "rgba(245,158,11,0.18)" }}
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.amber }}>
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
                  style={{ border: `1px solid ${C.amberDim}` }}
                >
                  <div className="px-6 pt-6 pb-5" style={{ background: "rgba(245,158,11,0.05)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: C.amber }}>
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
                    style={{ background: C.surface, borderTop: `1px solid ${C.amberDim}` }}
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
          style={{ background: C.surface, borderTop: `1px solid ${C.amberDim}`, borderBottom: `1px solid ${C.amberDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.amber }}
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
                  style={{ background: C.surface2, border: `1px solid ${C.amberMid}` }}
                >
                  <p className="font-display text-4xl font-extrabold" style={{ color: C.amber }}>
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
              background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.amber }}>
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
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ background: C.amber, boxShadow: `0 0 28px ${C.amberGlow}`, color: "#080700" }}
                >
                  rtomassebastian@gmail.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </a>
                <Link
                  href="/#trabajos"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ border: `1px solid ${C.amberMid}`, color: "#f1f0ff" }}
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
          style={{ borderTop: `1px solid ${C.amberDim}`, color: "rgba(241,240,255,0.2)" }}
        >
          © {new Date().getFullYear()} Tomas Ramirez &nbsp;·&nbsp; Genki — Energía Solar · Córdoba, Argentina
        </footer>
      </div>
    </>
  );
}
