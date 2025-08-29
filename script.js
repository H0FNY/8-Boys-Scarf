const products = [
    {
        name: "Shiny Dress",
        category: "Dubetta Digital",
        image: "assets/Scarfs/DD/DD (1).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    }, {
        name: "Shiny Dress",
        category: "Dubetta Digital",
        image: "assets/Scarfs/DD/DD (2).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    }, {
        name: "Shiny Dress",
        category: "Dubetta Digital",
        image: "assets/Scarfs/DD/DD (3).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    }, {
        name: "Shiny Dress",
        category: "Dubetta Digital",
        image: "assets/Scarfs/DD/DD (4).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    }, {
        name: "Shiny Dress",
        category: "Dubetta Digital",
        image: "assets/Scarfs/DD/DD (5).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Shiny Dress",
        category: "Dubetta Digital",
        image: "assets/Scarfs/DD/DD (6).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Shiny Dress",
        category: "Dubetta Digital",
        image: "assets/Scarfs/DD/DD (7).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },
    {
        name: "Long Dress",
        category: "Dubetta Satin",
        image: "assets/Scarfs/DS/DS (1).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Long Dress",
        category: "Dubetta Satin",
        image: "assets/Scarfs/DS/DS (2).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Long Dress",
        category: "Dubetta Satin",
        image: "assets/Scarfs/DS/DS (3).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Long Dress",
        category: "Dubetta Satin",
        image: "assets/Scarfs/DS/DS (4).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Long Dress",
        category: "Dubetta Satin",
        image: "assets/Scarfs/DS/DS (5).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "In Stock",
        stockColor: "text-green-500"
    },
    {
        name: "Full Sweater",
        category: "Malaysian",
        image: "assets/Scarfs/M/m (1).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Full Sweater",
        category: "Malaysian",
        image: "assets/Scarfs/M/m (2).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Full Sweater",
        category: "Malaysian",
        image: "assets/Scarfs/M/m (3).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Full Sweater",
        category: "Malaysian",
        image: "assets/Scarfs/M/m (4).jpg",
        reviews: "(41k) Customer Reviews",
        price: "$95.50",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },
    {
        name: "Fancy Shawl",
        category: "Kuwaity Gradient",
        image: "assets/Scarfs/KG/KG (1).jpg",
        reviews: "(12k) Customer Reviews",
        price: "$85.00",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Fancy Shawl",
        category: "Kuwaity Gradient",
        image: "assets/Scarfs/KG/KG (2).jpg",
        reviews: "(12k) Customer Reviews",
        price: "$85.00",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Fancy Shawl",
        category: "Kuwaity Gradient",
        image: "assets/Scarfs/KG/KG (3).jpg",
        reviews: "(12k) Customer Reviews",
        price: "$85.00",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Fancy Shawl",
        category: "Kuwaity Gradient",
        image: "assets/Scarfs/KG/KG (4).jpg",
        reviews: "(12k) Customer Reviews",
        price: "$85.00",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Fancy Shawl",
        category: "Kuwaity Gradient",
        image: "assets/Scarfs/KG/KG (5).jpg",
        reviews: "(12k) Customer Reviews",
        price: "$85.00",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },{
        name: "Fancy Shawl",
        category: "Kuwaity Gradient",
        image: "assets/Scarfs/KG/KG (6).jpg",
        reviews: "(12k) Customer Reviews",
        price: "$85.00",
        stock: "Almost Sold Out",
        stockColor: "text-red-500"
    },
    {
        name: "Classic Wrap",
        category: "Digital Wooden",
        image: "assets/Scarfs/DW/DW (1).jpg",
        reviews: "(9k) Customer Reviews",
        price: "$70.00",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Classic Wrap",
        category: "Digital Wooden",
        image: "assets/Scarfs/DW/DW (2).jpg",
        reviews: "(9k) Customer Reviews",
        price: "$70.00",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Classic Wrap",
        category: "Digital Wooden",
        image: "assets/Scarfs/DW/DW (3).jpg",
        reviews: "(9k) Customer Reviews",
        price: "$70.00",
        stock: "In Stock",
        stockColor: "text-green-500"
    },{
        name: "Classic Wrap",
        category: "Digital Wooden",
        image: "assets/Scarfs/DW/DW (4).jpg",
        reviews: "(9k) Customer Reviews",
        price: "$70.00",
        stock: "In Stock",
        stockColor: "text-green-500"
    },
];

const productGrid = document.getElementById("productGrid");
const categoryButtons = document.querySelectorAll("#categoryButtons button");

function renderProducts(category) {
    productGrid.innerHTML = "";
    const filtered = products.filter(p => p.category === category);
    filtered.forEach(product => {
        productGrid.innerHTML += `
        <div class="bg-white rounded-xl shadow p-4">
          <img src="${product.image}" alt="${product.name}" class="w-full h-[280px] object-cover rounded-lg">
          <div class="mt-4">
            <h3 class="font-semibold text-lg">${product.name}</h3>
            <p class="text-sm text-gray-500">${product.category}</p>
            <div class="flex items-center mt-2"><span class="text-yellow-400">★★★★★</span></div>
            <p class="text-sm text-gray-500 mt-1">${product.reviews}</p>
            <div class="flex justify-between items-center mt-3">
              <p class="font-bold text-lg">${product.price}</p>
              <p class="${product.stockColor} text-sm">${product.stock}</p>
            </div>
          </div>
        </div>
      `;
    });
}

// Default load first category
renderProducts("Dubetta Digital");

// Handle button clicks
categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // update active style
        categoryButtons.forEach(b => b.classList.remove("bg-black", "text-white"));
        categoryButtons.forEach(b => b.classList.add("bg-gray-100", "text-gray-600"));
        btn.classList.add("bg-black", "text-white");
        btn.classList.remove("bg-gray-100", "text-gray-600");

        // show products
        const category = btn.getAttribute("data-category");
        renderProducts(category);
    });
});



////////////////////////////

// function createInfiniteSlider(id, interval) {
//     const slider = document.getElementById(id);
//     const slides = slider.children;
//     const total = slides.length;

//     // Clone first slide and append at end
//     const firstClone = slides[0].cloneNode(true);
//     slider.appendChild(firstClone);

//     let index = 0;

//     setInterval(() => {
//       index++;
//       slider.style.transition = "transform 0.7s ease";
//       slider.style.transform = `translateX(-${index * 100}%)`;

//       // When reaching the clone, reset back to first slide
//       if (index === total) {
//         setTimeout(() => {
//           slider.style.transition = "none";
//           slider.style.transform = "translateX(0)";
//           index = 0;
//         }, 700); // match transition duration
//       }
//     }, interval);
//   }

//   // Apply infinite sliders
//   createInfiniteSlider("leftSlider", 4000);
//   createInfiniteSlider("centerTopSlider", 3500);
//   createInfiniteSlider("centerBottomSlider", 5000);
//   createInfiniteSlider("rightSlider", 4500);



const grid = document.getElementById("hero-grid");

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

    track.addEventListener(
      "transitionend",
      () => {
        if (index === totalSlides + 1) {
          track.style.transition = "none";
          index = 1;
          track.style.transform = `translateX(-${index * 100}%)`;
        }
      },
      { once: true }
    );
  }

  setInterval(move, interval);
}

// Start sliders
startSlider(leftImages, slots[0], 4000, false);
startSlider(middleImages, slots[1], 5000, true);
startSlider(rightImages, slots[2], 3500, false);