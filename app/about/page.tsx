import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Our Story & Promise",
  description: "Learn more about Sai Attarwala & Men's Accessories located at Asha Shopping Centre, Laxmi Cinema Road, Idar, Gujarat. Our passion for pure fragrances and customer trust.",
  openGraph: {
    title: "About Sai Attarwala & Men's Accessories Idar",
    description: "Our shop story, quality promise, and dedication to offering pure attars and authentic men's accessories in Idar.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
