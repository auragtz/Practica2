let products = [];

function getProducts() {
    return products;
}

function getProductById(uuid) {
    return products.find(p => p.uuid === uuid);
}

function createProduct(product) {
    products.push(product);
}

function deleteProduct(uuid) {
    products = products.filter(p => p.uuid !== uuid);
}

function updateProduct(uuid, updatedProduct) {
    let product = products.find(p => p.uuid === uuid);
    if (product) {
        for (let key in updatedProduct) {
            
            if (product.hasOwnProperty('_title')) {     
                product[key] = updatedProduct[key];
            }
        }
    }
}
/*
function updateProduct(uuid, updatedProduct) {
    let product = products.find(p => p.uuid === uuid);
    if (product) {
        for (let key in updatedProduct) {
            
            if (product.hasOwnProperty('_title')) {     
                product[key] = updatedProduct[key];
            }
        }
    }
}*/

function findProduct(query) {
    let [category, title] = query.split(':').map(s => s.trim());
    return products.filter(p => (category ? p.category.includes(category) : true) && (title ? p.title.includes(title) : true));
}

if (typeof window !== "undefined") {
    window.dataHandler = {
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
        findProduct
    };
}
