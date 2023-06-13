// 탭 선택
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// 최초 접근 시 캐릭터 탭 활성화
document.getElementById('characters').classList.add('active');

// 탭 클릭 이벤트
tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // 모든 탭 비활성화
    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    // 선택한 탭 활성화
    const target = link.dataset.tab;
    const targetContent = document.getElementById(target);
    targetContent.classList.add('active');
  });
});
