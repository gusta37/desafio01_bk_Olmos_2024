/* Clases con ECMAScript y ECMAScript avanzado

Consigna:

* Realizar una clase “ProductManager” que gestione un conjunto de productos.

Aspectos a incluir:

* Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío. 

* Cada producto que gestione debe contar con las propiedades: 

  * title (nombre del producto)
  * description (descripción del producto)
  * price (precio)
  * thumbnail (ruta de imagen)
  * code (código identificador)
  * stock (número de piezas disponibles)

* Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.

   * Validar que no se repita el campo “code” y que todos los campos sean obligatorios.
   * Al agregarlo, debe crearse con un id autoincrementable.
   
* Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento.

* Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
  * En caso de no coincidir ningún id, mostrar en consola un error “Not found”

* Formato del entregable:

Archivo de Javascript listo para ejecutarse desde node.

*/
 
//Uso JSDoc para documentar la clase,  facilitando la comprensión de su funcionamiento, los tipos de datos esperados y devueltos, y otros detalles importantes...

/**
 * Creamos la clase ProductManager.
 * @class
 * @classdesc Clase que gestiona un conjunto de productos.
 */

class ProductManager {

    /**
     * @constructor
     * @constructordesc Constructor de la clase ProductManager.
     */
    constructor() {

    /** @type {Array<Object>} */
    this.products = [];
    
    /** @type {number} */
    this.productIdCounter = 1;
  }

  /**
   * Agrega un nuevo producto al arreglo de productos.
   * 
   * @param {string} title - Título del producto.
   * @param {string} description - Descripción del producto.
   * @param {number} price - Precio del producto.
   * @param {string} thumbnail - Ruta de la imagen del producto.
   * @param {string} code - Código identificador del producto.
   * @param {number} stock - Número de piezas disponibles.
   */
  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios. Se verifica que title, description, price, thumbnail, code, y stock no sean falsy (es decir, no sean null, undefined, 0, "", etc.). Si alguno de estos campos es falsy, se lanza un error con el mensaje "Todos los campos son obligatorios".
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son obligatorios.");
    }

    // Valida que no se repita el campo "code"
    if (this.products.some(product => product.code === code)) {
      throw new Error("El código del producto ya existe");
    }

    const newProduct = {
      id: this.productIdCounter,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(newProduct);
    this.productIdCounter++;
  }


/**
   * Obtiene todos los productos creados hasta el momento.
   * 
   * @returns {Array<Object>} - Arreglo con todos los productos.
*/
  getProducts() {
    return this.products;
  }


  /**
   * Busca un producto por su ID.
   * 
   * @param {number} id - El ID del producto a buscar.
   * @returns {Object | undefined} - El producto encontrado o undefined si no se encuentra.
   */
  getProductById(id) {

    // Valida que el ID sea un número válido y si no lo es, imprime el mensaje "ID de producto inválido".

    if (typeof id !== 'number' || id <= 0) {
      throw new Error("ID de producto inválido. Debe ser mayor a 0.\n");

    }

    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }
    return product;
  }
}

// Ejemplo de uso
// creo una instancia de la clase ProductManager:
const productManager = new ProductManager();

// agrego dos productos:
//uso try para que me muestre los errores en consola ya que uso throw new Error en lugar de console.log.
try {
  productManager.addProduct("Product 1", "Description 1", 50, "image1.jpg", "P1", 10);
} catch (error) {
  console.error("\nError al agregar Product 1:", error.message);
}

try {
  productManager.addProduct("Product 2", "Description 2", 100, "image2.jpg", "P2", 20);
} catch (error) {
  console.error("\nError al agregar Product 2:", error.message);
}

//Producto incompleto para probar el mensaje de error.
try {
  productManager.addProduct("Product 3", "Description 3", 100, "image3.jpg", null, 20);
} catch (error) {
  console.error("\nError al agregar Product 3:", error.message);
}

//Me muestra todos los productos.
console.log("\n Todos los productos: \n"); //Titulo y saltos de linea para ver mas claro en consola!
console.log(productManager.getProducts());

// Intenta obtener un producto con un ID válido
// Uso try para que me muestre los mensajes de error al usar throw new Error en lugar de console.log.

try {
  console.log("\n Producto con tu ID: \n");
  console.log(productManager.getProductById(1));
} catch (error) {
  console.error(error.message);
}

// Intenta obtener un producto con un ID inválido
try {
  console.log("\n Producto con ID erroneo: \n");
  console.log(productManager.getProductById(0));
} catch (error) {
  console.error(error.message);
}

/**
 * CORRECCION DEL EJERCICIO:
 * Buenísimo Gustavo! Tu clase y métodos funcionan correctamente! Me encantó que le agregaste validaciones a las propiedades del nuevo producto, de la misma manera se lo podes colocar a lo que te llega por parámetro en la búsqueda de producto por ID. Igualmente esta muy bien! :)
 */