


const sidebar = document.getElementById("sidebar");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeSidebar = document.getElementById("closeSidebar");

// Open Sidebar
hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.add("active");

    // Hide hamburger, show close button
    hamburgerBtn.classList.add("hide");
    closeSidebar.classList.remove("hide");
});

// Close Sidebar
closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");

    // Show hamburger, hide close button
    hamburgerBtn.classList.remove("hide");
    closeSidebar.classList.add("hide");
});







var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    // ✅ Loop slider continuously
    loop: true,
    autoplay: {
       delay: 2000,       // time between slides
        disableOnInteraction: false, // keep autoplay after user interaction
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        220:{
            slidesPerView: 1,
            spaceBetween: 20,

        },
          500: {
            slidesPerView: 1,
            spaceBetween: 20,

          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,

          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,


          },
          865: {
            slidesPerView: 2,
            spaceBetween: 20,

          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
});


// scroll animation
document.addEventListener("DOMContentLoaded", () => {

    // Generic function to observe elements
    function animateOnScroll(selector, classToAdd = "show", options = { threshold: 0.2 }, stagger = 0) {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (stagger > 0) {
                        elements.forEach((el, index) => {
                            setTimeout(() => el.classList.add(classToAdd), index * stagger);
                        });
                    } else {
                        entry.target.classList.add(classToAdd);
                    }
                    obs.unobserve(entry.target);
                }
            });
        }, options);

        elements.forEach(el => observer.observe(el));
    }

    // Slide animations
    animateOnScroll(".slide-left", "show", { threshold: 0.3 });
    animateOnScroll(".slide-right", "show", { threshold: 0.3 });
    animateOnScroll(".slide-bottom", "show", { threshold: 0.3 });

    // Staggered check items
    animateOnScroll(".check-item", "show", { threshold: 0.2 }, 500);
    animateOnScroll(".check-item-right", "show", { threshold: 0.2 }, 500); // stagger from right

    // Scale-in animation
    animateOnScroll(".scale-in", "show", { threshold: 0.2 });

});
