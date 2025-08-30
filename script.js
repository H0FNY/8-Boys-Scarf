const products = [
  {
    id: 1,
    name: "Shiny Dress",
    category: "Dubetta Digital",
    image: "assets/Scarfs/DD/DD (1).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.5,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["S", "M", "L", "XL"],
    colors: ["blue", "purple"],
    tags: ["Woman", "Dress", "Elegant"],
    isNew: true,
    onSale: false
  },
  {
    id: 2,
    name: "Shiny Dress",
    category: "Dubetta Digital",
    image: "assets/Scarfs/DD/DD (2).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.3,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["XS", "S", "M", "L"],
    colors: ["red", "pink"],
    tags: ["Woman", "Dress", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 3,
    name: "Shiny Dress",
    category: "Dubetta Digital",
    image: "assets/Scarfs/DD/DD (3).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.7,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["S", "M", "L"],
    colors: ["green", "yellow"],
    tags: ["Woman", "Dress", "Elegant"],
    isNew: true,
    onSale: false
  },
  {
    id: 4,
    name: "Shiny Dress",
    category: "Dubetta Digital",
    image: "assets/Scarfs/DD/DD (4).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.6,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["M", "L", "XL"],
    colors: ["blue", "white"],
    tags: ["Woman", "Dress", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 5,
    name: "Shiny Dress",
    category: "Dubetta Digital",
    image: "assets/Scarfs/DD/DD (5).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.4,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["orange", "red"],
    tags: ["Woman", "Dress", "Elegant"],
    isNew: false,
    onSale: false
  },
  {
    id: 6,
    name: "Shiny Dress",
    category: "Dubetta Digital",
    image: "assets/Scarfs/DD/DD (6).jpg",
    price: 95.50,
    originalPrice: 110.00,
    reviews: 41,
    rating: 4.8,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["S", "M", "L"],
    colors: ["purple", "blue"],
    tags: ["Woman", "Dress", "Elegant"],
    isNew: true,
    onSale: true
  },
  {
    id: 7,
    name: "Shiny Dress",
    category: "Dubetta Digital",
    image: "assets/Scarfs/DD/DD (7).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.5,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["M", "L", "XL"],
    colors: ["black", "gray"],
    tags: ["Woman", "Dress", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 8,
    name: "Long Dress",
    category: "Dubetta Satin",
    image: "assets/Scarfs/DS/DS (1).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.6,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["S", "M", "L", "XL"],
    colors: ["pink", "white"],
    tags: ["Woman", "Dress", "Elegant"],
    isNew: false,
    onSale: false
  },
  {
    id: 9,
    name: "Long Dress",
    category: "Dubetta Satin",
    image: "assets/Scarfs/DS/DS (2).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.3,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["XS", "S", "M"],
    colors: ["blue", "purple"],
    tags: ["Woman", "Dress", "Casual"],
    isNew: true,
    onSale: false
  },
  {
    id: 10,
    name: "Long Dress",
    category: "Dubetta Satin",
    image: "assets/Scarfs/DS/DS (3).jpg",
    price: 95.50,
    originalPrice: 120.00,
    reviews: 41,
    rating: 4.7,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["M", "L", "XL"],
    colors: ["red", "orange"],
    tags: ["Woman", "Dress", "Elegant"],
    isNew: false,
    onSale: true
  },
  {
    id: 11,
    name: "Long Dress",
    category: "Dubetta Satin",
    image: "assets/Scarfs/DS/DS (4).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.4,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["S", "M", "L"],
    colors: ["green", "yellow"],
    tags: ["Woman", "Dress", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 12,
    name: "Long Dress",
    category: "Dubetta Satin",
    image: "assets/Scarfs/DS/DS (5).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.5,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["XS", "S", "M", "L"],
    colors: ["purple", "pink"],
    tags: ["Woman", "Dress", "Elegant"],
    isNew: true,
    onSale: false
  },
  {
    id: 13,
    name: "Full Sweater",
    category: "Malaysian",
    image: "assets/Scarfs/M/m (1).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.2,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "gray"],
    tags: ["Woman", "Sweater", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 14,
    name: "Full Sweater",
    category: "Malaysian",
    image: "assets/Scarfs/M/m (2).jpg",
    price: 95.50,
    originalPrice: 110.00,
    reviews: 41,
    rating: 4.6,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["M", "L", "XL"],
    colors: ["blue", "white"],
    tags: ["Woman", "Sweater", "Elegant"],
    isNew: false,
    onSale: true
  },
  {
    id: 15,
    name: "Full Sweater",
    category: "Malaysian",
    image: "assets/Scarfs/M/m (3).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.3,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["XS", "S", "M"],
    colors: ["red", "pink"],
    tags: ["Woman", "Sweater", "Casual"],
    isNew: true,
    onSale: false
  },
  {
    id: 16,
    name: "Full Sweater",
    category: "Malaysian",
    image: "assets/Scarfs/M/m (4).jpg",
    price: 95.50,
    originalPrice: null,
    reviews: 41,
    rating: 4.5,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["S", "M", "L"],
    colors: ["green", "yellow"],
    tags: ["Woman", "Sweater", "Elegant"],
    isNew: false,
    onSale: false
  },
  {
    id: 17,
    name: "Fancy Shawl",
    category: "Kuwaity Gradient",
    image: "assets/Scarfs/KG/KG (1).jpg",
    price: 85.00,
    originalPrice: null,
    reviews: 12,
    rating: 4.4,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["One Size"],
    colors: ["purple", "blue"],
    tags: ["Woman", "Scarf", "Elegant"],
    isNew: false,
    onSale: false
  },
  {
    id: 18,
    name: "Fancy Shawl",
    category: "Kuwaity Gradient",
    image: "assets/Scarfs/KG/KG (2).jpg",
    price: 85.00,
    originalPrice: 100.00,
    reviews: 12,
    rating: 4.7,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["One Size"],
    colors: ["red", "orange"],
    tags: ["Woman", "Scarf", "Casual"],
    isNew: true,
    onSale: true
  },
  {
    id: 19,
    name: "Fancy Shawl",
    category: "Kuwaity Gradient",
    image: "assets/Scarfs/KG/KG (3).jpg",
    price: 85.00,
    originalPrice: null,
    reviews: 12,
    rating: 4.3,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["One Size"],
    colors: ["green", "yellow"],
    tags: ["Woman", "Scarf", "Elegant"],
    isNew: false,
    onSale: false
  },
  {
    id: 20,
    name: "Fancy Shawl",
    category: "Kuwaity Gradient",
    image: "assets/Scarfs/KG/KG (4).jpg",
    price: 85.00,
    originalPrice: null,
    reviews: 12,
    rating: 4.5,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["One Size"],
    colors: ["pink", "purple"],
    tags: ["Woman", "Scarf", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 21,
    name: "Fancy Shawl",
    category: "Kuwaity Gradient",
    image: "assets/Scarfs/KG/KG (5).jpg",
    price: 85.00,
    originalPrice: null,
    reviews: 12,
    rating: 4.6,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["One Size"],
    colors: ["blue", "white"],
    tags: ["Woman", "Scarf", "Elegant"],
    isNew: true,
    onSale: false
  },
  {
    id: 22,
    name: "Fancy Shawl",
    category: "Kuwaity Gradient",
    image: "assets/Scarfs/KG/KG (6).jpg",
    price: 85.00,
    originalPrice: 95.00,
    reviews: 12,
    rating: 4.4,
    stock: "Almost Sold Out",
    stockColor: "text-red-500",
    sizes: ["One Size"],
    colors: ["black", "gray"],
    tags: ["Woman", "Scarf", "Casual"],
    isNew: false,
    onSale: true
  },
  {
    id: 23,
    name: "Classic Wrap",
    category: "Digital Wooden",
    image: "assets/Scarfs/DW/DW (1).jpg",
    price: 70.00,
    originalPrice: null,
    reviews: 9,
    rating: 4.2,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["One Size"],
    colors: ["red", "orange"],
    tags: ["Woman", "Scarf", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 24,
    name: "Classic Wrap",
    category: "Digital Wooden",
    image: "assets/Scarfs/DW/DW (2).jpg",
    price: 70.00,
    originalPrice: 85.00,
    reviews: 9,
    rating: 4.5,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["One Size"],
    colors: ["blue", "purple"],
    tags: ["Woman", "Scarf", "Elegant"],
    isNew: true,
    onSale: true
  },
  {
    id: 25,
    name: "Classic Wrap",
    category: "Digital Wooden",
    image: "assets/Scarfs/DW/DW (3).jpg",
    price: 70.00,
    originalPrice: null,
    reviews: 9,
    rating: 4.3,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["One Size"],
    colors: ["green", "yellow"],
    tags: ["Woman", "Scarf", "Casual"],
    isNew: false,
    onSale: false
  },
  {
    id: 26,
    name: "Classic Wrap",
    category: "Digital Wooden",
    image: "assets/Scarfs/DW/DW (4).jpg",
    price: 70.00,
    originalPrice: null,
    reviews: 9,
    rating: 4.4,
    stock: "In Stock",
    stockColor: "text-green-500",
    sizes: ["One Size"],
    colors: ["pink", "white"],
    tags: ["Woman", "Scarf", "Elegant"],
    isNew: false,
    onSale: false
  }
];

// Category-based product grid functionality
function initCategoryGrid() {
  const productGrid = document.getElementById("productGrid");
  const categoryButtons = document.querySelectorAll("#categoryButtons button");

  if (!productGrid || categoryButtons.length === 0) {
    console.warn("Category grid elements not found");
    return;
  }

  function renderProducts(category) {
    productGrid.innerHTML = "";
    const filtered = products.filter(p => p.category === category);

    filtered.forEach(product => {
      // Star ratings
      const fullStars = Math.floor(product.rating);
      const halfStar = product.rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      let stars = "★".repeat(fullStars);
      if (halfStar) stars += "☆";
      stars += "☆".repeat(emptyStars);

      // Sizes
      const sizeHTML = product.sizes
        ? product.sizes.map(size => `<span class="px-2 py-1 border rounded text-xs">${size}</span>`).join(" ")
        : "";

      // Colors - Fixed color display
      const colorHTML = product.colors
        ? product.colors.map(color => {
            const colorClass = getColorClass(color);
            return `<span class="w-4 h-4 rounded-full border ${colorClass}"></span>`;
          }).join(" ")
        : "";

      // Badge (NEW or SALE)
      let badge = "";
      if (product.isNew) {
        badge = `<span class="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">NEW</span>`;
      } else if (product.onSale) {
        badge = `<span class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">SALE</span>`;
      }

      // Price display
      const priceHTML = `
        <p class="font-bold text-lg">$${product.price.toFixed(2)}</p>
        ${product.originalPrice ? `<p class="text-sm line-through text-gray-400">$${product.originalPrice.toFixed(2)}</p>` : ""}
      `;

      productGrid.innerHTML += `
        <div class="relative bg-white rounded-xl shadow p-4">
          ${badge}
          <img src="${product.image}" alt="${product.name}" class="w-full h-[280px] object-cover rounded-lg">
          
          <div class="mt-4">
            <h3 class="font-semibold text-lg">${product.name}</h3>
            <p class="text-sm text-gray-500">${product.category}</p>

            <div class="flex items-center mt-2 text-yellow-400">${stars}</div>
            <p class="text-sm text-gray-500 mt-1">(${product.reviews.toLocaleString()} reviews)</p>

            <div class="flex items-center mt-3 gap-2">${priceHTML}</div>

            <p class="${product.stockColor} text-sm mt-1">${product.stock}</p>

            <div class="mt-3 flex gap-2">${sizeHTML}</div>
            <div class="mt-2 flex gap-2">${colorHTML}</div>
          </div>
        </div>
      `;
    });
  }

  // Helper function to get proper color classes
  function getColorClass(color) {
    const colorMap = {
      'red': 'bg-red-500',
      'blue': 'bg-blue-500',
      'green': 'bg-green-500',
      'yellow': 'bg-yellow-500',
      'purple': 'bg-purple-500',
      'pink': 'bg-pink-500',
      'orange': 'bg-orange-500',
      'black': 'bg-gray-800',
      'gray': 'bg-gray-500',
      'white': 'bg-white border-gray-300'
    };
    return colorMap[color] || 'bg-gray-400';
  }

  // Default load first category
  const firstCategory = categoryButtons[0]?.getAttribute("data-category") || "Dubetta Digital";
  renderProducts(firstCategory);

  // Handle button clicks
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active style
      categoryButtons.forEach(b => {
        b.classList.remove("bg-black", "text-white");
        b.classList.add("bg-gray-100", "text-gray-600");
      });
      btn.classList.add("bg-black", "text-white");
      btn.classList.remove("bg-gray-100", "text-gray-600");

      // Show products
      const category = btn.getAttribute("data-category");
      renderProducts(category);
    });
  });
}

// Hero slider functionality
function initHeroSlider() {
  const grid = document.getElementById("hero-grid");
  
  if (!grid) {
    console.warn("Hero grid element not found");
    return;
  }

  const slots = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ];

  slots.forEach((slot, i) => {
    slot.className =
      "rounded-2xl bg-gray-100 flex justify-center overflow-hidden h-[40vh] md:h-full relative";
    grid.appendChild(slot);
  });

  // Middle slot custom style
  slots[1].className =
    "flex flex-col items-center justify-between text-center gap-4 overflow-hidden";

  // Divide products into groups
  const leftImages = products.slice(0, 4);
  const middleImages = products.slice(4, 8);
  const rightImages = products.slice(8, 11);

  // Generic smooth auto slider
  function startSlider(images, container, interval = 2500, withContent = false) {
    const track = document.createElement("div");
    track.className = "flex transition-transform duration-700 ease-in-out h-full w-full";
    container.appendChild(track);

    let slides = [];

    if (withContent) {
      images.forEach((img, i) => {
        const slide = document.createElement("div");
        slide.className =
          "flex flex-col items-center justify-between text-center gap-4 w-full flex-shrink-0";

        const topImg = document.createElement("img");
        topImg.src = img.image;
        topImg.className =
          "w-full h-[25vh] md:min-h-[20%] object-cover rounded-2xl";

        const title = document.createElement("div");
        title.innerHTML = `
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">ULTIMATE</h2>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-700">SALE</h1>
          <p class="text-gray-500 uppercase text-xs md:text-sm tracking-wide">New Collection</p>
          <button class="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-xl shadow-lg hover:bg-gray-800">Shop Now</button>
        `;

        const bottomImg = document.createElement("img");
        bottomImg.src = images[(i + 1) % images.length].image;
        bottomImg.className =
          "w-full h-[25vh] md:min-h-[30%] object-cover rounded-2xl";

        slide.appendChild(topImg);
        slide.appendChild(title);
        slide.appendChild(bottomImg);

        slides.push(slide);
      });
    } else {
      slides = images.map(img => {
        const el = document.createElement("img");
        el.src = img.image || img;
        el.className = "w-full h-full object-cover flex-shrink-0";
        return el;
      });
    }

    // Clone first and last slide for smooth infinite effect
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    track.appendChild(lastClone);
    slides.forEach(s => track.appendChild(s));
    track.appendChild(firstClone);

    let index = 1;
    const totalSlides = slides.length;

    // Set initial position
    track.style.transform = `translateX(-${index * 100}%)`;

    function move() {
      index++;
      track.style.transition = "transform 0.7s ease";
      track.style.transform = `translateX(-${index * 100}%)`;

      const handleTransitionEnd = () => {
        if (index === totalSlides + 1) {
          track.style.transition = "none";
          index = 1;
          track.style.transform = `translateX(-${index * 100}%)`;
        }
        track.removeEventListener("transitionend", handleTransitionEnd);
      };

      track.addEventListener("transitionend", handleTransitionEnd);
    }

    setInterval(move, interval);
  }

  // Start sliders
  startSlider(leftImages, slots[0], 4000, false);
  startSlider(middleImages, slots[1], 5000, true);
  startSlider(rightImages, slots[2], 3500, false);
}

// Product filtering and pagination functionality
function initProductFiltering() {
  let currentPage = 1;
  let itemsPerPage = 9;
  let filteredProducts = [...products];
  let currentView = 'grid';

  // DOM elements
  const productsGrid = document.getElementById('productsGrid');
  const totalProductsSpan = document.getElementById('totalProducts');
  const itemsPerPageSelect = document.getElementById('itemsPerPage');
  const sortBySelect = document.getElementById('sortBy');
  const gridViewBtn = document.getElementById('gridView');
  const listViewBtn = document.getElementById('listView');
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  const pageNumbers = document.getElementById('pageNumbers');

  // Check if required elements exist
  if (!productsGrid) {
    console.warn("Products grid element not found");
    return;
  }

  // Helper function to get proper color classes
  function getColorClass(color) {
    const colorMap = {
      'red': 'bg-red-500',
      'blue': 'bg-blue-500',
      'green': 'bg-green-500',
      'yellow': 'bg-yellow-500',
      'purple': 'bg-purple-500',
      'pink': 'bg-pink-500',
      'orange': 'bg-orange-500',
      'black': 'bg-gray-800',
      'gray': 'bg-gray-500',
      'white': 'bg-white border border-gray-300'
    };
    return colorMap[color] || 'bg-gray-400';
  }

  // Event listeners
  function setupEventListeners() {
    // Filter events - with null checks
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        this.classList.toggle('bg-black');
        this.classList.toggle('text-white');
        applyFilters();
      });
    });

    document.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('ring-2', 'ring-offset-2', 'ring-gray-400'));
        this.classList.add('ring-2', 'ring-offset-2', 'ring-gray-400');
        applyFilters();
      });
    });

    document.querySelectorAll('.price-radio').forEach(radio => {
      radio.addEventListener('change', applyFilters);
    });

    document.querySelectorAll('.brand-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
    });

    document.querySelectorAll('.collection-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
    });

    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        this.classList.toggle('bg-black');
        this.classList.toggle('text-white');
        this.classList.toggle('bg-gray-100');
        applyFilters();
      });
    });

    // Sort and pagination events
    if (itemsPerPageSelect) {
      itemsPerPageSelect.addEventListener('change', function () {
        itemsPerPage = parseInt(this.value);
        currentPage = 1;
        renderProducts();
        updatePagination();
      });
    }

    if (sortBySelect) {
      sortBySelect.addEventListener('change', function () {
        sortProducts(this.value);
        renderProducts();
      });
    }

    // View toggle
    if (gridViewBtn) {
      gridViewBtn.addEventListener('click', function () {
        currentView = 'grid';
        this.classList.add('bg-black', 'text-white');
        if (listViewBtn) {
          listViewBtn.classList.remove('bg-black', 'text-white');
        }
        renderProducts();
      });
    }

    if (listViewBtn) {
      listViewBtn.addEventListener('click', function () {
        currentView = 'list';
        this.classList.add('bg-black', 'text-white');
        if (gridViewBtn) {
          gridViewBtn.classList.remove('bg-black', 'text-white');
        }
        renderProducts();
      });
    }

    // Pagination
    if (prevPageBtn) {
      prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderProducts();
          updatePagination();
        }
      });
    }

    if (nextPageBtn) {
      nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          renderProducts();
          updatePagination();
        }
      });
    }
  }

  // Apply filters
  function applyFilters() {
    filteredProducts = products.filter(product => {
      // Size filter
      const selectedSizes = Array.from(document.querySelectorAll('.size-btn.bg-black')).map(btn => btn.dataset.size);
      if (selectedSizes.length > 0 && !selectedSizes.some(size => product.sizes.includes(size))) {
        return false;
      }

      // Color filter
      const selectedColor = document.querySelector('.color-btn.ring-2')?.dataset.color;
      if (selectedColor && !product.colors.includes(selectedColor)) {
        return false;
      }

      // Price filter
      const selectedPriceRange = document.querySelector('.price-radio:checked')?.value;
      if (selectedPriceRange) {
        const [min, max] = selectedPriceRange.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
        if (max && (product.price < min || product.price > max)) {
          return false;
        }
        if (selectedPriceRange.includes('+') && product.price < min) {
          return false;
        }
      }

      // Brand filter
      const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value);
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.category)) {
        return false;
      }

      // Collection filter
      const selectedCollections = Array.from(document.querySelectorAll('.collection-checkbox:checked')).map(cb => cb.value);
      if (selectedCollections.length > 0) {
        if (selectedCollections.includes('New arrivals') && !product.isNew) return false;
        if (selectedCollections.includes('Sale items') && !product.onSale) return false;
      }

      // Tag filter
      const selectedTags = Array.from(document.querySelectorAll('.tag-btn.bg-black')).map(btn => btn.dataset.tag);
      if (selectedTags.length > 0 && !selectedTags.some(tag => product.tags.includes(tag))) {
        return false;
      }

      return true;
    });

    currentPage = 1;
    if (totalProductsSpan) {
      totalProductsSpan.textContent = filteredProducts.length;
    }
    renderProducts();
    updatePagination();
  }

  // Sort products
  function sortProducts(sortBy) {
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
  }

  // Render products
  function renderProducts() {
    if (!productsGrid) return;
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = filteredProducts.slice(start, end);

    if (currentView === 'grid') {
      productsGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
      productsGrid.innerHTML = productsToShow.map(product => `
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
          <div class="relative overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300">
            ${product.isNew ? '<span class="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">NEW</span>' : ''}
            ${product.onSale ? '<span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">SALE</span>' : ''}
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button class="bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
              </button>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
            <p class="text-sm text-gray-500 mb-2">${product.category}</p>
            <div class="flex items-center mb-2">
              <div class="flex text-yellow-400 text-sm">
                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span class="text-xs text-gray-500 ml-2">(${product.reviews})</span>
            </div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                ${product.originalPrice ? `<span class="text-lg font-bold text-black">${product.price.toFixed(2)}</span><span class="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>` : `<span class="text-lg font-bold text-black">${product.price.toFixed(2)}</span>`}
              </div>
              <span class="${product.stockColor} text-sm">${product.stock}</span>
            </div>
            <div class="flex items-center gap-1 mb-3">
              ${product.colors.map(color => `<div class="w-4 h-4 rounded-full ${getColorClass(color)}"></div>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
    } else {
      productsGrid.className = 'space-y-4';
      productsGrid.innerHTML = productsToShow.map(product => `
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex">
          <div class="relative w-48 h-48 flex-shrink-0">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            ${product.isNew ? '<span class="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">NEW</span>' : ''}
            ${product.onSale ? '<span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">SALE</span>' : ''}
          </div>
          <div class="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 class="font-semibold text-xl mb-2">${product.name}</h3>
              <p class="text-gray-500 mb-3">${product.category}</p>
              <div class="flex items-center mb-3">
                <div class="flex text-yellow-400">
                  ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span class="text-sm text-gray-500 ml-2">(${product.reviews} reviews)</span>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-sm text-gray-600">Colors:</span>
                ${product.colors.map(color => `<div class="w-4 h-4 rounded-full ${getColorClass(color)}"></div>`).join('')}
              </div>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-sm text-gray-600">Sizes:</span>
                <span class="text-sm">${product.sizes.join(', ')}</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                ${product.originalPrice ? `<span class="text-2xl font-bold text-black">${product.price.toFixed(2)}</span><span class="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>` : `<span class="text-2xl font-bold text-black">${product.price.toFixed(2)}</span>`}
                <span class="${product.stockColor} text-sm font-medium">${product.stock}</span>
              </div>
              <button class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Update pagination
  function updatePagination() {
    if (!pageNumbers) return;
    
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    if (prevPageBtn) {
      prevPageBtn.disabled = currentPage === 1;
    }
    if (nextPageBtn) {
      nextPageBtn.disabled = currentPage === totalPages;
    }

    pageNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `px-3 py-2 border rounded ${i === currentPage ? 'bg-black text-white border-black' : 'border-gray-300 hover:bg-gray-50'}`;
        pageBtn.addEventListener('click', () => {
          currentPage = i;
          renderProducts();
          updatePagination();
        });
        pageNumbers.appendChild(pageBtn);
      } else if ((i === currentPage - 2 && currentPage > 3) || (i === currentPage + 2 && currentPage < totalPages - 2)) {
        const dots = document.createElement('span');
        dots.textContent = '...';
        dots.className = 'px-2 py-2 text-gray-400';
        pageNumbers.appendChild(dots);
      }
    }
  }

  // Initialize
  setupEventListeners();
  applyFilters();
  renderProducts();
  updatePagination();
}

// Main initialization function
function initializeApp() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCategoryGrid();
      initHeroSlider();
      initProductFiltering();
    });
  } else {
    initCategoryGrid();
    initHeroSlider();
    initProductFiltering();
  }
}

// Initialize the application
initializeApp();