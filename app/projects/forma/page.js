"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

// ─── FORMA colour palette — warm sand / premium wood ────────────────────────
const C = {
  sand:      "#c8a96b",
  sandLight: "#ddc28a",
  sandDim:   "rgba(200,169,107,0.10)",
  sandMid:   "rgba(200,169,107,0.22)",
  sandGlow:  "rgba(200,169,107,0.38)",
  bg:        "#09080a",
  surface:   "#100f0d",
  surface2:  "#161410",
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
    heroLabel: "Proyecto 01 \u00a0·\u00a0 Producto propio \u00a0·\u00a0 Córdoba, Argentina",
    badge: "Design system · UX/UI · Desarrollo · Sheets API",
    subtitle: "No es una mueblería. Es el sistema.",
    tagline: "Plataforma de catálogo y consulta diseñada para mueblerias de Córdoba que quieren presencia digital sin depender de un programador — powered by Google Sheets.",
    liveSiteBtn: "Ver demo en vivo",
    scrollCue: "Scroll para explorar",
    stats: [
      { value: "∞",   label: "Mueblerias que pueden usarlo — el sistema escala" },
      { value: "0",   label: "Conocimientos técnicos requeridos para gestionar" },
      { value: "100%", label: "Powered by Google Sheets — sin base de datos" },
      { value: "1",   label: "Sistema de diseño para múltiples marcas" },
    ],
    meta: [
      { label: "Rol",      value: "Product Designer + Developer" },
      { label: "Tipo",     value: "Producto propio · SaaS para mueblerias" },
      { label: "Año",      value: "2024" },
      { label: "Mercado",  value: "Córdoba, Argentina" },
      { label: "Stack",    value: "Next.js · Tailwind · Google Sheets" },
      { label: "Figma",    value: "Design system completo" },
    ],
    liveSiteCard: "Ver demo en producción",
    howItWorksLabel: "Cómo funciona",
    howItWorksSteps: [
      {
        title: "El dueño carga en Sheets",
        description: "Abre su planilla de Google, agrega una fila con el producto, precio y foto. Listo. Sin dashboards, sin contraseñas, sin soporte.",
      },
      {
        title: "El cliente navega el catálogo",
        description: "El sitio muestra los productos en tiempo real. El cliente filtra por categoría, ve fotos, precio y disponibilidad de stock.",
      },
      {
        title: "Consulta por WhatsApp",
        description: "El botón de consulta abre WhatsApp con un mensaje pre-armado que incluye el producto exacto. El vendedor recibe un lead calificado y cierra en una conversación.",
      },
    ],
    toolsLabel: "Tecnologías & disciplinas",
    galleryLabel: "Diseño del sistema",
    gallerySub: "Pantallas, design system y flujos de usuario",
    galleryItems: [
      { label: "Hero & catálogo principal",              span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Design system — Tokens & componentes",   span: "",                            ratio: "aspect-[4/5]" },
      { label: "Filtros por categoría",                  span: "",                            ratio: "aspect-[4/3]" },
      { label: "Flujo de consulta — WhatsApp CTA",       span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Catálogo responsive",           span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "El proyecto",
    overviewHeading: "Un e-commerce que no compite en precio — compite en confianza.",
    overviewP1: "Las mueblerias de barrio en Córdoba tienen algo que MercadoLibre no puede dar: atención personalizada, asesoramiento real y relación directa con el cliente. FORMA es el sistema que digitaliza esa ventaja sin destruirla.",
    overviewP2Part1: "En lugar de un checkout frío, el cliente consulta por WhatsApp. En lugar de un CMS complejo, el dueño gestiona su catálogo desde",
    overviewStrong: "Google Sheets — sin saber nada de tecnología",
    overviewP2Part2: ". Y en lugar de un sitio de una sola mueblería, FORMA es un",
    overviewStrong2: "sistema replicable",
    overviewP2Part3: "listo para implementarse en cualquier mueblería de la ciudad.",
    quote: "\u201cEl mejor CMS para un dueño de mueblería de 55 años es el Excel que ya conoce. El diseño tiene que adaptarse a las personas, no al revés.\u201d",
    processLabel: "Proceso de trabajo",
    processHeading: "De la observación al sistema listo para escalar.",
    designProcess: [
      {
        number: "01",
        title: "Research — el dueño de mueblaría como usuario",
        description: "El usuario principal no es el cliente final — es el dueño de la mueblería. Generalmente mayor de 45 años, sin experiencia tecnológica, que necesita actualizar su catálogo sin depender de un programador. Eso definió todo.",
      },
      {
        number: "02",
        title: "El concepto: un sistema, no un sitio",
        description: "FORMA no es una mueblería. Es el sistema que puede adoptar cualquier mueblería de Córdoba. Decidí crear una capa de diseño neutral y premium que se adapte a distintas marcas sin perder coherencia visual.",
      },
      {
        number: "03",
        title: "Design system en Figma",
        description: "Construí el sistema de diseño completo: tokens de color y tipografía intercambiables por marca, componentes de producto, estados de hover y error, layouts de catálogo y hero. Un brandbook que cualquier mueblería puede tomar y personalizar.",
      },
      {
        number: "04",
        title: "UX — de e-commerce a plataforma de consulta",
        description: "Romper el paradigma del 'carrito de compras' fue la decisión más importante. El flujo no termina en un checkout — termina en un mensaje de WhatsApp. Diseñé la experiencia para que esa transición se sienta natural y premium, no como una limitación.",
      },
      {
        number: "05",
        title: "Google Sheets como backend",
        description: "En lugar de un CMS o base de datos tradicional, conecté el catálogo a Google Sheets via API. El dueño ve una planilla familiar, carga o edita un producto, y el sitio se actualiza automáticamente. Sin dashboards, sin contraseñas extra, sin soporte técnico.",
      },
      {
        number: "06",
        title: "Desarrollo y puesta en producción",
        description: "Desarrollé la plataforma con Next.js y Tailwind CSS. Filtros por categoría, estados de stock en tiempo real desde Sheets, botones de consulta por WhatsApp con mensaje pre-armado, y diseño 100% responsive optimizado para mobile.",
      },
    ],
    challengesLabel: "Desafíos & soluciones",
    challengesHeading: "Tecnología invisible — experiencia evidente.",
    challengePrefix: "Desafío",
    solutionLabel: "Solución implementada",
    challenges: [
      {
        number: "01",
        challenge: "El dueño tiene que poder actualizarlo solo",
        description: "Si el sitio depende de un desarrollador para cambiar el precio de un sillón, fracasó. El sistema tenía que ser tan simple de mantener como un Excel — porque literalmente es un Excel.",
        solution: "Google Sheets como base de datos: el dueño abre su planilla, cambia el precio, y en segundos el sitio refleja el cambio. Sin CMS, sin dashboard, sin nada que aprender. La adopción del sistema por parte de dueños no técnicos fue inmediata.",
      },
      {
        number: "02",
        challenge: "Convertir sin un checkout — el flujo de consulta",
        description: "Una mueblería de barrio no puede competir en precio con MercadoLibre. Su ventaja es la atención personalizada. Si ponemos un checkout, perdemos esa ventaja y entramos en una batalla que no podemos ganar.",
        solution: "Diseñé un flujo de 'consulta inteligente': el cliente elige el producto, toca 'Consultar', y se abre WhatsApp con un mensaje pre-generado que incluye el nombre del producto, precio y foto. El vendedor recibe un lead calificado, no una transacción fría. La tasa de respuesta y cierre es mucho mayor que la de un e-commerce típico.",
      },
      {
        number: "03",
        challenge: "Un sistema para múltiples marcas con identidades distintas",
        description: "FORMA tiene que funcionar para La Mueblería del Centro tanto como para un estudio de diseño de mobiliario premium. Las marcas son distintas — el sistema tiene que adaptarse sin romperse.",
        solution: "Construí el design system con tokens CSS intercambiables: colores, tipografías y estilos de card se configuran en un único archivo. Cambiar de una marca a otra es cuestión de minutos, no de rediseño. Esto convierte a FORMA en un producto escalable — no un proyecto de una sola vez.",
      },
    ],
    resultsLabel: "Lo que FORMA entrega",
    results: [
      { metric: "0 deps",  detail: "Cero dependencia técnica para que el dueño gestione su catálogo" },
      { metric: "WhatsApp", detail: "Canal de cierre — leads calificados con contexto completo del producto" },
      { metric: "Escalable", detail: "Un sistema replicable para cualquier mueblería de Córdoba" },
    ],
    ctaLabel: "¿Te gustó el trabajo?",
    ctaHeading: "Trabajemos juntos en tu próximo proyecto.",
    ctaBody: "Diseño y código que convierte. Hablemos de tu idea y construyamos algo que destaque.",
    viewMore: "Ver más proyectos",
  },
  en: {
    back: "Back to portfolio",
    heroLabel: "Project 01 \u00a0·\u00a0 Own product \u00a0·\u00a0 Córdoba, Argentina",
    badge: "Design system · UX/UI · Development · Sheets API",
    subtitle: "Not a furniture store. The system behind them.",
    tagline: "A catalog and inquiry platform designed for furniture stores in Córdoba that want a digital presence without depending on a developer — powered by Google Sheets.",
    liveSiteBtn: "View live demo",
    scrollCue: "Scroll to explore",
    stats: [
      { value: "∞",   label: "Furniture stores that can use it — the system scales" },
      { value: "0",   label: "Technical knowledge required to manage it" },
      { value: "100%", label: "Powered by Google Sheets — no database needed" },
      { value: "1",   label: "Design system for multiple brands" },
    ],
    meta: [
      { label: "Role",   value: "Product Designer + Developer" },
      { label: "Type",   value: "Own product · SaaS for furniture stores" },
      { label: "Year",   value: "2024" },
      { label: "Market", value: "Córdoba, Argentina" },
      { label: "Stack",  value: "Next.js · Tailwind · Google Sheets" },
      { label: "Figma",  value: "Full design system" },
    ],
    liveSiteCard: "View live demo",
    howItWorksLabel: "How it works",
    howItWorksSteps: [
      {
        title: "The owner updates in Sheets",
        description: "They open their Google spreadsheet, add a row with the product, price, and photo. Done. No dashboards, no extra passwords, no support needed.",
      },
      {
        title: "The customer browses the catalog",
        description: "The site shows products in real time. Customers filter by category, view photos, prices, and stock availability.",
      },
      {
        title: "Inquiry via WhatsApp",
        description: "The inquiry button opens WhatsApp with a pre-filled message including the exact product. The seller receives a qualified lead and closes the sale in one conversation.",
      },
    ],
    toolsLabel: "Technologies & disciplines",
    galleryLabel: "System design",
    gallerySub: "Screens, design system, and user flows",
    galleryItems: [
      { label: "Hero & main catalog",                    span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
      { label: "Design system — Tokens & components",    span: "",                            ratio: "aspect-[4/5]" },
      { label: "Category filters",                       span: "",                            ratio: "aspect-[4/3]" },
      { label: "Inquiry flow — WhatsApp CTA",            span: "",                            ratio: "aspect-[4/3]" },
      { label: "Mobile — Responsive catalog",            span: "",                            ratio: "aspect-[4/3]" },
    ],
    overviewLabel: "The project",
    overviewHeading: "An e-commerce that doesn't compete on price — it competes on trust.",
    overviewP1: "Local furniture stores in Córdoba have something MercadoLibre can't offer: personalized attention, real advice, and a direct relationship with the customer. FORMA is the system that digitizes that advantage without destroying it.",
    overviewP2Part1: "Instead of a cold checkout, customers inquire via WhatsApp. Instead of a complex CMS, the owner manages their catalog through",
    overviewStrong: "Google Sheets — no technical knowledge required",
    overviewP2Part2: ". And instead of a site for a single store, FORMA is a",
    overviewStrong2: "replicable system",
    overviewP2Part3: "ready to deploy for any furniture store in the city.",
    quote: "\u201cThe best CMS for a 55-year-old furniture store owner is the spreadsheet they already know. Design has to adapt to people, not the other way around.\u201d",
    processLabel: "Work process",
    processHeading: "From observation to a system ready to scale.",
    designProcess: [
      {
        number: "01",
        title: "Research — the store owner as the user",
        description: "The primary user isn't the end customer — it's the store owner. Typically over 45, with no technical background, who needs to update their catalog without relying on a developer. That defined everything.",
      },
      {
        number: "02",
        title: "The concept: a system, not a website",
        description: "FORMA isn't a furniture store. It's the system any furniture store in Córdoba can adopt. I decided to create a neutral, premium design layer that adapts to different brands without losing visual coherence.",
      },
      {
        number: "03",
        title: "Design system in Figma",
        description: "I built the full design system: brand-swappable color and typography tokens, product components, hover and error states, catalog and hero layouts. A brandbook any store can take and customize.",
      },
      {
        number: "04",
        title: "UX — from e-commerce to inquiry platform",
        description: "Breaking the 'shopping cart' paradigm was the most important decision. The flow doesn't end at checkout — it ends in a WhatsApp message. I designed the experience so that transition feels natural and premium, not like a limitation.",
      },
      {
        number: "05",
        title: "Google Sheets as the backend",
        description: "Instead of a CMS or traditional database, I connected the catalog to Google Sheets via API. The owner sees a familiar spreadsheet, adds or edits a product, and the site updates automatically. No dashboards, no extra passwords, no tech support.",
      },
      {
        number: "06",
        title: "Development and production launch",
        description: "I built the platform with Next.js and Tailwind CSS. Category filters, real-time stock status from Sheets, WhatsApp inquiry buttons with pre-filled messages, and a 100% responsive design optimized for mobile.",
      },
    ],
    challengesLabel: "Challenges & solutions",
    challengesHeading: "Invisible technology — evident experience.",
    challengePrefix: "Challenge",
    solutionLabel: "Solution",
    challenges: [
      {
        number: "01",
        challenge: "The owner has to be able to update it on their own",
        description: "If the site requires a developer to change the price of a sofa, it has failed. The system had to be as simple to maintain as a spreadsheet — because it literally is one.",
        solution: "Google Sheets as the database: the owner opens their spreadsheet, changes the price, and within seconds the site reflects the update. No CMS, no dashboard, nothing to learn. Adoption by non-technical owners was immediate.",
      },
      {
        number: "02",
        challenge: "Converting without a checkout — the inquiry flow",
        description: "A local furniture store can't compete on price with MercadoLibre. Their advantage is personalized service. Adding a checkout would surrender that advantage and enter a battle they can't win.",
        solution: "I designed a 'smart inquiry' flow: the customer selects a product, taps 'Inquire,' and WhatsApp opens with a pre-generated message including the product name, price, and photo. The seller receives a qualified lead, not a cold transaction. Conversion and close rates are far higher than typical e-commerce.",
      },
      {
        number: "03",
        challenge: "A system for multiple brands with different identities",
        description: "FORMA has to work for a neighborhood store just as well as for a premium furniture design studio. The brands are different — the system has to adapt without breaking.",
        solution: "I built the design system with swappable CSS tokens: colors, typography, and card styles are configured in a single file. Switching from one brand to another takes minutes, not a redesign. This makes FORMA a scalable product — not a one-off project.",
      },
    ],
    resultsLabel: "What FORMA delivers",
    results: [
      { metric: "0 deps",   detail: "Zero technical dependency for owners to manage their catalog" },
      { metric: "WhatsApp", detail: "Closing channel — qualified leads with full product context" },
      { metric: "Scalable", detail: "A replicable system for any furniture store in Córdoba" },
    ],
    ctaLabel: "Like what you see?",
    ctaHeading: "Let's work together on your next project.",
    ctaBody: "Design and code that converts. Tell me about your idea and let's build something that stands out.",
    viewMore: "View more projects",
  },
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function FormaPage() {
  const { lang } = useLang();
  const d = content[lang];

  return (
    <>
      <style>{`
        @keyframes forma-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .forma-pulse { animation: forma-pulse 3s ease-in-out infinite; }

        @keyframes forma-grain {
          0%, 100% { transform: translate(0,0); }
          25%       { transform: translate(-1px, 1px); }
          50%       { transform: translate(1px, -1px); }
          75%       { transform: translate(-1px, -1px); }
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
              background: "rgba(16,15,13,0.85)",
              border: `1px solid ${C.sandMid}`,
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

          {/* Grain texture overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
              opacity: 0.6,
            }}
          />

          {/* Subtle grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(200,169,107,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(200,169,107,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Warm radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 55% at 50% 60%, rgba(200,169,107,0.09) 0%, transparent 70%)`,
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
              style={{ color: C.sand }}
            >
              {d.heroLabel}
            </motion.p>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.sandDim, border: `1px solid ${C.sandMid}`, color: C.sandLight }}
              >
                <span
                  className="forma-pulse inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: C.sand }}
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
                background: `linear-gradient(135deg, #ffffff 0%, ${C.sandLight} 45%, ${C.sand} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.03em",
              }}
            >
              FORMA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: "rgba(241,240,255,0.35)" }}
            >
              {d.subtitle}
            </motion.p>

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
                href="https://forma-ashy-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                style={{
                  background: C.sandDim,
                  border: `1px solid ${C.sandMid}`,
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
              <div style={{ width: 48, height: 1, background: C.sandMid }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(241,240,255,0.25)" }}>
                {d.scrollCue}
              </span>
              <div style={{ width: 48, height: 1, background: C.sandMid }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{
            background:   C.surface,
            borderTop:    `1px solid ${C.sandDim}`,
            borderBottom: `1px solid ${C.sandDim}`,
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
                  style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", color: C.sand }}
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.sand }}>
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
                {d.overviewP2Part2}{" "}
                <strong style={{ color: "#f1f0ff" }}>{d.overviewStrong2}</strong>{" "}
                {d.overviewP2Part3}
              </p>

              {/* Highlight strip */}
              <div
                className="mt-8 rounded-xl px-5 py-4 flex items-start gap-4"
                style={{ background: C.sandDim, border: `1px solid ${C.sandMid}` }}
              >
                <div style={{ width: 3, minWidth: 3, height: 40, borderRadius: 2, background: C.sand, marginTop: 2 }} />
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
                  style={{ background: C.surface, border: `1px solid ${C.sandDim}` }}
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

              {/* Live site link */}
              <a
                href="https://forma-ashy-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-200 hover:scale-[1.02]"
                style={{ background: C.sandDim, border: `1px solid ${C.sandMid}` }}
              >
                <span className="text-sm font-semibold" style={{ color: "#f1f0ff" }}>
                  {d.liveSiteCard}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: C.sand }}
                  strokeWidth={2.2}
                />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.sandDim}`, borderBottom: `1px solid ${C.sandDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-10 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.sand }}
            >
              {d.howItWorksLabel}
            </motion.p>
            <div className="grid gap-5 sm:grid-cols-3">
              {d.howItWorksSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-2xl p-6"
                  style={{ background: C.surface2, border: `1px solid ${C.sandDim}` }}
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: C.sandDim, border: `1px solid ${C.sandMid}` }}
                  >
                    {i === 0 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sand} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sand} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sand} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-display text-base font-bold" style={{ color: "#f1f0ff" }}>
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

        {/* ── TOOLS ────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.sand }}>
              {d.toolsLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Figma", "Design System", "Google Sheets API", "Next.js", "Tailwind CSS",
                "UX Research", "UI Design", "Branding", "Wireframing", "Prototyping", "Copywriting",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: C.sandDim,
                    border:     `1px solid ${C.sandMid}`,
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
        <section
          className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.sandDim}`, borderBottom: `1px solid ${C.sandDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.sand }}>
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
                  style={{ background: C.surface2, border: `1px solid ${C.sandMid}` }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
                    style={{
                      background: `linear-gradient(135deg, ${C.surface2} 0%, rgba(200,169,107,0.04) 100%)`,
                    }}
                  >
                    <div
                      className="forma-pulse rounded-full flex items-center justify-center"
                      style={{ width: 40, height: 40, background: C.sandDim, border: `1px solid ${C.sandMid}` }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.sand} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
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
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.sand }}>
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
                  style={{ background: C.surface, border: `1px solid ${C.sandDim}` }}
                >
                  <span className="font-display text-5xl font-extrabold" style={{ color: "rgba(200,169,107,0.18)" }}>
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
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.sand }}>
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
                  style={{ border: `1px solid ${C.sandDim}` }}
                >
                  <div className="px-6 pt-6 pb-5" style={{ background: "rgba(200,169,107,0.05)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: C.sand }}>
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
                    style={{ background: C.surface2, borderTop: `1px solid ${C.sandDim}` }}
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
          style={{ borderTop: `1px solid ${C.sandDim}`, borderBottom: `1px solid ${C.sandDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.sand }}
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
                  style={{ background: C.surface, border: `1px solid ${C.sandMid}` }}
                >
                  <p className="font-display text-2xl font-extrabold" style={{ color: C.sand }}>
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
              background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(200,169,107,0.06) 0%, transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.sand }}>
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
                  style={{ background: C.sand, boxShadow: `0 0 28px ${C.sandGlow}`, color: "#09080a" }}
                >
                  rtomassebastian@gmail.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </a>
                <Link
                  href="/#trabajos"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ border: `1px solid ${C.sandMid}`, color: "#f1f0ff" }}
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
          style={{ borderTop: `1px solid ${C.sandDim}`, color: "rgba(241,240,255,0.2)" }}
        >
          © {new Date().getFullYear()} Tomas Ramirez &nbsp;·&nbsp; FORMA — Furniture store system · Córdoba, Argentina
        </footer>
      </div>
    </>
  );
}
