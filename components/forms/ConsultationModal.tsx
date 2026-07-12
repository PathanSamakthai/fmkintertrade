"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export function ConsultationModal({
  lang,
  dict,
  onClose,
}: {
  lang: Lang;
  dict: Dictionary;
  onClose: () => void;
}) {
  const f = dict.form;
  const [demoNotice, setDemoNotice] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Move focus into the dialog when it opens (keyboard / SR users).
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[1600] flex items-center justify-center p-4"
      lang={lang}
    >
      <div
        className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-title"
        tabIndex={-1}
        className="relative max-h-[92vh] w-[min(640px,100%)] overflow-y-auto rounded-[20px] bg-white shadow-[0_30px_90px_rgba(6,27,20,.4)] outline-none"
      >
        <div className="sticky top-0 z-[2] flex items-start justify-between rounded-t-[20px] bg-primary px-7 py-6 text-white">
          <div>
            <div className="text-[11px] font-bold tracking-[0.16em] text-accent">
              {f.eyebrow}
            </div>
            <h2 id="consult-title" className="mt-1.5 text-[23px] font-extrabold tracking-[-0.01em]">
              {f.title}
            </h2>
            <p className="mt-1.5 max-w-[44ch] text-[13px] text-white/70">{f.sub}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={f.close}
            className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[9px] border border-white/25 bg-transparent text-white"
          >
            <Icon name="close" size={20} strokeWidth={1.8} />
          </button>
        </div>

        <div className="px-7 py-[26px]">
          <div className="mb-[22px] rounded-[10px] border border-line bg-background px-[14px] py-2.5 font-mono text-[11.5px] text-muted">
            {f.demoBadge}
          </div>

          {demoNotice ? (
            <div
              role="status"
              className="rounded-[12px] bg-primary p-[22px] text-center text-white"
            >
              <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Icon name="check" size={26} strokeWidth={2} />
              </div>
              <div className="text-[17px] font-bold">{f.demoTitle}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{f.demoBody}</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-[18px] rounded-[10px] border-none bg-accent px-[22px] py-[11px] text-sm font-bold text-primary-950"
              >
                {f.close}
              </button>
            </div>
          ) : (
            <ConsultationForm dict={dict} onDemoSuccess={() => setDemoNotice(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
