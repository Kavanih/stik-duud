const dropBtn = document.querySelectorAll(".drop_button");
const navBtn = document.querySelector(".nav-button");
const list = document.querySelector("nav ul");
const listItem = document.querySelectorAll("nav ul li");
const close = document.querySelector(".close");

dropBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentDrop = btn.closest(".drop");
    parentDrop.classList.toggle("active");
    if (parentDrop.classList.contains("active")) {
      btn.textContent = "-";
    } else {
      btn.textContent = "+";
    }
  });
});

const swiper = new Swiper(".swiper", {
  speed: 1000,
  spaceBetween: 40,
  loop: true,
  slidesPerView: 3,
  autoplay: {
    delay: 1800,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

navBtn.addEventListener("click", () => {
  list.classList.toggle("hide");
});

close.addEventListener("click", () => {
  list.classList.toggle("hide");
});

listItem.forEach((liste) => {
  liste.addEventListener("click", () => {
    list.classList.add("hide");
  });
});
