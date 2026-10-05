"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook, Youtube, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#08080a] border-t border-brand-border text-gray-400 text-sm mt-20">
      {/* Upper Footer: Main Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border border-brand-gold/60 bg-brand-surface p-0.5 overflow-hidden flex items-center justify-center shadow-gold">
                <Image
                  src="/images/logo.png"
                  alt="Sai Attarwala Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block">
                  {t.brandName}
                </span>
                <span className="text-xs text-brand-gold font-medium tracking-wider uppercase block">
                  {t.brandSub}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              {t.footerAbout}
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-brand-goldLight uppercase tracking-wider block mb-2">
                {t.socialLinksTitle}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="touch-target w-9 h-9 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-gray-300 hover:text-brand-gold hover:border-brand-gold transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="touch-target w-9 h-9 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-gray-300 hover:text-brand-gold hover:border-brand-gold transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="touch-target w-9 h-9 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-gray-300 hover:text-brand-gold hover:border-brand-gold transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-base text-brand-gold tracking-wide uppercase">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-goldLight transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-gold">›</span> {t.navHome}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/"
                  className="hover:text-brand-goldLight transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-gold">›</span> {t.navProducts}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="hover:text-brand-goldLight transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-gold">›</span> {t.navAbout}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="hover:text-brand-goldLight transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-gold">›</span> {t.navContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Quality Badge */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-base text-brand-gold tracking-wide uppercase">
              {t.shopTimingsHeader}
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-gray-300">
              <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{t.shopTimings}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {language === "gu" ? "સોમવાર થી રવિવાર ઓપન" : "Open All 7 Days"}
                </p>
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-brand-surface border border-brand-border/80 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-brand-goldLight block">
                  {language === "gu" ? "૧૦૦% શુદ્ધતાની ખાતરી" : "100% Quality Guaranteed"}
                </span>
                <span className="text-gray-400">
                  {language === "gu" ? "ઓરિજિનલ અત્તર અને પ્રોડક્ટ્સ" : "Authentic fragrances and goods"}
                </span>
              </div>
            </div>
          </div>

          {/* Shop Address & Direct Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-base text-brand-gold tracking-wide uppercase">
              {t.shopAddressTitle}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-gray-300 text-xs leading-relaxed">
                  {t.shopAddress}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="tel:+919898382682"
                  className="text-white hover:text-brand-gold font-medium text-xs transition-colors"
                >
                  +91 9898382682
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/919898382682?text=${encodeURIComponent(t.waGeneralMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#25D366] font-medium text-xs transition-colors"
                >
                  +91 9898382682 (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Location credit */}
      <div className="bg-[#050507] border-t border-brand-border/60 py-4 px-4 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {t.allRightsReserved}
          </div>
          <div className="text-brand-gold/80 font-medium">
            {t.developedForLocal}
          </div>
        </div>
      </div>
    </footer>
  );
};
