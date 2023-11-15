const hamburgesa = document.getElementById('hamburgesa');
const menu = document.getElementById('menu');
const close = document.getElementById('close');



hamburgesa.addEventListener('click', function(ev){
    menu.classList.add('flex');
    
})


close.addEventListener('click', function(ev){
    menu.classList.remove('flex');
})


const screenWidth = window.innerWidth;


const modifierValue = screenWidth < 1000 ? 3 : 1;


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "5",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: true,
      depth: 300,
      modifier: modifierValue,
      slideShadows: false,
    },
   
    pagination: {
      el: ".swiper-pagination",
    },
  });