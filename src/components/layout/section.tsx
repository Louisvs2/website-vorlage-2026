import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// The single source of vertical rhythm between sections (DESIGN.md §4, §8).
// Background variants alternate base and subtly tinted surfaces to
// structure long pages — never introduce ad-hoc section padding. Padding
// scales with --section-rhythm (default 1 reproduces the original
// 5/7/8rem measures exactly), so a theme can be tighter or more spacious
// without every section being touched individually (ARCHITECTURE.md).
const sectionVariants = cva(
  "py-[calc(5rem*var(--section-rhythm))] sm:py-[calc(7rem*var(--section-rhythm))] lg:py-[calc(8rem*var(--section-rhythm))]",
  {
    variants: {
      background: {
        default: "bg-background",
        muted: "bg-muted",
      },
    },
    defaultVariants: {
      background: "default",
    },
  },
);

export type SectionBackground = VariantProps<
  typeof sectionVariants
>["background"];

export function Section({
  className,
  background,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      className={cn(sectionVariants({ background }), className)}
      {...props}
    />
  );
}
