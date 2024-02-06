// Dummy product data with image URLs
const products = [
    { name: "Product 1", price: "$19.99", image: "images/product1.jpg" },
    { name: "Product 2", price: "$29.99", image: "images/product2.jpg" },
    // Add more product data as needed
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

// Display products on page load
window.onload = displayProducts;
