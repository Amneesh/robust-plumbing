 window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

const toggleBtn1 = document.getElementById('menu-toggle');
const menu = document.getElementById('slide-menu');

toggleBtn1.addEventListener('click', () => {
  const isOpen = menu.classList.contains('active');

  if (isOpen) {
    // Start slide-out
    menu.classList.remove('active');
    toggleBtn1.classList.remove('open');

    // Delay hiding visibility to let transform finish
    setTimeout(() => {
      menu.style.visibility = 'hidden';
    }, 400); // match transition duration
  } else {
    // Show and slide-in
    menu.style.visibility = 'visible';
    menu.classList.add('active');
    toggleBtn1.classList.add('open');
  }
});


const toggleBtn = document.getElementById('toggleSocial');
const socialPopup = document.getElementById('socialPopup');

toggleBtn.addEventListener('click', () => {
  socialPopup.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
  const joinUs = document.querySelector('.shake-effect');
  let hasShaken = false; // to prevent repeated shaking

  window.addEventListener('scroll', function () {
    const rect = joinUs.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !hasShaken) {
      joinUs.classList.add('shake');
      hasShaken = true;

      // Optional: remove class after animation ends if you want it reusable
      setTimeout(() => {
        joinUs.classList.remove('shake');
      }, 500);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".go-to-contact").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "/contact.html";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".go-to-portfolio").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "/portfolio.html";
    });
  });
});






if (document.body.classList.contains("home-page")) {

  document.addEventListener("DOMContentLoaded", () => {
    // const topImg = document.querySelector(".hero-img-top");
    // const bottomImg = document.querySelector(".hero-img-bottom");
    const overlay = document.querySelector(".overlay");



    setTimeout(() => {
      // topImg.classList.add("show");
      // bottomImg.classList.add("show");
      overlay.classList.add('show');
    }, 100); // Show after 1 second
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

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => vertical_slider.init());

  const testimonialsData = [
    {
      "name": "Himani Thakur",
      "role": "34 reviews",
      "time": "3 years ago",
      "text": "I have learnt bhangra from here and they not only teach bhangra but also polish the skills out of a person. It's pretty disciplined place where everybody focus on their hard work and sincerity to learn bhangra.",
      "likes": "🙏"
    },
    {
      "name": "Gurjit Virk",
      "role": "1 review",
      "time": "2 years ago",
      "text": "robust bhangra academy is one of the best academy, my kids are doing great in bhangra only because of the best coaching skills they get taught by the fantastic coach",
      "likes": "❤️"
    },
    {
      "name": "Ekjot Sarang",
      "role": "2 reviews",
      "time": "3 years ago",
      "text": "Not good I used to go there and the owner is really unprofessional, unorganized, occasionally hits older students \"as a joke\" and doesn't account for students mental health",
      "likes": "🙏1"
    },
    {
      "name": "Sukh Toor Dhaliwal",
      "role": "2 reviews",
      "time": "6 years ago",
      "text": "Hi the teacher here at this academy has so much discipline in him and does so much hard work",
      "likes": "🙏❤️4"
    },
    {
      "name": "Mehtab Brahm",
      "role": "5 reviews",
      "time": "6 years ago",
      "text": "Learn from the best! Great coach!",
      "likes": "🙏2"
    },
    {
      "name": "Tanvir Johal",
      "role": "7 reviews",
      "time": "6 years ago",
      "text": "AMAZING BHANGRA ACADEMY! LEARN THE BEST FROM THE BEST!",
      "likes": "🙏1"
    },
    {
      "name": "Esha Bedi",
      "role": "4 reviews",
      "time": "5 years ago",
      "text": "This place is amazing on how they teach step by step",
      "likes": "🙏1"
    },
    {
      "name": "Amneesh Singh",
      "role": "5 reviews",
      "time": "1 year ago",
      "text": "Robust Plumbing truly transformed our wedding! Their professionalism and energy were unmatched.",
      "likes": "🌟5"
    }
  ]

 const colors = [
  '#0000FF',
  '#ADD8E6',
  '#00008B',
  '#002347',
  '#e5eef7',
  '#ccddef',
  '#FF0000',
  '#FFCCCB',
  '#8B0000'
];

  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range));

      const timer = setInterval(() => {
        current += increment;
        obj.textContent = current + ' +';
        if (current === end) clearInterval(timer);
      }, step);
    }

    let hasAnimated = false;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counter("count1", 0, 400, 3000);
          counter("count2", 100, 50, 2500);
          counter("count3", 0, 40, 3000);
          // counter("count4", 0, 40, 3000);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('whoWeAre'));
  });

  function truncateWords(str, limit) {
    const words = str.split(' ');
    if (words.length <= limit) return str;
    return words.slice(0, limit).join(' ') + '...';
  }


  // Create testimonial divs dynamically
  const track = document.getElementById('track');
  track.innerHTML = ''; // Clear if needed

  testimonialsData.forEach(test => {
    const firstLetter = test.name.charAt(0).toUpperCase();
    const colorIndex = firstLetter.charCodeAt(0) % colors.length;
    const bgColor = colors[colorIndex];

    const testimonialHTML = `

     <div class="testimonial-card flex flex-col justify-between items-center">
       
        <div class="t-card-body">
        <p class="t-card-body-text">${truncateWords(test.text, 30)}</p>
        </div>
        
       
     <div class ="testimonial-card-data">
       <div class="t-card-header flex flex-row justify-start items-center gap-1">
       
       <div class="user-pic">   
        <div class="avatar" style="background-color: ${bgColor};">${firstLetter}</div>
       </div> 

       <div class="user-name">
           <h5>${test.name}</h5>
           <p> ${test.role}</p>
      </div>

        </div>
      
      </div>
         
        </div>
     

      

    
  `;

    // Create a container and set innerHTML to safely parse the string into DOM elements
    const wrapper = document.createElement('div');
    wrapper.innerHTML = testimonialHTML;

    // Append the parsed element to the track
    track.appendChild(wrapper.firstElementChild);
  });


  if (track) {
    const cards = track.querySelectorAll('.testimonial-card');

    let scrollX = 0;
    const speed = 1;

    function animateScroll() {
      scrollX += speed;
      if (scrollX >= track.scrollWidth / 2) {
        scrollX = 0;
      }
      track.style.transform = `translateX(${-scrollX}px)`;
      highlightCenterCard();
      requestAnimationFrame(animateScroll);
    }

    function highlightCenterCard() {
      const containerCenter = window.innerWidth / 2;
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < rect.width / 2) {
          card.classList.add('focused');
         
        } else {
          card.classList.remove('focused');
            
        }
      });
    }

    animateScroll();
  }

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const service = card.dataset.service;
      // Navigate to events.html with service query param
      window.location.href = `events.html?service=${service}`;
    });
  });




}
document.addEventListener("DOMContentLoaded", () => {
  const subscribedEmail = sessionStorage.getItem("subscribedEmail");

  if (subscribedEmail) {
    console.log("User already subscribed with:", subscribedEmail);

    const subBoxTitle = document.getElementById("subBoxTitle");
    const subBoxContent = document.getElementById("subBoxContent");
    const subSuccess = document.getElementById("subSuccess");

    subBoxTitle.style.display = "none";
    subBoxContent.style.display = "none";
    subSuccess.style.display = "block";
  }
});


async function handleSubscribe(event) {
  event.preventDefault(); // Prevents page reload

  const emailInput = document.querySelector('.subscribe-input');
  const email = emailInput.value.trim();

  if (email) {
    console.log("Subscribed with:", email);

    const name = 'robust subscription';
    const message = `Robust Plumbing subscribed by new user: ${email}`;
    const subBoxTitle = document.getElementById("subBoxTitle");
    const subBoxContent = document.getElementById("subBoxContent");
    const subSuccess = document.getElementById("subSuccess");
    const subFail = document.getElementById("subFail");

    const to = "amneeshsingh5@gmail.com";
    const subject = `Robust Plumbing website inquiry from ${name}`;
    const html = `
      <h2>New Inquiry from Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    try {
      const res = await fetch("https://email-backend-live.vercel.app/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, to, subject, html }),
      });

      if (res.ok) {
        subBoxTitle.style.display = "none";
        subBoxContent.style.display = "none";
        subSuccess.style.display = "block";
        sessionStorage.setItem("subscribedEmail", email);

        emailInput.value = ""; // ✅ Clear the input after success
      } else {
        subFail.style.display = "block";
      }
    } catch (err) {
      console.error("Fetch error:", err);
      subFail.style.display = "block";
    }
  }
}



