const modulProduk = (function () {
    // Private variables
    const products = [
        { id: 1, title: 'Minimalist Hair Clip (4 Pcs)', price: '$19.99', image: 'images/4pcs-minimalist-hair-clip.png' },
        { id: 2, title: 'Endless Heart Pink Bracelet', price: '$29.99', image: 'images/endless-heart-pink-bracelet-14K.png' },
        // Add more products as needed
    ];

    // Private methods
    function displayProducts(productArray) {
        const productList = document.getElementById("productList");
        productList.innerHTML = "";

        productArray.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product");
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;
            productList.appendChild(productItem);
        });
    }

    function searchProduct() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const searchResult = products.filter(product => product.title.toLowerCase().includes(searchInput));

        if (searchResult.length === 0) {
            alert("Product not available");
        } else {
            displayProducts(searchResult);
        }
    }

    // Public interface (constructor and methods)
    class ModulProduk {
        constructor() {
            // Additional setup logic can go here
        }

        displayAllProducts() {
            displayProducts(products);
        }

        searchAndDisplay() {
            searchProduct();
        }
    }

    // Return an instance of the ModulProduk
    return new ModulProduk();
})();