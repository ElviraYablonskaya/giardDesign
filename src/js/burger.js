document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger-button");
  const headerMenu = document.querySelector(".header-menu");

  burgerButton.addEventListener("click", (event) => {
    event.preventDefault();
    headerMenu.classList.toggle("menu-active");
  });
});
