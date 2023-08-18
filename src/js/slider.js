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
