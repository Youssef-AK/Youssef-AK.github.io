// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive header
const nav = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('header-nav--visible');
});
