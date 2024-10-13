 
 $(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    responsive:{
      0:{
        items:1,
      },
      400:{
        items:1,
      },
      1000:{
        items:4,
      },
    }
  });
});


 
  // const s=window.innerWidth;
  // if(s<=640){
  //   $(function() {
  //     // Owl Carousel
  //     var owl = $(".owl-carousel");
  //     owl.owlCarousel({
  //       items:1,
  //       margin: 10,
  //       loop: true,
  //       nav: true,
  //       autoplay:true
  //     });
  //   });
  // }else{
  //   $(function() {
  //     // Owl Carousel
  //     var owl = $(".owl-carousel");
  //     owl.owlCarousel({
  //       items: 4,
  //       margin: 10,
  //       loop: true,
  //       nav: true,
  //       autoplay:true
  //     });
  //   });
  // }