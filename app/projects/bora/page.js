"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

// ─── BORA colour palette — tropical teal ────────────────────────────────────
const C = {
  teal:      "#00c9a7",
  tealLight: "#4de3ca",
  tealDim:   "rgba(0,201,167,0.10)",
  tealMid:   "rgba(0,201,167,0.22)",
  tealGlow:  "rgba(0,201,167,0.40)",
  bg:        "#060a09",
  surface:   "#0b100e",
  surface2:  "#101614",
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
    heroLabel: "Proyecto 03 \u00a0·\u00a0 Proyecto personal \u00a0·\u00a0 Ilha Grande, Brasil",
    badge: "Branding · UX/UI · Desarrollo completo",
    tagline: "Plataforma de booking de paseos y excursiones para Ilha Grande. Un proyecto personal nacido de vivir en la isla y ver de cerca el caos que era comprar un paseo.",
    scrollCue: "Scroll para explorar",
    stats: [
      { value: "+60%", label: "Aumento en reservas online" },
      { value: "20+",  label: "Prestadores de servicios integrados" },
      { value: "4",    unit: "meses", label: "Desarrollo completo" },
      { value: "100%", label: "Custom — branding, UX/UI y código" },
    ],
    meta: [
      { label: "Rol",      value: "Brand Designer + UX/UI + Developer" },
      { label: "Tipo",     value: "Proyecto personal" },
      { label: "Año",      value: "2024" },
      { label: "Duración", value: "4 meses" },
      { label: "Stack",    value: "HTML · CSS · JS · Figma" },
      { label: "Lugar",    value: "Ilha Grande, Brasil" },
    ],
    toolsLabel: "Herramientas & disciplinas",
    galleryLabel: "Galería del proyecto",
    gallerySub: "Branding, pantallas UI y experiencia final",
    galleryItems: [
      { label: "Hero & búsqueda de paseos",             span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Logo & sistema de identidad visual",    span: "",                            ratio: "aspect-[4/5]" },
      { label: "Catálogo de paseos — Cards",            span: "",                            ratio: "aspect-[4/3]" },
      { label: "Flujo de reserva — 3 pasos",            span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Optimización para turistas",   span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "El proyecto",
    overviewHeading: "Cuando vivís el problema, diseñás la solución correcta.",
    overviewP1: "Viví en Ilha Grande — una isla paradisíaca en Brasil, sin autos y con conexión limitada. Comprar un paseo significaba caminar por la playa buscando vendedores, negociar precios sin claridad y esperar que hubiera lugar. Un caos total.",
    overviewP2Part1: "BORA nació de esa experiencia. Creé todo desde cero:",
    overviewStrong: "el nombre, el logo, la identidad visual, el UX/UI y el desarrollo front-end completo",
    overviewP2Part2: ". Una plataforma donde turistas pueden descubrir, comparar y reservar paseos en minutos — desde cualquier dispositivo, con cualquier señal.",
    quote: "\u201cLa mejor investigación de usuarios es vivir el problema. No hubo entrevistas ni encuestas — hubo semanas caminando la playa, frustrado, sin poder reservar un paseo en lancha.\u201d",
    processLabel: "Proceso de trabajo",
    processHeading: "De la isla al producto final.",
    designProcess: [
      {
        number: "01",
        title: "Investigación en campo — el problema real",
        description: "Viví en Ilha Grande y experimenté de primera mano el caos de comprar paseos: vendedores en la playa, precios sin claridad, sin disponibilidad online, sin posibilidad de reservar con antelación. Eso fue el brief.",
      },
      {
        number: "02",
        title: "Estrategia de marca & naming",
        description: "'Bora' — una expresión brasileña que significa 'vamos'. Energética, simple, perfecta para una plataforma de turismo de aventura. Definí el posicionamiento, el tono de voz y los valores de la marca antes de dibujar ni un pixel.",
      },
      {
        number: "03",
        title: "Branding completo — logo e identidad visual",
        description: "Diseñé el logo desde cero: símbolo, tipografía y sistema de color inspirado en el agua turquesa y la selva de Ilha Grande. Construí el brandbook completo con reglas de uso, paleta, tipografía y aplicaciones.",
      },
      {
        number: "04",
        title: "UX/UI Design en Figma",
        description: "Wireframes, flujos de reserva, sistema de componentes y diseño de alta fidelidad para web y mobile. El foco estuvo en simplificar el proceso de booking: buscar paseo → ver disponibilidad → reservar y pagar en menos de 3 pasos.",
      },
      {
        number: "05",
        title: "Desarrollo front-end",
        description: "Implementé el diseño en HTML5, CSS3 y JavaScript vanilla. Calendario de disponibilidad en tiempo real, filtros por tipo de actividad, cards de prestadores con galería de fotos y formulario de pago integrado.",
      },
      {
        number: "06",
        title: "Testing & optimización",
        description: "Validé en múltiples dispositivos — muchos turistas acceden desde el celular con mala señal. Optimicé el peso de las imágenes y el tiempo de carga para funcionar bien incluso con 3G.",
      },
    ],
    challengesLabel: "Desafíos & soluciones",
    challengesHeading: "Isla paradisíaca, problemas reales.",
    challengePrefix: "Desafío",
    solutionLabel: "Solución implementada",
    challenges: [
      {
        number: "01",
        challenge: "Un solo punto de venta para más de 20 prestadores distintos",
        description: "Ilha Grande tiene decenas de operadores de paseos, cada uno con su propio sistema (o ninguno). Integrar toda esa oferta en una experiencia coherente sin que parezca un bazar fue el mayor desafío de arquitectura.",
        solution: "Diseñé un sistema modular donde cada prestador tiene su perfil propio pero dentro de una interfaz unificada. El usuario siempre siente que navega en BORA, no en el sitio de cada operador. La plataforma aumentó las reservas online un 60% en testing con usuarios reales.",
      },
      {
        number: "02",
        challenge: "Diseñar para turistas internacionales con señal limitada",
        description: "El usuario llega a Ilha Grande de vacaciones, con el celular con poca batería, señal de 3G en el mejor caso, y quiere reservar rápido. Cualquier fricción lo manda de vuelta al vendedor en la playa.",
        solution: "Reduje el flujo de reserva a 3 pasos con pantallas limpias y sin distracciones. Optimicé las imágenes con lazy loading, minimicé el JavaScript y prioricé la carga del formulario de reserva. El tiempo de carga bajó un 55%.",
      },
      {
        number: "03",
        challenge: "Crear una marca desde cero que capture la esencia del lugar",
        description: "No había brand previo, ni guidelines, ni referencia. Tenía que crear algo que evocara Ilha Grande — el agua, la selva, la aventura — sin caer en clichés turísticos baratos.",
        solution: "El verde-turquesa del agua de Ilha Grande como color principal, tipografía sans-serif moderna con carácter, y un logo que combina movimiento y naturaleza. La identidad quedó tan sólida que funcionó tanto en digital como impresa en remeras y carteles.",
      },
    ],
    resultsLabel: "Resultados del proyecto",
    results: [
      { metric: "+60%", detail: "Reservas online vs. sistema anterior (teléfono/efectivo)" },
      { metric: "3",    detail: "Pasos para completar una reserva desde búsqueda hasta pago" },
      { metric: "−55%", detail: "Tiempo de carga optimizado para conexiones lentas" },
    ],
    ctaLabel: "¿Te gustó el trabajo?",
    ctaHeading: "Trabajemos juntos en tu próximo proyecto.",
    ctaBody: "Diseño y código que convierte. Hablemos de tu idea y construyamos algo que destaque.",
    viewMore: "Ver más proyectos",
  },
  en: {
    back: "Back to portfolio",
    heroLabel: "Project 03 \u00a0·\u00a0 Personal project \u00a0·\u00a0 Ilha Grande, Brazil",
    badge: "Branding · UX/UI · Full development",
    tagline: "A booking platform for tours and excursions on Ilha Grande. A personal project born from living on the island and witnessing firsthand the chaos of buying a tour.",
    scrollCue: "Scroll to explore",
    stats: [
      { value: "+60%", label: "Increase in online bookings" },
      { value: "20+",  label: "Integrated service providers" },
      { value: "4",    unit: "months", label: "Full development" },
      { value: "100%", label: "Custom — branding, UX/UI & code" },
    ],
    meta: [
      { label: "Role",     value: "Brand Designer + UX/UI + Developer" },
      { label: "Type",     value: "Personal project" },
      { label: "Year",     value: "2024" },
      { label: "Duration", value: "4 months" },
      { label: "Stack",    value: "HTML · CSS · JS · Figma" },
      { label: "Location", value: "Ilha Grande, Brazil" },
    ],
    toolsLabel: "Tools & disciplines",
    galleryLabel: "Project gallery",
    gallerySub: "Branding, UI screens, and final experience",
    galleryItems: [
      { label: "Hero & tour search",                    span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Logo & visual identity system",         span: "",                            ratio: "aspect-[4/5]" },
      { label: "Tour catalog — Cards",                  span: "",                            ratio: "aspect-[4/3]" },
      { label: "Booking flow — 3 steps",                span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Optimized for tourists",       span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "The project",
    overviewHeading: "When you live the problem, you design the right solution.",
    overviewP1: "I lived on Ilha Grande — a paradisiacal island in Brazil with no cars and limited connectivity. Buying a tour meant walking the beach looking for vendors, haggling over unclear prices, and hoping there was still a spot. Total chaos.",
    overviewP2Part1: "BORA was born from that experience. I created everything from scratch:",
    overviewStrong: "the name, the logo, the visual identity, the UX/UI, and the full front-end",
    overviewP2Part2: ". A platform where tourists can discover, compare, and book tours in minutes — from any device, on any connection.",
    quote: "\u201cThe best user research is living the problem. There were no interviews or surveys — just weeks walking the beach, frustrated, unable to book a boat tour.\u201d",
    processLabel: "Work process",
    processHeading: "From the island to the finished product.",
    designProcess: [
      {
        number: "01",
        title: "Field research — the real problem",
        description: "I lived on Ilha Grande and experienced firsthand the chaos of buying tours: beach vendors, no clear pricing, no online availability, no way to book in advance. That was the brief.",
      },
      {
        number: "02",
        title: "Brand strategy & naming",
        description: "'Bora' — a Brazilian expression meaning 'let's go.' Energetic, simple, perfect for an adventure tourism platform. I defined the positioning, tone of voice, and brand values before drawing a single pixel.",
      },
      {
        number: "03",
        title: "Full branding — logo & visual identity",
        description: "I designed the logo from scratch: symbol, typography, and a color system inspired by Ilha Grande's turquoise water and jungle. I built the complete brandbook with usage rules, palette, typography, and applications.",
      },
      {
        number: "04",
        title: "UX/UI Design in Figma",
        description: "Wireframes, booking flows, component system, and high-fidelity design for web and mobile. The focus was simplifying the booking process: find a tour → check availability → book and pay in under 3 steps.",
      },
      {
        number: "05",
        title: "Front-end development",
        description: "I implemented the design in HTML5, CSS3, and vanilla JavaScript. Real-time availability calendar, activity-type filters, provider cards with photo galleries, and an integrated payment form.",
      },
      {
        number: "06",
        title: "Testing & optimization",
        description: "Validated across multiple devices — many tourists browse on their phones with poor signal. I optimized image sizes and load time to work well even on 3G.",
      },
    ],
    challengesLabel: "Challenges & solutions",
    challengesHeading: "Paradise island, real problems.",
    challengePrefix: "Challenge",
    solutionLabel: "Solution",
    challenges: [
      {
        number: "01",
        challenge: "A single point of sale for 20+ different providers",
        description: "Ilha Grande has dozens of tour operators, each with their own system (or none at all). Integrating all that supply into a coherent experience without it feeling like a marketplace was the biggest architecture challenge.",
        solution: "I designed a modular system where each provider has their own profile but within a unified interface. Users always feel like they're browsing BORA, not each operator's individual site. The platform increased online bookings by 60% in testing with real users.",
      },
      {
        number: "02",
        challenge: "Designing for international tourists with limited connectivity",
        description: "Users arrive on vacation with low battery, 3G at best, and want to book quickly. Any friction sends them straight back to the beach vendor.",
        solution: "I reduced the booking flow to 3 steps with clean, distraction-free screens. I optimized images with lazy loading, minimized JavaScript, and prioritized the booking form load. Page load time dropped by 55%.",
      },
      {
        number: "03",
        challenge: "Building a brand from scratch that captures the essence of the place",
        description: "There was no prior brand, no guidelines, no reference. I had to create something that evoked Ilha Grande — the water, the jungle, the adventure — without falling into cheap tourist clichés.",
        solution: "Ilha Grande's turquoise water as the primary color, modern character-driven sans-serif typography, and a logo combining movement and nature. The identity was solid enough to work digitally and printed on t-shirts and signage.",
      },
    ],
    resultsLabel: "Project results",
    results: [
      { metric: "+60%", detail: "Online bookings vs. previous system (phone/cash)" },
      { metric: "3",    detail: "Steps to complete a booking from search to payment" },
      { metric: "−55%", detail: "Load time optimized for slow connections" },
    ],
    ctaLabel: "Like what you see?",
    ctaHeading: "Let's work together on your next project.",
    ctaBody: "Design and code that converts. Tell me about your idea and let's build something that stands out.",
    viewMore: "View more projects",
  },
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function BoraPage() {
  const { lang } = useLang();
  const d = content[lang];

  return (
    <>
      <style>{`
        @keyframes bora-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .bora-float { animation: bora-float 4s ease-in-out infinite; }

        @keyframes bora-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .bora-pulse { animation: bora-pulse 3s ease-in-out infinite; }

        @keyframes bora-wave {
          0%   { d: path("M0,20 Q25,0 50,20 Q75,40 100,20"); }
          50%  { d: path("M0,20 Q25,40 50,20 Q75,0 100,20"); }
          100% { d: path("M0,20 Q25,0 50,20 Q75,40 100,20"); }
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
              background: "rgba(11,16,14,0.85)",
              border: `1px solid ${C.tealMid}`,
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
                rgba(0,201,167,0.03) 40px,
                rgba(0,201,167,0.03) 41px
              )`,
            }}
          />

          {/* Radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 65%, rgba(0,201,167,0.11) 0%, transparent 70%)`,
            }}
          />

          {/* Decorative waves */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 right-0"
            style={{ height: 80, overflow: "hidden" }}
          >
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
              <path
                d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                fill={`rgba(0,201,167,0.05)`}
              />
              <path
                d="M0,55 C240,20 480,70 720,45 C960,20 1200,65 1440,50 L1440,80 L0,80 Z"
                fill={`rgba(0,201,167,0.04)`}
              />
            </svg>
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
              style={{ color: C.teal }}
            >
              {d.heroLabel}
            </motion.p>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.tealDim, border: `1px solid ${C.tealMid}`, color: C.tealLight }}
              >
                <span
                  className="bora-pulse inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: C.teal }}
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
                background: `linear-gradient(135deg, #ffffff 0%, ${C.tealLight} 45%, ${C.teal} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              BORA
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(241,240,255,0.55)" }}
            >
              {d.tagline}
            </motion.p>

            {/* Scroll cue */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center justify-center gap-4"
            >
              <div style={{ width: 48, height: 1, background: C.tealMid }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(241,240,255,0.25)" }}>
                {d.scrollCue}
              </span>
              <div style={{ width: 48, height: 1, background: C.tealMid }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{
            background:   C.surface,
            borderTop:    `1px solid ${C.tealDim}`,
            borderBottom: `1px solid ${C.tealDim}`,
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
                  style={{ fontSize: "clamp(2rem,5vw,3rem)", color: C.teal }}
                >
                  {s.value}
                  {s.unit && <span className="ml-1 text-lg font-bold" style={{ color: C.tealLight }}>{s.unit}</span>}
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.teal }}>
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
                style={{ background: C.tealDim, border: `1px solid ${C.tealMid}` }}
              >
                <div style={{ width: 3, minWidth: 3, height: 40, borderRadius: 2, background: C.teal, marginTop: 2 }} />
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
                  style={{ background: C.surface, border: `1px solid ${C.tealDim}` }}
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
            borderTop:    `1px solid ${C.tealDim}`,
            borderBottom: `1px solid ${C.tealDim}`,
          }}
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.teal }}>
              {d.toolsLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Figma", "Branding", "Logo Design", "HTML5", "CSS3", "JavaScript",
                "UX Research", "UI Design", "Design System", "Responsive Design",
                "Wireframing", "Prototyping",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: C.tealDim,
                    border:     `1px solid ${C.tealMid}`,
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.teal }}>
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
                  style={{ background: C.surface, border: `1px solid ${C.tealMid}` }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
                    style={{
                      background: `linear-gradient(135deg, ${C.surface} 0%, rgba(0,201,167,0.05) 100%)`,
                    }}
                  >
                    <div
                      className="bora-float rounded-full flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        background: C.tealDim,
                        border: `1px solid ${C.tealMid}`,
                      }}
                    >
                      {/* Anchor/wave icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="5" r="2" />
                        <path d="M12 7v14" />
                        <path d="M5 14H2a10 10 0 0 0 20 0h-3" />
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.teal }}>
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
                  style={{ background: C.surface2, border: `1px solid ${C.tealDim}` }}
                >
                  <span
                    className="font-display text-5xl font-extrabold"
                    style={{ color: "rgba(0,201,167,0.18)" }}
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.teal }}>
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
                  style={{ border: `1px solid ${C.tealDim}` }}
                >
                  <div className="px-6 pt-6 pb-5" style={{ background: "rgba(0,201,167,0.06)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: C.teal }}>
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
                    style={{ background: C.surface, borderTop: `1px solid ${C.tealDim}` }}
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
          style={{ background: C.surface, borderTop: `1px solid ${C.tealDim}`, borderBottom: `1px solid ${C.tealDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.teal }}
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
                  style={{ background: C.surface2, border: `1px solid ${C.tealMid}` }}
                >
                  <p className="font-display text-4xl font-extrabold" style={{ color: C.teal }}>
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
              background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,201,167,0.07) 0%, transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.teal }}>
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
                  style={{ background: C.teal, boxShadow: `0 0 28px ${C.tealGlow}`, color: "#060a09" }}
                >
                  rtomassebastian@gmail.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </a>
                <Link
                  href="/#trabajos"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ border: `1px solid ${C.tealMid}`, color: "#f1f0ff" }}
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
          style={{ borderTop: `1px solid ${C.tealDim}`, color: "rgba(241,240,255,0.2)" }}
        >
          © {new Date().getFullYear()} Tomas Ramirez &nbsp;·&nbsp; BORA — Personal project · Ilha Grande, Brazil
        </footer>
      </div>
    </>
  );
}
