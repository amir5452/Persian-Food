// Making the mobile navigation work
const btnMobileNav = document.querySelector('.btn-mobile-nav');

const header = document.querySelector('.header-section');

btnMobileNav.addEventListener('click', function () {
  header.classList.toggle('open-nav');
});

// updating year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;
