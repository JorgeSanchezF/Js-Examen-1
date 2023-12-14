document.addEventListener("DOMContentLoaded", function () {
    let carritoTable = document.getElementById("carritoTable");
    let carritoBody = document.getElementById("carritoBody");
    let precioTotalElement = document.getElementById("precioTotal");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];//coge de almacenamiento local 

    mostrarCarrito(); //mustra lo que haya en el carrito

    function mostrarCarrito() {
        carritoBody.innerHTML = "";//pone texto vacio dentro de carrito

        carrito.forEach((juego, index) => {//recoge cada elemento del carrito, lo almacena en variables
            let nombre = juego.nombre;
            let precio = juego.precio;
            let cantidad = juego.cantidad;

            let fila = document.createElement("tr");//crea fila de tabla

            let nombreElement = document.createElement("td");//crea elemento dentro de fila
            nombreElement.textContent = nombre;//pone el nombre dentro de el elemento de la tabla nombre

            let precioElement = document.createElement("td");
            precioElement.textContent = `$${precio.toFixed(2)}`;//pone prcio dentro de elemento precio en la tabla

            let cantidadElement = document.createElement("td");
            cantidadElement.textContent = cantidad;//pone cantidad de juego que hay en el carrito dentro de tabla

            let eliminarButton = document.createElement("button");//crea el boton que elimnia dentro de la tabla
            eliminarButton.textContent = "Eliminar";
            eliminarButton.addEventListener("click", function () {
                eliminarDelCarrito(index);
            });

            let eliminarElement = document.createElement("td");
            eliminarElement.appendChild(eliminarButton);

            fila.appendChild(nombreElement);
            fila.appendChild(precioElement);//coloca todo lo creado dentro de la fila
            fila.appendChild(cantidadElement);
            fila.appendChild(eliminarElement);

            carritoBody.appendChild(fila);//mete la fila dentro de la tabla
        });

        mostrarPrecioTotal();// muestra precio total

    }

    function eliminarDelCarrito(index) {

        carrito.splice(index, 1);//corta el array carrito por donde recoja el boton(index)


        localStorage.setItem("carrito", JSON.stringify(carrito));//guarda el carrito despues de cortarlo


        mostrarCarrito();//muestra carrito cambiado
    }

    function mostrarPrecioTotal() {
        let precioTotal = carrito.reduce((total, juego) => {
            return total + juego.precio * juego.cantidad;
        }, 0);

        precioTotalElement.textContent = `Precio Total: ${precioTotal.toFixed(2)} €`;
    }
});
