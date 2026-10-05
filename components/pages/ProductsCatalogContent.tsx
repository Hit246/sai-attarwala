"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { Product, ProductCategory } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Search, Filter, X, Sparkles, RefreshCw } from "lucide-react";

function ProductsCatalogInner() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("cat") as ProductCategory) || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter and Search logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category match
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      // 2. Search match across English & Gujarati fields
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery =
        product.name.toLowerCase().includes(query) ||
        product.nameGujarati.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.descriptionGujarati.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query) ||
        product.categoryNameGujarati.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === "gu" ? "સંપૂર્ણ કલેક્શન" : "Authentic Catalog"}</span>
        </div>
        <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white">
          {t.catalogTitle}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {t.catalogSubtitle}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-5">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-gold">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-brand-surface border border-brand-border focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 text-white placeholder-gray-500 text-sm sm:text-base outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
              aria-label="Clear Search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-brand-gold/30 scrollbar-track-transparent">
          {/* 'All' button */}
          <button
            onClick={() => setSelectedCategory("all")}
            type="button"
            className={`touch-target whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
              selectedCategory === "all"
                ? "bg-brand-gold text-black shadow-gold font-bold"
                : "bg-brand-surface text-gray-300 border border-brand-border hover:border-brand-gold/50 hover:text-white"
            }`}
          >
            {t.filterAll} ({PRODUCTS.length})
          </button>

          {/* 10 Category buttons */}
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const label = language === "gu" ? cat.nameGu : cat.nameEn;
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`touch-target whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-brand-gold text-black shadow-gold font-bold"
                    : "bg-brand-surface text-gray-300 border border-brand-border hover:border-brand-gold/50 hover:text-white"
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Active Filter Indicator & Count */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 px-1">
          <div className="flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-brand-gold" />
            <span>
              {filteredProducts.length} {t.productCountText}
            </span>
          </div>

          {(selectedCategory !== "all" || searchQuery !== "") && (
            <button
              onClick={handleResetFilters}
              className="text-brand-gold hover:text-brand-goldLight flex items-center gap-1 underline underline-offset-4"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t.resetFilter}</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Grid: 1-2 cols mobile, 3 tablet, 4 desktop */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={(prod) => setActiveProduct(prod)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center rounded-3xl bg-brand-surface border border-brand-border/60 p-8 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-brand-goldMuted border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-bold text-xl text-white">
            {t.noProductsFound}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            {language === "gu"
              ? "કૃપા કરીને અલગ કૅટેગરી પસંદ કરો અથવા બીજો શબ્દ શોધો."
              : "Try adjusting your search query or reset category filter to see all items."}
          </p>
          <button
            onClick={handleResetFilters}
            type="button"
            className="touch-target px-5 py-2.5 rounded-xl bg-gold-gradient text-black font-bold text-xs sm:text-sm shadow-gold hover:brightness-110 transition-all"
          >
            {t.resetFilter}
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}

export const ProductsCatalogContent: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-24 text-center text-brand-gold">
          Loading catalog...
        </div>
      }
    >
      <ProductsCatalogInner />
    </Suspense>
  );
};
