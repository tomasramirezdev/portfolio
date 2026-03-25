"use client";

import { Layers2, PenTool, Code2, FileCode, SquareCode } from "lucide-react";
import {
  SiFigma,
  SiNextdotjs,
  SiNotion,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const items = [
  { Icon: SiNotion,      label: "Notion",      lucide: false },
  { Icon: SiNextdotjs,   label: "Next.js",     lucide: false },
  { Icon: SiTailwindcss, label: "Tailwind",    lucide: false },
  { Icon: SiFigma,       label: "Figma",       lucide: false },
  { Icon: Layers2,       label: "Photoshop",   lucide: true  },
  { Icon: PenTool,       label: "Illustrator", lucide: true  },
  { Icon: SiJavascript,  label: "JavaScript",  lucide: false },
  { Icon: Code2,         label: "CSS",         lucide: true  },
  { Icon: FileCode,      label: "HTML",        lucide: true  },
];

function TechPill({ Icon, label, lucide }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        color: "var(--txt-muted)",
      }}
      title={label}
    >
      {lucide ? (
        <Icon
          className="h-4 w-4 shrink-0"
          style={{ color: "var(--accent)" }}
          strokeWidth={1.75}
          aria-hidden
        />
      ) : (
        <Icon
          className="h-4 w-4 shrink-0"
          style={{ color: "var(--accent)" }}
          aria-hidden
        />
      )}
      <span>{label}</span>
    </div>
  );
}

export default function TechMarquee() {
  // 4 copies ensure the strip is always wider than the viewport so no black gap appears
  const row = [...items, ...items, ...items, ...items];

  return (
    <div
      className="py-5 sm:py-6"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p
        className="mb-10 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs"
        style={{ color: "var(--txt-subtle)" }}
      >
        Stack & herramientas
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {row.map((item, i) => (
            <TechPill key={`${item.label}-${i}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
