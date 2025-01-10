document.getElementById('orderForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const name = document.querySelector('#name').value.trim();
  const address = document.querySelector('#address').value.trim();
  const email = document.querySelector('#email').value.trim();
  const contact = document.querySelector('#contact').value.trim();
  const deliveryDate = document.querySelector('#deliveryDate').value;
  const memo = document.querySelector('#memo').value.trim();
  const packageOption = document.querySelector('input[name="package"]:checked');
  
  const selectedProducts = document.querySelectorAll('input[name="product"]:checked');
  let productDetails = [];
  selectedProducts.forEach((product) => {
      const quantityInput = product.nextElementSibling;
      const quantity = quantityInput.value;
      productDetails.push(`${product.value} ${quantity}개`);
  });

  if (!name || !address || !email || !contact || !packageOption || !deliveryDate) {
      alert('모든 필드를 채워 주세요.');
      return;
  }

  if (productDetails.length === 0) {
      alert('상품을 하나 이상 선택해 주세요.');
      return;
  }

  alert(`
      주문서 제출 성공!
      이름: ${name}
      배송 주소: ${address}
      이메일: ${email}
      연락처: ${contact}
      배송일자: ${deliveryDate}
      선택 상품: ${productDetails.join(', ')}
      포장 옵션: ${packageOption.value}
      메모: ${memo ? memo : '없음'}
  `);

  this.submit();
});
