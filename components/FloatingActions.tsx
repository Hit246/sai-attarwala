"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FloatingActions: React.FC = () => {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/919898382682?text=${encodeURIComponent(t.waGeneralMsg)}`;

  return (
    <>
      {/* Mobile Sticky Floating Action Bar (Bottom Screen) */}
      <div className="fixed bottom-3 right-3 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
        {/* Floating Call Button */}
        <a
          href="tel:+919898382682"
          aria-label="Direct Phone Call"
          className="group touch-target flex items-center gap-2 bg-gradient-to-r from-amber-600 to-brand-gold text-black font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-gold hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Phone className="w-5 h-5 text-black" />
          <span className="hidden md:inline text-xs font-bold uppercase tracking-wider text-black">
            {t.navCallNow}
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Message"
          className="group touch-target flex items-center gap-2 bg-[#25D366] text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 hover:bg-[#20bd5a] transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="hidden md:inline text-xs font-bold uppercase tracking-wider text-white">
            {t.navWhatsApp}
          </span>
        </a>
      </div>
    </>
  );
};
