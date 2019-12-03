$(function () {


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

   $('.icon-th-list').on('click',function () {
      $('.product-page__items .products__item').addClass('list');
      $(this).addClass('active');
      $('.icon-th-large').removeClass('active');

   });
   $('.icon-th-large').on('click',function(){
      $('.product-page__items .products__item').removeClass('list');
      $(this).addClass('active');
      $('.icon-th-list').removeClass('active');
   })
   
   try {
      var mixer = mixitup('.products__inner-box');
   } catch (error) {
      console.log(error);
   }

})