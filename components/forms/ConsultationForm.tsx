"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Dictionary } from "@/lib/i18n";

const inputCls =
  "rounded-[9px] border border-line bg-white px-[13px] py-[11px] text-sm font-[inherit] focus:border-primary focus:outline-2 focus:outline-primary/15";
const labelCls = "text-[13px] font-semibold text-ink";
const errCls = "text-xs text-danger";

/** Basic phone shape — a leading +/(/digit then 6+ phone characters. */
const PHONE_RE = /^[+()\d][\d\s().-]{6,}$/;

function buildSchema(f: Dictionary["form"]) {
  return z.object({
    fullName: z.string().trim().min(1, f.errRequired),
    company: z.string().trim().min(1, f.errRequired),
    position: z.string().optional(),
    country: z.string().optional(),
    email: z
      .string()
      .trim()
      .min(1, f.errRequired)
      .email(f.errEmail),
    phone: z
      .string()
      .trim()
      .min(1, f.errRequired)
      .regex(PHONE_RE, f.errPhone),
    solution: z.string().optional(),
    projectType: z.string().optional(),
    message: z.string().optional(),
    contactMethod: z.string().optional(),
    consent: z.literal(true, {
      errorMap: () => ({ message: f.errConsent }),
    }),
  });
}

export type ConsultationValues = z.infer<ReturnType<typeof buildSchema>>;

export function ConsultationForm({
  dict,
  onDemoSuccess,
}: {
  dict: Dictionary;
  onDemoSuccess: (values: ConsultationValues) => void;
}) {
  const f = dict.form;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationValues>({
    resolver: zodResolver(buildSchema(f)),
    defaultValues: {
      fullName: "",
      company: "",
      position: "",
      country: "",
      email: "",
      phone: "",
      solution: "",
      projectType: "",
      message: "",
      contactMethod: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    // DEMO ONLY — no backend. Integration point (brief §08):
    // replace this delay with `await fetch('/api/consultation', { method:'POST', body: JSON.stringify(values) })`
    // and handle server errors + anti-spam (honeypot / token) there.
    await new Promise((r) => setTimeout(r, 900));
    onDemoSuccess(values);
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-name" className={labelCls}>
          {f.fullName} <span className="text-danger">*</span>
        </label>
        <input id="f-name" type="text" className={inputCls} aria-invalid={!!errors.fullName} {...register("fullName")} />
        {errors.fullName && <span className={errCls}>{errors.fullName.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-company" className={labelCls}>
          {f.company} <span className="text-danger">*</span>
        </label>
        <input id="f-company" type="text" className={inputCls} aria-invalid={!!errors.company} {...register("company")} />
        {errors.company && <span className={errCls}>{errors.company.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-position" className={labelCls}>
          {f.position}
        </label>
        <input id="f-position" type="text" className={inputCls} {...register("position")} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-country" className={labelCls}>
          {f.country}
        </label>
        <select id="f-country" className={inputCls} defaultValue="" {...register("country")}>
          {f.countryOpts.map((c, i) => (
            <option key={c} value={i === 0 ? "" : c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-email" className={labelCls}>
          {f.email} <span className="text-danger">*</span>
        </label>
        <input id="f-email" type="email" className={inputCls} aria-invalid={!!errors.email} {...register("email")} />
        {errors.email && <span className={errCls}>{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-phone" className={labelCls}>
          {f.phone} <span className="text-danger">*</span>
        </label>
        <input id="f-phone" type="tel" className={inputCls} aria-invalid={!!errors.phone} {...register("phone")} />
        {errors.phone && <span className={errCls}>{errors.phone.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-solution" className={labelCls}>
          {f.solution}
        </label>
        <select id="f-solution" className={inputCls} defaultValue="" {...register("solution")}>
          {f.solutionOpts.map((c, i) => (
            <option key={c} value={i === 0 ? "" : c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="f-ptype" className={labelCls}>
          {f.projectType}
        </label>
        <select id="f-ptype" className={inputCls} defaultValue="" {...register("projectType")}>
          {f.projectTypeOpts.map((c, i) => (
            <option key={c} value={i === 0 ? "" : c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="f-message" className={labelCls}>
          {f.message}
        </label>
        <textarea id="f-message" rows={3} className={`${inputCls} resize-y`} {...register("message")} />
      </div>

      <fieldset className="flex flex-col gap-1.5 sm:col-span-2">
        <legend className={`${labelCls} mb-1.5`}>{f.contactMethod}</legend>
        <div className="flex flex-wrap gap-[18px]">
          {f.contactMethodOpts.map((m) => (
            <label key={m} className="inline-flex cursor-pointer items-center gap-[7px] text-sm text-secondary">
              <input
                type="radio"
                value={m}
                className="h-4 w-4 accent-primary"
                {...register("contactMethod")}
              />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-2.5 text-[13px] leading-normal text-secondary">
          <input
            type="checkbox"
            className="mt-px h-[17px] w-[17px] flex-shrink-0 accent-primary"
            aria-invalid={!!errors.consent}
            {...register("consent")}
          />
          {f.consent}
        </label>
        {errors.consent && <span className={errCls}>{errors.consent.message}</span>}
      </div>

      <div className="mt-1.5 flex gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex flex-1 items-center justify-center gap-[9px] rounded-[11px] bg-primary px-4 py-[14px] text-[15px] font-bold text-white transition-colors hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-65"
        >
          {isSubmitting ? f.submitting : f.submit}
        </button>
      </div>
    </form>
  );
}
