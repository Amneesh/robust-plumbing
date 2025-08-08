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
const boilers = [
  {
    "id": "combi-navien",
    "title": "Navien NCB-240E (Combi Boiler)",
    "shortDescription": "Compact all-in-one heating & hot water solution for small to medium homes.",
    "price": "$3,200 – $3,800",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "combi-viessmann",
    "title": "Viessmann Vitodens 100-W (Combi Boiler)",
    "shortDescription": "High efficiency combi boiler for instant hot water and heating.",
    "price": "$3,500 – $4,200",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "combi-worcester",
    "title": "Worcester Bosch Greenstar 25i (Combi Boiler)",
    "shortDescription": "Reliable combi boiler perfect for limited space homes.",
    "price": "$3,000 – $3,600",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "system-baxi",
    "title": "Baxi Megaflo 24 (System Boiler)",
    "shortDescription": "Reliable heating with a hot water cylinder for larger homes.",
    "price": "$3,200 – $3,900",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "system-ideal",
    "title": "Ideal Logic+ System S24 (System Boiler)",
    "shortDescription": "Efficient system boiler for multiple taps and radiators.",
    "price": "$2,900 – $3,400",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "system-vaillant",
    "title": "Vaillant ecoTEC Plus 630 (System Boiler)",
    "shortDescription": "High performance system boiler with easy installation.",
    "price": "$3,500 – $4,100",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "conventional-ideal",
    "title": "Ideal Mexico HE (Conventional Boiler)",
    "shortDescription": "Traditional boiler suited for multi-bathroom homes.",
    "price": "$2,800 – $3,300",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "conventional-vaillant",
    "title": "Vaillant ecoFIT Pure 415 (Conventional Boiler)",
    "shortDescription": "Reliable heat-only boiler for consistent heating.",
    "price": "$2,900 – $3,400",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "conventional-worcester",
    "title": "Worcester Bosch Greenstar Ri (Conventional Boiler)",
    "shortDescription": "Trusted conventional boiler with solid performance.",
    "price": "$2,900 – $3,500",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "electric-thermolec",
    "title": "Thermolec B-12U (Electric Boiler)",
    "shortDescription": "Compact and quiet electric boiler for gas-free heating.",
    "price": "$2,500 – $3,000",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "electric-elnur",
    "title": "Elnur Mattira MAC15 (Electric Boiler)",
    "shortDescription": "Efficient electric boiler ideal for small spaces.",
    "price": "$2,400 – $2,900",
    "img": "./resources/services/kitchen-plumbing.png"
  },
  {
    "id": "electric-strom",
    "title": "Strom SFB15 (Electric Boiler)",
    "shortDescription": "Eco-friendly electric boiler with low maintenance.",
    "price": "$2,600 – $3,100",
    "img": "./resources/services/kitchen-plumbing.png"
  }
]


  // Function to get URL query param by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  

  // Add slides dynamically to Swiper wrapper
  const wrapper = document.getElementById("swiperWrapper");
  boilers.forEach(({ id, title, shortDescription,price, img }) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
    
      <div class="boiler-catalog-card flex flex-col gap-1 justify-between">
            <div class="boiler-catalog-card-image">
        <img src="${img}" alt="${title}" />
            </div>
            <div class="boiler-catalog-content flex flex-col  gap-50">
              <div class="boiler-catalog-header flex flex-row gap-1 items-center justify-between">
                <h5>${title}</h5>
                <p>${price}</p>
              </div>
              <div class="boiler-catalog-body">
 <p>${shortDescription}</p>
               </div>
              <div class="boiler-catalog-footer">
                <button class="robust-button-secondary">BUY NOW</button>
              </div>
            </div>
          </div>
    `;
    wrapper.appendChild(slide);
  });

window.addEventListener("load", () => {
  const swiper = new Swiper("#servicesCarousel", {
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

  const selectedServiceId = getQueryParam("service");
  if (selectedServiceId) {
    const index = servicesData.findIndex((s) => s.id === selectedServiceId);
    if (index >= 0) {
      swiper.slideToLoop(index, 0); // jump to slide instantly
    }

    // Scroll to carousel section smoothly
    const carouselSection = document.getElementById("serviceDetails");
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

const vertical_slider = {
  slider_class: ".slider",

  show_slide(slideIndex, navItem) {
    const slider = navItem.closest(this.slider_class);
    const slideContainer = slider.querySelector(".slides");
    const slides = slideContainer.querySelectorAll(".slide");
    const navLinks = slider.querySelectorAll(".slide_navigation a");

    if (!slides[slideIndex]) return;

    // Update active link
    navLinks.forEach(link => link.classList.remove("active"));
    navItem.classList.add("active");

    if (window.innerWidth >= 1024) {
      // Desktop: scroll to slide
      slideContainer.scrollTo({
        top: slides[slideIndex].offsetTop,
        behavior: "smooth"
      });
    } else {
      // Mobile: show only active slide
      slides.forEach(slide => slide.classList.remove("active"));
      slides[slideIndex].classList.add("active");
    }
  },

  init_slider(slider) {
    const navLinks = slider.querySelectorAll(".slide_navigation a");

    navLinks.forEach((link, index) => {
      link.addEventListener("click", e => {
        e.preventDefault();
        this.show_slide(index, link);
      });
    });

    // Set first slide active on mobile by default
    if (window.innerWidth < 1024) {
      const slides = slider.querySelectorAll(".slide");
      if (slides.length) {
        slides.forEach(s => s.classList.remove("active"));
        slides[0].classList.add("active");
      }
    }
  },

  init() {
    document.querySelectorAll(this.slider_class).forEach(slider => {
      this.init_slider(slider);

      // Track scroll position for desktop only
      const slideContainer = slider.querySelector(".slides");
      const slides = slideContainer.querySelectorAll(".slide");
      const navLinks = slider.querySelectorAll(".slide_navigation a");

      if (window.innerWidth >= 1024) {
        slideContainer.addEventListener("scroll", () => {
          let closest = 0;
          let minDiff = Infinity;

          slides.forEach((slide, index) => {
            const diff = Math.abs(slide.offsetTop - slideContainer.scrollTop);
            if (diff < minDiff) {
              minDiff = diff;
              closest = index;
            }
          });

          navLinks.forEach((link, i) => {
            link.classList.toggle("active", i === closest);
          });
        });
      }
    });
  }
};
