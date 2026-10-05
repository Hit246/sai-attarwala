"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Home, ShoppingBag, Sparkles } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-brand-surface border border-brand-border/80 p-8 sm:p-10 rounded-3xl shadow-2xl">
        <div className="w-20 h-20 rounded-full bg-brand-goldMuted border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto shadow-gold">
          <Sparkles className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <div className="font-serif font-black text-5xl text-brand-gold">404</div>
          <h1 className="font-serif font-bold text-2xl text-white">
            {t.notFoundTitle}
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t.notFoundDesc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/"
            className="touch-target flex-1 py-3 px-4 rounded-xl bg-gold-gradient text-black font-bold text-sm flex items-center justify-center gap-2 shadow-gold hover:brightness-110 transition-all"
          >
            <Home className="w-4 h-4 text-black" />
            <span>{t.backToHome}</span>
          </Link>
          <Link
            href="/products/"
            className="touch-target flex-1 py-3 px-4 rounded-xl bg-brand-card border border-brand-border text-brand-goldLight hover:text-brand-gold font-semibold text-sm flex items-center justify-center gap-2 hover:border-brand-gold/60 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{t.navProducts}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
