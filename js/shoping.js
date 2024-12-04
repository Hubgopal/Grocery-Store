// Elements
const cartIcon = document.getElementById('shopping-card');
const cartSection = document.getElementById('shopping-cart');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');
const cartCountElem = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = [];

// Open/Close Cart
cartIcon.addEventListener('click', () => {
    cartSection.style.right = '0';
});
closeCartBtn.addEventListener('click', () => {
    cartSection.style.right = '-100%';
});

// Add to Cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');

        // Check if item exists in cart
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }

        updateCart();
    });
});

// Update Cart
function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="price-quantity">
                    <p>Price: &#8377;${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            </div>
            <button class="remove-item" data-name="${item.name}">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItemsList.appendChild(li);
        total += item.quantity * item.price;
    });

    totalPriceElem.textContent = total.toFixed(2);
    cartCountElem.textContent = cart.reduce((totalCount, item) => totalCount + item.quantity, 0);

    // Add Remove Item Functionality
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            cart = cart.filter(item => item.name !== name);
            updateCart();
        });
    });
}



// Elements
const checkoutButton = document.getElementById('checkout-btn');

// Checkout Functionality
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Thank you for your order!');
    cart = []; // Clear the cart
    updateCart(); // Update cart display
    cartSection.style.right = '-100%'; // Close the shopping cart
});
