// Invisible until focused — the first tab stop on every page, so keyboard
// users can bypass the header/nav straight to the main content (PLAN.md §8).
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
    >
      Zum Hauptinhalt springen
    </a>
  );
}
