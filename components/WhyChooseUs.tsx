"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Sparkles, Tag, MapPin } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: ShieldCheck,
      title: t.why1Title,
      description: t.why1Desc,
    },
    {
      icon: Sparkles,
      title: t.why2Title,
      description: t.why2Desc,
    },
    {
      icon: Tag,
      title: t.why3Title,
      description: t.why3Desc,
    },
    {
      icon: MapPin,
      title: t.why4Title,
      description: t.why4Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0c0c0e] via-[#121218] to-[#0c0c0e] relative overflow-hidden">
      {/* Subtle decorative radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-goldMuted border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sai Attarwala & Men&apos;s Accessories</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            {t.whyTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            {t.whySubtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#15151c] border border-brand-border/80 hover:border-brand-gold/50 p-6 flex flex-col items-start transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-goldMuted border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
