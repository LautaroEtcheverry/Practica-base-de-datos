async function obtenerUsuario() {
    try {
        const respuesta = await fetch("../Backend/routes/api.php?seccion=usuarios");
        const usuarios = await respuesta.json();

        const contenedorUsuarios = document.getElementById("contenedor-usuarios");
        contenedorUsuarios.innerHTML = mostrarUsuarios(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios: ", error);
        document.getElementById("contenedor-usuarios").innerHTML = "<p>Error al obtener usuarios</p>";
    }
}

function mostrarUsuarios(usuarios) {
    console.log(usuarios);
    let texto = "";
    usuarios.forEach(usuario => {
        texto += `<tr>`;
        texto += `<td>${usuario.id-usuario}</td>`;
        texto += `<td>${usuario.nombre}</td>`;
        texto += `<td>${usuario.email}</td>`;
        texto += `<td>${usuario.telefono}</td>`;
        texto += `</tr>`;
    });
    return texto;
}

obtenerUsuario(); // Llamada a la función para obtener los usuarios al cargar la página