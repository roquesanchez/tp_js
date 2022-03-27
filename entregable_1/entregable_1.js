class Producto {
    constructor (nombre, precio, categoria){
    this.nombre=nombre;
    this.precio=precio;
    this.categoria=categoria;
}
    aplicarImpuesto(){
        return this.precio*1.21;
    }
}
let ingresoProducto = true;
const listaProducto = []

do {
    let articulo = prompt('Ingrese el producto');
    let precio = parseInt(prompt('Ingrese el precio del produco'));
    let categoria = prompt('Ingrese la categoria del producto');
    
    if(confirm(`¿Estos datos son correctos?\nNombre del Articulo: ${articulo}\nPrecio ($): ${precio}\nCategoria: ${categoria}`)) {
        const producto = new Producto(articulo, precio, categoria);
        listaProducto.push(producto);
        console.log(listaProducto);
        ingresoProducto = confirm('Desea agregar un nuevo producto');
    }
    
} while (ingresoProducto)

listaProducto.forEach(element => console.log('El precio final del producto ' + element.nombre + ' es: ' + element.aplicarImpuesto() ))