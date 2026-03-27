"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import ES from "country-flag-icons/react/3x2/ES";
import US from "country-flag-icons/react/3x2/US";

function LogoMark({ onNavigate }) {
  return (
    <Link
      href="#inicio"
      onClick={onNavigate}
      className="flex shrink-0 items-center justify-center p-1 opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100 active:scale-95 active:opacity-70"
      aria-label="Inicio"
    >
      <img
        src="/logo.png"
        alt="TR Logo"
        className="h-8 w-8 object-contain sm:h-9 sm:w-9"
        style={{ mixBlendMode: "lighten" }}
      />
    </Link>
  );
}

function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      className="flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.10)",
        color: "rgba(241,240,255,0.65)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.10)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
        e.currentTarget.style.color = "#f1f0ff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
        e.currentTarget.style.color = "rgba(241,240,255,0.65)";
      }}
    >
      {lang === "es"
        ? <ES title="Español" className="h-4 w-6 rounded-sm" />
        : <US title="English" className="h-4 w-6 rounded-sm" />
      }
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();

  const nav = [
    { href: "#inicio",          label: t[lang].nav.home },
    { href: "#sobre",           label: t[lang].nav.about },
    { href: "#trabajos",        label: t[lang].nav.work },
    { href: "#certificaciones", label: t[lang].nav.certs },
  ];

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-[max(1rem,env(safe-area-inset-top))] sm:px-4 md:pt-6"
    >
      <div
        className="pointer-events-auto flex w-full max-w-5xl items-center gap-2 rounded-2xl py-2.5 pl-2.5 pr-2 backdrop-blur-xl sm:gap-3 sm:py-2.5 sm:pl-3 md:gap-4 md:px-4"
        style={{
          background: "rgba(14,14,18,0.8)",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(124,92,252,0.06)",
        }}
      >
        <LogoMark onNavigate={closeMenu} />

        <nav
          className="hidden min-h-0 min-w-0 flex-1 justify-center gap-8 overflow-x-auto md:flex [&::-webkit-scrollbar]:hidden"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative shrink-0 py-1.5 text-sm font-medium tracking-wide transition-colors"
              style={{ color: "var(--txt-muted)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--txt)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--txt-muted)"}
            >
              {item.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--accent)" }}
              />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Language toggle */}
          <LangToggle />

          {/* Contact CTA */}
          <Link
            href="#contacto"
            onClick={closeMenu}
            className="group flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-semibold text-white transition-all duration-200 active:scale-95 md:px-4 md:py-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(10px)",
              color: "#e4e4e7"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
              e.currentTarget.style.color = "#e4e4e7";
            }}
          >
            <span className="hidden sm:inline">{t[lang].nav.contact}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors active:scale-95 md:hidden"
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--txt)" }}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen
              ? <X className="h-5 w-5" strokeWidth={2} />
              : <Menu className="h-5 w-5" strokeWidth={2} />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="pointer-events-none fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="pointer-events-auto absolute inset-0 backdrop-blur-sm"
              style={{ background: "rgba(5,5,7,0.75)" }}
              aria-hidden
              onClick={closeMenu}
            />
            <motion.nav
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Navegación móvil"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="pointer-events-auto absolute bottom-0 right-0 top-0 flex w-[min(100%,20rem)] flex-col pt-[max(5.5rem,env(safe-area-inset-top))] shadow-2xl"
              style={{
                background: "var(--surface)",
                borderLeft: "1px solid var(--border)",
                paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
              }}
            >
              <div className="flex flex-1 flex-col gap-1 px-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-medium transition-colors active:bg-white/[0.06]"
                    style={{ color: "var(--txt)" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
