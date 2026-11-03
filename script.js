const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const yearElement = document.getElementById("year");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

const year = new Date().getFullYear();
if (yearElement) {
  yearElement.textContent = year;
}
