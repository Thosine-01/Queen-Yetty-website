var swiper = new Swiper(".slider-1", { 
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grapbCursor: true,
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });