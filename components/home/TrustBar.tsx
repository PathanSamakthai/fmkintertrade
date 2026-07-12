import type { Dictionary } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

/** Trust signal bar — 4 value statements, no invented figures (brief §04). */
export function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[820px]:grid-cols-4">
          {dict.trust.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 py-[34px] min-[820px]:border-r min-[820px]:border-line min-[820px]:pr-7"
            >
              <span className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[11px] bg-background text-primary">
                <Icon name={item.icon} size={24} />
              </span>
              <div>
                <div className="text-base font-bold text-ink">{item.title}</div>
                <div className="mt-[5px] text-[13.5px] leading-[1.5] text-muted">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
