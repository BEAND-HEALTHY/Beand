let  menu = document.querySelector('#Menu'); //What?
let  navegador = document.querySelector('.nav-links');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navegador.classList.toggle('active');
}

var swiper = new Swiper(".carousel", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });