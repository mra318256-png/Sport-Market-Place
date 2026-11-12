
        let cart = JSON.parse(localStorage.getItem('amricysport_cart')) || [];

        document.addEventListener('DOMContentLoaded', () => {
            updateCart();
        });

        function addToCart(id, name, price, img) {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, img, quantity: 1 });
            }
            saveAndUpdate();
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            saveAndUpdate();
        }

        function changeQuantity(id, amount) {
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity += amount;
                if (item.quantity <= 0) {
                    removeFromCart(id);
                    return;
                }
            }
            saveAndUpdate();
        }

        function saveAndUpdate() {
            localStorage.setItem('amricysport_cart', JSON.stringify(cart));
            updateCart();
        }

        function updateCart() {
            const cartItemsList = document.getElementById('cartItemsList');
            const cartCount = document.getElementById('cartCount');
            const cartTotalPrice = document.getElementById('cartTotalPrice');
            
            let totalCount = 0;
            let totalPrice = 0;

            if (cart.length === 0) {
                cartItemsList.innerHTML = '<p class="text-center text-muted py-5">Your cart is empty.</p>';
                cartCount.innerText = '0';
                cartTotalPrice.innerText = '$0.00';
                return;
            }

            cartItemsList.innerHTML = '';
            cart.forEach(item => {
                totalCount += item.quantity;
                totalPrice += item.price * item.quantity;

                cartItemsList.innerHTML += `
                    <div class="d-flex align-items-center justify-content-between p-2 mb-2 bg-light rounded border">
                        <div class="d-flex align-items-center">
                            <img src="${item.img}" class="cart-item-img me-2 border">
                            <div>
                                <h6 class="m-0 fw-bold text-truncate" style="max-width: 120px;">${item.name}</h6>
                                <small class="text-danger fw-bold">$${item.price}</small>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm btn-secondary px-2" onclick="changeQuantity(${item.id}, -1)">-</button>
                            <span class="mx-2 fw-bold">${item.quantity}</span>
                            <button class="btn btn-sm btn-secondary px-2" onclick="changeQuantity(${item.id}, 1)">+</button>
                            <button class="btn btn-sm btn-link text-danger ms-2" onclick="removeFromCart(${item.id})">🗑️</button>
                        </div>
                    </div>
                `;
            });

            cartCount.innerText = totalCount;
            cartTotalPrice.innerText = `$${totalPrice.toFixed(2)}`;
        }

        function goToCheckout() {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            window.location.href = 'four.html';
        }