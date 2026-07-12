import type { ReactNode, ElementType } from "react";

/** Centered content column at the shared 1180px max width (brief §16). */
export function Container({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-6 ${className}`}>
      {children}
    </Tag>
  );
}
