"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, MessageCircle, Clock, Navigation, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";

export const ContactContent: React.FC = () => {
  const { language, t } = useLanguage();

  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Asha+Shopping+Centre+Laxmi+Cinema+Road+Idar+Gujarat";

  const waUrl = `https://wa.me/919898382682?text=${encodeURIComponent(t.waGeneralMsg)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === "gu" ? "અમારો સંપર્ક" : "Get in Touch"}</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white">
          {t.contactTitle}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {t.contactSubtitle}
        </p>
      </div>

      {/* Main Grid: Contact Cards + Embedded Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Address Card */}
          <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/80 hover:border-brand-gold/50 transition-all space-y-3 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-goldMuted border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white">
                  {t.shopAddressTitle}
                </h3>
                <span className="text-[11px] text-brand-gold">Asha Shopping Centre, Idar</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed pl-1">
              {t.shopAddress}
            </p>
            <div className="pt-1">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-goldLight"
              >
                <span>{t.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Call & WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/80 hover:border-brand-gold/50 transition-all space-y-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-goldMuted border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white">
                  {t.shopPhoneTitle}
                </h3>
                <span className="text-[11px] text-emerald-400">Available 9:00 AM - 8:30 PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="tel:+919898382682"
                className="touch-target flex-1 py-3 px-4 rounded-xl bg-gold-gradient text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-gold hover:brightness-110 active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>+91 9898382682</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Shop Timings Card */}
          <div className="p-6 rounded-2xl bg-brand-card border border-brand-border/80 hover:border-brand-gold/50 transition-all space-y-3 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-goldMuted border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white">
                  {t.shopTimingsTitle}
                </h3>
                <span className="text-[11px] text-gray-400">Open 7 Days a week</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm font-medium pl-1">
              {t.shopTimings}
            </p>
            <p className="text-xs text-brand-gold pl-1">
              {language === "gu"
                ? "તહેવાર અને રજાના દિવસોમાં પણ દુકાન ખુલ્લી રહે છે."
                : "Open during festivals and holidays for your convenience."}
            </p>
          </div>

          {/* Walk-in Note */}
          <div className="p-4 rounded-xl bg-[#101017] border border-brand-border/80 flex items-start gap-3 text-xs text-gray-400">
            <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <span>{t.directVisitNote}</span>
          </div>
        </div>

        {/* Right Column: Google Maps Location Frame (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl bg-brand-card border border-brand-gold/40 overflow-hidden shadow-2xl flex flex-col">
            {/* Map Top Bar */}
            <div className="px-6 py-4 bg-[#121218] border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-brand-gold" />
                <span className="font-serif font-bold text-sm text-white">
                  {language === "gu" ? "દુકાનનું નકશા પર સ્થાન (Idar)" : "Shop Location Map (Idar)"}
                </span>
              </div>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand-gold hover:text-brand-goldLight flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative w-full h-[380px] sm:h-[450px] bg-[#0c0c0e]">
              <iframe
                title="Sai Attarwala & Men's Accessories Location on Google Maps"
                src="https://maps.google.com/maps?q=Asha+Shopping+Centre+Laxmi+Cinema+Road+Idar+Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Map Bottom Helper */}
            <div className="p-4 bg-[#121218] border-t border-brand-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
              <span>Near Laxmi Cinema Road & Shrinagar, Idar</span>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-4 py-2 rounded-lg bg-brand-surface border border-brand-gold/50 text-brand-goldLight hover:text-brand-gold font-semibold flex items-center gap-1.5 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.getDirections}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Contact Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#181824] via-[#242434] to-[#181824] border border-brand-gold/40 p-8 sm:p-12 text-center space-y-5 shadow-2xl">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
          {t.contactBannerTitle}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {t.contactBannerDesc}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="tel:+919898382682"
            className="touch-target px-6 py-3.5 rounded-xl bg-gold-gradient text-black font-bold text-sm shadow-gold hover:brightness-110 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>{t.heroCtaCall}</span>
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:brightness-105 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.heroCtaWhatsApp}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
