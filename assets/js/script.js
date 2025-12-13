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
