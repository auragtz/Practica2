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

/*
const shoppingCart = new ShoppingCart();
// 6. Agregar 3 productos a un ShoppingCart
console.log("6. Agregar 3 productos a un ShoppingCart");
console.log("---- AGREGANDO PRIMER PRODUCTO ----");
shoppingCart.addItem(product1.uuid, 1);
console.log("PRIMER PRODUCTO AGREGADO:");
console.table(shoppingCart);

console.log("---- AGREGANDO SEGUNDO PRODUCTO ----");
shoppingCart.addItem(product3.uuid, 1);
console.log("SEGUNDO PRODUCTO AGREGADO:");
console.table(shoppingCart);

console.log("---- AGREGANDO TERCER PRODUCTO ----");
shoppingCart.addItem(product4.uuid, 1);
console.log("TERCER PRODUCTO AGREGADO:");
console.table(shoppingCart);

shoppingCart.updateItem('Gutierrez743962_Poto', 5);
shoppingCart.removeItem('Gutierrez743962_Poto2');

console.log('Total de la compra:', shoppingCart.calculateTotal());

// 6. Crear un ShoppingCart e agregar 3 productos
const shoppingCart = new ShoppingCart();
console.log("6. Agregar 3 productos a un ShoppingCart");

console.log("---- AGREGANDO PRIMER PRODUCTO AL CARRITO ----");
shoppingCart.addItem(product1.getUuid(), 3);
console.log("PRIMER PRODUCTO AGREGADO AL CARRITO:");
console.log(shoppingCart);

console.log("---- AGREGANDO SEGUNDO PRODUCTO AL CARRITO ----");
shoppingCart.addItem(product3.getUuid(), 2);
console.log("SEGUNDO PRODUCTO AGREGADO AL CARRITO:");
console.log(shoppingCart);

console.log("---- AGREGANDO TERCER PRODUCTO AL CARRITO ----");
shoppingCart.addItem(product4.getUuid(), 1);
console.log("TERCER PRODUCTO AGREGADO AL CARRITO:");
console.log(shoppingCart);

// 7. Actualizar la cantidad de un producto en el ShoppingCart
console.log("7. Actualizar la cantidad de un producto en el ShoppingCart");
console.log("---- ACTUALIZANDO CANTIDAD DEL PRIMER PRODUCTO EN EL CARRITO ----");
shoppingCart.updateItem(product1.getUuid(), 5);
console.log("CANTIDAD DEL PRIMER PRODUCTO ACTUALIZADA:");
console.table(shoppingCart);

// 8. Eliminar un producto del ShoppingCart
console.log("8. Eliminar un producto del ShoppingCart");
console.log("---- ELIMINANDO SEGUNDO PRODUCTO DEL CARRITO ----");
shoppingCart.removeItem(product4.getUuid());
console.log("SEGUNDO PRODUCTO ELIMINADO DEL CARRITO:");
console.table(shoppingCart);

// 9. Verificar el total en el carrito de compras
console.log("9. Verificar el total en el carrito de compras");
console.log('Total de la compra:', shoppingCart.calculateTotal());*/
const cart = new ShoppingCart();
cart.addItem(product1.uuid, 3); // Add 3 units of product1
cart.addItem(product3.uuid, 2); // Add 2 units of product2
cart.addItem(product4.uuid, 4); // Add 4 units of product3

console.log('Total value:', cart.calculateTotal());
console.table(cart.products);

// Update product1 quantity
cart.updateItem(product1.uuid, 6); // Update