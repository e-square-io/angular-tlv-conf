import './styles.scss';

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    const navLinks = document.getElementById("myLinks");
    navLinks.classList.toggle("active");
    this.classList.toggle("animate");
  });
});
