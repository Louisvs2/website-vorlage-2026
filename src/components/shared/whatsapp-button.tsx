import { MessageCircle } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  /** International phone number, digits only (e.g. "4989123456"). */
  number: string;
}

// Global floating contact shortcut — only mounted in the root layout when
// features.whatsapp.enabled is set (see src/config/features.ts).
export function WhatsAppButton({ number }: WhatsAppButtonProps) {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <Magnetic>
        <Button asChild size="icon" className="size-12 rounded-full shadow-lg">
          <a
            href={`https://wa.me/${number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kontakt per WhatsApp"
          >
            <MessageCircle className="size-5" aria-hidden />
          </a>
        </Button>
      </Magnetic>
    </div>
  );
}
