$(function () {
    // Owl Carousel
    var owl = $(".owl-one");
    owl.owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
       
        responsiveClass:true,
responsive:{
0:{
    items:1,
    
},
600:{
    items:1,
    nav:false
},
1000:{
    items:4,
    loop:false
}
}
    });
});
$(function () {
    // Owl Carousel
    var owl = $(".owl-two");
    owl.owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
       
        responsiveClass:true,
responsive:{
0:{
    items:1,
    
},
600:{
    items:1,
    nav:false
},
1000:{
    items:3,
    loop:false
}
}
    });
});