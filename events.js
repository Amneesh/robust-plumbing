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
    id: "dj",
    title: "DJ",
    description:
      "Our professional DJ services are tailored to elevate every event—from intimate gatherings to large-scale celebrations. We offer personalized music curation across genres including Bollywood, Punjabi, EDM, Hip-Hop, and Top 40, using high-end DJ consoles and audio equipment. Our DJs are skilled in reading the crowd, adjusting tempo, and delivering seamless transitions to keep the energy high and the dance floor packed. From bride and groom entries to late-night parties, we provide the soundtrack for unforgettable moments.",
    img: "./resources/services-detail/dj.jpg",
  },
  {
    id: "led",
    title: "LED SCREEN",
    description:
      "Our high-definition LED screens provide vibrant, dynamic visuals that enhance any event atmosphere. Ideal for live video streaming, event backdrops, branding, or multimedia presentations, our screens are customizable in size and layout. Whether used for weddings, concerts, or corporate events, we ensure crisp image quality and full-service setup. Our technical team handles everything from installation to live display management, ensuring smooth visuals throughout your event.",
    img: "./resources/services-detail/led.jpg",
  },
  {
    id: "lighting",
    title: "LIGHTING",
    description:
      "Our advanced event lighting solutions are designed to transform your venue and create immersive environments. From ambient lighting for elegant receptions to synchronized stage effects for performances, we use a range of intelligent lighting systems including moving heads, uplights, lasers, and custom RGB LEDs. Our lighting design is customized to match your theme and coordinated with your event flow and music. Installation and on-site operation are handled by experienced technicians for a flawless visual experience.",
    img: "./resources/services-detail/lighting.jpg",
  },
  {
    id: "sound",
    title: "SOUND SYSTEM",
    description:
      "Crystal-clear audio is essential for a successful event, and our professional sound system rentals ensure powerful, distortion-free sound throughout any space. We provide complete audio solutions including line-array speakers, subwoofers, wireless microphones, mixers, and monitors. Whether it's speeches, DJ sets, live music, or cultural performances, our sound systems are configured to match your venue's acoustics and audience size. On-site audio engineers manage sound checks and live mixing for smooth execution.",
    img: "./resources/services-detail/sound-system.jpg",
  },
  {
    id: "dance",
    title: "DANCE PERFORMANCES",
    description:
      "Elevate your celebration with vibrant, high-energy dance performances that blend cultural tradition with modern choreography. Our dancers specialize in Punjabi Bhangra, Gidha, Bollywood fusion, and custom routines tailored for weddings, receptions, corporate shows, and special events. Each performance is professionally choreographed, synchronized with music, and designed to captivate and energize your guests. We also offer personalized entries for the bride, groom, or special guests for an unforgettable moment on stage.",
    img: "./resources/services-detail/dj.jpg",
  },
  {
    id: "photography",
    title: "PHOTOGRAPHY",
    description:
      "Our photography and videography services capture every unforgettable moment with clarity, creativity, and storytelling finesse. From candid emotions to cinematic wedding films, we cover events with a journalistic eye and professional-grade equipment. Services include pre-event shoots, drone coverage, highlight reels, photo booths, and next-day edits. Whether you want traditional portraits, slow-motion footage, or modern reels for social media, we deliver polished memories that last a lifetime.",
    img: "./resources/services-detail/photography.jpg",
  },
  {
    id: "brass",
    title: "BRASS BAND",
    description:
      "Make a bold, traditional statement with our live brass band—perfect for baraat processions, religious ceremonies, cultural parades, or festive entrances. Our ensemble of skilled musicians delivers lively tunes from classic Indian wedding songs to upbeat Bollywood anthems. Dressed in ceremonial uniforms and trained in choreographed formations, our band brings unmatched energy and authenticity to your event. Optional services include dhol accompaniment and LED instruments for a modern twist.",
    img: "./resources/services-detail/brassBand.jpg",
  },
];

  // Function to get URL query param by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Add slides dynamically to Swiper wrapper
  const wrapper = document.getElementById("swiperWrapper");
  servicesData.forEach(({ id, title, description, img }) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
      <div class="service-slide">
        <img src="${img}" alt="${title}" />
        <h2>${title}</h2>
        <div class="underline"></div>
        <p>${description}</p>
      </div>
    `;
    wrapper.appendChild(slide);
  });

window.addEventListener("load", () => {
  const swiper = new Swiper("#servicesCarousel", {
    loop: true,
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