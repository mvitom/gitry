/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


/*$(window).on("scroll", function() {
    if ($(this).scrollTop() <= 425) {}
*/
function sendEmail(){
  Email.send({
      SecureToken :'84eedda8-da22-4b47-914c-84a0ac73b4bb',
      To : 'natalieszmekov@gmail.com',
      From : 'mr.veverak@gmail.com',
      Subject : "New Contact Form",
      Body : 
        'jméno: '+document.getElementById('name').value +
        '<br/>email: '+ document.getElementById('email').value +
        '<br/>telefon: '+ document.getElementById('phone').value +
        '<br/>zpráva: '+document.getElementById('message').value
  }).then(
  message => alert(message)
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

