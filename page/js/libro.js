async function obtenerLibro() {
    try {
        const repuesta = await fetch("../Backend/routes/api.php?seccion=libros");
        const libros = await repuesta.json();

        const contenedorLibros = document.getElementById("contenedor-libros");
        contenedorLibros.innerHTML = mostrarLibros(libros);
    } catch (error) {

        console.error("Error al obtener libros: ", error);
        document.getElementById("contenedor-libros").innerHTML = "<p>Error al obtener libros</p>";

    }

}

function mostrarLibros(libros) {
    console.log(libros);
    let texto = "";
    libros.forEach(libro => {
        texto += `<tr>`
        texto += `<td>${libro.id}</td>`

        texto += `<td>${libro.titulo}</td>`
        texto += `<td>${libro.autor}</td>`
        texto += `<td>${libro.fecha}</td>`
       
        texto += `<td>${libro.disponible}</td>`
        texto += `</tr>`

    });
    return texto;
}

obtenerLibro(); // Llamada a la función para obtener los libros al cargar la página

