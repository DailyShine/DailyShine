const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


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
    var defaultCarOption = 'CarOne';
    showDescription(defaultCarOption);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
  
    function toggleMenu() {
      menuBtn.classList.toggle('open');
      menu.classList.toggle('open');
    }  
    menuLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const sign = this.querySelector('.sign');
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.querySelector('.sign').textContent = '+';
                    item.previousElementSibling.classList.remove('active');
                }
            });
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                sign.textContent = '+';
                this.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                sign.textContent = '-';
                this.classList.add('active');
            }
        });
    });
});



document.getElementById("downloadBtn").addEventListener("click", function() {
    var pdfUrl = "DodatkoweUsługi.pdf";
    var hiddenElement = document.createElement("a");
    hiddenElement.href = pdfUrl;
    hiddenElement.download = "DodatkoweUsługi.pdf";
    document.body.appendChild(hiddenElement);
    hiddenElement.click();
    document.body.removeChild(hiddenElement);
});

