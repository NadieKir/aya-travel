/* Retreat Elements Slider */

const sliderWrapper = document.querySelector(".retreat-elements-section__cards");
const slides = document.querySelectorAll(".retreat-element-card");

function initRetreatElementsSlider() {
  new Swiper(".swiper-retreat-elements", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    enabled: true,
    observer: true,
    observerParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: true,
    },
    breakpoints: {
      1060: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1.2,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1060) {
    sliderWrapper.classList.add("swiper-wrapper");
    slides.forEach((slide) => slide.classList.add("swiper-slide"));

    initRetreatElementsSlider();
  }
});

/* Retreat Hosts Slider */

const sliderWrapper2 = document.querySelector(".hosts-section__hosts");
const slides2 = document.querySelectorAll(".host-card");

function initHostsSlider() {
  new Swiper(".swiper-hosts", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    enabled: true,
    observer: true,
    observerParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 768) {
    sliderWrapper2.classList.add("swiper-wrapper");
    slides2.forEach((slide) => slide.classList.add("swiper-slide"));

    initHostsSlider();
  }
});

/* Goals Slider */

const sliderWrapper3 = document.querySelector(".goals-section__cards");
const slides3 = document.querySelectorAll(".goal-card");

function initGoalsSlider() {
  new Swiper(".swiper-goals", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    enabled: true,
    observer: true,
    observerParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled: true,
    },
    breakpoints: {
      1060: {
        slidesPerView: 3,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1060) {
    sliderWrapper3.classList.add("swiper-wrapper");
    slides3.forEach((slide) => slide.classList.add("swiper-slide"));

    initGoalsSlider();
  }
});

/* Scroll Page Up Button */

const DISTANCE_FROM_TOP = 750;

const scrollUpButton = document.querySelector(".scroll-up-button");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > DISTANCE_FROM_TOP || document.documentElement.scrollTop > DISTANCE_FROM_TOP) {
    scrollUpButton.classList.remove("scroll-up-button--hide");
    scrollUpButton.classList.remove("scroll-up-button--initial-hide");
    scrollUpButton.classList.add("scroll-up-button--show");
  } else if (!scrollUpButton.classList.contains("scroll-up-button--initial-hide")) {
    scrollUpButton.classList.remove("scroll-up-button--show");
    scrollUpButton.classList.add("scroll-up-button--hide");
  }
});

scrollUpButton.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

/* Modal */

const openMedicineModalButton = document.getElementById("open-medicine-modal-button");
const modal = document.querySelector(".medicine-modal");

modal.addEventListener("close", () => {
  modal.classList.remove("modal--open");
});
openMedicineModalButton.addEventListener("click", (e) => {
  e.preventDefault();

  modal.showModal();
  modal.classList.add("modal--open");
});
