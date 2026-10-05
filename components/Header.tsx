"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, Menu, X, Globe, Sparkles } from "lucide-react";

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.navHome },
    { href: "/products/", label: t.navProducts },
    { href: "/about/", label: t.navAbout },
    { href: "/contact/", label: t.navContact },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c0c0e]/95 backdrop-blur-md border-b border-brand-border shadow-lg"
          : "bg-[#0c0c0e] border-b border-brand-border/60"
      }`}
    >
      {/* Top micro bar for quick announcement & direct contact */}
      <div className="bg-gradient-to-r from-[#14141a] via-[#1c1c24] to-[#14141a] border-b border-brand-border/40 py-1.5 px-4 text-xs text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-gray-300 text-[11px] sm:text-xs">
              {language === "gu"
                ? "ડી-૫, આશા શોપિંગ સેન્ટર, લક્ષ્મી સિનેમા રોડ, ઈડર"
                : "D-5, Asha Shopping Centre, Laxmi Cinema Road, Idar"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:+919898382682"
              className="flex items-center gap-1.5 text-brand-goldLight hover:text-brand-gold transition-colors font-medium touch-target py-0"
              aria-label="Call +91 9898382682"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+91 9898382682</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1"
          >
            <div className="relative w-12 h-12 rounded-full border border-brand-gold/60 bg-brand-surface p-0.5 overflow-hidden flex items-center justify-center group-hover:border-brand-gold transition-all duration-300 shadow-gold">
              <Image
                src="/images/logo.png"
                alt="Sai Attarwala & Men's Accessories Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <div className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-brand-gold transition-colors">
                {t.brandName}
              </div>
              <div className="text-xs text-brand-gold font-medium tracking-wider uppercase">
                {t.brandSub}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-brand-gold bg-brand-goldMuted border border-brand-gold/40 shadow-sm"
                      : "text-gray-300 hover:text-white hover:bg-brand-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              type="button"
              aria-label="Toggle language between English and Gujarati"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-brand-gold/50 bg-brand-surface hover:bg-brand-gold/10 text-brand-goldLight text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              <Globe className="w-4 h-4 text-brand-gold" />
              <span>{t.langToggleText}</span>
            </button>

            {/* Direct Call Button */}
            <a
              href="tel:+919898382682"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-gradient text-black font-semibold text-sm hover:brightness-110 shadow-gold transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-black" />
              <span>{t.navCallNow}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language Toggle on Mobile */}
            <button
              onClick={toggleLanguage}
              type="button"
              aria-label="Switch Language"
              className="touch-target px-2.5 py-1.5 rounded-lg border border-brand-gold/50 bg-brand-surface text-brand-gold text-xs font-semibold"
            >
              {language === "en" ? "ગુજરાતી" : "EN"}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="touch-target p-2 rounded-lg bg-brand-surface border border-brand-border text-gray-200 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-gold" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111116] border-b border-brand-border/80 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`touch-target px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    active
                      ? "text-brand-gold bg-brand-goldMuted border border-brand-gold/30 font-semibold"
                      : "text-gray-200 hover:text-white hover:bg-brand-surface"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <Sparkles className="w-4 h-4 text-brand-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-brand-border/60 flex flex-col gap-2.5">
            <a
              href="tel:+919898382682"
              className="touch-target w-full py-3 rounded-lg bg-gold-gradient text-black font-bold text-center flex items-center justify-center gap-2 shadow-gold"
            >
              <Phone className="w-5 h-5 text-black" />
              <span>{t.navCallNow} (+91 9898382682)</span>
            </a>

            <a
              href={`https://wa.me/919898382682?text=${encodeURIComponent(t.waGeneralMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target w-full py-3 rounded-lg bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md hover:brightness-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.navWhatsApp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
