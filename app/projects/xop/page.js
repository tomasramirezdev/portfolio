"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// ─── XOP colour palette — electric blue / enterprise ────────────────────────
const C = {
  blue:      "#2d8cff",
  blueLight: "#6ab0ff",
  blueDim:   "rgba(45,140,255,0.10)",
  blueMid:   "rgba(45,140,255,0.22)",
  blueGlow:  "rgba(45,140,255,0.38)",
  bg:        "#07090f",
  surface:   "#0c0f18",
  surface2:  "#111520",
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
  { value: "+35%", label: "Aumento en ventas de los clientes" },
  { value: "12+",  label: "Tiendas lanzadas en producción" },
  { value: "50+",  label: "Componentes UI en el design system" },
  { value: "Ene",  unit: "2025→", label: "En curso — proyecto activo" },
];

const sectors = [
  { label: "Indumentaria", icon: "👕" },
  { label: "Motos",        icon: "🏍️" },
  { label: "Construcción", icon: "🏗️" },
  { label: "Cosmética",    icon: "💄" },
];

const tools = [
  "Figma",
  "Design System",
  "UX Research",
  "UI Design",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Developer Handoff",
  "Information Architecture",
  "Dashboard Design",
  "Multi-tenant UX",
  "Ecommerce UX",
];

const meta = [
  { label: "Rol",       value: "UX/UI Designer" },
  { label: "Empresa",   value: "XOP AR" },
  { label: "Tipo",      value: "ERP + Ecommerce · B2B/B2C" },
  { label: "Período",   value: "Enero 2025 — presente" },
  { label: "Rubros",    value: "Retail — ropa, motos, construcción, cosmética" },
  { label: "Entregable", value: "Design system · Dashboard · Ecommerce" },
];

const designProcess = [
  {
    number: "01",
    title: "Discovery & research de clientes",
    description:
      "XOP tiene clientes en rubros muy distintos: una tienda de ropa no tiene nada que ver con un local de motos. Hice research específico por sector para entender los flujos de venta, los tipos de productos y las necesidades reales de cada tipo de negocio.",
  },
  {
    number: "02",
    title: "Arquitectura de información multi-tenant",
    description:
      "El mayor desafío arquitectural: diseñar una estructura que funcione para cualquier rubro sin perder coherencia. Definí la jerarquía de navegación del dashboard ERP y del ecommerce pensando en escalabilidad — que sumar un cliente nuevo no requiera rediseñar desde cero.",
  },
  {
    number: "03",
    title: "Wireframes y flujos interactivos",
    description:
      "Mapeé los flujos críticos: gestión de inventario en el ERP, carga de productos, panel de pedidos, y del lado del ecommerce: búsqueda, ficha de producto, carrito y checkout. Cada flujo fue validado antes de pasar a diseño visual.",
  },
  {
    number: "04",
    title: "Design system & UI de alta fidelidad",
    description:
      "Construí un sistema de componentes con más de 50 elementos reutilizables: tablas del ERP, cards de producto, modales, formularios, estados de carga y error. El sistema está preparado para theming — cada cliente puede tener su paleta de color manteniendo la misma base de componentes.",
  },
  {
    number: "05",
    title: "Usability testing & iteración",
    description:
      "Testeé con usuarios reales de distintos rubros. Los dueños de locales no son usuarios técnicos — el ERP tiene que ser tan claro como una planilla de Excel. Cada ronda de testing reveló fricciones específicas que se resolvieron antes del handoff.",
  },
  {
    number: "06",
    title: "Developer handoff",
    description:
      "Entregué especificaciones detalladas en Figma: tokens de diseño, estados de componentes, comportamientos de hover y error, y prototipos interactivos para cada flujo. El objetivo fue que el equipo de desarrollo no tuviera que adivinar nada.",
  },
];

const challenges = [
  {
    number: "01",
    challenge: "Un sistema que funcione para rubros completamente distintos",
    description:
      "Un local de ropa necesita tallas, colores y lookbooks. Una ferretería necesita SKUs, unidades de medida y stock por depósito. Una moto necesita ficha técnica, versiones y financiación. Un solo sistema tiene que bancarse todo eso sin volverse un caos.",
    solution:
      "Diseñé un sistema de fichas de producto modular: un núcleo común (nombre, precio, stock, fotos) y bloques de atributos configurables por rubro. El dashboard ERP usa el mismo principio — módulos activables según el tipo de negocio. El cliente ve solo lo que necesita, sin ruido visual.",
  },
  {
    number: "02",
    challenge: "Dashboard ERP usable para dueños sin experiencia técnica",
    description:
      "El usuario del ERP no es un analista de datos — es el dueño del local que tiene que cargar un producto, ver sus pedidos del día y controlar el stock antes de cerrar. Si el dashboard es complejo, no lo usan.",
    solution:
      "Prioricé las acciones más frecuentes en la pantalla principal: pedidos del día, stock crítico y ventas recientes. Tablas con sorting simple, filtros visibles y acciones claras. El resultado fue un ERP que los propios dueños aprendieron a usar sin capacitación.",
  },
  {
    number: "03",
    challenge: "Checkout optimizado que no pierda ventas",
    description:
      "Cada paso innecesario en el checkout es una venta perdida. El flujo original tenía registro obligatorio, múltiples pasos y poca claridad en los métodos de pago — una combinación perfecta para el abandono.",
    solution:
      "Rediseñé el checkout en una sola página con opción de compra como invitado, resumen del pedido siempre visible y métodos de pago claros con logos reconocibles. La tasa de abandono de carrito bajó significativamente y las ventas de los clientes aumentaron un 35%.",
  },
];

const results = [
  { metric: "+35%", detail: "Aumento en ventas de los clientes tras el rediseño del ecommerce" },
  { metric: "12+",  detail: "Tiendas en producción en distintos rubros de retail" },
  { metric: "50+",  detail: "Componentes en el design system — reutilizables y temizables" },
];

const galleryItems = [
  { label: "Dashboard ERP — Vista principal",          span: "sm:col-span-2 lg:col-span-2", ratio: "aspect-[16/9]" },
  { label: "Ecommerce — Ficha de producto",            span: "",                            ratio: "aspect-[4/5]" },
  { label: "Gestión de inventario & pedidos",          span: "",                            ratio: "aspect-[4/3]" },
  { label: "Checkout — Flujo optimizado",              span: "",                            ratio: "aspect-[4/3]" },
  { label: "Design system — Componentes & tokens",     span: "",                            ratio: "aspect-[4/3]" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function XopPage() {
  return (
    <>
      <style>{`
        @keyframes xop-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .xop-pulse { animation: xop-pulse 3s ease-in-out infinite; }

        @keyframes xop-scan {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .xop-scan {
          animation: xop-scan 6s linear infinite;
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
              background: "rgba(12,15,24,0.85)",
              border: `1px solid ${C.blueMid}`,
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

          {/* Scanline effect — dashboard/enterprise feel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="xop-scan absolute left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, rgba(45,140,255,0.3), transparent)` }}
            />
          </div>

          {/* Grid técnico */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(45,140,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(45,140,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 75% 55% at 50% 60%, rgba(45,140,255,0.10) 0%, transparent 70%)`,
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
              style={{ color: C.blue }}
            >
              Proyecto 02 &nbsp;·&nbsp; UX/UI Designer &nbsp;·&nbsp; ERP + Ecommerce
            </motion.p>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: C.blueDim, border: `1px solid ${C.blueMid}`, color: C.blueLight }}
              >
                <span className="xop-pulse inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.blue }} />
                Dashboard · Design system · Multi-tenant · Retail
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(5rem, 22vw, 14rem)",
                background: `linear-gradient(135deg, #ffffff 0%, ${C.blueLight} 45%, ${C.blue} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.03em",
              }}
            >
              XOP
            </motion.h1>

            {/* Sector pills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {sectors.map((s) => (
                <span
                  key={s.label}
                  className="rounded-lg px-3 py-1 text-xs font-semibold"
                  style={{ background: C.blueDim, border: `1px solid ${C.blueMid}`, color: C.blueLight }}
                >
                  {s.icon} {s.label}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(241,240,255,0.55)" }}
            >
              ERP con ecommerce integrado para el sector retail. Me desempeño como UX/UI Designer diseñando el dashboard de gestión y la web de venta, con personalizaciones por cliente y rubro.
            </motion.p>

            {/* Scroll cue */}
            <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center gap-4">
              <div style={{ width: 48, height: 1, background: C.blueMid }} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "rgba(241,240,255,0.25)" }}>
                Scroll para explorar
              </span>
              <div style={{ width: 48, height: 1, background: C.blueMid }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────── */}
        <section
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.blueDim}`, borderBottom: `1px solid ${C.blueDim}` }}
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
                  style={{ fontSize: "clamp(2rem,5vw,3rem)", color: C.blue }}
                >
                  {s.value}
                  {s.unit && <span className="ml-1 text-lg font-bold" style={{ color: C.blueLight }}>{s.unit}</span>}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] max-w-[130px]" style={{ color: "rgba(241,240,255,0.38)" }}>
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.blue }}>
                El proyecto
              </p>
              <h2
                className="mt-4 font-display font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#f1f0ff" }}
              >
                Un ERP que cualquier dueño de local puede operar.
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(241,240,255,0.52)" }}>
                XOP es un sistema ERP con ecommerce integrado pensado para el sector retail en Argentina. Me desempeño como UX/UI Designer en el equipo, siendo responsable del diseño del{" "}
                <strong style={{ color: "#f1f0ff" }}>dashboard de gestión</strong>{" "}
                y de la{" "}
                <strong style={{ color: "#f1f0ff" }}>web de venta online</strong>,
                con personalizaciones específicas para cada cliente.
              </p>
              <p className="mt-4 text-base leading-relaxed sm:text-lg" style={{ color: "rgba(241,240,255,0.52)" }}>
                El desafío central es que un mismo sistema tiene que funcionar para rubros completamente distintos — ropa, motos, construcción y cosmética — sin que cada implementación sea un proyecto de diseño desde cero. La solución es un{" "}
                <strong style={{ color: "#f1f0ff" }}>design system modular</strong>{" "}
                con más de 50 componentes temizables por cliente. XOP es un producto{" "}
                <strong style={{ color: "#f1f0ff" }}>100% funcional y operativo</strong>,
                con clientes reales activos en la plataforma.
              </p>

              {/* Highlight strip */}
              <div
                className="mt-8 rounded-xl px-5 py-4 flex items-start gap-4"
                style={{ background: C.blueDim, border: `1px solid ${C.blueMid}` }}
              >
                <div style={{ width: 3, minWidth: 3, height: 40, borderRadius: 2, background: C.blue, marginTop: 2 }} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.7)" }}>
                  &ldquo;Un ERP que el equipo técnico ama pero el dueño del local no puede usar, fracasó. El diseño tiene que servir a los dos sin comprometer a ninguno.&rdquo;
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
                  style={{ background: C.surface, border: `1px solid ${C.blueDim}` }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(241,240,255,0.35)" }}>
                    {m.label}
                  </span>
                  <span className="text-sm font-semibold text-right" style={{ color: "#f1f0ff" }}>
                    {m.value}
                  </span>
                </div>
              ))}

              <a
                href="https://xop.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-200 hover:scale-[1.02]"
                style={{ background: C.blueDim, border: `1px solid ${C.blueMid}` }}
              >
                <span className="text-sm font-semibold" style={{ color: "#f1f0ff" }}>
                  Visitar xop.ar
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: C.blue }}
                  strokeWidth={2.2}
                />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── QUÉ DISEÑÉ ───────────────────────────────────────────────── */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ background: C.surface, borderTop: `1px solid ${C.blueDim}`, borderBottom: `1px solid ${C.blueDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-10 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: C.blue }}
            >
              Qué diseñé
            </motion.p>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                  ),
                  title: "Dashboard ERP",
                  description: "Panel de control para que los dueños gestionen pedidos, inventario, productos y métricas de venta. Diseñado para ser operable sin capacitación técnica — claridad sobre complejidad.",
                  tags: ["Pedidos", "Inventario", "Métricas", "Productos"],
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  ),
                  title: "Ecommerce web",
                  description: "Tienda online con catálogo filtrable, fichas de producto con atributos por rubro, carrito y checkout optimizado de una sola página. Temizable por cliente manteniendo la base del sistema.",
                  tags: ["Catálogo", "Fichas", "Checkout", "Mobile"],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-2xl p-6"
                  style={{ background: C.surface2, border: `1px solid ${C.blueDim}` }}
                >
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: C.blueDim, border: `1px solid ${C.blueMid}` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold" style={{ color: "#f1f0ff" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.48)" }}>
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md px-2.5 py-1 text-[11px] font-semibold"
                        style={{ background: C.blueDim, color: C.blueLight }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS ────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.blue }}>
              Herramientas &amp; disciplinas
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{ background: C.blueDim, border: `1px solid ${C.blueMid}`, color: "#f1f0ff" }}
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
          style={{ background: C.surface, borderTop: `1px solid ${C.blueDim}`, borderBottom: `1px solid ${C.blueDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.blue }}>
                Pantallas del sistema
              </p>
              <p className="mt-1 text-sm" style={{ color: "rgba(241,240,255,0.35)" }}>
                Dashboard ERP, ecommerce y design system
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
                  style={{ background: C.surface2, border: `1px solid ${C.blueMid}` }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2 p-6"
                    style={{ background: `linear-gradient(135deg, ${C.surface2} 0%, rgba(45,140,255,0.05) 100%)` }}
                  >
                    <div
                      className="xop-pulse rounded-full flex items-center justify-center"
                      style={{ width: 40, height: 40, background: C.blueDim, border: `1px solid ${C.blueMid}` }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.blue }}>
                Proceso de diseño
              </p>
              <h2
                className="mt-4 font-display font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.25rem)", color: "#f1f0ff" }}
              >
                Del brief al handoff en 6 etapas.
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
                  style={{ background: C.surface, border: `1px solid ${C.blueDim}` }}
                >
                  <span className="font-display text-5xl font-extrabold" style={{ color: "rgba(45,140,255,0.18)" }}>
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
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.blue }}>
                Desafíos &amp; soluciones
              </p>
              <h2
                className="mt-4 font-display font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem,4vw,2.25rem)", color: "#f1f0ff" }}
              >
                Un sistema para todos, sin ser genérico para ninguno.
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
                  style={{ border: `1px solid ${C.blueDim}` }}
                >
                  <div className="px-6 pt-6 pb-5" style={{ background: "rgba(45,140,255,0.06)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: C.blue }}>
                      Desafío {c.number}
                    </p>
                    <h3 className="font-display text-lg font-bold" style={{ color: "#f1f0ff" }}>
                      {c.challenge}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(241,240,255,0.5)" }}>
                      {c.description}
                    </p>
                  </div>
                  <div className="px-6 pt-5 pb-6" style={{ background: C.surface2, borderTop: `1px solid ${C.blueDim}` }}>
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
          style={{ borderTop: `1px solid ${C.blueDim}`, borderBottom: `1px solid ${C.blueDim}` }}
        >
          <div className="mx-auto max-w-5xl">
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: C.blue }}>
              Resultados medibles
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
                  style={{ background: C.surface, border: `1px solid ${C.blueMid}` }}
                >
                  <p className="font-display text-3xl font-extrabold" style={{ color: C.blue }}>
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
            style={{ background: `radial-gradient(ellipse 65% 55% at 50% 50%, rgba(45,140,255,0.07) 0%, transparent 70%)` }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.blue }}>
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
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ background: C.blue, boxShadow: `0 0 28px ${C.blueGlow}` }}
                >
                  rtomassebastian@gmail.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
                </a>
                <Link
                  href="/#trabajos"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
                  style={{ border: `1px solid ${C.blueMid}`, color: "#f1f0ff" }}
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
          style={{ borderTop: `1px solid ${C.blueDim}`, color: "rgba(241,240,255,0.2)" }}
        >
          © {new Date().getFullYear()} Tomas Ramirez &nbsp;·&nbsp; XOP — ERP + Ecommerce · UX/UI Design
        </footer>
      </div>
    </>
  );
}
