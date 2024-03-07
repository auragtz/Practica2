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

// 6. Agregar 3 productos a un ShoppingCart
const shoppingCart = [];
console.log("6. Agregar 3 productos a un ShoppingCart");
console.log("---- AGREGANDO PRIMER PRODUCTO ----");
shoppingCart.addItem(product1.uuid, 1);
console.log("PRIMER PRODUCTO AGREGADO:");
console.table(shoppingCart);

console.log("---- AGREGANDO SEGUNDO PRODUCTO ----");
shoppingCart.addItem(product2.uuid, 1);
console.log("SEGUNDO PRODUCTO AGREGADO:");
console.table(shoppingCart);

console.log("---- AGREGANDO TERCER PRODUCTO ----");
shoppingCart.addItem(product3.uuid, 1);
console.log("TERCER PRODUCTO AGREGADO:");
console.table(shoppingCart);

/*
// 7. Actualizar la cantidad de un producto en el carrito
product1.quantity = 2;
console.log("Prueba 7: Carrito de compras actualizado:");
console.table(shoppingCart);

// Prueba 7: Actualizar la cantidad de un producto en el carrito
console.log("Prueba 7: Actualizar la cantidad de un producto en el carrito");
shoppingCart.updateItem(product1.uuid, 3); // Cambia la cantidad del primer producto
console.log("Carrito de compras actualizado:");
console.table(shoppingCart.proxies);

// Prueba 8: Eliminar un producto del carrito
console.log("Prueba 8: Eliminar un producto del carrito");
shoppingCart.removeItem(product2.uuid); // Elimina el producto 2
console.log("Carrito de compras después de eliminar un producto:");
console.table(shoppingCart.proxies);

// Prueba 9: Verificar los totales en el carrito de compras
console.log("Prueba 9: Verificar los totales en el carrito de compras");
const total = shoppingCart.calculateTotal();
console.log("Total del carrito:", total);*/

// Crear un nuevo objeto ShoppingCart
//const shoppingCart = new ShoppingCart();

// Agregar 3 elementos al carrito
addItem(shoppingCart, product1.uuid, 2);
addItem(shoppingCart, product2.uuid, 1);
addItem(shoppingCart, product3.uuid, 3);

// Mostrar los elementos agregados
console.log("Elementos agregados al carrito:");
console.table(shoppingCart.proxies);

// Actualizar la cantidad de un producto en el carrito
updateItem(shoppingCart, product1.uuid, 5); // Cambiar la cantidad del primer producto
console.log("Carrito de compras actualizado:");
console.table(shoppingCart.proxies);

// Eliminar un producto del carrito
removeItem(shoppingCart, product2.uuid); // Eliminar el producto 2
console.log("Carrito de compras después de eliminar un producto:");
console.table(shoppingCart.proxies);

// Verificar el total en el carrito de compras
const total = calculateTotal(shoppingCart);
console.log("Total del carrito:", total);




