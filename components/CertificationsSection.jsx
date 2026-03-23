"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BounceCards from "@/components/BounceCards";
import CertificationCard from "@/components/CertificationCard";
import {
  certifications,
  certTransformStylesDesktop,
  certTransformStylesTablet,
} from "@/data/certifications";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CertificationsSection() {
  const [transformStyles, setTransformStyles] = useState(
    certTransformStylesDesktop,
  );
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)", false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const apply = () =>
      setTransformStyles(
        mq.matches ? certTransformStylesTablet : certTransformStylesDesktop,
      );
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      id="certificaciones"
      className="border-t border-white/[0.06] bg-black px-4 py-16 sm:px-5 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Formación
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.25rem)] font-bold tracking-tight text-white md:text-4xl">
            Certificaciones
          </h2>
          <p className="mt-4 px-1 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <span className="md:hidden">
              Deslizá para ver todas. Tocá una tarjeta para abrir el certificado.
            </span>
            <span className="hidden md:inline">
              Orden cronológico (más antiguo a la izquierda). Pasá el mouse para
              separar las tarjetas; clic para ver el certificado.
            </span>
          </p>
        </div>

        {/* Móvil: lista vertical legible */}
        <div className="mt-10 flex flex-col gap-5 md:hidden">
          {certifications.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <CertificationCard {...c} />
            </motion.div>
          ))}
        </div>

        {/* Tablet/desktop: abanico */}
        <div className="mt-14 hidden w-full overflow-x-auto overflow-y-visible pb-12 pt-6 [-webkit-overflow-scrolling:touch] md:block md:overflow-visible md:pb-24 md:pt-12">
          <BounceCards
            className="min-w-[min(100%,1280px)]"
            containerWidth="min(100%, 1280px)"
            containerHeight={520}
            animationDelay={0.12}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={canHover}
            hoverSpreadPx={56}
          >
            {certifications.map((c) => (
              <CertificationCard key={c.id} {...c} />
            ))}
          </BounceCards>
        </div>
      </div>
    </section>
  );
}
