$(function () {

   try {
      var mixer = mixitup('.products__inner-box');
   } catch (error) {
      console.log(error);
   }
   $(".rate-star").rateYo({
      rating: 3.6,
      starWidth: "12px",
      readOnly: true,
   });


   $('.product-slider__inner').slick({
      // infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: false,
   });

   $(".js-range-slider").ionRangeSlider({
      type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$",
        skin: "round",
        
        
  });

})