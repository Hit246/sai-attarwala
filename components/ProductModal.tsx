"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { X, MessageCircle, Phone, Tag, CheckCircle2, MapPin } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const name = language === "gu" ? product.nameGujarati : product.name;
  const description = language === "gu" ? product.descriptionGujarati : product.description;
  const categoryName = language === "gu" ? product.categoryNameGujarati : product.categoryName;
  const badge = language === "gu" ? product.badgeGujarati : product.badge;

  const waMessage = language === "gu"
    ? `નમસ્તે સાંઈ અત્તરવાલા, મને "${product.nameGujarati} (${product.name})" વિશે પૂછપરછ કરવી છે. ભાવ અને ઉપલબ્ધતા જણાવશો.`
    : `Hi Sai Attarwala, I want to inquire about "${product.name}". Please share details and availability.`;

  const waUrl = `https://wa.me/919898382682?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-brand-surface border border-brand-gold/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-[#0d0d11]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
              {t.modalCategory}: {categoryName}
            </span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="touch-target p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-brand-card transition-colors"
            aria-label={t.modalClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image Preview */}
            <div className="relative aspect-square w-full bg-[#101015] rounded-xl border border-brand-border flex items-center justify-center p-6 shadow-inner">
              <Image
                src={product.image}
                alt={name}
                width={280}
                height={280}
                className="object-contain max-h-full max-w-full drop-shadow-lg"
              />
              {badge && (
                <div className="absolute top-3 left-3 bg-brand-gold text-black text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
                  {badge}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  {name}
                </h2>
                {language === "gu" && (
                  <p className="text-xs text-brand-gold/80 mt-0.5">{product.name}</p>
                )}
                {language === "en" && (
                  <p className="text-xs text-brand-gold/80 mt-0.5">{product.nameGujarati}</p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">{t.pricePrefix}</span>
                <span className={`text-xl font-bold ${product.price && product.price !== 'Ask for price' ? 'text-brand-goldLight' : 'text-gray-300 italic text-base'}`}>
                  {product.price && product.price !== 'Ask for price' ? product.price : t.askForPrice}
                </span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                  {t.modalDescription}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.inStockBadge}</span>
              </div>
            </div>
          </div>

          {/* Shop Location & Enquiry Box */}
          <div className="p-4 rounded-xl bg-[#0c0c10] border border-brand-border/80 space-y-2 text-xs text-gray-400">
            <div className="flex items-start gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>D-5, Asha Shopping Centre, Laxmi Cinema Road, Idar</span>
            </div>
            <p className="text-gray-400 italic">
              {t.modalOrderNote}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-brand-border bg-[#0d0d11] flex flex-col sm:flex-row gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-98 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.enquireWhatsApp}</span>
          </a>

          <a
            href="tel:+919898382682"
            className="touch-target py-3 px-5 rounded-xl bg-gold-gradient text-black font-bold text-sm flex items-center justify-center gap-2 shadow-gold hover:brightness-110 active:scale-98 transition-all"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>{t.modalDirectCall}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
