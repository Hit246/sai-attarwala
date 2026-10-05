import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://saiattarwala.com"),
  title: {
    default: "Sai Attarwala & Men's Accessories | Pure Attar, Perfumes & Men's Store in Idar",
    template: "%s | Sai Attarwala & Men's Accessories Idar",
  },
  description: "Sai Attarwala & Men's Accessories in Idar, Gujarat. Best local shop for 100% pure alcohol-free Attar, imported perfumes, body spray, watches, leather belts, wallets, caps & imitation jewellery. Visit D-5 Asha Shopping Centre or call +91 9898382682.",
  keywords: [
    "attar shop in Idar",
    "perfume shop Idar",
    "men's accessories Idar",
    "Sai Attarwala",
    "Sai Attarwala Idar",
    "pure oudh attar Idar",
    "imported perfumes Gujarat",
    "leather belts wallets Idar",
    "Asha Shopping Centre Idar",
    "Laxmi Cinema Road Idar",
    "સાંઈ અત્તરવાલા ઈડર",
    "અત્તર ની દુકાન ઈડર",
  ],
  authors: [{ name: "Sai Attarwala" }],
  creator: "Sai Attarwala",
  openGraph: {
    type: "website",
    locale: "gu_IN",
    alternateLocale: ["en_IN"],
    url: "https://saiattarwala.com",
    title: "Sai Attarwala & Men's Accessories | Pure Attar & Men's Collection in Idar",
    description: "Discover Idar's finest 100% pure alcohol-free Attars, imported luxury perfumes, watches, pure leather belts & men's accessories. Call or WhatsApp +91 9898382682.",
    siteName: "Sai Attarwala",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Sai Attarwala & Men's Accessories Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Attarwala & Men's Accessories Idar",
    description: "Premium Attar, Luxury Perfumes & Men's Accessories in Idar, Gujarat.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+Gujarati:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessJsonLd />
      </head>
      <body className="bg-[#09090b] text-[#f4f4f6] min-h-screen flex flex-col antialiased selection:bg-brand-gold selection:text-black" suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
