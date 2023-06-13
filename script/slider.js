// 스와이퍼 기본 설정
const slider = new Swiper('.swiper-container', {
  slidesPerView: 1, // 한 번에 보여질 슬라이드 개수
  loop: true, // 무한 루프
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
