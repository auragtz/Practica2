class ShoppingCartException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}
/*
class ProductProxy {
    constructor(productUuid, pricePerPiece) {
        this.uuid = productUuid;
        this.pricePerPiece = pricePerPiece;
    }

    getUuid() {
        return this.uuid;
    }

    getPricePerPiece() {
        return this.pricePerPiece;
    }
}

class ShoppingCart {
    constructor() {
        this.proxies = [];
        this.products = [];
    }

    addItem(productUuid, amount) {
        try {
            const existingProxyIndex = this.proxies.findIndex(proxy => proxy.getUuid() === productUuid);
            if (existingProxyIndex !== -1) {
                // Update amount if product exists
                this.proxies[existingProxyIndex].amount += amount;
                if (this.proxies[existingProxyIndex].amount <= 0) {
                    // Remove product if amount is 0 or negative
                    this.removeItem(productUuid);
                }
            } else {
                // Add new product proxy
                const product = this.products.find(product => product.getUuid() === productUuid);
                if (!product) {
                    throw new ShoppingCartException('Producto con UUID ' + productUuid + ' no encontrado');
                }
                const newProxy = new ProductProxy(productUuid, product.getPricePerUnit());
                newProxy.amount = amount;
                this.proxies.push(newProxy);
            }
        } catch (error) {
            throw new ShoppingCartException(error.message);
        }
    }

    updateItem(productUuid, newAmount) {
        try {
            const existingProxyIndex = this.proxies.findIndex(proxy => proxy.getUuid() === productUuid);
            if (existingProxyIndex === -1) {
                throw new ShoppingCartException('Producto con UUID ' + productUuid + ' no encontrado en el carrito');
            }
            if (newAmount < 0) {
                throw new ShoppingCartException('La cantidad no puede ser negativa');
            }
            if (newAmount === 0) {
                this.removeItem(productUuid);
            } else {
                this.proxies[existingProxyIndex].amount = newAmount;
            }
        } catch (error) {
            throw new ShoppingCartException(error.message);
        }
    }

    removeItem(productUuid) {
        const index = this.proxies.findIndex(proxy => proxy.getUuid() === productUuid);
        if (index !== -1) {
            this.proxies.splice(index, 1);
        }
    }

    calculateTotal() {
        let total = 0;
        this.proxies.forEach(proxy => {
            const product = this.products.find(product => product.getUuid() === proxy.getUuid());
            if (product) {
                total += proxy.amount * product.getPricePerUnit();
            }
        });
        return total;
    }
}*/


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
