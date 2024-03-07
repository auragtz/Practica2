class ShoppingCartException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

let proxies = [];
let products = []; 

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

