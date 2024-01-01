let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Limpiar la lista del carrito
    cartList.innerHTML = '';

    // Calcular el total
    total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
        cartList.appendChild(li);
    });

    // Actualizar el total en el HTML
    totalElement.textContent = `Total: ${total.toFixed(2)}€`;
}
