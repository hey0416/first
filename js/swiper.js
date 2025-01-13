document.addEventListener('DOMContentLoaded', function () {
    // AOS 초기화
    AOS.init({
        duration: 1200, // 전체 지속 시간
        once: false,
    });

    // 왼쪽 슬라이드 설정
    let swiper1 = new Swiper(".left", {
        effect: "fade", // 페이드 효과 적용
        fadeEffect: {
            crossFade: true, // 슬라이드 간 부드러운 전환
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".banner .right ul li .navigation img",
        },
        speed: 1300,
        loop: true,
        on: {
            slideChange: function () {
                updateBannerH2(this.realIndex);
            }
        }
    });

    // 오른쪽 슬라이드 설정
    let swiper2 = new Swiper(".right", {
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".banner .right ul li .navigation img",
        },
        speed: 1300,
        loop: true
    });

    // h2 업데이트 함수
    function updateBannerH2(index) {
        const h2Elements = document.querySelectorAll(".banner h2");
        h2Elements.forEach((h2, i) => {
            if (i === index) {
                h2.classList.add("on");
            } else {
                h2.classList.remove("on");
            }
        });
    }

    // 초기 상태 설정
    updateBannerH2(swiper1.realIndex);

    // place 슬라이드 설정
    let swiper3 = new Swiper(".place", {
        slidesPerView: 5, // 처음에 5개의 슬라이드 표시
        spaceBetween: 60, // 슬라이드 간 간격
        pagination: {
            el: ".swiper-pagination", // 페이지네이션 엘리먼트
            clickable: true, // 페이지네이션 클릭 가능
        },
        navigation: {
            nextEl: ".navigation .prev", // 다음 버튼
            prevEl: ".navigation .next", // 이전 버튼
        },
        speed: 300, // 슬라이드 전환 속도
    });

    // newclass 슬라이드 설정
    let newClassSwiper = new Swiper(".new_class .slide_box", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 71,
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
                const bgsrc = newClassSwiper.activeIndex;
                $(".new_class").css({
                    "background-image": `url(img/new_class_bg${bgsrc}.jpg)`,
                    "transition": "background-image 0.8s ease-in-out", // 부드러운 전환 효과
                });
            },
        },
    });

    // p_list와 main_preview 연결
    const pListItems = document.querySelectorAll('.p_list li');
    const previewArticles = document.querySelectorAll('.main_preview article');

    // 초기화: 첫 번째 항목을 활성화 상태로 설정
    previewArticles.forEach(article => article.classList.remove('on'));
    previewArticles[0].classList.add('on');

    pListItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            previewArticles.forEach(article => article.classList.remove('on'));
            previewArticles[index].classList.add('on');
        });
    });
});
