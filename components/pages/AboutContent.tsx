"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, HeartHandshake, MapPin, Sparkles, Award, Phone, ArrowRight } from "lucide-react";

export const AboutContent: React.FC = () => {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t.aboutValue1Title,
      description: t.aboutValue1Desc,
    },
    {
      icon: HeartHandshake,
      title: t.aboutValue2Title,
      description: t.aboutValue2Desc,
    },
    {
      icon: ShieldCheck,
      title: t.aboutValue3Title,
      description: t.aboutValue3Desc,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === "gu" ? "અમારો પરિચય" : "Discover Our Heritage"}</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white">
          {t.aboutTitle}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {t.aboutSubtitle}
        </p>
      </div>

      {/* Main Shop Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Story Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
            <span>{t.aboutStoryTitle}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-snug">
            {language === "gu"
              ? "ઈડરમાં શુદ્ધતા, ભરોસો અને પ્રીમિયમ સુગંધનો વારસો"
              : "Bringing Pure Fragrance & Men's Style to Idar"}
          </h2>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>{t.aboutStoryBody}</p>
            <p>
              {language === "gu"
                ? "અમારો મુખ્ય હેતુ દરેક ગ્રાહકને ઉત્તમ ગુણવત્તાના આલ્કોહોલ-મુક્ત અત્તરો, આંતરરાષ્ટ્રીય પરફ્યુમ્સ અને રોજિંદા જીવનમાં ઉપયોગી ટકાઉ એક્સેસરીઝ વ્યાજબી ભાવે આપવાનો છે. અમારી દુકાનમાં આપનું હંમેશા હૃદયપૂર્વક સ્વાગત છે."
                : "From concentrated natural florals and exotic woody notes to high-grade leather accessories and daily lifestyle goods, every product in our shop is hand-selected to ensure pure satisfaction and genuine value."}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="touch-target px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold text-sm flex items-center gap-2 shadow-gold hover:brightness-110 transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.getDirections}</span>
            </Link>
            <a
              href="tel:+919898382682"
              className="touch-target px-6 py-3 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-gold text-brand-goldLight font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>+91 9898382682</span>
            </a>
          </div>
        </div>

        {/* Right Side: Decorative Shop Visual Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md p-8 rounded-3xl bg-gradient-to-b from-[#191924] to-[#101015] border border-brand-gold/40 shadow-2xl text-center space-y-6">
            <div className="w-28 h-28 rounded-full bg-black border-2 border-brand-gold p-1 shadow-goldGlow mx-auto flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Sai Attarwala Logo"
                width={100}
                height={100}
                className="object-contain w-full h-full rounded-full"
              />
            </div>

            <div>
              <h3 className="font-serif font-black text-xl text-white">
                Sai Attarwala & Men&apos;s Accessories
              </h3>
              <p className="text-xs text-brand-gold font-medium tracking-wider uppercase mt-1">
                Asha Shopping Centre, Idar
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0b0b0e] border border-brand-border text-xs text-left space-y-2.5">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>D-5, Asha Shopping Centre, Laxmi Cinema Road, Idar</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+91 9898382682</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            {t.aboutValuesTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            {language === "gu"
              ? "અમારા સિદ્ધાંતો જે દરેક ગ્રાહકને શ્રેષ્ઠ અનુભવ આપે છે"
              : "The core values that guide our customer commitment every day"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-gold/50 space-y-4 transition-all hover:-translate-y-1 hover:shadow-gold"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-goldMuted border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Visit Invitation Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#171722] via-[#222230] to-[#171722] border border-brand-gold/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
          {t.aboutVisitBannerTitle}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {t.aboutVisitBannerDesc}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact/"
            className="touch-target px-6 py-3.5 rounded-xl bg-gold-gradient text-black font-bold text-sm shadow-gold hover:brightness-110 transition-all flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span>{t.navContact}</span>
          </Link>
          <Link
            href="/products/"
            className="touch-target px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-gold text-white font-semibold text-sm transition-all flex items-center gap-2"
          >
            <span>{t.navProducts}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
