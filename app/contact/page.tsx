import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us & Shop Location in Idar",
  description: "Visit Sai Attarwala & Men's Accessories at D-5, Asha Shopping Centre, Laxmi Cinema Road, Idar. Call +91 9898382682 or chat on WhatsApp.",
  openGraph: {
    title: "Contact Sai Attarwala & Men's Accessories | Idar",
    description: "Get shop address, phone number, WhatsApp contact link, shop opening timings, and Google Maps directions.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
