const hamburger = document.querySelector('#icon');
const navmenu = document.querySelector('nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('fa-times');
  navmenu.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
  hamburger.classList.remove('fa-times');
  navmenu.classList.remove('nav-toggle');
});


