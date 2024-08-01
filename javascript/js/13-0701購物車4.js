const cart = document.querySelector('#cart');
const cost = 5.00; // 運費固定

function clearCart() {
  cart.innerHTML = '';
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let totalQuantity = 0;
  let subtotal = 0;

  if (cartItems.length === 0) {
    cart.innerHTML = '<p>購物車是空的，歡迎回首頁選購</p>';
    update(0, 0);
    return;
  }

  cartItems.forEach((item, index) => {
    totalQuantity += item.quantity;
    subtotal += parseFloat(item.price.replace('$', '')) * item.quantity;

    // 印出清單
    const row = document.createElement('div');
    row.classList.add('container', 'border-bottom', 'my-2', 'px-5', 'py-4', 'd-flex', 'justify-content-between', 'border-button');
    row.innerHTML = `
      <div class="row w-50 d-flex justify-content-start align-items-center">
        <div class="col-2 d-flex justify-content-center align-items-center">
          <img
            class="bi bi-1-circle bg-gray-400 rounded-circle d-flex justify-content-center align-items-center min-48"
            style="width: 3rem; height:3rem;" src="${item.image}" alt="">
        </div>
        <div class="col-5">
          <div class="col-12">${item.title}</div>
          <div class="col-12">${item.number}</div>
        </div>
      </div>
      <div class="row w-50 d-flex justify-content-center align-items-center">
      </div>
      <div class="row w-25 d-flex justify-content-center align-items-center">
        <div class="col-5 d-flex justify-content-end align-items-center">
          <span class="min-48" id="num-${index}">X ${item.quantity}</span>
        </div>
        <div class="col-6 d-flex justify-content-center" id="price-t-${index}">
          <span>$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    `;
    cart.appendChild(row);
  });
  update(totalQuantity, subtotal);
}

function update(totalQuantity, subtotal) {
  const shipping = cost;
  const total = subtotal + shipping;
  document.querySelector('#total-quantity').innerHTML = totalQuantity;
  document.querySelector('#subtotal').innerHTML = `$${subtotal.toFixed(2)}`;
  document.querySelector('#shipping').innerHTML = `$${shipping.toFixed(2)}`;
  document.querySelector('#total').innerHTML = `$${total.toFixed(2)}`;
}

window.addEventListener('storage', (e) => {
  if (e.key === 'cartItems') {
    clearCart();
  }
});

document.addEventListener('DOMContentLoaded', clearCart);