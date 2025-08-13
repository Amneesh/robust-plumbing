const whyPoints = document.querySelectorAll('.why-point');
  const mainImage = document.getElementById('main-why-us-image');
  
  const mainContainer = document.getElementById('whyUsMainContainer');

  // Add click listeners
 whyPoints.forEach(point => {
  point.addEventListener('click', () => {
    const newImageSrc = point.getAttribute('data-image');
    if (newImageSrc && mainImage) {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.setAttribute('src', newImageSrc);
        mainImage.style.opacity = 1;

        // Remove and re-add class to restart animation
        mainContainer.classList.remove('rotating-div');
        void mainContainer.offsetWidth;  // Trigger reflow
        mainContainer.classList.add('rotating-div');
      }, 150);
    }

    whyPoints.forEach(p => p.classList.remove('selected'));
    point.classList.add('selected');
  });
});

  // Highlight and set first image on load
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


  
const servicesData = [
  {
    id: "combi",
    title: "Combi Boilers",
    description:
      "Combi (combination) boilers are compact, all-in-one units that provide both central heating and instant hot water without the need for a separate water tank. Perfect for small to medium-sized homes with limited space, they offer energy-efficient heating and hot water on demand, helping reduce your energy bills while saving space.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "system",
    title: "System Boilers",
    description:
      "System boilers work with a hot water storage cylinder but don’t require a separate cold water tank. They deliver hot water simultaneously to multiple taps and radiators, making them ideal for larger homes or businesses with high hot water demand. System boilers are known for reliability and ease of installation.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "conventional",
    title: "Conventional Boilers",
    description:
      "Also called regular or traditional boilers, these systems use both a cold water storage tank and a hot water cylinder. They are suitable for older properties with existing radiator systems and where multiple bathrooms require hot water at the same time. Conventional boilers provide consistent heating but take up more space.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "electric",
    title: "Electric Boilers",
    description:
      "Electric boilers are an eco-friendly alternative to gas boilers, ideal for homes or businesses without access to natural gas. They provide clean, quiet heating and hot water with low maintenance needs. Electric boilers are compact, easy to install, and great for small spaces or environmentally conscious customers.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "gas",
    title: "Gas Boilers",
    description:
      "Gas boilers are the most common type of boilers, burning natural gas to provide heating and hot water efficiently. They come in combi, system, or conventional models and are popular due to their cost-effectiveness and performance. Proper installation and maintenance ensure safety and long-term reliability.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "oil",
    title: "Oil Boilers",
    description:
      "Oil boilers burn heating oil to produce heat and hot water, commonly used in rural areas or properties without natural gas connections. They offer powerful heating and can be combined with modern controls for efficiency. Regular servicing is essential to maintain performance and safety.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "condensing",
    title: "Condensing Boilers",
    description:
      "Condensing boilers are high-efficiency boilers designed to capture and reuse heat from exhaust gases that traditional boilers waste. This results in reduced fuel consumption and lower carbon emissions. Available in combi, system, or conventional styles, condensing boilers are an environmentally friendly and cost-saving choice.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "biomass",
    title: "Biomass Boilers",
    description:
      "Biomass boilers use renewable organic materials such as wood pellets, chips, or logs to generate heat. They are an eco-friendly alternative for homes and businesses aiming to reduce their carbon footprint. Biomass boilers require dedicated fuel storage but offer sustainable heating with government incentives in some areas.",
    img: "./resources/services/kitchen-plumbing.png",
  },
  {
    id: "steam",
    title: "Steam Boilers",
    description:
      "Primarily used in industrial and large commercial applications, steam boilers heat water to produce steam for heating or processing needs. These robust systems are designed for high-capacity output and are maintained by specialists to ensure safe and efficient operation.",
    img: "./resources/services/kitchen-plumbing.png",
  }
]


  // Function to get URL query param by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

const boilers = [
  // Natural Gas
  {
    id: "ng-johnwood-40",
    category: "natural-gas",
    title: "John Wood 40 Gallon Natural Gas",
    shortDescription: "Reliable 40 gallon natural gas water heater from John Wood.",
    price: "$1,400 – $1,700",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "ng-johnwood-50",
    category: "natural-gas",
    title: "John Wood 50 Gallon Natural Gas",
    shortDescription: "High capacity 50 gallon natural gas water heater from John Wood.",
    price: "$1,500 – $1,800",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "ng-johnwood-60",
    category: "natural-gas",
    title: "John Wood 60 Gallon Natural Gas",
    shortDescription: "Large 60 gallon natural gas water heater from John Wood.",
    price: "$1,600 – $1,950",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "ng-rheem-40",
    category: "natural-gas",
    title: "Rheem 40 Gallon Natural Gas",
    shortDescription: "Durable 40 gallon natural gas water heater from Rheem.",
    price: "$1,350 – $1,650",
    img: "./resources/boiler-products/rheme-40.avif"
  },
  {
    id: "ng-rheem-50",
    category: "natural-gas",
    title: "Rheem 50 Gallon Natural Gas",
    shortDescription: "Efficient 50 gallon natural gas water heater from Rheem.",
    price: "$1,450 – $1,750",
    img: "./resources/boiler-products/rheme-40.avif"
  },
  {
    id: "ng-rheem-60",
    category: "natural-gas",
    title: "Rheem 60 Gallon Natural Gas",
    shortDescription: "High performance 60 gallon natural gas water heater from Rheem.",
    price: "$1,550 – $1,850",
    img: "./resources/boiler-products/rheme-40.avif"
  },
  {
    id: "ng-bradfordwhite-40",
    category: "natural-gas",
    title: "Bradford White 40 Gallon Natural Gas",
    shortDescription: "Trusted 40 gallon natural gas water heater from Bradford White.",
    price: "$1,500 – $1,800",
    img: "./resources/boiler-products/bradford.jpg"
  },
  {
    id: "ng-bradfordwhite-50",
    category: "natural-gas",
    title: "Bradford White 50 Gallon Natural Gas",
    shortDescription: "Reliable 50 gallon natural gas water heater from Bradford White.",
    price: "$1,600 – $1,900",
    img: "./resources/boiler-products/bradford.jpg"
  },
  {
    id: "ng-bradfordwhite-60",
    category: "natural-gas",
    title: "Bradford White 60 Gallon Natural Gas",
    shortDescription: "Large 60 gallon natural gas water heater from Bradford White.",
    price: "$1,700 – $2,000",
    img: "./resources/boiler-products/bradford.jpg"
  },

  // Electric
  {
    id: "electric-johnwood-40",
    category: "electric",
    title: "John Wood 40 Gallon Electric",
    shortDescription: "Efficient 40 gallon electric water heater from John Wood.",
    price: "$1,200 – $1,500",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "electric-johnwood-50",
    category: "electric",
    title: "John Wood 50 Gallon Electric",
    shortDescription: "High capacity 50 gallon electric water heater from John Wood.",
    price: "$1,300 – $1,600",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "electric-johnwood-60",
    category: "electric",
    title: "John Wood 60 Gallon Electric",
    shortDescription: "Large 60 gallon electric water heater from John Wood.",
    price: "$1,400 – $1,700",
    img: "./resources/boiler-products/johnwood-40.jpg"
  },
  {
    id: "electric-rheem-40",
    category: "electric",
    title: "Rheem 40 Gallon Electric",
    shortDescription: "Reliable 40 gallon electric water heater from Rheem.",
    price: "$1,150 – $1,450",
    img: "./resources/boiler-products/rheme-40.avif"
  },
  {
    id: "electric-rheem-50",
    category: "electric",
    title: "Rheem 50 Gallon Electric",
    shortDescription: "Efficient 50 gallon electric water heater from Rheem.",
    price: "$1,250 – $1,550",
    img: "./resources/boiler-products/rheme-40.avif"
  },
  {
    id: "electric-rheem-60",
    category: "electric",
    title: "Rheem 60 Gallon Electric",
    shortDescription: "High capacity 60 gallon electric water heater from Rheem.",
    price: "$1,350 – $1,650",
    img: "./resources/boiler-products/rheme-40.avif"
  },
  {
    id: "electric-bradfordwhite-40",
    category: "electric",
    title: "Bradford White 40 Gallon Electric",
    shortDescription: "Durable 40 gallon electric water heater from Bradford White.",
    price: "$1,300 – $1,600",
    img: "./resources/boiler-products/bradford.jpg"
  },
  {
    id: "electric-bradfordwhite-50",
    category: "electric",
    title: "Bradford White 50 Gallon Electric",
    shortDescription: "Reliable 50 gallon electric water heater from Bradford White.",
    price: "$1,400 – $1,700",
    img: "./resources/boiler-products/bradford.jpg"
  },
  {
    id: "electric-bradfordwhite-60",
    category: "electric",
    title: "Bradford White 60 Gallon Electric",
    shortDescription: "Large 60 gallon electric water heater from Bradford White.",
    price: "$1,500 – $1,800",
    img: "./resources/boiler-products/bradford.jpg"
  }
];




// Store swiper instance globally so you can destroy/re-init it
let swiper = null;

function renderSlides(category) {
  const wrapper = document.getElementById("swiperWrapper");
  wrapper.innerHTML = ""; // clear current slides

  // Filter boilers by category or show all if no category passed
  const filteredBoilers = category ? boilers.filter(b => b.category === category) : boilers;

  filteredBoilers.forEach(({ id, title, shortDescription, price, img }) => {
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
            <button class="robust-button-secondary go-to-contact">BUY NOW</button>
          </div>
        </div>
      </div>
    `;
    wrapper.appendChild(slide);
  });

  // Destroy previous swiper if exists
  if (swiper) swiper.destroy(true, true);

  // Initialize swiper again
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

// Attach click listeners on buttons with data-category attribute
document.querySelectorAll(".service-filter-button button").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    renderSlides(category);

    // Optionally update active button style (if you have CSS for .active)
    document.querySelectorAll(".service-filter-button button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


window.addEventListener("load", () => {
  renderSlides("natural-gas");
});


const texts = document.querySelectorAll(".boiler-text-item");
const images = document.querySelectorAll(".boiler-types-images img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const type = img.dataset.type;

    // Remove active class from all texts and images
    texts.forEach(t => t.classList.remove("active"));
    images.forEach(i => i.classList.remove("active"));

    // Add active class to selected text and image
    document.querySelector(`.boiler-text-item[data-type="${type}"]`).classList.add("active");
    img.classList.add("active");
  });
});