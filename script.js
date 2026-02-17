const mobileGrid = document.getElementById("mobileGrid");
const swiperWrapper = document.getElementById("swiperWrapper");
const showMoreBtn = document.getElementById("showMoreBtn");

let productsData = [];
let isExpanded = false;
let swiper;

const starSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-black" viewBox="0 0 24 24">
  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.854 1.417 8.398L12 19.771 4.583 24 6 15.602 0 9.748l8.332-1.73z"/>
</svg>
`;

function renderStars(rating) {
  return new Array(rating).fill(starSVG).join("");
}

function createBadgeHTML(badges) {
  if (!badges) return "";

  return `
    <div class="absolute top-2 left-2 flex gap-2 justify-between w-[calc(100%-1rem)]">
      ${badges
        .map((b) =>
          b === "SAVE 15%"
            ? `<span class="badge badge-save">${b}</span>`
            : `<span class="badge">${b}</span>`,
        )
        .join("")}
    </div>
  `;
}

function createCard(product, index, isSwiper = false) {
  const hiddenClass = !isSwiper && index > 3 ? "mobile-hidden hidden" : "";
  const wrapperClass = isSwiper ? "swiper-slide" : "";

  return `
  <div class="${wrapperClass}">
    <article class="product-card ${hiddenClass}">
      <div class="relative overflow-hidden rounded-xl group ${product.background}">
        
        ${createBadgeHTML(product.badge)}

        <img src="${product.images.primary}"
          class="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-0"/>

        <img src="${product.images.secondary}"
          class="absolute inset-0 w-full h-56 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
      </div>

      <div class="mt-3 space-y-1">
        <h2 class="text-sm font-semibold leading-tight">
          ${product.title.toUpperCase()}
        </h2>

        <div class="flex items-center gap-2">
          <div class="flex">${renderStars(product.rating)}</div>
          <span class="text-xs text-neutral-500">${product.reviews.toLocaleString()} Reviews</span>
        </div>

        <p class="text-sm font-semibold">$${product.price.toFixed(2)}</p>
      </div>
    </article>
  </div>
  `;
}

function renderMobile() {
  mobileGrid.innerHTML = productsData
    .map((p, i) => createCard(p, i, false))
    .join("");
}

function renderSwiper() {
  swiperWrapper.innerHTML = productsData
    .map((p, i) => createCard(p, i, true))
    .join("");

  swiper = new Swiper("#desktopSwiper", {
    slidesPerView: 5,
    spaceBetween: 24,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      1024: { slidesPerView: 4.5 },
      768: { slidesPerView: 3.5 },
    },
  });
}

function handleShowMore() {
  isExpanded = true;

  document.querySelectorAll(".mobile-hidden").forEach((card) => {
    card.classList.remove("hidden");
  });

  showMoreBtn.style.display = "none";
}

showMoreBtn.addEventListener("click", handleShowMore);

fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    productsData = data.products;
    renderMobile();
    renderSwiper();
  });
