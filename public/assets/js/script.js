
(function ($) {
  "use strict";

  $('.popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    },
    removalDelay: 300,
  });
  
  //  Main Menu Offcanvas
  $('.primary-menu').find('li a').each(function () {
    if ($(this).next().length > 0) {
      $(this).parent('li').append('<span class="menu-trigger"><i class="fal fa-angle-down"></i></span>');
    }
  });

 

    // expands the dropdown menu on each click
    $('.primary-menu').find('li .menu-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('open').parent('li').children('ul').stop(true, true).slideToggle(350);
      $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
    });

  

  // check browser width in real-time
  function breakpointCheck() {
    var windoWidth = window.innerWidth;

    if (windoWidth <= 991) {
      $('.header-navbar').addClass('mobile-menu');
    } else {
      $('.header-navbar').removeClass('mobile-menu');
    }
  }

  breakpointCheck();
  $(window).on('resize', function () {
    breakpointCheck();
  });


  $('.nav-toggler').on('click', function (e) {
    $('.site-navbar').toggleClass('menu-on');
    e.preventDefault();
  });

  // Close menu on toggler click
  $('.nav-close').on('click', function (e) {
    $('.site-navbar').removeClass('menu-on');
    e.preventDefault();
  });


  // Offcanvas Info menu

  $('.offcanvas-icon').on('click', function (e) {
    $('.offcanvas-info').toggleClass('offcanvas-on');
    e.preventDefault();
  });

  // Close menu on toggler click
  $('.info-close').on('click', function (e) {
    $('.offcanvas-info').removeClass('offcanvas-on');
    e.preventDefault();
  });

 //Search Box addClass removeClass
 $('.header_search_btn > a').on('click', function(){
  $('.page_search_box').addClass('active')
  });
  $('.search_close > i').on('click', function(){
      $('.page_search_box').removeClass('active')
  });





  /* ---------------------------------------------
      Sticky Fixed Menu
  --------------------------------------------- */

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.fixed-btm-top').addClass('reveal');
    } else {
      $('.fixed-btm-top').removeClass('reveal');
    }
  });


  /* ---------------------------------------------
     Bottom To Top hide
  --------------------------------------------- */

  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.fixed-btm-top').addClass('reveal');
    } else {
      $('.fixed-btm-top').removeClass('reveal');
    }
  });

  //  Sticky Menu

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.navbar-sticky').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.navbar-sticky').removeClass('menu_fixed animated fadeInDown');
    }
  });
 
  
  



//  Lightbox
$('.popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    },
    removalDelay: 300,
  });

  



}(jQuery));