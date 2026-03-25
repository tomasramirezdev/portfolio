import { ArrowUpRight } from "lucide-react";

/**
 * Tarjeta de certificación — clic abre la imagen del certificado.
 * Glass aesthetic: fondo oscuro semitransparente + borde violeta visible.
 */
export default function CertificationCard({
  title,
  issuer,
  year,
  description,
  certificateUrl,
  onPointerEnter,
  className = "",
}) {
  return (
    <a
      href={certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      onPointerEnter={onPointerEnter}
      className={`group flex h-[392px] w-full max-w-md shrink-0 flex-col rounded-2xl p-6 active:scale-[0.99] sm:max-w-sm md:max-w-none md:w-[260px] md:p-7 ${className}`}
      style={{
        background: "rgba(14, 14, 18, 0.85)",
        border: "1px solid rgba(124, 92, 252, 0.22)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(124, 92, 252, 0.55)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,92,252,0.2), inset 0 1px 0 rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(124, 92, 252, 0.22)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <h3
        className="font-display text-lg font-bold leading-snug tracking-tight"
        style={{ color: "#f1f0ff" }}
      >
        {title}
      </h3>

      <p
        className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: "#7c5cfc" }}
      >
        {issuer}
      </p>

      <p
        className="mt-1 text-sm font-medium"
        style={{ color: "#f1f0ff" }}
      >
        {year}
      </p>

      <p
        className="mt-4 min-h-0 flex-1 overflow-hidden text-sm leading-relaxed"
        style={{ color: "#6b6a80" }}
      >
        <span className="line-clamp-7">{description}</span>
      </p>

      <span
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
        style={{ color: "#7c5cfc" }}
      >
        Ver certificado
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </span>
    </a>
  );
}
