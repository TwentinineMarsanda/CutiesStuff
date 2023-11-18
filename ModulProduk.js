const modulProduk = (function () {
    const products = [
        { id: 1, title: 'Minimalist Hair Clip (4 Pcs)', price: '$9.21', image: 'images/4pcs-minimalist-hair-clip.png' },
        { id: 2, title: 'Endless Heart Pink Bracelet', price: '$11.13', image: 'images/endless-heart-pink-bracelet-14K.png' },
        { id: 3, title: 'bag-with-pink-ribbon', price: '$50.19', image: 'images/bag-with-pink-ribbon.png' },
        { id: 4, title: 'cute-cat-ear-hat', price: '$35.20', image: 'images/cute-cat-ear-hat.png' },
        { id: 5, title: 'cutie_ukulele', price: '$53.10', image: 'images/cutie_ukulele.png' },
        { id: 6, title: 'Cutie-Bear', price: '$21.99', image: 'images/Cutie-Bear.png' },
        { id: 7, title: 'hellokity-cutie-camera', price: '$80.99', image: 'images/hellokity-cutie-camera.png' },
        { id: 8, title: 'Love-pink-glasses', price: '$6.40', image: 'images/Love-pink-glasses.png' },
        { id: 9, title: 'melody-cutie-binder', price: '$23.99', image: 'images/melody-cutie-binder.png' },
        { id: 10, title: 'pearl-pink-neklace', price: '$28.99', image: 'images/pearl-pink-neklace.png' },
        { id: 11, title: 'pretty-earings', price: '$18.79', image: 'images/pretty-earings.png' },
        { id: 12, title: 'pretty-ribbon', price: '$8.99', image: 'images/pretty-ribbon.png' },
        { id: 12, title: 'strawberries-shoes', price: '$39.99', image: 'images/strawberries-shoes.png' },
    ];

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

    class ModulProduk {
        constructor() {
        }

        displayAllProducts() {
            displayProducts(products);
        }

        searchAndDisplay() {
            searchProduct();
        }
    }

    return new ModulProduk();
})();
