class ShoppingCartException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class ProductProxy {
    constructor(productUuid, amount) {
        this.productUuid = productUuid;
        this.amount = amount;
    }
}

class ShoppingCart {
    constructor() {
        this.proxies = [];
        this.products = [];
    }

    addItem(productUuid, amount) {
        let existingProxy = this.proxies.find(proxy => proxy.productUuid === productUuid);
        if (existingProxy) {
            existingProxy.amount += amount;
        } else {
            this.proxies.push(new ProductProxy(productUuid, amount));
            let product = dataHandler.getProductById(productUuid);
            this.products.push(product);
        }
    }

    updateItem(productUuid, newAmount) {
        if (newAmount < 0) {
            throw new ShoppingCartException("New amount cannot be negative.");
        } else if (newAmount === 0) {
            this.removeItem(productUuid);
        } else {
            let existingProxy = this.proxies.find(proxy => proxy.productUuid === productUuid);
            if (existingProxy) {
                existingProxy.amount = newAmount;
            } else {
                throw new ShoppingCartException("Product not found in cart.");
            }
        }
    }

    removeItem(productUuid) {
        this.proxies = this.proxies.filter(proxy => proxy.productUuid !== productUuid);
        this.products = this.products.filter(product => product.uuid !== productUuid);
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.proxies.length; i++) {
            let proxy = this.proxies[i];
            let product = this.products.find(product => product.uuid === proxy.productUuid);
            if (product) {
                total += product.price * proxy.amount;
            }
        }
        return total;
    }
}
/*
class ProductProxy {
    constructor(productUuid, amount) {
        this.uuid = productUuid;
        this.amount = amount;
    }

    getUuid() {
        return this.uuid;
    }

    getAmount() {
        return this.amount;
    }
}

class ShoppingCart {
    constructor() {
        this.proxies = []; // Almacena ProductProxy
        this.products = []; // Almacena copias de los productos reales
    }

    addItem(productUuid, amount) {
        const existingProxy = this.proxies.find(proxy => proxy.getUuid() === productUuid);

        if (existingProxy) {
            existingProxy.amount += amount;
        } else {
            const newProxy = new ProductProxy(productUuid, amount);
            this.proxies.push(newProxy);
        }
    }

    updateItem(productUuid, newAmount) {
        const existingProxy = this.proxies.find(proxy => proxy.getUuid() === productUuid);

        if (!existingProxy) {
            throw new ShoppingCartException('Product not found in the cart.');
        }

        if (newAmount < 0) {
            throw new ShoppingCartException('Invalid amount. Must be non-negative.');
        }

        if (newAmount === 0) {
            this.proxies = this.proxies.filter(proxy => proxy.getUuid() !== productUuid);
        } else {
            existingProxy.amount = newAmount;
        }
    }

    removeItem(productUuid) {
        this.proxies = this.proxies.filter(proxy => proxy.getUuid() !== productUuid);
    }

    calculateTotal() {
        let total = 0;

        for (const proxy of this.proxies) {
            const product = this.products.find(p => p.uuid === proxy.getUuid());
            if (product) {
                total += product.pricePerUnit * proxy.getAmount();
            }
        }

        return total;
    }
}

function addItem(cart, productUuid, amount) {
    const existingProxy = cart.proxies.find(proxy => proxy.getUuid() === productUuid);

    if (existingProxy) {
        existingProxy.amount += amount;
    } else {
        const newProxy = new ProductProxy(productUuid, amount);
        cart.proxies.push(newProxy);
    }

    return cart.proxies;
}

function updateItem(cart, productUuid, newAmount) {
    const existingProxy = cart.proxies.find(proxy => proxy.getUuid() === productUuid);

    if (!existingProxy) {
        throw new ShoppingCartException('Product not found in the cart.');
    }

    if (newAmount < 0) {
        throw new ShoppingCartException('Invalid amount. Must be non-negative.');
    }

    if (newAmount === 0) {
        cart.proxies = cart.proxies.filter(proxy => proxy.getUuid() !== productUuid);
    } else {
        existingProxy.amount = newAmount;
    }

    return cart.proxies;
}

function removeItem(cart, productUuid) {
    cart.proxies = cart.proxies.filter(proxy => proxy.getUuid() !== productUuid);
    return cart.proxies;
}

function calculateTotal(cart) {
    let total = 0;

    for (const proxy of cart.proxies) {
        const product = cart.products.find(p => p.uuid === proxy.getUuid());
        if (product) {
            total += product.pricePerUnit * proxy.getAmount();
        }
    }

    return total;
}
*/
