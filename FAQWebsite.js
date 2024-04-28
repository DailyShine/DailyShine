document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu a');

  function toggleMenu() {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
  }

  menuBtn.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});