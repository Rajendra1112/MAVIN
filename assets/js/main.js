$(".img-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".testimonial-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    991: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

const navButton = document.querySelector(".nav__button");
const navMenu = document.querySelector(".nav__menu");
navButton.addEventListener("click", () => {
  navButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__item").forEach((n) =>
  n.addEventListener("click", () => {
    navButton.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
