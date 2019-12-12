$(function () {

   // star rating card
   $(".rate-star").rateYo({
      rating: 3.6,
      starWidth: "12px",
      readOnly: true,
   });
   //===========
   // slider
   $('.product-slider__inner').slick({
      // infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: false,
      responsive: [
         {
            breakpoint: 1900,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            }
         },
         {
            breakpoint: 1441,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 801,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ]
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
   //===============
   // toggle block | list card from new-items.html
   $('.icon-th-list').on('click', function () {
      $('.product-page__items .products__item').addClass('list');
      $(this).addClass('active');
      $('.icon-th-large').removeClass('active');

   });
   $('.icon-th-large').on('click', function () {
      $('.product-page__items .products__item').removeClass('list');
      $(this).addClass('active');
      $('.icon-th-list').removeClass('active');
   });
   //=========

   // login



   // my experiment
   // $('.header__btn-logout').removeClass('header__btn-login--on');
   // $('.header__btn-login').removeClass('header__btn-login--off');
   // $('.header__btn-register').removeClass('header__btn-login--off');

   // $('.header__btn-login').on('click', function () {
   //    $(this).addClass('header__btn-login--off');
   //    $('.header__btn-logout').addClass('header__btn-login--on');
   //    $('.header__btn-register').addClass('header__btn-login--off');
   // })
   $('.header__btn-logout').on('click', function () {
      $(this).removeClass('header__btn-login--on');
      $('.header__btn-login').removeClass('header__btn-login--off');
      $('.header__btn-register').removeClass('header__btn-login--off');
   })
   //=============


   // menu burger
   $('.menu__btn').on('click', function () {
      $('.menu__list').slideToggle();
   });


   $('.header__btn-menu ').on('click', function () {
      $('.header__box').toggleClass('active');
   });

   //============

   // tabs
   $('.product-one__tabs .tab, settings__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });
   //=============

   // formstyler
   $('input[type="file"], select').styler();
   //===============


   try {
      var mixer = mixitup('.products__inner-box');
   } catch (error) {
      console.log(error);
   }

});