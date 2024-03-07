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
        this.products = []; // Almacenamiento de proxies
        this.productDetails = []; // Almacenamiento de detalles reales de productos
    }

    addItem(productUuid, amount) {
        if (amount <= 0) {
            throw new ShoppingCartException('Amount must be positive');
        }

        const existingProxy = this.products.find(p => p.productUuid === productUuid);
        if (existingProxy) {
            existingProxy.quantity += amount;
        } else {
            this.products.push(new ProductProxy(productUuid, amount));
        }
    }

    updateItem(productUuid, newAmount) {
        if (newAmount < 0) {
            throw new ShoppingCartException('Amount must be positive');
        }

        const existingProxy = this.products.find(p => p.productUuid === productUuid);
        if (!existingProxy) {
            throw new ShoppingCartException('Product not found');
        }

        if (newAmount === 0) {
            this.removeItem(productUuid);
        } else {
            existingProxy.quantity = newAmount;
        }
    }

    removeItem(productUuid) {
        this.products = this.products.filter(p => p.productUuid !== productUuid);
    }

    calculateTotal() {
        let total = 0;
        for (const proxy of this.products) {
            const product = this.productDetails[proxy.productUuid];
            if (product) {
                total += product.pricePerUnit * proxy.quantity;
            }
        }
        return total;
    }
}