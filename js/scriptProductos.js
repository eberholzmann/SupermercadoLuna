/*
UNAS PRUEBAS 
let arrProductos=["azucar"]
let arrPrecios=[78]

document.getElementById("producto1").innerHTML=arrPrecios[0];

document.querySelector("div button").addEventListener("click", ()=>{
    console.log("Hizo clic")
    let cantidad=document.getElementById("cant1").value;
    document.getElementById("total").innerHTML="Total: " + cantidad * arrPrecios[0];

    //asi llego al valor de un elemento input dentro del div
    console.log(document.getElementById("cant1").value);
})
*/

// Variable global para acumular el total
let totalAcumulado = 0;

// Arreglo de productos con nombre, cantidad de stock y precio
const productos = [
    { nombre: "Azúcar Ledesma 1kg", stock: 100, precio: 990 },
    { nombre: "Coca-Cola Zero 1.5lt", stock: 40, precio: 1900 },
    { nombre: "Fideos Marolio Moño", stock: 60, precio: 399 },
    { nombre: "Agua mineral 500cc", stock: 600, precio: 400 },
    { nombre: "Yerba Playadito 1kg", stock: 150, precio: 3989 },
    { nombre: "Detergente Magistral", stock: 260, precio: 2600 },
    { nombre: "Pan flauta kg.", stock: 70, precio: 1700 },
    { nombre: "Galletitas Variedad", stock: 380, precio: 1800 },
    { nombre: "Shampoo Sedal Algas", stock: 9, precio: 2900 },
    { nombre: "Arroz Gallo", stock: 130, precio: 1000 },
    { nombre: "Huevos 12unid.", stock: 50, precio: 2300 },
    { nombre: "Jamon Cocido 100gr", stock: 140, precio: 1200 },
];

// Una constante q apunta al contenedor donde se mostrarán los productos en el HTML
const productosContainer = document.getElementById('productos');

// Recorre el arreglo productos y genera el HTML para cada producto
// Esto lo puedo hacer tb con un for clasico y apuntando ej productos[i].nombre
productos.forEach(producto => {
    //Crea un div para el producto y le añade la clase 'producto'
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    // Añade el contenido HTML dentro del div del producto 
    //"producto" es lo q va iterando en cada vuelta del for
    productoDiv.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Stock: <span class="stock">${producto.stock}</span></p>
        <p>Precio: $${producto.precio}</p>
        <input type="number" min="1" max="${producto.stock}" placeholder="Cantidad a comprar" oninput="actualizarTotal(this, ${producto.precio})">
        <p>Total: $<span class="total">0</span></p>
        <button onclick="comprar('${producto.nombre}', this)">COMPRAR</button>
    `;
    //el textbox tiene un evento "oninput" que se dispara al ingresar un dato
    //entonces puedo ir calculando el total    
    
    //agregue un boton en cada producto, y tiene el evento onclick
    //al hacer clic llama a la funcion comprar y le manda 2 parametros, el nombre del
    //proudcto y el boton q se clickeo

    // Añade el div del producto al contenedor de productos
    productosContainer.appendChild(productoDiv);
});

// Función que se llama cuando se hace clic en el botón "COMPRAR"
function comprar(nombre, button) {
    const productoDiv = button.parentElement;//desde q DIV se presiono
    const inputCantidad = productoDiv.querySelector('input').value;
    const stockProducto = productoDiv.querySelector('.stock');
    const stock = parseInt(stockProducto.textContent);//de string a integer
    const cantidad = parseInt(inputCantidad);
    const totalproducto = productoDiv.querySelector('.total');
    const totalproductointeger = parseInt(totalproducto.textContent);//de string a integer

    console.log(totalproducto)
    console.log(totalproductointeger)

    console.log(inputCantidad);
    if (inputCantidad !== ''){
        if (cantidad > 0 && stock >= cantidad) {        
            stockProducto.textContent = stock - cantidad;//resto lo comprado        
            alert(`Compraste ${cantidad} unidades de ${nombre}. Quedan ${stockProducto.textContent} unidades.`);
                        
            totalAcumulado += totalproductointeger; // Acumular el total

            // Actualizar el span con id="totaldecompra"
            document.getElementById('totaldecompra').textContent = totalAcumulado.toFixed(2);

        } else if (cantidad <= 0) {
            alert('La cantidad ingresada debe ser mayor a 0.');
        } else {
            alert('Stock insuficiente.');
        }
    }   
    else{
        alert('Ingrese cantidad');
    }

}//cierra funcion

// Función que actualiza el precio total cuando se cambia la cantidad a comprar
function actualizarTotal(input, precio) {
    const cantidad = input.value;
    const totalCompra = input.parentElement.querySelector('.total');
    const total = cantidad * precio;
    totalCompra.textContent = total.toFixed(2);//redondea a 2 decimales
}
