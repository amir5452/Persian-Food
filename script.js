// Making the mobile navigation work
const btnMobileNav = document.querySelector('.btn-mobile-nav');

const headerEl = document.querySelector('.header-section');

const heroSection = document.querySelector('.section-hero');

btnMobileNav.addEventListener('click', function () {
  headerEl.classList.toggle('open-nav');
});

// updating year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// Smooth Scrolling

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('open-nav');
    }
  });
});

// Implementing sticky navigation bar

const makeHeaderSticky = function (entries) {
  entries.forEach(entry => {
    headerEl.classList.toggle('header-sticky', !entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(makeHeaderSticky, {
  root: null,
  threshold: 0,
});

observer.observe(heroSection);
