<?php
require "../models/libros.php"; // Importar el modelo

$libroModel = new Prestamo($pdo); // Instancia del modelo

function obtenerPrestamos() {
    global $prestamoModel;
    echo json_encode($prestamoModel->obtenerTodos());
}

function agregarPrestamo($titulo, $autor, $anio_publicacion) {
    global $libroModel;
    if ($libroModel->agregar($titulo, $autor, $anio_publicacion)) {
        echo json_encode(["message" => "Libro agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el libro"]);
    }
}