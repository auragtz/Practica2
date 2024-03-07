class ShoppingCartException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

class ProductProxy {
    constructor(productUuid, quantity) {
        this.productUuid = productUuid;
        this.quantity = quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.proxies = []; // Array for ProductProxy instances
        this.products = []; // Array to store product objects (UUID and pricePerUnit)
    }

    addItem(productUuid, amount) {
        if (amount <= 0) {
            throw new ShoppingCartException('Invalid quantity. Amount must be greater than 0.');
        }

        if (this.products.some(product => product.uuid === productUuid)) {
            // Product already exists, update quantity
            const existingProduct = this.products.find(product => product.uuid === productUuid);
            existingProduct.quantity += amount;
        } else {
            // New product, add to the array
            this.products.push({ uuid: productUuid, quantity: amount });
        }
    }

    updateItem(productUuid, newAmount) {
        const existingProduct = this.products.find(product => product.uuid === productUuid);

        if (!existingProduct) {
            throw new ShoppingCartException('Product not found in the cart.');
        }

        if (newAmount < 0) {
            throw new ShoppingCartException('Invalid quantity. Amount must be non-negative.');
        } else if (newAmount === 0) {
            // Remove the product from the array
            this.products = this.products.filter(product => product.uuid !== productUuid);
        } else {
            // Update the quantity
            existingProduct.quantity = newAmount;
        }
    }

    removeItem(productUuid) {
        this.products = this.products.filter(product => product.uuid !== productUuid);
    }

    calculateTotal() {
        let total = 0;

        for (const product of this.products) {
            // Retrieve price per unit from Product class
            const productDetails = Product.createFromObject(product);
            total += productDetails.pricePerUnit * product.quantity;
        }

        return total;
    }
}
/*
class ShoppingCart {
    constructor() {
        this.proxies = []; // Array for ProductProxy instances
        this.products = new Map(); // Map to store productUuid -> product object
    }

    addItem(productUuid, amount) {
        if (amount <= 0) {
            throw new ShoppingCartException('Invalid quantity. Amount must be greater than 0.');
        }

        if (this.products.has(productUuid)) {
            // Product already exists, update quantity
            const existingProduct = this.products.get(productUuid);
            existingProduct.quantity += amount;
        } else {
            // New product, create a proxy
            const newProxy = new ProductProxy(productUuid, amount);
            this.proxies.push(newProxy);
        }
    }

    updateItem(productUuid, newAmount) {
        if (!this.products.has(productUuid)) {
            throw new ShoppingCartException('Product not found in the cart.');
        }

        const existingProduct = this.products.get(productUuid);

        if (newAmount < 0) {
            throw new ShoppingCartException('Invalid quantity. Amount must be non-negative.');
        } else if (newAmount === 0) {
            // Remove the product from the cart
            this.products.delete(productUuid);
        } else {
            // Update the quantity
            existingProduct.quantity = newAmount;
        }
    }

    removeItem(productUuid) {
        if (!this.products.has(productUuid)) {
            throw new ShoppingCartException('Product not found in the cart.');
        }

        this.products.delete(productUuid);
    }

    calculateTotal() {
        let total = 0;

        for (const [productUuid, product] of this.products) {
            // Retrieve price per unit from Product class
            const productDetails = Product.createFromObject(product);
            total += productDetails.pricePerUnit * product.quantity;
        }

        return total;
    }
}
*/
