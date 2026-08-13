"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Button } from "@/components/ui/button";

type Consent = "granted" | "denied";

const STORAGE_KEY = "cookie-consent";

// Only mounted when features.analytics is enabled (see src/config/features.ts).
// Renders nothing until mounted (avoids a server/client mismatch, since the
// stored choice only exists in the browser), then either the banner or the
// analytics scripts — never both.
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") setConsent(stored);
    setMounted(true);
  }, []);

  function choose(value: Consent) {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  if (!mounted) return null;

  if (consent === "granted") {
    return (
      <>
        <Analytics />
        <SpeedInsights />
      </>
    );
  }

  if (consent === "denied") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-100 border-t bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted-foreground">
          Wir nutzen Analytics, um zu verstehen, wie diese Website genutzt wird.
          Deine Wahl gilt nur für dieses Gerät.
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" onClick={() => choose("denied")}>
            Nur notwendige
          </Button>
          <Button onClick={() => choose("granted")}>Alle akzeptieren</Button>
        </div>
      </div>
    </div>
  );
}
