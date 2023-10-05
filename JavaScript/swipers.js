let swiper = new Swiper(".swiper1", {
    speed:3000,
    spaceBetween: 5,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        autoplaySpeed: 2000,
    }
});


let swiper2 = new Swiper(".swiper2", {
    effect: "fade",
    speed:3000,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

