"use client";

import { Cloud, PenTool } from "lucide-react";
import {
  SiBlender,
  SiFigma,
  SiNextdotjs,
  SiNotion,
  SiReact,
  SiThreedotjs,
} from "react-icons/si";

const items = [
  { Icon: PenTool, label: "Adobe", lucide: true },
  { Icon: Cloud, label: "AWS", lucide: true },
  { Icon: SiNotion, label: "Notion" },
  { Icon: SiThreedotjs, label: "Three.js" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiFigma, label: "Figma" },
  { Icon: SiReact, label: "React" },
  { Icon: SiBlender, label: "Blender" },
];

function TechPill({ Icon, label, lucide }) {
  return (
    <div
      className="flex shrink-0 items-center gap-2 rounded-full border border-white/[0.09] bg-zinc-950/80 px-3 py-2 backdrop-blur-sm sm:gap-2.5 sm:px-4 sm:py-2.5"
      title={label}
    >
      {lucide ? (
        <Icon className="h-5 w-5 text-zinc-300" strokeWidth={1.75} aria-hidden />
      ) : (
        <Icon className="h-5 w-5 text-zinc-300" aria-hidden />
      )}
      <span className="text-xs font-medium text-zinc-400 sm:text-sm">{label}</span>
    </div>
  );
}

export default function TechMarquee() {
  const row = [...items, ...items];

  return (
    <div className="border-y border-white/[0.06] bg-black py-5 sm:py-6">
      <p className="mb-3 px-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:mb-4 sm:text-xs">
        Stack y herramientas
      </p>
      <div className="relative overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee gap-2.5 pr-2.5 sm:gap-3 sm:pr-3">
          {row.map((item, i) => (
            <TechPill key={`${item.label}-${i}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
