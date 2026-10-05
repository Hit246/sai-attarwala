export interface TranslationDictionary {
  // Brand & Header
  brandName: string;
  brandSub: string;
  tagline: string;
  langToggleText: string;

  // Navigation
  navHome: string;
  navProducts: string;
  navAbout: string;
  navContact: string;
  navCallNow: string;
  navWhatsApp: string;

  // Hero Section
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCtaCall: string;
  heroCtaWhatsApp: string;
  heroCtaProducts: string;

  // Quick Stats / Highlights
  statProducts: string;
  statProductsSub: string;
  statQuality: string;
  statQualitySub: string;
  statPrices: string;
  statPricesSub: string;
  statLocation: string;
  statLocationSub: string;

  // Why Choose Us
  whyTitle: string;
  whySubtitle: string;
  why1Title: string;
  why1Desc: string;
  why2Title: string;
  why2Desc: string;
  why3Title: string;
  why3Desc: string;
  why4Title: string;
  why4Desc: string;

  // Featured Products
  featuredTitle: string;
  featuredSubtitle: string;
  viewAllProducts: string;

  // Category Cards (Homepage)
  categoriesTitle: string;
  categoriesSubtitle: string;
  viewCategoryProducts: string;

  // Product Catalog Page
  catalogTitle: string;
  catalogSubtitle: string;
  searchPlaceholder: string;
  filterAll: string;
  noProductsFound: string;
  resetFilter: string;
  askForPrice: string;
  enquireWhatsApp: string;
  viewDetails: string;
  inStockBadge: string;
  pricePrefix: string;
  productCountText: string;

  // Product Modal
  modalCategory: string;
  modalDescription: string;
  modalClose: string;
  modalOrderNote: string;
  modalDirectCall: string;

  // About Page
  aboutTitle: string;
  aboutSubtitle: string;
  aboutStoryTitle: string;
  aboutStoryBody: string;
  aboutValuesTitle: string;
  aboutValue1Title: string;
  aboutValue1Desc: string;
  aboutValue2Title: string;
  aboutValue2Desc: string;
  aboutValue3Title: string;
  aboutValue3Desc: string;
  aboutVisitBannerTitle: string;
  aboutVisitBannerDesc: string;

  // Contact Page
  contactTitle: string;
  contactSubtitle: string;
  shopAddressTitle: string;
  shopAddress: string;
  shopPhoneTitle: string;
  shopPhone: string;
  shopWhatsAppTitle: string;
  shopWhatsApp: string;
  shopTimingsTitle: string;
  shopTimings: string;
  getDirections: string;
  contactBannerTitle: string;
  contactBannerDesc: string;
  directVisitNote: string;

  // Footer
  footerAbout: string;
  quickLinks: string;
  shopTimingsHeader: string;
  allRightsReserved: string;
  developedForLocal: string;
  socialLinksTitle: string;

  // WhatsApp Default Message Template
  waGeneralMsg: string;
  waProductMsgPrefix: string;

  // 404 Page
  notFoundTitle: string;
  notFoundSubtitle: string;
  notFoundDesc: string;
  backToHome: string;
}

export const TRANSLATIONS: Record<'en' | 'gu', TranslationDictionary> = {
  en: {
    // Brand & Header
    brandName: "Sai Attarwala",
    brandSub: "& Men's Accessories",
    tagline: "Premium Quality Attar, Perfumes & Men's Accessories",
    langToggleText: "ગુજરાતી",

    // Nav
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About Us",
    navContact: "Contact Us",
    navCallNow: "Call Now",
    navWhatsApp: "WhatsApp Us",

    // Hero Section
    heroBadge: "Welcome to Sai Attarwala & Men's Accessories, Idar",
    heroTitle: "Elegance, Fragrance & Style",
    heroTitleHighlight: "Crafted for You",
    heroDesc: "Discover Idar's premier destination for 100% pure alcohol-free Attars, imported luxury perfumes, long-lasting body sprays, stylish watches, pure leather belts, wallets, caps & imitation jewellery.",
    heroCtaCall: "Call Now",
    heroCtaWhatsApp: "Enquire on WhatsApp",
    heroCtaProducts: "Explore Products",

    // Quick Stats / Highlights
    statProducts: "10+ Categories",
    statProductsSub: "Over 100+ Variety",
    statQuality: "100% Pure & Authentic",
    statQualitySub: "Alcohol-free options",
    statPrices: "Fair & Honest Prices",
    statPricesSub: "Best local rates",
    statLocation: "Laxmi Cinema Road",
    statLocationSub: "Asha Shopping Centre, Idar",

    // Why Choose Us
    whyTitle: "Why Choose Sai Attarwala?",
    whySubtitle: "Your trusted destination for premium fragrances & men's fashion essentials in Idar",
    why1Title: "100% Pure & Long Lasting",
    why1Desc: "Traditional non-alcoholic attars and authentic imported perfumes with rich sillage that lasts all day.",
    why2Title: "Wide Collection for Men",
    why2Desc: "From luxury watches and leather belts to wallets, caps, keychains, agarbatti, and jewellery under one roof.",
    why3Title: "Fair & Transparent Pricing",
    why3Desc: "Get premium luxury products at reasonable, pocket-friendly prices with complete peace of mind.",
    why4Title: "Warm Local Service",
    why4Desc: "Visit our shop at Asha Shopping Centre, Idar for personalized fragrance sampling and friendly advice.",

    // Featured Products
    featuredTitle: "Featured & Popular Products",
    featuredSubtitle: "Handpicked top selections loved by our customers in Idar",
    viewAllProducts: "View All 10 Categories",

    // Category Cards (Homepage)
    categoriesTitle: "Explore Our Product Categories",
    categoriesSubtitle: "Click on any category to view available items and enquire directly",
    viewCategoryProducts: "Browse Category",

    // Product Catalog Page
    catalogTitle: "Our Complete Product Collection",
    catalogSubtitle: "Browse products by category or search by name. Call or WhatsApp us to check availability, size, or place an enquiry!",
    searchPlaceholder: "Search products (e.g. Oudh, Belt, Watch, Agarbatti)...",
    filterAll: "All Categories",
    noProductsFound: "No products matched your search or filter.",
    resetFilter: "Reset All Filters",
    askForPrice: "Ask for Price",
    enquireWhatsApp: "Enquire on WhatsApp",
    viewDetails: "View Details",
    inStockBadge: "Available in Shop",
    pricePrefix: "Price:",
    productCountText: "products shown",

    // Product Modal
    modalCategory: "Category",
    modalDescription: "Product Details",
    modalClose: "Close",
    modalOrderNote: "Visit our shop in Idar or message us on WhatsApp for instant confirmation and pricing.",
    modalDirectCall: "Call Shop (+91 9898382682)",

    // About Page
    aboutTitle: "About Sai Attarwala & Men's Accessories",
    aboutSubtitle: "Serving Idar and surrounding areas with passion, authenticity, and refined style.",
    aboutStoryTitle: "Our Shop Story",
    aboutStoryBody: "Sai Attarwala & Men's Accessories was founded in Idar with a vision to bring pure, long-lasting attars, exquisite imported perfumes, and top-tier men's accessories to our community. Located conveniently at D-5 Asha Shopping Centre, Laxmi Cinema Road, Srinagar, Idar, we take pride in offering authentic products, friendly guidance, and fair pricing to all our customers. Whether you are searching for a signature daily fragrance, an Islamic prayer attar, or high quality accessories like leather belts, wallets, and watches, we welcome you to experience our collection firsthand.",
    aboutValuesTitle: "Our Quality Promise",
    aboutValue1Title: "Uncompromising Purity",
    aboutValue1Desc: "Every bottle of attar and perfume is curated to deliver genuine fragrance notes and long-lasting aroma without harsh additives.",
    aboutValue2Title: "Customer First Service",
    aboutValue2Desc: "Whether you need a daily deodorant or a special gift for a wedding, we help you select the ideal product with care.",
    aboutValue3Title: "Trusted Local Business",
    aboutValue3Desc: "Proudly serving our neighbors across Idar, Himatnagar, Khedbrahma, Vadali, and the entire Sabarkantha district.",
    aboutVisitBannerTitle: "Visit Us in Idar Today",
    aboutVisitBannerDesc: "We invite you to experience the fragrances in person at our shop in Asha Shopping Centre, Laxmi Cinema Road.",

    // Contact Page
    contactTitle: "Contact Us & Shop Location",
    contactSubtitle: "We are always delighted to welcome you to our shop or answer your calls and WhatsApp messages.",
    shopAddressTitle: "Shop Address",
    shopAddress: "D-5, Asha Shopping Centre, Laxmi Cinema Road, Shrinagar, Idar, Gujarat - 383430",
    shopPhoneTitle: "Call Us Directly",
    shopPhone: "+91 9898382682",
    shopWhatsAppTitle: "WhatsApp Enquiries",
    shopWhatsApp: "+91 9898382682",
    shopTimingsTitle: "Shop Timings",
    shopTimings: "9:00 AM to 7:30 PM (Monday to Sunday)",
    getDirections: "Get Directions on Google Maps",
    contactBannerTitle: "Have Questions or Looking for a Specific Product?",
    contactBannerDesc: "Call or send us a message on WhatsApp right now. We reply quickly and help you find exactly what you need.",
    directVisitNote: "Walk-ins are always welcome! Experience and test our attars and perfumes in person before you buy.",

    // Footer
    footerAbout: "Sai Attarwala & Men's Accessories is your premier local shop in Idar for 100% pure Attar, Imported Perfumes, Body Sprays, Watches, Leather Belts, Wallets & Jewellery.",
    quickLinks: "Quick Navigation",
    shopTimingsHeader: "Opening Hours",
    allRightsReserved: "All Rights Reserved. Sai Attarwala & Men's Accessories, Idar.",
    developedForLocal: "Local Shop Showcase | Idar, Sabarkantha, Gujarat",
    socialLinksTitle: "Connect With Us",

    // WhatsApp Default Message Template
    waGeneralMsg: "Hi Sai Attarwala, I want to inquire about products in your shop.",
    waProductMsgPrefix: "Hi Sai Attarwala, I am interested in:",

    // 404 Page
    notFoundTitle: "404 - Page Not Found",
    notFoundSubtitle: "The page you are looking for does not exist.",
    notFoundDesc: "It seems the link is broken or the page has been moved. Explore our latest collection or return to the homepage.",
    backToHome: "Back to Home",
  },
  gu: {
    // Brand & Header
    brandName: "સાંઈ અત્તરવાલા",
    brandSub: "& મેન્સ એક્સેસરીઝ",
    tagline: "પ્રીમિયમ ક્વોલિટી અત્તર, પરફ્યુમ્સ & મેન્સ એક્સેસરીઝ",
    langToggleText: "English",

    // Nav
    navHome: "હોમ",
    navProducts: "વસ્તુઓ (પ્રોડક્ટ્સ)",
    navAbout: "અમારા વિશે",
    navContact: "સંપર્ક કરો",
    navCallNow: "કોલ કરો",
    navWhatsApp: "વોટ્સએપ કરો",

    // Hero Section
    heroBadge: "સાંઈ અત્તરવાલા & મેન્સ એક્સેસરીઝ, ઈડરમાં આપનું સ્વાગત છે",
    heroTitle: "સુગંધ, સુંદરતા અને રોયલ લુક",
    heroTitleHighlight: "તમારા માટે ખાસ",
    heroDesc: "ઈડરનું સૌથી લોકપ્રિય સ્થળ! ૧૦૦% શુદ્ધ આલ્કોહોલ મુક્ત અત્તર, ઈમ્પોર્ટેડ લક્ઝરી પરફ્યુમ, બોડી સ્પ્રે, રોયલ વોચ, શુદ્ધ લેધર બેલ્ટ, વોલેટ, કેપ, કીચેન અને મેન્સ ફેશન એક્સેસરીઝનું વિશાળ કલેક્શન.",
    heroCtaCall: "કોલ કરો",
    heroCtaWhatsApp: "વોટ્સએપ પર વાત કરો",
    heroCtaProducts: "બધી વસ્તુઓ જુઓ",

    // Quick Stats / Highlights
    statProducts: "૧૦+ કૅટેગરીઝ",
    statProductsSub: "૧૦૦+ વિવિધ પ્રકારો",
    statQuality: "૧૦૦% શુદ્ધ અને ઓરિજિનલ",
    statQualitySub: "આલ્કોહોલ મુક્ત અત્તર",
    statPrices: "વ્યાજબી અને યોગ્ય ભાવ",
    statPricesSub: "શ્રેષ્ઠ સ્થાનિક દર",
    statLocation: "લક્ષ્મી સિનેમા રોડ",
    statLocationSub: "આશા શોપિંગ સેન્ટર, ઈડર",

    // Why Choose Us
    whyTitle: "શા માટે સાંઈ અત્તરવાલા ની પસંદગી કરવી?",
    whySubtitle: "ઈડરમાં પ્રીમિયમ સુગંધ અને પુરુષો માટેની એક્સેસરીઝ માટે તમારું ભરોસાપાત્ર સ્થળ",
    why1Title: "૧૦૦% શુદ્ધ અને લાંબો સમય ટકતી સુગંધ",
    why1Desc: "કુદરતી અર્કોમાંથી બનાવેલ આલ્કોહોલ-મુક્ત અત્તર અને ઉત્કૃષ્ટ ઈમ્પોર્ટેડ પરફ્યુમ્સ જે આખો દિવસ સુગંધિત રાખે છે.",
    why2Title: "મેન્સ એક્સેસરીઝનું વિશાળ કલેક્શન",
    why2Desc: "વોચ, લેધર બેલ્ટ, વોલેટ, કેપ, કીચેન, અગરબત્તી અને ઈમિટેશન જવેલરી બધું જ એક જ છત નીચે ઉપલબ્ધ.",
    why3Title: "વ્યાજબી અને યોગ્ય ભાવ",
    why3Desc: "ઉચ્ચ ગુણવત્તા વાળી સુગંધ અને રોયલ એક્સેસરીઝ એકદમ વ્યાજબી કિંમતે અને ગ્રાહક સંતોષ સાથે મેળવો.",
    why4Title: "ઈડરમાં સરળતાથી ઉપલબ્ધ & મૈત્રીપૂર્ણ સેવા",
    why4Desc: "આશા શોપિંગ સેન્ટર, લક્ષ્મી સિનેમા રોડ, ઈડર ખાતે રૂબરૂ પધારો અને તમારી મનપસંદ સુગંધ રૂબરૂ પસંદ કરો.",

    // Featured Products
    featuredTitle: "અમારી ખાસ અને લોકપ્રિય વસ્તુઓ",
    featuredSubtitle: "ગ્રાહકોની સૌથી વધુ પસંદગી પામેલી અને વખણાયેલી વસ્તુઓ",
    viewAllProducts: "બધી ૧૦ કૅટેગરી જુઓ",

    // Category Cards (Homepage)
    categoriesTitle: "અમારી પ્રોડક્ટ કૅટેગરીઝ",
    categoriesSubtitle: "વસ્તુઓ જોવા અને માહિતી મેળવવા માટે કોઈ પણ કૅટેગરી પર ક્લિક કરો",
    viewCategoryProducts: "કૅટેગરી જુઓ",

    // Product Catalog Page
    catalogTitle: "અમારું સંપૂર્ણ પ્રોડક્ટ કલેક્શન",
    catalogSubtitle: "કૅટેગરી મુજબ વસ્તુઓ જુઓ અથવા નામ ટાઈપ કરીને શોધો. કિંમત કે ઉપલબ્ધતા જાણવા માટે ડાયરેક્ટ કોલ અથવા વોટ્સએપ કરો!",
    searchPlaceholder: "શોધો (દા.ત. અત્તર, બેલ્ટ, વોચ, અગરબત્તી, પરફ્યુમ)...",
    filterAll: "બધી કૅટેગરી",
    noProductsFound: "તમારી શોધ મુજબ કોઈ પ્રોડક્ટ મળી નથી.",
    resetFilter: "ફિલ્ટર રીસેટ કરો",
    askForPrice: "ભાવ જાણવા સંપર્ક કરો",
    enquireWhatsApp: "વોટ્સએપ પર પૂછપરછ કરો",
    viewDetails: "વિગત જુઓ",
    inStockBadge: "દુકાનમાં ઉપલબ્ધ",
    pricePrefix: "કિંમત:",
    productCountText: "પ્રોડક્ટ્સ ઉપલબ્ધ",

    // Product Modal
    modalCategory: "કૅટેગરી",
    modalDescription: "પ્રોડક્ટની વિગતો",
    modalClose: "બંધ કરો",
    modalOrderNote: "દુકાન પર રૂબરૂ પધારો અથવા તુરંત ભાવ અને માહિતી મેળવવા વોટ્સએપ પર મેસેજ કરો.",
    modalDirectCall: "દુકાને કોલ કરો (+91 9898382682)",

    // About Page
    aboutTitle: "સાંઈ અત્તરવાલા & મેન્સ એક્સેસરીઝ વિશે",
    aboutSubtitle: "ઈડર અને સમગ્ર સાબરકાંઠા વિસ્તારમાં ગુણવત્તા, શુદ્ધતા અને સ્ટાઈલ સાથે વિશ્વસનીય સેવા.",
    aboutStoryTitle: "અમારી દુકાનનો પરિચય",
    aboutStoryBody: "સાંઈ અત્તરવાલા & મેન્સ એક્સેસરીઝ ની સ્થાપના ઈડરમાં શુદ્ધ અત્તર, ઉત્કૃષ્ટ પરફ્યુમ્સ અને પુરુષો માટે ફેશનેબલ એક્સેસરીઝ એક જ સ્થળે પૂરી પાડવાના હેતુથી કરવામાં આવી છે. ડી-૫ આશા શોપિંગ સેન્ટર, લક્ષ્મી સિનેમા રોડ, શ્રીનગર, ઈડર ખાતે આવેલી અમારી દુકાનમાં ગ્રાહકોને ઉત્તમ ગુણવત્તા, વાજબી ભાવ અને નમ્ર વ્યવહારનો અનુભવ મળે છે. રોજિંદા વપરાશ માટેની સુગંધ હોય કે ખાસ શુભ પ્રસંગો માટે પરફ્યુમ કે લેધર આઈટમ્સ - અમે આપનું હાર્દિક સ્વાગત કરીએ છીએ.",
    aboutValuesTitle: "અમારું ગુણવત્તાનું વચન",
    aboutValue1Title: "શ્રેષ્ઠ અને શુદ્ધ ગુણવત્તા",
    aboutValue1Desc: "અમે દરેક અત્તર અને પરફ્યુમની શુદ્ધતા, સુગંધ અને ટકઉપણામાં ક્યારેય બાંધછોડ કરતા નથી.",
    aboutValue2Title: "ગ્રાહક સંતોષ પ્રથમ",
    aboutValue2Desc: "તમારી પસંદગી અને જરૂરિયાત મુજબ યોગ્ય વસ્તુ પસંદ કરવામાં અમે સંપૂર્ણ માર્ગદર્શન અને સહકાર આપીએ છીએ.",
    aboutValue3Title: "સ્થાનિક વિસ્તારનો વિશ્વાસ",
    aboutValue3Desc: "ઈડર, હિંમતનગર, ખેડબ્રહ્મા, વડાલી અને સમગ્ર સાબરકાંઠા વિસ્તારના લોકોનો અતૂટ ભરોસો.",
    aboutVisitBannerTitle: "આજે જ ઈડર ખાતે અમારી દુકાને પધારો",
    aboutVisitBannerDesc: "આશા શોપિંગ સેન્ટર, લક્ષ્મી સિનેમા રોડ ખાતે રૂબરૂ આવીને સુગંધનો અનુભવ કરો.",

    // Contact Page
    contactTitle: "અમારું સરનામું અને સંપર્ક",
    contactSubtitle: "દુકાને રૂબરૂ પધારો અથવા કોલ અને વોટ્સએપ દ્વારા સંપર્ક કરો. અમે આપના સ્વાગત માટે હંમેશા તૈયાર છીએ.",
    shopAddressTitle: "દુકાનનું સરનામું",
    shopAddress: "ડી-૫, આશા શોપિંગ સેન્ટર, લક્ષ્મી સિનેમા રોડ, શ્રીનગર, ઈડર, ગુજરાત - ૩૮૩૪૩૦",
    shopPhoneTitle: "ફોન નંબર / ડાયરેક્ટ કોલ કરો",
    shopPhone: "+91 9898382682",
    shopWhatsAppTitle: "વોટ્સએપ સંપર્ક & પૂછપરછ",
    shopWhatsApp: "+91 9898382682",
    shopTimingsTitle: "દુકાન ખુલવાનો સમય",
    shopTimings: "સવારે ૯:૦૦ થી રાત્રે ૭:૩૦ (સોમવાર થી રવિવાર)",
    getDirections: "ગુગલ મેપ પર રસ્તો જુઓ",
    contactBannerTitle: "કોઈ પ્રોડક્ટ વિશે પૂછવું છે કે દુકાન પર આવવું છે?",
    contactBannerDesc: "અત્યારે જ કોલ કરો અથવા વોટ્સએપ પર મેસેજ કરો. અમે તમને તુરંત ઉત્તર અને જરૂરી માહિતી આપીશું.",
    directVisitNote: "રૂબરૂ મુલાકાત આવકાર્ય છે! ખરીદતા પહેલા અત્તર અને પરફ્યુમની સુગંધ જાતે ચકાસી શકો છો.",

    // Footer
    footerAbout: "સાંઈ અત્તરવાલા & મેન્સ એક્સેસરીઝ - ઈડરમાં ૧૦૦% શુદ્ધ અત્તર, ઈમ્પોર્ટેડ પરફ્યુમ, બોડી સ્પ્રે, વોચ, લેધર બેલ્ટ, વોલેટ અને કીચેન માટેનું અગ્રણી સ્થળ.",
    quickLinks: "ઝડપી લિંક્સ",
    shopTimingsHeader: "દુકાનનો સમય",
    allRightsReserved: "સર્વાધિકાર સુરક્ષિત. સાંઈ અત્તરવાલા & મેન્સ એક્સેસરીઝ, ઈડર.",
    developedForLocal: "સ્થાનિક દુકાન પ્રદર્શન | ઈડર, સાબરકાંઠા, ગુજરાત",
    socialLinksTitle: "અમારી સાથે જોડાઓ",

    // WhatsApp Default Message Template
    waGeneralMsg: "નમસ્તે સાંઈ અત્તરવાલા, મારે આપની દુકાનની પ્રોડક્ટ્સ વિશે પૂછપરછ કરવી છે.",
    waProductMsgPrefix: "નમસ્તે સાંઈ અત્તરવાલા, મને આ પ્રોડક્ટમાં રસ છે:",

    // 404 Page
    notFoundTitle: "૪૦૪ - પેજ મળ્યું નથી",
    notFoundSubtitle: "તમે શોધી રહ્યા છો તે પેજ ઉપલબ્ધ નથી.",
    notFoundDesc: "લિંક બદલાઈ ગઈ હોઈ શકે છે. અમારું કલેક્શન જોવા હોમ પેજ પર પાછા જાઓ.",
    backToHome: "હોમ પેજ પર જાઓ",
  }
};
