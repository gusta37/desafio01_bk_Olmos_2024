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
    // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son obligatorios");
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
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.log("Producto no encontrado");
    }
    return product;
  }
}

// Ejemplo de uso
const productManager = new ProductManager();
productManager.addProduct("Product 1", "Description 1", 50, "image1.jpg", "P1", 10);
productManager.addProduct("Product 2", "Description 2", 100, "image2.jpg", "P2", 20);
console.log(productManager.getProducts());
console.log(productManager.getProductById(1));