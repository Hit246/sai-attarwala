/**
 * Sai Attarwala & Men's Accessories - Main Application Logic
 * Handles Language switching (EN/GU), Product Filtering, Search, WhatsApp Link Generation, and Mobile Menu
 */

// Global State
let currentLang = localStorage.getItem('sai_attarwala_lang') || 'en';
let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Language
  setLanguage(currentLang);

  // Setup Event Listeners
  setupLanguageToggle();
  setupMobileMenu();
  
  // Page Specific Inits
  if (document.getElementById('products-grid')) {
    initCatalogPage();
  }
  if (document.getElementById('featured-products-grid')) {
    initHomePage();
  }
});

/**
 * Set and Apply Language across the site
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sai_attarwala_lang', lang);

  // Update Body Class for Font Switch
  if (lang === 'gu') {
    document.body.classList.add('lang-gu');
  } else {
    document.body.classList.remove('lang-gu');
  }

  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      // Check if tag is input or placeholder
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      } else {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    }
  });

  // Re-render Products Grid if present
  if (document.getElementById('products-grid')) {
    renderProducts();
    renderCategoryPills();
  }
  if (document.getElementById('featured-products-grid')) {
    renderFeaturedProducts();
    renderHomePageCategories();
  }

  // Update language toggle button label
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    const targetLang = lang === 'en' ? 'gu' : 'en';
    btn.innerHTML = `<span class="text-xs font-semibold px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mr-1">${lang.toUpperCase()}</span> ${TRANSLATIONS[lang].langToggleText}`;
  });
}

/**
 * Setup Language Toggle Event Listeners
 */
function setupLanguageToggle() {
  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = currentLang === 'en' ? 'gu' : 'en';
      setLanguage(newLang);
    });
  });
}

/**
 * Setup Mobile Navigation Drawer
 */
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const menuClose = document.getElementById('mobile-menu-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });
  }
  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
  }
}

/**
 * Render Homepage Category Grid
 */
function renderHomePageCategories() {
  const container = document.getElementById('home-categories-grid');
  if (!container) return;

  const isGu = currentLang === 'gu';
  const categoriesToDisplay = CATEGORIES_DATA.filter(c => c.id !== 'all');

  container.innerHTML = categoriesToDisplay.map(cat => {
    const catName = isGu ? cat.nameGujarati : cat.name;
    return `
      <a href="products.html?category=${cat.id}" class="glass-card rounded-2xl p-5 text-center group cursor-pointer hover:border-yellow-500/70 transition">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-900/40 border border-yellow-500/40 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
          ${cat.icon}
        </div>
        <h3 class="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">${cat.name}</h3>
        <p class="text-xs text-yellow-500/80 mt-1">${cat.nameGujarati}</p>
      </a>
    `;
  }).join('');
}

/**
 * Render Homepage Featured Products Grid
 */
function renderFeaturedProducts() {
  const container = document.getElementById('featured-products-grid');
  if (!container) return;

  const featured = PRODUCTS_DATA.filter(p => p.featured).slice(0, 6);
  container.innerHTML = featured.map(product => createProductCardHTML(product)).join('');
}

/**
 * Catalog Page Initialization
 */
function initCatalogPage() {
  // Check URL parameters for category selection
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    activeCategory = catParam;
  }

  // Setup Search Input Event
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  renderCategoryPills();
  renderProducts();
}

/**
 * Render Category Filter Pills on Catalog Page
 */
function renderCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  const isGu = currentLang === 'gu';

  container.innerHTML = CATEGORIES_DATA.map(cat => {
    const isActive = activeCategory === cat.id;
    const catName = isGu ? cat.nameGujarati : cat.name;
    
    return `
      <button 
        onclick="selectCategory('${cat.id}')"
        class="category-pill whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-medium border flex items-center gap-2 transition ${
          isActive 
            ? 'active' 
            : 'bg-stone-900/80 text-gray-300 border-yellow-500/20 hover:border-yellow-500/50 hover:text-white'
        }"
      >
        <span>${cat.icon}</span>
        <span>${catName}</span>
      </button>
    `;
  }).join('');
}

/**
 * Category Selection Handler
 */
function selectCategory(catId) {
  activeCategory = catId;
  renderCategoryPills();
  renderProducts();
}

/**
 * Render Filtered & Searched Products on Products Page
 */
function renderProducts() {
  const container = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  if (!container) return;

  const isGu = currentLang === 'gu';

  let filtered = PRODUCTS_DATA.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const nameMatch = p.name.toLowerCase().includes(searchQuery) || p.nameGujarati.includes(searchQuery);
    const descMatch = p.description.toLowerCase().includes(searchQuery) || p.descriptionGujarati.includes(searchQuery);
    const catMatch = p.categoryName.toLowerCase().includes(searchQuery) || p.categoryNameGujarati.includes(searchQuery);

    return matchesCategory && (nameMatch || descMatch || catMatch);
  });

  if (countEl) {
    countEl.innerText = `${filtered.length} ${isGu ? 'પ્રોડક્ટ્સ ઉપલબ્ધ' : 'Products Available'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 px-4 rounded-2xl glass-card border border-yellow-500/20">
        <div class="text-5xl mb-4">🔍</div>
        <h3 class="text-xl font-bold text-white mb-2">${TRANSLATIONS[currentLang].noProductsFound}</h3>
        <p class="text-gray-400 text-sm mb-6">${isGu ? 'કૃપા કરીને અન્ય નામ ટાઈપ કરો અથવા બધી કૅટેગરી જુઓ.' : 'Try changing your search query or reset category filter.'}</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 rounded-xl gold-bg-gradient text-stone-950 font-bold text-sm hover:scale-105 transition">
          ${TRANSLATIONS[currentLang].resetFilter}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => createProductCardHTML(product)).join('');
}

/**
 * Reset Filter Action
 */
function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('product-search');
  if (searchInput) searchInput.value = '';
  renderCategoryPills();
  renderProducts();
}

/**
 * Create Single Product Card HTML Component
 */
function createProductCardHTML(product) {
  const isGu = currentLang === 'gu';
  const name = isGu ? product.nameGujarati : product.name;
  const categoryName = isGu ? product.categoryNameGujarati : product.categoryName;
  const description = isGu ? product.descriptionGujarati : product.description;
  const priceDisplay = (product.price === 'Ask for price' && isGu) ? 'ભાવ જાણવા સંપર્ક કરો' : product.price;
  const badgeText = isGu ? product.badgeGujarati : product.badge;

  // WhatsApp Message Generator
  const waPrefix = TRANSLATIONS[currentLang].waProductMsgPrefix;
  const encodedMsg = encodeURIComponent(`${waPrefix} "${product.name}" (${product.price}). Please share availability and details.`);
  const waUrl = `https://wa.me/919898382682?text=${encodedMsg}`;

  return `
    <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group h-full">
      <div>
        <!-- Product Image & Badge Header -->
        <div class="relative aspect-square overflow-hidden bg-stone-950/60 p-4 border-b border-yellow-500/20 flex items-center justify-center">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            onerror="this.src='assets/images/placeholders/attar.svg'"
          />
          ${badgeText ? `
            <span class="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-stone-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
              ${badgeText}
            </span>
          ` : ''}
          <span class="absolute top-3 right-3 bg-stone-900/90 text-yellow-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-yellow-500/30">
            ${categoryName}
          </span>
        </div>

        <!-- Product Content Body -->
        <div class="p-5">
          <h3 class="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-1 mb-1">
            ${name}
          </h3>
          <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
            ${description}
          </p>
        </div>
      </div>

      <!-- Product Footer & CTA Buttons -->
      <div class="p-5 pt-0 mt-auto">
        <div class="flex items-center justify-between mb-4 border-t border-yellow-500/10 pt-3">
          <span class="text-xs text-gray-400 uppercase tracking-wider">${isGu ? 'કિંમત' : 'Price'}:</span>
          <span class="text-lg font-extrabold gold-text-gradient">${priceDisplay}</span>
        </div>

        <a 
          href="${waUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-md hover:shadow-emerald-900/40"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2c-5.516 0-9.993 4.477-9.993 9.993 0 1.763.459 3.479 1.33 4.996l-1.417 5.176 5.297-1.389c1.474.804 3.136 1.226 4.783 1.226 5.516 0 9.993-4.477 9.993-9.993s-4.477-9.993-9.993-9.993zm5.728 14.168c-.237.669-1.382 1.278-1.916 1.342-.534.064-1.222.091-3.528-.857-2.952-1.213-4.839-4.225-4.987-4.423-.148-.198-1.206-1.606-1.206-3.063 0-1.457.761-2.176 1.033-2.464.272-.288.594-.36.792-.36.198 0 .396.002.569.011.184.01.433-.07.677.514.247.593.841 2.052.915 2.201.074.148.124.321.025.519-.099.198-.148.321-.297.495-.148.173-.312.387-.446.519-.148.148-.302.309-.129.606.173.297.771 1.273 1.656 2.062 1.139 1.015 2.1 1.328 2.397 1.476.297.148.47.124.643-.074.173-.198.742-.866.94-1.163.198-.297.396-.247.668-.148.272.099 1.731.816 2.028.965.297.148.495.223.569.346.074.124.074.717-.163 1.386z"/>
          </svg>
          <span>${TRANSLATIONS[currentLang].enquireWhatsApp}</span>
        </a>
      </div>
    </div>
  `;
}
