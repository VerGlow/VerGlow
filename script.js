document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple product filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            products.forEach(product => {
                if (filter === 'all' || product.classList.contains(filter)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Add to cart functionality (basic)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCount();
            alert('Product added to cart!');
        });
    });

    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
    }
});
