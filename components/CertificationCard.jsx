import { ArrowUpRight } from "lucide-react";

/**
 * Tarjeta de texto fija; el clic abre la imagen del certificado.
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
      className={`group flex h-[392px] w-full max-w-md shrink-0 flex-col rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 transition-transform duration-300 ease-out active:scale-[0.99] sm:max-w-sm md:max-w-none md:w-[260px] md:p-7 md:hover:border-white/[0.14] md:hover:scale-[1.02] ${className}`}
    >
      <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        {issuer}
      </p>
      <p className="mt-1 text-sm text-zinc-400">{year}</p>
      <p className="mt-4 min-h-0 flex-1 overflow-hidden text-sm leading-relaxed text-zinc-400">
        <span className="line-clamp-7">{description}</span>
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
        Ver certificado
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </span>
    </a>
  );
}
