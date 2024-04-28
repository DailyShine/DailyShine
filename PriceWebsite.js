function showDescription(car) {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });
    var options = document.querySelectorAll('.option');
    options.forEach(function(option) {
        option.classList.remove('selected');
    });
    var selectedDescription = document.getElementById(car);
    if (selectedDescription) {
        selectedDescription.style.display = 'block';
    }
    var selectedOption = document.querySelector('.option[data-car="' + car + '"]');
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}
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