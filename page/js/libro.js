async function obtenerLibro(){
try{
const repuesta = await fetch("./backend/routes/api.php");
const libros = await repuesta.json();

const contenedorLibros = document.getElementById("contenedor-libros");
contenedorLibros.innerHTML = mostrarLibros(libros);
}catch (error) {
    
console.error("Error al obtener libros: ", error);
document.getElementById("contenedor-libros").innerHTML = "<p>Error al obtener libros</p>";

    }

}

function mostrarLibros(libros){
    let texto = "";
    libros.forEach(libro => {
        texto += "<h4>$(libro.titulo)</h4>"
        texto += "<p>Autor: $(libro.autor)</p>"
        texto += "<p>Genero: $(libro.genero)</p>"
        texto += "<hr>; // Separador entre libros"
        
    });
    return texto;
}

obtenerLibro(); // Llamada a la función para obtener los libros al cargar la página

