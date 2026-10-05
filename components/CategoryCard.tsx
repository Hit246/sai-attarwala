"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryInfo } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { language, t } = useLanguage();

  const name = language === "gu" ? category.nameGu : category.nameEn;
  const description = language === "gu" ? category.descriptionGu : category.descriptionEn;

  return (
    <Link
      href={`/products/?cat=${category.id}`}
      className="group relative rounded-2xl bg-gradient-to-b from-[#181822] to-[#101015] border border-brand-border hover:border-brand-gold/70 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-gold hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Subtle background glow effect on hover */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all duration-500"></div>

      <div>
        {/* Category Icon / SVG Visual */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-16 h-16 rounded-xl bg-[#0b0b0e] border border-brand-gold/30 p-2.5 flex items-center justify-center group-hover:border-brand-gold group-hover:scale-105 transition-all duration-300 shadow-inner">
            <Image
              src={category.image}
              alt={name}
              width={48}
              height={48}
              className="object-contain drop-shadow"
            />
          </div>
          <span className="text-[11px] font-semibold text-brand-gold bg-brand-goldMuted border border-brand-gold/30 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>3+ Items</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-lg text-white group-hover:text-brand-gold transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer Link Indicator */}
      <div className="mt-5 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-goldLight group-hover:text-brand-gold">
        <span>{t.viewCategoryProducts}</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
