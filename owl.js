$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,

    stagePadding: 20,


    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        },
        1400: {
            items: 3
        }
    }
})