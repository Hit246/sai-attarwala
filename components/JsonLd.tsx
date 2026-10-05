import React from "react";

export const LocalBusinessJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Sai Attarwala & Men's Accessories",
    "image": "https://saiattarwala.com/images/logo.png",
    "@id": "https://saiattarwala.com",
    "url": "https://saiattarwala.com",
    "telephone": "+919898382682",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D-5, Asha Shopping Centre, Laxmi Cinema Road, Shrinagar",
      "addressLocality": "Idar",
      "addressRegion": "Gujarat",
      "postalCode": "383430",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.8343,
      "longitude": 73.0034
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:30"
      }
    ],
    "sameAs": [
      "https://wa.me/919898382682"
    ],
    "description": "Premier shop in Idar for 100% pure alcohol-free Attars, imported luxury perfumes, body sprays, watches, leather belts, wallets, caps & men's accessories."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
