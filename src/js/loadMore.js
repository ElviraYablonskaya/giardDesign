document.addEventListener("DOMContentLoaded", function () {
  const loadMoreButton = document.getElementById("loadMoreButton");
  const imagesContainer = document.querySelector(".grid");
  const additionalImages = [
    '<a href="./img/project-7.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-1.png" alt="Project" /></div></a>',
    '<a href="./img/project-5.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-5.png" alt="Project" /></div></a>',
    '<a href="./img/project-1.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-7.png" alt="Project" /></div></a>',
    '<a href="./img/project-6.png" data-lightbox="gallery"><div class="image-container"><img src="./img/project-6.png" alt="Project" /></div></a>',
  ];

  let isOpen = false;

  const additionalImagesContainer = document.createElement("div");
  additionalImagesContainer.classList.add("additional-images-container");

  loadMoreButton.addEventListener("click", function () {
    if (isOpen) {
      additionalImagesContainer.innerHTML = "";
      loadMoreButton.innerHTML =
        '<span class="button-more">Rozwiń</span><i class="fa-solid fa-arrow-right fa-rotate-90"></i>';
    } else {
      additionalImages.forEach(function (image) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML =
          '<div class="grid-item additional-image">' + image + "</div>";
        additionalImagesContainer.appendChild(tempDiv.firstChild);
      });
      loadMoreButton.innerHTML =
        '<span class="button-more">Zwiń</span><i class="fa-solid fa-arrow-right fa-rotate-270"></i>';
    }
    imagesContainer.appendChild(additionalImagesContainer);
    isOpen = !isOpen;
  });
});
