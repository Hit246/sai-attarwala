"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { Product } from "@/types";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Phone, MessageCircle, ArrowRight, Sparkles, MapPin, ShieldCheck, Clock, Award } from "lucide-react";

export const HomeContent: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter 6 featured products for homepage showcase
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  const whatsappUrl = `https://wa.me/919898382682?text=${encodeURIComponent(t.waGeneralMsg)}`;

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#13131a] via-[#0d0d11] to-[#09090b]">
        {/* Decorative Golden Orbs & Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-gold/15 via-brand-gold/5 to-transparent blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute -top-32 right-10 w-80 h-80 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/40 text-brand-goldLight text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                <span>{t.heroBadge}</span>
              </div>

              {/* Main Catchy Heading */}
              <h1 className="font-serif font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                {t.heroTitle} <br />
                <span className="gold-text-gradient">{t.heroTitleHighlight}</span>
              </h1>

              {/* Tagline / Description */}
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.heroDesc}
              </p>

              {/* Call-To-Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                {/* Call Now Button */}
                <a
                  href="tel:+919898382682"
                  className="touch-target px-6 py-3.5 rounded-xl bg-gold-gradient text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-gold hover:brightness-110 active:scale-98 transition-all"
                >
                  <Phone className="w-5 h-5 text-black" />
                  <span>{t.heroCtaCall}</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.heroCtaWhatsApp}</span>
                </a>

                {/* Browse Products Link */}
                <Link
                  href="/products/"
                  className="touch-target px-5 py-3.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-gold/60 text-brand-goldLight font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all hover:bg-brand-card"
                >
                  <span>{t.heroCtaProducts}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Location Trust Highlight */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-gray-400">
                <div className="flex items-center gap-1.5 text-brand-goldLight">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>D-5, Asha Shopping Centre, Idar</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{language === "gu" ? "દરરોજ ખુલ્લું: સવારે ૯ થી રાત્રે ૮:૩૦" : "Open 7 Days: 9:00 AM - 8:30 PM"}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Hero Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1c1c26] to-[#121217] border border-brand-gold/40 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/15 rounded-full blur-2xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-black/60 border-2 border-brand-gold p-1 shadow-goldGlow flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Sai Attarwala Logo"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full rounded-full"
                      priority
                    />
                  </div>

                  <div>
                    <h2 className="font-serif font-black text-xl sm:text-2xl text-white">
                      {t.brandName}
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-gold font-semibold tracking-wider uppercase mt-1">
                      {t.brandSub}
                    </p>
                  </div>

                  <div className="w-full bg-[#0a0a0d] p-4 rounded-xl border border-brand-border text-left space-y-2 text-xs">
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="text-gray-400">{language === "gu" ? "સ્થળ:" : "Location:"}</span>
                      <span className="font-medium text-white text-right">Asha Shopping Centre, Idar</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-300 border-t border-brand-border/40 pt-2">
                      <span className="text-gray-400">{language === "gu" ? "અત્તર ક્વોલિટી:" : "Attar Quality:"}</span>
                      <span className="font-semibold text-brand-goldLight">{language === "gu" ? "૧૦૦% શુદ્ધ આલ્કોહોલ-ફ્રી" : "100% Pure Alcohol-free"}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-300 border-t border-brand-border/40 pt-2">
                      <span className="text-gray-400">{language === "gu" ? "સંપર્ક:" : "Contact:"}</span>
                      <span className="font-semibold text-emerald-400">+91 9898382682</span>
                    </div>
                  </div>

                  <div className="w-full grid grid-cols-2 gap-2 text-center text-xs font-medium">
                    <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                      <Award className="w-4 h-4 text-brand-gold mx-auto mb-1" />
                      <span className="text-gray-200">{language === "gu" ? "ઓરિજિનલ પરફ્યુમ" : "Imported Perfumes"}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                      <ShieldCheck className="w-4 h-4 text-brand-gold mx-auto mb-1" />
                      <span className="text-gray-200">{language === "gu" ? "શુદ્ધ લેધર બેલ્ટ" : "Genuine Leather"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-card border border-brand-border text-center space-y-1 shadow-card">
            <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-gold">10+</div>
            <div className="font-semibold text-sm text-white">{t.statProducts}</div>
            <div className="text-xs text-gray-400">{t.statProductsSub}</div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-card border border-brand-border text-center space-y-1 shadow-card">
            <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-gold">100%</div>
            <div className="font-semibold text-sm text-white">{t.statQuality}</div>
            <div className="text-xs text-gray-400">{t.statQualitySub}</div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-card border border-brand-border text-center space-y-1 shadow-card">
            <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-gold">Fair Rates</div>
            <div className="font-semibold text-sm text-white">{t.statPrices}</div>
            <div className="text-xs text-gray-400">{t.statPricesSub}</div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-card border border-brand-border text-center space-y-1 shadow-card">
            <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-gold">Idar</div>
            <div className="font-semibold text-sm text-white">{t.statLocation}</div>
            <div className="text-xs text-gray-400">{t.statLocationSub}</div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            {t.categoriesTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            {t.categoriesSubtitle}
          </p>
        </div>

        {/* 10 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === "gu" ? "ટોપ કલેક્શન" : "Handpicked Highlights"}</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
              {t.featuredTitle}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              {t.featuredSubtitle}
            </p>
          </div>

          <Link
            href="/products/"
            className="touch-target px-5 py-2.5 rounded-xl bg-brand-surface border border-brand-gold/40 hover:border-brand-gold text-brand-gold font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-brand-gold hover:text-black transition-all"
          >
            <span>{t.viewAllProducts}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 6. SHORT SHOP STORY & VISIT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#171722] via-[#20202d] to-[#171722] border border-brand-gold/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                {t.aboutStoryTitle}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
                {language === "gu"
                  ? "ઈડરમાં આપનું મનપસંદ સુગંધ અને સ્ટાઈલનું કેન્દ્ર"
                  : "Experience Authenticity & Luxury in Idar"}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {t.aboutStoryBody}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact/"
                className="touch-target px-6 py-3.5 rounded-xl bg-gold-gradient text-black font-bold text-center text-sm shadow-gold hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>{t.getDirections}</span>
              </Link>
              <a
                href="tel:+919898382682"
                className="touch-target px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-white font-semibold text-center text-sm hover:border-brand-gold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>+91 9898382682</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
