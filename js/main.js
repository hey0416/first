$(function () {
  AOS.init({
    duration: 1200, // 전체 지속 시간
    once: false,
  });

  // Swiper 초기화 코드 (AOS와 별개)
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

  $('.banner_bottom .arrow img').eq(0).on('click', function () {
    mainswiper.slidePrev();
  });

  $('.banner_bottom .arrow img').eq(1).on('click', function () {
    mainswiper.slideNext();
  });

  let previewswiper = new Swiper(".preview_container", {
    effect: "coverflow",
    grabCursor: true,
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
    speed: 800,
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
        $(".new_class").css({
          "background-image": `url(img/new_class_bg${bgsrc}.jpg)`,
          "transition": "background-image 1s ease-in-out", // 부드러운 전환 효과
        });
      },
    },
  });


  const listItems = $('.preview .p_right ul.p_list li');
  const articles = $('.preview .p_left .main_preview article');

  listItems.each(function (index) {
    $(this).on('mouseover', function () {
      // 모든 article에서 'on' 클래스 제거
      articles.removeClass('on');

      // 0부터 index까지 순서대로 'on' 클래스를 추가
      for (let i = 0; i <= index; i++) {
        articles.eq(i).addClass('on');
      }ｓ
    });
  });
});