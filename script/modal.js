// 캐릭터 이미지, 모달,모달 이미지, 모달 타이틀과 설명 선택
const characterImages = document.querySelectorAll('#characters ul li img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

characterImages.forEach(function (image) {
  // 캐릭터 이미지 클릭 시 모달창 열기
  image.addEventListener('click', function () {
    const imageUrl = image.getAttribute('src');
    const name = image.getAttribute('alt');
    const description = image.getAttribute('description');

    modalImage.setAttribute('src', imageUrl);
    modalTitle.textContent = name;
    modalDescription.textContent = description;
    modal.classList.add('show');
  });
});

// 모달창 열렸을 때, 외부 클릭 시 닫기
window.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('show');
});
