"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#certificaciones", label: "Certificaciones" },
];

function LogoMark({ onNavigate }) {
  return (
    <Link
      href="#inicio"
      onClick={onNavigate}
      className="flex shrink-0 items-center rounded-lg p-0.5 transition-opacity active:opacity-80"
      aria-label="Inicio"
    >
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/12 sm:h-9 sm:w-9">
        <Image
          src="/logo.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-cover sm:h-9 sm:w-9"
          priority
        />
      </span>
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-[max(1rem,env(safe-area-inset-top))] sm:px-4 md:pt-8"
    >
      <div className="pointer-events-auto flex w-full max-w-5xl items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-950/70 py-2 pl-2.5 pr-2 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:gap-3 sm:py-2.5 sm:pl-3 md:gap-4 md:px-5">
        <LogoMark onNavigate={closeMenu} />

        <nav
          className="hidden min-h-0 min-w-0 flex-1 justify-center gap-6 overflow-x-auto md:flex md:gap-10 [&::-webkit-scrollbar]:hidden"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 py-2 text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="#contacto"
            onClick={closeMenu}
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-2 py-2 text-sm font-medium tracking-wide text-white transition-colors active:bg-white/[0.12] sm:px-3 sm:py-1.5 md:px-4 md:py-2"
          >
            <span className="hidden sm:inline">Contacto</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform active:scale-95 sm:h-8 sm:w-8">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
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
              className="pointer-events-auto absolute inset-0 bg-black/70 backdrop-blur-sm"
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
              className="pointer-events-auto absolute bottom-0 right-0 top-0 flex w-[min(100%,20rem)] flex-col border-l border-white/[0.08] bg-zinc-950 pt-[max(5.5rem,env(safe-area-inset-top))] shadow-2xl"
              style={{
                paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
              }}
            >
              <div className="flex flex-1 flex-col gap-1 px-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-zinc-200 transition-colors active:bg-white/[0.06]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
