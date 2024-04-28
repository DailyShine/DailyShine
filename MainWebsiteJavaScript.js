let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx)=>{
      setTimeout(()=> {
        span.classList.add('active');
      }, (idx + 1) * 400)
    });
    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    }, 2000);
    setTimeout(()=>{
      intro.style.top = '-100vh';
    }, 2300)
  })
})
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
  }
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail(){
    const bodyMessage = `Imie i nazwisko: ${fullName.value}<br> Mail: ${email.value}<br> Numer telefonu: ${phone.value}<br> Wiadomość: ${mess.value}`;

    Email.send({
        SecureToken: "181e7000-4d3d-4543-bdbf-c52e9f40c9b5",    
        To : 'dailyshinecompany@gmail.com',
        From : "dailyshinecompany@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Super!",
                text: "Wysłałeś wiadomość!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item")
    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () =>{
            checkEmail();
        })

        item.addEventListener("keyup", () =>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)){
        email.classList.add("error")
        email.parentElement.classList.add("error")
        if (email.value !=""){
            errorTxtEmail.innerHTML = "Wprowadź poprawny mail."
        }
        else{
            errorTxtEmail.innerHTML = "Musisz wprowadzić swój mail."
        }
    }
    else{
        email.classList.remove("error")
        email.parentElement.classList.remove("error")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail();
        form.reset();
        return false;
    }
})
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });
});

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
