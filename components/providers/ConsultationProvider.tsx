"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Dictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

interface ConsultationCtx {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Ctx = createContext<ConsultationCtx | null>(null);

export function useConsultation(): ConsultationCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return ctx;
}

export function ConsultationProvider({
  lang,
  dict,
  children,
}: {
  lang: Lang;
  dict: Dictionary;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  // Lock body scroll while the dialog is open; restore on close/unmount.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Ctx.Provider value={{ open, openModal, closeModal }}>
      {children}
      {open && (
        <ConsultationModal lang={lang} dict={dict} onClose={closeModal} />
      )}
    </Ctx.Provider>
  );
}
