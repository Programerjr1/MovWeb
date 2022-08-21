var swiper = new Swiper(".box-container", {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
        nextEl: ".bx-chevron-right",
        prevEl: ".bx-chevron-left",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
    },
  });