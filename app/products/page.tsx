import type { Metadata } from "next";
import { ProductsCatalogContent } from "@/components/pages/ProductsCatalogContent";

export const metadata: Metadata = {
  title: "Products & Fragrances Catalog",
  description: "Browse 10 product categories including pure Attar, imported perfumes, body spray, watches, agarbatti, caps, leather wallets, belts, keychains & jewellery in Idar.",
  openGraph: {
    title: "Product Collection | Sai Attarwala Idar",
    description: "Browse pure attars, perfumes, watches and men's accessories. Direct WhatsApp and phone inquiry available.",
  },
};

export default function ProductsPage() {
  return <ProductsCatalogContent />;
}
