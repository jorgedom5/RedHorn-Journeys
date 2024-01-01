let cart = [];
let total = 0;

// Crea el elemento de audio en el encabezado del HTML
const addToCartSound = new Audio('./audio/money.mp3');

function playAddToCartSound() {
    addToCartSound.currentTime = 0; // Reiniciar la reproducción
    addToCartSound.play();
}

function addToCart(productName, productPrice) {
    // Buscar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // Si el producto ya está en el carrito, solo incrementar la cantidad
        existingProduct.quantity++;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();

    // Guardar el carrito en localStorage
    saveCartToLocalStorage();

    // Reproducir el sonido al agregar al carrito
    playAddToCartSound();
}

function removeFromCart(index) {
    // Reducir la cantidad o eliminar el producto del carrito
    const product = cart[index];
    if (product.quantity > 1) {
        product.quantity--;
    } else {
        cart.splice(index, 1);
    }

    updateCart();

    // Guardar el carrito en localStorage
    saveCartToLocalStorage();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Limpiar la lista del carrito
    cartList.innerHTML = '';

    // Calcular el total
    total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)}€ x ${item.quantity} `;
        
        // Agregar botones de aumentar y disminuir cantidad
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', function() {
            item.quantity++;
            updateCart();
            playAddToCartSound();
        });
        li.appendChild(increaseButton);

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', function() {
            removeFromCart(index);
            playAddToCartSound();
        });
        li.appendChild(decreaseButton);

        cartList.appendChild(li);
    });

    // Actualizar el total en el HTML
    totalElement.textContent = `Total: ${total.toFixed(2)}€`;
}

// Cargar el carrito desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage();
    updateCart(); // Actualizar la interfaz después de cargar el carrito desde localStorage

    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', function(event) {
            // Evitar que se haga más grande al hacer clic en "Agregar al carrito"
            if (!event.target.closest('button')) {
                showModal(item);
            }
        });
    });
});

function saveCartToLocalStorage() {
    // Guardar el carrito y el total en localStorage como cadenas JSON
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', JSON.stringify(total));
}

function loadCartFromLocalStorage() {
    // Cargar el carrito y el total desde localStorage
    const storedCart = localStorage.getItem('cart');
    const storedTotal = localStorage.getItem('total');

    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    if (storedTotal) {
        total = JSON.parse(storedTotal);
    }
}

// Restaurar el carrito y el total al cargar la página
loadCartFromLocalStorage();

// Agregar el evento de clic al botón de "Agregar al carrito"
const addToCartButton = document.getElementById('addToCartButton'); // Asegúrate de tener un botón con este ID en tu HTML
addToCartButton.addEventListener('click', function () {
    // Agregar al carrito lógica aquí
    // Puedes usar la función addToCart(productName, productPrice) aquí

    // Reproducir el sonido al agregar al carrito
    playAddToCartSound();
});

function showModal(item) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const enlargedImage = item.querySelector('img').cloneNode(true);
    enlargedImage.classList.add('enlarged-image');

    modalContent.appendChild(enlargedImage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Cerrar la imagen al hacer clic en cualquier parte del modal
    modal.addEventListener('click', function() {
        closeModal();
    });

    // Cerrar la imagen al presionar la tecla "Esc"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Mostrar la imagen durante 5 segundos (5000 milisegundos)
    setTimeout(function() {
        closeModal();
    }, 7000);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function goToMainShop() {
    // Redirigir a la tienda principal (ajusta la ruta según tu estructura de carpetas)
    window.location.href = "../shop.html";
}
