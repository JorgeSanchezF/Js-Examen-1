document.addEventListener("DOMContentLoaded", function () {
    const agregarForm = document.getElementById("agregarForm");//recoge  el elemento con id agregarForm (el formulario de introduccion de juego)

    agregarForm.addEventListener("submit", function () {//añade un evento que al enviar los datos coge el nombre y el precio
        const nombre = document.getElementById("nombre").value;
        const precio = parseFloat(document.getElementById("precio").value);

        if (nombre && typeof precio === 'number' && precio > 0) {//comprueba que el nombre y precio están bien introducidos
            juegos.push({ nombre, precio });// mete nuevo juego al array de jeugos


            window.location.href = "juegos.html";//te envia a la pagina de juegos
        } else {
            alert("Por favor, ingresa un nombre y un precio válido.");//si los datos del nuevo juego no son validos muestra mensaje de alerta
        }
    });

});
