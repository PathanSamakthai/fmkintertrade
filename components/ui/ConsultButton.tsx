"use client";

import { useConsultation } from "@/components/providers/ConsultationProvider";
import { Arrow } from "@/components/ui/Icon";

type Variant = "primary" | "gold" | "outlineLight" | "menu";

const VARIANTS: Record<Variant, string> = {
  // Green solid — header CTA.
  primary:
    "bg-primary text-white shadow-[0_4px_16px_rgba(11,47,34,.18)] hover:bg-primary-800 hover:-translate-y-px",
  // Gold solid — final CTA / prominent actions.
  gold: "bg-accent text-primary-950 hover:-translate-y-0.5",
  // Transparent with light border — on dark backgrounds (hero secondary).
  outlineLight:
    "bg-transparent text-white border border-white/35 hover:bg-white/10 hover:border-white/60",
  // Full-width green — inside the mobile menu.
  menu: "bg-primary text-white w-full justify-center py-[15px]",
};

export function ConsultButton({
  label,
  variant = "primary",
  withArrow = false,
  className = "",
}: {
  label: string;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  const { openModal } = useConsultation();
  return (
    <button
      type="button"
      onClick={openModal}
      className={`inline-flex items-center gap-2 rounded-[11px] px-[18px] py-[11px] text-sm font-bold transition-[background,transform,border-color] ${VARIANTS[variant]} ${className}`}
    >
      {label}
      {withArrow && <Arrow size={16} />}
    </button>
  );
}
