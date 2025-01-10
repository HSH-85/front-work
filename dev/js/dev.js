document.getElementById('applicationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const contact = document.querySelector('#contact').value;
  const field = document.querySelector('input[name="field"]:checked');  // 라디오 버튼 선택
  const motivation = document.querySelector('#motivation').value;

  if (!name || !contact || !field || !motivation) {
      alert('모든 필드를 채워 주세요.');
      return;
  }

  alert(`지원서 제출 성공! \n이름: ${name}\n연락처: ${contact}\n지원 분야: ${field.value}\n지원 동기: ${motivation}`);
  
  // 실제 제출을 하려면 주석 해제
  this.submit();
});
