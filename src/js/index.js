document.addEventListener("DOMContentLoaded", function () {
  const searchContainer = document.querySelector(".search-container");
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");

  searchIcon.addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    if (searchContainer.classList.contains("active")) {
      searchInput.focus();
    }
  });
});

const slider = document.querySelector(".slider");
const sliderImages = document.querySelector(".slider-images");
const prevArrow = document.querySelector(".slider-arrow.prev");
const nextArrow = document.querySelector(".slider-arrow.next");

let slideIndex = 0;

const updateSlider = () => {
  sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
};

prevArrow.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
});

nextArrow.addEventListener("click", () => {
  if (slideIndex < sliderImages.children.length - 1) {
    slideIndex++;
    updateSlider();
  }
});
