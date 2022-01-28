$(document).ready(function(){
  $('.choose-link-a').click(function(e){
    e.preventDefault();
    $('.choose-link-a').removeClass('choose-link-a--active');
    $('.choose-content').removeClass('choose-content--active');
    $(this).addClass('choose-link-a--active');
    $($(this).attr('href')).addClass('choose-content--active');
  })
  $('.tab-time1').click(function(e){
    e.preventDefault();
    $('.tab-time1').removeClass('active');
    $('.two-sliders1').removeClass('two-sliders1--active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('two-sliders1--active');
  })
  $('.tab-menuit').click(function(e){
    e.preventDefault();
    $('.tab-menuit').removeClass('tab-menuit--active');
    $('.menu-content').removeClass('menu-content--active');
    $(this).addClass('tab-menuit--active');
    $($(this).attr('href')).addClass('menu-content--active');
  });
  $(".header-burger").click(function(){
    $( ".nav-items").slideToggle();
    $( ".nav-links").slideToggle();
    $(".mobile-btn").toggleClass("mobile-btn--active");
});
});
var swiperr4 = new Swiper(".mySwiperr4", {
  loop: false,
  spaceBetween: 10,
  freeMode: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
});
var swiperr3 = new Swiper(".mySwiperr3", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  thumbs: {
    swiper: swiperr4,
  },
});
var mys = new Swiper(".myySwiper2", {
  loop: false,
  spaceBetween: 10,
  freeMode: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
});
var mys2 = new Swiper(".myySwiper", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  thumbs: {
    swiper: mys,
  },
});
var swiperrr4 = new Swiper(".mySwiperrr4", {
  loop: false,
  spaceBetween: 10,
  freeMode: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
});
var swiperrr3 = new Swiper(".mySwiperrr3", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  thumbs: {
    swiper: swiperrr4,
  },
});
var swiperrrr4 = new Swiper(".mySwiperrrr4", {
  loop: false,
  spaceBetween: 10,
  freeMode: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
});
var swiperrrr3 = new Swiper(".mySwiperrrr3", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  thumbs: {
    swiper: swiperrrr4,
  },
});
var swiperrrrr4 = new Swiper(".mySwiperrrrr4", {
  loop: false,
  spaceBetween: 10,
  freeMode: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
});
var swiperrrrr3 = new Swiper(".mySwiperrrrr3", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  thumbs: {
    swiper: swiperrrrr4,
  },
});
var swiperrrrrr4 = new Swiper(".mySwiperrrrrr4", {
  loop: false,
  spaceBetween: 10,
  freeMode: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
});
var swiperrrrrr3 = new Swiper(".mySwiperrrrrr3", {
  loop: false,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  thumbs: {
    swiper: swiperrrrrr4,
  },
});
const swipermt = new Swiper('.myTitle', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    allowTouchMove: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      400: {
        allowTouchMove: true,
      }
    },
   
  });
  var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 10,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    allowTouchMove: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  var swiper4 = new Swiper(".mySwiper4", {
    loop: false,
    spaceBetween: 10,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
  });
  var swiper3 = new Swiper(".mySwiper3", {
    loop: false,
    allowTouchMove: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    thumbs: {
      swiper: swiper4,
    },
  });
  var swiper44 = new Swiper(".mySwiper44", {
    loop: false,
    spaceBetween: 10,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
  });
  var swiper33 = new Swiper(".mySwiper33", {
    loop: false,
    allowTouchMove: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    thumbs: {
      swiper: swiper44,
    },
  });
  var swiper444 = new Swiper(".mySwiper444", {
    loop: false,
    spaceBetween: 10,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
  });
  var swiper333 = new Swiper(".mySwiper333", {
    loop: false,
    allowTouchMove: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    thumbs: {
      swiper: swiper444,
    },
  });
  var swiper4444 = new Swiper(".mySwiper4444", {
    loop: false,
    spaceBetween: 10,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
  });
  var swiper3333 = new Swiper(".mySwiper3333", {
    loop: false,
    allowTouchMove: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    thumbs: {
      swiper: swiper4444,
    },
  });
  var times = new Swiper(".times", {
    loop: true,
    slidesPerView: 10,
    allowTouchMove: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 10,
        spaceBetween: 40
      }
    }
  });
