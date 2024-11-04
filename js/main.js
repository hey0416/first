$(function () {
  let thumbswiper = new Swiper(".next_img", {
    spaceBetween: 60,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  let mainswiper = new Swiper(".banner", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".banner .swiper-button-next",
      prevEl: ".banner .swiper-button-prev",
    },
    thumbs: {
      swiper: thumbswiper,
    },
  });

  $(' .banner_bottom .arrow img').eq(0).on('click', function () {
    mainswiper.slidePrev();
  });

  $(' .banner_bottom .arrow img').eq(1).on('click', function () {
    mainswiper.slideNext();
  });




  let previewswiper = new Swiper(".preview_container", {
    effect: "coverflow",
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 3,
    coverflowEffect: {
      scale: 0.5,
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".preview_container .side_bar",
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' +
          '<span class="line"></span>' +
          'video' + (index + 1) +
          '</div>';
      },
    },
  });



  let new_classwswiper = new Swiper(".new_class .slide_box", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 100,
    coverflowEffect: {
      scale: 1,
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      // 슬라이드 변경 이벤트
      slideChange: function () {
        // 활성화된 슬라이드 DOM 요소 가져오기
        /*         const activeSlide = new_classwswiper.slides[new_classwswiper.activeIndex]; */
        const bgsrc = new_classwswiper.activeIndex
        // activeSlide의 class 목록을 콘솔에 출력
        //console.log('Active Slide Classes:', bgsrc);
        $('.new_class').css('background-image', `url(img/new_class_bg${bgsrc}.jpg)`)
      }
    }

  });

});

