import type { Metadata } from "next";

import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { features } from "@/config/features";
import { activeLook } from "@/config/theme";
import { siteConfig } from "@/config/site";
import { fontVariables } from "@/lib/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s – ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-look={activeLook} className={fontVariables}>
      <body>
        {children}
        {features.whatsapp.enabled && features.whatsapp.number && (
          <WhatsAppButton number={features.whatsapp.number} />
        )}
      </body>
    </html>
  );
}
