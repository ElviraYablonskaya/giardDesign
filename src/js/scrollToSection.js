document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector(".menu-item[href='#contact']");
  const contactSection = document.getElementById("contact");

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  const aboutLink = document.querySelector(".menu-item[href='#about']");
  const aboutSection = document.getElementById("about");

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  const projectsLink = document.querySelector(
    ".menu-item[href='#realization']"
  );
  const projectsSection = document.getElementById("realization");

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault();
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const cards = document.querySelectorAll(".card");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      cards.forEach((card) => {
        card.classList.remove("active");
      });

      const targetCardId = this.getAttribute("href");
      const targetCard = document.querySelector(targetCardId);

      targetCard.classList.add("active");

      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});
