const btnMobileNav = document.querySelector('.btn-mobile-nav');

const header = document.querySelector('.header-section');

btnMobileNav.addEventListener('click', function () {
  header.classList.toggle('open-nav');
});
