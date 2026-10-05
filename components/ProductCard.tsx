"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Eye, Tag } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { language, t } = useLanguage();

  const name = language === "gu" ? product.nameGujarati : product.name;
  const description = language === "gu" ? product.descriptionGujarati : product.description;
  const categoryName = language === "gu" ? product.categoryNameGujarati : product.categoryName;
  const badge = language === "gu" ? product.badgeGujarati : product.badge;

  const waMessage = language === "gu"
    ? `નમસ્તે સાંઈ અત્તરવાલા, મને "${product.nameGujarati} (${product.name})" વિશે પૂછપરછ કરવી છે. ભાવ અને ઉપલબ્ધતા જણાવશો.`
    : `Hi Sai Attarwala, I want to inquire about "${product.name}". Please share price & availability.`;

  const waUrl = `https://wa.me/919898382682?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="group rounded-2xl bg-brand-card border border-brand-border/80 hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-gold hover:-translate-y-1">
      {/* Product Image & Badges */}
      <div className="relative w-full aspect-square bg-[#121217] flex items-center justify-center p-6 border-b border-brand-border/50 overflow-hidden cursor-pointer"
        onClick={() => onOpenModal(product)}
      >
        <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Image
            src={product.image}
            alt={name}
            width={240}
            height={240}
            className="object-contain max-h-full max-w-full drop-shadow-md"
            loading="lazy"
          />
        </div>

        {/* Top Floating Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-brand-gold text-black text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
            {badge}
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 right-3 bg-brand-surface/90 backdrop-blur-md text-brand-goldLight text-[11px] font-medium px-2.5 py-1 rounded-md border border-brand-border">
          {categoryName}
        </div>

        {/* Quick View Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product);
            }}
            className="touch-target px-4 py-2 rounded-full bg-brand-surface/90 text-brand-gold text-xs font-semibold flex items-center gap-2 border border-brand-gold shadow-gold hover:bg-brand-gold hover:text-black transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>{t.viewDetails}</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 
              onClick={() => onOpenModal(product)}
              className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-brand-gold transition-colors line-clamp-2 cursor-pointer leading-snug"
            >
              {name}
            </h3>
          </div>
          
          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price & Action Section */}
        <div className="pt-3 border-t border-brand-border/60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-brand-gold" />
              <span>{t.pricePrefix}</span>
            </span>
            <span className={`font-bold ${product.price && product.price !== 'Ask for price' ? 'text-brand-goldLight text-lg' : 'text-gray-300 text-xs italic'}`}>
              {product.price && product.price !== 'Ask for price' ? product.price : t.askForPrice}
            </span>
          </div>

          {/* Action Buttons: WhatsApp Enquiry + Details */}
          <div className="flex items-center gap-2 pt-1">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target flex-1 py-2.5 px-3 rounded-lg bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 active:scale-98 transition-all"
              aria-label={`Enquire on WhatsApp about ${name}`}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="truncate">{t.enquireWhatsApp}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenModal(product)}
              className="touch-target p-2.5 rounded-lg bg-brand-surface border border-brand-border hover:border-brand-gold/60 text-brand-goldLight hover:text-brand-gold transition-colors"
              title={t.viewDetails}
              aria-label={t.viewDetails}
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
