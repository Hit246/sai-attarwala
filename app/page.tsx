import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Sai Attarwala & Men's Accessories | Pure Attar, Perfumes & Men's Store in Idar",
  description: "Explore 100% pure alcohol-free Attar, imported perfumes, body spray, watches, leather belts, wallets, caps & imitation jewellery in Idar, Gujarat. Call or WhatsApp +91 9898382682.",
  openGraph: {
    title: "Sai Attarwala & Men's Accessories Idar",
    description: "Discover Idar's finest collection of pure Attars, imported luxury perfumes, and men's accessories. Visit Asha Shopping Centre, Laxmi Cinema Road, Idar.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
