let juegos = [
    { nombre: "Darktide", precio: 39.99 },
    { nombre: "Highfleet", precio: 19.99 },//array de juegos, funciona como "base de datos" de donde se extrae la informacion
    { nombre: "Homeworld", precio: 14.99 }
];

document.addEventListener("DOMContentLoaded", function () {
    let juegosSection = document.getElementById("juegosSection");//introduce la seccion de html dentro de la variable juegosSection

    juegos.forEach(juego => {//bucle que rellena el html con el contenido del array
        let nombre = juego.nombre;
        let precio = juego.precio;

        let juegoElement = document.createElement("div");
        juegoElement.classList.add("juego");

        let nombreElement = document.createElement("h2");
        nombreElement.textContent = nombre;

        let precioElement = document.createElement("p");
        precioElement.textContent = `Precio: ${precio.toFixed(2)} €`;

        let botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Agregar al Carrito";
        botonAgregar.addEventListener("click", function () {
            agregarAlCarrito(nombre, precio);

        }
        );

        juegoElement.appendChild(nombreElement);
        juegoElement.appendChild(precioElement);
        juegoElement.appendChild(botonAgregar);

        juegosSection.appendChild(juegoElement);


    });
});

function agregarAlCarrito(nombre, precio) {//funcion que añade al carrito cuando se pulsa el boton
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];//segmento basado en este enlace https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

    let juegoExistente = carrito.find(item => item.nombre === nombre);

    if (juegoExistente) {
        juegoExistente.cantidad += 1;// Si el juego ya está en el carrito, incrementar la cantidad

    } else {
        carrito.push({ nombre, precio, cantidad: 1 });// Si el juego no está en el carrito, agregarlo con cantidad 1

    }
    localStorage.setItem("carrito", JSON.stringify(carrito));//guarda objeto juego dentro de el almacenamiento del carrito

    alert(`${nombre} ha sido añadido al carrito`);//muestra notificacion al pulsar el boton
}
