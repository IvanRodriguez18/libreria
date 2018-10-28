<?php 
include '../include/funciones.php';
error_reporting(0);
header('Content-Type: application/json');
$conecta = conexionBD();
$libro = limpiarDatos($_POST['titulo']);
$editorial = limpiarDatos($_POST['editorial']);
$precio = limpiarDatos($_POST['precio']);
$autor = limpiarDatos($_POST['autor']);
if (validarDatos($libro, $editorial, $precio, $autor)) 
{
    if ($conecta->connect_errno) {
        $respuesta = ['error' => true];
    }else{
        $stm = $conecta->prepare("INSERT INTO libros VALUES(NULL, ?, ?, ?, ?)");
        $stm->bind_param('ssdi', $libro, $editorial, $precio, $autor);
        $stm->execute();
        if ($conecta->affected_rows <= 0) {
            $respuesta = ['error' => true];
        }
        $respuesta = [];
    }
}else{
    $respuesta = ['error' => true];
}
echo json_encode($respuesta);
?>