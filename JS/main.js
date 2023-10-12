// 스크롤 cdn   

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle (function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 오른쪽 떠있는 배지숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.6, {
            opacity : 0, display: 'none'
        });
        // 위로가기 버튼 보이기
        gsap.to('#to-top', 0.2, {
            x: 0
        });
    } else {
        // 배지 보여주기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, 0.6 , {
            opacity : 1, display: 'block'
        })
        // 위로가는 버튼 숨기기
        gsap.to('#to-top', 0.2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)



// 위로가는 버튼 누르면 위로 올라가기
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function(){
    gsap.to(window, 0.7, {
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1)* 0.7, opacity:1
    });
});



// 슬라이드
// new Swiper (선택자, 옵션)

new Swiper ('.notice-line .swiper-container', {
    direction:'vertical', autoplay: true, loop:true
})

new Swiper ('.promotion .swiper-container', {
    direction:'horizontal', slidesPerView: 3, spaceBetween: 10, centeredSlides: true, loop:true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper ('.awards .swiper-container', {
    direction:'horizontal', autoplay: true, loop: true, spaceBetween: 30, slidesPerView: 5,
    navigation: {
        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next'
    }
});


//버튼을 누르면 프로모션 창이 열리고 닫히는 모습 (gsap)
const promotionEl = document.querySelector('.promotion');
const PromotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;

PromotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion //느낌표!는 결과값이 반대가 되어주는 것
    if (isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //보임처리
        promotionEl.classList.remove('hide');
    }
});




// 영상 아래 둥둥 떠 있는 부분 애니메이션 (같지 않고 다른게 움직이는 모습)

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject (selector, delay, size) {
    //gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, 
        random(1.5, 2.5), 
        {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut, //gsap ease에서 원하는 움직임 선택하기
            delay: random(0, delay)
        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);



// 스크롤 cdn (어느 정도 내렸을때 애니메이션이 구현되는 걸 표현할 수 있음!)

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene ({
            triggerElment: spyEl, triggerHook: 0.8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller())
})

