const product1 = new Product('Gutierrez743962_Poto', 'Descripción del producto 1', 'imagen1.jpg', 'unidad', 10, 5, 'categoria1');
const product2 = new Product('Gutierrez743962_Poto2', 'Descripción del producto 2', 'imagen2.jpg', 'unidad', 20, 7, 'categoria2');
const product3 = new Product('Gutierrez743962_Poto3', 'Descripción del producto 3', 'imagen3.jpg', 'unidad', 15, 8, 'categoria3');
const product4 = new Product('Gutierrez743962_Poto4', 'Descripción del producto 4', 'imagen4.jpg', 'unidad', 30, 6, 'categoria4');

// 1. Imprimir arreglo de productos vacío
console.log("1. Imprimir arreglo de productos vacío");
console.table(dataHandler.getProducts());

// 2. Agregar 4 productos
console.log("2. Agregar 4 productos");
console.log("---- AGREGANDO PRIMER PRODUCTO ----");
dataHandler.createProduct(product1);
console.log("PRIMER PRODUCTO AGREGADO:");
console.table(dataHandler.getProducts());

console.log("---- AGREGANDO SEGUNDO PRODUCTO ----");
dataHandler.createProduct(product2);
console.log("SEGUNDO PRODUCTO AGREGADO:");
console.table(dataHandler.getProducts());

console.log("---- AGREGANDO TERCER PRODUCTO ----");
dataHandler.createProduct(product3);
console.log("TERCER PRODUCTO AGREGADO:");
console.table(dataHandler.getProducts());

console.log("---- AGREGANDO CUARTO PRODUCTO ----");
dataHandler.createProduct(product4);
console.log("CUARTO PRODUCTO AGREGADO:");
console.table(dataHandler.getProducts());

// 3. Actualizar los nombres de dos productos
console.log("3. Actualizar los nombres de dos productos");
console.log("---- ACTUALIZANDO PRIMER PRODUCTO ----");
dataHandler.updateProduct(product1.uuid, { title: 'Gutierrez743962_Monstera' });
console.log("PRIMER PRODUCTO ACTUALIZADO:");
console.table(dataHandler.getProducts());

console.log("---- ACTUALIZANDO SEGUNDO PRODUCTO ----");
dataHandler.updateProduct(product2.uuid, { title: 'Gutierrez743962_Monstera2' });
console.log("SEGUNDO PRODUCTO ACTUALIZADO:");
console.table(dataHandler.getProducts());

// 4. Eliminar un producto
console.log("4. Eliminar un producto");
console.log("---- ELIMINANDO SEGUNDO PRODUCTO ----");
dataHandler.deleteProduct(product2.uuid);
console.log("SEGUNDO PRODUCTO ELIMINADO:");
console.table(dataHandler.getProducts());

// 5. Impresión de una excepción
console.log("5. Impresión de una excepción");
try {
    throw new ProductException("¡Esto es una excepción simulada!");
} catch (error) {
    console.error(error.errorMessage);
}

const cart = new ShoppingCart();

// Agregando productos al carrito
cart.addItem(product1.uuid, 2); // Agregar 2 unidades del producto 1
cart.addItem(product3.uuid, 1); // Agregar 1 unidad del producto 3
cart.addItem(product4.uuid, 3); // Agregar 3 unidades del producto 4

// Imprimiendo el carrito completo
console.log("Carrito después de agregar productos:");
console.table(cart.proxies);

// Actualizando la cantidad de un producto en el carrito
cart.updateItem('product1_uuid', 5); // Actualizar a 5 unidades del producto 1

// Imprimiendo el carrito después de la actualización
console.log("Carrito después de actualizar la cantidad:");
console.table(cart.proxies);

// Eliminando un producto del carrito
cart.removeItem('product2_uuid'); // Intentando eliminar un producto que no está en el carrito

// Imprimiendo el carrito después de eliminar un producto
console.log("Carrito después de intentar eliminar un producto que no está en el carrito:");
console.table(cart.proxies);

// Verificando el total en el carrito de compras
const total = cart.calculateTotal();
console.log("Total en el carrito de compras:", total);




