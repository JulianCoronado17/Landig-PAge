document.querySelector('.nav_responsive').addEventListener('click', function() {
    document.querySelector('#nav ul').classList.toggle('active');
});
// Inicializa el carrito con los datos de LocalStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar productos al carrito
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        nombre: productName,
        precio: productPrice,
        cantidad: 1
    };

    // Verifica si el producto ya está en el carrito
    const productInCart = cart.find(item => item.id === productId);
    if (productInCart) {
        productInCart.cantidad += 1;  // Incrementa la cantidad si ya existe
    } else {
        cart.push(product);  // Agrega el producto si no existe en el carrito
    }

    // Guarda el carrito actualizado en LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Renderiza el carrito actualizado
    renderCart();
}

// Función para renderizar el carrito
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.nombre} - $${product.precio} x ${product.cantidad}`;
        cartItemsContainer.appendChild(li);
        total += product.precio * product.cantidad;
    });

    // Muestra el total del carrito
    cartTotalContainer.textContent = `Total: $${total}`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Renderiza el carrito cuando la página se carga
document.addEventListener('DOMContentLoaded', renderCart);


function toggleCart() {
    const cart = document.getElementById('cart-container');
    cart.classList.toggle('active');
}


