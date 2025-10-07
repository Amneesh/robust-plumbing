// ===== Why Choose Us Section Animation =====
const whyPoints = document.querySelectorAll('.why-point');
const mainImage = document.getElementById('main-why-us-image');
const mainContainer = document.getElementById('whyUsMainContainer');

whyPoints.forEach(point => {
  point.addEventListener('click', () => {
    const newImageSrc = point.getAttribute('data-image');
    if (newImageSrc && mainImage) {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.setAttribute('src', newImageSrc);
        mainImage.style.opacity = 1;

        // restart animation
        mainContainer.classList.remove('rotating-div');
        void mainContainer.offsetWidth;
        mainContainer.classList.add('rotating-div');
      }, 150);
    }

    whyPoints.forEach(p => p.classList.remove('selected'));
    point.classList.add('selected');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const firstPoint = document.querySelector('.why-point');
  if (firstPoint) {
    const firstImage = firstPoint.getAttribute('data-image');
    firstPoint.classList.add('selected');
    if (firstImage && mainImage) {
      mainImage.setAttribute('src', firstImage);
      mainImage.style.opacity = 1;
    }
  }
});

// ===== Get Query Param Utility =====
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// ===== Mechanical Equipment Data =====
const mechanicalEquipments = [
  // HVAC Systems
  {
    id: "hvac-york",
    category: "hvac",
    title: "York Commercial HVAC System",
    shortDescription: "High-efficiency HVAC system for large commercial spaces.",
    price: "$8,000 – $15,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "hvac-carrier",
    category: "hvac",
    title: "Carrier Rooftop HVAC Unit",
    shortDescription: "Durable and energy-efficient rooftop HVAC system.",
    price: "$9,000 – $16,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "hvac-lennox",
    category: "hvac",
    title: "Lennox Split HVAC System",
    shortDescription: "Reliable split system for precise temperature control.",
    price: "$7,000 – $13,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },

  // Chillers
  {
    id: "chiller-trane",
    category: "chillers",
    title: "Trane Centrifugal Chiller",
    shortDescription: "Industrial-grade chiller for cooling large facilities.",
    price: "$25,000 – $60,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "chiller-york",
    category: "chillers",
    title: "York Water-Cooled Chiller",
    shortDescription: "Efficient water-cooled system with reduced noise operation.",
    price: "$30,000 – $70,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },

  // Pumps
  {
    id: "pump-grundfos",
    category: "pumps",
    title: "Grundfos Circulation Pump",
    shortDescription: "Reliable pump for HVAC and hydronic systems.",
    price: "$1,000 – $3,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "pump-armstrong",
    category: "pumps",
    title: "Armstrong Vertical Inline Pump",
    shortDescription: "Compact and efficient solution for mechanical systems.",
    price: "$1,500 – $3,500",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },

  // Air Handling Units
  {
    id: "ahu-trane",
    category: "pumps",
    title: "Trane Modular Air Handling Unit",
    shortDescription: "Customizable AHU for optimal air distribution and filtration.",
    price: "$5,000 – $12,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "ahu-dyson",
    category: "pumps",
    title: "Dyson Clean Air Handling Unit",
    shortDescription: "Advanced air handling with purification and smart controls.",
    price: "$6,000 – $14,000",
    img: "./resources/boiler-products/johnwood-40.jpg"
  }
];

// ===== Swiper Slider Setup =====
let swiper = null;

function renderSlides(category) {
  const wrapper = document.getElementById("swiperWrapper");
  wrapper.innerHTML = "";

  const filteredEquipments = category
    ? mechanicalEquipments.filter(item => item.category === category)
    : mechanicalEquipments;

  filteredEquipments.forEach(({ id, title, shortDescription, price, img }) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
      <div class="boiler-catalog-card flex flex-col gap-1 justify-between">
        <div class="boiler-catalog-card-image">
          <img src="${img}" alt="${title}" />
        </div>
        <div class="boiler-catalog-content flex flex-col gap-50">
          <div class="boiler-catalog-header flex flex-row gap-1 items-center justify-between">
            <h5>${title}</h5>
          </div>
          <div class="underline-left"></div>
          <div class="boiler-catalog-body flex flex-col gap-25">
            <p>${price}</p>
            <p class="boiler-catalog-description">${shortDescription}</p>
          </div>
          <div class="boiler-catalog-footer">
            <a href="/contact.html"><button class="robust-button-secondary go-to-contact">REQUEST QUOTE</button></a>
          </div>
        </div>
      </div>
    `;
    wrapper.appendChild(slide);
  });

  if (swiper) swiper.destroy(true, true);

  swiper = new Swiper("#servicesCarousel", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// ===== Filter Buttons =====
document.querySelectorAll(".service-filter-button button").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    renderSlides(category);
    document.querySelectorAll(".service-filter-button button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Default view on page load
window.addEventListener("load", () => {
  renderSlides("hvac");
});

// ===== Image-Text Interaction Section =====
const texts = document.querySelectorAll(".boiler-text-item");
const images = document.querySelectorAll(".boiler-types-images img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const type = img.dataset.type;
    texts.forEach(t => t.classList.remove("active"));
    images.forEach(i => i.classList.remove("active"));
    document.querySelector(`.boiler-text-item[data-type="${type}"]`).classList.add("active");
    img.classList.add("active");
  });
});
