<?php
require "../models/usuario.php"; // Importar el modelo

$usuarioModel = new Usuario($pdo); // Instancia del modelo

function obtenerUsuarios() {
    global $usuarioModel;
    echo json_encode($usuarioModel->obtenerTodos());
}

function agregarUsuario($titulo, $autor, $anio_publicacion) {
    global $libroModel;
    if ($libroModel->agregar($titulo, $autor, $anio_publicacion)) {
        echo json_encode(["message" => "Libro agregado"]);
    } else{
        echo json_encode(["error" => "Error al agregar el libro"]);
    }
}
?>