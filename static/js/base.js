/*  Toggle Script */
  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    burger.addEventListener('click', function () {
      mobileNav.classList.toggle('d-none');
    });
  });