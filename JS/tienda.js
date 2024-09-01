let cart = [];
let products = [];

document.addEventListener("DOMContentLoaded", () => {
    fetch('/Data/products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayFiguras();
            displayRopa();
            displaymangas();
            displayaccesorios();
        })
        .catch(error => console.error('Error al cargar los productos:', error));

        function displayFiguras() {
            const figuresSection = document.querySelector('#figuras .baners');
            figuresSection.innerHTML = '';
        
            const figuras = products.filter(product => product.category === 'figuras');
        
            figuras.forEach(product => {
                const productHTML = `
                    <div class="baner">
                        <img src="${product.image}" alt="${product.name}">
                        <h2>${product.name}</h2>
                        <p><span>$</span>${product.price}</p>
                        <div class="contenedor-boton">
                            <button onclick="addToCart(${product.id})">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                figuresSection.innerHTML += productHTML;
            });
        }
        function displayRopa() {
            const ropaSection = document.querySelector('#ropa .baners');
            ropaSection.innerHTML = '';
        
            const ropas = products.filter(product => product.category === 'ropa');
        
            ropas.forEach(product => {
                const productHTML = `
                    <div class="baner">
                        <img src="${product.image}" alt="${product.name}">
                        <h2>${product.name}</h2>
                        <p><span>$</span>${product.price}</p>
                        <div class="contenedor-boton">
                            <button onclick="addToCart(${product.id})">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                ropaSection.innerHTML += productHTML;
            });
        }
        function displaymangas() {
            const mangasSection = document.querySelector('#mangas .baners');
            mangasSection.innerHTML = '';
        
            const mangas = products.filter(product => product.category === 'mangas');
        
            mangas.forEach(product => {
                const productHTML = `
                    <div class="baner">
                        <img src="${product.image}" alt="${product.name}">
                        <h2>${product.name}</h2>
                        <p><span>$</span>${product.price}</p>
                        <div class="contenedor-boton">
                            <button onclick="addToCart(${product.id})">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                mangasSection.innerHTML += productHTML;
            });
        }
        function displayaccesorios() {
            const accesoriosSection = document.querySelector('#accesorios .baners');
            accesoriosSection.innerHTML = '';
        
            const accesorios = products.filter(product => product.category === 'accesorios');
        
            accesorios.forEach(product => {
                const productHTML = `
                    <div class="baner">
                        <img src="${product.image}" alt="${product.name}">
                        <h2>${product.name}</h2>
                        <p><span>$</span>${product.price}</p>
                        <div class="contenedor-boton">
                            <button onclick="addToCart(${product.id})">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                accesoriosSection.innerHTML += productHTML;
            });
        }
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    });

    document.getElementById('cart-total').textContent = `Total: $${total}`;

    const pagarButton = document.getElementById('pagar');
    const vaciarButton = document.getElementById('Vaciar');
    if (total === 0) {
        pagarButton.style.display = 'none';
        vaciarButton.style.display = 'none';
    } else {
        pagarButton.style.display = 'inline-block';
        vaciarButton.style.display = 'inline-block';
    };
    
    
}
function checkout() {
    if (cart.length > 0) {
        cart = [];
        updateCart();
        showThankYouPopup();
    }
}
function showThankYouPopup() {
    const popup = document.getElementById('thank-you-popup');
    popup.style.display = 'flex';

    const closeBtn = document.getElementById('close-popup');
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };
}


function clearCart() {
    cart = [];
    updateCart();
}

function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.classList.toggle('active');
}

function toggleMenu() {
    const nav = document.querySelector('#nav ul');
    nav.classList.toggle('active');
}
