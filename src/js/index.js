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

document.addEventListener("DOMContentLoaded", function () {
  const loadMoreButton = document.getElementById("loadMoreButton");
  const imagesContainer = document.querySelector(".grid");
  const additionalImages = [
    '<a href="./img/project-7.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-1.png" alt="Project" /></div></a>',
    '<a href="./img/project-5.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-5.png" alt="Project" /></div></a>',
    '<a href="./img/project-1.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-7.png" alt="Project" /></div></a>',
    '<a href="./img/project-6.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-6.png" alt="Project" /></div></a>'
  ];

  let isOpen = false;

  const additionalImagesContainer = document.createElement("div"); 
  additionalImagesContainer.classList.add("additional-images-container");

  loadMoreButton.addEventListener("click", function () {
    if (isOpen) {
      additionalImagesContainer.innerHTML = "";
      loadMoreButton.innerHTML = '<span class="button-more">Rozwiń</span><i class="fa-solid fa-arrow-right fa-rotate-90"></i>';
    } else {
      additionalImages.forEach(function (image) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = '<div class="grid-item additional-image">' + image + '</div>';
        additionalImagesContainer.appendChild(tempDiv.firstChild);
      });
      loadMoreButton.innerHTML = '<span class="button-more">Zwiń</span><i class="fa-solid fa-arrow-right fa-rotate-270"></i>';
    }
    imagesContainer.appendChild(additionalImagesContainer); 
    isOpen = !isOpen;
  });
});
