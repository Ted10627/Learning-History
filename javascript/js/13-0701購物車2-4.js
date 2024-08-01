const cost = 5.00; // 運費固定

function updateCartSummary() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalQuantity = 0;
    let subtotal = 0;

    cartItems.forEach(item => {
        totalQuantity += item.quantity;
        subtotal += parseFloat(item.price.replace('$', '')) * item.quantity;
    });

    const shipping = cost;
    const total = subtotal + shipping;

    document.querySelector('#total-quantity').innerHTML = totalQuantity;
    document.querySelector('#subtotal').innerHTML = `$${subtotal.toFixed(2)}`;
    document.querySelector('#shipping').innerHTML = `$${shipping.toFixed(2)}`;
    document.querySelector('#total').innerHTML = `$${total.toFixed(2)}`;
}

window.addEventListener('storage', (e) => {
    if (e.key === 'cartItems') {
        updateCartSummary();
    }
});

document.addEventListener('DOMContentLoaded', updateCartSummary);
